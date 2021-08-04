import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPOComponent } from './input-po.component';

describe('InputPOComponent', () => {
  let component: InputPOComponent;
  let fixture: ComponentFixture<InputPOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
