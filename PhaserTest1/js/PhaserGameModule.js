/// <reference path="C:\Users\gtekelis\Documents\Visual Studio 2015\Projects\WebApiTests\PhaserTest1\libs/phaser.js" />

var phaserGame = (function () {
    console.log('PhaserGame module initialized');

    function createGame() {
        return new Phaser.Game(800, 600, Phaser.AUTO, 'graphContainer', { preload: preload, create: create, update: update });
    }

    return {
        CreateGame: createGame
    }
})();