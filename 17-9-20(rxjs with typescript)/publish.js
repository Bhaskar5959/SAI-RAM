"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.zip(rxjs_1.interval(2000), rxjs_1.of(1, 2, 3, 4, 5, 6, 7, 8, 9)).pipe(operators_1.map(function (values) { return values[1]; }));
source$
    .pipe(operators_1.publish(function (multicasted$) {
    return rxjs_1.merge(multicasted$.pipe(operators_1.tap(function (x) { return console.log('Stream 1:', x); })), multicasted$.pipe(operators_1.tap(function (x) { return console.log('Stream 2:', x); })), multicasted$.pipe(operators_1.tap(function (x) { return console.log('Stream 3:', x); })));
}))
    .subscribe();
