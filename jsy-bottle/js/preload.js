var States = States || {};

States.preload = function () {
    this.preload = function () {
        var preloadSprite = game.add.sprite(34, game.height/2, 'loading');
        game.load.setPreloadSprite(preloadSprite);


        // mainpage
        game.load.audio('sd', 'static/jsy/assets/games/bg.mp3');
        game.load.image('musicClose', 'static/jsy/assets/games/mainpage/musicClose.png');
        game.load.image('main_bg', 'static/jsy/assets/games/mainpage/mainbg.png');
        game.load.image('dog', 'static/jsy/assets/games/mainpage/dog.png');
        game.load.image('ltlion', 'static/jsy/assets/games/mainpage/ltlion.png');
        game.load.image('music', 'static/jsy/assets/games/mainpage/music.png');
        game.load.image('rtlion', 'static/jsy/assets/games/mainpage/rtlion.png');
        game.load.image('rulebt', 'static/jsy/assets/games/mainpage/rulebt.png');
        game.load.image('startbt', 'static/jsy/assets/games/mainpage/startbt.png');

        // activerule
        game.load.image('actBg', 'static/jsy/assets/games/activerule/actBg.png');
        game.load.image('actDe', 'static/jsy/assets/games/activerule/actDe.png');
        game.load.image('close', 'static/jsy/assets/games/activerule/close.png');

        // gamepage
        game.load.image('1score', 'static/jsy/assets/games/gamepage/1score.png');
        game.load.image('waitBg', 'static/jsy/assets/games/gamepage/waitbg.png');
        game.load.image('blowup', 'static/jsy/assets/games/gamepage/blowup.png');
        game.load.image('ltBtn', 'static/jsy/assets/games/gamepage/lbt.png');
        game.load.image('rtBtn', 'static/jsy/assets/games/gamepage/rbt.png');
        game.load.image('5score', 'static/jsy/assets/games/gamepage/5.png');
        game.load.image('36score', 'static/jsy/assets/games/gamepage/36.png');
        game.load.image('ltdog', 'static/jsy/assets/games/gamepage/ltdog.png');
        game.load.image('gamebg', 'static/jsy/assets/games/gamepage/gameBg.png');
        game.load.image('heart', 'static/jsy/assets/games/gamepage/heart.png');
        game.load.image('life', 'static/jsy/assets/games/gamepage/life.png');
        game.load.image('lifebg', 'static/jsy/assets/games/gamepage/lifebg.png');
        game.load.image('redheart', 'static/jsy/assets/games/gamepage/redheart.png');
        game.load.image('xq', 'static/jsy/assets/games/gamepage/xq.png');
        game.load.image('xqbg', 'static/jsy/assets/games/gamepage/xqbg.png');
        game.load.bitmapFont('gameFont', 'static/jsy/assets/games/font/font.png', 'static/jsy/assets/games/font/font.fnt');
        for (var v = 1; v <= 5; v++) {
            game.load.image('rbot' + v, "static/jsy/assets/games/gamepage/rbot" + v + '.png');
        }
        for (var t = 1; t <= 4; t++) {
            game.load.image('boom' + t, "static/jsy/assets/games/gamepage/boom" + t + '.png');
        }
        for (var i = 1; i <= 4; i++) {
            game.load.image('bot' + i, "static/jsy/assets/games/gamepage/bot" + i + '.png');
        }

        // hitprize
        game.load.image('getbt', 'static/jsy/assets/games/hitprize/getbt.png');
        game.load.image('hitbg', 'static/jsy/assets/games/hitprize/hitbg.png');
        game.load.image('sharebt', 'static/jsy/assets/games/hitprize/sharebt.png');

        // infouload
        game.load.image('name', 'static/jsy/assets/games/infoupload/name.png');
        game.load.image('phone', 'static/jsy/assets/games/infoupload/phone.png');
        game.load.image('uploadPage', 'static/jsy/assets/games/infoupload/uploadPage.png');
        game.load.image('uploadbt', 'static/jsy/assets/games/infoupload/uploadBt.png');
        game.load.nineSlice('nameBlock', 'static/jsy/assets/games/infoupload/nameBlock.png', 15);


        // lottery
        game.load.image('360', 'static/jsy/assets/games/lottery/360.png');
        game.load.image('nohit', 'static/jsy/assets/games/lottery/nothit.png');
        game.load.image('hitBg', 'static/jsy/assets/games/lottery/hitbg.png');
        game.load.image('ltbt', 'static/jsy/assets/games/lottery/ltbt.png');

        // sharefloat
        game.load.image('sharefloat', 'static/jsy/assets/games/sharefloat/sharefloat.png');

        // untilxq
        game.load.image('restartBt', 'static/jsy/assets/games/untilxq/restartbt.png');
        game.load.image('xquntil', 'static/jsy/assets/games/untilxq/xquntil.png');


        // getMsg
        // 34 17 16 2 1 45 50 51 18
    };
    this.create = function () {
        game.state.start('menu');
    }
};

