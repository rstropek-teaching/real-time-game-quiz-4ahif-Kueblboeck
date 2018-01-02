"use strict";
var SimpleGame = /** @class */ (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }
    SimpleGame.prototype.preload = function () {
        this.game.stage.backgroundColor = "#4AAAB";
    };
    SimpleGame.prototype.create = function () {
    };
    return SimpleGame;
}());
window.onload = function () {
    var game = new SimpleGame();
};
