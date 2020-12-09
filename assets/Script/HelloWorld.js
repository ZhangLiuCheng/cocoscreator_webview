cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad: function () {

    },

    btnShop() {
        let shopurl = "https://cest.gamefengkong.com/shop?hab=1";
        if (cc.sys.isNative && cc.sys.os == cc.sys.OS_IOS) {
            jsb.reflection.callStaticMethod("AppController","openShop:", shopurl);            
        } else if (cc.sys.isNative && cc.sys.os == cc.sys.OS_ANDROID) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openShop", "(Ljava/lang/String;)V", shopurl);
        } else {
            // 其他情况
            cc.log("跳转商城")
        }
    }
});
