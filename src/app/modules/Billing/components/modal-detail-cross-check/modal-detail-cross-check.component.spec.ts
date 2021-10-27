import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailCrossCheckComponent } from './modal-detail-cross-check.component';

describe('ModalDetailCrossCheckComponent', () => {
  let component: ModalDetailCrossCheckComponent;
  let fixture: ComponentFixture<ModalDetailCrossCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailCrossCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDetailCrossCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
