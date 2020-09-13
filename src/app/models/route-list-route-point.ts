export class RouteListRoutePoint {
    constructor(public Id: number,
                public RouteId: number,
                public CreatorId: number,
                public Name: string,
                public OrderNumber: number,
                public Longitude: number,
                public Latitude: number,
                public CreatedDate: Date,
                public CreatorFirstName: string,
                public CreatorLastName: string) {
    }
}
