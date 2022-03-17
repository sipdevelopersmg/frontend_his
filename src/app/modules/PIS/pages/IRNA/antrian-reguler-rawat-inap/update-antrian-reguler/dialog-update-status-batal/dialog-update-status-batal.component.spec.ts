import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUpdateStatusBatalComponent } from './dialog-update-status-batal.component';

describe('DialogUpdateStatusBatalComponent', () => {
  let component: DialogUpdateStatusBatalComponent;
  let fixture: ComponentFixture<DialogUpdateStatusBatalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUpdateStatusBatalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUpdateStatusBatalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
