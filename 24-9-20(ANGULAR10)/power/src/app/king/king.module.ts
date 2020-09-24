import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KingRoutingModule } from './king-routing.module';
import { AdvenComponent } from './adven/adven.component';
import { VentureComponent } from './venture/venture.component';


@NgModule({
  declarations: [ AdvenComponent, VentureComponent],
  imports: [
    CommonModule,
    KingRoutingModule
  ],
  exports:[
    AdvenComponent,
    VentureComponent
  ]

})
export class KingModule { }
