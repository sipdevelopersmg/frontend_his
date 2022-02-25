import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulangResepFormulariumIrnaComponent } from './pulang-resep-formularium-irna.component';

describe('PulangResepFormulariumIrnaComponent', () => {
  let component: PulangResepFormulariumIrnaComponent;
  let fixture: ComponentFixture<PulangResepFormulariumIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulangResepFormulariumIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulangResepFormulariumIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
