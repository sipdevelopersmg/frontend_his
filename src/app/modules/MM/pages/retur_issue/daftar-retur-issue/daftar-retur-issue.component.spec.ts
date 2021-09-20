import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarReturIssueComponent } from './daftar-retur-issue.component';

describe('DaftarReturIssueComponent', () => {
  let component: DaftarReturIssueComponent;
  let fixture: ComponentFixture<DaftarReturIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarReturIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarReturIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
