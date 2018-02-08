var States = States || {};
var gameScore = 0;
var TargetScore;
var TextInfo;
var openid;
var OverFloat = null;
var CanTouch = true;

States.menu = function () {

    this.preload = function () {
        var isSuccess = false;
        Net.GetSignPackage("https://www.hylinkjs.com/PublickApi/getsignpackage", function (res) {
            isSuccess = true;
            var obj = JSON.parse(res.data);
            Third.config(obj)
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
                game.state.start('play');
        }, this);

        this.detailButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.1, 'rulebt',
            function () {
                if (this.clickState) return;
                this.detailBoard();
            }, this);

        this.bgMusic = game.add.sound('sd');
        this.musicButton = new Puzzle.Button(this, game.width - 50, game.height / 15, 'musicClose', function () {
            if (this.clickState) return;
            if (this.musicButton.key === 'musicClose') {
                this.bgMusic.loopFull(1);
                this.musicButton.loadTexture('music');
            } else {
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
    this.actRule = new Puzzle.Image(this, game.width * 0.6, game.height * 0.635, 'actDe', null, null);
    this.fontStyle = { font: "25px Arial", fill: "#030403", wordWrap: true, wordWrapWidth: 300 };
    this.objArray = [
        this.closeBtn,
        Puzzle.genderTextObject('2017/12/12-2018/12/12', game.world.centerX + 50, game.height / 3.745, this.fontStyle),
        this.actRule];
    this.detailGroup.addMultiple(this.objArray);

};


States.menu.prototype.GetServerInfo = function () {
    Net.get("/getgamerule", {key: "123"}, function (res) {
        var JSobj = JSON.parse(res.data);
        TargetScore = JSobj.GameScore;
        TextInfo = JSobj.TextInfo;
        openid = JSobj.openid;
    }, function (res) {
        console.log(res);
    })
};