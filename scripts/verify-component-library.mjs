import assert from "node:assert/strict";
import { readFileSync, readdirSync, realpathSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

// Resolve one canonical checkout path so Windows does not load React twice.
const root = realpathSync.native(join(dirname(fileURLToPath(import.meta.url)), ".."));
const require = createRequire(join(root, "package.json"));
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const ts = require("typescript");
const server = await createServer({ root, optimizeDeps: { noDiscovery: true, include: [] }, server: { middlewareMode: true, hmr: false }, appType: "custom" });

try {
  const { categories, componentRegistry, filterComponents, getCategoryCounts, getComponentItem } = await server.ssrLoadModule("/src/components-library/registry.ts");
  const counts = getCategoryCounts();
  assert.equal(new Set(categories.map((item) => item.id)).size, categories.length);
  assert.equal(new Set(componentRegistry.map((item) => item.id)).size, componentRegistry.length);
  assert.equal(new Set(componentRegistry.map((item) => item.slug)).size, componentRegistry.length);
  assert.equal(Object.values(counts).reduce((sum, count) => sum + count, 0), componentRegistry.length);
  assert.equal(filterComponents("all", "  ").length, componentRegistry.length);
  assert.equal(filterComponents("all", "no-such-component-7ac91").length, 0);
  assert.equal(getComponentItem("missing"), undefined);

  for (const item of componentRegistry) {
    assert.ok(categories.some((category) => category.id === item.category));
    assert.ok(item.frame.height > 0);
    assert.equal(getComponentItem(item.id), item);
    assert.ok(filterComponents(item.category, item.tags[0].toUpperCase()).includes(item));
    assert.ok(filterComponents("all", item.title).includes(item));
    assert.ok(filterComponents(item.category, "").every((entry) => entry.category === item.category));

    const source = await item.source();
    const folder = join(root, "src/components-library", item.category);
    const matches = readdirSync(folder).filter((name) => name.endsWith(".tsx") && readFileSync(join(folder, name), "utf8") === source);
    assert.equal(matches.length, 1, `${item.id}: raw source must match exactly one actual component file`);
    const file = ts.createSourceFile(matches[0], source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    const exported = file.statements.filter((statement) => statement.modifiers?.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword));
    assert.equal(exported.length, 1, `${item.id}: one component export`);
    assert.ok(exported[0].modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword), `${item.id}: default export`);
    assert.ok(!/https?:\/\//.test(source), `${item.id}: no external assets`);
    assert.ok(!/Sample content|preview|catalog/i.test(source), `${item.id}: no catalog scaffolding`);

    const path = `/${relative(root, join(folder, matches[0])).replaceAll("\\", "/")}`;
    const { default: Demo } = await server.ssrLoadModule(path);
    const html = renderToStaticMarkup(React.createElement(Demo));
    assert.ok(!html.includes("<img"), `${item.id}: no image dependency`);
    assert.ok(html.includes("focus-visible:ring"), `${item.id}: focus styling`);
    const controls = [...html.matchAll(/aria-controls="([^"]+)"/g)];
    for (const [, target] of controls) assert.ok(html.includes(`id="${target}"`), `${item.id}: valid control target`);
    if (item.frame.scrollable) assert.ok(html.includes("<nav") && html.includes("<dialog"));
    else assert.ok(html.includes("<section") && html.includes("<h1"));
    console.log(`PASS ${item.id}: registry, filtering, exact source, markup`);
  }

  const app = readFileSync(join(root, "src/App.tsx"), "utf8");
  for (const route of ["/", "/explore", "/design/:slug", "/preview/:slug", "/components", "/components/preview/:id", "/motion", "/pricing"]) assert.ok(app.includes(`path="${route}"`), `route preserved: ${route}`);
  assert.ok(app.indexOf('path="/components/preview/:id"') < app.indexOf("<Route element={<MainLayout />}>"));
  console.log("PASS category counts, unique identifiers, empty searches, unknown IDs, and routes");
  console.log("Browser-only checks (keyboard, 360px, reduced motion, clipboard, console) require browser QA.");
} finally {
  await server.close();
}
