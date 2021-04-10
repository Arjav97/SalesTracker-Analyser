import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallsalesorderComponent } from './viewallsalesorder.component';

describe('ViewallsalesorderComponent', () => {
  let component: ViewallsalesorderComponent;
  let fixture: ComponentFixture<ViewallsalesorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallsalesorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallsalesorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
