import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasienTanpaIdentitasComponent } from './update-pasien-tanpa-identitas.component';

describe('UpdatePasienTanpaIdentitasComponent', () => {
  let component: UpdatePasienTanpaIdentitasComponent;
  let fixture: ComponentFixture<UpdatePasienTanpaIdentitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasienTanpaIdentitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasienTanpaIdentitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
