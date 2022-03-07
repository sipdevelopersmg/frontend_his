import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPemakaianInternalTanpaEdComponent } from './view-pemakaian-internal-tanpa-ed.component';

describe('ViewPemakaianInternalTanpaEdComponent', () => {
  let component: ViewPemakaianInternalTanpaEdComponent;
  let fixture: ComponentFixture<ViewPemakaianInternalTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPemakaianInternalTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPemakaianInternalTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
