
States.menu.prototype.startMenu = function () {

    var startBg = new Puzzle.Image(this, game.world.centerX, game.world.centerY, 'img_15', null, 0);
    var bgPeo = new Puzzle.Image(this, -(startBg.width / 2 - startBg.width / 6),
        -(startBg.height / 2 - startBg.height / 10 + 20), 'img_7', null, null);
    var backBtn = new Puzzle.Button(this, startBg.width / 3,
        -(startBg.height / 2 - startBg.height / 10 + 10), 'btn_15', function () {
            startBg.destroy();
        }, this);

    var text = "请选择龙舟";
    var text_style = { font: "60px Arial", fill: "#7d413e" };
    var t = new Phaser.Text(game, 0, -(startBg.height / 2 - startBg.height / 10), text, text_style);
    t.anchor.set(0.5);

    var board_1 = new Puzzle.Image(this, 0, -(startBg.height / 2 - startBg.height / 4.5), 'img_13', null, null);
    var board_2 = new Puzzle.Image(this, 0, -(startBg.height / 2 - startBg.height / 2.5 + 35), 'img_14', null, null);
    var board_3 = new Puzzle.Image(this, 0, startBg.height / 14 - 65, 'img_14', null, null);
    var board_4 = new Puzzle.Image(this, 0, startBg.height / 4 - 100, 'img_14', null, null);

    this.changeBoard = function (board) {
        board_1.loadTexture("img_14");
        board_2.loadTexture("img_14");
        board_3.loadTexture("img_14");
        board_4.loadTexture("img_14");
        board.loadTexture("img_13");
    };

    this.NewTextObject = function(text) {
        var style = { font: "30px Arial", fill: "#030403" };
        obj = new Phaser.Text(game, 50, 0, text, style);
        obj.anchor.set(0.5);
        return obj;
    };

    this.generateBoat = function(key, text, board_obj, choice) {
        var swin_obj = new Puzzle.Button(this, -(board_1.width / 2 - 100), 0, key, function () {
            boatChoice = choice;
            this.changeBoard(board_obj);
        }, this);

        var textObj = this.NewTextObject(text);
        board_obj.addMultipleChild(swin_obj, textObj)
    };

    this.generateBoat('img_43', "泳圈， 坚固度：10", board_1, 'img_39');
    this.generateBoat('img_8', "木桶， 坚固度：40", board_2, 'boat_0');
    this.generateBoat('img_10', "龙舟， 坚固度：70", board_3, 'img_42');
    this.generateBoat('img_11', "快艇， 坚固度：100", board_4, 'img_41');

    var text_under = "邀请好友解锁更强的龙舟";
    var style_under = { font: "30px Arial", fill: "#764236" };
    var text_obj = new Phaser.Text(game, 0, startBg.height / 4, text_under, style_under);
    text_obj.anchor.set(0.5);

    var inviteBtn = new Puzzle.Button(this, -(260 / 2), startBg.height / 3.2, 'btn_1', function () {
        console.log("click_invite");
    }, this);

    var rankBtn = new Puzzle.Button(this, -(260 / 2), startBg.height / 2.5, 'btn_2', function () {
        console.log("click_invite");
    }, this);

    var helpBtn = new Puzzle.Button(this, 260 / 2, startBg.height  / 3.2, 'btn_11', function () {
        console.log("click_invite");
    }, this);

    var startGameBtn = new Puzzle.Button(this, 260 / 2, startBg.height / 2.5, 'btn_10', function () {
            game.state.start('play');
    }, this);

    startBg.addMultipleChild(bgPeo, backBtn, t, board_1, board_2, board_3, board_4,
        text_obj, inviteBtn, rankBtn, helpBtn, startGameBtn);
    Puzzle.AddWorld(startBg);
};
