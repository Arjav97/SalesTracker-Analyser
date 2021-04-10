import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepricecommissionComponent } from './updatepricecommission.component';

describe('UpdatepricecommissionComponent', () => {
  let component: UpdatepricecommissionComponent;
  let fixture: ComponentFixture<UpdatepricecommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepricecommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepricecommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
