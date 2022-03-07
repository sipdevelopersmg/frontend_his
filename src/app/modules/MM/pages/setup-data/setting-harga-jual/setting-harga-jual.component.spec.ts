import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingHargaJualComponent } from './setting-harga-jual.component';

describe('SettingHargaJualComponent', () => {
  let component: SettingHargaJualComponent;
  let fixture: ComponentFixture<SettingHargaJualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingHargaJualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingHargaJualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
