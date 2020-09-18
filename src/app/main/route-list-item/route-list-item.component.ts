import { Component, Input, OnInit } from '@angular/core';
import {RouteListItem} from '../../models/route-list-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.css']
})
export class RouteListItemComponent implements OnInit {

  @Input() routeListItem: RouteListItem;

  freePlacesIndexes: Array<number>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.generateFreePlacesArray();
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
