import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportadminhomeComponent } from './reportadminhome.component';

describe('ReportadminhomeComponent', () => {
  let component: ReportadminhomeComponent;
  let fixture: ComponentFixture<ReportadminhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportadminhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportadminhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
