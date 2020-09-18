"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var notifA = new rxjs_1.Notification('N', 'A');
var notifB = new rxjs_1.Notification('N', 'B');
var notifE = new rxjs_1.Notification('E', undefined, new TypeError('x.toUpperCase is not a function'));
var materialized = rxjs_1.of(notifA, notifB, notifE);
var upperCase = materialized.pipe(operators_1.dematerialize());
upperCase.subscribe(function (x) { return console.log(x); }, function (e) { return console.error(e); });
// Results in:
// A
// B
// TypeError: x.toUpperCase is not a function
