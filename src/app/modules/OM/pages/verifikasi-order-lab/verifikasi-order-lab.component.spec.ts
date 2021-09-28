import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifikasiOrderLabComponent } from './verifikasi-order-lab.component';

describe('VerifikasiOrderLabComponent', () => {
  let component: VerifikasiOrderLabComponent;
  let fixture: ComponentFixture<VerifikasiOrderLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifikasiOrderLabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifikasiOrderLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
