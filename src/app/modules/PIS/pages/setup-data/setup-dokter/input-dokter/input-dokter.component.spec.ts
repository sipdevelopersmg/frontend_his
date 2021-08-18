import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDokterComponent } from './input-dokter.component';

describe('InputDokterComponent', () => {
  let component: InputDokterComponent;
  let fixture: ComponentFixture<InputDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
