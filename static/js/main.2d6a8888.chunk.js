(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var s,r=n(6),c=n.n(r),o=n(5),i=n(7),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var b=function(){var t=Object(a.useState)(s.NONE),e=Object(o.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(!1),b=Object(o.a)(c,2),h=b[0],d=b[1],j=function(t){switch(t){case"reverse":d(!h);break;case"sortByLength":r(s.LENGTH);break;case"sortByAlp":r(s.ALPHABET);break;case"reset":r(s.NONE),d(!1);break;default:throw new Error}},N=function(t,e){var n=e.sortType,r=e.isReversed,c=Object(i.a)(t);return c.sort((function(t,e){switch(n){case s.ALPHABET:return t.localeCompare(e);case s.LENGTH:return t.length-e.length;default:return 0}})),r&&c.reverse(),c}(l,{isReversed:h,sortType:n});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:n===s.ALPHABET?"button is-info":"button is-info is-light",onClick:function(){return j("sortByAlp")},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:n===s.LENGTH?"button is-success":"button is-success is-light",onClick:function(){return j("sortByLength")},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:h?"button is-warning":"button is-warning is-light",onClick:function(){return j("reverse")},children:"Reverse"}),h||n!==s.NONE?Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return j("reset")},children:"Reset"}):null]}),Object(u.jsx)("ul",{children:N.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2d6a8888.chunk.js.map