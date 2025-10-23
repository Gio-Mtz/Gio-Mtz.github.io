
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://gio-mtz.github.io/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-BLUXIDYV.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 54463, hash: 'd218d10241b409ab3b38e2500a694017d79c90ee9c5c54c834ba343493eb3a68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17256, hash: 'ec0916c92b56e5044f268109049e8fab907bb7280176dfbeded61fb9cd9a28da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLCZ67NS.css': {size: 77561, hash: 'lnHBzWTRmnQ', text: () => import('./assets-chunks/styles-ZLCZ67NS_css.mjs').then(m => m.default)}
  },
};
