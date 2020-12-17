import { TestBed } from '@angular/core/testing';

import { MarchService } from './march.service';

describe('MarchService', () => {
  let service: MarchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
