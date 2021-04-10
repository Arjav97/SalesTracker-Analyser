import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcustomerhistoryComponent } from './viewcustomerhistory.component';

describe('ViewcustomerhistoryComponent', () => {
  let component: ViewcustomerhistoryComponent;
  let fixture: ComponentFixture<ViewcustomerhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcustomerhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcustomerhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
