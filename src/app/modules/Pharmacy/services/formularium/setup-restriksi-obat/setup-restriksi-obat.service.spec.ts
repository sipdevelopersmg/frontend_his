import { TestBed } from '@angular/core/testing';

import { SetupRestriksiObatService } from './setup-restriksi-obat.service';

describe('SetupRestriksiObatService', () => {
  let service: SetupRestriksiObatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRestriksiObatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
