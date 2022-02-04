import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAuditStokOpnameComponent } from './daftar-audit-stok-opname.component';

describe('DaftarAuditStokOpnameComponent', () => {
  let component: DaftarAuditStokOpnameComponent;
  let fixture: ComponentFixture<DaftarAuditStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAuditStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAuditStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
