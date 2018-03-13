var States = States || {};

States.boot = function() {
    this.preload = function() {
        Phaser.Device.whenReady(function () {
            game.plugins.add(PhaserInput.Plugin);
            game.plugins.add(PhaserNineSlice.Plugin);
        });
        if(typeof(GAME) !== "undefined") {
            this.load.baseURL = GAME + "/";
        }

        if(!game.device.desktop){
            this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            this.scale.forcePortrait = true;
            this.scale.refresh();
        }

        game.load.image('loading', 'static/jsy/assets/preloader.gif');
    };
    this.create = function() {
        game.state.start('preload');
    };
};