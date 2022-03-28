import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStatusCancelComponent } from './dialog-update-status-cancel.component';

describe('DialogUpdateStatusCancelComponent', () => {
  let component: DialogUpdateStatusCancelComponent;
  let fixture: ComponentFixture<DialogUpdateStatusCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStatusCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStatusCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
