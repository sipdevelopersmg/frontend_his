import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRepackingTanpaEdComponent } from './input-repacking-tanpa-ed.component';

describe('InputRepackingTanpaEdComponent', () => {
  let component: InputRepackingTanpaEdComponent;
  let fixture: ComponentFixture<InputRepackingTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRepackingTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRepackingTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
