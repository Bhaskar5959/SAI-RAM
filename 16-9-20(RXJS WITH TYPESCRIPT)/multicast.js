"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source = rxjs_1.from([1, 2, 3]);
var subject = new rxjs_1.Subject();
var multicasted = source.pipe(operators_1.multicast(subject));
// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
multicasted.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
