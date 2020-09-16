"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var isBeginner = true;
var total = 0;
var name = 'sai ram';
var sentence = "my name is " + name + "\n iam a beginner in typescript";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myname = undefined;
// two syntax to declare an array
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
//tupples
var person1 = ['chris', 22];
//enum
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["green"] = 6] = "green";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
;
var c = Color.green;
console.log(c);
//any type
var randomvalue = 10;
randomvalue = true;
randomvalue = 'sai ram';
//unknown type
var myvariable = 10;
function hasname(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasname(myvariable)) {
    console.log(myvariable.name);
}
myvariable.toUpperCase();
//type inference
var a;
a = 10;
a = true;
var b = 20;
//union
var multitype;
multitype = 20;
multitype = true;
//functions
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
function fullname(person) {
    console.log(person.firstname + " " + person.lastname);
}
var p = {
    firstname: 'bruce',
    lastname: 'wayne'
};
fullname(p);
//class
var employee = /** @class */ (function () {
    function employee(name) {
        this.employeename = name;
    }
    employee.prototype.greet = function () {
        console.log("good morning " + this.employeename);
    };
    return employee;
}());
var emp1 = new employee('sai ram');
console.log(emp1.employeename);
emp1.greet();
//inheretance
var manager = /** @class */ (function (_super) {
    __extends(manager, _super);
    function manager(managername) {
        return _super.call(this, managername) || this;
    }
    manager.prototype.delegatework = function () {
        console.log("manager delegating tasks");
    };
    return manager;
}(employee));
var m1 = new manager('bruce');
m1.delegatework();
m1.greet();
console.log(m1.employeename);
//acces modifiers
// by default each class member is public
// if we declare class member as private it cannot be accessed outside the class
