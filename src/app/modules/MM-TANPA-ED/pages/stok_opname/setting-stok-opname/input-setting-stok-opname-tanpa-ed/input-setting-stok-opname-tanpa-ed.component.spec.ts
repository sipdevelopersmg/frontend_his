import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSettingStokOpnameTanpaEdComponent } from './input-setting-stok-opname-tanpa-ed.component';

describe('InputSettingStokOpnameTanpaEdComponent', () => {
  let component: InputSettingStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<InputSettingStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSettingStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSettingStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
