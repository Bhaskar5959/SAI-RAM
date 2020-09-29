import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import{
  PageService,
  SortService,
  FilterService
} from "@syncfusion/ej2-angular-treegrid"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreeGridModule
  ],
  providers: [PageService,
    SortService,
    FilterService],
  bootstrap: [AppComponent]
})
export class AppModule { }