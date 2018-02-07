var States = States || {};
var gameScore = 0;

States.menu = function () {
    this.create = function () {
        this.clickState = false;
        game.add.tileSprite(0, 0, game.width, game.height, 'main_bg');
        this.rtLion = new Puzzle.Image(this, game.width / 6, game.height / 1.5, 'rtlion', null, null);
        this.ltLion = new Puzzle.Image(this, game.width - game.width / 6, game.height / 1.5, 'ltlion', null, null);
        this.dogImg = new Puzzle.Image(this, game.world.centerX, game.height / 1.6, 'dog', null, null);

        this.startButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.22, 'startbt',
            function () {
                if (this.clickState) return;
                game.state.start('over');
        }, this);

        this.detailButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.1, 'rulebt',
            function () {
                if (this.clickState) return;
                this.detailBoard();
            }, this);
        this.bgMusic = game.add.sound('sd');
        this.musicButton = new Puzzle.Button(this, 30, game.height - game.height / 15, 'img_51', function () {
            if (this.clickState) return;
            if (this.musicButton.key === 'img_51') {
                this.bgMusic.loopFull(1);
                this.musicButton.loadTexture('img_50');
            } else {
                this.musicButton.loadTexture('img_51');
                this.bgMusic.stop();
            }
        }, this);

        Puzzle.AddWorld(this.ltLion, this.rtLion, this.dogImg, this.startButton, this.detailButton);
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

