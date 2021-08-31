import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgInputWilayahComponent } from './org-input-wilayah.component';

describe('OrgInputWilayahComponent', () => {
  let component: OrgInputWilayahComponent;
  let fixture: ComponentFixture<OrgInputWilayahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgInputWilayahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgInputWilayahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
