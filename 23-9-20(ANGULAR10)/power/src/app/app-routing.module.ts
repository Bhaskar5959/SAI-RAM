import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {ListComponent} from './king/list/list.component'
import {LoginComponent} from './king/login/login.component'
const routes: Routes = [
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
