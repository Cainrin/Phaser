
var SubWS = (function () {
    "use strict";
    var instance;
    var dic = new Dictionary();

    function SubWS(address) {
        if(!(this instanceof SubWS)){
            return new SubWS(address);
        }

        this.ws = new WebSocket(address);
        this.ws.onerror = onError;
        this.ws.onopen = onOpen;
        this.ws.onmessage = onMessage;
    }

    SubWS.prototype.isSuccess = true;

    SubWS.prototype.send = function (evt) {
        this.ws.send(evt);
    };

    SubWS.prototype.addEventListener = function (evt, callback, obj) {

        var t = [];
        if(dic.hasKey(evt)){
            t = dic.get(evt)
        }
        t.push({
           func: callback,
           that: obj
        });
        dic.push(evt, t);
    };

    SubWS.prototype.removeEventListener = function (evt, callback, obj) {
        if(!dic.hasKey(evt)){
            return;
        }
        var t = dic.get(evt);

        t.splice(t.indexOf({
            func: callback,
            that: obj
        }));
    };

    SubWS.prototype.dispatch = function (evt, params) {
        console.log('dispath event', evt);
        var t = dic.get(evt);
        for(var idx in t){
            if(t[idx].func && t[idx].that){
                t[idx].func.call(t[idx].that, params);
            }
        }
    };

    function onMessage(evt) {
        console.log(evt.data);
        var data = JSON.parse(evt.data);
        var t = dic.get(data.evt);
        for(var v in t){
            if(v.callback && v.obj){
                v.callback.call(v.obj, data.params);
            }
        }
    }

    function onError() {
        this.isSuccess = false;
        console.log('websocket error!');
        alert("websocket error!");
    }

    function onOpen() {
        console.log('websockt open!');
    }

    return {
        init : function () {
            if(!instance){
                return instance = SubWS.apply(null, arguments);
            }
            return instance;
        },

        getInstance : function () {
            if (!instance) {
                return instance = SubWS.apply(null, arguments);
            }
            return instance;
        }
    }
})();