"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var clicks = rxjs_1.fromEvent(document, 'click');
var result = clicks.pipe(operators_1.concatMap(function (ev) { return rxjs_1.interval(1000).pipe(operators_1.take(4)); }));
result.subscribe(function (x) { return console.log(x); });
