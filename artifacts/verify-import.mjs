import assert from 'node:assert/strict';
import { realpathSync } from 'node:fs';
import { join } from 'node:path';
import { createServer } from 'vite';
import { createRequire } from 'node:module';
const root = realpathSync.native(process.cwd());
const require = createRequire(join(root, 'package.json'));
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const server = await createServer({ root, optimizeDeps: { noDiscovery: true }, server: { middlewareMode: true, hmr: false }, appType: 'custom' });
try {
 const { componentRegistry, categories, getCategoryCounts, filterComponents, getComponentItem } = await server.ssrLoadModule('/src/components-library/registry.ts');
 assert.equal(componentRegistry.length, 90);
 assert.equal(categories.length, 10);
 assert.equal(new Set(componentRegistry.map(x => x.id)).size, 90);
 assert.ok(Object.values(getCategoryCounts()).every(n => n === 9));
 for (const item of componentRegistry) {
  assert.equal(getComponentItem(item.id), item);
  assert.ok(filterComponents(item.category, item.title).includes(item));
  assert.ok((await item.source()).includes(`export function ${item.component.name}`));
  assert.ok(renderToStaticMarkup(React.createElement(item.component)).length > 0);
 }
 console.log('Verified 90 renders, source loaders, unique IDs, filtering, lookup, and 9 entries per category.');
} finally { await server.close(); }

