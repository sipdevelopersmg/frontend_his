import { TestBed } from '@angular/core/testing';

import { SetupGrupTarifService } from './setup-grup-tarif.service';

describe('SetupGrupTarifService', () => {
  let service: SetupGrupTarifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGrupTarifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
