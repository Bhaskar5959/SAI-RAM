"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var seconds = rxjs_1.interval(1000);
seconds.pipe(operators_1.timeout(new Date("December 17, 2020 03:24:00")))
    .subscribe(function (value) { return console.log(value); }, // Will emit values as regular `interval` would
// until December 17, 2020 at 03:24:00.
function (// Will emit values as regular `interval` would
err) { return console.log(err); } // On December 17, 2020 at 03:24:00 it will emit an error,
// since Observable did not complete by then.
);
