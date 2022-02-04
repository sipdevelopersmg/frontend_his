import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPermintaanMutasiTanpaEdComponent } from './view-permintaan-mutasi-tanpa-ed.component';

describe('ViewPermintaanMutasiTanpaEdComponent', () => {
  let component: ViewPermintaanMutasiTanpaEdComponent;
  let fixture: ComponentFixture<ViewPermintaanMutasiTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPermintaanMutasiTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPermintaanMutasiTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
