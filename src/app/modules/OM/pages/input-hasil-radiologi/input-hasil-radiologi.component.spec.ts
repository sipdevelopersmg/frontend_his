import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputHasilRadiologiComponent } from './input-hasil-radiologi.component';

describe('InputHasilRadiologiComponent', () => {
  let component: InputHasilRadiologiComponent;
  let fixture: ComponentFixture<InputHasilRadiologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputHasilRadiologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputHasilRadiologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
