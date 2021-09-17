import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReturIssueComponent } from './input-retur-issue.component';

describe('InputReturIssueComponent', () => {
  let component: InputReturIssueComponent;
  let fixture: ComponentFixture<InputReturIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReturIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReturIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
