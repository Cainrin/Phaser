function Obstacles(poll, pic, timesec, y, callback, context) {
    this.init = function () {
        this.obstacles = game.add.group();
        this.obstacles.enableBody = true;
        this.obstacles.createMultiple(poll, pic);
        this.obstacles.setAll('outOfBoundsKill', true);
        this.obstacles.setAll('checkWorldBounds', true);

        // 障碍物产生随机范围
        this.maxWidth = game.width - game.cache.getImage(pic).width;
        // 产生障碍物定时器
        game.time.events.loop(Phaser.Timer.SECOND * timesec, this.generateObs, this);
    };

    this.generateObs = function() {
        var e = this.obstacles.getFirstExists(false);
        if (e) {
            e.reset(game.rnd.integerInRange(0, this.maxWidth), -game.cache.getImage(pic).height);
            e.body.velocity.y = y;
        }
    };

    this.getRice = function (myboat, obstacles) {
        console.log("is hit");
        obstacles.kill();
        context.score += 10;
        callback.call(context);
    };

    this.hitObs = function (myboat, obstacles) {
      console.log('ochi!');
      obstacles.kill();
      context.hp -= 10;
      if (context.hp < 0) {
          context.gameOver();
      }else{
          callback.call(context);
      }
    }
}