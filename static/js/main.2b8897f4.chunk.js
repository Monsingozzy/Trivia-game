(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),i=n(16),r=n.n(i),u=(n(22),n(7),n(5)),a=n(17),o=n.n(a),j=n(0),b=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(""),r=Object(u.a)(i,2),a=r[0],b=r[1],l=Object(c.useState)("Your Result Apper here"),h=Object(u.a)(l,2),d=h[0],O=h[1];Object(c.useEffect)((function(){o.a.get("https://jservice.io/api/random").then((function(e){s(e.data[0])}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:" Question "}),Object(j.jsx)("h1",{children:n.question}),Object(j.jsx)("h3",{children:"Enter your Answer"}),Object(j.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)},value:a}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button_ans",onClick:function(){var e=n.answer.replace(/[^A-Z0-9]+/gi," ");0===a.length?O((function(e){return"Please Enter Answer"})):O(e===a?function(e){return"Right Answer"}:function(e){return"wrong Answer"})},children:"Submit Answer"}),Object(j.jsx)("button",{className:"button_ans",onClick:function(){window.location.reload(!1)},children:"Next Question"})]}),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{className:"result",children:d})})]})};var l=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(b,{})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(l,{})}),document.getElementById("root")),h()},7:function(e,t,n){}},[[42,1,2]]]);
//# sourceMappingURL=main.2b8897f4.chunk.js.map