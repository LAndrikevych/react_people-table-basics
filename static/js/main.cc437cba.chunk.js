(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(8),j=c.n(n),s=c(5),r=c(2),a=c(0),b=c(1),l=function(){return Object(b.jsx)("h1",{className:"title",children:"Home Page"})},h=function(){return Object(b.jsx)("h1",{children:"Page not found"})},i=c(4);var d=function(e){var t=e.person;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t.name}),Object(b.jsx)("td",{children:t.sex}),Object(b.jsx)("td",{children:t.born}),Object(b.jsx)("td",{children:t.died}),Object(b.jsx)("td",{children:t.motherName}),Object(b.jsx)("td",{children:t.fatherName})]})},o=function(e){var t=e.people;return Object(b.jsxs)("table",{className:"table is-bordered",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Name"}),Object(b.jsx)("th",{children:"Sex"}),Object(b.jsx)("th",{children:"Born"}),Object(b.jsx)("th",{children:"Died"}),Object(b.jsx)("th",{children:"Mother"}),Object(b.jsx)("th",{children:"Father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(d,{person:e},e.slug)}))})]})},O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(n)}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"People Page"}),c&&Object(b.jsx)(o,{people:c})]})},x=(c(14),c(15),function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(s.b,{className:"navbar-item",to:"/",children:"Home page"}),Object(b.jsx)(s.b,{className:"navbar-item",to:"/people",children:"People page"})]})}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",element:Object(b.jsx)(l,{})}),Object(b.jsx)(r.b,{path:"/home",element:Object(b.jsx)(r.a,{to:"/",replace:!0})}),Object(b.jsx)(r.b,{path:"/people",element:Object(b.jsx)(O,{})}),Object(b.jsx)(r.b,{path:"*",element:Object(b.jsx)(h,{})})]})]})});j.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cc437cba.chunk.js.map