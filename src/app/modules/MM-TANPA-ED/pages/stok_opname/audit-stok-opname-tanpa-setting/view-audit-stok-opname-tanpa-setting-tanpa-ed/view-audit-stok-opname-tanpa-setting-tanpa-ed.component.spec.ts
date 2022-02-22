import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditStokOpnameTanpaSettingTanpaEdComponent } from './view-audit-stok-opname-tanpa-setting-tanpa-ed.component';

describe('ViewAuditStokOpnameTanpaSettingTanpaEdComponent', () => {
  let component: ViewAuditStokOpnameTanpaSettingTanpaEdComponent;
  let fixture: ComponentFixture<ViewAuditStokOpnameTanpaSettingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuditStokOpnameTanpaSettingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuditStokOpnameTanpaSettingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
