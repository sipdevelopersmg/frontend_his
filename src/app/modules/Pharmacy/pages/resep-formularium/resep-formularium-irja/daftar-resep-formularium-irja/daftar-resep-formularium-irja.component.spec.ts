import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepFormulariumIrjaComponent } from './daftar-resep-formularium-irja.component';

describe('DaftarResepFormulariumIrjaComponent', () => {
  let component: DaftarResepFormulariumIrjaComponent;
  let fixture: ComponentFixture<DaftarResepFormulariumIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepFormulariumIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepFormulariumIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
