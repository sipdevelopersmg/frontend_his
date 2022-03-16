import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStatusTerjadwalComponent } from './dialog-update-status-terjadwal.component';

describe('DialogUpdateStatusTerjadwalComponent', () => {
  let component: DialogUpdateStatusTerjadwalComponent;
  let fixture: ComponentFixture<DialogUpdateStatusTerjadwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStatusTerjadwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStatusTerjadwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
