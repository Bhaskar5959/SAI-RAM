import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'some';

  /*users= [
    {
    name:"bruce",
    age:40,
    email:'test@test.com'
   },
   {
    name:"peter",
    age:46,
    email:'test@test.com'
   },
   {
    name:"hulk",
    age:42,
    email:'test@test.com'
   }
  ];*/
name="";
parentFunction (data)
{
  console.warn(data)
  this.name=data.name;
}
}
  