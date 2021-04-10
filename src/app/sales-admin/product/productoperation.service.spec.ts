import { TestBed } from '@angular/core/testing';

import { ProductoperationService } from './productoperation.service';

describe('ProductoperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoperationService = TestBed.get(ProductoperationService);
    expect(service).toBeTruthy();
  });
});
