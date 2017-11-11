import { Injectable } from '@angular/core';

import {ListRoute} from '../dao/list-route';
import {Route} from '../route/route';

@Injectable()
export class RouteMapperService {

  constructor() { }

  routeDAOtoRoute(dao : ListRoute) : Route{
    return new Route(dao.Id, dao.Passengers, dao.MaxPassengers, dao.RouteType, dao.StartDate, dao.IsPrivate, dao.Owner);
  }

  DAOListToRouteList(daos: ListRoute[]) : Route[] {
    return daos.map(d => { return this.routeDAOtoRoute(d); });
  }
}
