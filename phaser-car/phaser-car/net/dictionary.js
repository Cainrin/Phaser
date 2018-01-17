

function Dictionary() {

    this.data = new Array(0);

    this.push = function(key, value) {
        this.data[key] = value;
    };

    this.pop = function (key) {
        if(!this.hasKey(key)) {
            return null;
        }
        v = this.data[key];
        delete this.data[key];
        return v;
    };

    this.get = function(key) {
        if(!this.hasKey(key)){
            return null;
        }
        return this.data[key];
    };

    this.remove = function(key) {
        if(!this.hasKey(key)){
            return null;
        }
        this.data[key] = null;
    };

    this.isEmpty = function() {
        return this.size() === 0;
    };

    this.hasKey = function (key) {
        for(var k in this.data){
            if(k === key){
                return true;
            }
        }
        return false;
    };

    this.size = function() {
        var n = 0;
        for(var key in Object.keys(this.data)) {
            ++n;
        }
        return n;
    };

    this.clear = function () {
        for(var key in this.data) {
            delete this.data[key];
        }
    };
}