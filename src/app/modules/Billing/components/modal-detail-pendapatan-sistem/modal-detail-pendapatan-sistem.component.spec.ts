import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailPendapatanSistemComponent } from './modal-detail-pendapatan-sistem.component';

describe('ModalDetailPendapatanSistemComponent', () => {
  let component: ModalDetailPendapatanSistemComponent;
  let fixture: ComponentFixture<ModalDetailPendapatanSistemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailPendapatanSistemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailPendapatanSistemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
