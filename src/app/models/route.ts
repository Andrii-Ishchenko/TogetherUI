import { Passenger } from './passenger';
import { RoutePoint } from './route-point';

export class Route {
    constructor(
        public id: number,
        public creatorId: string,
        public creatorFirstName: string,
        public creatorLastName: string,
        public name: string,
        public startDate: Date,
        public createDate: Date,
        public maxPassengers: number,
        public routeType: string,
        public isPrivate: boolean,
        public RoutePoints: Array<RoutePoint>,
        public passengers: Array<Passenger>) {
    }
}
