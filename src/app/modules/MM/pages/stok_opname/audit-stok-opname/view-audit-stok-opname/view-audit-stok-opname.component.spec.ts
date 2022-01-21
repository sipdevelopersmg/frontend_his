import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditStokOpnameComponent } from './view-audit-stok-opname.component';

describe('ViewAuditStokOpnameComponent', () => {
  let component: ViewAuditStokOpnameComponent;
  let fixture: ComponentFixture<ViewAuditStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuditStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuditStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
