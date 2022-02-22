import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAuditStokOpnameTanpaEdComponent } from './daftar-audit-stok-opname-tanpa-ed.component';

describe('DaftarAuditStokOpnameTanpaEdComponent', () => {
  let component: DaftarAuditStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<DaftarAuditStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAuditStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAuditStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
