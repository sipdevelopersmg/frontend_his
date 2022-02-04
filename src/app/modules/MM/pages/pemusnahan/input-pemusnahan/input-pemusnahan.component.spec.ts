import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPemusnahanComponent } from './input-pemusnahan.component';

describe('InputPemusnahanComponent', () => {
  let component: InputPemusnahanComponent;
  let fixture: ComponentFixture<InputPemusnahanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPemusnahanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPemusnahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
