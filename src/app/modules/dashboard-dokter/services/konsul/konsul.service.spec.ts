import { TestBed } from '@angular/core/testing';

import { KonsulService } from './konsul.service';

describe('KonsulService', () => {
  let service: KonsulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KonsulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
