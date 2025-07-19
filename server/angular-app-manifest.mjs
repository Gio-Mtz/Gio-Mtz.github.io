
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-IORQOBF2.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 54458, hash: 'dd172500187974c99897fa00e87352cc5893240080eb195cebde0ed293626c80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17251, hash: '12486ee70b1061d7690a24ccd68256f29d12bd639adbfa019c40f4599f30b735', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLCZ67NS.css': {size: 77561, hash: 'lnHBzWTRmnQ', text: () => import('./assets-chunks/styles-ZLCZ67NS_css.mjs').then(m => m.default)}
  },
};
