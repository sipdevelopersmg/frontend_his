import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPenerimaanTanpaEdComponent } from './view-penerimaan-tanpa-ed.component';

describe('ViewPenerimaanTanpaEdComponent', () => {
  let component: ViewPenerimaanTanpaEdComponent;
  let fixture: ComponentFixture<ViewPenerimaanTanpaEdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPenerimaanTanpaEdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPenerimaanTanpaEdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
