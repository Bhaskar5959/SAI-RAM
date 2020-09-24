import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeoRoutingModule } from './deo-routing.module';
import { AdvenComponent } from './adven/adven.component';
import { VentureComponent } from './venture/venture.component';


@NgModule({
  declarations: [AdvenComponent, VentureComponent],
  imports: [
    CommonModule,
    DeoRoutingModule
  ],
  exports:[
    AdvenComponent,
    VentureComponent
  ]

})
export class DeoModule { }
