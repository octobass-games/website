(this["webpackJsonpoctobass-website"]=this["webpackJsonpoctobass-website"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),c=s(12),n=s.n(c),o=(s(25),s(26),s(4)),m=s(2),l=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"main-header flex-container",children:Object(a.jsx)("div",{className:"logo flex-item"})}),Object(a.jsxs)("div",{className:"flex-container game-images",children:[Object(a.jsx)(o.b,{to:"/games",className:"fade-in",children:Object(a.jsx)("img",{className:"game-image flex-item",src:"https://i.imgur.com/V91m7jg.png",alt:"mini games"})}),Object(a.jsx)(o.b,{to:"/team",className:"fade-in",children:Object(a.jsx)("img",{className:"game-image flex-item",src:"https://i.imgur.com/fuyqr8A.png",alt:"team"})})]}),Object(a.jsxs)("div",{className:"links flex-container",children:[Object(a.jsx)("a",{href:"https://twitter.com/OctobassGames",title:"twitter",children:Object(a.jsx)("i",{className:"fab fa-twitter link flex-item"})}),Object(a.jsx)("a",{href:"https://octobass.itch.io/",title:"itch.io",children:Object(a.jsx)("i",{className:"fas fa-gamepad link flex-item"})}),Object(a.jsx)("a",{href:"https://www.youtube.com/channel/UCnn7NagMQ0LmW89RH-Dya3Q",title:"youtube",children:Object(a.jsx)("i",{className:"fab fa-youtube link flex-item"})}),Object(a.jsx)("a",{href:"https://octobassgames.tumblr.com",title:"tumblr",children:Object(a.jsx)("i",{className:"fab fa-tumblr link flex-item"})}),Object(a.jsx)("a",{href:"https://github.com/octobass-games",title:"github",children:Object(a.jsx)("i",{className:"fab fa-github link flex-item"})})]})]})},r=s.p+"static/media/simple-octobass.23377aed.svg",d=s(15),j=s(16),h=s(19),b=s(18),g=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).slideyClassname="slideRight",a.state={index:0,imageLoaded:!1},a}return Object(j.a)(s,[{key:"render",value:function(){var e=this,t=this.props.images||[],s=this.state.index,i=t[s];return this.slideyClassname=this.state.imageLoaded?"slideRight":"image-loading",Object(a.jsxs)("div",{className:"description gallery",children:[Object(a.jsx)("div",{className:"flex-container",children:Object(a.jsx)("div",{className:"flex-item",children:Object(a.jsx)("img",{className:"moody-soup-image "+this.slideyClassname,src:i,alt:"screenshot",onLoad:function(){return e.setState({imageLoaded:!0})}})})}),Object(a.jsx)("div",{className:"flex-container ",children:Object(a.jsx)("div",{className:"flex-item",children:t.map((function(t,i){return Object(a.jsx)("i",{className:"fas fa-heart gallery-icon "+(i===s&&"gallery-icon__selected"),onClick:function(){return function(t){return e.setState({index:t,imageLoaded:!1})}(i)}},i)}))})})]})}}]),s}(i.Component),u=["https://i.imgur.com/cVtphzG.gif","https://i.imgur.com/pnSyR5d.gif","https://i.imgur.com/6jIewZa.gif","https://i.imgur.com/kouVAc7.gif","https://i.imgur.com/TPJjNdu.gif","https://i.imgur.com/TeH9aVm.gif","https://i.imgur.com/E9Yug1r.gif","https://i.imgur.com/AayNdwP.gif"],x=function(){return Object(a.jsxs)("div",{className:"MoodySoup App",children:[Object(a.jsx)(o.b,{to:"/",children:Object(a.jsx)("img",{className:"bass-logo",src:r,alt:"home"})}),Object(a.jsx)("div",{className:"main-header flex-container",children:Object(a.jsx)("img",{className:"flex-item moody-soup-logo",src:"https://i.imgur.com/EKgBa87.png",alt:"moody"})}),Object(a.jsxs)("div",{className:"flex-container description",children:[Object(a.jsx)("div",{className:"flex-item",children:Object(a.jsx)("img",{className:"moody-soup-image",src:"https://i.imgur.com/OH5PFOv.gif",alt:"moody"})}),Object(a.jsx)("div",{className:"flex-item moody-soup-description",children:Object(a.jsx)("p",{children:"A side scrolling adventure game with a magical girl theme. Explore dungeons, build relationships with your classmates, and level up to uncover the mysteries surrounding the school. Currently in progress."})})]}),Object(a.jsxs)("div",{className:"flex-container description",children:[Object(a.jsx)("div",{className:"flex-item moody-soup-description",children:Object(a.jsx)("p",{children:"Design your character to look the way you want. And as you explore more, you\u2019ll find more and more outfits with which to fill your wardrobe."})}),Object(a.jsx)("div",{className:"flex-item",children:Object(a.jsx)("img",{className:"moody-soup-image",src:"https://i.imgur.com/VgXgUO8.gif",alt:"moody"})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{images:u})]})},p=s(17),f=function(){return Object(a.jsxs)("div",{className:"nav-bar",children:[Object(a.jsx)(o.b,{className:"nav-bar__logo",to:"/",children:Object(a.jsx)("img",{className:"bass-logo",src:r,alt:"home"})}),Object(a.jsxs)("div",{className:"nav-bar__right",children:[Object(a.jsx)(o.b,{to:"/team",className:"link-inverse font",children:"Team"}),Object(a.jsx)(o.b,{to:"/games",className:"link-inverse font",children:"Games"})]})]})},O=function(e){var t=e.image,s=e.onClick,i=e.person,c=e.isSelected;return Object(a.jsx)("button",{className:"team-member-button ".concat(c?"team-member-button--active":""),title:"About ".concat(i),onClick:function(){return s(i)},children:Object(a.jsx)("img",{className:"team-member-image",src:t,alt:""})})},v={megan:{description:"Megan: I'm a UK based dev, and also enjoy making pixel and digital art! I like point and click games, and collect toy flamingos.",links:[{href:"https://github.com/majicmoo",icon:"fab fa-github"},{href:"http://majicmoo.tumblr.com/",icon:"fab fa-tumblr"}]},adam:{description:"Adam: I'm a software developer currently residing in the U.K. I\ntend to predominantly play RPGs, with my favourite series being\nPersona. My other main interests include watching anime, listening to\nmusic, and playing drums and piano (although not at the same time). I\nlike penguins and cats.",links:[{href:"https://github.com/AdamskiPadamski",icon:"fab fa-github"}]},hal:{description:"Halden: I'm a student who has previously studied music and is now studying computer science. I enjoy music composition, performance and sound design. Some of my favourite instruments are tuba, trombone and guitar.",links:[{href:"https://github.com/Madmouseman",icon:"fab fa-github"},{href:"https://haldenparkeswork.wordpress.com/",icon:"fab fa-wordpress-simple"}]},odette:{description:"Odette: I currently work in Project Finance residing in the UK. In my spare time I enjoy playing games and drawing!",links:[{href:" https://github.com/OdetteParkes",icon:"fab fa-github"}]}},y=function(){var e=Object(i.useState)(null),t=Object(p.a)(e,2),s=t[0],c=t[1],n=function(e){c(s===e?null:e)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(f,{}),Object(a.jsxs)("div",{className:"Team App Page",children:[Object(a.jsxs)("div",{className:"team-info-wrapper",children:[s&&Object(a.jsxs)("div",{className:"team-info",children:[Object(a.jsx)("p",{children:v[s].description}),v[s].links.map((function(e){var t=e.href,s=e.icon;return Object(a.jsx)("a",{href:t,children:Object(a.jsx)("i",{className:"".concat(s," link-inverse flex-item team-link")})},t)}))]}),!s&&Object(a.jsx)("div",{className:"team-info",children:Object(a.jsx)("h1",{children:"Meet the team! Click a person to find out more."})})]}),Object(a.jsxs)("div",{className:"team-wrapper",children:[Object(a.jsx)(O,{image:"https://i.imgur.com/ocGcJTJ.gif",person:"adam",onClick:n,isSelected:"adam"===s}),Object(a.jsx)(O,{image:"https://i.imgur.com/PGvf9v1.gif",person:"megan",onClick:n,isSelected:"megan"===s}),Object(a.jsx)(O,{image:"https://i.imgur.com/hmOoxWl.gif",person:"hal",onClick:n,isSelected:"hal"===s}),Object(a.jsx)(O,{image:"https://i.imgur.com/Tik2gsp.gif",person:"odette",onClick:n,isSelected:"odette"===s})]})]})]})},N=function(){return Object(a.jsxs)("div",{className:"App mini-games Page",children:[Object(a.jsx)(f,{}),Object(a.jsx)("hr",{}),Object(a.jsx)("a",{href:"https://octobass.itch.io/dont-bug-me","aria-label":"Don't bug me",children:Object(a.jsx)("div",{className:"DontBugMe game-panel"})}),Object(a.jsx)("hr",{}),Object(a.jsx)("a",{href:"https://octobass.itch.io/lunar-heist","aria-label":"Lunar Heist",children:Object(a.jsx)("div",{className:"LunarHeist game-panel"})}),Object(a.jsx)("hr",{}),Object(a.jsx)("a",{href:"https://octobass-games.github.io/vimboy","aria-label":"Vimboy",children:Object(a.jsx)("div",{className:"Vimboy game-panel",children:Object(a.jsx)("div",{className:"flex-container game-panel__label",children:Object(a.jsx)("h2",{className:"vimboy-title",children:"vimboy"})})})}),Object(a.jsx)("hr",{}),Object(a.jsx)(o.b,{to:"/hats-and-cats","aria-label":"Hats and Cats",children:Object(a.jsx)("div",{className:"HatsAndCats game-panel",children:Object(a.jsx)("div",{className:"flex-container game-panel__label",children:Object(a.jsx)("img",{className:"flex-item moody-soup-logo",src:"https://i.imgur.com/XkjWCD5.png",alt:"moody"})})})}),Object(a.jsx)("hr",{})]})},k=["https://i.imgur.com/A43Lrgs.gif"],w=function(){return Object(a.jsxs)("div",{className:"HatsAndCats App Page",children:[Object(a.jsx)(f,{}),Object(a.jsx)("div",{className:"main-header flex-container",children:Object(a.jsx)("img",{className:"flex-item moody-soup-logo",src:"https://i.imgur.com/XkjWCD5.png",alt:"moody"})}),Object(a.jsxs)("div",{className:"flex-container description",children:[Object(a.jsx)("div",{className:"flex-item",children:Object(a.jsx)("img",{className:"moody-soup-image witch",src:"https://i.imgur.com/oNm60DE.png",alt:"moody"})}),Object(a.jsx)("div",{className:"flex-item moody-soup-description",children:Object(a.jsx)("p",{children:"Hats and Cats - A small jumping platformer where you collect hats and cats. Currently on hold."})})]}),Object(a.jsx)("br",{}),Object(a.jsx)(g,{images:k})]})},C=function(){return Object(a.jsx)(o.a,{basename:"",children:Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/moody-soup",component:x}),Object(a.jsx)(m.a,{exact:!0,path:"/games",component:N}),Object(a.jsx)(m.a,{exact:!0,path:"/hats-and-cats",component:w}),Object(a.jsx)(m.a,{exact:!0,component:function(){return window.location="https://octobass-games.github.io/vimboy",null},path:"/vimboy"}),Object(a.jsx)(m.a,{exact:!0,path:"/team",component:y}),Object(a.jsx)(m.a,{component:l})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(a.jsx)(C,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[32,1,2]]]);
//# sourceMappingURL=main.5d6c37e2.chunk.js.map