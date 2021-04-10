import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductremainingadminreportComponent } from './productremainingadminreport.component';

describe('ProductremainingadminreportComponent', () => {
  let component: ProductremainingadminreportComponent;
  let fixture: ComponentFixture<ProductremainingadminreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductremainingadminreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductremainingadminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
