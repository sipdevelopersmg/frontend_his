import { TestBed } from '@angular/core/testing';

import { AntrianRegulerService } from './antrian-reguler.service';

describe('AntrianRegulerService', () => {
  let service: AntrianRegulerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AntrianRegulerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
