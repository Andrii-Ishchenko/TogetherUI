import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteListComponent } from './route-list/route-list.component';
import { RouteListItemComponent } from './route-list-item/route-list-item.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [RouteListComponent, RouteListItemComponent, MainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    RouteListComponent
  ]
})
export class MainModule { }
