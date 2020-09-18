"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var obs1 = rxjs_1.interval(1000).pipe(operators_1.mapTo('fast one'));
var obs2 = rxjs_1.interval(3000).pipe(operators_1.mapTo('medium one'));
var obs3 = rxjs_1.interval(5000).pipe(operators_1.mapTo('slow one'));
rxjs_1.race(obs3, obs1, obs2)
    .subscribe(function (winner) { return console.log(winner); });
