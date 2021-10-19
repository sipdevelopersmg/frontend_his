import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepIrnaComponent } from './input-resep-irna.component';

describe('InputResepIrnaComponent', () => {
  let component: InputResepIrnaComponent;
  let fixture: ComponentFixture<InputResepIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
