import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcustomerpurchasereportComponent } from './allcustomerpurchasereport.component';

describe('AllcustomerpurchasereportComponent', () => {
  let component: AllcustomerpurchasereportComponent;
  let fixture: ComponentFixture<AllcustomerpurchasereportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcustomerpurchasereportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcustomerpurchasereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
