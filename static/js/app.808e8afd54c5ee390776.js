webpackJsonp([1],[,,,function(t,e){t.exports={widthPadding:16,heightPadding:16}},,,,,,,function(t,e,n){"use strict";e.a={methods:{parentSize:function(t,e,n,o){var i=document.getElementById(t),a=document.getElementById(e).parentNode.getBoundingClientRect(),s=Number(a.height)-n,r=Number(a.width)-o;setTimeout(function(){a=document.getElementById(e).parentNode.getBoundingClientRect(),s=Number(a.height)-n,r=Number(a.width)-o,i.height=s,i.width=r,i.style.visibility="visible"},5),window.addEventListener("resize",function(){setTimeout(function(){var t=document.getElementById(e).parentNode.getBoundingClientRect();i.height=Number(t.height)-n,i.width=Number(t.width)-o},10)})}}}},,,,,,,,,,function(t,e,n){"use strict";e.a={mounted:function(){},methods:{createListener:function(t,e,n){var o=document.getElementById(t);o.addEventListener("keydown",function(t){if(13===t.keyCode){var i=t.target.value;o.style.display="none",e.$store.commit("changeTwitchChatChannel",{id:n,channel:i})}})}}}},,,,,,,,,,,,,function(t,e,n){"use strict";var o=n(19),i=n(99),a=n(89),s=n.n(a);o.a.use(i.a),e.a=new i.a({mode:"history",routes:[{path:"/",name:"homeComponent",component:s.a,props:{game:"Melee",twitchCategory:"Super Smash Bros. Melee"}},{path:"/Smash4",name:"Smash4",component:s.a,props:{game:"Smash4",twitchCategory:"Super Smash Bros. for Wii U"}},{path:"/LoL",name:"LoL",component:s.a,props:{game:"LoL",twitchCategory:"League of Legends"}},{path:"/PUBG",name:"PUBG",component:s.a,props:{game:"PUBG",twitchCategory:"PLAYERUNKNOWN'S BATTLEGROUNDS"}},{path:"/Hearthstone",name:"Hearthstone",component:s.a,props:{game:"Hearthstone",twitchCategory:"Hearthstone"}},{path:"/CSGO",name:"CSGO",component:s.a,props:{game:"CSGO",twitchCategory:"Counter-Strike: Global Offensive"}},{path:"/WoW",name:"WoW",component:s.a,props:{game:"WoW",twitchCategory:"World of Warcraft"}},{path:"/DotA",name:"DotA",component:s.a,props:{game:"DotA",twitchCategory:"Dota 2"}},{path:"/Overwatch",name:"Overwatch",component:s.a,props:{game:"Overwatch",twitchCategory:"Overwatch"}},{path:"/StarCraft",name:"StarCraft",component:s.a,props:{game:"StarCraft",twitchCategory:"StarCraft"}},{path:"/StarCraft2",name:"StarCraft2",component:s.a,props:{game:"StarCraft2",twitchCategory:"StarCraft II"}},{path:"/HotS",name:"HotS",component:s.a,props:{game:"HotS",twitchCategory:"Heroes of the Storm"}}]})},function(t,e,n){function o(t){n(74)}var i=n(1)(n(39),n(94),o,null,null);t.exports=i.exports},,function(t,e){t.exports={defaultLayout:[{x:0,y:0,w:3,h:11,i:"twitter0",id:"G0",componentType:"twitterComponent"},{x:3,y:0,w:9,h:22,i:"twitch0",id:"G1",componentType:"twitchComponent"},{x:0,y:12,w:3,h:11,i:"twitchChat0",id:"G2",componentType:"twitchChatComponent"}]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n.n(o),a=n(17),s=n.n(a),r=n(19),c=n(34),m=n.n(c),h=n(33),u=n(35),d=n(36),w=n(3);r.a.use(u.a);var p=new u.a.Store({state:{currentGame:"Melee",currentTwitchCategory:"Super Smash Bros. Melee",componentCounts:{twitch:0,twitter:0,twitchChat:0},componentIndexes:{twitch:0,twitter:0,twitchChat:0},streamList:[],componentIndex:-1,gridLayout:JSON.parse(localStorage.getItem("layout"))||d.defaultLayout,twitchComponents:JSON.parse(localStorage.getItem("twitchComponents"))||[{twitchChannel:"smashtherecord",twitchPlayer:{},twitchElement:"twitchPlayer0",UID:-1,componentIndex:-1,twitchComponentIndex:-1}],twitterComponents:[{twitterUser:"ContentHomepage",twitterList:"Melee",UID:-1}],twitchChatComponents:[{twitchChatChannel:"smashtherecord",UID:-1,twitchChatComponentIndex:-1}]},mutations:{addTwitchComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitch,t.twitchComponents[t.componentCounts.twitch-1].UID=e,t.twitchComponents[t.componentCounts.twitch-1].componentIndex=t.componentIndex,t.twitchComponents[t.componentCounts.twitch-1].twitchComponentIndex=t.componentIndexes.twitch,++t.componentIndexes.twitch},addTwitterComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitter,t.twitterComponents[t.componentCounts.twitter-1].UID=e,t.twitterComponents[t.componentCounts.twitter-1].componentIndex=t.componentIndex,t.twitterComponents[t.componentCounts.twitter-1].twitterComponentIndex=t.componentIndexes.twitter,++t.componentIndexes.twitter},addTwitchChatComponent:function(t,e){++t.componentIndex,++t.componentCounts.twitchChat,t.twitchChatComponents[t.componentCounts.twitchChat-1].UID=e,t.twitchChatComponents[t.componentCounts.twitchChat-1].componentIndex=t.componentIndex,t.twitchChatComponents[t.componentCounts.twitchChat-1].twitchChatComponentIndex=t.componentIndexes.twitchChat,++t.componentIndexes.twitchChat},removeTwitchComponent:function(t,e){--t.componentCounts.twitch;var n=t.twitchComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitchComponents.splice(n,1)},removeTwitterComponent:function(t,e){--t.componentCounts.twitter;var n=t.twitterComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitterComponents.splice(n,1)},removeTwitchChatComponent:function(t,e){--t.componentCounts.twitchChat;var n=t.twitchChatComponents.findIndex(function(t){return t.componentIndex===Number(e)});t.twitchChatComponents.splice(n,1)},saveLayout:function(t,e){t.gridLayout=e,localStorage.setItem("layout",s()(e))},deleteGridItem:function(t,e){t.gridLayout.splice(Number(e),1)},resetLayout:function(t){var e;(e=t.gridLayout).splice.apply(e,[0,t.gridLayout.length].concat(i()(d.defaultLayout))),localStorage.setItem("layout",s()(t.gridLayout)),location.reload()},saveStreamsList:function(t,e){t.streamList=[],e.forEach(function(e,n){t.streamList.push(e)})},changeTwitchChannel:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{channel:"vgbootcamp",component:0},n=t.twitchComponents.findIndex(function(t){return t.twitchComponentIndex===e.component});t.twitchComponents[n].twitchChannel=e.channel,t.twitchComponents[n].twitchPlayer.setChannel(e.channel)},storeTwitchPlayer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{player:{},component:0};t.twitchComponents[e.component].twitchPlayer=e.player},addTwitchItem:function(t,e){var n=t.gridLayout,o=t.twitchComponents;n.push({x:4,y:20,w:3,h:6,i:"twitch"+t.componentIndexes.twitch,id:"G"+(t.componentIndex+1),componentType:"twitchComponent"}),o.push({twitchChannel:e,twitchPlayer:{},twitchElement:"twitchPlayer"+t.componentIndexes.twitch})},addTwitchChatItem:function(t,e){t.gridLayout.push({x:4,y:20,w:3,h:6,i:"twitchChat"+t.componentIndexes.twitchChat,id:"G"+(t.componentIndex+1),componentType:"twitchChatComponent"}),t.twitchChatComponents.push({twitchChatChannel:e})},changeTwitchChatChannel:function(t,e){document.getElementById("twitchChatWindow"+e.id).setAttribute("src","https://www.twitch.tv/"+e.channel+"/chat"),t.twitchComponents[e.id].twitchChannel=e.channel},changeTwitterFeed:function(t,e){var n=t.twitterComponents.findIndex(function(t){return t.twitterComponentIndex===e.componentNumber}),o=document.querySelector("#twitter-feed-"+e.componentNumber+" > iframe"),i=document.getElementById("twitterComponent"+e.componentNumber).parentNode.getBoundingClientRect(),a=i.height>w.heightPadding?w.heightPadding:10;t.twitterComponents[n].twitterList=e.list,t.twitterComponents[n].twitterUser=e.user,o&&o.remove(),window.twttr.widgets.createTimeline({sourceType:"list",ownerScreenName:e.user,slug:e.list},document.getElementById("twitter-feed-"+e.componentNumber),{theme:"dark",dnt:!0,height:i.height-a,linkColor:"#45B29D"})},addTwitterItem:function(t,e){t.gridLayout.push({x:4,y:20,w:3,h:8,i:"twitter"+t.componentIndexes.twitter,id:"G"+(t.componentIndex+1),componentType:"twitterComponent"}),t.twitterComponents.push({twitterUser:e.user,twitterList:e.list,UID:8})},storeCurrentGame:function(t,e){t.currentGame=e.game,console.log(String(e.twitchCategory)),t.currentTwitchCategory=String(e.twitchCategory)}},actions:{navigationActions:function(t,e){var n=t.commit,o=t.state;n("changeTwitchChannel",e.twitch),n("changeTwitchChatChannel",{channel:e.twitch.channel,id:o.twitchChatComponents[0].twitchChatComponentIndex})},removeGridItem:function(t,e){var n=t.commit,o=t.state,i=o.gridLayout[e.gridItem].i,a=i.substring(0,i.length-1);switch(n("deleteGridItem",e.gridItem),!0){case a.includes("twitchChat"):n("removeTwitchChatComponent",e.componentIndex);break;case a.includes("twitch"):n("removeTwitchComponent",e.componentIndex);break;case a.includes("twitter"):n("removeTwitterComponent",e.componentIndex)}}}});r.a.config.productionTip=!1,new r.a({el:"#app",store:p,router:h.a,template:"<App/>",components:{App:m.a}})},function(t,e){!function(t,e,n){var o,i=t.getElementsByTagName(e)[0],a=window.twttr||{};t.getElementById(n)||(o=t.createElement(e),o.id=n,o.src="https://platform.twitter.com/widgets.js",i.parentNode.insertBefore(o,i),a._e=[],a.ready=function(t){a._e.push(t)})}(document,"script","twitter-wjs")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=n.n(o),a=n(102),s=n(79);e.default={name:"app",data:function(){return{gamesList:a.games,streamList:[]}},methods:{home:function(){this.$store.dispatch("navigationActions",{twitch:{channel:"smashtherecord",component:this.$store.state.twitchComponents[0].twitchComponentIndex}}),s(".nav li.navigationLi").removeClass("active");var t=s(this).parent();t.hasClass("active")||t.addClass("active")},navigation:function(t){var e=this.$store.state.streamList[t];this.$store.dispatch("navigationActions",{twitch:{channel:e.channel,component:this.$store.state.twitchComponents[0].twitchComponentIndex}})},activeTab:function(){s(document).ready(function(){s(".nav li.navigationLi a").click(function(t){s(".nav li.navigationLi").removeClass("active");var e=s(this).parent();e.hasClass("active")||e.addClass("active"),t.preventDefault()})})},fetchStreams:function(){var t=this;s.ajax({type:"GET",url:"https://api.twitch.tv/kraken/streams?game="+this.$store.state.currentTwitchCategory+"&limit=8",headers:{"Client-ID":"qo4oiog7aylotzvctwy2xm8gt0i83q"},success:function(e){var n=[];[].concat(i()(e.streams)).forEach(function(t,e){n[e]={channel:t.channel.display_name,viewers:t.viewers,index:e}}),t.$store.commit("saveStreamsList",n),t.streamList=n,t.activeTab()},failure:function(t){console.log("Twitch Response: ",t)}})}},beforeMount:function(){var t=this;setTimeout(function(){t.fetchStreams()},10),setInterval(function(){t.fetchStreams()},6e4)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=n.n(o),a=n(92),s=n.n(a),r=n(91),c=n.n(r),m=n(87),h=n.n(m),u=n(10),d=n(90),w=n.n(d),p=h.a.GridLayout,l=h.a.GridItem,C=n(3);e.default={name:"gridComponent",mixins:[u.a],components:{twitterComponent:s.a,twitchComponent:c.a,GridLayout:p,GridItem:l,twitchChatComponent:w.a},data:function(){return{layout:this.$store.state.gridLayout}},methods:{resetLayout:function(){this.$store.commit("resetLayout")},addTwitchComponent:function(){this.$store.commit("addTwitchItem","vgbootcamp"),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},addTwitchChatComponent:function(){this.$store.commit("addTwitchChatItem","vgbootcamp"),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},addTwitterComponent:function(){this.$store.commit("addTwitterItem",{user:"ContentHomepage",list:"Melee"}),this.layout=this.$store.state.gridLayout,localStorage.setItem("layout",i()(this.layout))},removeGridItem:function(t){for(var e=0;e<this.$store.state.gridLayout.length;++e)if(this.$store.state.gridLayout[e].id===t){this.$store.dispatch("removeGridItem",{gridItem:e,componentIndex:t.substring(1,t.length)});break}localStorage.setItem("layout",i()(this.layout))},expandInput:function(t){var e="",n="";switch(!0){case t.includes("twitchChat"):n="#twitchChatInput"+Number(t.substring("twitchChat".length,t.length)),e=document.querySelector(n);break;case t.includes("twitch"):n="#twitchInput"+Number(t.substring("twitch".length,t.length)),e=document.querySelector(n);break;case t.includes("twitter"):n="#twitterListInput"+Number(t.substring("twitter".length,t.length)),e=document.querySelector(n)}"inline"!==e.style.display?(e.style.display="inline",document.querySelector(n).style.display="inline"):e.style.display="none"},resizeWithContainer:function(t,e,n,o,i,a,s){var r=Number(n)-a,c=Number(o)-s;document.getElementById(i).width=r,document.getElementById(i).height=c},resizedEvent:function(t,e,n,o,i){switch(this.storeItemProperties(),!0){case t.includes("twitchChat"):var a=t.charAt(t.length-1);this.resizeWithContainer(e,n,o,i,"twitchChatWindow"+a,C.widthPadding,C.heightPadding);break;case t.includes("twitch"):var s=Number(t.charAt(t.length-1)),r=this.$store.state.twitchComponents.findIndex(function(t){return t.twitchComponentIndex===s});this.resizeWithContainer(e,n,o,i,this.$store.state.twitchComponents[r].twitchElement,C.widthPadding,C.heightPadding);break;case t.includes("twitter"):var c=t.charAt(t.length-1),m=document.querySelector("#twitter-feed-"+c+" > iframe"),h=C.heightPadding;m.style.height=String(i-h+"px")}},storeItemProperties:function(){this.$store.commit("saveLayout",this.layout)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(88),i=n.n(o);e.default={name:"homeComponent",props:["game","twitchCategory"],components:{gridComponent:i.a},data:function(){return this.$store.commit("storeCurrentGame",{game:this.game,twitchCategory:this.twitchCategory}),{msg:"Welcome to your Content Homepage!",savelayout:this.$store.state.gridLayout}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),i=n(10),a=n(3);e.default={name:"twitchChatComponent",mixins:[i.a,o.a],componentNumber:-1,data:function(){var t=this.$store.state.componentIndexes.twitchChat;return this.$store.commit("addTwitchChatComponent",this._uid),{chatChannel:"",componentNumber:t,twitchSource:"https://www.twitch.tv/"+this.$store.state.twitchChatComponents[this.$store.state.componentCounts.twitchChat-1].twitchChatChannel+"/chat"||"https://www.twitch.tv/tradechat/chat",props:{width:200,height:160}}},mounted:function(){var t=this;!function e(n){document.getElementById(n)?(i.a.methods.parentSize("twitchChatWindow"+t.componentNumber,"twitchChat"+t.componentNumber,a.heightPadding,a.widthPadding),o.a.methods.createListener("twitchChatInput"+t.componentNumber,t,t.componentNumber)):window.requestAnimationFrame(e)}("twitchChat"+this.componentNumber)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(80),i=(n.n(o),n(10)),a=n(20),s=n(3);e.default={name:"twitchComponent",mixins:[i.a,a.a],componentNumber:-1,data:function(){var t=this.$store.state.componentIndexes.twitch;return this.$store.commit("addTwitchComponent",this._uid),{twitchChannel:"",componentNumber:t}},methods:{renderPlayer:function(t){var e=s.heightPadding,n=s.widthPadding,o=document.getElementById("twitchComponent"+this.componentNumber).style.width-n,i=document.getElementById("twitchComponent"+this.componentNumber).style.height-e,a="streamWindow"+this.componentNumber,r={width:o,height:i,channel:t,autoplay:!1};this.twitchPlayer=new window.Twitch.Player(a,r)},updatePlayer:function(t){this.$store.commit("changeTwitchChannel",{channel:t,component:this.componentNumber}),document.getElementById("twitchInput"+this.componentNumber).style.display="none"},registerListener:function(){var t=document.getElementById("twitchInput"+this.componentNumber).value;this.updatePlayer(t)}},beforeMount:function(){},mounted:function(){var t=this,e=function(t){return document.querySelector(t)};this.renderPlayer(this.$store.state.twitchComponents[this.$store.state.componentCounts.twitch-1].twitchChannel),this.$store.commit("storeTwitchPlayer",{player:this.twitchPlayer,component:this.$store.state.componentCounts.twitch-1}),e("#streamWindow"+this.componentNumber).firstChild.id="twitchPlayer"+this.componentNumber,i.a.methods.parentSize("twitchPlayer"+this.componentNumber,"twitchComponent"+this.componentNumber,s.heightPadding,s.widthPadding),e("#twitchInput"+this.componentNumber).addEventListener("keyup",function(e){if(e.preventDefault(),13===e.keyCode){var n=e.target.value;t.updatePlayer(n)}})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),window.twttr=n(38),e.default={name:"twitterComponent",data:function(){var t=this.$store.state.componentIndexes.twitter;return this.$store.commit("addTwitterComponent",this._uid),{initialized:0,twitterUser:"ContentHomepage",twitterList:"",componentNumber:t,twitterNumber:this.$store.state.twitterComponents.length-1}},methods:{changeFeed:function(){var t=this;event.preventDefault();var e=this.$store.state.twitterComponents.findIndex(function(e){return e.twitterComponentIndex===t.componentNumber});this.$store.commit("changeTwitterFeed",{user:this.$store.state.twitterComponents[e].twitterUser,list:this.twitterList,componentID:this._uid,componentNumber:this.componentNumber}),document.getElementById("twitterListInput"+this.componentNumber).style.display="none"}},mounted:function(){var t=this;1===this.$store.state.componentIndexes.twitter?document.getElementById("twitter-wjs").addEventListener("load",function(){t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterComponents[t.twitterNumber].twitterUser,list:t.$store.state.currentGame,componentID:t._uid,componentNumber:t.componentNumber})}):function e(n){document.getElementById(n).parentNode?t.$store.commit("changeTwitterFeed",{user:t.$store.state.twitterComponents[t.twitterNumber].twitterUser,list:t.$store.state.twitterComponents[t.twitterNumber].twitterList,componentID:t._uid,componentNumber:t.componentNumber}):window.requestAnimationFrame(e)}("twitterComponent"+this.componentNumber)}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyODkgMTc4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzY0NDFhNDtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkNvbWJvPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTIsOTFsLTQsMTMsMC4wOSw2MEgyNjN2OGg4bDgtOGgxNGwyNi0yNlY5MUgyNTJabTYwLDQzLTExLDExSDI4M2wtMTAsMTBWMTQ1SDI1OFY5OGg1NHYzNlptLTE4LTIzaDd2MjBoLTdWMTExWm0tMTgsMGg3djIwaC03VjExMVptODUsOTN2NDdsLTI2LDE4SDMxOXYtOGwtMTIsOEgyOTN2LThsLTksOEgyNThsLTgtOC0yLDgtMjIuOTUtLjA2TDIxNiwyNjFsLTEsOC0yNi0uMDZMMTg4LDI2MWwtNyw3Ljk0TDE0MSwyNjlsLTgtNHY0SDExMUw4NywyNTQsNzIsMjM5VjE3M2gzMWwxNSwxNWg2OFYxNzNoNTZ2MTVoMTR2OGw4LThoMTdsMTUtMTVoMzJ2MTVoMTdabS0yNTAtOUg5N1YxODBINzl2NTZsMTEsMTJoMjFWMjI5SDk3VjIxM2gxNFYxOTVabTc1LDBIMTY4djM0aC03VjE5NUgxNDR2MzRoLTdWMTk1SDExOHY1M2g1NmwxMi0xMlYxOTVabTI0LDBIMTkzdjUzaDE3VjE5NVptMC0xNUgxOTN2OGgxN3YtOFptMzksMTVIMjM1VjE4MEgyMTd2NTZsMTEsMTJoMjFWMjI5SDIzNVYyMTNoMTRWMTk1Wm00NiwwSDI2N2wtMTEsMTF2MzBsMTIsMTJoMjdWMjI5SDI3NVYyMTNoMjBWMTk1Wm01OSwxMS0xMi0xMUgzMjFWMTgwSDMwMnY2OGgxOVYyMTNoMTR2MzVoMTlWMjA2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcyIC05MSkiLz48L3N2Zz4="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTUgODYiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojNjQ0MWE0O308L3N0eWxlPjwvZGVmcz48dGl0bGU+VHdpdGNoPC90aXRsZT48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMzEsNzlIMzE1VjY2SDI4N0wyNzQsNzlIMjYwbC04LDdWNzlIMjM5VjY1SDE4OVY3OUgxMjlMMTE1LDY1SDg4djU5bDEzLDEzLDIzLDE0aDE4di00bDcsNGgzNmw2LTgsMSw4aDIzbDEtOCw4LDhoMjFsMS04LDcsOGgyM2w5LTh2OGgxMS44OUwzMDgsMTQzdjhoMTRsMjEtMTZWOTFaTTEyMywxMDFIMTA5djE0aDE0djE2LjExSDEwNEw5NCwxMjFWNzFoMTVWODVoMTR2MTZabTY2LDE5LTEwLDExLTUwLjExLjExTDEyOSw4NWgxNnYzMGg2Vjg1aDE2djMwaDZWODVoMTZ2MzVabTIyLDExSDE5NVY4NWgxNnY0NlptMC01MkgxOTVWNzFoMTZ2OFptMzUsMjJIMjMzdjE0aDEzdjE2SDIyN2wtMTAtMTBWNzFoMTZWODVoMTN2MTZabTQxLDBIMjY3djE0aDIwdjE2SDI2MmwtMTAtMTBWOTVsMTAtMTBoMjV2MTZabTUwLDMwSDMyM1YxMDFIMzA4djMwSDI5M1Y3MmgxNlY4NWgxOWw5LDEwdjM2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg4IC02NSkiLz48L3N2Zz4="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nb19GSVhFRCIgZGF0YS1uYW1lPSJMb2dvIOKAlCBGSVhFRCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsOiMxZGExZjI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Ud2l0dGVyX0xvZ29fQmx1ZTwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1My42MiwzMDEuNTljOTQuMzQsMCwxNDUuOTQtNzguMTYsMTQ1Ljk0LTE0NS45NCwwLTIuMjIsMC00LjQzLS4xNS02LjYzQTEwNC4zNiwxMDQuMzYsMCwwLDAsMzI1LDEyMi40N2ExMDIuMzgsMTAyLjM4LDAsMCwxLTI5LjQ2LDguMDcsNTEuNDcsNTEuNDcsMCwwLDAsMjIuNTUtMjguMzcsMTAyLjc5LDEwMi43OSwwLDAsMS0zMi41NywxMi40NSw1MS4zNCw1MS4zNCwwLDAsMC04Ny40MSw0Ni43OEExNDUuNjIsMTQ1LjYyLDAsMCwxLDkyLjQsMTA3LjgxYTUxLjMzLDUxLjMzLDAsMCwwLDE1Ljg4LDY4LjQ3QTUwLjkxLDUwLjkxLDAsMCwxLDg1LDE2OS44NmMwLC4yMSwwLC40MywwLC42NWE1MS4zMSw1MS4zMSwwLDAsMCw0MS4xNSw1MC4yOCw1MS4yMSw1MS4yMSwwLDAsMS0yMy4xNi44OCw1MS4zNSw1MS4zNSwwLDAsMCw0Ny45MiwzNS42MiwxMDIuOTIsMTAyLjkyLDAsMCwxLTYzLjcsMjJBMTA0LjQxLDEwNC40MSwwLDAsMSw3NSwyNzguNTVhMTQ1LjIxLDE0NS4yMSwwLDAsMCw3OC42MiwyMyIvPjwvc3ZnPg=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI1NiAyNTYiIGhlaWdodD0iMjU2cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiB3aWR0aD0iMjU2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0xMzcuMDUxLDEyOGw3NS40NzUtNzUuNDc1YzIuNS0yLjUsMi41LTYuNTUxLDAtOS4wNTFzLTYuNTUxLTIuNS05LjA1MSwwTDEyOCwxMTguOTQ5TDUyLjUyNSw0My40NzUgIGMtMi41LTIuNS02LjU1MS0yLjUtOS4wNTEsMHMtMi41LDYuNTUxLDAsOS4wNTFMMTE4Ljk0OSwxMjhsLTc1LjQ3NSw3NS40NzVjLTIuNSwyLjUtMi41LDYuNTUxLDAsOS4wNTEgIGMxLjI1LDEuMjUsMi44ODgsMS44NzUsNC41MjUsMS44NzVzMy4yNzUtMC42MjUsNC41MjUtMS44NzVMMTI4LDEzNy4wNTFsNzUuNDc1LDc1LjQ3NWMxLjI1LDEuMjUsMi44ODgsMS44NzUsNC41MjUsMS44NzUgIHMzLjI3NS0wLjYyNSw0LjUyNS0xLjg3NWMyLjUtMi41LDIuNS02LjU1MSwwLTkuMDUxTDEzNy4wNTEsMTI4eiIvPjwvc3ZnPg=="},function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI2IDE1IiBoZWlnaHQ9IjE1cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNiAxNSIgd2lkdGg9IjI2cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwb2x5Z29uIGZpbGw9IiMyMzFGMjAiIHBvaW50cz0iMjMuMzAzLC0wLjAwMiAxMi40NjcsMTAuODM0IDEuNjMsLTAuMDAyIC0wLjQ1NCwyLjA4MiAxMi40NjcsMTUuMDAyIDE0LjU1MSwxMi45MTggMjUuMzg3LDIuMDgyICAgIi8+PC9zdmc+"},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEBSURBVEhLY4CC/1BMbQA3lwlEDASgls8wzBkwH8EAuT7DqW/AfQQDxPqMoLpB4yMYwOVigj6BAbr5iBFKEwvQXU+0fvr5yF1ZhKgwphSgWFQ7ZwWY1rOYBqZhIIFhLpQFA2VQGgIWR0+CsiDg8y1TMB3//QWYBgF40MEsoSZYyCkBZUEtooUlMACzjG6JYdQissGoRWQDcMnwlfMKlAsBR64gMhoIfA36DmVBAPc6TigLAoK+v4eyIGAdpyCUBQFAO+jsIxBjt0wUWAAG/h6YCGUhgCtLDZSFAGd4p0JZCPDhwwcwLSAgwGAuzAJmw33k+mQZlEU9ALMEBOhUTTAwAAAn7ECpE/KSjQAAAABJRU5ErkJggg=="},,function(t,e,n){function o(t){n(76)}var i=n(1)(n(40),n(96),o,"data-v-db126ac2",null);t.exports=i.exports},function(t,e,n){function o(t){n(77)}var i=n(1)(n(41),n(97),o,null,null);t.exports=i.exports},function(t,e,n){function o(t){n(75)}var i=n(1)(n(42),n(95),o,"data-v-5529bc3a",null);t.exports=i.exports},function(t,e,n){function o(t){n(73)}var i=n(1)(n(43),n(93),o,"data-v-18a9719c",null);t.exports=i.exports},function(t,e,n){function o(t){n(78)}var i=n(1)(n(44),n(98),o,"data-v-f4bf8f9c",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchComponent",attrs:{id:"twitchComponent"+t.componentNumber}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.twitchChannel,expression:"twitchChannel"}],staticClass:"gridInput twitchInput",attrs:{type:"text",id:"twitchInput"+t.componentNumber,placeholder:"Twitch Channel"},domProps:{value:t.twitchChannel},on:{input:function(e){e.target.composing||(t.twitchChannel=e.target.value)}}}),t._v(" "),n("div",{attrs:{id:"streamWindow"+t.componentNumber}})])},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav",attrs:{id:"navbar"}},[n("ul",[t._m(0),t._v(" "),n("li",{staticClass:"navigationLi"},[n("a",{attrs:{id:"btnHome",title:"Home"},on:{click:function(e){t.home()}}},[t._v("Home")])]),t._v(" "),t._l(t.streamList,function(e){return n("li",{key:e.index,staticClass:"navigationLi",attrs:{id:"navItem"+e.index,title:e.viewers+" Viewers"}},[n("a",{on:{click:function(n){t.navigation(e.index)}}},[t._v(t._s(e.channel))])])})],2)]),t._v(" "),n("router-view")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{attrs:{id:"iconLi"}},[o("a",{staticClass:"active",attrs:{id:"icon"}},[o("img",{attrs:{src:n(86)}})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitchChatComponent",attrs:{id:"twitchChat"+t.componentNumber}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.chatChannel,expression:"chatChannel"}],staticClass:"gridInput twitchChatInput",attrs:{type:"text",id:"twitchChatInput"+t.componentNumber,placeholder:"Chat Channel"},domProps:{value:t.chatChannel},on:{input:function(e){e.target.composing||(t.chatChannel=e.target.value)}}}),t._v(" "),n("iframe",{attrs:{src:t.twitchSource,frameborder:"0",scrolling:"no",id:"twitchChatWindow"+t.componentNumber,width:t.props.width,height:t.props.height,allowfullscreen:"true",pointerevents:"none"}})],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"gridComponent"},[o("div",{attrs:{id:"addItem"}},[o("a",{attrs:{id:"addButton",href:"#"}},[t._v("+  New Item")]),t._v(" "),o("ul",{attrs:{id:"creationList"}},[o("li",[o("button",{staticClass:"add",on:{click:t.addTwitterComponent}},[o("img",{staticClass:"addIcon",attrs:{alt:"Twitter List",title:"Twitter List",src:n(83),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"add",on:{click:t.addTwitchComponent}},[o("img",{staticClass:"addIcon",attrs:{alt:"Twitch Stream",title:"Twitch Stream",src:n(82),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"add",on:{click:t.addTwitchChatComponent}},[o("img",{staticClass:"addIcon",attrs:{alt:"Twitch Chat",title:"Twitch Chat",src:n(81),type:"image/svg+xml"}})])]),t._v(" "),o("li",[o("button",{staticClass:"btnReset",on:{click:t.resetLayout}},[t._v("\n                    Reset Layout\n                ")])])])]),t._v(" "),o("div",{staticClass:"layout"},[o("grid-layout",{attrs:{layout:t.layout,"col-num":12,"row-height":30,"is-draggable":!0,"is-resizable":!0,"vertical-compact":!0,margin:[5,5],"use-css-transforms":!0}},t._l(t.layout,function(e){return o("grid-item",{key:e.id,staticClass:"gridItems",attrs:{x:e.x,y:e.y,w:e.w,h:e.h,i:e.i,id:e.id},on:{resized:t.resizedEvent}},[o("button",{staticClass:"delete",on:{click:function(n){t.removeGridItem(e.id)}}},[o("img",{staticClass:"expandImg",attrs:{src:n(84),type:"image/svg+xml"}})]),t._v(" "),o("button",{staticClass:"expandInput",on:{click:function(n){t.expandInput(e.i)}}},[o("img",{staticClass:"expandImg",attrs:{src:n(85),type:"image/svg+xml"}})]),t._v(" "),o(e.componentType,{tag:"component"})],1)}))],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"componentContainer"},[n("gridComponent",{attrs:{"my-layout":t.savelayout}}),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("\n        If you'd like to contribute to this project or report a bug check it out on "),n("a",{attrs:{href:"https://github.com/KieferSivitz/ContentHomepage"}},[t._v("Github!")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twitterComponent",attrs:{id:"twitterComponent"+t.componentNumber}},[n("form",{on:{submit:function(e){t.changeFeed()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.twitterList,expression:"twitterList"}],staticClass:"gridInput twitterInput",attrs:{type:"text",id:"twitterListInput"+t.componentNumber,placeholder:"Twitter List"},domProps:{value:t.twitterList},on:{input:function(e){e.target.composing||(t.twitterList=e.target.value)}}})]),t._v(" "),n("div",{attrs:{id:"twitter-feed-"+t.componentNumber}})])},staticRenderFns:[]}},,,,function(t,e){t.exports={games:[{label:"Melee",route:"#",twitchCategory:"Super Smash Bros. Melee"},{label:"Smash 4",route:"Smash4",twitchCategory:"Super Smash Bros. for Wii U"},{label:"League of Legends",route:"LoL",twitchCategory:"League of Legends"},{label:"PUBG",route:"PUBG",twitchCategory:"PLAYERUNKNOWN'S BATTLEGROUNDS"},{label:"Hearthstone",route:"Hearthstone",twitchCategory:"Hearthstone"},{label:"CS:GO",route:"CSGO",twitchCategory:"Counter-Strike: Global Offensive"},{label:"World of Warcraft",route:"WoW",twitchCategory:"World of Warcraft"},{label:"StarCraft",route:"StarCraft",twitchCategory:"StarCraft"},{label:"StarCraft 2",route:"StarCraft2",twitchCategory:"StarCraft II"},{label:"Heroes of the Storm",route:"HotS",twitchCategory:"Heroes of the Storm"},{label:"DotA 2",route:"DotA",twitchCategory:"Dota 2"},{label:"Overwatch",route:"Overwatch",twitchCategory:"Overwatch"}]}}],[37]);
//# sourceMappingURL=app.808e8afd54c5ee390776.js.map