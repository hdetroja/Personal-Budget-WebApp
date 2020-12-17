import { TestBed } from '@angular/core/testing';

import { AugustService } from './august.service';

describe('AugustService', () => {
  let service: AugustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AugustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
