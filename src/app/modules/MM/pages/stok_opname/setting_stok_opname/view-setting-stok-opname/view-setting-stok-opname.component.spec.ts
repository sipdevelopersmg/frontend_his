import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSettingStokOpnameComponent } from './view-setting-stok-opname.component';

describe('ViewSettingStokOpnameComponent', () => {
  let component: ViewSettingStokOpnameComponent;
  let fixture: ComponentFixture<ViewSettingStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSettingStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSettingStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
