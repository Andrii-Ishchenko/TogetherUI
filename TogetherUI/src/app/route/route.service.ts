import { Injectable } from '@angular/core';
import {Route} from '../route/route'

@Injectable()
export class RouteService {

  constructor() { }

  getRoutes() : Route[] {
    return [
      new Route(1, "route1"),
      new Route(2, "route2"),
      new Route(3, "route3"),
      new Route(4, "route4"),
      new Route(5, "route5"),
      new Route(6, "route6"), 
    ];
  }
}
