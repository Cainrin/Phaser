var States = States || {};

var boatChoice = "img_39";

States.menu = function () {
    this.create = function () {
        game.add.tileSprite(0, 0, game.width, game.height, 'main_bg');
        var logo = new Phaser.Image(game, game.world.centerX, game.height / 10, 'logo', null);
        var roof = new Phaser.Image(game, logo.x + 0, logo.y + 120, 'img_34', null);
        var tablet = new Phaser.Image(game, roof.x + 0, roof.y + 130, 'img_17', null);
        var img = new Phaser.Sprite(game, 22, tablet.y + 0, 'img', null);
        var jsPeo = new Phaser.Image(game, game.world.centerX + 150, tablet.y + 250, 'img_2', null);
        var dBoat = new Phaser.Image(game, jsPeo.x - 50, jsPeo.y + jsPeo.height / 2 - 176 / 3, 'img_16', null);
        var bubble = new Phaser.Image(game, dBoat.x - dBoat.width / 2 - 50, jsPeo.y  - jsPeo.height / 6, 'img_1', null);
        var charImg = new Phaser.Image(game, bubble.x + 30, bubble.y + 0, 'img_45', null);
        var zongImg = new Phaser.Image(game, bubble.x - bubble.height / 2, dBoat.y + dBoat.height / 16, 'img_18', null);
        var cloudImg = new Phaser.Image(game, 0, game.world.centerY - 100, 'yun1', null);
        var cloudImg2 = new Phaser.Image(game, 650, game.world.centerY - 350, 'yun1', null);
        cloudImg2.scale.x = -1;
        game.add.tween(cloudImg).to({x: 650}, 10000, Phaser.easing, true, 0, -1, false);
        game.add.tween(cloudImg2).to({x: 0}, 10000, Phaser.easing, true, 0, -1, false);
        var startButton = new Puzzle.Button(this, game.world.centerX, game.height - game.height / 6, 'img_3',
            function () {
                this.startMenu();
        }, this);
        var bgMusic = game.add.sound('sd');
        var musicButton = new Puzzle.Button(this, 30, game.height - game.height / 15, 'img_51', function () {
            if (musicButton.key === 'img_51') {
                bgMusic.loopFull(1);
                musicButton.loadTexture('img_50');
            } else {
                musicButton.loadTexture('img_51');
                bgMusic.stop();
            }
        }, this);
        img.width = game.width * 2;

        Puzzle.AddWorld(logo, img, tablet, roof, jsPeo, dBoat, bubble, charImg,
            musicButton, startButton, zongImg, cloudImg, cloudImg2);
    }
};



