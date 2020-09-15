export class RouteListRoutePoint {
    constructor(public id: number,
                public routeId: number,
                public creatorId: number,
                public name: string,
                public orderNumber: number,
                public longitude: number,
                public latitude: number,
                public createdDate: Date,
                public creatorFirstName: string,
                public creatorLastName: string) {
    }
}
