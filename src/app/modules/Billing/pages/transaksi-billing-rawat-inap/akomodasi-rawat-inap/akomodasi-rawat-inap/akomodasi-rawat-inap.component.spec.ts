import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkomodasiRawatInapComponent } from './akomodasi-rawat-inap.component';

describe('AkomodasiRawatInapComponent', () => {
  let component: AkomodasiRawatInapComponent;
  let fixture: ComponentFixture<AkomodasiRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkomodasiRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkomodasiRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
