function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("7Y9D8");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();const t=n.target,o=parseInt(t.elements.delay.value),r=parseInt(t.elements.step.value),i=parseInt(t.elements.amount.value);console.clear();const s=Array.from({length:i},((n,t)=>function(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}(t+1,o+t*r).then((({position:n,delay:t})=>{e(l).Notify.Success(`✅ Fulfilled promise ${n} in ${t}ms`)}),(({position:n,delay:t})=>{e(l).Notify.Failure(`❌ Rejected promise ${n} in ${t}ms`)}))));Promise.all(s).then((()=>{e(l).Notify.Info("All promises resolved successfully.")}))}));
//# sourceMappingURL=03-promises.1e68279a.js.map