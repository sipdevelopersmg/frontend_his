import { TestBed } from '@angular/core/testing';

import { RepackingTanpaEdService } from './repacking-tanpa-ed.service';

describe('RepackingTanpaEdService', () => {
  let service: RepackingTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepackingTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
