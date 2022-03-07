import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPenerimaanTanpaEdComponent } from './daftar-penerimaan-tanpa-ed.component';

describe('DaftarPenerimaanTanpaEdComponent', () => {
  let component: DaftarPenerimaanTanpaEdComponent;
  let fixture: ComponentFixture<DaftarPenerimaanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPenerimaanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPenerimaanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
