import { TestBed } from '@angular/core/testing';

import { PenerimaanTanpaEdService } from './penerimaan-tanpa-ed.service';

describe('PenerimaanTanpaEdService', () => {
  let service: PenerimaanTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenerimaanTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
