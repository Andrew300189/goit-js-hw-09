!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");document.querySelector(".form").addEventListener("submit",(function(n){n.preventDefault();var t=n.target,o=parseInt(t.elements.delay.value),r=parseInt(t.elements.step.value),l=parseInt(t.elements.amount.value);console.clear();var a=Array.from({length:l},(function(n,t){var l,a,s;return(l=t+1,a=o+t*r,s=Math.random()>.3,new Promise((function(e,n){setTimeout((function(){s?e({position:l,delay:a}):n({position:l,delay:a})}),a)}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.Success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))}),(function(n){var t=n.position,o=n.delay;e(i).Notify.Failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))}))}));Promise.all(a).then((function(){e(i).Notify.Info("All promises resolved successfully.")}))}))}();
//# sourceMappingURL=03-promises.16b18e1b.js.map
