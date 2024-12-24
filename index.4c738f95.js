var e=document.querySelector(".spider"),t=document.querySelector(".wall").getBoundingClientRect();document.addEventListener("click",function(n){var c=n.pageX-t.left-25,a=n.pageY-t.top-25;!(c>t.width)&&!(c<0)&&(a>t.height||a<0||(e.style.transform="translate(".concat(c,"px, ").concat(a,"px)")))});
//# sourceMappingURL=index.4c738f95.js.map
