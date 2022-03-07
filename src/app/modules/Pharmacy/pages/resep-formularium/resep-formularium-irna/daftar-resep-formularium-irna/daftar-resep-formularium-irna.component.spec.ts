import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepFormulariumIrnaComponent } from './daftar-resep-formularium-irna.component';

describe('DaftarResepFormulariumIrnaComponent', () => {
  let component: DaftarResepFormulariumIrnaComponent;
  let fixture: ComponentFixture<DaftarResepFormulariumIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepFormulariumIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepFormulariumIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
