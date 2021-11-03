import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTarifPemeriksaanComponent } from './setup-tarif-pemeriksaan.component';

describe('SetupTarifPemeriksaanComponent', () => {
  let component: SetupTarifPemeriksaanComponent;
  let fixture: ComponentFixture<SetupTarifPemeriksaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTarifPemeriksaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTarifPemeriksaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
