/// <reference path="phaser.js" />

var game = new Phaser.Game(640, 360, Phaser.AUTO, '');

//declare a state
//for this game we have only one
var GameState = {
    preload: function () {
        this.game.load.image('background', 'assets/images/background.png');
        this.game.load.image('chicken', 'assets/images/chicken.png');
        this.game.load.image('horse', 'assets/images/horse.png');
        this.game.load.image('pig', 'assets/images/pig.png');
        this.game.load.image('sheep', 'assets/images/sheep.png');
    },

    create: function () {
        this.gameBackground = this.game.add.sprite(0, 0, 'background');

        this.chicken = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'chicken');
        this.chicken.anchor.set(0.5, 0.5);

        this.chicken.scale.setTo(-1,1);
    },

    update: function () {
        
    }
};

//add state to the game
game.state.add('GameState', GameState);
//launch state
game.state.start('GameState');