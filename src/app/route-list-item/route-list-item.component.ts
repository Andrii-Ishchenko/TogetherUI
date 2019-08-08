import { Component, Input, OnInit } from '@angular/core';
import {RouteListItem} from '../models/route-list-item';

@Component({
  selector: 'app-route-list-item',
  templateUrl: './route-list-item.component.html',
  styleUrls: ['./route-list-item.component.css']
})
export class RouteListItemComponent implements OnInit {

  @Input() routeListItem: RouteListItem;

  constructor() { }

  ngOnInit() {
  }

}
