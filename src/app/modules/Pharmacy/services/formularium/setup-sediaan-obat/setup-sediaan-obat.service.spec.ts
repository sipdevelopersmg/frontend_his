import { TestBed } from '@angular/core/testing';

import { SetupSediaanObatService } from './setup-sediaan-obat.service';

describe('SetupSediaanObatService', () => {
  let service: SetupSediaanObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupSediaanObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
