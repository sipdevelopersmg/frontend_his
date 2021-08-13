import { TestBed } from '@angular/core/testing';

import { JenisIdentitasService } from './jenis-identitas.service';

describe('JenisIdentitasService', () => {
  let service: JenisIdentitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JenisIdentitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
