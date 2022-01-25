import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPemakaianInternalTanpaEdComponent } from './input-pemakaian-internal-tanpa-ed.component';

describe('InputPemakaianInternalTanpaEdComponent', () => {
  let component: InputPemakaianInternalTanpaEdComponent;
  let fixture: ComponentFixture<InputPemakaianInternalTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPemakaianInternalTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPemakaianInternalTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
