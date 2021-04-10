import { TestBed } from '@angular/core/testing';

import { SalesrepService } from './salesrep.service';

describe('SalesrepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesrepService = TestBed.get(SalesrepService);
    expect(service).toBeTruthy();
  });
});
