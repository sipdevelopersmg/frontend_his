import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupLabelPemakaianObatComponent } from './setup-label-pemakaian-obat.component';

describe('SetupLabelPemakaianObatComponent', () => {
  let component: SetupLabelPemakaianObatComponent;
  let fixture: ComponentFixture<SetupLabelPemakaianObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupLabelPemakaianObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupLabelPemakaianObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
