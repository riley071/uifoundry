import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
import Module from 'node:module';
import path from 'node:path';

// Render the actual pages and verify that every catalog entry has a template home.
const entry = `
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import CreativeTemplate from './src/designs/collection/CreativeTemplate';
import { templateThemes } from './src/designs/collection/themes';
import { templateLibraries } from './src/designs/collection/library';
import { componentRegistry } from './src/components-library/registry';
import { effects } from './src/effects/catalog';
import { motionDemos } from './src/motion-native/demos';
import { designs } from './src/data/designs';
import BusinessTemplate from './src/designs/business/BusinessTemplate';
import { businessThemes, legacyPalettes } from './src/designs/business/data';
import { parseProduct } from './src/designs/business/LegacyDesignShell';
import AutoPartsPro from './src/designs/AutoPartsPro';
import BakeBloom from './src/designs/BakeBloom';
import TravelExplorer from './src/designs/TravelExplorer';
import NordicLiving from './src/designs/NordicLiving';
import HavenRealEstate from './src/designs/HavenRealEstate';
import LayerPoultry from './src/designs/LayerPoultry';
import CarBooking from './src/designs/CarBooking';
import RoofingPro from './src/designs/RoofingPro';
assert.equal(templateThemes.length, 10);
assert.equal(designs.length, 28);
assert.equal(businessThemes.length, 10);
assert.equal(businessThemes.filter(theme => ['school','primary'].includes(theme.kind)).length, 2);
assert.equal(businessThemes.filter(theme => ['salon','color-studio'].includes(theme.kind)).length, 2);
for (const design of designs) { assert.ok(!('likes' in design) && !('views' in design), 'No fabricated engagement metrics'); }
for (const theme of businessThemes) {
  const html = renderToStaticMarkup(createElement(BusinessTemplate, { slug: theme.slug }));
  assert.ok(html.includes('biz-' + theme.kind), theme.slug + ': distinct business layout');
  assert.ok(html.includes('id="collection"') && html.includes('id="questions"') && html.includes('id="connect"'), theme.slug + ': navigation targets');
  assert.ok(html.includes('type="email"') && html.includes('type="date"'), theme.slug + ': working enquiry fields');
  assert.ok(fs.existsSync('public/business/' + theme.slug + '.svg'), theme.slug + ': thumbnail');
}
for (const Component of [AutoPartsPro,BakeBloom,TravelExplorer,NordicLiving,HavenRealEstate,LayerPoultry,CarBooking,RoofingPro]) {
  const html = renderToStaticMarkup(createElement(Component));
  assert.ok(html.includes('legacy-design-shell') && html.includes('business-dialog'), 'Repaired legacy design');
}
for (const brand of legacyPalettes) assert.ok(fs.existsSync('public/business/' + brand.slug + '.svg'), brand.slug + ': image fallback');
assert.deepEqual(parseProduct('Test brake pads', '$89'), { name: 'Test brake pads', currency: '$', price: 89 });
assert.equal(parseProduct('Chair', '€1,240')?.price, 1240);
assert.equal(parseProduct('Consultation', 'Ask for a quote'), null);
for (const [key, catalog] of [['sections',componentRegistry],['effects',effects],['motion',motionDemos]]) {
  const assigned = templateLibraries.flatMap(library => library[key].map(item => item.id));
  assert.equal(assigned.length, catalog.length, key + ': coverage count');
  assert.equal(new Set(assigned).size, catalog.length, key + ': no duplicates');
  assert.deepEqual([...assigned].sort(), catalog.map(item => item.id).sort(), key + ': exact coverage');
}
for (const theme of templateThemes) {
  const html = renderToStaticMarkup(createElement(CreativeTemplate, { slug: theme.slug }));
  assert.ok(html.includes('theme-' + theme.layout), theme.slug + ': distinct layout');
  assert.ok(html.includes('id="offering"') && html.includes('id="playroom"'), theme.slug + ': working navigation targets');
  assert.ok(html.includes('template-dialog') && html.includes('type="email"'), theme.slug + ': enquiry form');
  assert.ok(!html.includes('coming soon'), theme.slug + ': complete content');
  assert.equal(designs.filter(design => design.slug === theme.slug).length, 1, theme.slug + ': catalog entry');
  assert.ok(fs.readFileSync('public/templates/' + theme.slug + '.svg','utf8').includes('<svg'), theme.slug + ': thumbnail');
  const library = templateLibraries.find(entry => entry.slug === theme.slug);
  assert.ok(library.sections.length && library.effects.length && library.motion.length, theme.slug + ': all three libraries');
}
console.log('Passed: 10 rendered templates, 28 Explore designs, 10 thumbnails, complete coverage of ' + componentRegistry.length + ' UI components, ' + effects.length + ' effects, and ' + motionDemos.length + ' motion recipes.');
`;
const result = await build({
  stdin: { contents: entry, loader: 'tsx', resolveDir: process.cwd(), sourcefile: 'verify-templates.tsx' },
  bundle: true, platform: 'node', format: 'cjs', jsx: 'automatic', write: false, logLevel: 'silent',
  plugins: [{ name: 'ssr-source-loader', setup(api) {
    api.onLoad({ filter: /\.[jt]sx?$/ }, async ({ path: filename }) => {
      if (!filename.includes(`${path.sep}src${path.sep}`)) return;
      const contents = await readFile(filename, 'utf8');
      if (!contents.includes('import.meta.glob')) return;
      return { contents: contents.replace(/import\.meta\.glob(?:<[^>]+>)?\([\s\S]*?\);/g, '{};'), loader: filename.endsWith('tsx') ? 'tsx' : 'ts' };
    });
    api.onLoad({ filter: /\.css$/ }, () => ({ contents: '', loader: 'js' }));
  } }],
});
const verification = new Module(path.resolve('verify-templates.cjs'));
verification.filename = path.resolve('verify-templates.cjs');
verification.paths = Module._nodeModulePaths(process.cwd());
verification._compile(result.outputFiles[0].text, verification.filename);
