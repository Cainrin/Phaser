States.over.prototype.uploadInfo = function () {

    this.uploadGroup = this.uploadGroup || game.add.group();
    this.uploadBg = new Puzzle.Image(this, game.world.centerX, game.world.centerY, 'uploadPage', null, null);
    this.infoCloseBtn = new Puzzle.Button(this, game.width * 0.79, game.height * 0.18, 'close', function () {
        this.uploadGroup.killAll();
    }, this);

    var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则

    this.nameObj = this.generateInput(game.width / 2, game.height * 0.3, 'nameBlock', game.width / 2 - 120, game.height * 0.3 - 30, '姓名');
    this.phoneObj = this.generateInput(game.width / 2, game.height * 0.45, 'nameBlock', game.width / 2 - 120, game.height * 0.45 - 30, '手机号');
    this.uploadBtn = new Puzzle.Button(this, game.width / 2, game.height * 0.6, 'uploadbt', function () {
        if (reg.test(this.phoneObj.input.value) && this.nameObj.input.value) {
            Net.post("/updateinfo", {name: this.nameObj.input.value, phone: this.phoneObj.input.value}, function (res) {
                alert("提交成功");
                game.state.start('menu')
            }, function (res) {
                console.log(res);
                alert("network error");
            })
        }else{
            this.phoneObj.input.resetText();
            alert("请正确输入个人信息");
        }
    }, this);

    this.uploadGroup.addMultiple([this.uploadBg, this.infoCloseBtn, this.nameObj.nine, this.nameObj.input, this.phoneObj.nine, this.phoneObj.input, this.uploadBtn]);
};

States.over.prototype.generateInput = function (x, y, bgkey, fx, fy, fntKey) {
    var obj = game.add.nineSlice(x, y, bgkey, null, 474, 82);
    obj.anchor.set(0.5);
    var inputObj = game.add.inputField(fx, fy, {
        font: '35px Arial',
        fill: '#212121',
        fillAlpha: 0,
        fontWeight: 'normal',
        width: 230,
        max: 11,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: fntKey,
        textAlign: 'center',
        zoom: false
    });
    inputObj.blockInput = false;
    return {nine: obj, input: inputObj}
};