import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiologiComponent } from './radiologi.component';

describe('RadiologiComponent', () => {
  let component: RadiologiComponent;
  let fixture: ComponentFixture<RadiologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
