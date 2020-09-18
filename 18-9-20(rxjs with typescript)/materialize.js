"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var letters = rxjs_1.of('a', 'b', 13, 'd');
var upperCase = letters.pipe(operators_1.map(function (x) { return x.toUpperCase(); }));
var materialized = upperCase.pipe(operators_1.materialize());
materialized.subscribe(function (x) { return console.log(x); });
// Results in the following:
// - Notification {kind: "N", value: "A", error: undefined, hasValue: true}
// - Notification {kind: "N", value: "B", error: undefined, hasValue: true}
// - Notification {kind: "E", value: undefined, error: TypeError:
//   x.toUpperCase is not a function at MapSubscriber.letters.map.x
//   [as project] (http://1…, hasValue: false}
