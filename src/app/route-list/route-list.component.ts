import { Component, OnInit, Injectable } from '@angular/core';
import { RouteListItem } from '../models/route-list-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
@Injectable()
export class RouteListComponent implements OnInit {

  getRoutesPath = 'http://localhost:59430/api/routes/get';
  routeListItems: RouteListItem[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<RouteListItem[]>(this.getRoutesPath).subscribe((list: RouteListItem[]) => this.routeListItems = list);
  }
}
