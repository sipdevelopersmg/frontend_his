import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPermintaanMutasiComponent } from './input-permintaan-mutasi.component';

describe('InputPermintaanMutasiComponent', () => {
  let component: InputPermintaanMutasiComponent;
  let fixture: ComponentFixture<InputPermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
