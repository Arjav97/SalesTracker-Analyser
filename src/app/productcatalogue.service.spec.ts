import { TestBed } from '@angular/core/testing';

import { ProductcatalogueService } from './productcatalogue.service';

describe('ProductcatalogueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcatalogueService = TestBed.get(ProductcatalogueService);
    expect(service).toBeTruthy();
  });
});
