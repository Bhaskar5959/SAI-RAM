import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
{
  path:'king',loadChildren:()=> import('./king/king.module')
  .then(mod=>mod.KingModule)
},
{
  path:'deo',loadChildren:()=> import('./deo/deo.module')
  .then(mod=>mod.DeoModule)
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
