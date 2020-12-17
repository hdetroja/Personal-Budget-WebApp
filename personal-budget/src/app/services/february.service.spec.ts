import { TestBed } from '@angular/core/testing';

import { FebruaryService } from './february.service';

describe('FebruaryService', () => {
  let service: FebruaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FebruaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
