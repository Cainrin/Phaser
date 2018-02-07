var States = States || {};


States.play = function () {

    this.genderTextObject = function(text, x, y, style) {
        this.selfObj = new Phaser.Text(game, x, y, text, style);
        this.selfObj.anchor.set(0.5);
        return this.selfObj;
    };

    this.create = function () {


        this.startBg = game.add.tileSprite(0, 0, game.width, game.height, 'gamebg');

        this.xqBg = game.add.image(game.width * 0.07, game.height * 0.08, 'xqbg', null);

        this.xq = new Puzzle.Image(this, this.xqBg.width * 0.3, this.xqBg.height / 2, 'xq', null, null);
        this.xqtext = this.genderTextObject("0", this.xqBg.width - this.xqBg.width * 0.3, this.xqBg.height / 1.9, {font: "35px Arial", fill: "#be1426"});
        this.xqBg.addChild(this.xq);
        this.xqBg.addChild(this.xqtext);

        this.lfBg = game.add.image(game.width - game.width * 0.4, game.height * 0.08, 'lifebg', null);
        this.life = new Puzzle.Image(this, this.xqBg.width * 0.3, this.xqBg.height / 2, 'life', null, null);
        this.heart1 = new Puzzle.Image(this, this.xqBg.width * 0.6, this.xqBg.height / 2, 'redheart', null, null);
        this.heart2 = new Puzzle.Image(this, this.xqBg.width * 0.7, this.xqBg.height / 2, 'redheart', null, null);
        this.heart3 = new Puzzle.Image(this, this.xqBg.width * 0.8, this.xqBg.height / 2, 'redheart', null, null);
        this.lfBg.addChild(this.life);
        this.lfBg.addChild(this.heart1);
        this.lfBg.addChild(this.heart2);
        this.lfBg.addChild(this.heart3);

        this.ltdog = game.add.sprite(game.world.centerX, this.startBg.height * 0.8, 'ltdog');
        this.ltdog.scale.setTo(0.75, 0.75);
        this.ltdog.anchor.set(0.5);

        game.physics.arcade.enable(this.ltdog);
        this.ltdog.body.collideWorldBounds = true;
        this.canTween = true;
        this.leftBtn = new Puzzle.Button(this, game.world.centerX / 2,this.startBg.height - this.startBg.height / 12,
            'ltBtn', function() {
                this.moveBoat(1);
            }, this);


        this.rightBtn = new Puzzle.Button(this,  game.world.centerX + game.world.centerX / 2,
            this.startBg.height - this.startBg.height / 12,
            'rtBtn', function() {
                this.moveBoat(2);
            }, this, true);

        this.floatpage = new Puzzle.Image(this, game.world.centerX, game.world.centerY, 'waitBg', null, null);

        Puzzle.AddWorld(this.leftBtn, this.rightBtn, this.floatpage);

        game.input.onDown.addOnce(this.onStart, this);
    };


    this.onStart = function () {
        this.floatpage.destroy();
        this.hp = 3;
        this.hasStarted = true;
        this.redTeam = new Obstacles(5, 'rbot1', 1, 150, this.updateScoreHp, this, 78, 310, 560);
        this.boomTeam = new Obstacles(3, 'boom1', 1, 200, this.updateScoreHp, this, 98, 330, 550);

        this.redTeam.init();
        this.boomTeam.init();
    };

    this.update = function () {
        if (!this.hasStarted) return;
        game.physics.arcade.overlap(this.ltdog, this.redTeam.obstacles, this.redTeam.getBot, null,  this.redTeam);
        game.physics.arcade.overlap(this.ltdog, this.boomTeam.obstacles, this.boomTeam.hitboom, null, this.boomTeam);
    };

    this.gameOver = function () {
        console.log("over!");
        this.stopObs();
        game.state.start('over');
    };

    this.stopObs = function() {
        this.redTeam.obstacles.forEachExists(function(obs) {
            obs.body.velocity.y = 0;
        }, this);
        this.boomTeam.obstacles.forEachExists(function(obs) {
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
                console.log(this.ltdog.x);
                if (this.ltdog.x > 330) {
                    this.relativeX = 640 / 2;
                }else{
                    this.relativeX = 78;
                }
                break;

            case 2:
                console.log(this.ltdog.x);
                if (this.ltdog.x < 310) {
                    this.relativeX = 650 / 2;
                }else{
                    this.relativeX = 561;
                }
                break;
        }

        if (!this.canTween) {
            console.log(this.canTween);
            return;
        }

        this.canTween = false;
        this.nowTween = game.add.tween(this.ltdog).to({x: this.relativeX}, 300, Phaser.easing, true, 0, 0, false);
        this.nowTween.onComplete.add(
            function () {
                this.canTween = true;
            },this
        )
    };

    this.updateScoreHp = function() {
        this.xqtext.setText(gameScore);
        switch (this.hp) {
            case 3:
                break;
            case 2:
                this.heart3.loadTexture('heart');
                break;
            case 1:
                this.heart3.loadTexture('heart');
                this.heart2.loadTexture('heart');
                break;
            case 0:
                this.heart3.loadTexture('heart');
                this.heart2.loadTexture('heart');
                this.heart1.loadTexture('heart');
                break;
        }
    };
};