if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6db16f92"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-108a3443.js",revision:null},{url:"assets/index-d8b5805c.css",revision:null},{url:"index.html",revision:"21344cab49390cd3b9bc5352daa51a3b"},{url:"registerSW.js",revision:"d2f30ca41926167b14efbfbb592981dc"},{url:"manifest.webmanifest",revision:"c17b56a8167a4b8261666c19b054cc39"}],{}),e.cleanupOutdatedCaches()}));
