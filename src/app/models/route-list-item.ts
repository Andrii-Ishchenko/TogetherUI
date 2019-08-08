import { RouteListRoutePoint } from './route-list-route-point';
import {RouteListPassenger} from './route-list-passenger';

export class RouteListItem {

    constructor(public Id: number,
                public StartDate: Date,
                public CreateDate: Date,
                public MaxPassengers: number,
                public PassengersCount: number,
                public RouteType: string,
                public Passengers: Array<RouteListPassenger>,
                public RoutePoints: Array<RouteListRoutePoint>) {
    }


}
