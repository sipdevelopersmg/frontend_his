import { TestBed } from '@angular/core/testing';

import { PostingBillingService } from './posting-billing.service';

describe('PostingBillingService', () => {
  let service: PostingBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostingBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
