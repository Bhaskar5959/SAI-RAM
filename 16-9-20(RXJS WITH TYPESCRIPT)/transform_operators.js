"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var clicks = rxjs_1.fromEvent(document, 'click');
var intervalEvents = rxjs_1.interval(1000);
var buffered = intervalEvents.pipe(operators_1.buffer(clicks));
buffered.subscribe(function (x) { return console.log(x); });
var buff = clicks.pipe(operators_1.bufferCount(2, 1));
buff.subscribe(function (y) { return console.log(y); });
var buf = clicks.pipe(operators_1.bufferTime(2000, 5000));
buf.subscribe(function (z) { return console.log(z); });
var bufred = clicks.pipe(operators_1.bufferWhen(function () {
    return rxjs_1.interval(1000 + Math.random() * 4000);
}));
bufred.subscribe(function (a) { return console.log(a); });
var openings = rxjs_1.interval(1000);
var buffd = clicks.pipe(operators_1.bufferToggle(openings, function (i) {
    return i % 2 ? rxjs_1.interval(500) : EMPTY;
}));
buffd.subscribe(function (s) { return console.log(s); });
