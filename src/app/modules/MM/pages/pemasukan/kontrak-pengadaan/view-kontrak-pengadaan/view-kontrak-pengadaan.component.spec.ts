import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKontrakPengadaanComponent } from './view-kontrak-pengadaan.component';

describe('ViewKontrakPengadaanComponent', () => {
  let component: ViewKontrakPengadaanComponent;
  let fixture: ComponentFixture<ViewKontrakPengadaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKontrakPengadaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKontrakPengadaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
