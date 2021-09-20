import { TestBed } from '@angular/core/testing';

import { PemakaianInternalService } from './pemakaian-internal.service';

describe('PemakaianInternalService', () => {
  let service: PemakaianInternalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemakaianInternalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
