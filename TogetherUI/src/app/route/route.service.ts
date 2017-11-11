import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import {Route} from '../route/route'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ListRoute} from '../dao/list-route';
import { RouteMapperService} from '../mappers/route-mapper.service';



@Injectable()
export class RouteService {

  url : string = "http://togetherapp.azurewebsites.net/api/routes";

  constructor(private http: HttpClient, private routeMapper : RouteMapperService) { }

  getRoutes() : Route[] {
    return [
      new Route(1, 2, 4, "car", new Date(), false, {}),
      new Route(2, 2, 4, "car", new Date(), false, {}),
      new Route(3, 2, 4, "car", new Date(), false, {}),
      new Route(4, 2, 4, "car", new Date(), false, {}),
      new Route(5, 2, 4, "car", new Date(), false, {}),
      new Route(6, 2, 4, "car", new Date(), false, {})
    ];
  }

  getRoutesFromServer() : Observable<Route[]>{
     return this.http.get<ListRoute[]>(this.url).map(list => {return this.routeMapper.DAOListToRouteList(list);})
  }
}
