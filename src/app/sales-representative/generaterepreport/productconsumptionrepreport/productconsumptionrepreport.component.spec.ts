import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductconsumptionrepreportComponent } from './productconsumptionrepreport.component';

describe('ProductconsumptionrepreportComponent', () => {
  let component: ProductconsumptionrepreportComponent;
  let fixture: ComponentFixture<ProductconsumptionrepreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductconsumptionrepreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductconsumptionrepreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
