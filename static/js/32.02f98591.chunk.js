"use strict";(self.webpackChunkmillionaire_game=self.webpackChunkmillionaire_game||[]).push([[32],{32:function(e,r,t){t.r(r),t.d(r,{Finish:function(){return L},Game:function(){return se},Start:function(){return ue}});var a=t(439),n=t(689),c=t(87),l=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},i=t(641),s={"main-layout":"MainLayout_main-layout__Oynht","main-layout--primary":"MainLayout_main-layout--primary__j770Y","main-layout__cover":"MainLayout_main-layout__cover__4J+66","main-layout__content":"MainLayout_main-layout__content__qIiEb"},o=t(184),d="primary",_=function(e){var r=e.children,t=e.variant,a=void 0===t?d:t;return(0,o.jsxs)("div",{className:"".concat(s["main-layout"]," ").concat(s["main-layout--".concat(a)]),children:[(0,o.jsx)("div",{className:s["main-layout__cover"]}),(0,o.jsx)("div",{className:s["main-layout__content"],children:r})]})},u=t(142);function w(e,r,t){return(r=(0,u.Z)(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){w(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p,v={button:"Button_button__SYhP+","button--primary":"Button_button--primary__oyrq8"},y=["children","className","variant"],b="primary",j=function(e){var r=e.children,t=e.className,a=e.variant,n=void 0===a?b:a,c=m(e,y);return(0,o.jsx)("button",h(h({className:"".concat(t," ").concat(v.button," ").concat(v["button--".concat(n)])},c),{},{children:r}))},g={text:"Text_text__iD62t","text--h1":"Text_text--h1__RsTTj"},x="p",C=function(e){var r=e.children,t=e.className,a=e.variant,n=void 0===a?x:a;return(0,o.jsx)("div",{className:"".concat(t," ").concat(g.text," ").concat(g["text--".concat(n)]),children:r})},O="Finish_finish__nCp6i",N="Finish_finish__sub-heading__5pWzU",S="Finish_finish__heading__N2hxm",q="Finish_finish__button__hcACq",L=function(){var e=(0,n.s0)(),r=(0,c.lr)(),t=(0,a.Z)(r,1)[0],s=l(t.get("reward")||0);return(0,o.jsx)(_,{variant:"secondary",children:(0,o.jsxs)("div",{className:O,children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(C,{className:N,children:"Total earned: "}),(0,o.jsxs)(C,{variant:"h1",className:S,children:["$",s," earned"]})]}),(0,o.jsx)(j,{className:q,variant:"primary",onClick:function(){return e(i.Z.START)},children:"Try again"})]})})},P=t(791),R=JSON.parse('{"questions":[{"id":1,"question":"What is the capital of France?","reward":500,"multiple":false,"answers":[{"id":1,"answer":"Paris","correct":true},{"id":2,"answer":"London","correct":false},{"id":3,"answer":"Berlin","correct":false},{"id":4,"answer":"Rome","correct":false}]},{"id":2,"question":"In the UK, the abbreviation NHS stands for National what Service?","reward":1000,"multiple":false,"answers":[{"id":1,"answer":"Health","correct":true},{"id":2,"answer":"Hospital","correct":false},{"id":3,"answer":"Hospice","correct":false},{"id":4,"answer":"Home","correct":false}]},{"id":3,"question":"Which of these colours is NOT featured in the logo for Google?","reward":2000,"multiple":false,"answers":[{"id":1,"answer":"Green","correct":false},{"id":2,"answer":"Red","correct":false},{"id":3,"answer":"Blue","correct":false},{"id":4,"answer":"Black","correct":true}]},{"id":4,"question":"Which sign of the zodiac is represented by the Crab?","reward":4000,"multiple":false,"answers":[{"id":1,"answer":"Cancer","correct":true},{"id":2,"answer":"Leo","correct":false},{"id":3,"answer":"Virgo","correct":false},{"id":4,"answer":"Libra","correct":false}]},{"id":5,"question":"Which of these is a type of woodwind instrument?","reward":8000,"multiple":false,"answers":[{"id":1,"answer":"Trumpet","correct":false},{"id":2,"answer":"Trombone","correct":false},{"id":3,"answer":"Flute","correct":true},{"id":4,"answer":"Oboe","correct":false}]},{"id":6,"question":"Which of these is a type of conifer?","reward":16000,"multiple":false,"answers":[{"id":1,"answer":"Pine","correct":true},{"id":2,"answer":"Oak","correct":false},{"id":3,"answer":"Maple","correct":false},{"id":4,"answer":"Birch","correct":false}]},{"id":7,"question":"Which of these is a type of pasta?","reward":32000,"multiple":true,"answers":[{"id":1,"answer":"Spaghetti","correct":true},{"id":2,"answer":"Lasagne","correct":false},{"id":3,"answer":"Bolognese","correct":true},{"id":4,"answer":"Tagliatelle","correct":false}]},{"id":8,"question":"Which of these is a type of cheese?","reward":64000,"multiple":false,"answers":[{"id":1,"answer":"Barely Boozed","correct":true},{"id":2,"answer":"Tomatoes","correct":false},{"id":3,"answer":"Spoon","correct":false},{"id":4,"answer":"Ryan Gosling","correct":false}]},{"id":9,"question":"Which of these is NOT a type of dog breed?","reward":125000,"multiple":false,"answers":[{"id":1,"answer":"Poodle","correct":false},{"id":2,"answer":"Pug","correct":false},{"id":3,"answer":"Pitbull","correct":false},{"id":4,"answer":"Sphynx","correct":true}]},{"id":10,"question":"What year the JavaScript language was invented?","reward":250000,"multiple":false,"answers":[{"id":1,"answer":"1995","correct":true},{"id":2,"answer":"1996","correct":false},{"id":3,"answer":"1994","correct":false},{"id":4,"answer":"None of the above","correct":false}]},{"id":11,"question":"In 1718, which pirate died in battle off the coast of what is now North Carolina?","reward":500000,"multiple":false,"answers":[{"id":1,"answer":"Captain Hook","correct":false},{"id":2,"answer":"Blackbeard","correct":true},{"id":3,"answer":"Captain Jack Sparrow","correct":false},{"id":4,"answer":"Captain Morgan","correct":false}]},{"id":12,"question":"Which of these religious observances lasts for the shortest period of time during the calendar year?","reward":1000000,"multiple":false,"answers":[{"id":1,"answer":"Ramadan","correct":false},{"id":2,"answer":"Hanukkah","correct":false},{"id":3,"answer":"Eid al-Fitr","correct":false},{"id":4,"answer":"Diwali","correct":true}]}]}'),E={"answer-cell":"AnswerCell_answer-cell__EW0XV","answer-cell__content":"AnswerCell_answer-cell__content__F23g-","answer-cell__variant":"AnswerCell_answer-cell__variant__My4Vj","answer-cell__line":"AnswerCell_answer-cell__line__2s6zS","answer-cell__line--left":"AnswerCell_answer-cell__line--left__klGjZ","answer-cell__line--right":"AnswerCell_answer-cell__line--right__wvDES","answer-cell--selected":"AnswerCell_answer-cell--selected__iN4Fy","answer-cell--correct":"AnswerCell_answer-cell--correct__ZuNsD","answer-cell--incorrect":"AnswerCell_answer-cell--incorrect__5Lop9"},k="selected",Z="correct",M="incorrect",B=function(e){var r=e.answer,t=e.resetAnswerState,n=e.setCorrect,c=e.setIncorrect,l=(0,P.useState)(""),i=(0,a.Z)(l,2),s=i[0],d=i[1];(0,P.useEffect)((function(){t&&d("")}),[t]);return(0,o.jsxs)("div",{className:"".concat(E["answer-cell"]," ").concat(E["answer-cell--".concat(s)]),onClick:function(){d(k),s===k&&(r.correct?(d(Z),n(!0)):(d(M),c(!0)))},children:[(0,o.jsx)("div",{className:"".concat(E["answer-cell__line"]," ").concat(E["answer-cell__line--left"],"  ").concat(E["answer-cell--line--".concat(s,"--left")])}),(0,o.jsxs)("div",{className:E["answer-cell__content"],children:[(0,o.jsx)("div",{className:E["answer-cell__variant"],children:"ABCD"[r.id-1]}),(0,o.jsx)("div",{className:E["answer-cell__answer"],children:r.answer})]}),(0,o.jsx)("div",{className:"".concat(E["answer-cell__line"]," ").concat(E["answer-cell__line--".concat(s,"--right")]," ").concat(E["answer-cell__line--right"])})]})},T=["title","titleId"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},I.apply(this,arguments)}function W(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function A(e,r){var t=e.title,a=e.titleId,n=W(e,T);return P.createElement("svg",I({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},n),t?P.createElement("title",{id:a},t):null,p||(p=P.createElement("path",{d:"M18.3638 7.05025C18.7544 6.65972 18.7544 6.02656 18.3638 5.63603C17.9733 5.24551 17.3401 5.24551 16.9496 5.63603L11.9999 10.5858L7.05014 5.63606C6.65962 5.24554 6.02645 5.24554 5.63593 5.63606C5.2454 6.02659 5.2454 6.65975 5.63593 7.05028L10.5857 12L5.63591 16.9497C5.24539 17.3403 5.24539 17.9734 5.63591 18.364C6.02643 18.7545 6.6596 18.7545 7.05012 18.364L11.9999 13.4142L16.9496 18.364C17.3402 18.7545 17.9733 18.7545 18.3638 18.364C18.7544 17.9735 18.7544 17.3403 18.3638 16.9498L13.4141 12L18.3638 7.05025Z",fill:"#1C1C21"})))}var H,D,F,G=P.forwardRef(A),Q=(t.p,["title","titleId"]);function J(){return J=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},J.apply(this,arguments)}function V(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function z(e,r){var t=e.title,a=e.titleId,n=V(e,Q);return P.createElement("svg",J({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:r,"aria-labelledby":a},n),t?P.createElement("title",{id:a},t):null,H||(H=P.createElement("path",{d:"M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6C20 6.55228 19.5523 7 19 7H5C4.44772 7 4 6.55228 4 6Z",fill:"#1C1C21"})),D||(D=P.createElement("path",{d:"M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z",fill:"#1C1C21"})),F||(F=P.createElement("path",{d:"M5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18C20 17.4477 19.5523 17 19 17H5Z",fill:"#1C1C21"})))}var Y=P.forwardRef(z),K=(t.p,{header:"Header_header__OKWO7",menu__item:"Header_menu__item__hKVaW"}),X=function(e){var r=e.className,t=e.opened,a=e.openDrawer;return(0,o.jsx)("header",{className:"".concat(r," ").concat(K.header),children:(0,o.jsx)("div",{className:K.menu,children:(0,o.jsx)("div",{className:K.menu__item,onClick:function(){a&&a(!t)},children:t?(0,o.jsx)(G,{}):(0,o.jsx)(Y,{})})})})},U="MoneyList_money-list__iY4SC",$="MoneyList_money-list__item__0nXrt",ee=function(e){var r=e.currentReward,t=R.questions.map((function(e){return e.reward})).reverse();return(0,o.jsx)("div",{className:U,children:t.map((function(e){return(0,o.jsx)("div",{className:$,children:(0,o.jsx)(le,{reward:e,active:r===e})},e)}))})},re="Question_question__aFgvL",te="Question_question__title__yVyIx",ae="Question_question__answers__1OwFQ",ne=function(e){var r=e.question,t=e.nextQuestion,n=e.setReward,c=e.handleGameState,l=(0,P.useState)(!1),i=(0,a.Z)(l,2),s=i[0],d=i[1],_=(0,P.useState)(!1),u=(0,a.Z)(_,2),w=u[0],f=u[1],h=(0,P.useState)(!1),m=(0,a.Z)(h,2),p=m[0],v=m[1];return(0,P.useEffect)((function(){s&&setTimeout((function(){n(2*r.reward),d(!1),v(!0),t(r.id)}),1e3),w&&(n(r.reward),setTimeout((function(){c(!1)}),1e3)),v(!1)}),[s,w]),(0,P.useEffect)((function(){12===r.id&&c(!1)}),[r]),(0,o.jsxs)("div",{className:re,children:[(0,o.jsx)(C,{variant:"h1",className:te,children:r.question}),(0,o.jsx)("div",{className:ae,children:r.answers.map((function(e){return(0,o.jsx)(B,{answer:e,setCorrect:d,setIncorrect:f,resetAnswerState:p},e.id)}))})]})},ce={"reward-cell":"RewardCell_reward-cell__c+nYn","reward-cell__content":"RewardCell_reward-cell__content__Mms4w","reward-cell__content--active":"RewardCell_reward-cell__content--active__SWDNJ","reward-cell__line":"RewardCell_reward-cell__line__dOBYC","reward-cell__line--active":"RewardCell_reward-cell__line--active__QI-MT","reward-cell__line--left":"RewardCell_reward-cell__line--left__XjnI-","reward-cell__line--right":"RewardCell_reward-cell__line--right__LwfwR","reward-cell--active":"RewardCell_reward-cell--active__jCICJ"},le=function(e){var r=e.reward,t=e.active,a=l(r);return(0,o.jsxs)("div",{className:"".concat(ce["reward-cell"]," ").concat(ce["reward-cell--".concat(t?"active":"")]),children:[(0,o.jsx)("div",{className:"".concat(ce["reward-cell__line"]," ").concat(ce["reward-cell__line--left"]," ").concat(ce["reward-cell__line--".concat(t?"active":"")])}),(0,o.jsxs)("div",{className:"".concat(ce["reward-cell__content"]," ").concat(ce["reward-cell__content--".concat(t?"active":"")]),children:["$",a]}),(0,o.jsx)("div",{className:"".concat(ce["reward-cell__line"]," ").concat(ce["reward-cell__line--right"]," ").concat(ce["reward-cell__line--".concat(t?"active":"")])})]})},ie={game__header:"Game_game__header__QBp+L",game__screen:"Game_game__screen__v08e9",game__sidebar:"Game_game__sidebar__JMOq-"},se=function(){var e=(0,n.s0)(),r=R.questions,t=(0,P.useState)(!1),c=(0,a.Z)(t,2),l=c[0],i=c[1],s=(0,P.useState)(r[0].id-1),d=(0,a.Z)(s,2),_=d[0],u=d[1],w=(0,P.useState)(r[0].reward),f=(0,a.Z)(w,2),h=f[0],m=f[1],p=(0,P.useState)(!0),v=(0,a.Z)(p,2),y=v[0],b=v[1];return(0,P.useEffect)((function(){y||e("/finish?reward="+h)}),[y]),(0,o.jsxs)("div",{className:ie.game,children:[(0,o.jsx)(X,{className:ie.game__header,opened:l,openDrawer:i}),l?(0,o.jsx)(ee,{currentReward:h}):(0,o.jsxs)("div",{className:ie.game__screen,children:[(0,o.jsx)(ne,{question:r[_],nextQuestion:u,setReward:m,handleGameState:b}),(0,o.jsx)("div",{className:ie.game__sidebar,children:(0,o.jsx)(ee,{currentReward:h})})]})]})},oe="Start_start__4gZR-",de="Start_start__heading__B5MVj",_e="Start_start__button__Q7zuL",ue=function(){var e=(0,n.s0)();return(0,o.jsx)(_,{children:(0,o.jsxs)("div",{className:oe,children:[(0,o.jsx)(C,{variant:"h1",className:de,children:"Who wants to be a millionaire?"}),(0,o.jsx)(j,{className:_e,variant:"primary",onClick:function(){return e(i.Z.GAME)},children:"Start"})]})})}}}]);
//# sourceMappingURL=32.02f98591.chunk.js.map