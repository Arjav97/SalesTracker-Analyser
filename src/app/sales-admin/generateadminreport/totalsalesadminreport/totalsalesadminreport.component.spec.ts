import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsalesadminreportComponent } from './totalsalesadminreport.component';

describe('TotalsalesadminreportComponent', () => {
  let component: TotalsalesadminreportComponent;
  let fixture: ComponentFixture<TotalsalesadminreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsalesadminreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsalesadminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
