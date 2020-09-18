"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source = rxjs_1.interval(1000);
var example = source.pipe(operators_1.mergeMap(function (val) {
    if (val > 5) {
        return rxjs_1.throwError('Error!');
    }
    return rxjs_1.of(val);
}), 
//retry 2 times on error
operators_1.retry(2));
var subscribe = example.subscribe({
    next: function (val) { return console.log(val); },
    error: function (val) { return console.log(val + ": Retried 2 times then quit!"); }
});
