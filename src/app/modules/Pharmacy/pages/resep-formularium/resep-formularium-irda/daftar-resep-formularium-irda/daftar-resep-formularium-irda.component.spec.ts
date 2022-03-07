import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarResepFormulariumIrdaComponent } from './daftar-resep-formularium-irda.component';

describe('DaftarResepFormulariumIrdaComponent', () => {
  let component: DaftarResepFormulariumIrdaComponent;
  let fixture: ComponentFixture<DaftarResepFormulariumIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarResepFormulariumIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarResepFormulariumIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
