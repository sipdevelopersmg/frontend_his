import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetHargaOrderComponent } from './set-harga-order.component';

describe('SetHargaOrderComponent', () => {
  let component: SetHargaOrderComponent;
  let fixture: ComponentFixture<SetHargaOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetHargaOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetHargaOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
