
var Puzzle = Puzzle || {};

Puzzle.Destory = function () {
    if(arguments.length === 0) return;
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].destroy();
    }
};

Puzzle.AddWorld = function () {
    if(arguments.length === 0) return;
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].anchor.set(0.5);
        game.world.add(arguments[i]);
    }
};

Puzzle.Image = function (gameState, x, y, key, frame, anchor) {
    Phaser.Image.call(this, gameState.game, x, y, key, frame);
    this.anchor.setTo(anchor === null ? 0.5 : 0);
};

Puzzle.Image.prototype = Object.create(Phaser.Image.prototype);
Puzzle.Image.prototype.constructor = Puzzle.Image;

Puzzle.Image.prototype.addMultipleChild = function () {
    if (arguments.length === 0) return;
    for (var i = 0; i < arguments.length; i++) {
        this.addChild(arguments[i]);
    }
};



Puzzle.Button = function (gameState, x, y, key, callback, context) {
    Phaser.Button.call(this, gameState.game, x, y, key, this.clicked, this, 0, 0, 0, 0);
    this.callback = callback;
    this.context = context;
    this.anchor.set(0.5);
    this.onInputDown.add(function () {
        this.tapAnimation();
    }, this);

};
Puzzle.Button.prototype = Object.create(Phaser.Button.prototype);
Puzzle.Button.prototype.constructor = Puzzle.Button;


Puzzle.Button.prototype.clicked = function () {
    this.callback.call(this.context);
};


Puzzle.Button.prototype.tapAnimation = function() {

    var tween = game.add.tween(this.scale).to({x: 0.9, y: 0.9}, 50, "Linear", true, 0, 0, true);
    tween.onComplete.add(function() {
        var a = this.snmation ? -1 : 1;
        this.scale.setTo(a);
    }, this);
};
