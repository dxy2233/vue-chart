(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d36664d4"],{"648e":function(e,t,n){},bb46:function(e,t,n){"use strict";var s=n("648e"),i=n.n(s);i.a},bb51:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"nav"},e._l(e.numList,function(t,s){return n("p",{key:s},[e._v(e._s(t))])}),0),n("div",{staticClass:"page"},[n("div",{staticClass:"header"},[e._v("用户名:"+e._s(e.$store.state.userName)+"，在线人数"+e._s(e.num))]),n("div",{staticClass:"wrap"},[n("div",{staticClass:"screen",attrs:{id:"screen"}},e._l(e.info,function(t,s){return n("p",{key:s},[e._v(e._s(t.user)+"："+e._s(t.content))])}),0),n("div",{staticClass:"entry"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.enter,expression:"enter"}],domProps:{value:e.enter},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),t.preventDefault(),e.sendMessage(t))},input:function(t){t.target.composing||(e.enter=t.target.value)}}}),n("button",{on:{click:e.sendMessage}},[e._v("发送")])])])])])},i=[],o={name:"Home",data:function(){return{num:"",numList:[],enter:"",info:[]}},created:function(){this.$socket.emit("getLoginInfo")},methods:{sendMessage:function(){this.$socket.emit("send",this.enter),this.enter=""}},sockets:{numList:function(e){this.numList=e.content,this.num=this.numList.length},message:function(e){this.info.push(e),this.$nextTick(function(){document.getElementById("screen").scrollTop=document.getElementById("screen").scrollHeight})}}},a=o,c=(n("bb46"),n("fc05")),r=Object(c["a"])(a,s,i,!1,null,"5c23b6eb",null);t["default"]=r.exports}}]);