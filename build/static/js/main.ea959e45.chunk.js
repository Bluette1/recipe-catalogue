(this["webpackJsonprecipe-catalogue"]=this["webpackJsonprecipe-catalogue"]||[]).push([[0],{24:function(e,t,c){},31:function(e,t,c){},41:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),i=c(19),s=c.n(i),l=c(6),h=c(12),j=c(15),d=c(43),o=c(13),b=c(30),u=c(11),O=c(18),f=c.n(O),x="CHANGE_FILTER",g="HIDE_MEAL",m="HIGHLIGHT_MEAL",p="REGISTER_MEALS",v=[],y=function(e,t,c){var n=e.findIndex((function(e){return e.idMeal===t})),a=e[n];return a[c]=c,[].concat(Object(u.a)(e.slice(0,n)),[a],Object(u.a)(e.slice(n+1)))};function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.meals?[].concat(Object(u.a)(f.a.cloneDeep(e)),Object(u.a)(t.meals)):Object(u.a)(f.a.cloneDeep(e));case m:var c=t.id,n=Object(u.a)(f.a.cloneDeep(e));return y(n,c,"highlight");case g:var a=t.id,r=Object(u.a)(f.a.cloneDeep(e));return y(r,a,"hide");default:return e}}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.filter;default:return e}},w=function(e){return Object(o.c)({router:Object(j.b)(e),meals:N,filter:M})},C=Object(d.a)();c(31);var E,A=c(8),I=c(7),R=c.n(I),k=c(14),S=c.n(k),T=(c(86),c(44)),L=c.n(T),F=function(e){var t=e.meal,c=e.highlightMeal,a=e.hideFromList,r=t.strMeal,i=t.strCategory,s=t.strMealThumb,l=t.strTags,h=t.strArea,j=t.strYoutube,d=t.strInstructions,o=t.idMeal;return Object(n.jsxs)("div",{className:L()("meal-row",t.highlight&&"highlighted",t.hide&&"hidden"),children:[Object(n.jsxs)("div",{className:"title-category",children:[Object(n.jsx)("p",{className:"category",children:i}),Object(n.jsx)("p",{className:"area category",children:h}),Object(n.jsx)("h4",{className:"title",children:r})]}),Object(n.jsx)("div",{className:"image-area",style:{backgroundImage:"url(".concat(s,")"),backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%",backgroundSize:"cover"}}),Object(n.jsxs)("div",{className:"right",children:[Object(n.jsxs)("h4",{className:"tags",children:["Tags:\xa0",l]}),Object(n.jsx)("a",{href:"/details?img=".concat(s,"&t=").concat(r,"\n  &i=").concat(function(){for(var e="",c=Object.keys(t),n=0;n<c.length;n+=1)if(c[n].includes("strIngredient")&&null!==t[c[n]]&&""!==t[c[n]]){var a=c[n].slice(-1);e+="".concat(t[c[n]],": ").concat(t["strMeasure".concat(a)],", ")}return e.slice(0,-2)}(),"&y=").concat(j,"&ins=").concat(d),children:Object(n.jsx)("button",{type:"button",className:"details",children:"View details"})}),Object(n.jsx)("button",{type:"button",className:"hide",onClick:function(){return a(o)},children:"Hide from list"}),Object(n.jsx)("button",{type:"button",className:"highlight",onClick:function(){return c(o)},children:"Highlight meal"})]})]})},H=function(e){return{type:x,filter:e}},B=function(e){return{type:p,meals:e}},G=function(e){return{type:g,id:e}},D=function(e){return{type:m,id:e}},Y=(c(41),Object(h.e)(Object(l.c)((function(e){var t=e.filter;return{meals:function(e,t){return"All"!==t&&"CATEGORIES"!==t?e.filter((function(e){return e.strCategory===t})):e}(e.meals,t),filter:t}}),{registerMeals:B,highlightMeal:D,hideMeal:G})((function(e){var t=e.meals,c=e.filter,r=e.registerMeals,i=e.highlightMeal,s=e.hideMeal,l=e.location.search,h=Object(a.useState)(!1),j=Object(A.a)(h,2),d=j[0],o=j[1];Object(a.useEffect)((function(){var e=setTimeout((function(){o(!0)}),1500),t=S.a.parse(l).f;return E=t,R.a.get("https://www.themealdb.com/api/json/v1/1/search.php?f=".concat(t)).then((function(e){r(e.data.meals)})),function(){return clearTimeout(e)}}),[]);var b=function(e){i(e)},u=function(e){s(e)},O=Object(n.jsx)("div",{children:t&&t.length?t.map((function(e){return Object(n.jsx)(F,{meal:e,highlightMeal:b,hideFromList:u},"meal-".concat(e.idMeal))})):Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"no-meals",children:["There are currently no recipes that begin with the letter \xa0",E&&E.toUpperCase(),"\xa0 in the category"," ",c,"."]})})});return Object(n.jsx)("div",{children:d?O:null})})))),P=Object(l.c)(null,{handleFilterChange:H})((function(e){var t=e.handleFilterChange,c=Object(a.useState)([]),r=Object(A.a)(c,2),i=r[0],s=r[1];Object(a.useEffect)((function(){R.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){var t=e.data.categories,c=[];t.forEach((function(e){c.push(e.strCategory)})),s(c)}))}),[]);var l=["All"].concat(Object(u.a)(i));return Object(n.jsxs)("select",{className:"category-filter",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{children:"CATEGORIES"}),l.map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})}));function J(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("ul",{className:"mealslist-heading",children:[Object(n.jsx)("li",{children:"Recipe Catalogue"}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("button",{type:"button",children:"Meals"})})}),Object(n.jsx)(P,{})]}),Object(n.jsx)("div",{children:Object(n.jsx)(Y,{})})]})}var V,_=function(e){var t=e.meal,c=e.highlightMeal,r=e.hideFromList,i=Object(a.useState)(t),s=Object(A.a)(i,2),l=s[0],h=s[1],j=t.idMeal;return Object(a.useEffect)((function(){R.a.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=".concat(j)).then((function(e){var t=e.data.meals[0];h(t)}))}),[l]),Object(n.jsx)(F,{meal:l,highlightMeal:c,hideFromList:r})},z=Object(h.e)(Object(l.c)((function(e){var t=e.filter;return{meals:function(e,t){return"All"!==t&&"SEARCH BY"!==t?e.filter((function(e){return e.strMeal[0].toLowerCase()===t.toLowerCase()})):e}(e.meals,t),filter:t}}),{registerMeals:B,highlightMeal:D,hideMeal:G})((function(e){var t=e.meals,c=e.filter,r=e.registerMeals,i=e.highlightMeal,s=e.hideMeal,l=e.location.search,h=Object(a.useState)(!1),j=Object(A.a)(h,2),d=j[0],o=j[1];Object(a.useEffect)((function(){var e=setTimeout((function(){o(!0)}),1500),t=S.a.parse(l).c;return V=t,R.a.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=".concat(t)).then((function(e){r(e.data.meals)})),function(){return clearTimeout(e)}}),[]);var b=function(e){i(e)},u=function(e){s(e)},O=Object(n.jsx)("div",{children:t&&t.length?t.map((function(e){return Object(n.jsx)(_,{meal:e,highlightMeal:b,hideFromList:u},"meal-".concat(e.idMeal))})):Object(n.jsx)("div",{children:Object(n.jsxs)("p",{className:"no-meals",children:["There are currently no recipes in the category \xa0",V,"\xa0 that start with the letter"," ",c,"."]})})});return Object(n.jsx)("div",{children:d?O:null})}))),U=Object(l.c)(null,{handleFilterChange:H})((function(e){var t=e.handleFilterChange;return Object(n.jsxs)("select",{className:"category-filter",onChange:function(e){return t(e.target.value)},children:[Object(n.jsx)("option",{children:"SEARCH BY"}),["All","A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","R","S","T","U","V","W","X","Y","Z"].map((function(e){return Object(n.jsx)("option",{value:e,children:e},e)}))]})}));function W(){return Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("ul",{className:"mealslist-heading",children:[Object(n.jsx)("li",{children:"Recipe Catalogue"}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("button",{type:"button",children:"Meals"})})}),Object(n.jsx)(U,{})]}),Object(n.jsx)("div",{children:Object(n.jsx)(z,{})})]})}c(24);var X,Z=function(){var e=Object(a.useState)([]),t=Object(A.a)(e,2),c=t[0],r=t[1];return Object(a.useEffect)((function(){R.a.get("https://www.themealdb.com/api/json/v1/1/categories.php").then((function(e){var t=e.data.categories,c=[];t.forEach((function(e){c.push(e.strCategory)})),r(c)}))}),[]),Object(n.jsxs)("div",{className:"list-by-alphabet",children:[Object(n.jsx)("h2",{children:"Browse Available Recipes "}),Object(n.jsx)("div",{className:"ul",children:c.map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/filter?c=".concat(e),children:e})},e)}))})]})},q=function(){return Object(n.jsxs)("div",{className:"list-by-alphabet",children:[Object(n.jsx)("h2",{children:"Browse Available Recipes "}),Object(n.jsxs)("div",{className:"ul",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=a",children:"A"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=b",children:"B"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=c",children:"C"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=d",children:"D"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=e",children:"E"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=f",children:"F"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=g",children:"G"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=h",children:"H"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=i",children:"I"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=h",children:"J"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=k",children:"K"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=l",children:"L"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=m",children:"M"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=n",children:"N"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=o",children:"O"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=p",children:"P"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=q",children:"Q"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=r",children:"R"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=s",children:"S"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=t",children:"T"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=u",children:"U"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=v",children:"V"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=w",children:"W"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=x",children:"X"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=y",children:"Y"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/search?f=z",children:"Z"})})]})]})},K=function(){return Object(n.jsxs)("div",{className:"list-by-alphabet",children:[Object(n.jsx)("h2",{children:"Browse Available Recipes By"}),Object(n.jsxs)("div",{className:"ul",children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/alphabet",children:"Alphabet"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/category",children:"Category"})})]})]})},Q=(c(87),function(e){var t=e.location.search,c=S.a.parse(t),a=c.img,r=c.t,i=c.i,s=c.y,l=c.ins;return Object(n.jsxs)("div",{className:"details-bg",children:[Object(n.jsx)("div",{className:"header",children:Object(n.jsxs)("ul",{className:"mealslist-heading",children:[Object(n.jsx)("li",{children:"Recipe catalogue"}),Object(n.jsx)("a",{href:"/",children:Object(n.jsx)("button",{type:"button",children:"Back"})})]})}),Object(n.jsx)("div",{className:"image-area details-pg",style:{backgroundImage:"url(".concat(a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"0% 0%",backgroundSize:"cover"}}),Object(n.jsxs)("div",{className:"details-pg",children:[Object(n.jsx)("div",{className:"title-categ",children:Object(n.jsx)("h4",{className:"titl",children:r})}),Object(n.jsx)("div",{className:"ingredients",children:Object(n.jsxs)("h4",{children:["Ingredients:\xa0",i]})})]}),Object(n.jsx)("div",{className:"ins",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"ins-heading",children:[Object(n.jsx)("h4",{className:"instructions",children:"Instructions:"}),Object(n.jsx)("a",{href:s,children:Object(n.jsx)("button",{type:"button",children:"Youtube Video"})})]}),Object(n.jsx)("p",{className:"body-ins",children:l})]})})]})}),$=function(){return Object(n.jsx)("div",{children:"404 Page not found"})},ee=function(){return Object(n.jsx)(j.a,{history:C,children:Object(n.jsxs)(h.c,{children:[Object(n.jsx)(h.a,{exact:!0,path:"/details",component:Q}),Object(n.jsx)(h.a,{exact:!0,path:"/search",component:J}),Object(n.jsx)(h.a,{exact:!0,path:"/filter",component:W}),Object(n.jsx)(h.a,{exact:!0,path:"/alphabet",component:q}),Object(n.jsx)(h.a,{exact:!0,path:"/category",component:Z}),Object(n.jsx)(h.a,{exact:!0,path:"/",component:K}),Object(n.jsx)(h.a,{component:$})]})})},te=Object(o.e)(w(C),X,Object(o.d)(Object(o.a)(Object(b.a)(C))));s.a.render(Object(n.jsx)(l.a,{store:te,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ee,{})})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.ea959e45.chunk.js.map