import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelayananPasienIrnaComponent } from './pelayanan-pasien-irna.component';

describe('PelayananPasienIrnaComponent', () => {
  let component: PelayananPasienIrnaComponent;
  let fixture: ComponentFixture<PelayananPasienIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelayananPasienIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelayananPasienIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
