(this["webpackJsonpwaldo-firebase"]=this["webpackJsonpwaldo-firebase"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(6),c=a.n(n),r=a(35),s=a.n(r),i=(a(43),a(31)),l=a(13),o=(a(44),a(1)),d=a.n(o),j=a(4),u=a(28),b=a(10),h=[{id:"level1",name:"Level 1",image:"./images/level1.jpg",characters:[{id:0,name:"Waldo",image:"./images/characters/waldo-avatar.png",found:!1},{id:1,name:"Wenda",image:"./images/characters/wenda-avatar.png",found:!1},{id:2,name:"Odlaw",image:"./images/characters/odlaw-avatar.png",found:!1}]},{id:"level2",name:"Level 2",image:"./images/level2.png",characters:[{id:3,name:"Waldo",image:"./images/characters/waldo-avatar.png",found:!1},{id:4,name:"Wenda",image:"./images/characters/wenda-avatar.png",found:!1},{id:5,name:"Odlaw",image:"./images/characters/odlaw-avatar.png",found:!1}]}],m={apiKey:"AIzaSyCfR-8ioyuzLTtmP2tCOkvzfNrQ_RKDiBU",authDomain:"waldo-8db0a.firebaseapp.com",projectId:"waldo-8db0a",storageBucket:"waldo-8db0a.appspot.com",messagingSenderId:"705300775464",appId:"1:705300775464:web:b28f9248445a36bb20eb1d"},O=a(36),f=a(19),v=a(5),x=(Object(O.a)(m),Object(f.e)()),p=c.a.createContext(),g=function(e){var t=e.children,a=Object(n.useState)(1),c=Object(b.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)([]),l=Object(b.a)(i,2),o=l[0],m=l[1],O=Object(n.useState)(!1),g=Object(b.a)(O,2),w=g[0],y=g[1],S=Object(n.useState)({show:!1,type:"",msgAlert:""}),N=Object(b.a)(S,2),C=N[0],k=N[1],E=Object(n.useState)(!1),I=Object(b.a)(E,2),L=I[0],T=I[1],W=Object(n.useState)(0),_=Object(b.a)(W,2),A=_[0],G=_[1],D=Object(n.useState)(0),P=Object(b.a)(D,2),R=P[0],z=P[1],M=Object(n.useState)(!0),B=Object(b.a)(M,2),F=B[0],Y=B[1],H=Object(n.useState)(!1),J=Object(b.a)(H,2),K=J[0],q=J[1],Q=Object(n.useState)(!1),U=Object(b.a)(Q,2),X=U[0],V=U[1],Z=Object(n.useState)(!1),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=Object(n.useState)(!1),ne=Object(b.a)(ae,2),ce=ne[0],re=ne[1],se=Object(n.useState)({left:0,top:0}),ie=Object(b.a)(se,2),le=ie[0],oe=ie[1],de=Object(n.useRef)(null),je=Object(n.useState)({width:void 0,height:void 0}),ue=Object(b.a)(je,2),be=(ue[0],ue[1]);Object(n.useEffect)((function(){var e=function(){be({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(n.useEffect)((function(){K&&m(h[r-1].characters)}),[K]);var he=function(e,t,a){k({show:e,type:t,msgAlert:a})};Object(n.useEffect)((function(){if(C.show){var e=setTimeout((function(){pe(),k(Object(u.a)(Object(u.a)({},C),{},{show:!1}))}),1e3);return function(){return clearTimeout(e)}}}),[C]);var me=function(){te(!1),Y(!1),V(!1),re(!1),q(!0),T(!0)};Object(n.useEffect)((function(){if(L){var e=setInterval((function(){z((function(e){return e+10}))}),10);return function(){return clearInterval(e)}}}),[L]);Object(n.useEffect)((function(){F||o.every((function(e){return!0===e.found}))&&(q(!1),V(!0),G(R),fe(R),T(!1),z(0))}),[o]);var Oe=function(e){return e.sort((function(e,t){return e.time-t.time})).slice(0,10)},fe=function(e){var t,a=Object(f.b)(x,"levels/level".concat(r,"/leaderboard"));Object(f.f)(a,(function(a){var n=a.docs.map((function(e){return e.data()}));void 0===(t=Oe(n))&&(t=[]),t[9]||re(!0),t[9]&&e<t[9].time&&re(!0)}))},ve=function(){var e=Object(j.a)(d.a.mark((function e(t,a,n){var c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={name:a,time:n},s=Object(f.b)(x,"levels/level".concat(r,"/leaderboard")),e.next=5,Object(f.a)(s,c);case 5:re(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),xe=function(){y(!0)},pe=function(){y(!1)},ge=function(e,t,a,n){"left"===e&&(t.current.style.right="unset",t.current.style.left="".concat(a),t.current.style.top="".concat(n)),"right"===e&&(t.current.style.left="unset",t.current.style.right="".concat(a),t.current.style.top="".concat(n))};Object(n.useEffect)((function(){le.left<50&&w&&ge("left",de,le.left+2+"%",le.top-5+"%"),le.left>50&&w&&ge("right",de,100-le.left+2+"%",le.top-5+"%")}),[le]);var we=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(f.c)(x,"levels/level".concat(r,"/characters/").concat(t.value,"/")),e.next=3,Object(f.d)(a);case 3:(n=e.sent).exists()&&(c=n.data(),ye(c.xChar,c.yChar,t.value));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=Object(j.a)(d.a.mark((function e(t,a,n){var c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=le.left,r=le.top,s=r-5<a&&a<r+5,Se(c-5<t&&t<c+5&&s,n);case 5:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),Se=function(e,t){var a=o.find((function(e){return e.name===t}));e&&(a.found?he(!0,"success","".concat(a.name," was already found!")):he(!0,"success","You found ".concat(a.name,"!")),m(o.map((function(e){return e.id===a.id?Object(u.a)(Object(u.a)({},e),{},{found:!0}):e})))),e||(a.found?he(!0,"danger","".concat(a.name," was already found!")):he(!0,"danger","That's not ".concat(a.name,"!")))};return Object(v.jsx)(p.Provider,{value:{characters:o,alert:C,showDropdown:w,dropdownContainer:de,waitStartGame:F,gameOver:X,gameTimer:R,finalTime:A,nextLevel:function(){var e=r+1;e>2?(te(!0),q(!1),Y(!1),V(!1)):(s(e),me())},levelSelected:r,handleGameStart:me,handleCharacterSelection:we,handleImageClick:function(e){var t=function(e){return{xClickCoord:e.nativeEvent.offsetX/e.nativeEvent.target.offsetWidth*100,yClickCoord:e.nativeEvent.offsetY/e.nativeEvent.target.offsetHeight*100}}(e);!function(e){var t=e.xClickCoord,a=e.yClickCoord;oe({left:t,top:a})}(t),xe()},playAgain:function(){s(r),me()},restart:function(){s(1),Y(!0)},comingSoon:ee,topTen:ce,addLeaderboard:ve,sortPlayers:Oe,closeDropdown:pe,db:x},children:t})},w=function(){return Object(n.useContext)(p)},y=a(25),S=function(){var e=w().characters;return Object(v.jsx)("header",{children:Object(v.jsxs)("div",{className:"top-header",children:[Object(v.jsx)(i.b,{to:"/",className:"logo-title",children:Object(v.jsx)("h1",{children:"Waldo Project"})}),Object(v.jsxs)("div",{className:"remaining-characters__container",children:[Object(v.jsx)("h4",{className:"remaining-characters__title",children:"Remaining characters"}),Object(v.jsx)("div",{className:"remaining-characters__images",children:e.map((function(e){var t=e.id,a=e.name,n=e.image,c=e.found;return Object(v.jsx)("img",{src:n,alt:a,className:"".concat(c&&"remaining-characters-found")},t)}))})]})]})})};var N=function(){var e=w().alert;return Object(v.jsx)("div",{className:"alert alert-".concat(e.type),children:Object(v.jsx)("p",{children:e.msgAlert})})},C=a(37);var k=function(e){var t=e.handleCharacterSelection,a=w(),n=a.characters,c=a.dropdownContainer,r=a.alert,s=a.closeDropdown;return Object(v.jsxs)("div",{className:"characters-dropdown",ref:c,children:[r.show&&Object(v.jsx)(N,{}),Object(v.jsx)("button",{type:"button",className:"close-btn",onClick:s,children:Object(v.jsx)(C.a,{})}),Object(v.jsx)("h4",{children:"Select a character"}),Object(v.jsx)("form",{className:"characters-selection",children:n.map((function(e){var a=e.id,n=e.name,c=e.image;return Object(v.jsxs)("label",{className:"character-label",children:[Object(v.jsx)("input",{type:"radio",name:"character-label",value:n,onChange:function(e){return t(e)}}),Object(v.jsx)("img",{src:c,alt:n}),Object(v.jsx)("p",{children:n})]},a)}))})]})},E=function(e){var t=e.timer;return Object(v.jsxs)(v.Fragment,{children:[("0"+Math.floor(t/6e4%60)).slice(-2),":",("0"+Math.floor(t/1e3%60)).slice(-2),":",("0"+t/10%100).slice(-2)]})},I=function(){var e=w(),t=e.showDropdown,a=e.levelSelected,n=e.handleCharacterSelection,c=e.handleImageClick,r=e.gameTimer;return Object(v.jsxs)("main",{children:[Object(v.jsx)(S,{}),Object(v.jsxs)("section",{className:"game__container",children:[Object(v.jsxs)("div",{className:"game__header",children:[Object(v.jsx)("h2",{children:h[a-1].name}),Object(v.jsxs)("div",{className:"timer",children:[Object(v.jsx)(y.a,{}),Object(v.jsx)("h3",{className:"timer",children:Object(v.jsx)(E,{timer:r})})]})]}),Object(v.jsxs)("div",{className:"game-image__container",children:[Object(v.jsx)("img",{src:h[a-1].image,alt:h[a-1].name,onClick:function(e){return c(e)}}),t&&Object(v.jsx)(k,{handleCharacterSelection:function(e){return n(e.target)}})]})]})]})},L=function(e){var t=e.level,a=w(),c=a.db,r=a.sortPlayers,s=Object(n.useState)([]),i=Object(b.a)(s,2),l=i[0],o=i[1];return Object(n.useEffect)((function(){var e=Object(f.b)(c,"levels/level".concat(t,"/leaderboard")),a=Object(f.f)(e,(function(e){var t=e.docs.map((function(e){return e.data()}));t=r(t),o(t)}));return function(){return a()}}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)("h2",{children:["Level ",t]}),Object(v.jsx)("ol",{children:l.map((function(e,t){var a=e.name,n=e.time;return Object(v.jsx)("li",{children:Object(v.jsxs)("div",{className:"center",children:[Object(v.jsxs)("span",{className:"bold",children:[a,"~"]}),Object(v.jsx)(E,{timer:parseInt(n)}),Object(v.jsx)(y.a,{})]})},t)})).slice(0,10)})]})};var T=function(){var e=w(),t=e.finalTime,a=e.nextLevel,c=e.levelSelected,r=e.playAgain,s=e.topTen,i=e.addLeaderboard,l=Object(n.useState)(""),o=Object(b.a)(l,2),d=o[0],j=o[1];return Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:"modal gameover-modal",children:[Object(v.jsxs)("h2",{children:["Level ",c," clear !"]}),Object(v.jsxs)("div",{className:"clear-time",children:[Object(v.jsx)("p",{children:"CLEARING TIME"}),Object(v.jsxs)("h3",{children:[Object(v.jsx)(y.a,{})," ",Object(v.jsx)(E,{timer:parseInt(t)})]}),s&&Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("form",{className:"form-topten",onSubmit:function(e){return i(e,d,t)},children:[Object(v.jsx)("h3",{className:"form-title",children:"You made it to the top 10!"}),Object(v.jsx)("p",{children:"Would you like to enter your name to enter the leaderboard?"}),Object(v.jsx)("input",{type:"text",value:d,onChange:function(e){return j(e.target.value)},className:"input-leaderboard",placeholder:"Enter name"}),Object(v.jsx)("button",{type:"submit",className:"btn-leaderboard",children:"submit"})]})})]}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)("button",{type:"button",onClick:r,children:"Play Again"}),Object(v.jsx)("button",{type:"button",className:"btn-next",onClick:a,children:"Next Level"})]}),Object(v.jsx)("h1",{className:"title-top",children:"Top 10 players"}),Object(v.jsx)("div",{className:"leaderboard",children:Object(v.jsx)(L,{level:c})})]})})};var W=function(){var e=w().handleGameStart;return Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:"modal",children:[Object(v.jsx)("h2",{children:"Welcome to the Waldo project"}),Object(v.jsx)("h3",{children:"Instructions"}),Object(v.jsx)("p",{children:"Waldo, Wenda and Oddlaw are hiding again! Find them as quickly as possible"}),Object(v.jsx)("button",{onClick:e,children:"Start Game"}),Object(v.jsx)("h1",{className:"title-top",children:"Top 10 players"}),Object(v.jsxs)("div",{className:"leaderboards-container",children:[Object(v.jsx)("div",{className:"leaderboard",children:Object(v.jsx)(L,{level:1})}),Object(v.jsx)("div",{className:"leaderboard",children:Object(v.jsx)(L,{level:2})})]})]})})};var _=function(){var e=w().restart;return Object(v.jsx)("main",{children:Object(v.jsxs)("div",{className:"modal",children:[Object(v.jsx)("h2",{children:"Coming Soon!"}),Object(v.jsx)("h3",{children:"We are currently working on the next levels!"}),Object(v.jsx)("button",{type:"button",onClick:e,children:"Restart"})]})})};function A(){var e=w(),t=e.waitStartGame,a=e.gameOver,n=e.handleGameStart,c=e.comingSoon;return t?Object(v.jsx)(W,{handleGameStart:n}):a?Object(v.jsx)(T,{}):c?Object(v.jsx)(_,{}):Object(v.jsx)(I,{})}var G=function(){return Object(v.jsx)(i.a,{children:Object(v.jsx)(l.c,{children:Object(v.jsx)(l.a,{exact:!0,path:"/waldo-firebase",element:Object(v.jsx)(A,{})})})})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(g,{children:Object(v.jsx)(G,{})})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.6fd877a0.chunk.js.map