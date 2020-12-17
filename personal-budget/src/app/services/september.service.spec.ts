import { TestBed } from '@angular/core/testing';

import { SeptemberService } from './september.service';

describe('SeptemberService', () => {
  let service: SeptemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeptemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
