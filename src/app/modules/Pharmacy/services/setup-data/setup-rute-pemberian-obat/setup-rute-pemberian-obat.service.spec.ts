import { TestBed } from '@angular/core/testing';

import { SetupRutePemberianObatService } from './setup-rute-pemberian-obat.service';

describe('SetupRutePemberianObatService', () => {
  let service: SetupRutePemberianObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRutePemberianObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
