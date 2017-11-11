
export class ListRoute {
    public  Id : number;
    public  StartDate : Date;
    public  Passengers : number;
    public  MaxPassengers : number;
    public  RouteType : string;
    public  IsPrivate : boolean;   
    public  Owner : Object;
    public  StartPoint : Object;
    public  EndPoint : Object;

    constructor(Id : number, StartDate : Date, Passengers : number, MaxPassengers : number, RouteType : string, IsPrivate : boolean, Owner : Object, StartPoint : Object, EndPoint : Object,) {
        this.Id = Id;
        this.StartDate = StartDate;
        this.Passengers = Passengers;
        this.MaxPassengers = MaxPassengers;
        this.RouteType = RouteType;
        this.IsPrivate = IsPrivate;
        this.Owner = Owner;
        this.StartPoint = StartPoint;
        this.EndPoint = EndPoint;
    }


}
