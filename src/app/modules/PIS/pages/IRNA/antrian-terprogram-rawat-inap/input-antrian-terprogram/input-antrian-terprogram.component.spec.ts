import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAntrianTerprogramComponent } from './input-antrian-terprogram.component';

describe('InputAntrianTerprogramComponent', () => {
  let component: InputAntrianTerprogramComponent;
  let fixture: ComponentFixture<InputAntrianTerprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAntrianTerprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAntrianTerprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
