
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Gio-Mtz.github.io/',
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
    'index.csr.html': {size: 54456, hash: 'a5d93fef586e0a824e178aacd10f36e2d1729b72a9b330d49d3254159f28800f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17249, hash: 'e467d040335faf4c9d4a03cb18bc0010fafc8022acc400e5d8c6fb84d2d1d2c4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLCZ67NS.css': {size: 77561, hash: 'lnHBzWTRmnQ', text: () => import('./assets-chunks/styles-ZLCZ67NS_css.mjs').then(m => m.default)}
  },
};
