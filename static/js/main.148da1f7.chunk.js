(this["webpackJsonpoctobass-website"]=this["webpackJsonpoctobass-website"]||[]).push([[0],{25:function(e,t,s){},26:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var a=s(1),i=s(14),c=s.n(i),n=(s(25),s(26),s(5)),o=s(2),r=s(0),l=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("div",{className:"main-header flex-container",children:Object(r.jsx)("div",{className:"logo flex-item"})}),Object(r.jsxs)("div",{className:"flex-container game-images",children:[Object(r.jsx)(n.b,{to:"/games",className:"fade-in",children:Object(r.jsx)("img",{className:"game-image flex-item",src:"https://i.imgur.com/V91m7jg.png",alt:"mini games"})}),Object(r.jsx)(n.b,{to:"/team",className:"fade-in",children:Object(r.jsx)("img",{className:"game-image flex-item",src:"https://i.imgur.com/fuyqr8A.png",alt:"team"})})]}),Object(r.jsxs)("div",{className:"links flex-container",children:[Object(r.jsx)("a",{href:"https://twitter.com/OctobassGames",title:"twitter",children:Object(r.jsx)("i",{className:"fab fa-twitter link flex-item"})}),Object(r.jsx)("a",{href:"https://octobass.itch.io/",title:"itch.io",children:Object(r.jsx)("i",{className:"fas fa-gamepad link flex-item"})}),Object(r.jsx)("a",{href:"https://www.youtube.com/channel/UCnn7NagMQ0LmW89RH-Dya3Q",title:"youtube",children:Object(r.jsx)("i",{className:"fab fa-youtube link flex-item"})}),Object(r.jsx)("a",{href:"https://octobassgames.tumblr.com",title:"tumblr",children:Object(r.jsx)("i",{className:"fab fa-tumblr link flex-item"})}),Object(r.jsx)("a",{href:"https://github.com/octobass-games",title:"github",children:Object(r.jsx)("i",{className:"fab fa-github link flex-item"})})]})]})},m=s.p+"static/media/simple-octobass.23377aed.svg",d=s(17),h=s(18),j=s(20),b=s(19),u=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var a;return Object(d.a)(this,s),(a=t.call(this,e)).slideyClassname="slideRight",a.state={index:0,imageLoaded:!1},a}return Object(h.a)(s,[{key:"render",value:function(){var e=this,t=this.props.images||[],s=this.state.index,a=t[s];return this.slideyClassname=this.state.imageLoaded?"slideRight":"image-loading",Object(r.jsxs)("div",{className:"description gallery",children:[Object(r.jsx)("div",{className:"flex-container",children:Object(r.jsx)("div",{className:"flex-item",children:Object(r.jsx)("img",{className:"moody-soup-image "+this.slideyClassname,src:a,alt:"screenshot",onLoad:function(){return e.setState({imageLoaded:!0})}})})}),Object(r.jsx)("div",{className:"flex-container ",children:Object(r.jsx)("div",{className:"flex-item",children:t.map((function(t,a){return Object(r.jsx)("i",{className:"fas fa-heart gallery-icon "+(a===s&&"gallery-icon__selected"),onClick:function(){return function(t){return e.setState({index:t,imageLoaded:!1})}(a)}},a)}))})})]})}}]),s}(a.Component),g=["https://i.imgur.com/cVtphzG.gif","https://i.imgur.com/pnSyR5d.gif","https://i.imgur.com/6jIewZa.gif","https://i.imgur.com/kouVAc7.gif","https://i.imgur.com/TPJjNdu.gif","https://i.imgur.com/TeH9aVm.gif","https://i.imgur.com/E9Yug1r.gif","https://i.imgur.com/AayNdwP.gif"],f=function(){return Object(r.jsxs)("div",{className:"MoodySoup App",children:[Object(r.jsx)(n.b,{to:"/",children:Object(r.jsx)("img",{className:"bass-logo",src:m,alt:"home"})}),Object(r.jsx)("div",{className:"main-header flex-container",children:Object(r.jsx)("img",{className:"flex-item moody-soup-logo",src:"https://i.imgur.com/EKgBa87.png",alt:"moody"})}),Object(r.jsxs)("div",{className:"flex-container description",children:[Object(r.jsx)("div",{className:"flex-item",children:Object(r.jsx)("img",{className:"moody-soup-image",src:"https://i.imgur.com/OH5PFOv.gif",alt:"moody"})}),Object(r.jsx)("div",{className:"flex-item moody-soup-description",children:Object(r.jsx)("p",{children:"A side scrolling adventure game with a magical girl theme. Explore dungeons, build relationships with your classmates, and level up to uncover the mysteries surrounding the school. Currently in progress."})})]}),Object(r.jsxs)("div",{className:"flex-container description",children:[Object(r.jsx)("div",{className:"flex-item moody-soup-description",children:Object(r.jsx)("p",{children:"Design your character to look the way you want. And as you explore more, you\u2019ll find more and more outfits with which to fill your wardrobe."})}),Object(r.jsx)("div",{className:"flex-item",children:Object(r.jsx)("img",{className:"moody-soup-image",src:"https://i.imgur.com/VgXgUO8.gif",alt:"moody"})})]}),Object(r.jsx)("br",{}),Object(r.jsx)(u,{images:g})]})},p=s(8),x=function(){return Object(r.jsxs)("div",{className:"nav-bar",children:[Object(r.jsx)(n.b,{className:"nav-bar__logo",to:"/",children:Object(r.jsx)("img",{className:"bass-logo",src:m,alt:"home"})}),Object(r.jsxs)("div",{className:"nav-bar__right",children:[Object(r.jsx)(n.b,{to:"/team",className:"link-inverse font",children:"Team"}),Object(r.jsx)(n.b,{to:"/games",className:"link-inverse font",children:"Games"})]})]})},O=function(e){var t=e.image,s=e.onClick,a=e.person,i=e.isSelected;return Object(r.jsx)("button",{className:"team-member-button ".concat(i?"team-member-button--active":""),title:"About ".concat(a),onClick:function(){return s(a)},children:Object(r.jsx)("img",{className:"team-member-image",src:t,alt:""})})},y={megan:{description:"Megan: I'm a UK based dev, and also enjoy making pixel and digital art! I like point and click games, and collect toy flamingos.",links:[{href:"https://github.com/majicmoo",icon:"fab fa-github"},{href:"http://majicmoo.tumblr.com/",icon:"fab fa-tumblr"}]},adam:{description:"Adam: I'm a software developer currently residing in the U.K. I\ntend to predominantly play RPGs, with my favourite series being\nPersona. My other main interests include watching anime, listening to\nmusic, and playing drums and piano (although not at the same time). I\nlike penguins and cats.",links:[{href:"https://github.com/AdamskiPadamski",icon:"fab fa-github"}]},hal:{description:"Halden: I'm a student who has previously studied music and is now studying computer science. I enjoy music composition, performance and sound design. Some of my favourite instruments are tuba, trombone and guitar.",links:[{href:"https://octobass.games/halden",icon:"fas fa-music"},{href:"https://github.com/Madmouseman",icon:"fab fa-github"},{href:"https://haldenparkeswork.wordpress.com/",icon:"fab fa-wordpress-simple"}]},odette:{description:"Odette: I currently work in Project Finance residing in the UK. In my spare time I enjoy playing games and drawing!",links:[{href:" https://github.com/OdetteParkes",icon:"fab fa-github"}]}},k=function(){var e=Object(a.useState)(null),t=Object(p.a)(e,2),s=t[0],i=t[1],c=function(e){i(s===e?null:e)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(x,{}),Object(r.jsxs)("div",{className:"Team App Page",children:[Object(r.jsxs)("div",{className:"team-info-wrapper",children:[s&&Object(r.jsxs)("div",{className:"team-info",children:[Object(r.jsx)("p",{children:y[s].description}),y[s].links.map((function(e){var t=e.href,s=e.icon;return Object(r.jsx)("a",{href:t,children:Object(r.jsx)("i",{className:"".concat(s," link-inverse flex-item team-link")})},t)}))]}),!s&&Object(r.jsx)("div",{className:"team-info",children:Object(r.jsx)("h1",{children:"Meet the team! Click a person to find out more."})})]}),Object(r.jsxs)("div",{className:"team-wrapper",children:[Object(r.jsx)(O,{image:"https://i.imgur.com/ocGcJTJ.gif",person:"adam",onClick:c,isSelected:"adam"===s}),Object(r.jsx)(O,{image:"https://i.imgur.com/PGvf9v1.gif",person:"megan",onClick:c,isSelected:"megan"===s}),Object(r.jsx)(O,{image:"https://i.imgur.com/hmOoxWl.gif",person:"hal",onClick:c,isSelected:"hal"===s}),Object(r.jsx)(O,{image:"https://i.imgur.com/Tik2gsp.gif",person:"odette",onClick:c,isSelected:"odette"===s})]})]})]})},v=function(){return Object(r.jsxs)("div",{className:"App mini-games Page",children:[Object(r.jsx)(x,{}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"https://octobass.itch.io/dont-bug-me","aria-label":"Don't bug me",children:Object(r.jsx)("div",{className:"DontBugMe game-panel"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"https://octobass.itch.io/cat-got-your-tongue","aria-label":"Cat got your tongue?",children:Object(r.jsx)("div",{className:"CatGotYourTongue game-panel"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"https://octobass.itch.io/stumble-and-stew","aria-label":"Stumble And Stew",children:Object(r.jsx)("div",{className:"StumbleAndStew game-panel"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"https://octobass.itch.io/solander","aria-label":"Solander",children:Object(r.jsx)("div",{className:"Solander game-panel"})}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:"https://octobass.itch.io/lunar-heist","aria-label":"Lunar Heist",children:Object(r.jsx)("div",{className:"LunarHeist game-panel"})})]})},w=["https://i.imgur.com/A43Lrgs.gif"],N=function(){return Object(r.jsxs)("div",{className:"HatsAndCats App Page",children:[Object(r.jsx)(x,{}),Object(r.jsx)("div",{className:"main-header flex-container",children:Object(r.jsx)("img",{className:"flex-item moody-soup-logo",src:"https://i.imgur.com/XkjWCD5.png",alt:"moody"})}),Object(r.jsxs)("div",{className:"flex-container description",children:[Object(r.jsx)("div",{className:"flex-item",children:Object(r.jsx)("img",{className:"moody-soup-image witch",src:"https://i.imgur.com/oNm60DE.png",alt:"moody"})}),Object(r.jsx)("div",{className:"flex-item moody-soup-description",children:Object(r.jsx)("p",{children:"Hats and Cats - A small jumping platformer where you collect hats and cats. Currently on hold."})})]}),Object(r.jsx)("br",{}),Object(r.jsx)(u,{images:w})]})},_=(s(33),s(6)),S=function(e){var t=e.setSelectedThing,s=e.selectedThing,a=e.icon,i=e.currentlySelectedThing,c=e.title;return Object(r.jsx)("button",{onClick:function(){return t(s)},className:"fade-in fade-in--no-delay halden__button",title:c,children:Object(r.jsx)("i",{className:"fas ".concat(a," halden__icon ").concat(i===s&&"halden__icon--selected")})})},C=function(e){var t={setSelectedThing:e.setSelectedThing,currentlySelectedThing:e.currentlySelectedThing};return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"halden__heading",children:"Halden Parkes"}),Object(r.jsx)("h2",{className:"halden__subheading",children:"Composer, Sound Design"}),Object(r.jsxs)("div",{className:"halden__icons",children:[Object(r.jsx)(S,Object(_.a)(Object(_.a)({},t),{},{icon:"fa-gamepad",selectedThing:"game",title:"Games"})),Object(r.jsx)(S,Object(_.a)(Object(_.a)({},t),{},{icon:"fa-music",selectedThing:"music",title:"Music"})),Object(r.jsx)(S,Object(_.a)(Object(_.a)({},t),{},{icon:"fa-video",selectedThing:"video",title:"Videos"}))]})]})},T=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("iframe",{frameBorder:"0",src:"https://itch.io/embed/2398092?linkback=true&border_width=0&bg_color=3f1259&fg_color=ffffff&link_color=c399e9&border_color=142d2b",width:"550",height:"165",className:"fade-in fade-in--no-delay itch",title:"Stumble and Stew",children:Object(r.jsx)("a",{href:"https://octobass.itch.io/stumble-and-stew",children:"Stumble and Stew by octobass, adamskipadamski, Madmouseman, majicmoo"})}),Object(r.jsx)("iframe",{frameBorder:"0",src:"https://itch.io/embed/3149193?link_color=d79545?linkback=true&border_width=0&bg_color=3a3236&fg_color=ffffff&link_color=d79545&border_color=142d2b",width:"550",height:"165",className:"fade-in fade-in--no-delay itch",title:"Solander",children:Object(r.jsx)("a",{href:"https://octobass.itch.io/solander",children:"Solander by octobass, adamskipadamski, Madmouseman, Odettica, majicmoo"})}),Object(r.jsx)("iframe",{title:"Cat got your tongue?",src:"https://itch.io/embed/1813240?linkback=true&border_width=0&bg_color=1d1e1e&fg_color=ffffff&link_color=7453af&border_color=d589a4",width:"552",height:"167",frameBorder:"0",className:"fade-in fade-in--no-delay itch",children:Object(r.jsx)("a",{href:"https://octobass.itch.io/cat-got-your-tongue",children:"Cat got your tongue? by octobass, adamskipadamski, majicmoo, Madmouseman, Odettica"})}),Object(r.jsx)("iframe",{src:"https://itch.io/embed/1290857?linkback=true&border_width=0&bg_color=d1668c&fg_color=ffffff&link_color=ffffff&border_color=d589a4",width:"550",height:"165",frameBorder:"0",title:"Don't Bug Me!",className:"fade-in fade-in--no-delay itch",children:Object(r.jsx)("a",{href:"https://octobass.itch.io/dont-bug-me",children:"Don't Bug Me! by octobass, majicmoo, Odettica, Madmouseman, adamskipadamski"})}),Object(r.jsx)("iframe",{src:"https://itch.io/embed/838602?linkback=true&border_width=0&bg_color=2f1d37&fg_color=ffffff&link_color=ff0097&border_color=ff0097",width:"550",height:"165",frameBorder:"0",title:"Lunar Heist",className:"fade-in fade-in--no-delay itch",children:Object(r.jsx)("a",{href:"https://octobass.itch.io/lunar-heist",children:"Lunar Heist by octobass, majicmoo, adamskipadamski, Madmouseman"})})]})},A=[{url:"778162075",title:"Invasion",token:"s-mDcPh"},{url:"778163446",title:"Moon",token:"s-Huvgq"},{url:"1171204165",title:"Don't Bug Me",token:"s-YVsG7Igrn73"},{url:"1143224374",title:"Chiptune Scout Theme",token:"s-2mPMuETFVYJ"},{url:"1143224722",title:"Moonshot 2 Chiptune Pie",token:"s-ogX3ttZCEmg"},{url:"778163989",title:"Haunting",token:"s-bSsgR"},{url:"1143225370",title:"Lunar Heist Menu",token:"s-4JJ7xGOOHUx"},{url:"1143291115",token:"s-Ol2tQ2J3Qmo",title:"Cat Dream"},{url:"1143291820",token:"s-ie3Iqou07Gr",title:"Broomstick"},{url:"1143225097",token:"s-rFH3T8g5u2s",title:"Moonshot 2 Pie"},{url:"1143292546",token:"s-sEuVkkhFn4g",title:"Hats and Cats"},{url:"1143289387",token:"s-sOl9WvLAFQZ",title:"Sinister"},{url:"590448240",token:"s-sXqPB",title:"Bullet Hell"},{url:"1143293011",token:"s-0NGfis1iBNw",title:"Loss"},{url:"1143290107",token:"s-ldeCNxVm0Hd",title:"Spiders"},{url:"1143386056",token:"s-eSE91Cm8fFn",title:"Day"},{url:"1143285265",token:"s-pZ1G14HDpL1",title:"Lion fish"}],H=function(e){var t=e.url,s=e.title,a=e.token;return Object(r.jsx)("iframe",{width:"100%",height:"100",scrolling:"no",frameBorder:"no",className:"fade-in fade-in--no-delay",allow:"autoplay",title:s,src:"https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F".concat(t,"&secret_token=").concat(a,"&show_artwork=true")})},M=function(){return Object(r.jsx)(r.Fragment,{children:A.map((function(e){return Object(r.jsx)(H,Object(_.a)({},e))}))})},P=["https://www.youtube.com/embed/AW86PHPStYs","https://www.youtube.com/embed/-tfsLhDTfOc","https://www.youtube.com/embed/swfyTCgzd3I","https://www.youtube.com/embed/BhIKuS_V3lk","https://www.youtube.com/embed/Q2SCh_gSmxU","https://www.youtube.com/embed/OGdQkTpgUSc","https://www.youtube.com/embed/OPWefuZTObA"],B=function(e){var t=e.src;return Object(r.jsx)("div",{className:"halden__video-container fade-in fade-in--no-delay",children:Object(r.jsx)("iframe",{width:"483",height:"272",src:t,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"halden__video"})})},I=function(){return Object(r.jsx)(r.Fragment,{children:P.map((function(e){return Object(r.jsx)(B,{src:e},e)}))})},L=function(){var e=Object(a.useState)(void 0),t=Object(p.a)(e,2),s=t[0],i=t[1];return Object(r.jsx)("div",{className:"Halden font",children:Object(r.jsxs)("div",{className:"halden__wrapper",children:[Object(r.jsx)("div",{className:"halden__image-wrapper",children:Object(r.jsx)("img",{className:"halden__image",src:"https://i.imgur.com/hmOoxWl.gif",alt:""})}),Object(r.jsxs)("div",{className:"halden__right-wrapper",children:[Object(r.jsx)("div",{className:"halden__items",children:Object(r.jsxs)("div",{className:"halden__items-inner",children:["game"===s&&Object(r.jsx)(T,{}),"video"===s&&Object(r.jsx)(I,{}),"music"===s&&Object(r.jsx)(M,{}),void 0===s&&Object(r.jsx)("div",{className:"halden__mobile-head-wrapper",children:Object(r.jsx)("img",{className:"halden__mobile-head",src:"https://i.imgur.com/viy1QC7.png",alt:""})})]})}),Object(r.jsx)(C,{currentlySelectedThing:s,setSelectedThing:i})]})]})})},F=function(){return Object(r.jsx)(n.a,{basename:"",children:Object(r.jsxs)(o.c,{children:[Object(r.jsx)(o.a,{exact:!0,path:"/moody-soup",component:f}),Object(r.jsx)(o.a,{exact:!0,path:"/games",component:v}),Object(r.jsx)(o.a,{exact:!0,path:"/halden",component:L}),Object(r.jsx)(o.a,{exact:!0,path:"/hats-and-cats",component:N}),Object(r.jsx)(o.a,{exact:!0,component:function(){return window.location="https://octobass-games.github.io/vimboy",null},path:"/vimboy"}),Object(r.jsx)(o.a,{exact:!0,path:"/team",component:k}),Object(r.jsx)(o.a,{component:l})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(r.jsx)(F,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.148da1f7.chunk.js.map