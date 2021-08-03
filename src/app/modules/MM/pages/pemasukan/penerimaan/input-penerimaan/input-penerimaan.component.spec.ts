import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPenerimaanComponent } from './input-penerimaan.component';

describe('InputPenerimaanComponent', () => {
  let component: InputPenerimaanComponent;
  let fixture: ComponentFixture<InputPenerimaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPenerimaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPenerimaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
