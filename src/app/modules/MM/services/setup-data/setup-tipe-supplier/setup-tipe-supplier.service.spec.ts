import { TestBed } from '@angular/core/testing';

import { SetupTipeSupplierService } from './setup-tipe-supplier.service';

describe('SetupTipeSupplierService', () => {
  let service: SetupTipeSupplierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTipeSupplierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
