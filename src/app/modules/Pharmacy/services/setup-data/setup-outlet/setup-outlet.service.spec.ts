import { TestBed } from '@angular/core/testing';

import { SetupOutletService } from './setup-outlet.service';

describe('SetupOutletService', () => {
  let service: SetupOutletService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupOutletService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
