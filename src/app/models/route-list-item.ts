import { RouteListRoutePoint } from './route-list-route-point';
import { RouteListPassenger } from './route-list-passenger';

export class RouteListItem {

    constructor(public Id: number,
                public creatorId: string,
                public creatorFirstName: string,
                public creatorLastName: string,
                public startDate: Date,
                public createDate: Date,
                public name: string,
                public maxPassengers: number,
                public passengersCount: number,
                public routeType: string,
                public isPrivate: boolean,
                public passengers: Array<RouteListPassenger>,
                public routePoints: Array<RouteListRoutePoint>) {
    }


}
