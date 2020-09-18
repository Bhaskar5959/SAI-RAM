"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var intervals = rxjs_1.interval(10); // Intervals are scheduled
// with async scheduler by default...
intervals.pipe(operators_1.observeOn(animationFrameScheduler)) // scheduler to ensure smooth animation.
    .subscribe(function (val) {
    someDiv.style.height = val + 'px';
});
