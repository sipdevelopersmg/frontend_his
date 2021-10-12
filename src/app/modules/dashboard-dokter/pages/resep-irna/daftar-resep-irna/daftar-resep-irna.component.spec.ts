import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepIrnaComponent } from './daftar-resep-irna.component';

describe('DaftarResepIrnaComponent', () => {
  let component: DaftarResepIrnaComponent;
  let fixture: ComponentFixture<DaftarResepIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
