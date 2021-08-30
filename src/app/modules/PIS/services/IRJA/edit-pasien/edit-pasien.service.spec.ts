import { TestBed } from '@angular/core/testing';

import { EditPasienService } from './edit-pasien.service';

describe('EditPasienService', () => {
  let service: EditPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
