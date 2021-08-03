import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputKontrakPengadaanComponent } from './input-kontrak-pengadaan.component';

describe('InputKontrakPengadaanComponent', () => {
  let component: InputKontrakPengadaanComponent;
  let fixture: ComponentFixture<InputKontrakPengadaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputKontrakPengadaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputKontrakPengadaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
