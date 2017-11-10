import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { RouteListComponent } from './route-list/route-list.component';

import {RouteService} from './route/route.service';
import { RouteAddFormComponent } from './route/route-add-form/route-add-form.component'

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent,
    RouteListComponent,
    RouteAddFormComponent
  ],
  imports: [
	BrowserModule,
	FormsModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
