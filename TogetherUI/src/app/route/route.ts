export class Route {

    public id : number;
    public passengers : number;
    public maxPassengers: number;
    public routeType : string;
    public startDate : Date;
    public isPrivate : boolean; 
    public owner: object;

    constructor(id : number, passengers: number, maxPassengers: number, routeType: string, startDate: Date, isPrivate: boolean, owner: object) {
        this.id = id;
        this.passengers = passengers;
        this.maxPassengers = maxPassengers;
        this.routeType = routeType;
        this.startDate = startDate;
        this.isPrivate = isPrivate;
        this.owner = owner;
    }
}
