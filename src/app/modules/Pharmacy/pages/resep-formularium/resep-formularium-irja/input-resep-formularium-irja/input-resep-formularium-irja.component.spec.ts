import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepFormulariumIrjaComponent } from './input-resep-formularium-irja.component';

describe('InputResepFormulariumIrjaComponent', () => {
  let component: InputResepFormulariumIrjaComponent;
  let fixture: ComponentFixture<InputResepFormulariumIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepFormulariumIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepFormulariumIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
