import { TestBed } from '@angular/core/testing';

import { SetupStatusDokterService } from './setup-status-dokter.service';

describe('SetupStatusDokterService', () => {
  let service: SetupStatusDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupStatusDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
