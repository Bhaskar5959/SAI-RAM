"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var log = function (val) { return document.write(val); };
var toUpperCase = function () { return function (source) {
    return new rxjs_1.Observable(function (observer) {
        return source.subscribe({
            next: function (x) {
                observer.next(x.toUpperCase());
            },
            error: function (err) { observer.error(err); },
            complete: function () { observer.complete(); }
        });
    });
}; };
rxjs_1.of('hello').pipe(toUpperCase()).subscribe(log);
