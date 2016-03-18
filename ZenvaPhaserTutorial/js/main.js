///creates an instance of our game
/// <reference path="library/phaser.js" />
var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '');

game.state.add('Boot', ZenvaRunner.Boot);
game.stage.start('Boot');