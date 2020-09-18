"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var log = function (val) { return document.write(val); };
// Long Version
var pow = function (n) { return function (source) {
    return new rxjs_1.Observable(function (observer) {
        return source.subscribe({
            next: function (x) {
                observer.next(Math.pow(x, n));
            },
            error: function (err) { observer.error(err); },
            complete: function () { observer.complete(); }
        });
    });
}; };
// Concise version
var operators_1 = require("rxjs/operators");
var pow2 = function (n) { return operators_1.map(function (x) {
    return Math.pow(x, n);
}); };
rxjs_1.of(2).pipe(pow(10)).subscribe(log);
