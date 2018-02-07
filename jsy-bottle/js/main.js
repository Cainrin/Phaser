
var game = new Phaser.Game(640, 1040, Phaser.CANVAS, 'game');

game.state.add('boot', States.boot);
game.state.add('preload', States.preload);
game.state.add('menu', States.menu);
game.state.add('play', States.play);
game.state.add('over', States.over);
game.state.add('upload', States.upload);

game.state.start('boot');