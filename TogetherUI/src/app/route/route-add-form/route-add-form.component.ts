import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'route-add-form',
  templateUrl: './route-add-form.component.html',
  styleUrls: ['./route-add-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RouteAddFormComponent implements OnInit {

	routeName : string;

	constructor() { }

	ngOnInit() {
	}

}
