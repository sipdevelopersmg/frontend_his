import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTarifBerlakuComponent } from './setting-tarif-berlaku.component';

describe('SettingTarifBerlakuComponent', () => {
  let component: SettingTarifBerlakuComponent;
  let fixture: ComponentFixture<SettingTarifBerlakuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingTarifBerlakuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingTarifBerlakuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
