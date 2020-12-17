import { TestBed } from '@angular/core/testing';

import { DecemberService } from './december.service';

describe('DecemberService', () => {
  let service: DecemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
