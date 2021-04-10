import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductconsumptionadminreportComponent } from './productconsumptionadminreport.component';

describe('ProductconsumptionadminreportComponent', () => {
  let component: ProductconsumptionadminreportComponent;
  let fixture: ComponentFixture<ProductconsumptionadminreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductconsumptionadminreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductconsumptionadminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
