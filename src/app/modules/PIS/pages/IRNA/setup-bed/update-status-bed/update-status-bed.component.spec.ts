import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStatusBedComponent } from './update-status-bed.component';

describe('UpdateStatusBedComponent', () => {
  let component: UpdateStatusBedComponent;
  let fixture: ComponentFixture<UpdateStatusBedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStatusBedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStatusBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
