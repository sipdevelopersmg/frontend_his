import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIssueValidationComponent } from './view-issue-validation.component';

describe('ViewIssueValidationComponent', () => {
  let component: ViewIssueValidationComponent;
  let fixture: ComponentFixture<ViewIssueValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIssueValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIssueValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
