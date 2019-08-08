import { RouteListRoutePoint } from './route-list-route-point';
import {RouteListPassenger} from './route-list-passenger';

export class RouteListItem {
    public  Id: number;
    public  StartDate: Date;
    public  CreateDate: Date;
    public  MaxPassengers: number;
    public  PassengersCount: number;
    public  RouteType: string;
    public  Passengers: Array<RouteListPassenger>;
    public  RoutePoints: Array<RouteListRoutePoint>;

    constructor(Id: number,
                StartDate: Date,
                CreateDate: Date,
                MaxPassengers: number,
                PassengersCount: number,
                RouteType: string,
                Passengers: Array<RouteListPassenger>,
                RoutePoints: Array<RouteListRoutePoint>) {
        this.Id = Id;
        this.StartDate = StartDate;
        this.CreateDate = CreateDate;
        this.PassengersCount = PassengersCount;
        this.MaxPassengers = MaxPassengers;
        this.RouteType = RouteType;
        this.Passengers = Passengers;
        this.RoutePoints = RoutePoints;
    }


}
