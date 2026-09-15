// Supabase cloud accounts and cross-device sync for misha-fpb.
(()=>{
  const KEY='misha-fp-v3';
  const C=window.MishaCloud={enabled:false,client:null,session:null,membership:null,studentId:null};
  let timer=null;
  const $=id=>document.getElementById(id);
  const esc=v=>String(v??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  function norm(s){s=(s&&typeof s==='object')?s:{};['answers','reviews','steps','practice','videoNotes','challenges'].forEach(k=>s[k]=s[k]||{});s.activity=Array.isArray(s.activity)?s.activity:[];return s}
  function read(){try{return norm(JSON.parse(localStorage.getItem(KEY)||'{}'))}catch{return norm({})}}
  function write(s){localStorage.setItem(KEY,JSON.stringify(norm(s)))}
  function hasData(s){s=norm(s);return ['answers','steps','practice','videoNotes','challenges'].some(k=>Object.keys(s[k]).length)||(s.activity||[]).length}
  function bar(html){const n=$('cloudbar');if(n)n.innerHTML=html}
  function guest(note=''){
    bar(`<div class=cloudbox><div><b>☁ Облачный аккаунт</b><div class=muted>${note||'Войди, чтобы прогресс синхронизировался между устройствами.'}</div></div><div class=cloudform><input id=cloud-name placeholder="Имя"><input id=cloud-email type=email autocomplete=email placeholder="Email"><input id=cloud-pass type=password autocomplete=current-password placeholder="Пароль"><button class="btn primary" onclick="MishaCloud.signIn()">Войти</button><button class=btn onclick="MishaCloud.signUp()">Регистрация</button></div></div>`)
  }
  function setup(){
    bar(`<div class=cloudbox><div><b>Аккаунт подключён</b><div class=muted>Выбери роль.</div></div><div class=cloudsetup><button class="btn primary" onclick="MishaCloud.createFamily()">Я родитель · создать кабинет</button><div class=cloudjoin><input id=join-code placeholder="Код приглашения"><input id=student-name placeholder="Имя ученика" value="Миша"><button class=btn onclick="MishaCloud.joinFamily()">Я ученик · присоединиться</button></div><button class=btn onclick="MishaCloud.signOut()">Выйти</button></div></div>`)
  }
  function member(extra=''){
    const parent=C.membership?.member_role==='parent';
    bar(`<div class="cloudbox goodbox"><div><b>☁ ${parent?'Родительский кабинет':'Миша · синхронизация включена'}</b><div class=muted>${parent?'Прогресс Миши загружается из общей базы.':'Ответы автоматически сохраняются в облаке.'}</div></div><div>${extra}${parent?'<button class=btn onclick="MishaCloud.makeInvite()">Код для Миши</button> ':''}<button class=btn onclick="MishaCloud.syncNow()">Обновить</button> <button class=btn onclick="MishaCloud.signOut()">Выйти</button></div></div>`)
  }
  async function identity(){
    const {data,error}=await C.client.from('household_members').select('household_id,member_role').eq('user_id',C.session.user.id).maybeSingle();
    if(error)throw error;C.membership=data||null;return C.membership
  }
  async function getState(studentId){
    const {data,error}=await C.client.from('student_states').select('student_id,household_id,state,updated_at').eq('student_id',studentId).maybeSingle();
    if(error)throw error;return data||null
  }
  async function getReviews(studentId){
    const {data,error}=await C.client.from('parent_reviews').select('lesson_id,score,comment,updated_at').eq('student_id',studentId);
    if(error)throw error;return data||[]
  }
  function mergeReviews(s,rows){s=norm(s);for(const r of rows)s.reviews[r.lesson_id]={score:r.score,comment:r.comment||'',at:r.updated_at};return s}
  async function push(){
    if(C.membership?.member_role!=='student'||!C.session)return;
    const {error}=await C.client.from('student_states').upsert({student_id:C.session.user.id,household_id:C.membership.household_id,state:read(),updated_at:new Date().toISOString()},{onConflict:'student_id'});
    if(error)console.error(error)
  }
  function queuePush(){clearTimeout(timer);timer=setTimeout(push,800)}
  async function syncStudent(){
    const local=read(),uid=C.session.user.id;
    const [remote,rv]=await Promise.all([getState(uid),getReviews(uid)]);
    if(!remote||!hasData(remote.state)){
      write(mergeReviews(local,rv));if(hasData(local))await push();member();return false
    }
    const next=mergeReviews(norm(remote.state),rv),changed=JSON.stringify(next)!==JSON.stringify(local);
    write(next);member(changed?'<span class="badge good">обновлено</span> ':'');return changed
  }
  async function syncParent(){
    const hid=C.membership.household_id;
    const {data,error}=await C.client.from('household_members').select('user_id,joined_at').eq('household_id',hid).eq('member_role','student').order('joined_at',{ascending:true});
    if(error)throw error;
    if(!data?.length){C.studentId=null;member('<span class="badge warn">Миша ещё не подключён</span> ');return false}
    C.studentId=data[0].user_id;
    const [remote,rv]=await Promise.all([getState(C.studentId),getReviews(C.studentId)]);
    const next=mergeReviews(norm(remote?.state||{}),rv),changed=JSON.stringify(next)!==JSON.stringify(read());
    write(next);member('<span class="badge good">данные Миши</span> ');return changed
  }
  C.signUp=async()=>{
    const email=$('cloud-email')?.value.trim(),password=$('cloud-pass')?.value||'',display_name=$('cloud-name')?.value.trim()||'';
    if(!email||password.length<6)return alert('Укажи email и пароль не короче 6 символов.');
    const {data,error}=await C.client.auth.signUp({email,password,options:{data:{display_name}}});
    if(error)return guest(esc(error.message));
    if(data.session){C.session=data.session;await boot()}else guest('Проверь письмо подтверждения. После подтверждения вернись на сайт и войди.')
  };
  C.signIn=async()=>{
    const email=$('cloud-email')?.value.trim(),password=$('cloud-pass')?.value||'';
    if(!email||!password)return alert('Укажи email и пароль.');
    const {data,error}=await C.client.auth.signInWithPassword({email,password});
    if(error)return guest(esc(error.message));C.session=data.session;sessionStorage.removeItem('misha-cloud-reloaded');await boot()
  };
  C.signOut=async()=>{await C.client.auth.signOut();C.session=C.membership=null;C.studentId=null;guest('Выход выполнен.')};
  C.createFamily=async()=>{
    const parent_name=C.session.user.user_metadata?.display_name||'Родитель';
    const household_name=prompt('Название семейного кабинета','Миша — учеба')||'Миша — учеба';
    const {error}=await C.client.rpc('create_family_household',{household_name,parent_name});
    if(error)return alert(error.message);await boot()
  };
  C.joinFamily=async()=>{
    const invite_code=$('join-code')?.value.trim(),student_name=$('student-name')?.value.trim()||'Миша';
    if(!invite_code)return alert('Введи код приглашения.');
    const {error}=await C.client.rpc('join_household_by_code',{invite_code,student_name});
    if(error)return alert(error.message);sessionStorage.removeItem('misha-cloud-reloaded');await boot()
  };
  C.makeInvite=async()=>{
    if(C.membership?.member_role!=='parent')return;
    const {data,error}=await C.client.rpc('create_student_invite',{hid:C.membership.household_id});
    if(error)return alert(error.message);const code=String(data||'');try{await navigator.clipboard.writeText(code)}catch{}alert(`Код приглашения для Миши: ${code}\n\nДействует 7 дней и используется один раз.`)
  };
  C.saveReview=async id=>{
    if(C.membership?.member_role!=='parent'||!C.studentId)return;
    const r=read().reviews[id];if(!r)return;
    const {error}=await C.client.from('parent_reviews').upsert({household_id:C.membership.household_id,student_id:C.studentId,lesson_id:id,reviewer_id:C.session.user.id,score:r.score,comment:r.comment||'',updated_at:new Date().toISOString()},{onConflict:'student_id,lesson_id'});
    if(error)alert(error.message)
  };
  C.syncNow=async()=>{
    try{const changed=C.membership?.member_role==='student'?await syncStudent():await syncParent();if(changed)location.reload();else window.renderStudy?.()}catch(e){alert(e.message||e)}
  };
  function hooks(){
    if(window.__mishaCloudHooks)return;window.__mishaCloudHooks=true;
    if(typeof window.save==='function'){const old=window.save;window.save=function(){old();if(C.membership?.member_role==='student')queuePush()}}
    if(typeof window.review==='function'){const old=window.review;window.review=async function(id){old(id);if(C.membership?.member_role==='parent')await C.saveReview(id)}}
    const oldParent=window.parentLogin;
    window.parentLogin=async function(btn){
      if(!C.enabled)return oldParent?.(btn);
      if(!C.session){guest('Сначала войди в родительский аккаунт.');$('cloudbar')?.scrollIntoView({behavior:'smooth'});return}
      if(C.membership?.member_role!=='parent')return alert('Этот аккаунт не является родительским.');
      const changed=await syncParent();if(changed){sessionStorage.setItem('misha-open-parent','1');location.reload();return}window.showView('parent',btn)
    }
  }
  async function boot(){
    if(!C.session)return guest();hooks();const m=await identity();if(!m)return setup();
    const changed=m.member_role==='student'?await syncStudent():await syncParent();
    if(changed&&!sessionStorage.getItem('misha-cloud-reloaded')){sessionStorage.setItem('misha-cloud-reloaded','1');location.reload();return}
    if(sessionStorage.getItem('misha-open-parent')==='1'&&m.member_role==='parent'){sessionStorage.removeItem('misha-open-parent');const btn=[...document.querySelectorAll('.tab')].find(x=>x.textContent.includes('родителя'));if(btn)window.showView('parent',btn)}
  }
  C.init=async()=>{
    try{
      const cfg=window.MISHA_SUPABASE;
      if(!cfg?.url||!cfg?.key||!window.supabase?.createClient)throw new Error('Публичная конфигурация облака не загрузилась');
      C.client=window.supabase.createClient(cfg.url,cfg.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});C.enabled=true;hooks();
      const {data:{session}}=await C.client.auth.getSession();C.session=session;
      C.client.auth.onAuthStateChange((_e,s)=>{C.session=s;if(s)boot();else guest()});
      if(session)await boot();else guest()
    }catch(e){bar(`<div class="cloudbox badbox"><div><b>Облако временно недоступно</b><div class=muted>${esc(e.message||e)}</div></div><button class=btn onclick="location.reload()">Повторить</button></div>`)}
  };
  window.addEventListener('DOMContentLoaded',C.init);
})();
