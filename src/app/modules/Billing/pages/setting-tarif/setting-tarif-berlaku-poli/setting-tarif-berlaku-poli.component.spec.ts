import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTarifBerlakuPoliComponent } from './setting-tarif-berlaku-poli.component';

describe('SettingTarifBerlakuPoliComponent', () => {
  let component: SettingTarifBerlakuPoliComponent;
  let fixture: ComponentFixture<SettingTarifBerlakuPoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingTarifBerlakuPoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTarifBerlakuPoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
