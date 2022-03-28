import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStatusConfirmedComponent } from './dialog-update-status-confirmed.component';

describe('DialogUpdateStatusConfirmedComponent', () => {
  let component: DialogUpdateStatusConfirmedComponent;
  let fixture: ComponentFixture<DialogUpdateStatusConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStatusConfirmedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStatusConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
