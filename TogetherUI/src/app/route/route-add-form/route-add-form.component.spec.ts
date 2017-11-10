import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAddFormComponent } from './route-add-form.component';

describe('RouteAddFormComponent', () => {
  let component: RouteAddFormComponent;
  let fixture: ComponentFixture<RouteAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
