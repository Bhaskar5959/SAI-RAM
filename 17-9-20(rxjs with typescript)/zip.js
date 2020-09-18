"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var age$ = rxjs_1.of(27, 25, 29);
var name$ = rxjs_1.of('Foo', 'Bar', 'Beer');
var isDev$ = rxjs_1.of(true, true, false);
rxjs_1.zip(age$, name$, isDev$).pipe(operators_1.map(function (_a) {
    var age = _a[0], name = _a[1], isDev = _a[2];
    return ({ age: age, name: name, isDev: isDev });
}))
    .subscribe(function (x) { return console.log(x); });
