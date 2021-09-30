import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalSignComponent } from './vital-sign.component';

describe('VitalSignComponent', () => {
  let component: VitalSignComponent;
  let fixture: ComponentFixture<VitalSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
