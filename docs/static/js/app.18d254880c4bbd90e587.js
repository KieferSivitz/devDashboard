webpackJsonp([0],[,function(t,e,n){function i(t){n(21)}var o=n(0)(n(10),n(30),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(20)}var o=n(0)(n(12),n(29),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(18)}var o=n(0)(n(13),n(27),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(23)}var o=n(0)(n(14),n(32),i,null,null);t.exports=o.exports},,function(t,e,n){"use strict";var i=n(5),o=n(33),r=n(26),a=n.n(r);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"homeComponent",component:a.a}]})},function(t,e,n){function i(t){n(19)}var o=n(0)(n(9),n(28),i,null,null);t.exports=o.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),o=n(7),r=n.n(o),a=n(4),c=n.n(a),s=n(3),d=n.n(s),u=n(1),m=n.n(u),l=n(2),h=n.n(l),p=n(6);i.a.config.productionTip=!1,new i.a({el:"#app",router:p.a,template:"<App/>",components:{App:r.a}}),i.a.component({el:"#twitterComponent",router:p.a,template:"<twitterComponent/>",components:{twitterComponent:c.a}}),i.a.component({el:"#twitchComponent",router:p.a,template:"<twitchComponent/>",components:{twitchComponent:d.a}}),i.a.component({el:"#twitchChatComponent",router:p.a,template:"<twitchChatComponent/>",components:{twitchChatComponent:h.a}}),i.a.component({el:"#gridComponent",router:p.a,template:"<gridComponent/>",components:{gridComponent:m.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{msg:"Welcome to the social media aggregator!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),o=n.n(i),r=n(4),a=n.n(r),c=n(3),s=n.n(c),d=n(25),u=n.n(d),m=n(2),l=n.n(m),h=u.a.GridLayout,p=u.a.GridItem;e.default={name:"gridComponent",components:{twitterComponent:a.a,twitchComponent:s.a,GridLayout:h,GridItem:p,twitchChatComponent:l.a},data:function(){return{msg:"Welcome to the social media aggregator!",layout:function(){var t=[{x:0,y:0,w:3,h:20,i:"twitterComponent",id:"gridComponent0"},{x:6,y:0,w:6,h:12,i:"twitchComponent",id:"gridComponent1"},{x:3,y:0,w:3,h:20,i:"twitchChatComponent",id:"gridComponent2"},{x:6,y:12,w:6,h:6,i:"adsenseComponent",id:"gridComponent3"}];return localStorage.getItem("layout")?JSON.parse(localStorage.getItem("layout")):t}()}},methods:{resizeWithContainer:function(t,e,n,i,o,r,a,c){var s=Number(i)-a,d=Number(o)-c;document.getElementById(r).width=s,document.getElementById(r).height=d},resizeWithContainerWidescreen:function(t,e,n,i,o,r,a,c){var s=Number(i)-20,d=s*(9/16);d>Number(o)-c&&(d=Number(o)-c),document.getElementById(r).width=s,document.getElementById(r).height=d},resizedEvent:function(t,e,n,i,o){switch(t){case"twitchComponent":this.storeItemProperties(),this.resizeWithContainerWidescreen(t,e,n,i,o,"twitchPlayer",70,70);break;case"twitterComponent":document.querySelector('iframe[id^="twitter-widget-"]').style.height=String(o-70+"px");break;case"twitchChatComponent":this.storeItemProperties(),this.resizeWithContainer(t,e,n,i,o,"twitchChat",40,100)}},storeItemProperties:function(){var t=this.layout;localStorage.setItem("layout",o()(t))},created:function(){window.addEventListener("load",function(){console.log("Loaded")})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=n.n(i);e.default={name:"homeComponent",components:{gridComponent:o.a},data:function(){return{msg:"Welcome to your Content Homepage!"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"twitchChatComponent",data:function(){return{msg:"Welcome to the social media aggregator!",props:{width:40,height:40}}},methods:{},mounted:function(){window.addEventListener("load",function(){var t=document.getElementById("twitchChat"),e=document.getElementById("gridComponent2").getBoundingClientRect(),n=Number(e.height)-100,i=Number(e.width)-40;t.height=n,t.width=i,t.style.visibility="visible"}),document.getElementById("twitchChatInput").addEventListener("keydown",function(t){if(13===t.keyCode){var e=t.target.value;document.getElementById("twitchChat").setAttribute("src","https://www.twitch.tv/"+e+"/chat")}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(24);n.n(i);e.default={name:"twitchComponent",data:function(){return{msg:"Welcome to the social media aggregator!"}},methods:{renderPlayer:function(t){var e=Number(document.getElementById("gridComponent1").getBoundingClientRect().width)-40,n=Number(document.getElementById("gridComponent1").getBoundingClientRect().height)-70,i={width:e,height:n,channel:t,autoplay:!0};return new window.Twitch.Player("streamWindow",i)}},mounted:function(){var t=this;window.addEventListener("load",function(){var e=t.renderPlayer("tradechat");document.getElementById("streamWindow").firstChild.id="twitchPlayer",window.addEventListener("resize",function(){var t=Number(document.getElementById("gridComponent1").getBoundingClientRect().width)-70,e=t*(9/16),n=document.getElementById("gridComponent1").getBoundingClientRect().height;e>n-70&&(e=n-70),document.getElementById("twitchPlayer").width=t,document.getElementById("twitchPlayer").height=e}),document.getElementById("twitchInput").addEventListener("keydown",function(t){if(13===t.keyCode){var n=t.target.value;e.setChannel(n)}})})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"twitterComponent",data:function(){return{msg:"Welcome to twitter!"}},methods:{createTwitterFeed:function(t,e){document.querySelector('iframe[id^="twitter-widget-"]').remove(),window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:t,slug:e},document.getElementById("twitter-feed"),{theme:"dark",height:document.getElementById("gridComponent0").getBoundingClientRect().height-70})},createTimeline:function(t,e){document.getElementById("twitter-wjs").addEventListener("load",function(){twttr.ready(function(n){window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:t,slug:e},document.getElementById("twitter-feed"),{theme:"dark",height:document.getElementById("gridComponent0").getBoundingClientRect().height-70})})})}},beforeMount:function(){window.twttr=function(t,e,n){var i,o=t.getElementsByTagName(e)[0],r=window.twttr||{};return t.getElementById(n)?r:(i=t.createElement(e),i.id=n,i.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(i,o),r._e=[],r.ready=function(t){r._e.push(t)},r)}(document,"script","twitter-wjs"),this.createTimeline("KieferSivitz","Smash")},mounted:function(){var t=this;document.getElementById("twitterInput").addEventListener("keydown",function(e){if(13===e.keyCode){var n=e.target.value;t.createTwitterFeed("KieferSivitz",n)}})}}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){function i(t){n(22)}var o=n(0)(n(11),n(31),i,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchComponent"},[n("span",{staticClass:"input-descriptor",staticStyle:{color:"white"}},[t._v("Change the channel: ")]),n("input",{attrs:{type:"text",id:"twitchInput"}}),t._v(" "),n("div",{attrs:{id:"streamWindow"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchChatComponent"},[n("span",{staticClass:"input-descriptor",staticStyle:{color:"white"}},[t._v("Change the chat channel: ")]),n("input",{attrs:{type:"text",id:"twitchChatInput"}}),t._v(" "),n("iframe",{staticStyle:{visibility:"hidden"},attrs:{frameborder:"0",scrolling:"no",id:"twitchChat",src:"https://www.twitch.tv/tradechat/chat",width:t.props.width,height:t.props.height,allowfullscreen:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gridComponent"},[n("div",{staticClass:"layout"},[n("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,function(e){return n("grid-item",{key:e.id,staticClass:"gridItems",attrs:{id:e.id,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{resized:t.resizedEvent}},[n(e.i,{tag:"component",staticClass:"componentContainer"})],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentContainer"},[t._m(0),t._v(" "),n("gridComponent"),t._v(" "),t._m(1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h1",[t._v("\n            Welcome to the Content Homepage!\n        ")]),t._v(" "),n("h3",[t._v("\n            Currently combining Twitch and Twitter for Super Smash Brothers Melee!\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h5",[t._v("\n            More sites and functionality coming in the near future! (Twitch chat, personalized twitter feed, twitch channel options)\n        ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitterComponent",attrs:{id:"twitterComponent"}},[n("span",{staticClass:"input-descriptor",staticStyle:{color:"white"}},[t._v("Use your own twitter list!: ")]),n("input",{attrs:{type:"text",id:"twitterInput"}}),t._v(" "),n("div",{attrs:{id:"twitter-feed"}})])}]}}],[8]);
//# sourceMappingURL=app.18d254880c4bbd90e587.js.map