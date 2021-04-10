import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductremainingrepreportComponent } from './productremainingrepreport.component';

describe('ProductremainingrepreportComponent', () => {
  let component: ProductremainingrepreportComponent;
  let fixture: ComponentFixture<ProductremainingrepreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductremainingrepreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductremainingrepreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
