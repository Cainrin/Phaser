/**
 * Created by Miyccc on 2017/8/29.
 */

var Net = Net || {};

Net.ajax = function () { };
Net.ajax.prototype =  {
    x : function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    },

    send : function (url, succeed, failed, method, data, async) {
        if (async === undefined) {
            async = true;
        }
        var x = this.x();
        x.open(method, url, async);
        x.onreadystatechange = function () {
            if (x.readyState == 4) {
                if(x.status == 200){
                    succeed(x.responseText);
                }else{
                    console.log("Error code is " + x.status);
                    if(failed !== undefined){
                        failed();
                    }
                }
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    },

    get : function (url, data, succeed, failed) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url + (query.length ? '?' + query.join('&') : ''), succeed, failed, 'GET', null)
    },

    post : function (url, data, succeed, failed) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        this.send(url, succeed, failed, 'POST', query.join('&'))
    }
};


Net.host = 'http://njhylink.hylinkjs.com/winerhsg';
Net.http = new Net.ajax();

Net.post = function (url, data, succeed, failed) {
    this.http.post(this.host + url, data, succeed, failed);
};

Net.get = function (url, data, succeed, failed) {
    this.http.get(this.host + url, data, succeed, failed);
};