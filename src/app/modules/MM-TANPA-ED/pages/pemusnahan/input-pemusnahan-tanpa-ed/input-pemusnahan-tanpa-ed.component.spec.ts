import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPemusnahanTanpaEdComponent } from './input-pemusnahan-tanpa-ed.component';

describe('InputPemusnahanTanpaEdComponent', () => {
  let component: InputPemusnahanTanpaEdComponent;
  let fixture: ComponentFixture<InputPemusnahanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPemusnahanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPemusnahanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
