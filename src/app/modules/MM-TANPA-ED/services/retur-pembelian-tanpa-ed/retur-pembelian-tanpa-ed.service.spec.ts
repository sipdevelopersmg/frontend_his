import { TestBed } from '@angular/core/testing';

import { ReturTanpaEdService } from './retur-tanpa-ed.service';

describe('ReturTanpaEdService', () => {
  let service: ReturTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
