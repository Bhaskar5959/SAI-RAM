"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source = rxjs_1.interval(500);
var subject = new rxjs_1.Subject();
var multicasted = source.pipe(operators_1.multicast(subject));
var subscription1, subscription2, subscriptionConnect;
subscription1 = multicasted.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
// We should call `connect()` here, because the first
// subscriber to `multicasted` is interested in consuming values
subscriptionConnect = multicasted.connect();
setTimeout(function () {
    subscription2 = multicasted.subscribe({
        next: function (v) { return console.log("observerB: " + v); }
    });
}, 600);
setTimeout(function () {
    subscription1.unsubscribe();
}, 1200);
// We should unsubscribe the shared Observable execution here,
// because `multicasted` would have no more subscribers after this
setTimeout(function () {
    subscription2.unsubscribe();
    subscriptionConnect.unsubscribe(); // for the shared Observable execution
}, 2000);
