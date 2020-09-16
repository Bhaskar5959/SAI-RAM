"use strict";
exports.__esModule = true;
var format_js_1 = require("./format.js");
var Robot = /** @class */ (function () {
    function Robot(name) {
        this.name = name;
        this.name = name;
        this.currentComputation = 0;
    }
    
    Robot.prototype.compute = function (operation, value) {
        var computedValue = 0;
        switch (operation) {
            case '+':
                computedValue = value + 10;
                break;
            case '-':
                computedValue = value - 10;
                break;
            case '/':
                computedValue = value / 10;
                break;
            case '*':
                computedValue = value * 10;
                break;
            default:
                console.log("Does not compute!!");
        }
        this.currentComputation = computedValue;
    };
    Robot.prototype.displayCurrentComputation = function () {
        console.log(format_js_1.Formatter.surroundWithStars(this.currentComputation));
    };
    return Robot;
}());
var hal = new Robot('Hal');
hal.compute('+', 32);
hal.displayCurrentComputation();
