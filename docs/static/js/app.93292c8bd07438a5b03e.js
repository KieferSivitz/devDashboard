webpackJsonp([0],[,,function(t,e,n){"use strict";e.a={methods:{parentSize:function(t,e,n,i){var o=document.getElementById(t),r=document.getElementById(e).parentNode.getBoundingClientRect(),a=Number(r.height)-n,c=Number(r.width)-i;window.addEventListener("load",function(){r=document.getElementById(e).parentNode.getBoundingClientRect(),a=Number(r.height)-n,c=Number(r.width)-i,o.height=a,o.width=c,o.style.visibility="visible"}),window.addEventListener("resize",function(){o.height=a,o.width=c})}}}},,function(t,e,n){"use strict";e.a={mounted:function(){},methods:{createListener:function(t,e){document.getElementById(t).addEventListener("keydown",function(t){if(13===t.keyCode){var n=t.target.value;document.getElementById("twitchChat").setAttribute("src","https://www.twitch.tv/"+n+"/chat"),e.$store.commit("changeTwitchChatChannel",n)}})}}}},function(t,e,n){"use strict";var i=n(1),o=n(40),r=n(30),a=n.n(r);i.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"homeComponent",component:a.a}]})},function(t,e,n){function i(t){n(20)}var o=n(0)(n(11),n(35),i,null,null);t.exports=o.exports},,function(t,e){t.exports={defaultLayout:[{x:0,y:0,w:3,h:20,i:"twitter0",id:"gridComponent0",componentType:"twitterComponent"},{x:3,y:0,w:6,h:20,i:"twitch0",id:"gridComponent1",componentType:"twitchComponent"},{x:9,y:0,w:3,h:20,i:"twitchChat0",id:"gridComponent2",componentType:"twitchChatComponent"}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1),a=n(6),c=n.n(a),s=n(5),h=n(7),u=n(8);r.a.use(h.a);var m=new h.a.Store({state:{componentCounts:{twitch:0,twitter:0,twitchChat:0},gridLayout:u.defaultLayout,twitchComponents:JSON.parse(localStorage.getItem("twitchComponents"))||[{twitchChannel:"tradechat",twitchPlayer:{},twitchElement:"twitchPlayer0"}],twitterComponents:[{twitterUser:"KieferSivitz",twitterList:"Smash",UID:8}],twitchChatComponents:[{twitchChatChannel:"tradechat"}]},mutations:{addTwitchComponent:function(t){++t.componentCounts.twitch},addTwitterComponent:function(t,e){++t.componentCounts.twitter,t.twitterComponents[t.componentCounts.twitter-1].UID=e},addTwitchChatComponent:function(t){++t.componentCounts.twitchChat},removeTwitchComponent:function(t){--t.componentCounts.twitch},removeTwitterComponent:function(t){--t.componentCounts.twitter},removeTwitchChatComponent:function(t){--t.componentCounts.twitchChat},saveLayout:function(t,e){t.gridLayout=e,localStorage.setItem("layout",o()(e))},deleteGridItem:function(t,e){t.gridLayout.splice(Number(e),1)},changeTwitchChannel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{channel:"tradechat",component:0};t.twitchComponents[e.component].twitchChannel=e.channel,t.twitchComponents[e.component].twitchPlayer.setChannel(e.channel)},storeTwitchPlayer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{player:{},component:0};t.twitchComponents[e.component].twitchPlayer=e.player},addTwitchItem:function(t,e){var n=t.gridLayout,i=t.twitchComponents;n.push({x:4,y:20,w:3,h:6,i:"twitch"+t.componentCounts.twitch,id:"gridComponent"+t.gridLayout.length,componentType:"twitchComponent"}),i.push({twitchChannel:e,twitchPlayer:{},twitchElement:"twitchPlayer"+t.twitchComponents.length})},changeTwitchChatChannel:function(t,e){document.getElementById("twitchChat").setAttribute("src","https://www.twitch.tv/"+e+"/chat"),t.twitchComponents[0].twitchChannel=e},changeTwitterFeed:function(t,e){var n=document.querySelector('iframe[id^="twitter-widget-"]'),i=document.getElementById(e.componentID).parentNode.getBoundingClientRect(),o=i.width>=515?60:100;t.twitterComponents[0].twitterList=e.list,t.twitterComponents[0].twitterUser=e.user,n&&n.remove(),window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:e.user,slug:e.list},document.getElementById("twitter-feed"),{theme:"dark",dnt:!0,height:i.height-o})}},actions:{navigationActions:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{twitch:{channel:"tradechat",component:0},twitter:{user:"KieferSivitz",list:"WoW",componentID:"twitterComponent8"}};e("changeTwitterFeed",n.twitter),e("changeTwitchChannel",n.twitch),e("changeTwitchChatChannel",n.twitch.channel)},removeGridItem:function(t,e){var n=t.commit,i=t.state,o=i.gridLayout[e.charAt(e.length-1)].i,r=o.substring(0,o.length-1);switch(n("deleteGridItem",e.charAt(e.length-1)),!0){case r.includes("twitchChat"):n("removeTwitchChatComponent");break;case r.includes("twitch"):n("removeTwitchComponent");break;case r.includes("twitter"):n("removeTwitterComponent")}}}});r.a.config.productionTip=!1,new r.a({el:"#app",store:m,router:s.a,template:"<App/>",components:{App:c.a}})},function(t,e){!function(t,e,n){var i,o=t.getElementsByTagName(e)[0],r=window.twttr||{};t.getElementById(n)||(i=t.createElement(e),i.id=n,i.src="https://platform.twitter.com/widgets.js",o.parentNode.insertBefore(i,o),r._e=[],r.ready=function(t){r._e.push(t)})}(document,"script","twitter-wjs")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),o=n(25);e.default={name:"app",data:function(){return{msg:"Welcome to the social media aggregator!"}},mounted:function(){var t=this;o(document).ready(function(){o(".nav li a").click(function(t){o(".nav li").removeClass("active");var e=o(this).parent();e.hasClass("active")||e.addClass("active"),t.preventDefault()})});var e=document.getElementById("navbar"),n=e.getElementsByTagName("li"),r=0;for(r=0;r<n.length;r++)!function(){var e=r-1;n[r].addEventListener("click",function(n){var o=i.hubList[e];t.$store.dispatch("navigationActions",{twitch:{channel:o.twitchChannel,component:0},twitter:{user:"KieferSivitz",list:o.twitterList,componentID:t.$store.state.twitterComponents[0].UID}})})}()}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),o=n.n(i),r=n(1),a=n(33),c=n.n(a),s=n(32),h=n.n(s),u=n(28),m=n.n(u),d=n(2),l=n(31),w=n.n(l),p=m.a.GridLayout,C=m.a.GridItem;e.default={name:"gridComponent",mixins:[d.a],components:{twitterComponent:c.a,twitchComponent:h.a,GridLayout:p,GridItem:C,twitchChatComponent:w.a},data:function(){return{msg:"Welcome to the social media aggregator!",layout:this.$store.state.gridLayout}},methods:{addTwitchComponent:function(){var t=this.$store.state.componentCounts.twitch;this.$store.commit("addTwitchItem",document.getElementById("addTwitchChannel").value),function e(){document.getElementById("#twitchComponent"+t)?(new r.a).$mount("#twitchComponent"+t):window.requestAnimationFrame(e)}(),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",o()(this.layout))},removeGridItem:function(t){this.$store.dispatch("removeGridItem",t)},resizeWithContainer:function(t,e,n,i,o,r,a){var c=Number(n)-r,s=Number(i)-a;document.getElementById(o).width=c,document.getElementById(o).height=s},resizedEvent:function(t,e,n,i,o){switch(this.storeItemProperties(),!0){case t.includes("twitchChat"):this.resizeWithContainer(e,n,i,o,"twitchChat",20,75);break;case t.includes("twitch"):var r=t.charAt(t.length-1);this.resizeWithContainer(e,n,i,o,this.$store.state.twitchComponents[r].twitchElement,20,70);break;case t.includes("twitter"):var a=document.querySelector('iframe[id^="twitter-widget-"]'),c=i>=515?60:100;a.style.height=String(o-c+"px")}},updateLayout:function(){},storeItemProperties:function(){this.$store.commit("saveLayout",this.layout)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(29),o=n.n(i);e.default={name:"homeComponent",props:["myLayout"],components:{gridComponent:o.a},data:function(){return{msg:"Welcome to your Content Homepage!",savelayout:this.$store.state.gridLayout}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),o=n(2);e.default={name:"twitchChatComponent",mixins:[o.a,i.a],data:function(){return this.$store.commit("addTwitchChatComponent"),{msg:"Welcome to the social media aggregator!",twitchSource:"https://www.twitch.tv/"+this.$store.state.twitchChatComponents[0].twitchChatChannel+"/chat",props:{width:40,height:40}}},mounted:function(){o.a.methods.parentSize("twitchChat","twitchChat"+this._uid,60,20),i.a.methods.createListener("twitchChatInput",this)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(26),o=(n.n(i),n(2)),r=n(4);e.default={name:"twitchComponent",mixins:[o.a,r.a],componentNumber:-1,data:function(){return this.$store.commit("addTwitchComponent"),this.componentNumber=this.$store.state.componentCounts.twitch-1,{twitchChannel:this.$store.state.twitchComponents[this.$store.state.componentCounts.twitch-1].twitchChannel}},methods:{renderPlayer:function(t){var e=document.getElementById("twitchComponent"+this.componentNumber).style.width-20,n=document.getElementById("twitchComponent"+this.componentNumber).style.height-60,i="streamWindow"+this.componentNumber,o={width:e,height:n,channel:t,autoplay:!1};this.twitchPlayer=new window.Twitch.Player(i,o)},updatePlayer:function(t){this.$store.commit("changeTwitchChannel",{channel:t,component:this.componentNumber})},registerListener:function(){var t=document.getElementById("twitchInput"+this.componentNumber).value;this.updatePlayer(t)}},beforeMount:function(){},mounted:function(){var t=this,e=function(t){return document.querySelector(t)};this.renderPlayer(this.twitchChannel),this.$store.commit("storeTwitchPlayer",{player:this.twitchPlayer,component:this.componentNumber}),e("#streamWindow"+this.componentNumber).firstChild.id="twitchPlayer"+this.componentNumber,o.a.methods.parentSize("twitchPlayer"+this.componentNumber,"twitchComponent"+this.componentNumber,60,20),e("#twitchInput"+this.componentNumber).addEventListener("keyup",function(e){if(e.preventDefault(),13===e.keyCode){var n=e.target.value;t.updatePlayer(n)}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=this;window.twttr=n(10),e.default={name:"twitterComponent",data:function(){return this.$store.commit("addTwitterComponent","twitterComponent"+this._uid),{msg:"Welcome to twitter!",component:this.$store.state.componentCounts.twitter-1}},methods:{createTimeline:function(t,e){i.$store.commit("changeTwitterFeed",{user:t,list:e,componentID:"twitterComponent"+i._uid})},inputListener:function(t,e){if(13===t.keyCode){var n=t.target.value;e.$store.commit("changeTwitterFeed",{user:e.$store.state.twitterComponents[e.component].twitterUser,list:n,componentID:"twitterComponent"+e._uid})}}},mounted:function(){var t=this;document.getElementById("twitter-wjs").addEventListener("load",function(){t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterComponents[t.component].twitterUser,list:t.$store.state.twitterComponents[t.component].twitterList,componentID:"twitterComponent"+t._uid})}),document.getElementById("twitterUserInput").addEventListener("keydown",function(e){t.inputListener(e,t)}),document.getElementById("twitterListInput").addEventListener("keydown",function(e){t.inputListener(e,t)})}}},,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVEhLY4CC/1BMbQA3lwlEDASgls8wzBkwH8EAuT7DqW/AfQQDxPqMoLpB4yMYwOVigj6BAbr5iBFKEwvQXU+0fvr5yF1ZhKgwphSgWFQ7ZwWY1rOYBqZhIIFhLpQFA2VQGgIWR0+CsiDg8y1TMB3//QWYBgF40MEsoSZYyCkBZUEtooUlMACzjG6JYdQissGoRWQDcMnwlfMKlAsBR64gMhoIfA36DmVBAPc6TigLAoK+v4eyIGAdpyCUBQFAO+jsIxBjt0wUWAAG/h6YCGUhgCtLDZSFAGd4p0JZCPDhwwcwLSAgwGAuzAJmw33k+mQZlEU9ALMEBOhUTTAwAAAn7ECpE/KSjQAAAABJRU5ErkJggg=="},,function(t,e,n){function i(t){n(22)}var o=n(0)(n(12),n(37),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(23)}var o=n(0)(n(13),n(38),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(21)}var o=n(0)(n(14),n(36),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(19)}var o=n(0)(n(15),n(34),i,null,null);t.exports=o.exports},function(t,e,n){function i(t){n(24)}var o=n(0)(n(16),n(39),i,null,null);t.exports=o.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchComponent",attrs:{id:"twitchComponent"+t.componentNumber}},[n("input",{attrs:{type:"text",id:"twitchInput"+t.componentNumber,value:"Twitch Channel"}}),t._v(" "),n("div",{attrs:{id:"streamWindow"+t.componentNumber}})])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav",attrs:{id:"navbar"}},[i("ul",[i("li",[i("a",{staticClass:"active",attrs:{href:"#",id:"icon"}},[i("img",{attrs:{src:n(27)}})])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("CS:GO")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("DotA")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Hearthstone")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("LoL")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Overwatch")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#"}},[t._v("Smash")])]),t._v(" "),i("li",[i("a",{attrs:{href:"#",id:"navCustom"}},[t._v("Custom")])]),t._v(" "),i("li",{staticStyle:{float:"right"}},[i("a",{attrs:{href:"#"}},[t._v("About")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchChatComponent",attrs:{id:"twitchChat"+t._uid}},[n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitchChatInput",value:"Chat Channel"}}),t._v(" "),n("iframe",{staticStyle:{visibility:"hidden"},attrs:{src:t.twitchSource,frameborder:"0",scrolling:"no",id:"twitchChat",width:t.props.width,height:t.props.height,allowfullscreen:"true"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gridComponent"},[n("div",{staticClass:"layout"},[n("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,function(e){return n("grid-item",{key:e.id,staticClass:"gridItems",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i},on:{resized:t.resizedEvent}},[n("button",{staticClass:"delete",on:{click:function(n){t.removeGridItem(e.id)}}},[t._v("X")]),t._v(" "),n(e.componentType,{tag:"component"})],1)})),t._v(" "),n("input",{attrs:{id:"addTwitchChannel",value:"Twitch Channel"}}),t._v(" "),n("button",{staticClass:"add",on:{click:t.addTwitchComponent}},[t._v("+")])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentContainer"},[n("div",{staticClass:"page-title"}),t._v(" "),n("gridComponent",{attrs:{"my-layout":t.savelayout}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-title"},[n("h5",[t._v("\n            More features coming in the near future!\n            "),n("br")]),t._v(" "),n("p",[t._v("\n            Keep up to date by following this project on "),n("a",{attrs:{href:"https://github.com/KieferSivitz/ContentHomepage"}},[t._v("GitHub")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitterComponent",attrs:{id:"twitterComponent"+t._uid}},[n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitterUserInput",value:"Twitter Username"}}),t._v(" "),n("input",{staticClass:"gridInput",attrs:{type:"text",id:"twitterListInput",value:"Twitter List"}}),t._v(" "),n("div",{attrs:{id:"twitter-feed"}})])},staticRenderFns:[]}},,,,function(t,e){t.exports={hubList:[{twitchChannel:"dreamhackcs",twitterList:"CSGO"},{twitchChannel:"arteezy",twitterList:"DotA"},{twitchChannel:"savjz",twitterList:"Hearthstone"},{twitchChannel:"riotgames",twitterList:"LoL"},{twitchChannel:"greekgodx",twitterList:"Overwatch"},{twitchChannel:"vgbootcamp",twitterList:"Smash"},{twitchChannel:"tradechat",twitterList:"WoW"}]}}],[9]);
//# sourceMappingURL=app.93292c8bd07438a5b03e.js.map