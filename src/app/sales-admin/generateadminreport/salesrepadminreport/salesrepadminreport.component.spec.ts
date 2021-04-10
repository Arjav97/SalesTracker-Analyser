import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrepadminreportComponent } from './salesrepadminreport.component';

describe('SalesrepadminreportComponent', () => {
  let component: SalesrepadminreportComponent;
  let fixture: ComponentFixture<SalesrepadminreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrepadminreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrepadminreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
