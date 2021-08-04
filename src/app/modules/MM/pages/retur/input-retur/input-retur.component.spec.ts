import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputReturComponent } from './input-retur.component';

describe('InputReturComponent', () => {
  let component: InputReturComponent;
  let fixture: ComponentFixture<InputReturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputReturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputReturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
