export class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create, update: this.update });
    }

    game: Phaser.Game;
    platform: any;
    ground: any;
    tile: any;
    player: any;
    cursors: any;

    preload() {
        this.game.load.image('background', 'assets/background.jpg');
        this.game.load.image('platform', 'assets/platform.png');
        this.game.load.spritesheet('player', 'assets/dude.png', 32, 48);
    }

    create() {
        this.game.add.sprite(0, 0, 'background');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.platform = this.game.add.group();

        this.platform.enableBody = true;

        this.ground = this.platform.create(0, this.game.world.height - 100, 'platform');

        this.ground.scale.setTo(2, 3);

        this.ground.body.immovable = true;

        this.tile = this.platform.create(500, 350, 'platform');
        this.tile.body.immovable = true;

        this.tile = this.platform.create(-125, 300, 'platform');
        this.tile.body.immovable = true;

        this.player = this.game.add.sprite(32, this.game.world.height - 200, 'player');

        this.game.physics.arcade.enable(this.player);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 300;
        this.player.body.collideWorldBounds = true;

        this.player.animations.add('left', [0, 1, 2, 3], 15, true);
        this.player.animations.add('right', [5, 6, 7, 8], 15, true);

        this.cursors = this.game.input.keyboard.createCursorKeys();

    }

    update() {
        this.game.physics.arcade.collide(this.player, this.platform);

        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -200;
            this.player.animations.play('left');
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 200;
            this.player.animations.play('right');
        } else {
            this.player.animations.stop();
            this.player.frame = 4;
        }

        if(this.cursors.up.isDown && this.player.body.touching.down){
            this.player.body.velocity.y = -320;
        }

    }
}
