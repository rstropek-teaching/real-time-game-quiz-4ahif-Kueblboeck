"use strict";
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }
    SimpleGame.prototype.preload = function () {
        this.game.load.image('background', 'assets/background.jpg');
        this.game.load.image('platform', 'assets/platform.png');
    };
    SimpleGame.prototype.create = function () {
        this.game.add.sprite(0, 0, 'background');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.platform = this.game.add.group();
        this.platform.enableBody = true;
        this.ground = this.platform.create(0, this.game.world.height - 100, 'platform');
        this.ground.scale.setTo(2, 2);
        this.ground.body.immovable = true;
        this.tile = this.platform.create(500, 350, 'platform');
        this.tile.body.immovable = true;
        this.tile = this.platform.create(-125, 300, 'platform');
        this.tile.body.immovable = true;
    };
    SimpleGame.prototype.update = function () {
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
