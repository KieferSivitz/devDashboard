webpackJsonp([1],[,,,,,,,,,function(t,e,n){"use strict";e.a={methods:{parentSize:function(t,e,n,o){var i=document.getElementById(t),a=document.getElementById(e).parentNode.getBoundingClientRect(),c=Number(a.height)-n,s=Number(a.width)-o;setTimeout(function(){a=document.getElementById(e).parentNode.getBoundingClientRect(),c=Number(a.height)-n,s=Number(a.width)-o,i.height=c,i.width=s,i.style.visibility="visible"},5),window.addEventListener("resize",function(){setTimeout(function(){var t=document.getElementById(e).parentNode.getBoundingClientRect();i.height=Number(t.height)-n,i.width=Number(t.width)-o},10)})}}}},,,,,,,,,,function(t,e,n){"use strict";e.a={mounted:function(){},methods:{createListener:function(t,e,n){document.getElementById(t).addEventListener("keydown",function(t){if(13===t.keyCode){var o=t.target.value;document.getElementById("twitchChatWindow"+n).setAttribute("src","https://www.twitch.tv/"+o+"/chat"),e.$store.commit("changeTwitchChatChannel",o)}})}}}},,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(18),i=n(98),a=n(88),c=n.n(a);o.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"homeComponent",component:c.a,props:{game:"Melee",twitchCategory:"Super Smash Bros. Melee"}},{path:"/Smash4",name:"Smash4",component:c.a,props:{game:"Smash4",twitchCategory:"Super Smash Bros. for Wii U"}},{path:"/LoL",name:"LoL",component:c.a,props:{game:"LoL",twitchCategory:"League of Legends"}},{path:"/PUBG",name:"PUBG",component:c.a,props:{game:"PUBG",twitchCategory:"PLAYERUNKNOWN'S BATTLEGROUNDS"}},{path:"/Hearthstone",name:"Hearthstone",component:c.a,props:{game:"Hearthstone",twitchCategory:"Hearthstone"}},{path:"/CSGO",name:"CSGO",component:c.a,props:{game:"CSGO",twitchCategory:"Counter-Strike: Global Offensive"}},{path:"/WoW",name:"WoW",component:c.a,props:{game:"WoW",twitchCategory:"World of Warcraft"}},{path:"/DotA",name:"DotA",component:c.a,props:{game:"DotA",twitchCategory:"Dota 2"}},{path:"/Overwatch",name:"Overwatch",component:c.a,props:{game:"Overwatch",twitchCategory:"Overwatch"}},{path:"/StarCraft",name:"StarCraft",component:c.a,props:{game:"StarCraft",twitchCategory:"StarCraft"}},{path:"/StarCraft2",name:"StarCraft2",component:c.a,props:{game:"StarCraft2",twitchCategory:"StarCraft II"}},{path:"/HotS",name:"HotS",component:c.a,props:{game:"HotS",twitchCategory:"Heroes of the Storm"}}]})},function(t,e,n){function o(t){n(73)}var i=n(1)(n(38),n(93),o,null,null);t.exports=i.exports},,function(t,e){t.exports={defaultLayout:[{x:0,y:0,w:3,h:10,i:"twitter0",id:"G0",componentType:"twitterComponent"},{x:3,y:0,w:9,h:22,i:"twitch0",id:"G1",componentType:"twitchComponent"},{x:0,y:11,w:3,h:12,i:"twitchChat0",id:"G2",componentType:"twitchChatComponent"}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(16),c=n.n(a),s=n(18),r=n(33),m=n.n(r),u=n(32),h=n(34),w=n(35);s.a.use(h.a);var d=new h.a.Store({state:{currentGame:"Melee",currentTwitchCategory:"Super Smash Bros. Melee",componentCounts:{twitch:0,twitter:0,twitchChat:0},componentIndexes:{twitch:0,twitter:0,twitchChat:0},streamList:[],componentIndex:-1,gridLayout:JSON.parse(localStorage.getItem("layout"))||w.defaultLayout,twitchComponents:JSON.parse(localStorage.getItem("twitchComponents"))||[{twitchChannel:"vgbootcamp",twitchPlayer:{},twitchElement:"twitchPlayer0",UID:-1,componentIndex:-1,twitchComponentIndex:-1}],twitterComponents:[{twitterUser:"ContentHomepage",twitterList:"Melee",UID:-1}],twitchChatComponents:[{twitchChatChannel:"vgbootcamp",UID:-1,twitchChatComponentIndex:-1}]},mutations:{addTwitchComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitch,t.twitchComponents[t.componentCounts.twitch-1].UID=e,t.twitchComponents[t.componentCounts.twitch-1].componentIndex=t.componentIndex,t.twitchComponents[t.componentCounts.twitch-1].twitchComponentIndex=t.componentIndexes.twitch,++t.componentIndexes.twitch},addTwitterComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitter,t.twitterComponents[t.componentCounts.twitter-1].UID=e,t.twitterComponents[t.componentCounts.twitter-1].componentIndex=t.componentIndex,t.twitterComponents[t.componentCounts.twitter-1].twitterComponentIndex=t.componentIndexes.twitter,++t.componentIndexes.twitter},addTwitchChatComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitchChat,t.twitchChatComponents[t.componentCounts.twitchChat-1].UID=e,t.twitchChatComponents[t.componentCounts.twitchChat-1].componentIndex=t.componentIndex,t.twitchChatComponents[t.componentCounts.twitchChat-1].twitchChatComponentIndex=t.componentIndexes.twitchChat,++t.componentIndexes.twitchChat},removeTwitchComponent:function(t,e){--t.componentCounts.twitch;var n=t.twitchComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitchComponents.splice(n,1)},removeTwitterComponent:function(t,e){--t.componentCounts.twitter;var n=t.twitterComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitterComponents.splice(n,1)},removeTwitchChatComponent:function(t,e){--t.componentCounts.twitchChat;var n=t.twitchChatComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitchChatComponents.splice(n,1)},saveLayout:function(t,e){t.gridLayout=e,localStorage.setItem("layout",c()(e))},deleteGridItem:function(t,e){t.gridLayout.splice(Number(e),1)},resetLayout:function(t){var e;(e=t.gridLayout).splice.apply(e,[0,t.gridLayout.length].concat(i()(w.defaultLayout))),localStorage.setItem("layout",c()(t.gridLayout)),location.reload()},saveStreamsList:function(t,e){t.streamList=[],e.forEach(function(e,n){t.streamList.push(e)})},changeTwitchChannel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{channel:"vgbootcamp",component:0},n=t.twitchComponents.findIndex(function(t){return t.twitchComponentIndex===e.component});t.twitchComponents[n].twitchChannel=e.channel,t.twitchComponents[n].twitchPlayer.setChannel(e.channel)},storeTwitchPlayer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{player:{},component:0};t.twitchComponents[e.component].twitchPlayer=e.player},addTwitchItem:function(t,e){var n=t.gridLayout,o=t.twitchComponents;n.push({x:4,y:20,w:3,h:6,i:"twitch"+t.componentIndexes.twitch,id:"G"+(t.componentIndex+1),componentType:"twitchComponent"}),o.push({twitchChannel:e,twitchPlayer:{},twitchElement:"twitchPlayer"+t.componentIndexes.twitch})},addTwitchChatItem:function(t,e){t.gridLayout.push({x:4,y:20,w:3,h:6,i:"twitchChat"+t.componentIndexes.twitchChat,id:"G"+(t.componentIndex+1),componentType:"twitchChatComponent"}),t.twitchChatComponents.push({twitchChatChannel:e})},changeTwitchChatChannel:function(t,e){document.getElementById("twitchChatWindow"+e.id).setAttribute("src","https://www.twitch.tv/"+e.channel+"/chat"),t.twitchComponents[e.id].twitchChannel=e.channel},changeTwitterFeed:function(t,e){var n=t.twitterComponents.findIndex(function(t){return t.twitterComponentIndex===e.componentNumber}),o=document.querySelector("#twitter-feed-"+e.componentNumber+" > iframe"),i=document.getElementById("twitterComponent"+e.componentNumber).parentNode.getBoundingClientRect(),a=i.height>50?50:10;t.twitterComponents[n].twitterList=e.list,t.twitterComponents[n].twitterUser=e.user,o&&o.remove(),window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:e.user,slug:e.list},document.getElementById("twitter-feed-"+e.componentNumber),{theme:"dark",dnt:!0,height:i.height-a,linkColor:"#45B29D"})},addTwitterItem:function(t,e){t.gridLayout.push({x:4,y:20,w:3,h:8,i:"twitter"+t.componentIndexes.twitter,id:"G"+(t.componentIndex+1),componentType:"twitterComponent"}),t.twitterComponents.push({twitterUser:e.user,twitterList:e.list,UID:8})},storeCurrentGame:function(t,e){t.currentGame=e.game,console.log(String(e.twitchCategory)),t.currentTwitchCategory=String(e.twitchCategory)}},actions:{navigationActions:function(t,e){var n=t.commit,o=t.state;n("changeTwitchChannel",e.twitch),n("changeTwitchChatChannel",{channel:e.twitch.channel,id:o.twitchChatComponents[0].twitchChatComponentIndex})},removeGridItem:function(t,e){var n=t.commit,o=t.state,i=o.gridLayout[e.gridItem].i,a=i.substring(0,i.length-1);switch(n("deleteGridItem",e.gridItem),!0){case a.includes("twitchChat"):n("removeTwitchChatComponent",e.componentIndex);break;case a.includes("twitch"):n("removeTwitchComponent",e.componentIndex);break;case a.includes("twitter"):n("removeTwitterComponent",e.componentIndex)}}}});s.a.config.productionTip=!1,new s.a({el:"#app",store:d,router:u.a,template:"<App/>",components:{App:m.a}})},function(t,e){!function(t,e,n){var o,i=t.getElementsByTagName(e)[0],a=window.twttr||{};t.getElementById(n)||(o=t.createElement(e),o.id=n,o.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(o,i),a._e=[],a.ready=function(t){a._e.push(t)})}(document,"script","twitter-wjs")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(101),c=n(78);e.default={name:"app",data:function(){return{gamesList:a.games,streamList:[{channel:"vgBootcamp"}]}},methods:{home:function(){this.$store.dispatch("navigationActions",{twitch:{channel:"vgbootcamp",component:this.$store.state.twitchComponents[0].twitchComponentIndex}})},navigation:function(t){var e=this.$store.state.streamList[t];this.$store.dispatch("navigationActions",{twitch:{channel:e.channel,component:this.$store.state.twitchComponents[0].twitchComponentIndex}})},activeTab:function(){c(document).ready(function(){c(".nav li.navigationLi a").click(function(t){c(".nav .navigationLi li").removeClass("active");var e=c(this).parent();e.hasClass("active")||e.addClass("active"),t.preventDefault()})})},fetchStreams:function(){var t=this;c.ajax({type:"GET",url:"https://api.twitch.tv/kraken/streams?game="+this.$store.state.currentTwitchCategory+"&limit=8",headers:{"Client-ID":"uo6dggojyb8d6soh92zknwmi5ej1q2"},success:function(e){var n=[];[].concat(i()(e.streams)).forEach(function(t,e){n[e]={channel:t.channel.display_name,viewers:t.viewers,index:e}}),t.$store.commit("saveStreamsList",n),t.streamList=n,t.activeTab()}})}},beforeMount:function(){var t=this;setTimeout(function(){t.fetchStreams()},40),setInterval(function(){t.fetchStreams()},6e4)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(16),i=n.n(o),a=n(91),c=n.n(a),s=n(90),r=n.n(s),m=n(86),u=n.n(m),h=n(9),w=n(89),d=n.n(w),C=u.a.GridLayout,I=u.a.GridItem;e.default={name:"gridComponent",mixins:[h.a],components:{twitterComponent:c.a,twitchComponent:r.a,GridLayout:C,GridItem:I,twitchChatComponent:d.a},data:function(){return{layout:this.$store.state.gridLayout}},methods:{resetLayout:function(){this.$store.commit("resetLayout")},addTwitchComponent:function(){this.$store.commit("addTwitchItem","vgbootcamp"),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},addTwitchChatComponent:function(){this.$store.commit("addTwitchChatItem","vgbootcamp"),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},addTwitterComponent:function(){this.$store.commit("addTwitterItem",{user:"ContentHomepage",list:"Melee"}),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},removeGridItem:function(t){for(var e=0;e<this.$store.state.gridLayout.length;++e)if(this.$store.state.gridLayout[e].id===t){this.$store.dispatch("removeGridItem",{gridItem:e,componentIndex:t.substring(1,t.length)});break}localStorage.setItem("layout",i()(this.layout))},expandInput:function(t){var e="",n="";switch(!0){case t.includes("twitchChat"):n="#twitchChatInput"+Number(t.substring("twitchChat".length,t.length)),e=document.querySelector(n);break;case t.includes("twitch"):n="#twitchInput"+Number(t.substring("twitch".length,t.length)),e=document.querySelector(n);break;case t.includes("twitter"):n="#twitterListInput"+Number(t.substring("twitter".length,t.length)),e=document.querySelector(n)}"inline"!==e.style.display?(e.style.display="inline",document.querySelector(n).style.display="inline"):e.style.display="none"},resizeWithContainer:function(t,e,n,o,i,a,c){var s=Number(n)-a,r=Number(o)-c;document.getElementById(i).width=s,document.getElementById(i).height=r},resizedEvent:function(t,e,n,o,i){switch(this.storeItemProperties(),!0){case t.includes("twitchChat"):var a=t.charAt(t.length-1);this.resizeWithContainer(e,n,o,i,"twitchChatWindow"+a,20,55);break;case t.includes("twitch"):var c=Number(t.charAt(t.length-1)),s=this.$store.state.twitchComponents.findIndex(function(t){return t.twitchComponentIndex===c});this.resizeWithContainer(e,n,o,i,this.$store.state.twitchComponents[s].twitchElement,20,50);break;case t.includes("twitter"):var r=t.charAt(t.length-1);document.querySelector("#twitter-feed-"+r+" > iframe").style.height=String(i-50+"px")}},storeItemProperties:function(){this.$store.commit("saveLayout",this.layout)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(87),i=n.n(o);e.default={name:"homeComponent",props:["game","twitchCategory"],components:{gridComponent:i.a},data:function(){return this.$store.commit("storeCurrentGame",{game:this.game,twitchCategory:this.twitchCategory}),{msg:"Welcome to your Content Homepage!",savelayout:this.$store.state.gridLayout}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(19),i=n(9);e.default={name:"twitchChatComponent",mixins:[i.a,o.a],componentNumber:-1,data:function(){var t=this.$store.state.componentIndexes.twitchChat;return this.$store.commit("addTwitchChatComponent",this._uid),{chatChannel:"",componentNumber:t,twitchSource:"https://www.twitch.tv/"+this.$store.state.twitchChatComponents[this.$store.state.componentCounts.twitchChat-1].twitchChatChannel+"/chat"||"https://www.twitch.tv/tradechat/chat",props:{width:200,height:160}}},mounted:function(){var t=this;!function e(n){document.getElementById(n)?(i.a.methods.parentSize("twitchChatWindow"+t.componentNumber,"twitchChat"+t.componentNumber,50,20),o.a.methods.createListener("twitchChatInput"+t.componentNumber,t,t.componentNumber)):window.requestAnimationFrame(e)}("twitchChat"+this.componentNumber)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(79),i=(n.n(o),n(9)),a=n(19);e.default={name:"twitchComponent",mixins:[i.a,a.a],componentNumber:-1,data:function(){var t=this.$store.state.componentIndexes.twitch;return this.$store.commit("addTwitchComponent",this._uid),{twitchChannel:"",componentNumber:t}},methods:{renderPlayer:function(t){var e=document.getElementById("twitchComponent"+this.componentNumber).style.width-20,n=document.getElementById("twitchComponent"+this.componentNumber).style.height-60,o="streamWindow"+this.componentNumber,i={width:e,height:n,channel:t,autoplay:!1};this.twitchPlayer=new window.Twitch.Player(o,i)},updatePlayer:function(t){this.$store.commit("changeTwitchChannel",{channel:t,component:this.componentNumber})},registerListener:function(){var t=document.getElementById("twitchInput"+this.componentNumber).value;this.updatePlayer(t)}},beforeMount:function(){},mounted:function(){var t=this,e=function(t){return document.querySelector(t)};this.renderPlayer(this.$store.state.twitchComponents[this.$store.state.componentCounts.twitch-1].twitchChannel),this.$store.commit("storeTwitchPlayer",{player:this.twitchPlayer,component:this.$store.state.componentCounts.twitch-1}),e("#streamWindow"+this.componentNumber).firstChild.id="twitchPlayer"+this.componentNumber,i.a.methods.parentSize("twitchPlayer"+this.componentNumber,"twitchComponent"+this.componentNumber,50,20),e("#twitchInput"+this.componentNumber).addEventListener("keyup",function(e){if(e.preventDefault(),13===e.keyCode){var n=e.target.value;t.updatePlayer(n)}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.twttr=n(37),e.default={name:"twitterComponent",data:function(){var t=this.$store.state.componentIndexes.twitter;return this.$store.commit("addTwitterComponent",this._uid),{initialized:0,twitterUser:"ContentHomepage",twitterList:"",componentNumber:t,twitterNumber:this.$store.state.twitterComponents.length-1}},methods:{changeFeed:function(){var t=this;event.preventDefault();var e=this.$store.state.twitterComponents.findIndex(function(e){return e.twitterComponentIndex===t.componentNumber});this.$store.commit("changeTwitterFeed",{user:this.$store.state.twitterComponents[e].twitterUser,list:this.twitterList,componentID:this._uid,componentNumber:this.componentNumber})}},mounted:function(){var t=this;1===this.$store.state.componentIndexes.twitter?document.getElementById("twitter-wjs").addEventListener("load",function(){t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterComponents[t.twitterNumber].twitterUser,list:t.$store.state.currentGame,componentID:t._uid,componentNumber:t.componentNumber})}):function e(n){document.getElementById(n).parentNode?t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterComponents[t.twitterNumber].twitterUser,list:t.$store.state.twitterComponents[t.twitterNumber].twitterList,componentID:t._uid,componentNumber:t.componentNumber}):window.requestAnimationFrame(e)}("twitterComponent"+this.componentNumber)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nb19GSVhFRCIgZGF0YS1uYW1lPSJMb2dvIOKAlCBGSVhFRCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxZGExZjI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Ud2l0dGVyX0xvZ29fQmx1ZTwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1My42MiwzMDEuNTljOTQuMzQsMCwxNDUuOTQtNzguMTYsMTQ1Ljk0LTE0NS45NCwwLTIuMjIsMC00LjQzLS4xNS02LjYzQTEwNC4zNiwxMDQuMzYsMCwwLDAsMzI1LDEyMi40N2ExMDIuMzgsMTAyLjM4LDAsMCwxLTI5LjQ2LDguMDcsNTEuNDcsNTEuNDcsMCwwLDAsMjIuNTUtMjguMzcsMTAyLjc5LDEwMi43OSwwLDAsMS0zMi41NywxMi40NSw1MS4zNCw1MS4zNCwwLDAsMC04Ny40MSw0Ni43OEExNDUuNjIsMTQ1LjYyLDAsMCwxLDkyLjQsMTA3LjgxYTUxLjMzLDUxLjMzLDAsMCwwLDE1Ljg4LDY4LjQ3QTUwLjkxLDUwLjkxLDAsMCwxLDg1LDE2OS44NmMwLC4yMSwwLC40MywwLC42NWE1MS4zMSw1MS4zMSwwLDAsMCw0MS4xNSw1MC4yOCw1MS4yMSw1MS4yMSwwLDAsMS0yMy4xNi44OCw1MS4zNSw1MS4zNSwwLDAsMCw0Ny45MiwzNS42MiwxMDIuOTIsMTAyLjkyLDAsMCwxLTYzLjcsMjJBMTA0LjQxLDEwNC40MSwwLDAsMSw3NSwyNzguNTVhMTQ1LjIxLDE0NS4yMSwwLDAsMCw3OC42MiwyMyIvPjwvc3ZnPg=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCjxzdmcNCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB2ZXJzaW9uPSIxLjAiDQogICB3aWR0aD0iMjk5Ljk5NjQ5Ig0KICAgaGVpZ2h0PSIyMjUuOTI0MTIiDQogICB2aWV3Qm94PSIwIDAgODUuNzA0IDY0LjU0MiINCiAgIGlkPSJMYXllcl8xIg0KICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGRlZnMNCiAgIGlkPSJkZWZzOCIgLz4NCjxnDQogICB0cmFuc2Zvcm09Im1hdHJpeCgwLjk0ODY5NjIsMCwwLDAuOTQ4Njk2MiwyLjQ4MzQzNjQsMS44MzYxODE4KSINCiAgIGlkPSJnMyI+DQoJPHBhdGgNCiAgIGQ9Ik0gNDUuNjczLDAgQyA2Ny43ODEsMCA4NS43MDMsMTIuNDc1IDg1LjcwMywyNy44NjIgQyA4NS43MDMsNDMuMjQ5IDY3Ljc4MSw1NS43MjQgNDUuNjczLDU1LjcyNCBDIDM4Ljc0Miw1NS43MjQgMzIuMjI0LDU0LjQ5NyAyNi41MzksNTIuMzQgQyAxNS4zMTksNTYuNTY0IDAsNjQuNTQyIDAsNjQuNTQyIEMgMCw2NC41NDIgOS45ODksNTguODg3IDE0LjEwNyw1Mi4wMjEgQyAxNS4xNTksNTAuMjY2IDE1Ljc3NSw0OC40MjYgMTYuMTI4LDQ2LjY1OSBDIDkuNjE4LDQxLjcwNCA1LjY0MywzNS4xMDYgNS42NDMsMjcuODYyIEMgNS42NDMsMTIuNDc1IDIzLjU2NSwwIDQ1LjY3MywwIE0gNDUuNjczLDIuMjIgQyAyNC44MjQsMi4yMiA3Ljg2MiwxMy43MjMgNy44NjIsMjcuODYzIEMgNy44NjIsMzQuMTI5IDExLjI3NSw0MC4xNzcgMTcuNDcyLDQ0Ljg5MyBMIDE4LjU3Niw0NS43MzQgTCAxOC4zMDUsNDcuMDk0IEMgMTcuODYsNDkuMzI0IDE3LjA4OCw1MS4zNjYgMTYuMDExLDUzLjE2MyBDIDE1LjY3LDUzLjczIDE1LjI5NCw1NC4yOSAxNC44OTEsNTQuODM3IEMgMTguNTE2LDUzLjE5MSAyMi4zMTIsNTEuNTYxIDI1Ljc1Nyw1MC4yNjQgTCAyNi41NDIsNDkuOTY4IEwgMjcuMzI3LDUwLjI2NiBDIDMyLjkxMSw1Mi4zODUgMzkuMjU1LDUzLjUwNSA0NS42NzMsNTMuNTA1IEMgNjYuNTIyLDUzLjUwNSA4My40ODQsNDIuMDAyIDgzLjQ4NCwyNy44NjIgQyA4My40ODQsMTMuNzIyIDY2LjUyMiwyLjIyIDQ1LjY3MywyLjIyIEwgNDUuNjczLDIuMjIgeiAiDQogICBpZD0icGF0aDUiIC8+DQo8L2c+DQo8L3N2Zz4="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiIGhlaWdodD0iMjU2cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMzcuMDUxLDEyOGw3NS40NzUtNzUuNDc1YzIuNS0yLjUsMi41LTYuNTUxLDAtOS4wNTFzLTYuNTUxLTIuNS05LjA1MSwwTDEyOCwxMTguOTQ5TDUyLjUyNSw0My40NzUgIGMtMi41LTIuNS02LjU1MS0yLjUtOS4wNTEsMHMtMi41LDYuNTUxLDAsOS4wNTFMMTE4Ljk0OSwxMjhsLTc1LjQ3NSw3NS40NzVjLTIuNSwyLjUtMi41LDYuNTUxLDAsOS4wNTEgIGMxLjI1LDEuMjUsMi44ODgsMS44NzUsNC41MjUsMS44NzVzMy4yNzUtMC42MjUsNC41MjUtMS44NzVMMTI4LDEzNy4wNTFsNzUuNDc1LDc1LjQ3NWMxLjI1LDEuMjUsMi44ODgsMS44NzUsNC41MjUsMS44NzUgIHMzLjI3NS0wLjYyNSw0LjUyNS0xLjg3NWMyLjUtMi41LDIuNS02LjU1MSwwLTkuMDUxTDEzNy4wNTEsMTI4eiIvPjwvc3ZnPg=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDE1IiBoZWlnaHQ9IjE1cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNiAxNSIgd2lkdGg9IjI2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwb2x5Z29uIGZpbGw9IiMyMzFGMjAiIHBvaW50cz0iMjMuMzAzLC0wLjAwMiAxMi40NjcsMTAuODM0IDEuNjMsLTAuMDAyIC0wLjQ1NCwyLjA4MiAxMi40NjcsMTUuMDAyIDE0LjU1MSwxMi45MTggMjUuMzg3LDIuMDgyICAgIi8+PC9zdmc+"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVEhLY4CC/1BMbQA3lwlEDASgls8wzBkwH8EAuT7DqW/AfQQDxPqMoLpB4yMYwOVigj6BAbr5iBFKEwvQXU+0fvr5yF1ZhKgwphSgWFQ7ZwWY1rOYBqZhIIFhLpQFA2VQGgIWR0+CsiDg8y1TMB3//QWYBgF40MEsoSZYyCkBZUEtooUlMACzjG6JYdQissGoRWQDcMnwlfMKlAsBR64gMhoIfA36DmVBAPc6TigLAoK+v4eyIGAdpyCUBQFAO+jsIxBjt0wUWAAG/h6YCGUhgCtLDZSFAGd4p0JZCPDhwwcwLSAgwGAuzAJmw33k+mQZlEU9ALMEBOhUTTAwAAAn7ECpE/KSjQAAAABJRU5ErkJggg=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+DQo8IS0tIENyZWF0ZWQgd2l0aCBJbmtzY2FwZSAoaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvKSAtLT4NCg0KPHN2Zw0KICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIg0KICAgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyINCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyINCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciDQogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiDQogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSINCiAgIGlkPSJzdmcyOTg1Ig0KICAgdmVyc2lvbj0iMS4xIg0KICAgaW5rc2NhcGU6dmVyc2lvbj0iMC40OC4yIHI5ODE5Ig0KICAgd2lkdGg9IjEwMDAiDQogICBoZWlnaHQ9IjExMzkuNDEyIg0KICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSINCiAgIHNvZGlwb2RpOmRvY25hbWU9IlR3aXRjaCBsb2dvIGJsYWNrLnN2ZyI+PG1ldGFkYXRhDQogICAgIGlkPSJtZXRhZGF0YTI5OTEiPjxyZGY6UkRGPjxjYzpXb3JrDQogICAgICAgICByZGY6YWJvdXQ9IiI+PGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+PGRjOnR5cGUNCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz48ZGM6dGl0bGU+PC9kYzp0aXRsZT48L2NjOldvcms+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PGRlZnMNCiAgICAgaWQ9ImRlZnMyOTg5IiAvPjxzb2RpcG9kaTpuYW1lZHZpZXcNCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIg0KICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiINCiAgICAgYm9yZGVyb3BhY2l0eT0iMSINCiAgICAgb2JqZWN0dG9sZXJhbmNlPSIxMCINCiAgICAgZ3JpZHRvbGVyYW5jZT0iMTAiDQogICAgIGd1aWRldG9sZXJhbmNlPSIxMCINCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiDQogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiDQogICAgIGlua3NjYXBlOndpbmRvdy13aWR0aD0iMTIzNCINCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iMTAzOCINCiAgICAgaWQ9Im5hbWVkdmlldzI5ODciDQogICAgIHNob3dncmlkPSJmYWxzZSINCiAgICAgZml0LW1hcmdpbi1sZWZ0PSIwLjUiDQogICAgIGZpdC1tYXJnaW4tYm90dG9tPSIwLjUiDQogICAgIGZpdC1tYXJnaW4tdG9wPSIwLjUiDQogICAgIGZpdC1tYXJnaW4tcmlnaHQ9IjAuNSINCiAgICAgaW5rc2NhcGU6em9vbT0iMC4zMzcxMjU2NiINCiAgICAgaW5rc2NhcGU6Y3g9IjM0NC43NjU0NCINCiAgICAgaW5rc2NhcGU6Y3k9IjIwMS43MTU2NyINCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY3NSINCiAgICAgaW5rc2NhcGU6d2luZG93LXk9IjExIg0KICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIwIg0KICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJnMjk5MyIgLz48Zw0KICAgICBpZD0iZzI5OTMiDQogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiDQogICAgIGlua3NjYXBlOmxhYmVsPSJUd2l0Y2hfSW50ZWdyYXRpb25HdWlkZWxpbmVzIg0KICAgICB0cmFuc2Zvcm09Im1hdHJpeCgxLjI1LDAsMCwtMS4yNSwtNzc5LjU2ODM3LDIwODkuODE2MikiPjxnDQogICAgICAgaWQ9ImcyOTk1Ig0KICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDkuNTMyNDQyNywwLDAsOS41MzI0NDI3LDEzNDguOTQ5MywxMTg4LjIzNDQpIj48cGF0aA0KICAgICAgICAgZD0ibSAwLDAgLTEzLjY1MiwtMTMuNjUxIC0yMS40NDUsMCAtMTEuNjk5LC0xMS42OTcgMCwxMS42OTcgLTE3LjU0OCwwIDAsNTYuNTQ0IEwgMCw0Mi44OTMgMCwwIHogbSAtNzIuMTQ2LDUwLjY5MiAtMy44OTksLTE1LjU5OSAwLC03MC4xOSAxNy41NSwwIDAsLTkuNzUxIDkuNzQ2LDAgOS43NTIsOS43NTEgMTUuNTk2LDAgMzEuMTk2LDMxLjE5MiAwLDU0LjU5NyAtNzkuOTQxLDAgeiINCiAgICAgICAgIHN0eWxlPSJmaWxsOiM2NDQxYTU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmUiDQogICAgICAgICBpZD0icGF0aDI5OTciDQogICAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48cGF0aA0KICAgICAgIGQ9Im0gOTQwLjAzNjAxLDEyMjUuMzc1NiA3NC4zNDM0OSwwIDAsMjIzLjA2ODcgLTc0LjM0MzQ5LDAgMCwtMjIzLjA2ODcgeiBtIDIwNC40MzI3OSwwIDc0LjM0MzUsMCAwLDIyMy4wNjg3IC03NC4zNDM1LDAgMCwtMjIzLjA2ODcgeiINCiAgICAgICBzdHlsZT0iZmlsbDojNjQ0MWE1O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lIg0KICAgICAgIGlkPSJwYXRoMjk5OSINCiAgICAgICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiAvPjwvZz48L3N2Zz4="},,function(t,e,n){function o(t){n(75)}var i=n(1)(n(39),n(95),o,"data-v-db126ac2",null);t.exports=i.exports},function(t,e,n){function o(t){n(76)}var i=n(1)(n(40),n(96),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(74)}var i=n(1)(n(41),n(94),o,"data-v-5529bc3a",null);t.exports=i.exports},function(t,e,n){function o(t){n(72)}var i=n(1)(n(42),n(92),o,"data-v-18a9719c",null);t.exports=i.exports},function(t,e,n){function o(t){n(77)}var i=n(1)(n(43),n(97),o,"data-v-f4bf8f9c",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchComponent",attrs:{id:"twitchComponent"+t.componentNumber}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.twitchChannel,expression:"twitchChannel"}],staticClass:"gridInput twitchInput",attrs:{type:"text",id:"twitchInput"+t.componentNumber,placeholder:"Twitch Channel"},domProps:{value:t.twitchChannel},on:{input:function(e){e.target.composing||(t.twitchChannel=e.target.value)}}}),t._v(" "),n("div",{attrs:{id:"streamWindow"+t.componentNumber}})])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"nav",attrs:{id:"navbar"}},[o("ul",[o("li",{attrs:{id:"iconLi"}},[o("a",{staticClass:"active",attrs:{id:"icon"},on:{click:function(e){t.home()}}},[o("img",{attrs:{src:n(84)}})]),t._v(" "),o("ul",{attrs:{id:"gamesList"}},[t._m(0),t._v(" "),t._l(t.gamesList,function(e){return o("li",{key:e.route},[o("a",{attrs:{href:"/"+e.route}},[t._v(t._s(e.label))])])})],2)]),t._v(" "),t._l(t.streamList,function(e){return o("li",{key:e.index,staticClass:"navigationLi",attrs:{id:"navItem"+e.index}},[o("a",{on:{click:function(n){t.navigation(e.index)}}},[t._v(t._s(e.channel))])])})],2)]),t._v(" "),o("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("h3",[t._v("Games")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchChatComponent",attrs:{id:"twitchChat"+t.componentNumber}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chatChannel,expression:"chatChannel"}],staticClass:"gridInput twitchChatInput",attrs:{type:"text",id:"twitchChatInput"+t.componentNumber,placeholder:"Chat Channel"},domProps:{value:t.chatChannel},on:{input:function(e){e.target.composing||(t.chatChannel=e.target.value)}}}),t._v(" "),n("iframe",{attrs:{src:t.twitchSource,frameborder:"0",scrolling:"no",id:"twitchChatWindow"+t.componentNumber,width:t.props.width,height:t.props.height,allowfullscreen:"true",pointerevents:"none"}})],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gridComponent"},[o("div",{attrs:{id:"addItem"}},[o("a",{attrs:{id:"addButton",href:"#"}},[t._v("+")]),t._v(" "),o("ul",{attrs:{id:"creationList"}},[o("li",[o("button",{staticClass:"add",on:{click:t.addTwitterComponent}},[o("img",{staticClass:"addIcon",attrs:{src:n(80),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"add",on:{click:t.addTwitchComponent}},[o("img",{staticClass:"addIcon",attrs:{src:n(85),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"add",on:{click:t.addTwitchChatComponent}},[o("img",{staticClass:"addIcon",attrs:{src:n(81),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"btnReset",on:{click:t.resetLayout}},[t._v("\n                    Reset Layout\n                ")])])])]),t._v(" "),o("div",{staticClass:"layout"},[o("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[10,10],"use-css-transforms":!0}},t._l(t.layout,function(e){return o("grid-item",{key:e.id,staticClass:"gridItems",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i,id:e.id},on:{resized:t.resizedEvent}},[o("button",{staticClass:"delete",on:{click:function(n){t.removeGridItem(e.id)}}},[o("img",{staticClass:"expandImg",attrs:{src:n(82),type:"image/svg+xml"}})]),t._v(" "),o("button",{staticClass:"expandInput",on:{click:function(n){t.expandInput(e.i)}}},[o("img",{staticClass:"expandImg",attrs:{src:n(83),type:"image/svg+xml"}})]),t._v(" "),o(e.componentType,{tag:"component"})],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentContainer"},[n("gridComponent",{attrs:{"my-layout":t.savelayout}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitterComponent",attrs:{id:"twitterComponent"+t.componentNumber}},[n("form",{on:{submit:function(e){t.changeFeed()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.twitterList,expression:"twitterList"}],staticClass:"gridInput twitterInput",attrs:{type:"text",id:"twitterListInput"+t.componentNumber,placeholder:"Twitter List"},domProps:{value:t.twitterList},on:{input:function(e){e.target.composing||(t.twitterList=e.target.value)}}})]),t._v(" "),n("div",{attrs:{id:"twitter-feed-"+t.componentNumber}})])},staticRenderFns:[]}},,,,function(t,e){t.exports={games:[{label:"Melee",route:"#",twitchCategory:"Super Smash Bros. Melee"},{label:"Smash 4",route:"Smash4",twitchCategory:"Super Smash Bros. for Wii U"},{label:"League of Legends",route:"LoL",twitchCategory:"League of Legends"},{label:"PUBG",route:"PUBG",twitchCategory:"PLAYERUNKNOWN'S BATTLEGROUNDS"},{label:"Hearthstone",route:"Hearthstone",twitchCategory:"Hearthstone"},{label:"CS:GO",route:"CSGO",twitchCategory:"Counter-Strike: Global Offensive"},{label:"World of Warcraft",route:"WoW",twitchCategory:"World of Warcraft"},{label:"StarCraft",route:"StarCraft",twitchCategory:"StarCraft"},{label:"StarCraft 2",route:"StarCraft2",twitchCategory:"StarCraft II"},{label:"Heroes of the Storm",route:"HotS",twitchCategory:"Heroes of the Storm"},{label:"DotA 2",route:"DotA",twitchCategory:"Dota 2"},{label:"Overwatch",route:"Overwatch",twitchCategory:"Overwatch"}]}}],[36]);
//# sourceMappingURL=app.30cfc5261b7e42070999.js.map