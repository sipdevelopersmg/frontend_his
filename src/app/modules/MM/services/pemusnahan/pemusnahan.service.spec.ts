import { TestBed } from '@angular/core/testing';

import { PemusnahanService } from './pemusnahan.service';

describe('PemusnahanService', () => {
  let service: PemusnahanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemusnahanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
