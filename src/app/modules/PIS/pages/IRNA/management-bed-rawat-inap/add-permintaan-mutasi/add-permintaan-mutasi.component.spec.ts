import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermintaanMutasiComponent } from './add-permintaan-mutasi.component';

describe('AddPermintaanMutasiComponent', () => {
  let component: AddPermintaanMutasiComponent;
  let fixture: ComponentFixture<AddPermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
