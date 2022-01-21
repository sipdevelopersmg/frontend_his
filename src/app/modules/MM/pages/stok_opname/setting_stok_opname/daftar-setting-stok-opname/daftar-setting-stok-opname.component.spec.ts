import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarSettingStokOpnameComponent } from './daftar-setting-stok-opname.component';

describe('DaftarSettingStokOpnameComponent', () => {
  let component: DaftarSettingStokOpnameComponent;
  let fixture: ComponentFixture<DaftarSettingStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarSettingStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarSettingStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
