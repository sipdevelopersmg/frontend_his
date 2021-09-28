import { TestBed } from '@angular/core/testing';

import { LaboratoriumService } from './laboratorium.service';

describe('LaboratoriumService', () => {
  let service: LaboratoriumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoriumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
