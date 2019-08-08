import { Component, Input, OnInit } from '@angular/core';
import {RouteListItem} from '../models/route-list-item';

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.css']
})
export class RouteListItemComponent implements OnInit {

  @Input() routeListItem: RouteListItem;

  freePlacesIndexes: Array<number>;

  constructor() { }

  ngOnInit() {
    this.generateFreePlacesArray();
  }

  generateFreePlacesArray() {
    const count = this.routeListItem.MaxPassengers - this.routeListItem.Passengers.length;
    const occupiedCount = this.routeListItem.Passengers.length;
    this.freePlacesIndexes = new Array<number>(count);

    for (let i = 0; i < count; i++) {
      this.freePlacesIndexes[i] = occupiedCount + i;
    }

  }

}
