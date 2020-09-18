import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {KingModule} from './king/king.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,KingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
