import { TestBed } from '@angular/core/testing';

import { SetupStatusBedService } from './setup-status-bed.service';

describe('SetupStatusBedService', () => {
  let service: SetupStatusBedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupStatusBedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
