window.__require = function e(c, o, t) {
function n(s, i) {
if (!o[s]) {
if (!c[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!c[l]) {
var p = "function" == typeof __require && __require;
if (!i && p) return p(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var u = o[s] = {
exports: {}
};
c[s][0].call(u.exports, function(e) {
return n(c[s][1][e] || e);
}, u, u.exports, e, c, o, t);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < t.length; s++) n(t[s]);
return n;
}({
HelloWorld: [ function(e, c) {
"use strict";
cc._RF.push(c, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
btnShop: function() {
var e = "https://cest.gamefengkong.com/shop?hab=1";
cc.sys.platform === cc.sys.ANDROID ? null != jsb && "undefined" != jsb && jsb.reflection.callStaticMethod("AppController", "openShop:", e) : cc.sys.os === cc.sys.OS_IOS ? jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openShop", "(Ljava/lang/String;)V", e) : cc.log("跳转商城");
}
});
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, c) {
"use strict";
cc._RF.push(c, "7277baEWfNCa5SkbDyRnT3f", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_v2.1-2.2.1_cc.Toggle_event" ]);