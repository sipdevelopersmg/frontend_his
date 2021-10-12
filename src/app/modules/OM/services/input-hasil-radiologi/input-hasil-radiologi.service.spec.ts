import { TestBed } from '@angular/core/testing';

import { InputHasilRadiologiService } from './input-hasil-radiologi.service';

describe('InputHasilRadiologiService', () => {
  let service: InputHasilRadiologiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputHasilRadiologiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
