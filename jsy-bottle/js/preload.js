var States = States || {};

States.preload = function () {
    this.preload = function () {
        var preloadSprite = game.add.sprite(34, game.height/2, 'loading');
        game.load.setPreloadSprite(preloadSprite);


        // mainpage
        game.load.audio('sd', 'assets/games/bg.mp3');
        game.load.image('main_bg', 'assets/games/mainpage/mainbg.png');
        game.load.image('dog', 'assets/games/mainpage/dog.png');
        game.load.image('ltlion', 'assets/games/mainpage/ltlion.png');
        game.load.image('music', 'assets/games/mainpage/music.png');
        game.load.image('rtlion', 'assets/games/mainpage/rtlion.png');
        game.load.image('rulebt', 'assets/games/mainpage/rulebt.png');
        game.load.image('startbt', 'assets/games/mainpage/startbt.png');

        // activerule
        game.load.image('actBg', 'assets/games/activerule/actBg.png');
        game.load.image('actDe', 'assets/games/activerule/actDe.png');
        game.load.image('close', 'assets/games/activerule/close.png');

        // gamepage
        game.load.image('1score', 'assets/games/gamepage/1score.png');
        game.load.image('waitBg', 'assets/games/gamepage/waitbg.png');
        game.load.image('blowup', 'assets/games/gamepage/blowup.png');
        game.load.image('ltBtn', 'assets/games/gamepage/lbt.png');
        game.load.image('rtBtn', 'assets/games/gamepage/rbt.png');
        game.load.image('5score', 'assets/games/gamepage/5.png');
        game.load.image('36score', 'assets/games/gamepage/36.png');
        game.load.image('ltdog', 'assets/games/gamepage/ltdog.png');
        game.load.image('gamebg', 'assets/games/gamepage/gameBg.png');
        game.load.image('heart', 'assets/games/gamepage/heart.png');
        game.load.image('life', 'assets/games/gamepage/life.png');
        game.load.image('lifebg', 'assets/games/gamepage/lifebg.png');
        game.load.image('redheart', 'assets/games/gamepage/redheart.png');
        game.load.image('xq', 'assets/games/gamepage/xq.png');
        game.load.image('xqbg', 'assets/games/gamepage/xqbg.png');
        game.load.bitmapFont('gameFont', 'assets/games/font/font.png', 'assets/games/font/font.fnt');
        for (var v = 1; v <= 5; v++) {
            game.load.image('rbot' + v, "assets/games/gamepage/rbot" + v + '.png');
        }
        for (var t = 1; t <= 4; t++) {
            game.load.image('boom' + t, "assets/games/gamepage/boom" + t + '.png');
        }
        for (var i = 1; i <= 4; i++) {
            game.load.image('bot' + i, "assets/games/gamepage/bot" + i + '.png');
        }

        // hitprize
        game.load.image('getbt', 'assets/games/hitprize/getbt.png');
        game.load.image('hitbg', 'assets/games/hitprize/hitbg.png');
        game.load.image('sharebt', 'assets/games/hitprize/sharebt.png');

        // infouload
        game.load.image('name', 'assets/games/infoupload/name.png');
        game.load.image('phone', 'assets/games/infoupload/phone.png');
        game.load.image('uploadPage', 'assets/games/infoupload/uploadPage.png');
        game.load.image('uploadbt', 'assets/games/infoupload/uploadBt.png');
        game.load.nineSlice('nameBlock', 'assets/games/infoupload/nameBlock.png', 15);


        // lottery
        game.load.image('360', 'assets/games/lottery/360.png');
        game.load.image('hitBg', 'assets/games/lottery/hitbg.png');
        game.load.image('ltbt', 'assets/games/lottery/ltbt.png');

        // sharefloat
        game.load.image('sharefloat', 'assets/games/sharefloat/sharefloat.png');

        // untilxq
        game.load.image('restartBt', 'assets/games/untilxq/restartbt.png');
        game.load.image('xquntil', 'assets/games/untilxq/xquntil.png');


        // getMsg
        // 34 17 16 2 1 45 50 51 18
    };
    this.create = function () {
        game.state.start('menu');
    }
};

