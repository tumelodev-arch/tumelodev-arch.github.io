(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Theme preference: explicit local choice wins, otherwise CSS follows system preference.
  const themeButton = $('#theme-toggle');
  const setTheme = (theme, save = true) => {
    if (theme === 'system') delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = theme;
    if (save) { try { theme === 'system' ? localStorage.removeItem('tp-theme') : localStorage.setItem('tp-theme', theme); } catch {} }
    const current = document.documentElement.dataset.theme || 'system';
    if (themeButton) { const label = $('span', themeButton); if (label) label.textContent = current; themeButton.setAttribute('aria-label', 'Colour theme: ' + current + '. Activate to switch.'); }
  };
  setTheme(document.documentElement.dataset.theme || 'system', false);
  themeButton?.addEventListener('click', () => {
    const current = document.documentElement.dataset.theme || 'system';
    setTheme(current === 'light' ? 'dark' : current === 'dark' ? 'system' : matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark');
  });

  // Mobile navigation is a normal link list when JavaScript is unavailable.
  const nav = $('#primary-nav'), menuButton = $('.menu-toggle');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(open));
    nav?.classList.toggle('is-open', open);
    const symbol = $('span', menuButton); if (symbol) symbol.textContent = open ? '−' : '＋';
  });
  nav?.addEventListener('click', e => {
    if (e.target.closest('a') && menuButton) { menuButton.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); const s = $('span', menuButton); if (s) s.textContent = '＋'; }
  });

  // Project case files: only one expanded at a time.
  $$('.case-toggle').forEach(button => button.addEventListener('click', () => {
    const target = $('#' + button.getAttribute('aria-controls'));
    const opening = button.getAttribute('aria-expanded') !== 'true';
    $$('.case-toggle').forEach(other => {
      const panel = $('#' + other.getAttribute('aria-controls'));
      other.setAttribute('aria-expanded', 'false');
      if (panel) panel.hidden = true;
      const mark = $('span', other); if (mark) mark.textContent = '＋';
    });
    if (opening && target) { button.setAttribute('aria-expanded', 'true'); target.hidden = false; const mark = $('span', button); if (mark) mark.textContent = '−'; }
  }));

  // Skills filter uses actual row status; native details provide keyboard access to evidence.
  $$('.skill-filters button').forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    $$('.skill-filters button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    $$('.skill-row').forEach(row => { row.hidden = filter !== 'all' && row.dataset.status !== filter; });
  }));

  // Test run output is based on visible content, not fabricated automated checks.
  const runButton = $('#run-all'), runResult = $('#run-result');
  runButton?.addEventListener('click', () => {
    const checks = [
      ['PASS', 'reproduced before changing code', 'pass'],
      ['PASS', 'explained the expected behaviour', 'pass'],
      ['IN PROGRESS', 'reviewing AI output against source', 'progress']
    ];
    $$('.check-strip p').forEach((row, i) => {
      const mark = $('.status-mark', row);
      if (mark) { mark.textContent = checks[i][0]; mark.className = 'status-mark' + (checks[i][2] === 'progress' ? ' status-progress' : ''); }
    });
    const finish = () => { if (runResult) runResult.textContent = 'REPORT: 2 working principles shown, 1 still in progress. Start with the negative test lab case.'; runButton.disabled = false; };
    runButton.disabled = true;
    if (reducedMotion) finish(); else window.setTimeout(finish, 450);
  });

  // Small local command parser. It only navigates to content already on this page.
  const form = $('#console-form'), input = $('#console-input'), output = $('#console-output'), history = [];
  let historyIndex = 0;
  const say = (text) => { const p = document.createElement('p'); p.textContent = text; output?.append(p); if (output) output.scrollTop = output.scrollHeight; };
  const commands = ['help','whoami','projects','open negative-test-lab','open bug-spotter','open ticket-reader','skills','skills --evidence','about','uses','contact','theme dark','theme light','theme system','clear'];
  const runCommand = raw => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    say('$ ' + raw);
    if (command === 'clear') { if (output) output.replaceChildren(); return; }
    if (command === 'help') { say('Commands: ' + commands.join(' | ')); return; }
    if (command === 'whoami') { say('Tumelo Phale. Graduate software engineer in Johannesburg, South Africa.'); return; }
    if (command === 'projects') { say('Three planned case files: negative-test-lab, bug-spotter, ticket-reader. Public repos are not linked until they exist.'); document.querySelector('#projects')?.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth'}); return; }
    if (command.startsWith('open ')) { const name = command.slice(5).replaceAll('_','-'); const map = {'negative-test-lab':'case-negative','bug-spotter':'case-bug','ticket-reader':'case-ticket'}; if (!map[name]) { say('I do not know that case. Try: ' + Object.keys(map).join(', ')); return; } const el = $('#'+map[name]); el?.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth'}); const b = $('.case-toggle', el); if (b?.getAttribute('aria-expanded') !== 'true') b?.click(); return; }
    if (command === 'skills' || command === 'skills --evidence') { say(command.endsWith('--evidence') ? 'Select a row in the skills report to read its evidence.' : 'Filters: all, work, practised, learning. No skill percentages.'); $('#skills')?.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth'}); return; }
    if (['about','uses','contact'].includes(command)) { $('#'+command)?.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth'}); say('Moved to ' + command + '.'); return; }
    if (command.startsWith('theme ')) { const t = command.slice(6); if (['dark','light','system'].includes(t)) { setTheme(t); say('Theme set to ' + t + '.'); } else say('Use theme dark, theme light or theme system.'); return; }
    say('Unknown command. Type help to see the available commands.');
  };
  form?.addEventListener('submit', e => { e.preventDefault(); const value = input.value; if (!value.trim()) return; history.push(value); historyIndex = history.length; runCommand(value); input.value = ''; });
  input?.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp' && history.length) { e.preventDefault(); historyIndex = Math.max(0, historyIndex - 1); input.value = history[historyIndex] || ''; }
    if (e.key === 'ArrowDown' && history.length) { e.preventDefault(); historyIndex = Math.min(history.length, historyIndex + 1); input.value = history[historyIndex] || ''; }
    if (e.key === 'Tab') { e.preventDefault(); const match = commands.find(c => c.startsWith(input.value.toLowerCase())); if (match) input.value = match; }
  });
  $$('.command-chips button').forEach(button => button.addEventListener('click', () => { const cmd = button.dataset.command; if (input) input.value = cmd; runCommand(cmd); }));
  
  // Bug examples are authored for this site. They demonstrate patterns, not live exploits.
  const snippets = [
    {kind:'SQL INJECTION / C#',lines:['var sql = "SELECT * FROM Items WHERE Id = " + id;','using var command = new SqlCommand(sql, connection);','using var reader = command.ExecuteReader();','while (reader.Read()) {','  Console.WriteLine(reader["Name"]);','}'],bad:1,why:'The identifier is concatenated into SQL text. If it contains SQL syntax, the query structure can change.',fix:'using var command = new SqlCommand("SELECT * FROM Items WHERE Id = @id", connection);',test:'Pass a value containing SQL punctuation and verify it is treated as a value, not executable query text.'},
    {kind:'MISSING AUTHORISATION / C#',lines:['var record = await records.FindAsync(id);','if (record is null) return NotFound();','return Ok(record);','// The caller is authenticated.','// Ownership has not been checked.',''],bad:3,why:'Authentication proves who the caller is, not whether they may read this record. The code returns it without checking access.',fix:'if (record.OwnerId != currentUser.Id) return Forbid();',test:'Request another user’s record and verify the server denies access without revealing its contents.'},
    {kind:'CSV FORMULA INJECTION / TypeScript',lines:['function toCsvCell(value: string) {','  const escaped = value.replaceAll('"', '""');','  return `"${escaped}"`;','}','const row = [name, note].map(toCsvCell);','download(row.join(","));'],bad:3,why:'CSV quoting protects delimiters and quotes, but a spreadsheet may still evaluate cells beginning with formula characters.',fix:'Prefix dangerous leading formula characters according to the export policy before CSV quoting.',test:'Export values starting with =, +, - and @, then inspect the raw CSV and test with a spreadsheet-safe workflow.'}
  ];
  let snippetIndex = 0, score = 0, attempts = 0, answered = false;
  const renderSnippet = () => {
    const item = snippets[snippetIndex], code = $('#bug-code'), feedback = $('#bug-feedback');
    if (!code) return;
    code.replaceChildren();
    item.lines.forEach((line,i) => { const span=document.createElement('span'); span.className='code-line'; span.tabIndex=0; span.setAttribute('role','button'); span.dataset.line=String(i+1); const n=document.createElement('b'); n.textContent=String(i+1); span.append(n, document.createTextNode(' '+line)); span.addEventListener('click',()=>chooseLine(i+1)); span.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();chooseLine(i+1);}}); code.append(span); });
    $('#bug-kind').textContent=item.kind; if(feedback) feedback.textContent='Choose a line to see whether your reasoning holds up.'; answered=false;
  };
  const chooseLine = line => {
    if (answered) return;
    answered=true; attempts++;
    const item=snippets[snippetIndex], correct=line===item.bad;
    if(correct) score++;
    $$('.code-line',$('#bug-code')).forEach(el=>{if(Number(el.dataset.line)===item.bad)el.classList.add('selected');});
    const feedback=$('#bug-feedback'); if(!feedback)return; feedback.replaceChildren();
    const p=document.createElement('p');p.className=correct?'good':'bad';p.textContent=correct?'PASS. That is the unsafe line.':'Not quite. Line '+item.bad+' is the unsafe line.';feedback.append(p);
    const why=document.createElement('p');why.textContent=item.why;feedback.append(why);
    const fix=document.createElement('p');fix.append('Safer direction: ');const code=document.createElement('code');code.textContent=item.fix;fix.append(code);feedback.append(fix);
    const test=document.createElement('p');test.textContent='Test the fix: '+item.test;feedback.append(test);
    $('#bug-score').textContent='Score: '+score+' / '+attempts;
  };
  $('#next-bug')?.addEventListener('click',()=>{snippetIndex=(snippetIndex+1)%snippets.length;renderSnippet();});
  renderSnippet();

  // Scroll log is orientation only, and never changes the content.
  const log = $('#run-log'), seen = new Set(['01']);
  if ('IntersectionObserver' in window && log) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const section=entry.target, n=section.dataset.suite;
      if (seen.has(n)) return;
      seen.add(n); const li=document.createElement('li');li.textContent='['+n+'] '+section.id+': loaded';log.append(li);observer.unobserve(section);
    }), {rootMargin:'-20% 0px -60% 0px'});
    $$('.suite').forEach(section=>observer.observe(section));
  }
})();