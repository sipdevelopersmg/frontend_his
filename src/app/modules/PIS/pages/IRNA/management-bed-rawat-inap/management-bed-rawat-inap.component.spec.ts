import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementBedRawatInapComponent } from './management-bed-rawat-inap.component';

describe('ManagementBedRawatInapComponent', () => {
  let component: ManagementBedRawatInapComponent;
  let fixture: ComponentFixture<ManagementBedRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementBedRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementBedRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
