import { TestBed } from '@angular/core/testing';

import { BankDarahService } from './bank-darah.service';

describe('BankDarahService', () => {
  let service: BankDarahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankDarahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
