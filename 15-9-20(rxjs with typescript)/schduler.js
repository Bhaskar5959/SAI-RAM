"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var observable = new rxjs_1.Observable(function (proxyObserver) {
    proxyObserver.next(1);
    proxyObserver.next(2);
    proxyObserver.next(3);
    proxyObserver.complete();
}).pipe(operators_1.observeOn(rxjs_1.asyncScheduler));
var finalObserver = {
    next: function (x) {
        console.log('got value ' + x);
    },
    error: function (err) {
        console.error('something wrong occurred: ' + err);
    },
    complete: function () {
        console.log('done');
    }
};
console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');
