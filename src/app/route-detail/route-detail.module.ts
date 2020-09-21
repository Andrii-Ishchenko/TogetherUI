import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteDetailComponent } from './route-detail/route-detail.component';
import { RouteDetailRoutingModule } from './route-detail-routing.module';



@NgModule({
  declarations: [RouteDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [
    RouteDetailComponent,
    RouteDetailRoutingModule
  ]
})
export class RouteDetailModule { }
