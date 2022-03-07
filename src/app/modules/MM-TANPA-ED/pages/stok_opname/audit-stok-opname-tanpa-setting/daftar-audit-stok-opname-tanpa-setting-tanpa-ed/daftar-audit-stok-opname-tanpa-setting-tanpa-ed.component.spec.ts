import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAuditStokOpnameTanpaSettingTanpaEdComponent } from './daftar-audit-stok-opname-tanpa-setting-tanpa-ed.component';

describe('DaftarAuditStokOpnameTanpaSettingTanpaEdComponent', () => {
  let component: DaftarAuditStokOpnameTanpaSettingTanpaEdComponent;
  let fixture: ComponentFixture<DaftarAuditStokOpnameTanpaSettingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAuditStokOpnameTanpaSettingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAuditStokOpnameTanpaSettingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
