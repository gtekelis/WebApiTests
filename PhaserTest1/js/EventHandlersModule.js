/// <reference path="C:\Users\gtekelis\Documents\Visual Studio 2015\Projects\WebApiTests\PhaserTest1\libs/phaser.js" />
/// <reference path="ElectricSystemModule.js" />
/// <reference path="C:\Users\gtekelis\Documents\Visual Studio 2015\Projects\WebApiTests\PhaserTest1\libs/jquery-1.12.2.min.js" />


var eventHandlers = (function () {
    console.log('init event handlers');
        
    //private members
    function actionOnClick() {
        //electricSystem.SetStageBackColor('#FF0000');
        //$('body').addClass('animated hinge');
        $("#dialog").dialog();
    }
    
    //public members
    return {
        alertMessageOnClick: actionOnClick
    }
})();