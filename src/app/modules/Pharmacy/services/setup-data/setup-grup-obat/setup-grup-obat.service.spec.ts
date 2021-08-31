import { TestBed } from '@angular/core/testing';

import { SetupGrupObatService } from './setup-grup-obat.service';

describe('SetupGrupObatService', () => {
  let service: SetupGrupObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupGrupObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
