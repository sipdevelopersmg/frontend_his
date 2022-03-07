import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuditStokOpnameTanpaSettingTanpaEdComponent } from './input-audit-stok-opname-tanpa-setting-tanpa-ed.component';

describe('InputAuditStokOpnameTanpaSettingTanpaEdComponent', () => {
  let component: InputAuditStokOpnameTanpaSettingTanpaEdComponent;
  let fixture: ComponentFixture<InputAuditStokOpnameTanpaSettingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuditStokOpnameTanpaSettingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuditStokOpnameTanpaSettingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
