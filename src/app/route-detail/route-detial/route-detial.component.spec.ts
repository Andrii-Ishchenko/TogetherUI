import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDetialComponent } from './route-detial.component';

describe('RouteDetialComponent', () => {
  let component: RouteDetialComponent;
  let fixture: ComponentFixture<RouteDetialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDetialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
