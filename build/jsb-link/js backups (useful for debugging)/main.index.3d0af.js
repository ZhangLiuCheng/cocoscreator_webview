window.__require = function e(c, o, t) {
function n(s, l) {
if (!o[s]) {
if (!c[s]) {
var i = s.split("/");
i = i[i.length - 1];
if (!c[i]) {
var p = "function" == typeof __require && __require;
if (!l && p) return p(i, !0);
if (r) return r(i, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = i;
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
cc.log("cc.sys.platform:: ", cc.sys.platform);
cc.sys.platform === cc.sys.OS_IOS ? null != jsb && "undefined" != jsb && jsb.reflection.callStaticMethod("AppController", "openShop:", e) : cc.sys.os === cc.sys.OS_ANDROID ? null != jsb && "undefined" != jsb && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openShop", "(Ljava/lang/String;)V", e) : cc.log("跳转商城");
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