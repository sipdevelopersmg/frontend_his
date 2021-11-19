import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarIssueValidationComponent } from './daftar-issue-validation.component';

describe('DaftarIssueValidationComponent', () => {
  let component: DaftarIssueValidationComponent;
  let fixture: ComponentFixture<DaftarIssueValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarIssueValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarIssueValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
