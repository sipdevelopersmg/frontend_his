import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiOrderRadComponent } from './verifikasi-order-rad.component';

describe('VerifikasiOrderRadComponent', () => {
  let component: VerifikasiOrderRadComponent;
  let fixture: ComponentFixture<VerifikasiOrderRadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifikasiOrderRadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiOrderRadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
