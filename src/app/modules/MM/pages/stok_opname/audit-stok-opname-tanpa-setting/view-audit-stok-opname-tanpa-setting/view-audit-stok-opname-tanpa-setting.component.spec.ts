import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAuditStokOpnameTanpaSettingComponent } from './view-audit-stok-opname-tanpa-setting.component';

describe('ViewAuditStokOpnameTanpaSettingComponent', () => {
  let component: ViewAuditStokOpnameTanpaSettingComponent;
  let fixture: ComponentFixture<ViewAuditStokOpnameTanpaSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAuditStokOpnameTanpaSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAuditStokOpnameTanpaSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
