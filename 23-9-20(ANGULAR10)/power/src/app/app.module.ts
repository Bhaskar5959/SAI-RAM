import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KingModule} from './king/king.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http'
import {DeoModule} from './deo/deo.module'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KingModule,
    DeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
