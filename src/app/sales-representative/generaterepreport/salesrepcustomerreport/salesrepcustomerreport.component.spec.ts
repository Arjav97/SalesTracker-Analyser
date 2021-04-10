import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrepcustomerreportComponent } from './salesrepcustomerreport.component';

describe('SalesrepcustomerreportComponent', () => {
  let component: SalesrepcustomerreportComponent;
  let fixture: ComponentFixture<SalesrepcustomerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrepcustomerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrepcustomerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
