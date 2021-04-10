import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificcustomerreportComponent } from './specificcustomerreport.component';

describe('SpecificcustomerreportComponent', () => {
  let component: SpecificcustomerreportComponent;
  let fixture: ComponentFixture<SpecificcustomerreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificcustomerreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificcustomerreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
