window.__require = function e(r, n, o) {
function t(i, u) {
if (!n[i]) {
if (!r[i]) {
var _ = i.split("/");
_ = _[_.length - 1];
if (!r[_]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(_, !0);
if (c) return c(_, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = _;
}
var f = n[i] = {
exports: {}
};
r[i][0].call(f.exports, function(e) {
return t(r[i][1][e] || e);
}, f, f.exports, e, r, n, o);
}
return n[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) t(o[i]);
return t;
}({
HelloWorld: [ function(e, r) {
"use strict";
cc._RF.push(r, "280c3rsZJJKnZ9RqbALVwtK", "HelloWorld");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
btnShop: function() {}
});
cc._RF.pop();
}, {} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(e, r) {
"use strict";
cc._RF.push(r, "7277baEWfNCa5SkbDyRnT3f", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "HelloWorld", "use_v2.1-2.2.1_cc.Toggle_event" ]);