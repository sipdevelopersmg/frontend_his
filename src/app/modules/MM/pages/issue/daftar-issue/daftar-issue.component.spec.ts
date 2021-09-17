import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarIssueComponent } from './daftar-issue.component';

describe('DaftarIssueComponent', () => {
  let component: DaftarIssueComponent;
  let fixture: ComponentFixture<DaftarIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
