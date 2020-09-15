import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-detial',
  templateUrl: './route-detial.component.html',
  styleUrls: ['./route-detial.component.css']
})
export class RouteDetialComponent implements OnInit {

  public routeId: string;
  private routeIdSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {
    this.routeIdSubscription = activatedRoute.params.subscribe(params => this.routeId = params.id);
  }

  ngOnInit() {
  }

}
