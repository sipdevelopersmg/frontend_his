import { TestBed } from '@angular/core/testing';

import { PemusnahanTanpaEdService } from './pemusnahan-tanpa-ed.service';

describe('PemusnahanTanpaEdService', () => {
  let service: PemusnahanTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemusnahanTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
