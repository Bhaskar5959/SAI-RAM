export { }
let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'sai ram';

let sentence: string = `my name is ${name}
 iam a beginner in typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myname: string = undefined;

// two syntax to declare an array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
//tupples
let person1: [string, number] = ['chris', 22];

//enum
enum Color { red = 5, green, blue };

let c: Color = Color.green;
console.log(c);

//any type
let randomvalue: any = 10;
randomvalue = true;
randomvalue = 'sai ram';

//unknown type
let myvariable: unknown = 10;

function hasname(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj
}

if (hasname(myvariable)) {
    console.log(myvariable.name);
}

(myvariable as string).toUpperCase();

//type inference
let a;
a = 10;
a = true;

let b = 20;


//union

let multitype: number | boolean;
multitype = 20;
multitype = true;

//functions
function add(num1: number, num2: number = 10): Number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);

//interfaces
//possible to specify an object as a type in typescript
interface person {
    firstname: string;
    lastname: string;
    [key : string]:any
}
function fullname(person: person) {
    console.log(`${person.firstname} ${person.lastname}`);
}

let p = {
    firstname: 'bruce',
    lastname: 'wayne'
};

fullname(p);

//class
class employee {
    employeename: string;

    constructor(name: string) {
        this.employeename = name;
    }

    greet() {
        console.log(`good morning ${this.employeename}`);
    }
}

let emp1 = new employee('sai ram');
console.log(emp1.employeename);
emp1.greet();

//inheretance
class manager extends employee {
    constructor(managername: string) {
        super(managername);
    }
    delegatework() {
        console.log(`manager delegating tasks`);
    }
}
let m1 = new manager('bruce');
m1.delegatework();
m1.greet();
console.log(m1.employeename);

//acces modifiers
// by default each class member is public
// if we declare class member as private it cannot be accessed outside the class

class employee {
    private employeename: string;
 
     constructor(name: string) {
         this.employeename = name;
     }
 
     greet() {
         console.log(`good morning ${this.employeename}`);
     }
 }
 
 let emp1 = new employee('sai ram');
 console.log(emp1.employeename);
 emp1.greet();
 
 //inheretance
 class manager extends employee {
     constructor(managername: string) {
         super(managername);
     }
     delegatework() {
         console.log(`manager delegating tasks`);
     }
 }
 let m1 = new manager('bruce');
 m1.delegatework();
 m1.greet();
 console.log(m1.employeename);
 
 //proctected 
 class employee {
     employeename: string;
 
     constructor(name: string) {
         this.employeename = name;
     }
 
     greet() {
         console.log(`good morning ${this.employeename}`);
     }
 }
 
 let emp1 = new employee('sai ram');
 console.log(emp1.employeename);
 emp1.greet();
 
 //inheretance
 class manager extends employee {
     constructor(managername: string) {
         super(managername);
     }
     delegatework() {
         console.log(`manager delegating tasks ${this.employeename}`);
     }
 }
 let m1 = new manager('bruce');
 m1.delegatework();
 m1.greet();
 console.log(m1.employeename);