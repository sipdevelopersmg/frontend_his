import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputResepFormulariumComponent } from './input-resep-formularium.component';

describe('InputResepFormulariumComponent', () => {
  let component: InputResepFormulariumComponent;
  let fixture: ComponentFixture<InputResepFormulariumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputResepFormulariumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputResepFormulariumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
