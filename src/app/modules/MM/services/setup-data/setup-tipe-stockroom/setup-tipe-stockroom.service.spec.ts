import { TestBed } from '@angular/core/testing';

import { SetupTipeStockroomService } from './setup-tipe-stockroom.service';

describe('SetupTipeStockroomService', () => {
  let service: SetupTipeStockroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTipeStockroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
