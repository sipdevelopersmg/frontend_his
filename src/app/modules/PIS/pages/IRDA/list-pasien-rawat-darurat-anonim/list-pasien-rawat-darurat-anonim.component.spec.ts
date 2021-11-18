import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasienRawatDaruratAnonimComponent } from './list-pasien-rawat-darurat-anonim.component';

describe('ListPasienRawatDaruratAnonimComponent', () => {
  let component: ListPasienRawatDaruratAnonimComponent;
  let fixture: ComponentFixture<ListPasienRawatDaruratAnonimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasienRawatDaruratAnonimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasienRawatDaruratAnonimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
