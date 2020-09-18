"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
rxjs_1.of({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' }).pipe(operators_1.distinct(function (p) { return p.name; }))
    .subscribe(function (x) { return console.log(x); });
