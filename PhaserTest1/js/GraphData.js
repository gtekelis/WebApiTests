var graphData = (function () {

    //private members
    var graph =
        [
                {
                    type: "generator",
                    x: "25",
                    y: "165",
                    name: "Gen1",
                    rotation: "0"
                },
                {
                    type: "bus",
                    x: "80",
                    y: "165",
                    name: "BusName",
                    rotation: "0",
                    width: "1",
                    height: "35.0000000000001"
                },
                {
                    type: "transformer",
                    x: "117.5",
                    y: "191.230769230769",
                    name: "Trans1",
                    diameter: "8.76923076923076",

                },
                {
                    type: "line",
                    beginX: "35",
                    beginY: "170",
                    endX: "80.5",
                    endY: "179",
                    name: "L1",
                    width: "45.5",
                    height: "8.99999999999998"
                },
                {
                    type: "line",
                    beginX: "80.5",
                    beginY: "193",
                    endX: "117.5",
                    endY: "195.615384615385",
                    name: "L1",
                    width: "37",
                    height: "5"
                },
                {
                    type: "transformer",
                    x: "117.5",
                    y: "165",
                    name: "Trans1",
                    diameter: "8.76923076923076",

                },
                {
                    type: "line",
                    beginX: "80.5",
                    beginY: "175.5",
                    endX: "117.5",
                    endY: "169.384615384615",
                    name: "L1",
                    width: "37",
                    height: "-6.11538461538464"
                },
                {
                    type: "line",
                    beginX: "132.5",
                    beginY: "195.615384615385",
                    endX: "186.5",
                    endY: "195.615384615385",
                    name: "L1",
                    width: "54",
                    height: "5"
                },
                {
                    type: "line",
                    beginX: "132.5",
                    beginY: "169.384615384615",
                    endX: "162",
                    endY: "165",
                    name: "L1",
                    width: "29.5",
                    height: "-5"
                }
        ];

    function getGraphData() {
        return graph;
    };

    //public members
    return {
        GetGraphData: getGraphData
    };

})();