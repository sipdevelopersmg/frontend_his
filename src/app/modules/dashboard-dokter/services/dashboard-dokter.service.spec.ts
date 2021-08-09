import { TestBed } from '@angular/core/testing';

import { DashboardDokterService } from './dashboard-dokter.service';

describe('DashboardDokterService', () => {
  let service: DashboardDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
