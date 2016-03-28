/// <reference path="C:\Users\gtekelis\Documents\Visual Studio 2015\Projects\WebApiTests\PhaserTest1\libs/phaser.js" />
/// <reference path="EventHandlersModule.js" />

var electricSystem = (function () {
    console.log('electric system module initialized');

    //private variables
    var esModel;
    var graphics;

    //private functions
    function setBackgroundColor(color) {
        game.stage.backgroundColor = color;
    }

    function addGenerator(x, y, name) {
        game.add.sprite(x, y, name);
    }

    function initGraphicsObject() {
        graphics = game.add.graphics();
        graphics.lineStyle(4, 0x2c2c2c, 1);
        return graphics;
    }

    function drawLine(x, y, x2, y2) {
        graphics.moveTo(x, y); //arxiko shmeio
        graphics.lineTo(x2, y2); //teliko shmeio        
    }

    function drawBus(x, y, x2, y2) {
        graphics.moveTo(x, y); //arxiko shmeio
        graphics.lineTo(x2, y2); //teliko shmeio
    }
    
    function drawTransformer(x, y, diameter) {
        var givenXposition = x;
        var givenYposition = y;
        var transformer1Diameter = diameter;
        var transformer1Xposition = givenXposition + (transformer1Diameter / 2);
        var transformer1Yposition = givenYposition + (transformer1Diameter / 2);

        //first circle
        graphics.lineStyle(2, 0x2c2c2c, 1);
        graphics.beginFill(0xffffff, 0);
        graphics.drawCircle(transformer1Xposition, transformer1Yposition, transformer1Diameter);
        graphics.endFill();
        graphics.inputEnabled = true;

        //second circle      
        graphics.beginFill(0xffffff, 0);
        transformer1Xposition = givenXposition + (transformer1Diameter - 5) + (transformer1Diameter / 2);
        transformer1Yposition = givenYposition + (transformer1Diameter / 2);
        graphics.drawCircle(transformer1Xposition, transformer1Yposition, transformer1Diameter);
        graphics.endFill();

        //attach event handlers to transformer           
        graphics.events.onInputDown.add(eventHandlers.alertMessageOnClick, this);
    }
    
    function createEsGraph(model) {

        //desirialize graph model
        esModel = JSON.parse(model);

        initGraphicsObject();

        //add generators
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'generator') {
                addGenerator(esModel[i].x, esModel[i].y, esModel[i].name);
            }
        }

        //draw lines
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'line') {
                drawLine(esModel[i].x, esModel[i].y, esModel[i].x2, esModel[i].y2, esModel[i].name);
            }
        }

        //draw buses
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'bus') {
                drawLine(esModel[i].x, esModel[i].y, esModel[i].x2, esModel[i].y2, esModel[i].name);
            }
        }

        //draw transformer
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'transformer') {
                drawTransformer(esModel[i].x, esModel[i].y, esModel[i].diameter, esModel[i].name);
            }
        }

        if (esModel.length > 0) {
            for (var i = 0; i < esModel.length; i++) {
                console.log(esModel[i].name);
            }
        }
    }

    //public members
    return {
        SetStageBackColor: setBackgroundColor,
        CreateEsGraph: createEsGraph,
    }
})();