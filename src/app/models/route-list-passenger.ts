export class RouteListPassenger {

    public PassengerId: number;
    public UserId: number;
    public FirstName: string;
    public LastName: string;

    constructor(PassengerId: number,
                UserId: number,
                FirstName: string,
                LastName: string) {
        this.PassengerId = PassengerId;
        this.UserId = UserId;
        this.FirstName = FirstName;
        this.LastName = LastName;
    }
}
