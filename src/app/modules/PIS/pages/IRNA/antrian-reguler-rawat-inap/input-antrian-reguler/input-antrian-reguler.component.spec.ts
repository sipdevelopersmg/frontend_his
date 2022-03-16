import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAntrianRegulerComponent } from './input-antrian-reguler.component';

describe('InputAntrianRegulerComponent', () => {
  let component: InputAntrianRegulerComponent;
  let fixture: ComponentFixture<InputAntrianRegulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAntrianRegulerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAntrianRegulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
