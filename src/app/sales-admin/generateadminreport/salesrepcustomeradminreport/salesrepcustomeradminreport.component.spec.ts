import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrepcustomeradminreportComponent } from './salesrepcustomeradminreport.component';

describe('SalesrepcustomeradminreportComponent', () => {
  let component: SalesrepcustomeradminreportComponent;
  let fixture: ComponentFixture<SalesrepcustomeradminreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrepcustomeradminreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrepcustomeradminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
