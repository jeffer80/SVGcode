if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/colorworker.86db1374.js",revision:"6a3fa09ecc48503f08e7a06968b1b58e"},{url:"assets/de.58feef74.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/directory-open.1e94465d.js",revision:"dae87d4c77fc76836bc8776282078dd0"},{url:"assets/directory-open.2fe4b6a5.js",revision:"0904e4f1f707b16981dda0785811a716"},{url:"assets/directory-open.91239a8f.js",revision:"3704c8033407dacd2f83782fd94d61e8"},{url:"assets/en-US.94f890ac.js",revision:"f6d70ff925a87d856a9557135705598c"},{url:"assets/file-open.05d00c00.js",revision:"4131ab234075af3fd1c9306cd6c7a017"},{url:"assets/file-open.1fe7b44c.js",revision:"d51b4be21a22ab437492eb0a4ad3620b"},{url:"assets/file-open.c1794569.js",revision:"3082c21e08091af37671a706aca8146f"},{url:"assets/file-save.72f7afaf.js",revision:"6284d014eb4142c9a049882c953521e7"},{url:"assets/file-save.f4966a97.js",revision:"646357c9f2a1aa5d8e4ac873e9b4a4cb"},{url:"assets/file-save.fb4972a3.js",revision:"c1d532eea8195b06c0d5fb70d420e0a4"},{url:"assets/index.0b62eb61.css",revision:"5b8d3cb3c4ee541e599c639450a0e5ef"},{url:"assets/index.9680c3ce.js",revision:"f6257158b8a5ca10260113f538b8810d"},{url:"assets/monochromeworker.01b4b227.js",revision:"46d5987d97f8ff025b2c12745573f0ed"},{url:"assets/svgoworker.9a962e37.js",revision:"bb7a983f3de80448528461fba1c29f68"},{url:"assets/vendor.249e7dc8.js",revision:"4269687366571a43cb59ca2ba80405a3"},{url:"index.html",revision:"5bea55af1b7e2a6d12ec3f12ff6af97a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
