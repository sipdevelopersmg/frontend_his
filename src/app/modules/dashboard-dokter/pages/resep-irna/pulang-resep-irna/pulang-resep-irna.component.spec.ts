import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulangResepIrnaComponent } from './pulang-resep-irna.component';

describe('PulangResepIrnaComponent', () => {
  let component: PulangResepIrnaComponent;
  let fixture: ComponentFixture<PulangResepIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulangResepIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PulangResepIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
