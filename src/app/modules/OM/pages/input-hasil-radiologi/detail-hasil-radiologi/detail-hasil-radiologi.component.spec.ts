import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHasilRadiologiComponent } from './detail-hasil-radiologi.component';

describe('DetailHasilRadiologiComponent', () => {
  let component: DetailHasilRadiologiComponent;
  let fixture: ComponentFixture<DetailHasilRadiologiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailHasilRadiologiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailHasilRadiologiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
