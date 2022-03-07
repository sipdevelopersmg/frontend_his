import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReturTanpaEdComponent } from './input-retur-tanpa-ed.component';

describe('InputReturTanpaEdComponent', () => {
  let component: InputReturTanpaEdComponent;
  let fixture: ComponentFixture<InputReturTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReturTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReturTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
