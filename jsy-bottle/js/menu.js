var States = States || {};


States.menu = function () {
    this.create = function () {
        this.clickState = false;
        game.add.tileSprite(0, 0, game.width, game.height, 'main_bg');
        this.rtLion = new Puzzle.Image(this, game.width / 6, game.height / 1.5, 'rtlion', null, null);
        this.ltLion = new Puzzle.Image(this, game.width - game.width / 6, game.height / 1.5, 'ltlion', null, null);
        this.dogImg = new Puzzle.Image(this, game.world.centerX, game.height / 1.6, 'dog', null, null);

        // game.add.tween(cloudImg).to({x: 650}, 10000, Phaser.easing, true, 0, -1, false);
        // game.add.tween(cloudImg2).to({x: 0}, 10000, Phaser.easing, true, 0, -1, false);
        this.startButton = new Puzzle.Button(this, game.world.centerX, game.height / 1.22, 'startbt',
            function () {
                if (this.clickState) return;
                alert("u click this")
                // this.startMenu();
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
    this.detailGroup.create(0, 0, 'rule');
    this.closeBtn = new Puzzle.Button(this, game.width * 0.95, game.height / 14, 'close', function () {
        this.clickState = false;
        this.detailGroup.destroy();
    }, this);
    this.fontStyle = { font: "25px Arial", fill: "#030403", wordWrap: true, wordWrapWidth: 300 };
    this.objArray = [
        this.closeBtn,
        Puzzle.genderTextObject('2017/12/12-2018/12/12', game.world.centerX + 50, game.height / 3.745, this.fontStyle),
        Puzzle.genderTextObject('blah blah blah blah blah blah blah', game.world.centerX + 100, game.world.centerY + 27, this.fontStyle)];
    this.detailGroup.addMultiple(this.objArray);

};

