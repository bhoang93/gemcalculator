webpackJsonp([0],{68:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),n=r.n(o),a=r(69),l=(r.n(a),r(8)),i=(r.n(l),function(e){var t=e.days,r=e.currentGems,o=e.goBack,a=e.isVisible,i=e.daysLoggedIn,s=e.storyModeGems,c=e.newStory,A=e.tmGems,m=(e.isGlobal,function(e){return 4*Math.floor(e/14)}),f=function(e,t){var r=0,o=Number(t),n=Number(e);if(o<60){var a=function(e,t,a,l,i){o+n>=60?(r+=i,o-=60):o+n>=30?(r+=l,o-=30):o+n>=20?(r+=a,o-=20):o+n>=15?(r+=t,o-=15):o+n>=10&&(r+=e,o-=10)};o>=30?a(0,0,0,0,5):o>=20?a(0,0,0,5,10):o>=15?a(0,0,3,8,13):o>=10?a(0,3,6,11,16):o>=0&&a(5,8,11,16,21)}for(;o.toString().length>2;)o=Number(o.toString().substring(1));o>50?(r+=10,n-=100-o):o+n>50&&(r+=5,n-=50-o);var l=Math.floor(n/50);if(r%10===0)for(var i=l;i>0;i--)r+=i%2===0?10:5;else for(var s=l;s>0;s--)r+=s%2===0?5:10;return r},p=function(e){return e},u=function(e){return 3*Math.floor(e/14)},d=function e(t){var r=0;return e&&(r=9*Math.floor(t/112)),r},g=function(e){var t=0;return A&&(t=20*Math.floor(e/28)),t};return n.a.createElement("div",null,n.a.createElement(l.Animated,{animationIn:"flipInX",isVisible:a},n.a.createElement("p",null,t+" gems from daily log-in."),0!==s?n.a.createElement("p",null,s+" gems from story mode."):n.a.createElement("p",null),n.a.createElement("p",null,m(t)+" gems from fortnights."),n.a.createElement("p",null,f(t,i)+" gems from log-in milestones."),n.a.createElement("p",null,p(t)+" gems from weekly Chopperman missions."),n.a.createElement("p",null,u(t)+" gems from new Colosseum rotations."),!0===c?n.a.createElement("p",null,d(t)+" from upcoming story islands."):n.a.createElement("p",null),!0===A?n.a.createElement("p",null,g(t)+" from Treasure Map Mode."):n.a.createElement("p",null),n.a.createElement("div",{className:"chopper"},n.a.createElement("img",{className:"chopperimg",src:"https://i.imgur.com/SdfzPA4.png",alt:"Chopper Says"}),n.a.createElement("p",{className:"speech-bubble"},"You will have at least "+function(e,t,o){return e+m(e)+f(e,o)+p(e)+u(e)+s+Number(r)+g(e)+d(e)}(t,0,i)+" gems in "+t+" day(s).")),n.a.createElement("button",{onClick:o},"Go Back")))});t.default=i},69:function(e,t,r){var o=r(70);"string"===typeof o&&(o=[[e.i,o,""]]);var n={hmr:!1};n.transform=void 0;r(67)(o,n);o.locals&&(e.exports=o.locals)},70:function(e,t,r){t=e.exports=r(66)(!0),t.push([e.i,'.chopper{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.chopperimg{width:fixed}.speech-bubble{width:300px;position:relative;background:#fff;color:#000;border-radius:.6em;text-align:center;font-size:20px;font-weight:700;padding:25px}.speech-bubble:after{content:"";position:absolute;left:0;top:50%;width:0;height:0;border:20px solid transparent;border-right-color:#fff;border-left:0;border-bottom:0;margin-top:-10px;margin-left:-20px}',"",{version:3,sources:["C:/Users/Brian/desktop/test/gemcalculator/src/Calculator.css"],names:[],mappings:"AAAA,SAAS,oBAAqB,aAAc,qBAAsB,sBAAwB,CAAC,YAAY,WAAa,CAAC,eAAe,YAAa,kBAAmB,gBAAoB,WAAa,mBAAoB,AAAC,kBAAmB,eAAgB,gBAAkB,YAAa,CAAC,qBAAqB,WAAY,kBAAmB,OAAQ,AAAC,QAAS,AAAC,QAAS,AAAC,SAAU,8BAA+B,wBAA4B,cAAe,gBAAiB,iBAAkB,iBAAmB,CAAC",file:"Calculator.css",sourcesContent:[".chopper{display: -ms-flexbox;display: flex;-ms-flex-pack: center;justify-content: center;}.chopperimg{width: fixed;}.speech-bubble{width: 300px;position: relative;background: #ffffff;color: black;border-radius: .6em; text-align: center;font-size: 20px;font-weight: bold;padding: 25px}.speech-bubble:after{content: '';position: absolute;left: 0; top: 50%; width: 0; height: 0;border: 20px solid transparent;border-right-color: #ffffff;border-left: 0;border-bottom: 0;margin-top: -10px;margin-left: -20px;}"],sourceRoot:""}])}});
//# sourceMappingURL=0.49e03aaf.chunk.js.map