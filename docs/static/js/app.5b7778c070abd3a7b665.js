webpackJsonp([0],[,,function(t,e,n){"use strict";e.a={mounted:function(){},methods:{createListener:function(t,e){document.getElementById(t).addEventListener("keydown",function(t){if(13===t.keyCode){var n=t.target.value;document.getElementById("twitchChat").setAttribute("src","https://www.twitch.tv/"+n+"/chat"),e.$store.commit("changeTwitchChatChannel",n)}})}}}},function(t,e,n){"use strict";e.a={methods:{initialSize:function(t,e,n,i){window.addEventListener("load",function(){var a=document.getElementById(t),r=document.getElementById(e).getBoundingClientRect(),o=Number(r.height)-n,s=Number(r.width)-i;a.height=o,a.width=s,a.style.visibility="visible"}),window.addEventListener("resize",function(){var a=document.getElementById(t),r=document.getElementById(e).getBoundingClientRect(),o=Number(r.height)-n,s=Number(r.width)-i;a.height=o,a.width=s})}}}},function(t,e,n){"use strict";var i=n(1),a=n(40),r=n(30),o=n.n(r);i.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"homeComponent",component:o.a}]})},,function(t,e,n){function i(t){n(20)}var a=n(0)(n(11),n(35),i,null,null);t.exports=a.exports},,function(t,e){t.exports={defaultLayout:[{x:0,y:0,w:3,h:20,i:"twitterComponent",id:"gridComponent0"},{x:3,y:0,w:6,h:20,i:"twitchComponent",id:"gridComponent1"},{x:9,y:0,w:3,h:20,i:"twitchChatComponent",id:"gridComponent2"}],smashLayout:[{x:0,y:12,w:6,h:20,i:"twitterComponent",id:"gridComponent0"},{x:0,y:0,w:12,h:20,i:"twitchComponent",id:"gridComponent1"},{x:6,y:12,w:6,h:20,i:"twitchChatComponent",id:"gridComponent2"}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),a=n.n(i),r=n(1),o=n(6),s=n.n(o),c=n(4),u=n(7),d=n(8);r.a.use(u.a);var h=new u.a.Store({state:{gridLayout:JSON.parse(localStorage.getItem("layout"))||d.defaultLayout,twitchChannel:"tradechat",twitchPlayer:{},twitchChatChannel:"tradechat",twitterUser:"KieferSivitz",twitterList:"Smash",displayInputs:!1},mutations:{displayInputs:function(t){t.displayInputs=!0},hideInputs:function(t){t.displayInputs=!1},saveLayout:function(t,e){t.gridLayout=e,localStorage.setItem("layout",a()(e))},changeTwitchChannel:function(t,e){t.twitchChannel=e,t.twitchPlayer.setChannel(e)},storeTwitchPlayer:function(t,e){t.twitchPlayer=e},changeTwitchChatChannel:function(t,e){document.getElementById("twitchChat").setAttribute("src","https://www.twitch.tv/"+e+"/chat"),t.twitchChannel=e},changeTwitterFeed:function(t,e){var n=document.querySelector('iframe[id^="twitter-widget-"]'),i=document.getElementById("gridComponent0").getBoundingClientRect(),a=i.width>=515?60:100;t.twitterList=e.list,t.twitterUser=e.user,n&&n.remove(),window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:e.user,slug:e.list},document.getElementById("twitter-feed"),{theme:"dark",dnt:!0,height:i.height-a})}},actions:{navigationActions:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{twitch:"tradechat",twitter:{user:"KieferSivitz",list:"WoW"}};e("changeTwitterFeed",n.twitter),e("changeTwitchChannel",n.twitch),e("changeTwitchChatChannel",n.twitch)},resizeEvents:function(t,e){function n(t,e,n,i,a,r,o){var s=Number(n)-r,c=Number(i)-o;document.getElementById(a).width=s,document.getElementById(a).height=c}var i=t.commit,a=e.newH,r=e.newW,o=e.newWPx,s=e.newHPx;switch(i("saveLayout",e.layout),e.i){case"twitchComponent":n(a,r,o,s,"twitchPlayer",20,70);break;case"twitterComponent":var c=document.querySelector('iframe[id^="twitter-widget-"]'),u=o>=515?60:100;c.style.height=String(s-u+"px");break;case"twitchChatComponent":n(a,r,o,s,"twitchChat",20,75)}}}});r.a.config.productionTip=!1,new r.a({el:"#app",store:h,router:c.a,template:"<App/>",components:{App:s.a}})},function(t,e){!function(t,e,n){var i,a=t.getElementsByTagName(e)[0],r=window.twttr||{};t.getElementById(n)||(i=t.createElement(e),i.id=n,i.src="https://platform.twitter.com/widgets.js",a.parentNode.insertBefore(i,a),r._e=[],r.ready=function(t){r._e.push(t)})}(document,"script","twitter-wjs")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),a=n(25);e.default={name:"app",data:function(){return{msg:"Welcome to the social media aggregator!"}},mounted:function(){var t=this;a(document).ready(function(){a(".nav li a").click(function(t){a(".nav li").removeClass("active");var e=a(this).parent();e.hasClass("active")||e.addClass("active"),t.preventDefault()})});var e=document.getElementById("navbar"),n=e.getElementsByTagName("li"),r=0;for(r=0;r<n.length;r++)!function(){var e=r-1;n[r].addEventListener("click",function(n){var a=i.hubList[e];t.$store.dispatch("navigationActions",{twitch:a.twitchChannel,twitter:{user:"KieferSivitz",list:a.twitterList}})})}()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(33),a=n.n(i),r=n(32),o=n.n(r),s=n(28),c=n.n(s),u=n(31),d=n.n(u),h=c.a.GridLayout,l=c.a.GridItem;e.default={name:"gridComponent",components:{twitterComponent:a.a,twitchComponent:o.a,GridLayout:h,GridItem:l,twitchChatComponent:d.a},data:function(){return{msg:"Welcome to the social media aggregator!",layout:this.$store.state.gridLayout}},methods:{resizedEvent:function(t,e,n,i,a){this.$store.dispatch("resizeEvents",{i:t,newH:e,newW:n,newWPx:i,newHPx:a,layout:this.layout})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),a=n.n(i);e.default={name:"homeComponent",props:["myLayout"],components:{gridComponent:a.a},data:function(){return{msg:"Welcome to your Content Homepage!",savelayout:this.$store.state.gridLayout}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=n(3);e.default={name:"twitchChatComponent",mixins:[a.a,i.a],data:function(){return{msg:"Welcome to the social media aggregator!",twitchSource:"https://www.twitch.tv/"+this.$store.state.twitchChatChannel+"/chat",props:{width:40,height:40}}},mounted:function(){a.a.methods.initialSize("twitchChat","gridComponent2",60,20),i.a.methods.createListener("twitchChatInput",this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),a=(n.n(i),n(3)),r=n(2);e.default={name:"twitchComponent",mixins:[a.a,r.a],displayInput:!0,data:function(){return{twitchChannel:this.$store.state.twitchChannel,msg:"Welcome to the social media aggregator!",displayInput:this.$store.state.custom}},methods:{renderPlayer:function(t){var e=Number(document.getElementById("gridComponent1").getBoundingClientRect().width)-20,n=Number(document.getElementById("gridComponent1").getBoundingClientRect().height)-60,i={width:e,height:n,channel:t,autoplay:!1};return new window.Twitch.Player("streamWindow",i)}},mounted:function(){var t=this,e=this.$store.state.twitchChannel;window.addEventListener("load",function(){t.twitchPlayer=t.renderPlayer(e),t.$store.commit("storeTwitchPlayer",t.twitchPlayer),document.getElementById("streamWindow").firstChild.id="twitchPlayer",a.a.methods.initialSize("twitchPlayer","gridComponent1",60,20),document.getElementById("twitchInput").addEventListener("keydown",function(e){if(13===e.keyCode){var n=e.target.value;t.$store.commit("changeTwitchChannel",n)}})})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.twttr=n(10),e.default={name:"twitterComponent",data:function(){return{msg:"Welcome to twitter!"}},methods:{createTimeline:function(t,e,n){n.$store.commit("changeTwitterFeed",{user:t,list:e})},inputListener:function(t,e){if(13===t.keyCode){var n=t.target.value;e.$store.commit("changeTwitterFeed",{user:e.$store.state.twitterUser,list:n})}}},mounted:function(){var t=this;document.getElementById("twitter-wjs").addEventListener("load",function(){t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterUser,list:t.$store.state.twitterList})}),document.getElementById("twitterUserInput").addEventListener("keydown",function(e){t.inputListener(e,t)}),document.getElementById("twitterListInput").addEventListener("keydown",function(e){t.inputListener(e,t)})}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVEhLY4CC/1BMbQA3lwlEDASgls8wzBkwH8EAuT7DqW/AfQQDxPqMoLpB4yMYwOVigj6BAbr5iBFKEwvQXU+0fvr5yF1ZhKgwphSgWFQ7ZwWY1rOYBqZhIIFhLpQFA2VQGgIWR0+CsiDg8y1TMB3//QWYBgF40MEsoSZYyCkBZUEtooUlMACzjG6JYdQissGoRWQDcMnwlfMKlAsBR64gMhoIfA36DmVBAPc6TigLAoK+v4eyIGAdpyCUBQFAO+jsIxBjt0wUWAAG/h6YCGUhgCtLDZSFAGd4p0JZCPDhwwcwLSAgwGAuzAJmw33k+mQZlEU9ALMEBOhUTTAwAAAn7ECpE/KSjQAAAABJRU5ErkJggg=="},,function(t,e,n){function i(t){n(22)}var a=n(0)(n(12),n(37),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(23)}var a=n(0)(n(13),n(38),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(21)}var a=n(0)(n(14),n(36),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(19)}var a=n(0)(n(15),n(34),i,null,null);t.exports=a.exports},function(t,e,n){function i(t){n(24)}var a=n(0)(n(16),n(39),i,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchComponent"},[n("input",{attrs:{type:"text",id:"twitchInput",value:"Twitch Channel"}}),t._v(" "),n("div",{attrs:{id:"streamWindow"}})])}]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav",attrs:{id:"navbar"}},[i("ul",[i("li",[i("a",{staticClass:"active",attrs:{href:"#",id:"icon"}},[i("img",{attrs:{src:n(27)}})])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("CS:GO")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("DotA")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Hearthstone")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("LoL")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Overwatch")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Smash")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#",id:"navCustom"}},[t._v("Custom")])]),t._v(" "),i("li",{staticStyle:{float:"right"}},[i("a",{attrs:{href:"#"}},[t._v("About")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchChatComponent"},[n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitchChatInput",value:"Chat Channel"}}),t._v(" "),n("iframe",{staticStyle:{visibility:"hidden"},attrs:{src:t.twitchSource,frameborder:"0",scrolling:"no",id:"twitchChat",width:t.props.width,height:t.props.height,allowfullscreen:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gridComponent"},[n("div",{staticClass:"layout"},[n("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,function(e){return n("grid-item",{key:e.id,staticClass:"gridItems",attrs:{id:e.id,x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{resized:t.resizedEvent}},[n(e.i,{tag:"component",staticClass:"componentContainer"})],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentContainer"},[n("div",{staticClass:"page-title"}),t._v(" "),n("gridComponent",{attrs:{"my-layout":t.savelayout}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h5",[t._v("\n            More features coming in the near future!\n            "),n("br")]),t._v(" "),n("p",[t._v("\n            Keep up to date by following this project on "),n("a",{attrs:{href:"https://github.com/KieferSivitz/ContentHomepage"}},[t._v("GitHub")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitterComponent",attrs:{id:"twitterComponent"}},[n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitterUserInput",value:"Twitter Username"}}),t._v(" "),n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitterListInput",value:"Twitter List"}}),t._v(" "),n("div",{attrs:{id:"twitter-feed"}})])}]}},,,,function(t,e){t.exports={hubList:[{twitchChannel:"dreamhackcs",twitterList:"CSGO"},{twitchChannel:"arteezy",twitterList:"DotA"},{twitchChannel:"savjz",twitterList:"Hearthstone"},{twitchChannel:"riotgames",twitterList:"LoL"},{twitchChannel:"greekgodx",twitterList:"Overwatch"},{twitchChannel:"vgbootcamp",twitterList:"Smash"},{twitchChannel:"tradechat",twitterList:"WoW"}]}}],[9]);
//# sourceMappingURL=app.5b7778c070abd3a7b665.js.map