import { Component } from '@angular/core';
import {DramaService} from './drama.service'
interface dataType{
  name:string,
  id:number,
  indian:boolean,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'power';
  data=[];
  constructor(private drama: DramaService){
    this.drama.getData().subscribe(data =>{
      console.warn(data);
      this.data=data
    })
  }
someData(){
  const info:dataType={
    name:"ram",
    id:10,
    indian:true,

  }
  return info;
}

}
