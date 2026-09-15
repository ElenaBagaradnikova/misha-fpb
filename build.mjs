import fs from 'node:fs';
import path from 'node:path';

const out='dist';
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(path.join(out,'js'),{recursive:true});
fs.cpSync('css',path.join(out,'css'),{recursive:true});
fs.cpSync('data',path.join(out,'data'),{recursive:true});
fs.copyFileSync('index.html',path.join(out,'index.html'));
fs.copyFileSync('js/app.js',path.join(out,'js','app.js'));
fs.copyFileSync('js/cloud.js',path.join(out,'js','cloud.js'));
const settings={endpoint:process.env.CLOUD_ENDPOINT||'',publicToken:process.env.CLOUD_PUBLIC||''};
fs.writeFileSync(path.join(out,'js','runtime.js'),`window.RUNTIME_SETTINGS=${JSON.stringify(settings)};\n`);
