import { TestBed } from '@angular/core/testing';

import { ListPasienService } from './list-pasien.service';

describe('ListPasienService', () => {
  let service: ListPasienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPasienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
