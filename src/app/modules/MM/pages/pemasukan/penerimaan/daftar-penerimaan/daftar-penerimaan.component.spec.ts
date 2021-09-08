import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPenerimaanComponent } from './daftar-penerimaan.component';

describe('DaftarPenerimaanComponent', () => {
  let component: DaftarPenerimaanComponent;
  let fixture: ComponentFixture<DaftarPenerimaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarPenerimaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPenerimaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
