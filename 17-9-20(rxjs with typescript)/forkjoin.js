"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var observable = rxjs_1.forkJoin([
    rxjs_1.of(1, 2, 3, 4),
    Promise.resolve(8),
    timer(4000),
]);
observable.subscribe({
    next: function (value) { return console.log(value); },
    complete: function () { return console.log('This is how it ends!'); }
});
