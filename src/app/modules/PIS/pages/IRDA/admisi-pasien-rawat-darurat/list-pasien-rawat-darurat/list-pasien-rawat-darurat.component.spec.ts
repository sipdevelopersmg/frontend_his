import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasienRawatDaruratComponent } from './list-pasien-rawat-darurat.component';

describe('ListPasienRawatDaruratComponent', () => {
  let component: ListPasienRawatDaruratComponent;
  let fixture: ComponentFixture<ListPasienRawatDaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasienRawatDaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasienRawatDaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
