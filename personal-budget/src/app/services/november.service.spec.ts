import { TestBed } from '@angular/core/testing';

import { NovemberService } from './november.service';

describe('NovemberService', () => {
  let service: NovemberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovemberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
