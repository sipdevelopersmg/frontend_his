import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasienRawatJalanComponent } from './list-pasien-rawat-jalan.component';

describe('ListPasienRawatJalanComponent', () => {
  let component: ListPasienRawatJalanComponent;
  let fixture: ComponentFixture<ListPasienRawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasienRawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasienRawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
