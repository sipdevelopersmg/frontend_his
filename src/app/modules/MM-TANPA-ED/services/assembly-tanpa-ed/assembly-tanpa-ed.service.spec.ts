import { TestBed } from '@angular/core/testing';

import { AssemblyTanpaEdService } from './assembly-tanpa-ed.service';

describe('AssemblyTanpaEdService', () => {
  let service: AssemblyTanpaEdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssemblyTanpaEdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
