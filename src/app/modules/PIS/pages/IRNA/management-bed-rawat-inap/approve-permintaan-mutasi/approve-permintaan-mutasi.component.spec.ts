import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePermintaanMutasiComponent } from './approve-permintaan-mutasi.component';

describe('ApprovePermintaanMutasiComponent', () => {
  let component: ApprovePermintaanMutasiComponent;
  let fixture: ComponentFixture<ApprovePermintaanMutasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovePermintaanMutasiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePermintaanMutasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
