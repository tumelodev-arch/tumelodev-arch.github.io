import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const ignoredDirectories = new Set([".git", "node_modules", ".venv", "bin", "obj"]);
const failures = [];
let checkedReferences = 0;

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(fullPath));
    else files.push(fullPath);
  }
  return files;
}

function attributes(tag) {
  const values = new Map();
  const pattern = /([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g;
  for (const match of tag.matchAll(pattern)) {
    values.set(match[1].toLowerCase(), match[2] ?? match[3] ?? match[4] ?? "");
  }
  return values;
}

function idsFromHtml(html) {
  const ids = new Set();
  const pattern = /\b(?:id|name)\s*=\s*(?:"([^"]+)"|'([^']+)'|([^\s>]+))/g;
  for (const match of html.matchAll(pattern)) ids.add(match[1] ?? match[2] ?? match[3]);
  return ids;
}

async function resolveLocalReference(sourceFile, rawValue) {
  const value = rawValue.trim();
  if (!value || value.startsWith("#") || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value)) return;

  let decoded;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    failures.push(`${path.relative(root, sourceFile)}: malformed URL encoding in "${value}"`);
    return;
  }

  const [pathname = "", fragment = ""] = decoded.split("#", 2);
  const localPath = pathname.split("?")[0];
  const target = localPath.startsWith("/")
    ? path.resolve(root, localPath.slice(1))
    : path.resolve(path.dirname(sourceFile), localPath || path.basename(sourceFile));

  if (!target.startsWith(root + path.sep) && target !== root) {
    failures.push(`${path.relative(root, sourceFile)}: local URL escapes repository root "${value}"`);
    return;
  }

  let stat;
  try {
    stat = await fs.stat(target);
  } catch {
    failures.push(`${path.relative(root, sourceFile)}: missing local target "${value}"`);
    return;
  }

  let resolved = target;
  if (stat.isDirectory()) {
    resolved = path.join(target, "index.html");
    try { await fs.access(resolved); }
    catch {
      failures.push(`${path.relative(root, sourceFile)}: directory link has no index.html "${value}"`);
      return;
    }
  }
  checkedReferences++;

  if (fragment && /\.html?$/i.test(resolved)) {
    const targetHtml = await fs.readFile(resolved, "utf8");
    if (!idsFromHtml(targetHtml).has(fragment)) {
      failures.push(`${path.relative(root, sourceFile)}: missing fragment "#${fragment}" in ${path.relative(root, resolved)}`);
    }
  }
}

const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith(".html"));
for (const sourceFile of htmlFiles) {
  const html = await fs.readFile(sourceFile, "utf8");
  const tags = /<(?:a|area|img|script|link|source|video|audio|iframe|form)\b[^>]*>/gi;
  for (const match of html.matchAll(tags)) {
    const attrs = attributes(match[0]);
    for (const key of ["href", "src", "action", "poster"]) {
      if (attrs.has(key)) await resolveLocalReference(sourceFile, attrs.get(key));
    }
  }
}

if (failures.length) {
  console.error("Static-site validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Static-site validation passed: ${htmlFiles.length} HTML files and ${checkedReferences} local references checked.`);
}
