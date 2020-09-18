import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'today';
  show = "green";

  colour ="yellow";
  err=true;
  some =['sai','ram','kalyan'];

  data =[
    {
      name:'brue',
      age:'25'
    },
    {
      name:'vamsi',
      age:'27'
    },
    {
      name:'rahul',
      age:'22'
    },
    {
      name:'ashu',
      age:'26'
    }
  ];
color="pink";
  getValues(val){
    console.warn(val)
  }
  updateColor()
  {
    this.color="blue",
    this.err=!this.err
  };

  name="sai ram";
  today=Date.now();

  str ="hello everyone";
  money = 100;
}

