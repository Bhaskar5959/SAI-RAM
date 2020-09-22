import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter()
  //@Input() hero;
  constructor() { }

  ngOnInit(): void {
    
    
    //console.log(this.hero)
    
  }
  sendData()
  {
    let sony = {name:"sairam",age:21}
  this.parentFunction.emit(sony);
  }
  
}
