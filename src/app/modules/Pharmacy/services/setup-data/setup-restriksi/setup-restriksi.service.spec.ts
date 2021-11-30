import { TestBed } from '@angular/core/testing';

import { SetupRestriksiService } from './setup-restriksi.service';

describe('SetupRestriksiService', () => {
  let service: SetupRestriksiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetupRestriksiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
