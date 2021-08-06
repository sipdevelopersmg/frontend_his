import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOrderBaruComponent } from './input-order-baru.component';

describe('InputOrderBaruComponent', () => {
  let component: InputOrderBaruComponent;
  let fixture: ComponentFixture<InputOrderBaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOrderBaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOrderBaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
