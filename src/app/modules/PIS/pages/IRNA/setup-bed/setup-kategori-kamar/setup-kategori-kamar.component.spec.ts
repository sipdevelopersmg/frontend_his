import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupKategoriKamarComponent } from './setup-kategori-kamar.component';

describe('SetupKategoriKamarComponent', () => {
  let component: SetupKategoriKamarComponent;
  let fixture: ComponentFixture<SetupKategoriKamarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupKategoriKamarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupKategoriKamarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
