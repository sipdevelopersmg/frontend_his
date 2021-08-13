import { TestBed } from '@angular/core/testing';

import { SetupSmfDokterService } from './setup-smf-dokter.service';

describe('SetupSmfDokterService', () => {
  let service: SetupSmfDokterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupSmfDokterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
