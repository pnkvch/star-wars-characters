(this["webpackJsonpstar-wars-characters"]=this["webpackJsonpstar-wars-characters"]||[]).push([[0],{33:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var r,a,c,i,o,s,d,l,h,p,u,b,j,x=t(1),f=t.n(x),m=t(16),O=t.n(m),g=(t(33),t(15)),w=t(9),v="REQUEST_API_DATA",y="REQUEST_CHARACTER_DATA",k="RECEIVED_API_DATA",C="RECEIVED_CHARACTER_DATA",S=function(n){return{type:v,payload:n}},E=function(n){return{type:k,payload:n}},_=function(n){return{type:C,payload:n}},z=t(7),A=t(8),R=t.p+"static/media/SearchIcon.f03464f4.svg",L="375px",D="425px",T="768px",H="1024px",I="1440px",B="2560px",N={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(L,")"),mobileL:"(max-width: ".concat(D,")"),tablet:"(max-width: ".concat(T,")"),laptop:"(max-width: ".concat(H,")"),laptopL:"(max-width: ".concat(I,")"),desktop:"(max-width: ".concat(B,")"),desktopL:"(max-width: ".concat(B,")")},V="#f05d5e",Y="#e7ecef",G="#272932",M="#e7ecef",P=A.a.div(r||(r=Object(z.a)(["\n  width: ",";\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: calc(1.2em - 10px);\n\n  p {\n    color: ",";\n  }\n\n  @media "," {\n    width: 93%;\n    font-size: 14px;\n    justify-content: space-around;\n  }\n"])),"95%",M,N.mobileL),J=A.a.header(a||(a=Object(z.a)(["\n  background-color: ",";\n  padding-left: 2.5%;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n\n  h1 {\n    color: ",";\n  }\n  @media "," {\n    padding-left: 3%;\n    font-size: 0.8em;\n    h1 {\n      font-size: 1.5em;\n      padding-left: 2%;\n    }\n  }\n"])),V,M,N.tablet),Q=A.a.button(c||(c=Object(z.a)(["\n  color: ",";\n  background-color: ",";\n\n  border-radius: 19px;\n  padding: 0.5em;\n  min-width: 4.6em;\n  width: fit-content;\n  border: none;\n  font-size: ",";\n  font-weight: bold;\n  outline: none;\n  cursor: pointer;\n  margin-right: 0.5em;\n  transition: 0.1s ease-in;\n\n  &:hover {\n    color: ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.isCharacter?V:M}),(function(n){return n.isCharacter?M:V}),"1em",(function(n){return n.isCharacter?M:V}),(function(n){return n.isCharacter?V:M})),U=A.a.div(i||(i=Object(z.a)(["\n  font-family: ",";\n  letter-spacing: 0.5px;\n  margin: 0;\n  padding: 1em 0 1em 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  color: ",";\n  align-items: center;\n  @media "," {\n    font-size: 16px;\n  }\n"])),'"Roboto", sans-serif',G,N.laptop),W=A.a.div(o||(o=Object(z.a)(["\n  padding-right: 1.2em;\n  display: flex;\n  color: ",";\n  background-color: ",";\n  border-radius: 15px;\n  margin: 10px;\n  padding: 10px;\n  width: 17%;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  transition: 0.1s ease-in;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  h3 {\n    color: #cccccc;\n    margin-bottom: 0;\n  }\n\n  span {\n    display: block;\n    width: 100%;\n    margin-top: 5px;\n    margin-bottom: 5px;\n  }\n\n  @media "," {\n    width: 19%;\n  }\n\n  @media "," {\n    width: 25%;\n  }\n\n  @media "," {\n    width: 35%;\n  }\n"])),G,Y,N.laptop,N.tablet,N.mobileL),F=A.a.div(s||(s=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 75%;\n  height: 75%;\n  background-color: ",";\n  top: 13%;\n  position: absolute;\n  z-index: 999;\n  border-radius: 15px;\n  justify-content: center;\n  align-items: center;\n\n  @media "," {\n    width: 85%;\n    height: 72%;\n    top: 15%;\n  }\n"])),Y,N.tablet),q=A.a.div(d||(d=Object(z.a)(["\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  width: 85%;\n\n  span {\n    padding: 5px;\n    :nth-child(7) {\n      padding-bottom: 15px;\n    }\n  }\n"]))),K=A.a.div(l||(l=Object(z.a)(["\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 998;\n  cursor: pointer;\n"]))),X=A.a.div(h||(h=Object(z.a)(["\n  font-size: 22px;\n  display: flex;\n  flex-wrap: wrap;\n  width: ",";\n  margin: auto;\n  justify-content: space-evenly;\n  color: ",";\n  @media "," {\n    font-size: 16px;\n  }\n"])),"95%",M,N.tablet),Z=A.a.p(p||(p=Object(z.a)(["\n  padding: 5px;\n  margin: 5px;\n  @media "," {\n    margin: 0;\n  }\n"])),N.laptop),$=A.a.input(u||(u=Object(z.a)(["\n  -webkit-appearance: none;\n  border: 3px solid ",";\n  border-radius: 8px;\n  width: 85%;\n  height: 3em;\n  color: ",";\n  margin: 1.2em 0;\n  padding-left: 2.5em;\n  font-size: ",";\n  position: relative;\n  background: url(",") no-repeat 8px 8px;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  @media "," {\n    background-position-x: 5px;\n    background-position-y: 5px;\n  }\n"])),Y,Y,"1em",R,Y,N.mobileL),nn=A.a.div(b||(b=Object(z.a)(["\n  display: flex;\n  justify-content: space-around;\n  width: 70%;\n  margin-top: 4.5em;\n\n  @media "," {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  @media "," {\n    margin-top: 2.5em;\n  }\n\n  @media "," {\n    font-size: 14px;\n    width: 93%;\n  }\n"])),N.laptop,N.tablet,N.mobileL),en=A.a.div(j||(j=Object(z.a)(["\n  select {\n    box-sizing: border-box;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    background: ",";\n    border: 0;\n    border-radius: 0;\n    color: ",";\n    cursor: pointer;\n    font-family: inherit;\n    font-size: inherit;\n    height: ",";\n    margin: 0;\n    padding: 0.75em 3em 0.75em 1em;\n    width: 100%;\n  }\n\n  border-radius: 4px;\n  box-shadow: 0 1px 3px #bbb;\n  cursor: pointer;\n  height: ",";\n  overflow: hidden;\n  position: relative;\n  width: 25%;\n  margin: 1.1rem 0 1.1rem 2em;\n\n  @media "," {\n    margin: 0;\n  }\n\n  @media "," {\n    width: 40%;\n  }\n\n  @media "," {\n    width: 55%;\n  }\n"])),Y,G,"3em","3em",N.laptop,N.tablet,N.mobileL),tn=t(18),rn=t.n(tn),an=t(2),cn=function(n){var e=n.character,t=n.setDetails,r=Object(w.c)((function(n){return n.moviesReducer})),a=r.movies,c=r.loading,i=Object(w.b)();return Object(x.useEffect)((function(){var n;i((n=e.films,{type:y,payload:n}))}),[e.films,i]),Object(an.jsxs)(U,{children:[Object(an.jsx)(J,{children:Object(an.jsx)("h1",{children:"Star Wars Characters Catalogue"})}),Object(an.jsxs)(F,{children:[Object(an.jsxs)(q,{children:[Object(an.jsx)("h2",{children:Object(an.jsx)("b",{children:"General information"})}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Name: "}),e.name]}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Gender: "}),e.gender]}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Birth Year: "}),e.birth_year]}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Heigh: "}),e.height]}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Eye Color: "}),e.eye_color]}),Object(an.jsxs)("span",{children:[Object(an.jsx)("b",{children:"Hair Color: "}),e.hair_color]}),Object(an.jsx)("span",{children:Object(an.jsxs)("b",{children:["Names of the films ",e.name," played in:"]})}),c&&Object(an.jsx)(X,{children:Object(an.jsx)(rn.a,{type:"ThreeDots",color:"#f05d5e",height:"80",width:"80"})}),a.map((function(n,e){return Object(an.jsxs)(Z,{children:["- ",n.title]},e)}))]}),Object(an.jsx)(Q,{onClick:function(){t({id:"",isShowing:!1})},isCharacter:!0,children:"Back To Collection"})]}),Object(an.jsx)(K,{})]})},on=function(n){var e=n.characters,t=n.handleViewDetailsClick,r=Object(w.c)((function(n){return n.characterReducer})).loading;return e.length||r?Object(an.jsx)(an.Fragment,{children:e.map((function(n,e){return Object(an.jsxs)(W,{children:[Object(an.jsxs)("span",{children:["Name: ",Object(an.jsx)("span",{children:n.name})]}),Object(an.jsxs)("span",{children:["Birth Year: ",n.birth_year]}),Object(an.jsxs)("span",{children:["Gender: ",n.gender]}),Object(an.jsxs)("span",{children:["Eye Color: ",n.eye_color]}),Object(an.jsxs)("span",{children:["Skin Color: ",n.skin_color]}),Object(an.jsxs)("span",{children:["Height:"," ",n.height.includes("unknown")?n.height:"".concat(n.height," cm")]}),Object(an.jsx)(Q,{id:"".concat(e),onClick:t,isCharacter:!0,children:"View details"})]},e)}))}):Object(an.jsx)("p",{children:"No search results"})},sn=function(){var n=Object(w.c)((function(n){return n.characterReducer})),e=n.characters,t=n.next,r=n.loading,a=Object(x.useState)({id:"0",isShowing:!1}),c=Object(g.a)(a,2),i=c[0],o=c[1],s=Object(x.useState)(0),d=Object(g.a)(s,2),l=d[0],h=d[1],p=Object(x.useState)(!0),u=Object(g.a)(p,2),b=u[0],j=u[1],f=Object(x.useState)(""),m=Object(g.a)(f,2),O=m[0],v=m[1],y=Object(x.useState)({value:"name"}),k=Object(g.a)(y,2),C=k[0],E=k[1],_=Object(w.b)(),z=function(){j(!1),_(S(t))};if(Object(x.useEffect)((function(){_(S(null))}),[_]),Object(x.useEffect)((function(){l&&window.scrollTo(0,l)}),[i.isShowing,l]),Object(x.useEffect)((function(){var n=function(){window.innerHeight+window.scrollY>=document.body.offsetHeight-100&&t&&!i.isShowing&&!b&&_(S(t))};return r||window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[_,r,t,l,b,i.isShowing]),i.isShowing)return Object(an.jsx)(cn,{character:e[parseInt(i.id)],setDetails:o});return Object(an.jsxs)(U,{children:[Object(an.jsx)(J,{children:Object(an.jsx)("h1",{children:"Star Wars Characters Catalogue"})}),Object(an.jsxs)(nn,{children:[Object(an.jsx)($,{type:"search",placeholder:"Search character by ".concat(C.value.replace("_"," ")),value:O,onChange:function(n){v(n.target.value)}}),Object(an.jsx)(en,{children:Object(an.jsxs)("select",{value:C.value,onChange:function(n){E({value:n.target.value})},children:[Object(an.jsx)("option",{value:"name",children:"Name"}),Object(an.jsx)("option",{value:"birth_year",children:"Birth Year"}),Object(an.jsx)("option",{value:"gender",children:"Gender"}),Object(an.jsx)("option",{value:"eye_color",children:"Eye Color"}),Object(an.jsx)("option",{value:"skin_color",children:"Skin Color"}),Object(an.jsx)("option",{value:"height",children:"Height"})]})})]}),Object(an.jsx)(P,{children:Object(an.jsx)(on,{characters:O?e.filter((function(n){return n[C.value].toLowerCase().includes(O.toLowerCase())})):e,handleViewDetailsClick:function(n){h(window.pageYOffset),o((function(e){return{id:n.target.id,isShowing:!e.isShowing}}))}})}),r&&Object(an.jsx)(X,{children:Object(an.jsx)(rn.a,{type:"ThreeDots",color:"#f05d5e",height:"80",width:"80"})}),function(){if(b&&!r&&!O)return Object(an.jsx)(Q,{onClick:z,children:"Load More"})}()]})},dn=t(28),ln=t(10),hn=t(22),pn={characters:[],loading:!0,next:null},un={movies:[],loading:!0},bn=Object(ln.c)({characterReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(hn.a)(Object(hn.a)({},n),{},{loading:!0});case k:return{characters:n.characters.concat(e.payload.results),loading:!1,next:e.payload.next};default:return n}},moviesReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:un,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return{movies:[],loading:!0};case C:return{movies:e.payload,loading:!1};default:return n}}}),jn=t(6),xn=t.n(jn),fn=t(11),mn=t(19);function On(n){return gn.apply(this,arguments)}function gn(){return(gn=Object(mn.a)(xn.a.mark((function n(e){var t,r;return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e||"https://swapi.dev/api/people/",n.next=3,fetch(t);case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function wn(n){return vn.apply(this,arguments)}function vn(){return(vn=Object(mn.a)(xn.a.mark((function n(e){var t;return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.map(function(){var n=Object(mn.a)(xn.a.mark((function n(e){var t;return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.all(t);case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var yn=xn.a.mark(Sn),kn=xn.a.mark(En),Cn=xn.a.mark(_n);function Sn(n){var e;return xn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(fn.b)(On,n.payload);case 3:return e=t.sent,t.next=6,Object(fn.c)(E(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),yn,null,[[0,8]])}function En(n){var e;return xn.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(fn.b)(wn,n.payload);case 3:return e=t.sent,t.next=6,Object(fn.c)(_(e));case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),kn,null,[[0,8]])}function _n(){return xn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(fn.a)([Object(fn.d)(v,Sn),Object(fn.d)(y,En)]);case 2:case"end":return n.stop()}}),Cn)}var zn=Object(dn.a)(),An=Object(ln.e)(bn,Object(ln.a)(zn));zn.run(_n),O.a.render(Object(an.jsx)(f.a.StrictMode,{children:Object(an.jsx)(w.a,{store:An,children:Object(an.jsx)(sn,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.50a2ee24.chunk.js.map