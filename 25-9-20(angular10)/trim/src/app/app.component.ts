
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'trim';
  locations: string[] = ['Downtown', 's.county', 'Lakeside'];

  constructor() {

  }

  ngOnInit(){

  }
}
