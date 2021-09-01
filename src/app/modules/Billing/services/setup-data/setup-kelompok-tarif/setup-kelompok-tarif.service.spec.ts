import { TestBed } from '@angular/core/testing';

import { SetupKelompokTarifService } from './setup-kelompok-tarif.service';

describe('SetupKelompokTarifService', () => {
  let service: SetupKelompokTarifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupKelompokTarifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
