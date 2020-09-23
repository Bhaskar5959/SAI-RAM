import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdvenComponent} from './adven/adven.component'
import {VentureComponent} from './venture/venture.component'

const routes: Routes = [
  {
    path:'adven',
    component:AdvenComponent
  },
  {
    path:'venture',
    component:VentureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeoRoutingModule { }
