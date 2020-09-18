"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of('you', 'talking', 'to', 'me').pipe(operators_1.ignoreElements())
    .subscribe(function (word) { return console.log(word); }, function (err) { return console.log('error:', err); }, function () { return console.log('the end'); });
