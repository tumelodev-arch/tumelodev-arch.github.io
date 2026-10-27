import { stat } from 'node:fs/promises';
const paths = ['index.html','css/styles.css','js/main.js'];
let total = 0;
for (const path of paths) total += (await stat(path)).size;
console.log('HTML + CSS + JS:', total, 'bytes');
if (total > 150 * 1024) { console.error('Source budget exceeded: 150 KB'); process.exit(1); }
