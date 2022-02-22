import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarSettingStokOpnameTanpaEdComponent } from './daftar-setting-stok-opname-tanpa-ed.component';

describe('DaftarSettingStokOpnameTanpaEdComponent', () => {
  let component: DaftarSettingStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<DaftarSettingStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarSettingStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarSettingStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
