function Obstacles(poll, pic, timesec, y, callback, context, z, x ,c) {
    this.init = function () {
        this.obstacles = game.add.group();
        this.obstacles.enableBody = true;
        this.obstacles.createMultiple(poll, pic);
        this.obstacles.setAll('outOfBoundsKill', true);
        this.obstacles.setAll('checkWorldBounds', true);

        // 障碍物产生随机范围
        this.maxWidth = game.width - game.cache.getImage(pic).width;
        this.randPoisArr = [60, 320, this.maxWidth];
        // 产生障碍物定时器
        game.time.events.loop(Phaser.Timer.SECOND * timesec, this.generateObs, this);
    };

    this.generateObs = function() {
        var e = this.obstacles.getFirstExists(false);
        if (e) {
            e.reset(this.randPoisArr[game.rnd.integerInRange(0, 2)], -game.cache.getImage(pic).height / 2);
            e.anchor.setTo(0.5);
            e.rotation = game.rnd.integerInRange(-60, 30);
            e.body.velocity.y = y;
        }

    };

    this.getBot = function (myboat, obstacles) {
        obstacles.kill();
        var scoreAniman = new Puzzle.Image(context, myboat.x + 50, myboat.y - 100, '1score', null, null);
        game.world.add(scoreAniman);
        gameScore += 1;
        this.nowTween = game.add.tween(scoreAniman).to({y: scoreAniman.y - 50}, 1000, Phaser.easing, true, 0, 0, false);
        this.nowTween.onComplete.add(function () {
           scoreAniman.destroy();
        }, this);
        callback.call(context, this.scoreAniman);
    };

    this.hitboom = function (myboat, obstacles) {
        var boomAniman = new Puzzle.Image(context, obstacles.x, obstacles.y, 'blowup', null, null);
        obstacles.kill();
        boomAniman.scale.set(0.3);
        game.world.add(boomAniman);
        this.boomTween = game.add.tween(boomAniman.scale).to({x: 0.7, y: 0.7}, 250, Phaser.Easing.Bounce.Out, true, 0, 0, false);
        this.boomTween.onComplete.add(function () {
            boomAniman.destroy();
        }, this);

      context.hp -= 1;
      if (context.hp < 0) {
          context.gameOver();
      }else{
          callback.call(context);
      }
    }
}
