import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { RouteListComponent } from './route-list/route-list.component';

import { RouteService } from './route/route.service'
import { RouteMapperService} from './mappers/route-mapper.service';
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
    HttpClientModule,
    FormsModule
  ],
  providers: [RouteService, RouteMapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
