"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var subject = new rxjs_1.ReplaySubject(100, 500);
subject.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
var i = 1;
setInterval(function () { return subject.next(i++); }, 200);
setTimeout(function () {
    subject.subscribe({
        next: function (v) { return console.log("observerB: " + v); }
    });
}, 1000);
