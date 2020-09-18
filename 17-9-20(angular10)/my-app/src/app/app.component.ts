import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  myname = "bruce"
  getName(name){
    alert(name);
  }
  obj={
    name:'kelly',
    age:20
  }
  arr=['bruce','tony','arya'];
  siteUrl=window.location.href;

  myevent(evt?){
    console.warn(evt)
  }
}
