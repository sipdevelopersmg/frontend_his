import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepIrjaComponent } from './input-resep-irja.component';

describe('InputResepIrjaComponent', () => {
  let component: InputResepIrjaComponent;
  let fixture: ComponentFixture<InputResepIrjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepIrjaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepIrjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
