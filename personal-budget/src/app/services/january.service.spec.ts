import { TestBed } from '@angular/core/testing';

import { JanuaryService } from './january.service';

describe('JanuaryService', () => {
  let service: JanuaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JanuaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
