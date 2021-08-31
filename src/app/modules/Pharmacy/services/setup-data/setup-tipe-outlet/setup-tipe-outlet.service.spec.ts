import { TestBed } from '@angular/core/testing';

import { SetupTipeOutletService } from './setup-tipe-outlet.service';

describe('SetupTipeOutletService', () => {
  let service: SetupTipeOutletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupTipeOutletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
