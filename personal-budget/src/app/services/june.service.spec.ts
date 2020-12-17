import { TestBed } from '@angular/core/testing';

import { JuneService } from './june.service';

describe('JuneService', () => {
  let service: JuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
