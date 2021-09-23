import { TestBed } from '@angular/core/testing';

import { SetupGrupPenunjangService } from './setup-grup-penunjang.service';

describe('SetupGrupPenunjangService', () => {
  let service: SetupGrupPenunjangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGrupPenunjangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
