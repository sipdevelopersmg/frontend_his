import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPenerimaanTanpaEdComponent } from './input-penerimaan-tanpa-ed.component';

describe('InputPenerimaanTanpaEdComponent', () => {
  let component: InputPenerimaanTanpaEdComponent;
  let fixture: ComponentFixture<InputPenerimaanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPenerimaanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPenerimaanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
