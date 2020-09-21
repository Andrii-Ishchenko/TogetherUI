import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Route } from 'src/app/models/route';
import { RouteService } from 'src/app/shared/services/route.service';

@Component({
  selector: 'app-route-detail',
  templateUrl: './route-detail.component.html',
  styleUrls: ['./route-detail.component.css']
})
export class RouteDetailComponent implements OnInit, OnDestroy {

  public routeId: number;
  public route: Route;
  public routeLoaded: boolean;
  private routeIdSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private routeService: RouteService) {
    this.routeIdSubscription = activatedRoute.params.subscribe(params => {
      this.routeId = params.id as number;
      this.routeService.getRoute(this.routeId).subscribe((r: Route) => {
        this.route = r;
        this.routeLoaded = true;
      });
    });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routeIdSubscription.unsubscribe();
  }

}
