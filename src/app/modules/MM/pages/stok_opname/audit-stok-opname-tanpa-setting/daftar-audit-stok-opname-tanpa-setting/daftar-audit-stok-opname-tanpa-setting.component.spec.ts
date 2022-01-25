import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarAuditStokOpnameTanpaSettingComponent } from './daftar-audit-stok-opname-tanpa-setting.component';

describe('DaftarAuditStokOpnameTanpaSettingComponent', () => {
  let component: DaftarAuditStokOpnameTanpaSettingComponent;
  let fixture: ComponentFixture<DaftarAuditStokOpnameTanpaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarAuditStokOpnameTanpaSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarAuditStokOpnameTanpaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
