import { Formatter } from './format.js'; 

interface Robot {
  name: String;
  currentComputation: Number;
}

class Robot {
  constructor(public name: String) {
    this.name = name;
    this.currentComputation = 0;
  }

  compute(operation, value) {
    let computedValue = 0;
    switch(operation) {
      case '+':
        computedValue = value + 10;
        break;
      case '-':
        computedValue = value - 10;
        break;
      case '/':
        computedValue = value / 10;
        break;
      case '*':
        computedValue = value * 10;
        break;
      default:
        console.log("Does not compute!!")
    } 
    this.currentComputation = computedValue;
  }


  displayCurrentComputation() {
    console.log(Formatter.surroundWithStars(this.currentComputation));
  }
}

const hal = new Robot('Hal');
hal.compute('+', 32);
hal.displayCurrentComputation();