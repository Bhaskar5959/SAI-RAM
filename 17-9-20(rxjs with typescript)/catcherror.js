"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of(1, 2, 3, 4, 5).pipe(operators_1.map(function (n) {
    if (n === 4) {
        throw 'four!';
    }
    return n;
}), operators_1.catchError(function (err) {
    throw 'error in source. Details: ' + err;
}))
    .subscribe(function (x) { return console.log(x); }, function (err) { return console.log(err); });
