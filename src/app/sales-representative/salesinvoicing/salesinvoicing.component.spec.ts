import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesinvoicingComponent } from './salesinvoicing.component';

describe('SalesinvoicingComponent', () => {
  let component: SalesinvoicingComponent;
  let fixture: ComponentFixture<SalesinvoicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesinvoicingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesinvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
