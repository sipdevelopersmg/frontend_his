import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDarahComponent } from './bank-darah.component';

describe('BankDarahComponent', () => {
  let component: BankDarahComponent;
  let fixture: ComponentFixture<BankDarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankDarahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
