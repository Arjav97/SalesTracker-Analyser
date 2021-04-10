import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductenquiryhomeComponent } from './productenquiryhome.component';

describe('ProductenquiryhomeComponent', () => {
  let component: ProductenquiryhomeComponent;
  let fixture: ComponentFixture<ProductenquiryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductenquiryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductenquiryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
