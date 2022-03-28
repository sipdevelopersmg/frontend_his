import { TestBed } from '@angular/core/testing';

import { AntrianTerprogramService } from './antrian-terprogram.service';

describe('AntrianTerprogramService', () => {
  let service: AntrianTerprogramService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntrianTerprogramService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
