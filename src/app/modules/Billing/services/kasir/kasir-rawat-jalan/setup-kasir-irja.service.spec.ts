import { TestBed } from '@angular/core/testing';

import { SetupKasirIrjaService } from './setup-kasir-irja.service';

describe('SetupKasirIrjaService', () => {
  let service: SetupKasirIrjaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKasirIrjaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
