import { Component } from '@angular/core';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  name="";
  constructor(private user: UserService)
  {
    console.warn(this.user.getData())
    let data = this.user.getData()
    this.name=data.name
  }
 
}

