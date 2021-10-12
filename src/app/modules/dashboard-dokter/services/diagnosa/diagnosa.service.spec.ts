import { TestBed } from '@angular/core/testing';

import { DiagnosaService } from './diagnosa.service';

describe('DiagnosaService', () => {
  let service: DiagnosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiagnosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
