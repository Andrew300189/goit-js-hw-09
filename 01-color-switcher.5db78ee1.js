!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;t.addEventListener("click",(function(){a||(a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)),t.classList.add("active"),e.classList.remove("active")})),e.addEventListener("click",(function(){clearInterval(a),a=null,e.classList.add("active"),t.classList.remove("active")}))}();
//# sourceMappingURL=01-color-switcher.5db78ee1.js.map