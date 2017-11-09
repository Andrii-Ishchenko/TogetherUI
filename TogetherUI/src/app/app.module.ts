import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { RouteListComponent } from './route-list/route-list.component';

import {RouteService} from './route/route.service'

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    RouteListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
