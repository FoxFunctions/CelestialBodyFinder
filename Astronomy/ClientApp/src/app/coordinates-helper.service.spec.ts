import { TestBed } from '@angular/core/testing';

import { CoordinatesHelperService } from './coordinates-helper.service';

describe('CoordinatesHelperService', () => {
  let service: CoordinatesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinatesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
