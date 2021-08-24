import { TestBed } from '@angular/core/testing';

import { ResepRacikanService } from './resep-racikan.service';

describe('ResepRacikanService', () => {
  let service: ResepRacikanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResepRacikanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
