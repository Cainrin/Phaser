/**
 * Created by Miyccc on 2017/8/29.
 */


var Third = Third || {};

Third.WeChat = function () { };
Third.WeChat.prototype = {

    config : function (config) {
        wx.config({
            debug : false,
            appId : config.appId,
            timestamp : config.timestamp,
            nonceStr : config.noncestr,
            signature : config.signature,
            jsApiList : [
                'checkJsApi',//判断当前客户端是否支持指定JS接口
                'chooseImage',//拍照或从手机相册中选图接口
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'onMenuShareQQ',
                'onMenuShareWeibo'
            ]
        });

        wx.ready(function () {

            wx.onMenuShareTimeline({
                title : '喜气攒不停，接元宵，就会赢！',
                link: 'https://www.hylinkjs.com/phaser/jsyindex',
                imgUrl: 'http://yhnhwc-1252786812.file.myqcloud.com/jsy/static/img/sharepic.jpg',
                success : function (res) {
                    if (OverFloat) {
                        OverFloat.destroy();
                    }
                },
                cancel : function (res) {

                },
                fail : function (res) {

                }
            });

            wx.onMenuShareAppMessage({
                title: '喜气攒不停，接元宵，就会赢！', // 分享标题
                desc: '欢欢喜喜闹元宵，喜庆鸿运一整年！', // 分享描述
                link: 'https://www.hylinkjs.com/phaser/jsyindex', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://yhnhwc-1252786812.file.myqcloud.com/jsy/static/img/sharepic.jpg', // 自定义图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    if (OverFloat) {
                        OverFloat.destroy();
                    }
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQQ({
                title: '喜气攒不停，接元宵，就会赢！', // 分享标题
                desc: '欢欢喜喜闹元宵，喜庆鸿运一整年！', // 分享描述
                link: 'https://www.hylinkjs.com/phaser/jsyindex', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://yhnhwc-1252786812.file.myqcloud.com/jsy/static/img/sharepic.jpg', // 自定义图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareWeibo({
                title: '喜气攒不停，接元宵，就会赢！', // 分享标题
                desc: '欢欢喜喜闹元宵，喜庆鸿运一整年！', // 分享描述
                link: 'https://www.hylinkjs.com/phaser/jsyindex', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'http://yhnhwc-1252786812.file.myqcloud.com/jsy/static/img/sharepic.jpg', // 自定义图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                }
            });
        });

        wx.error(function (res) {
            alert(res.errMsg);
        });
    }
};

Third.wx = new Third.WeChat();
