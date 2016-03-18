/// <reference path="../../library/phaser.js" />
var ZenvaRunner = function () { };

ZenvaRunner.Boot = function () { };

ZenvaRunner.Boot.prototype = {
    preload: function () {
        this.load.image('logo', 'assets/images/logo.png');
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
    },

    create: function(){
        this.game.stage.backGroundColor = '#fff';
    }
};