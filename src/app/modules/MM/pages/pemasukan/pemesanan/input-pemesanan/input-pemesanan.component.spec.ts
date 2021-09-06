import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPemesananComponent } from './input-pemesanan.component';

describe('InputPemesananComponent', () => {
  let component: InputPemesananComponent;
  let fixture: ComponentFixture<InputPemesananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPemesananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPemesananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
