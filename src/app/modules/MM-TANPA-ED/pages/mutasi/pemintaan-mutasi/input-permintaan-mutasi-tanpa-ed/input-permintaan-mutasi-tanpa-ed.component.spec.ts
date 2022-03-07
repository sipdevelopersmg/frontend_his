import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPermintaanMutasiTanpaEdComponent } from './input-permintaan-mutasi-tanpa-ed.component';

describe('InputPermintaanMutasiTanpaEdComponent', () => {
  let component: InputPermintaanMutasiTanpaEdComponent;
  let fixture: ComponentFixture<InputPermintaanMutasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPermintaanMutasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPermintaanMutasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
