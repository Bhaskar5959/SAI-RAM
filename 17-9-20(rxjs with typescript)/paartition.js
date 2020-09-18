"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observableValues = rxjs_1.of(1, 2, 3, 4, 5, 6);
var _a = rxjs_1.partition(observableValues, function (value, index) { return value % 2 === 0; }), evens$ = _a[0], odds$ = _a[1];
odds$.subscribe(function (x) { return console.log('odds', x); });
evens$.subscribe(function (x) { return console.log('evens', x); });
