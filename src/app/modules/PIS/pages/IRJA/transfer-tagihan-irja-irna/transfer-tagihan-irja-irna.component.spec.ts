import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTagihanIrjaIrnaComponent } from './transfer-tagihan-irja-irna.component';

describe('TransferTagihanIrjaIrnaComponent', () => {
  let component: TransferTagihanIrjaIrnaComponent;
  let fixture: ComponentFixture<TransferTagihanIrjaIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferTagihanIrjaIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTagihanIrjaIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
