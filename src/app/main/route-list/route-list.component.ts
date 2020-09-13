import { Component, OnInit, Injectable } from '@angular/core';
import { RouteListItem } from '../../models/route-list-item';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-route-list',
  templateUrl: './route-list.component.html',
  styleUrls: ['./route-list.component.css']
})
@Injectable()
export class RouteListComponent implements OnInit {

  getRoutesPath = 'https://localhost:5001/api/routes/';
  routeListItems: RouteListItem[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<RouteListItem[]>(this.getRoutesPath)
      .subscribe(
        (list: RouteListItem[]) => this.routeListItems = list
      );
  }
}
