import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../css/styles.css', import.meta.url), 'utf8');
const js = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');

test('page has semantic landmarks and skip link', () => {
  assert.match(html, /class="skip-link" href="#main"/);
  assert.match(html, /<main id="main">/);
  assert.match(html, /<nav id="primary-nav"/);
  assert.match(html, /<footer class="site-footer">/);
});
test('page includes all required suites and project cases', () => {
  for (const id of ['home','projects','skills','about','uses','contact','case-negative','case-bug','case-ticket']) assert.match(html, new RegExp('id="' + id + '"'));
});
test('ticket reader prompt is explicitly a placeholder', () => {
  assert.match(html, /Paste the sanitised ticket-reader prompt here/);
  assert.doesNotMatch(html, /Here is my actual ticket-reader prompt/);
});
test('theme, keyboard and reduced-motion support are present', () => {
  assert.match(js, /localStorage/);
  assert.match(js, /ArrowUp/);
  assert.match(js, /e\.key==='Enter'\|\|e\.key===' '/);
  assert.match(css, /prefers-reduced-motion/);
});
test('no cloud provider claims or planned cloud concepts in visible page copy', () => {
  assert.doesNotMatch(html, /AWS|cloud-native|CloudOps AI Assistant|SentinelOps|AgentForge|Cloud Service Router/i);
});
test('interactive elements have accessible labels or text', () => {
  assert.match(html, /aria-label="Filter skills"/);
  assert.match(html, /aria-live="polite"/);
  assert.match(html, /aria-controls="detail-negative"/);
});
