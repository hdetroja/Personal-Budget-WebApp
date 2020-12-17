import { TestBed } from '@angular/core/testing';

import { MayService } from './may.service';

describe('MayService', () => {
  let service: MayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
