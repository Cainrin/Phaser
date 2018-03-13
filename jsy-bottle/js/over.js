var States = States || {};



States.over = function () {

  this.create = function () {
      document.cookie = myCookies;
      this.bgKey = gameScore > TargetScore ? "hitBg" : "xquntil";
      this.overBg = game.add.tileSprite(0, 0, game.width, game.height, this.bgKey);
      var text = game.add.bitmapText(game.world.centerX + 20, game.world.centerY * 0.93, 'gameFont', gameScore.toString(), 150);
      text.anchor.set(0.5);
      gameScore = 0;
      if (this.bgKey === "xquntil") {
          this.overBtn = new Puzzle.Button(this, game.world.centerX, game.height * 0.85, 'restartBt', function () {
              game.state.start('play');
          }, this)
      } else {
          this.overBtn = new Puzzle.Button(this, game.world.centerX, game.height * 0.85, 'ltbt', function () {
              if (!CanTouch) return;
              text.destroy();
              this.hitprice(this);
          }, this);

          this.shareBtn = new Puzzle.Button(this, game.world.centerX, game.height * 0.95, 'sharebt', function () {
              if (!CanTouch) return;
              CanTouch = false;
              OverFloat = game.add.image(game.world.centerX, game.world.centerY, "sharefloat");
              OverFloat.anchor.set(0.5);
              game.input.onDown.addOnce(function () {
                  if (OverFloat) {
                      OverFloat.destroy();
                      CanTouch = true;
                  }
              }, this)
          }, this);
          game.world.add(this.shareBtn);
      }
      game.world.add(this.overBtn)
  }
};


States.over.prototype.hitprice  = function (context) {
    context.shareBtn.destroy();
    var postObj = this.verifyTools();
    Net.post("/lotteryprize", {nonceStr: postObj.nonceStr, verifyStr: postObj.verifyStr, timeSwap: postObj.timeSwap},
        function (res) {
            var hitRes = JSON.parse(res);
            if (hitRes.result === 0 && hitRes.prize !== "none") {
                context.overBg.loadTexture("hitbg");
                context.overBtn.loadTexture('getbt');
                context.overBtn.callback = function () {
                    this.uploadInfo();
                }
            } else {
                context.overBg.loadTexture("nohit");
                context.overBtn.loadTexture("restartBt");
                context.overBtn.callback = function () {
                    game.state.start('play');
                }
            }
    }, function (res) {
        console.log(res);
        alert("network error!")
    })
};

States.over.prototype.verifyTools = function () {
    var randomstr = randomString(8);
    var timestamp = (new Date()).valueOf();
    return {nonceStr: randomstr, verifyStr: hex_md5(randomstr + timestamp + openid), timeSwap: timestamp};
};

