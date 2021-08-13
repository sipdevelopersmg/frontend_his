import { TestBed } from '@angular/core/testing';

import { SetupKotaService } from './setup-kota.service';

describe('SetupKotaService', () => {
  let service: SetupKotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
