import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReturPembelianComponent } from './input-retur.component';

describe('InputReturComponent', () => {
  let component: InputReturPembelianComponent;
  let fixture: ComponentFixture<InputReturPembelianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReturPembelianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReturPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
