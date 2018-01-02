class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.stage.backgroundColor="#4AAAB";
    }

    create() {
        
    }

}

window.onload = () => {

    var game = new SimpleGame();

};