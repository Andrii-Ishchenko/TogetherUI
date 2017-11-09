import { Component, OnInit, Input } from '@angular/core';
import {Route} from '../route/route'

@Component({
  selector: 'route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

  @Input() route : Route;

  constructor() { }

  ngOnInit() {
  }

}
