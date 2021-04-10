import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportrephomeComponent } from './reportrephome.component';

describe('ReportrephomeComponent', () => {
  let component: ReportrephomeComponent;
  let fixture: ComponentFixture<ReportrephomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportrephomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportrephomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
