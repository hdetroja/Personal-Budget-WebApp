import { TestBed } from '@angular/core/testing';

import { OctoberService } from './october.service';

describe('OctoberService', () => {
  let service: OctoberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OctoberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
