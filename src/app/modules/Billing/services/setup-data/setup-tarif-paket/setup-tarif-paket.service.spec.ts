import { TestBed } from '@angular/core/testing';

import { SetupTarifPaketService } from './setup-tarif-paket.service';

describe('SetupTarifPaketService', () => {
  let service: SetupTarifPaketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTarifPaketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
