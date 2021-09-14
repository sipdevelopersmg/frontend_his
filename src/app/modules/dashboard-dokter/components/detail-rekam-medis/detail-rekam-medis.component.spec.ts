import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRekamMedisComponent } from './detail-rekam-medis.component';

describe('DetailRekamMedisComponent', () => {
  let component: DetailRekamMedisComponent;
  let fixture: ComponentFixture<DetailRekamMedisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRekamMedisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRekamMedisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
