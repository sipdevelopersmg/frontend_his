import { TestBed } from '@angular/core/testing';

import { SetupPabrikService } from './setup-pabrik.service';

describe('SetupPabrikService', () => {
  let service: SetupPabrikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupPabrikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
