import { TestBed } from '@angular/core/testing';

import { JulyService } from './july.service';

describe('JulyService', () => {
  let service: JulyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JulyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
