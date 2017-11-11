import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Route} from '../route/route'
import {RouteService} from '../route/route.service';
import { of } from 'rxjs/observable/of';


@Component({
  selector: 'route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RouteListComponent implements OnInit {

  routes: Route[]

  constructor( private routeService: RouteService) { }

  ngOnInit() {
   this.routeService.getRoutesFromServer().subscribe(list=>{this.routes = list});
  }

}
