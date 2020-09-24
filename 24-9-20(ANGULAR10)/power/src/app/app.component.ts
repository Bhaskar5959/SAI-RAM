import { Component , ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'power';
  constructor(
    private vcr : ViewContainerRef,
    private cfr :ComponentFactoryResolver 
  ){}
  async loadadmin(){
    this.vcr.clear();
    const {AdminlistComponent} = await import('./adminlist/adminlist.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(AdminlistComponent))
  }
 async loaduser(){
    this.vcr.clear();
    const {} = await import('./userlist/userlist.component')
    this.vcr.createComponent(this.cfr.resolveComponentFactory(UserlistComponent))
  }

}
