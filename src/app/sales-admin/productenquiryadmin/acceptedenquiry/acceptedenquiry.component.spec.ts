import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedenquiryComponent } from './acceptedenquiry.component';

describe('AcceptedenquiryComponent', () => {
  let component: AcceptedenquiryComponent;
  let fixture: ComponentFixture<AcceptedenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
