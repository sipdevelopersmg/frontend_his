import { TestBed } from '@angular/core/testing';

import { UpdatePasienTanpaIdentitasService } from './update-pasien-tanpa-identitas.service';

describe('UpdatePasienTanpaIdentitasService', () => {
  let service: UpdatePasienTanpaIdentitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePasienTanpaIdentitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
