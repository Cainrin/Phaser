var States = States || {};


States.play = function () {

    this.genderTextObject = function(text, x, y, style) {
        obj = new Phaser.Text(game, x, y, text, style);
        obj.anchor.set(0.5);
        return obj;
    };


    this.create = function () {
        this.startBg = game.add.tileSprite(0, 0, game.width, game.height, 'game_bg');
        this.cloud = new Puzzle.Image(this, this.startBg.width, this.startBg.height / 6, 'yun2', null, null);
        this.cloud2 = new Puzzle.Image(this, 0, this.startBg.height / 3, 'yun3', null, null);
        this.cloud3 = new Puzzle.Image(this, this.startBg.width, this.startBg.height / 1.2, 'yun4', null, null);
        this.startWarning = new Puzzle.Image(this, this.startBg.width / 2, this.startBg.height / 2, 'img_19', null, null);
        this.gameTitle = this.genderTextObject("游戏规则", 0, -(this.startWarning.height / 2 - this.startWarning.height / 10),
            {font: "50px Arial", fill: "#4e412d"});
        this.leftImage = new Puzzle.Image(this, -(this.startWarning.width / 3), -(this.startWarning.height / 4),
            'img_22', null, null);
        this.rightImage = new Puzzle.Image(this, -(this.startWarning.width / 3) + 100, -(this.startWarning.height / 4),
            'img_22', null, null);
        this.rightImage.scale.x = -1;
        this.boatTitle = this.genderTextObject("左右移动龙舟", 70, -(this.startWarning.height / 4),
            {font: "40px Arial", fill: "#1e1911"});

        this.obsImg = new Puzzle.Image(this, -(this.startWarning.width / 3) + 50, -(this.startWarning.height / 16),
            'img_27', null, null);

        this.obsTitle = this.genderTextObject("触碰礁石生命值下降", 70, -(this.startWarning.height / 16),
            {font: "30px Arial", fill: "#1e1911", align: 'left', wordWrap: true, wordWrapWidth: 100 });

        this.riseImg = new Puzzle.Image(this, -(this.startWarning.width / 3) + 30, this.startWarning.height / 12,
            'img_18', null, null);

        this.riseTitle = this.genderTextObject("吃到粽子加积分", 70, this.startWarning.height / 12,
            {font: "30px Arial", fill: "#1e1911", align: 'left', wordWrap: true, wordWrapWidth: 100 });

        this.startBtn = new Puzzle.Button(this, 0, this.startWarning.height / 3, 'btn_4', function () {
                this.onStart();
        }, this);

        this.startWarning.addMultipleChild(this.gameTitle, this.leftImage, this.rightImage, this.boatTitle,
            this.obsImg, this.obsTitle, this.riseImg, this.riseTitle, this.startBtn);

        this.hpBand = new Puzzle.Image(this, 139, 52, 'img_20', null, null);
        this.scoreBand = new Puzzle.Image(this, this.startBg.width / 2 + 181, 52, 'img_20', null, null);
        this.hpText = this.genderTextObject("HP: 100%", 0, 20,
            {font: "50px Arial", fill: "#685841"});
        this.scoreText = this.genderTextObject("Score: 0", 0, 20,
            {font: "50px Arial", fill: "#685841"});
        this.hpBand.addChild(this.hpText);
        this.scoreBand.addChild(this.scoreText);
        Puzzle.AddWorld(this.startWarning, this.cloud, this.cloud2, this.cloud3, this.hpBand, this.scoreBand);

    };


    this.onStart = function () {
        this.hp = 100;
        this.score = 0;
        that = this;
        this.hasStarted = true;
        this.startWarning.destroy();
        this.startBg.autoScroll(0, 100);
        this.boat = game.add.sprite(game.world.centerX, this.startBg.height - this.startBg.height / 8, boatChoice);
        this.boat.anchor.set(0.5);
        game.physics.arcade.enable(this.boat);
        this.boat.body.collideWorldBounds = true;
        this.leftBtn = new Puzzle.Button(this, game.world.centerX / 2,this.startBg.height - this.startBg.height / 12,
            'img_22', function() {
                this.moveBoat(1);
            }, this);

        this.rightBtn = new Puzzle.Button(this,  game.world.centerX + game.world.centerX / 2,
            this.startBg.height - this.startBg.height / 12,
            'img_46', function() {
                this.moveBoat(2);
            }, this, true);

        this.obsTeam = new Obstacles(5, 'img_23', 1, 100, this.updateScoreHp, this);
        this.riseTeam = new Obstacles(2, 'img_18', 1, 400, this.updateScoreHp, this);
        this.obsTeam.init();
        this.riseTeam.init();
        Puzzle.AddWorld(this.leftBtn, this.rightBtn);
    };

    this.update = function () {
        if (!this.hasStarted) return;
        game.physics.arcade.overlap(this.boat, this.riseTeam.obstacles, this.riseTeam.getRice, null, this.riseTeam);
        game.physics.arcade.overlap(this.boat, this.obsTeam.obstacles, this.obsTeam.hitObs, null, this.obsTeam);
    };

    this.gameOver = function () {
        console.log("over!");
        if (musicPlay) {
            this.gameBgsd.stop();
        }
        this.stopObs();
        this.startBg.stopScroll();
        this.showFinalText();
    };

    this.stopObs = function() {
        this.riseTeam.obstacles.forEachExists(function(obs) {
            obs.body.velocity.y = 0;
        }, this);
        this.obsTeam.obstacles.forEachExists(function(obs) {
            obs.body.velocity.y = 0;
        }, this);
    };

    this.showFinalText = function() {
        this.startWarning = new Puzzle.Image(this, this.startBg.width / 2, this.startBg.height / 2, 'img_19', null, null);
        this.gameOverImg = new Puzzle.Image(this, 0, -(this.startWarning.height / 2 - this.startWarning.height / 10),
            'img_24', null, null);
        this.gameNoImg = new Puzzle.Image(this, -200, -(this.startWarning.height / 2 - this.startWarning.height / 8),
            'img_25', null, null);
        this.waterImg = new Puzzle.Image(this, 0, 0, 'img_26', null, null);
        this.overTile = this.genderTextObject("你太菜了辣鸡", 0, this.startWarning.height / 8,
            {font: "30px Arial", fill: "#1e1911", align: 'left', wordWrap: true, wordWrapWidth: 100 });

        this.againBtn = new Puzzle.Button(this, -150, this.startWarning.height / 6, 'btn_6', function() {
        }, this);
        this.backMenu = new Puzzle.Button(this, 150, this.startWarning.height / 6, 'btn_8', function() {
        }, this);
        this.rankMenu = new Puzzle.Button(this, -150, this.startWarning.height / 4, 'btn_2', function() {
        }, this);
        this.inviteFri = new Puzzle.Button(this, 150, this.startWarning.height / 4, 'btn_13', function() {
        }, this);

        this.startWarning.addMultipleChild(this.gameOverImg, this.gameNoImg, this.waterImg, this.overTile,
            this.againBtn, this.backMenu, this.rankMenu, this.inviteFri);

        Puzzle.AddWorld(this.startWarning);
    };

    this.moveBoat = function (value) {
        this.relativeX = 0;
        switch (value){
            case 1:
                if (this.boat.x > 650 / 2) {
                    this.relativeX = 650 / 2;
                }else{
                    this.relativeX = 150;
                }
                break;

            case 2:
                console.log(this.boat.x);
                if (this.boat.x < 320) {
                    this.relativeX = 650 / 2;
                }else{
                    this.relativeX = 500;
                }
                break;
        }
        game.add.tween(this.boat).to({x: this.relativeX}, 1000, Phaser.easing, true, 0, 0, false)
    };

    this.updateScoreHp = function() {
        this.scoreText.setText("Score: " + this.score);
        this.hpText.setText("HP: " + this.hp + "%");
    };


};