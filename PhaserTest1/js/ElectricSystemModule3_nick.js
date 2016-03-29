/// <reference path="C:\Users\gtekelis\Documents\Visual Studio 2015\Projects\WebApiTests\PhaserTest1\libs/phaser.js" />
/// <reference path="EventHandlersModule.js" />

var electricSystem = (function () {
    console.log('electric system module initialized');
    
    //private variables
    var esModel;
    var graphics;
    var scale = 3;
    var diameterScale = scale;

    //private functions
    function setBackgroundColor(color) {
        game.stage.backgroundColor = color;        
    }

    function addGenerator(x, y, type) {
        game.add.sprite(parseFloat(x), parseFloat(y), type);
    }

    function initGraphicsObject() {
        graphics = game.add.graphics();
        graphics.lineStyle(4, 0x2c2c2c, 1);
        return graphics;
    }

    function drawLine(beginX, beginY, endX, endY) {        
        graphics.moveTo(parseFloat(beginX * scale), parseFloat(beginY * scale)); //arxiko shmeio
        graphics.lineTo(parseFloat(endX * scale), parseFloat(endY * scale)); //teliko shmeio        
    }

    function drawBus(beginX, beginY, endX, endY) {
        graphics.moveTo(beginX, beginY); //arxiko shmeio
        graphics.lineTo(endX, endy); //teliko shmeio
    }

    function drawBusUsingRectangle(x, y, width, height) {        
        graphics.drawRect(parseFloat(x * scale), parseFloat(y * scale), parseFloat(width), parseFloat(height * scale)); //fits nick better
    }

    
    function drawTransformer(x, y, diameter) {
        var givenXposition = parseFloat(x * scale);
        var givenYposition = parseFloat(y * scale);
        var transformer1Diameter = parseFloat(diameter * diameterScale);
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
                addGenerator(esModel[i].x, esModel[i].y, esModel[i].type);
            }
        }

        //draw lines
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'line' || esModel[i].type === 'vline') {
                drawLine(esModel[i].beginX, esModel[i].beginY, esModel[i].endX, esModel[i].endY, esModel[i].name);
            }
        }

        //draw buses
        for (var i = 0; i < esModel.length; i++) {
            if (esModel[i].type === 'bus') {
                //drawLine(esModel[i].beginX, esModel[i].beginY, esModel[i].endX, esModel[i].endy, esModel[i].name);
                drawBusUsingRectangle(esModel[i].x, esModel[i].y, esModel[i].width, esModel[i].height, esModel[i].name);
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
        
        //place graph in the middle
        graphics.y -= game.height / 2;
    }

    //public members
    return {
        SetStageBackColor: setBackgroundColor,
        CreateEsGraph: createEsGraph,
    }
})();