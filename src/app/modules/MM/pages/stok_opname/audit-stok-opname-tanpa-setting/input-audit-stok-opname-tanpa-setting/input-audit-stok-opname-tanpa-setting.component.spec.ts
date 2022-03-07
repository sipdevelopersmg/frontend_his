import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuditStokOpnameTanpaSettingComponent } from './input-audit-stok-opname-tanpa-setting.component';

describe('InputAuditStokOpnameTanpaSettingComponent', () => {
  let component: InputAuditStokOpnameTanpaSettingComponent;
  let fixture: ComponentFixture<InputAuditStokOpnameTanpaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAuditStokOpnameTanpaSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuditStokOpnameTanpaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
