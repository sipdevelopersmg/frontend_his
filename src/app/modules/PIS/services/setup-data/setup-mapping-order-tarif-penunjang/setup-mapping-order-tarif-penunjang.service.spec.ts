import { TestBed } from '@angular/core/testing';

import { SetupMappingOrderTarifPenunjangService } from './setup-mapping-order-tarif-penunjang.service';

describe('SetupMappingOrderTarifPenunjangService', () => {
  let service: SetupMappingOrderTarifPenunjangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupMappingOrderTarifPenunjangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
