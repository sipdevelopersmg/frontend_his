import { TestBed } from '@angular/core/testing';

import { SetupJenisPenerimaanService } from './setup-jenis-penerimaan.service';

describe('SetupJenisPenerimaanService', () => {
  let service: SetupJenisPenerimaanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupJenisPenerimaanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
