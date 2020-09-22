import { Component, Input, OnInit } from '@angular/core';
import {RouteListItem} from '../../models/route-list-item';
import { Router } from '@angular/router';
import { RouteListRoutePoint } from 'src/app/models/route-list-route-point';

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.css']
})
export class RouteListItemComponent implements OnInit {

  @Input() routeListItem: RouteListItem;
  from: RouteListRoutePoint;
  to: RouteListRoutePoint;

  freePlacesIndexes: Array<number>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.generateFreePlacesArray();
    if (this.routeListItem.routePoints.length > 1) {
      this.from = this.routeListItem.routePoints.reduce((prev, curr) => (prev.orderNumber <= curr.orderNumber) ? prev : curr);
      this.to = this.routeListItem.routePoints.reduce((prev, curr) => (prev.orderNumber > curr.orderNumber) ? prev : curr);
    }
  }

  generateFreePlacesArray() {
    const occupiedCount = this.routeListItem.passengers.length;
    const freeCount = this.routeListItem.maxPassengers - occupiedCount;

    this.freePlacesIndexes = new Array<number>(freeCount);

    for (let i = 0; i < freeCount; i++) {
      this.freePlacesIndexes[i] = occupiedCount + i;
    }
  }
}
