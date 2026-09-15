// Cloud sync layer. Runtime settings are injected during deployment.
(()=>{
  const Cloud=window.MishaCloud={enabled:false};
  Cloud.init=()=>{
    const cfg=window.RUNTIME_SETTINGS||{};
    Cloud.enabled=!!(cfg.endpoint&&cfg.publicToken&&window.supabase?.createClient);
    const node=document.getElementById('cloudbar');
    if(node) node.textContent=Cloud.enabled?'Облачная синхронизация доступна':'Локальный режим';
  };
  window.addEventListener('DOMContentLoaded',Cloud.init);
})();
