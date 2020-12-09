window.__require = function e(c, o, n) {
function t(s, i) {
if (!o[s]) {
if (!c[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!c[l]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var p = o[s] = {
exports: {}
};
c[s][0].call(p.exports, function(e) {
return t(c[s][1][e] || e);
}, p, p.exports, e, c, o, n);
}
return o[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) t(n[s]);
return t;
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
cc.sys.platform === cc.sys.OS_IOS ? null != jsb && "undefined" != jsb && jsb.reflection.callStaticMethod("AppController", "openShop:", e) : cc.sys.os === cc.sys.ANDROID ? null != jsb && "undefined" != jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openShop", "(Ljava/lang/String;)V", e) : cc.log("跳转商城");
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