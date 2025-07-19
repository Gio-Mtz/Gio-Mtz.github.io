
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://Gio-Mtz.github.io/Gio-Mtz.github.io/',
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
    'index.csr.html': {size: 54481, hash: '608aa70cfbbe898f3355b17d399d8c5a17cd0a03edf9e6974f1b06f504bf3532', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17274, hash: '940694698166481552faad7bb53dded16c51a3d0ca5e6b0d9e51ee38cacc5fbf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZLCZ67NS.css': {size: 77561, hash: 'lnHBzWTRmnQ', text: () => import('./assets-chunks/styles-ZLCZ67NS_css.mjs').then(m => m.default)}
  },
};
