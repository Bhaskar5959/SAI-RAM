"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var connectable = rxjs_1.interval(1000)
    .pipe(operators_1.tap(function (x) { return console.log("side effect", x); }), operators_1.take(3), operators_1.publishLast());
connectable.subscribe(function (x) { return console.log("Sub. A", x); }, function (err) { return console.log("Sub. A Error", err); }, function () { return console.log("Sub. A Complete"); });
connectable.subscribe(function (x) { return console.log("Sub. B", x); }, function (err) { return console.log("Sub. B Error", err); }, function () { return console.log("Sub. B Complete"); });
connectable.connect();
