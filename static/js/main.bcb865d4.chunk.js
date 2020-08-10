(this["webpackJsonpfasty-frontend"]=this["webpackJsonpfasty-frontend"]||[]).push([[0],{19:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var o,u=n(0),s=n.n(u),c=n(16),a=n.n(c),i=n(6),h=n(1),r={title:"A Basic Course in Dvorak",description:"Source: http://gigliwood.com/abcd/",lessons:[{title:"Lesson 1 Introducing U and H: Home row, Index fingers",sentences:["uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh","uuuu hhhh uuuu hhhh  uuuu hhhh uuuu hhhh","uh uh uh uh","hu hu hu hu","huh huh huh huh","uh huh uh huh uh huh uh huh","h u uh hu uhh huh uhh","h u uh hu uhh huh uhh"]},{title:"Lesson 2 Introducing E and T: Home row, Second fingers",sentences:["eeee tttt eeee tttt  eeee tttt eeee tttt","eeee tttt eeee tttt  eeee tttt eeee tttt","et et et et","tee tee tee tee","tete tete tete tete","eet eet eet eet","t e et te teet tee teet tete et","t e et te teet tee teet tete et"]},{title:"Lesson 3 Comprehensive: E, H, T, U",sentences:["eeee hhhh tttt uuuu","eeee hhhh tttt uuuu","eeee hhhh tttt uuuu","hue hue hue hue  tutu tutu tutu tutu  the the the the  he he he he he","teeth teeth teeth teeth  hut hut hut hut","thee thee thee thee  tutu tutu tutu tutu","eh he hue hut teeth teethe the thee tutu","eh he hue hut teeth teethe the thee tutu"]},{title:"Lesson 4 Introducing O and N: Home row, third fingers",sentences:["oooo nnnn oooo nnnn  oooo nnnn oooo nnnn","oooo nnnn oooo nnnn  oooo nnnn oooo nnnn","no no no no","on on on on","non non non non","noon noon noon noon","ono ono ono ono","no non noon on noo ono","no non noon on noo ono"]},{title:"Lesson 5 Comprehensive, including O and N",sentences:["HUN","eeee hhhh nnnn oooo tttt uuuu","en en en en  ho ho ho ho  ne ne ne ne  nu nu nu nu  oh oh oh oh  to to to to","hen hen hen hen  hoe hoe hoe hoe  hot hot hot hot  Hun Hun Hun Hun","nee nee nee nee  net net net net  not not not not  nun nun nun nun","nut nut nut nut  one one one one  out out out out  ten ten ten ten","TNT TNT TNT TNT  toe toe toe toe  ton ton ton ton  too too too too","tot tot tot tot  tun tun tun tun"]},{title:"Lesson 6 Introducing A and S: Home row, fourth fingers",sentences:["to be updated"]},{title:"Lesson 7 Comprehensive, including A and S",sentences:["to be updated"]},{title:"Lesson 8 Introducing I and D: Index finger stretching in the home row",sentences:["to be updated"]},{title:"Lesson 9 Comprehensive, including I and D (entire home row)",sentences:["to be updated"]},{title:"Lesson 10 Introducing P and G: First fingers reaching up",sentences:["to be updated"]},{title:"Lesson 11 Comprehensive, including P and G",sentences:["to be updated"]},{title:"Lesson 12 Introducing . and C: Second fingers reaching up",sentences:["to be updated"]},{title:"Lesson 13 Comprehensive, including . and C",sentences:["to be updated"]},{title:"Lesson 14 Introducing , and R: Third fingers reaching up",sentences:["to be updated"]},{title:"Lesson 15 Comprehensive, including , and R",sentences:["to be updated"]},{title:"Lesson 16 Introducing ' and L: Fourth fingers reaching up",sentences:["to be updated"]},{title:"Lesson 17 Comprehensive, including ' and L",sentences:["to be updated"]},{title:"Lesson 18 Introducing Y and F: Index fingers stretching up",sentences:["to be updated"]},{title:"Lesson 19 Comprehensive, including Y and F (full upper/home rows)",sentences:["to be updated"]},{title:"Lesson 20 Introducing K and M: Index fingers reaching down",sentences:["to be updated"]},{title:"Lesson 21 Comprehensive, including K and M",sentences:["to be updated"]},{title:"Lesson 22 Introducing J and W: Second fingers reaching down",sentences:["to be updated"]},{title:"Lesson 23 Comprehensive, including J and W",sentences:["to be updated"]},{title:"Lesson 24 Introducing Q and V: Third fingers reaching down",sentences:["to be updated"]},{title:"Lesson 25 Comprehensive, including Q and V",sentences:["to be updated"]},{title:"Lesson 26 Introducing ; and Z: Fourth fingers reaching down",sentences:["to be updated"]},{title:"Lesson 27 Comprehensive, including ; and Z",sentences:["to be updated"]},{title:"Lesson 28 Introducing X and B: Index fingers stretching down",sentences:["to be updated"]},{title:"Lesson 29 Comprehensive, including X and B (This is it, folks!)",sentences:["to be updated"]}]},d=n(9),l=n(17),p=n(13);!function(e){e[e.Inactive=1]="Inactive",e[e.Active=2]="Active",e[e.Done=3]="Done"}(o||(o={}));var g=function(e){switch(e){case o.Inactive:return"gray";case o.Active:return"black";case o.Done:return"green"}},m=function e(){var t=this;Object(l.a)(this,e),this.accepted="",this.missTyped="",this.concatinated=function(){return t.accepted+t.missTyped},this.backspace=function(){t.missTyped.length>0?t.missTyped=t.missTyped.slice(0,-1):t.accepted.length>0&&(t.accepted=t.accepted.slice(0,-1))},this.add=function(e,n){n?t.accepted+=e:t.missTyped+=e},this.getAccepted=function(){return t.accepted.replace(/ /gi,"\u2423")},this.getMissTyped=function(){return t.missTyped.replace(/ /gi,"\u2423")},this.clone=function(){var n=new e;return n.accepted=t.accepted,n.missTyped=t.missTyped,n}},f=Array.from({length:26},(function(e,t){return String.fromCharCode("a".charCodeAt(0)+t)})),b=Array.from({length:26},(function(e,t){return String.fromCharCode("A".charCodeAt(0)+t)})),v=f.concat(b,[" "]),E=function(e){var t=Object(u.useState)(new m),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(p.a)("Backspace",(function(t){e.state===o.Active&&a((function(e){return e.backspace(),e.clone()}))})),Object(p.a)(v,(function(t){e.state===o.Active&&a((function(n){var o=n.concatinated()+t.key;return n.add(t.key,function(t){return e.sentence.startsWith(t)}(o)),n.clone()}))})),Object(u.useEffect)((function(){c.getAccepted()===e.sentence.replace(/ /gi,"\u2423")&&e.state!==o.Done&&e.done()})),Object(u.useEffect)((function(){a(new m)}),[e]),s.a.createElement("div",null,s.a.createElement("div",{style:{color:g(e.state)}},e.sentence.replace(/ /gi,"\u2423")),s.a.createElement("div",null,s.a.createElement("span",null,c.getAccepted()),s.a.createElement("span",{style:{color:"red"}},c.getMissTyped())))},L=function(e){var t=Object(h.g)().lessonId;console.log(t);var n=parseInt(t),c=e.course.lessons[n-1],a=Object(u.useState)(0),i=Object(d.a)(a,2),r=i[0],l=i[1],p=Object(u.useState)(new Set),g=Object(d.a)(p,2),m=g[0],f=g[1];if(void 0===c)return s.a.createElement("div",null,"404");var b=function(e){return function(){f((function(t){return t.add(e),t})),l((function(t){return e+1}))}},v=c.sentences.map((function(e,t){if(m.has(t))return s.a.createElement(E,{sentence:e,done:b(t),key:t,state:o.Done});var n=t===r?o.Active:o.Inactive;return s.a.createElement(E,{sentence:e,done:b(t),key:t,state:n})}));return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h3",null,c.title)),s.a.createElement("div",null,v))},I=new Map([["abcd",r]]),y=function(e){var t=Object(h.g)().courseSlug,n=Object(h.h)(),o=n.path,u=n.url,c=I.get(t);if(void 0===c)return s.a.createElement("div",null,"404");var a=c.lessons.map((function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(i.b,{to:"".concat(u,"/lessons/").concat(t+1)},e.title))}));return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h2",null,c.title),c.description&&s.a.createElement("p",null,c.description)),s.a.createElement(h.d,null,s.a.createElement(h.b,{exact:!0,path:o},s.a.createElement("ul",null,a)),s.a.createElement(h.b,{exact:!0,path:"".concat(o,"/lessons")},s.a.createElement(h.a,{to:u})),s.a.createElement(h.b,{path:"".concat(o,"/lessons/:lessonId")},s.a.createElement(L,{course:c}))))},C=function(){return s.a.createElement(i.a,null,s.a.createElement("div",null,s.a.createElement("nav",null,s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(i.b,{to:"/"},"Home")),s.a.createElement("li",null,s.a.createElement(i.b,{to:"/courses/abcd"},"A Basic Course in Dvorak")))),s.a.createElement(h.d,null,s.a.createElement(h.b,{path:"/courses/:courseSlug",component:y}))))};a.a.render(s.a.createElement(C,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bcb865d4.chunk.js.map