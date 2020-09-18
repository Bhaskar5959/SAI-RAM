"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source = rxjs_1.interval(1000);
var example = source.pipe(operators_1.take(10), operators_1.toArray());
var subscribe = example.subscribe(function (val) { return console.log(val); });
// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
