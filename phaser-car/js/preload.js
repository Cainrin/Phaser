var States = States || {};

States.preload = function () {
    this.preload = function () {
        var preloadSprite = game.add.sprite(34, game.height/2, 'loading');
        game.load.setPreloadSprite(preloadSprite);
        game.load.bitmapFont('boat_font', 'assets/TTF/otf_0.png', 'assets/TTF/otf.fnt');
        game.load.audio('sd', 'assets/games/bg.mp3');
        game.load.image('game_bg', 'assets/games/game_bj.jpg');
        game.load.image('main_bg', 'assets/games/index_bj.jpg');
        game.load.image('main_cloud', 'assets/games/yun_1.png');
        game.load.image('num_1', 'assets/games/anum_1.png');
        game.load.image('num_2', 'assets/games/anum_2.png');
        game.load.image('num_3', 'assets/games/anum_3.png');
        game.load.image('img', 'assets/games/img.jpg');
        game.load.image('logo', 'assets/games/logo.png');
        game.load.image('yun1', 'assets/games/yun_1.png');
        game.load.image('yun2', 'assets/games/yun_2.png');
        game.load.image('yun3', 'assets/games/yun_3.png');
        game.load.image('yun4', 'assets/games/yun_4.png');
        game.load.image('boat_0', 'assets/games/boat_0.png');
        for (var t = 1; t <= 16; t++) {
            if (t === 7) continue;
            game.load.image('btn_' + t, "assets/games/btn_" + t + '.png');
        }
        for (var i = 1; i <= 51; i++) {
            if (i === 6 || i === 47 || i === 48 || i === 49) continue;
            game.load.image('img_' + i, 'assets/games/img_' + i + '.png');
        }
    // 34 17 16 2 1 45 50 51 18
    };
    this.create = function () {
        game.state.start('menu');
    }
};

