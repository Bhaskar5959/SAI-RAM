"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var a = rxjs_1.of(1, 2, 3, 4).pipe(operators_1.subscribeOn(rxjs_1.asyncScheduler));
var b = rxjs_1.of(5, 6, 7, 8, 9);
rxjs_1.merge(a, b).subscribe(console.log);
