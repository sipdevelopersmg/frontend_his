import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKontrakPengadaanComponent } from './list-kontrak-pengadaan.component';

describe('ListKontrakPengadaanComponent', () => {
  let component: ListKontrakPengadaanComponent;
  let fixture: ComponentFixture<ListKontrakPengadaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKontrakPengadaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKontrakPengadaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
