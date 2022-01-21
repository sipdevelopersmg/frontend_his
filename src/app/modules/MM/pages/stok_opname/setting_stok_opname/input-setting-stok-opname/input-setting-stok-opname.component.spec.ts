import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputStokOpnameComponent } from './input-stok-opname.component';

describe('InputStokOpnameComponent', () => {
  let component: InputStokOpnameComponent;
  let fixture: ComponentFixture<InputStokOpnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputStokOpnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputStokOpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
