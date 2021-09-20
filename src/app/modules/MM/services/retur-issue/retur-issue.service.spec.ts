import { TestBed } from '@angular/core/testing';

import { ReturIssueService } from './retur-issue.service';

describe('ReturIssueService', () => {
  let service: ReturIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReturIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
