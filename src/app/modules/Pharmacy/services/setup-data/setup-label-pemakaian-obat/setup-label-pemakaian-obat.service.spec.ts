import { TestBed } from '@angular/core/testing';

import { SetupLabelPemakaianObatService } from './setup-label-pemakaian-obat.service';

describe('SetupLabelPemakaianObatService', () => {
  let service: SetupLabelPemakaianObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupLabelPemakaianObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
