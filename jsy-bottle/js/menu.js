var States = States || {};
var gameScore = 0;
var TargetScore;
var TextInfo;
var openid;
var musicPlay = false;
var OverFloat = null;
var CanTouch = true;
var myCookies = "";

States.menu = function () {

    this.preload = function () {
        var isSuccess = false;
        Net.GetSignPackage("https://www.hylinkjs.com/publicApi/getsignpackage", function (res) {
            isSuccess = true;
            console.log(typeof res);
            var obj = JSON.parse(res);
            Third.wx.config(obj);
        }, function (res) {
            alert(res)
        });
    };


    this.create = function () {
        this.GetServerInfo();
        this.clickState = false;
        game.add.tileSprite(0, 0, game.width, game.height, 'main_bg');
        this.rtLion = new Puzzle.Image(this, game.width / 6, game.height / 1.5, 'rtlion', null, null);
        this.ltLion = new Puzzle.Image(this, game.width - game.width / 6, game.height / 1.5, 'ltlion', null, null);
        this.dogImg = new Puzzle.Image(this, game.world.centerX, game.height / 1.6, 'dog', null, null);

        this.startButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.22, 'startbt',
            function () {
                if (this.clickState) return;
                if (parseInt(TargetScore) === 0) {
                    alert(TextInfo);
                    return
                }
                if (musicPlay) {
                    this.bgMusic.stop();
                }
                game.state.start('play');
        }, this);

        this.detailButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.1, 'rulebt',
            function () {
                if (this.clickState) return;
                this.detailBoard();
            }, this);

        this.bgMusic = game.add.sound('sd');
        this.bgMusic.loopFull(1);
        this.musicButton = new Puzzle.Button(this, game.width - 50, game.height / 15, 'music', function () {
            if (this.clickState) return;
            if (this.musicButton.key === 'musicClose') {
                musicPlay = true;
                this.bgMusic.loopFull(1);
                this.musicButton.loadTexture('music');
            } else {
                musicPlay = false;
                this.musicButton.loadTexture('musicClose');
                this.bgMusic.stop();
            }
        }, this);

        Puzzle.AddWorld(this.ltLion, this.rtLion, this.dogImg, this.startButton, this.detailButton, this.musicButton);
    }
};


States.menu.prototype.detailBoard = function () {
    this.clickState = true;
    this.detailGroup =  game.add.group();
    this.detailGroup.create(0, 0, 'actBg');
    this.closeBtn = new Puzzle.Button(this, game.width * 0.95, game.height / 14, 'close', function () {
        this.clickState = false;
        this.detailGroup.destroy();
    }, this);
    this.detailGroup.add(this.closeBtn);

};


States.menu.prototype.GetServerInfo = function () {
    Net.get("/getgamerule", {key: "123"}, function (res) {
        myCookies = document.cookie;
        var JSobj = JSON.parse(res);
        console.log(JSobj);
        TargetScore = JSobj.GameScore;
        TextInfo = JSobj.TextInfo;
        openid = JSobj.openid;
    }, function (res) {
        console.log(res);
    })
};

