import { TestBed, inject } from '@angular/core/testing';

import { RouteMapperService } from './route-mapper.service';

describe('RouteMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteMapperService]
    });
  });

  it('should be created', inject([RouteMapperService], (service: RouteMapperService) => {
    expect(service).toBeTruthy();
  }));
});
