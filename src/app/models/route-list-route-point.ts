export class RouteListRoutePoint {

    public Id: number;

    public RouteId: number;

    public CreatorId: number;

    public Name: string;

    public OrderNumber: number;

    public Longitude: number;

    public Latitude: number;

    public CreatedDate: Date;

    public CreatorFirstName: string;

    public CreatorLastName: string;

    constructor(Id: number,
                RouteId: number,
                CreatorId: number,
                Name: string,
                OrderNumber: number,
                Longitude: number,
                Latitude: number,
                CreatedDate: Date,
                CreatorFirstName: string,
                CreatorLastName: string) {
       this.Id = Id;
       this.RouteId = RouteId;
       this.CreatorId = CreatorId;
       this.Name = Name;
       this.OrderNumber = OrderNumber;
       this.Longitude = Longitude;
       this.Latitude = Latitude;
       this.CreatedDate = CreatedDate;
       this.CreatorFirstName = CreatorFirstName;
       this.CreatorLastName = CreatorLastName;
    }
}
