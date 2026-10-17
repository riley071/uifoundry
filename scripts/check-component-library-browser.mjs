import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { createServer as createPortProbe } from "node:net";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Uses an installed browser and Node's built-in WebSocket; installs no packages.
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const binary = ["C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe", "C:/Program Files/Google/Chrome/Application/chrome.exe"].find(existsSync);
assert.ok(binary, "An installed Edge or Chrome browser is required");
const profile = mkdtempSync(join(tmpdir(), "uifoundry-browser-"));
const probe = createPortProbe();
probe.listen(0, "127.0.0.1");
await once(probe, "listening");
const previewPort = probe.address().port;
await new Promise((resolve) => probe.close(resolve));
const baseUrl = `http://127.0.0.1:${previewPort}`;
let serverLog = "";
const server = spawn(process.execPath, [join(root, "node_modules/vite/bin/vite.js"), "preview", "--host", "127.0.0.1", "--port", String(previewPort), "--strictPort"], { cwd: root, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
server.stdout.on("data", (data) => { serverLog += data.toString(); });
server.stderr.on("data", (data) => { serverLog += data.toString(); });
const browser = spawn(binary, ["--headless=new", "--disable-gpu", "--no-first-run", "--disable-background-networking", "--remote-debugging-port=0", `--user-data-dir=${profile}`, "about:blank"], { windowsHide: true, stdio: "ignore" });
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;
let sequence = 0;
const pending = new Map();
const consoleErrors = [];
const exceptions = [];
const checks = [];

async function until(check, label) {
  const start = Date.now();
  while (Date.now() - start < 15000) {
    try { if (await check()) return; } catch { /* Wait for navigation or server readiness. */ }
    await pause(100);
  }
  const diagnostic = socket?.readyState === WebSocket.OPEN ? await evaluate("({path:location.href,scroll:scrollY,frames:[...document.querySelectorAll('iframe')].map(f=>({title:f.title,state:f.contentDocument?.readyState,text:f.contentDocument?.body?.innerText.slice(0,160),rect:{y:f.getBoundingClientRect().y,height:f.getBoundingClientRect().height}})),articles:[...document.querySelectorAll('article')].map(a=>({id:a.id,y:a.getBoundingClientRect().y,height:a.getBoundingClientRect().height}))})").catch(() => null) : null;
  throw new Error(`Timed out: ${label}\n${JSON.stringify(diagnostic)}\n${serverLog}`);
}

function send(method, params = {}) {
  const id = ++sequence;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 15000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text + ": " + result.exceptionDetails.exception?.description);
  return result.result?.value;
}

async function navigate(path) {
  await send("Page.navigate", { url: `${baseUrl}${path}` });
  await until(() => evaluate(`location.pathname + location.search === ${JSON.stringify(path)} && document.readyState === 'complete' && !!document.querySelector('#root')?.children.length`), path);
}

async function key(name, code, modifiers = 0) {
  await send("Input.dispatchKeyEvent", { type: "keyDown", key: name, windowsVirtualKeyCode: code, modifiers });
  await send("Input.dispatchKeyEvent", { type: "keyUp", key: name, windowsVirtualKeyCode: code, modifiers });
}

function pass(label) { checks.push(label); console.log(`PASS ${label}`); }

try {
  await until(async () => (await fetch(`${baseUrl}/components`, { signal: AbortSignal.timeout(1000) })).ok, "preview server");
  await until(() => existsSync(join(profile, "DevToolsActivePort")), "headless browser");
  const port = readFileSync(join(profile, "DevToolsActivePort"), "utf8").split(/\r?\n/)[0];
  const target = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" })).json();
  socket = new WebSocket(target.webSocketDebuggerUrl);
  await once(socket, "open");
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const task = pending.get(message.id);
      pending.delete(message.id);
      clearTimeout(task.timer);
      if (message.error) task.reject(new Error(message.error.message));
      else task.resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown") exceptions.push(message.params.exceptionDetails);
    if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") consoleErrors.push(message.params.args.map((arg) => arg.value ?? arg.description).join(" "));
  });
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");
  // Verify the advertised font fallback without depending on external network access.
  await send("Network.setBlockedURLs", { urls: ["https://fonts.googleapis.com/*", "https://fonts.gstatic.com/*"] });
  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate("/components");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "catalog cards");
  await evaluate("document.querySelector('article').scrollIntoView({block:'start'})");
  await until(() => evaluate("document.querySelector('iframe')?.contentDocument.querySelector('h1')?.textContent.includes('Make room')"), "portal preview");
  assert.equal(await evaluate("document.querySelector('iframe').contentWindow.innerWidth"), 1280);
  assert.ok(await evaluate("document.querySelector('iframe').getBoundingClientRect().width < 1280"));
  pass("1280px desktop canvas scales into the card and renders live content");

  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.textContent==='Mobile 375').click()");
  await until(() => evaluate("document.querySelector('iframe').contentWindow.innerWidth === 375"), "mobile viewport");
  assert.ok(await evaluate("document.querySelector('iframe').contentDocument.documentElement.scrollWidth <= 375"));
  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.getAttribute('aria-label')==='Use dark preview background').click()");
  await until(() => evaluate("document.querySelector('iframe').contentDocument.body.classList.contains('bg-brand-950')"), "dark theme");
  pass("375px viewport and dark background switches update the isolated preview");

  const before = await evaluate("document.querySelector('article').getBoundingClientRect().height");
  await evaluate("[...document.querySelector('article').querySelectorAll('button')].find(b=>b.textContent==='View code').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open] pre code')"), "raw source panel");
  assert.equal(await evaluate("document.querySelector('article').getBoundingClientRect().height"), before);
  assert.ok(await evaluate("document.querySelector('dialog[open] pre code').textContent.includes('export default function SplitProduct')"));
  await evaluate("document.querySelector('dialog[open] [role=tab]').focus()");
  await key("ArrowRight", 39);
  assert.equal(await evaluate("document.querySelector('dialog[open] [role=tab][aria-selected=true]').textContent"), "Setup");
  await key("ArrowLeft", 37);
  for (let index = 0; index < 12; index++) {
    await key("Tab", 9);
    assert.ok(await evaluate("!!document.activeElement.closest('dialog[open]')"));
  }
  await evaluate("Object.defineProperty(navigator, 'clipboard', {configurable:true,value:{writeText:()=>Promise.reject(new Error('QA: permission blocked'))}}); [...document.querySelector('dialog[open]').querySelectorAll('button')].find(b=>b.textContent==='Copy source').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open] textarea')"), "clipboard fallback");
  assert.ok(await evaluate("document.querySelector('dialog[open] [role=status]').textContent.includes('Clipboard blocked')"));
  await key("Escape", 27);
  await until(() => evaluate("!document.querySelector('dialog[open]')"), "close source dialog");
  assert.equal(await evaluate("document.activeElement.textContent"), "View code");
  pass("code modal: exact source, keyboard tabs, focus trap, Escape, focus return, blocked-clipboard fallback, no card layout shift");

  await navigate("/components?category=heroes&q=device");
  await until(() => evaluate("document.querySelectorAll('article').length === 1"), "URL filters");
  await navigate("/components?category=footers&q=anything");
  await until(() => evaluate("document.querySelector('[role=tabpanel]')?.textContent.includes('coming soon')"), "empty category");
  await evaluate("[...document.querySelectorAll('button')].find(b=>b.textContent==='Clear filters').click()");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "clear filters");
  await evaluate("document.querySelector('[role=tablist][aria-label=\"Component categories\"] [role=tab]').focus()");
  await key("ArrowRight", 39);
  await until(() => evaluate("location.search.includes('category=heroes') && document.querySelector('[role=tab][aria-selected=true]').textContent.includes('Heroes')"), "category keyboard tabs");
  pass("URL search/category filters, clear empty state, and arrow-key category tabs");

  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 300, deviceScaleFactor: 1, mobile: false });
  await evaluate("window.scrollTo(0,0)");
  await until(() => evaluate("document.querySelectorAll('iframe').length === 0"), "offscreen previews unmounted");
  pass("offscreen previews unmount through IntersectionObserver");

  await send("Emulation.setDeviceMetricsOverride", { width: 1360, height: 1000, deviceScaleFactor: 1, mobile: false });
  await navigate("/components");
  await until(() => evaluate("document.querySelectorAll('article').length === 2"), "desktop screenshot cards");
  await evaluate("document.querySelector('article').scrollIntoView({block:'center'})");
  await until(() => evaluate("!!document.querySelector('iframe')?.contentDocument.querySelector('h1')"), "desktop screenshot");
  mkdirSync(join(root, "artifacts"), { recursive: true });
  const desktop = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(join(root, "artifacts/component-library-step0-desktop.png"), Buffer.from(desktop.data, "base64"));

  await send("Emulation.setDeviceMetricsOverride", { width: 360, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  await navigate("/components/preview/hero-split-product");
  await until(() => evaluate("!!document.querySelector('h1')"), "full hero");
  assert.ok(await evaluate("document.documentElement.scrollWidth <= 360"));
  assert.equal(await evaluate("document.querySelectorAll('footer').length"), 0);
  assert.ok(await evaluate("[...document.querySelectorAll('a,button')].every(el=>el.getBoundingClientRect().height>=44)"));
  assert.equal(await evaluate("getComputedStyle(document.querySelector('a')).transitionDuration"), "0s");
  const mobile = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
  writeFileSync(join(root, "artifacts/component-library-step0-mobile.png"), Buffer.from(mobile.data, "base64"));
  pass("full hero: 360px without horizontal overflow, 44px controls, reduced motion, no site chrome");

  await navigate("/components/preview/navigation-sticky-glass");
  await until(() => evaluate("!!document.querySelector('header button[aria-haspopup=dialog]')"), "full navigation");
  assert.ok(await evaluate("document.documentElement.scrollWidth <= 360"));
  await evaluate("document.querySelector('button[aria-haspopup=dialog]').click()");
  await until(() => evaluate("!!document.querySelector('dialog[open]')"), "mobile drawer");
  for (let index = 0; index < 8; index++) { await key("Tab", 9); assert.ok(await evaluate("!!document.activeElement.closest('dialog[open]')")); }
  await key("Escape", 27);
  assert.equal(await evaluate("document.activeElement.textContent"), "Menu");
  await evaluate("window.scrollTo(0,200)");
  await until(() => evaluate("document.querySelector('header').classList.contains('bg-white/95')"), "scroll style");
  assert.equal(await evaluate("getComputedStyle(document.querySelector('header')).transitionDuration"), "0s");
  pass("navigation: 360px, scroll state, drawer focus trap, Escape/focus return, reduced motion");

  await navigate("/components/preview/not-found");
  await until(() => evaluate("document.querySelector('h1')?.textContent === 'Component not found'"), "unknown preview ID");
  assert.deepEqual(exceptions, [], "No uncaught browser exceptions");
  assert.deepEqual(consoleErrors, [], "No console.error calls");
  pass("unknown preview IDs handled; no uncaught browser exceptions or console.error calls");
  writeFileSync(join(root, "artifacts/component-library-step0-browser-checks.json"), JSON.stringify({ checks, consoleErrors, exceptions, browser: binary, profile }, null, 2));
} finally {
  if (socket?.readyState === WebSocket.OPEN) {
    try { await send("Browser.close"); } catch { /* Browser may close its socket before replying. */ }
    socket.close();
  }
  for (const task of pending.values()) clearTimeout(task.timer);
  browser.kill();
  server.kill();
}
