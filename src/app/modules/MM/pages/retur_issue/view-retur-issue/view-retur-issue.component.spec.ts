import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReturIssueComponent } from './view-retur-issue.component';

describe('ViewReturIssueComponent', () => {
  let component: ViewReturIssueComponent;
  let fixture: ComponentFixture<ViewReturIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewReturIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReturIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
