(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99e6e992"],{"307c":function(e,t,n){"use strict";var i=n("4f17"),s=n.n(i);s.a},"4f17":function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("div",{staticClass:"wrap"},[n("p",[e._v("昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],domProps:{value:e.userName},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.linkStart(t):null},input:function(t){t.target.composing||(e.userName=t.target.value)}}}),n("button",{on:{click:e.linkStart}},[e._v("登录")])])])},s=[],o=(n("cadf"),n("551c"),n("097d"),{name:"Login",data:function(){return{userName:""}},methods:{linkStart:function(){this.$socket.emit("login",this.userName)}},sockets:{login:function(e){0===e.code&&(this.$store.dispatch("login",this.userName),this.$router.push({path:this.redirect||"/"}))}}}),a=o,r=(n("307c"),n("2877")),u=Object(r["a"])(a,i,s,!1,null,"05ffb208",null);u.options.__file="Login.vue";t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-99e6e992.f56004a4.js.map