import { TestBed } from '@angular/core/testing';

import { PenerimaanService } from './penerimaan.service';

describe('PenerimaanService', () => {
  let service: PenerimaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenerimaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
