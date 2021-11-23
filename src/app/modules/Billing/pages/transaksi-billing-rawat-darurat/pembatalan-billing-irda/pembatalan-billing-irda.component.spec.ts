import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembatalanBillingIrdaComponent } from './pembatalan-billing-irda.component';

describe('PembatalanBillingIrdaComponent', () => {
  let component: PembatalanBillingIrdaComponent;
  let fixture: ComponentFixture<PembatalanBillingIrdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembatalanBillingIrdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembatalanBillingIrdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
