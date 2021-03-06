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
            nonceStr : config.nonceStr,
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
                title : '一不小心就上了双沟头条，想不红都难！',
                link: 'http://njhylink.hylinkjs.com/game/rhsgpaper/index.html',
                imgUrl: 'https://hyproject-1252786812.file.myqcloud.com/mobile/meal/share.png',
                success : function (res) {
                    alert(res);
                },
                cancel : function (res) {

                },
                fail : function (res) {

                }
            });

            wx.onMenuShareAppMessage({
                title: '一不小心就上了双沟头条，想不红都难！', // 分享标题
                desc: '灯光已就位，这一刻，你就是焦点！', // 分享描述
                link: 'http://njhylink.hylinkjs.com/game/rhsgpaper/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: 'https://hyproject-1252786812.file.myqcloud.com/mobile/meal/share.png', // 自定义图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareQQ({
                title: '一不小心就上了双沟头条，想不红都难！', // 分享标题
                desc: '灯光已就位，这一刻，你就是焦点！', // 分享描述
                link: 'http://njhylink.hylinkjs.com/game/rhsgpaper/index.html', // 分享链接
                imgUrl: 'https://hyproject-1252786812.file.myqcloud.com/mobile/meal/share.png', // 分享图标
                success: function (res) {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function (res) {
                    // 用户取消分享后执行的回调函数
                }
            });

            wx.onMenuShareWeibo({
                title: '一不小心就上了双沟头条，想不红都难！', // 分享标题
                desc: '灯光已就位，这一刻，你就是焦点！', // 分享描述
                link: 'http://njhylink.hylinkjs.com/game/rhsgpaper/index.html', // 分享链接
                imgUrl: 'https://hyproject-1252786812.file.myqcloud.com/mobile/meal/share.png', // 分享图标
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