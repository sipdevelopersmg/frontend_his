import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSettingStokOpnameTanpaEdComponent } from './view-setting-stok-opname-tanpa-ed.component';

describe('ViewSettingStokOpnameTanpaEdComponent', () => {
  let component: ViewSettingStokOpnameTanpaEdComponent;
  let fixture: ComponentFixture<ViewSettingStokOpnameTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSettingStokOpnameTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSettingStokOpnameTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
