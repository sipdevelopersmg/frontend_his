import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTagihanIrdaIrnaComponent } from './transfer-tagihan-irda-irna.component';

describe('TransferTagihanIrdaIrnaComponent', () => {
  let component: TransferTagihanIrdaIrnaComponent;
  let fixture: ComponentFixture<TransferTagihanIrdaIrnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferTagihanIrdaIrnaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferTagihanIrdaIrnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
