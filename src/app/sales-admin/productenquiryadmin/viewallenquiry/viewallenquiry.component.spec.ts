import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallenquiryComponent } from './viewallenquiry.component';

describe('ViewallenquiryComponent', () => {
  let component: ViewallenquiryComponent;
  let fixture: ComponentFixture<ViewallenquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallenquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallenquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
