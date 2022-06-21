import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPasienComponent } from './detail-pasien.component';

describe('DetailPasienComponent', () => {
  let component: DetailPasienComponent;
  let fixture: ComponentFixture<DetailPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
