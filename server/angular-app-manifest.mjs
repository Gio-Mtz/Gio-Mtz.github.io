
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
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
    'index.csr.html': {size: 54458, hash: 'b5ccfab37ff7abe6ac57a5ba1a4b1a2736240f1481e6f3b0f36d7fa9d557b68c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17251, hash: '457c3514026f2bd66731257f71ee867357c99bb79176541cc6de0f31fceee36d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLCZ67NS.css': {size: 77561, hash: 'lnHBzWTRmnQ', text: () => import('./assets-chunks/styles-ZLCZ67NS_css.mjs').then(m => m.default)}
  },
};
