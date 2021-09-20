import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPermintaanMutasiComponent } from './view-permintaan-mutasi.component';

describe('ViewPermintaanMutasiComponent', () => {
  let component: ViewPermintaanMutasiComponent;
  let fixture: ComponentFixture<ViewPermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
