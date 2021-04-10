import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcustomersorderComponent } from './viewallcustomersorder.component';

describe('ViewallcustomersorderComponent', () => {
  let component: ViewallcustomersorderComponent;
  let fixture: ComponentFixture<ViewallcustomersorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallcustomersorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcustomersorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
