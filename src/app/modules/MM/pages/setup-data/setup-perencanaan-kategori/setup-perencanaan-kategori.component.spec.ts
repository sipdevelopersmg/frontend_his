import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPerencanaanKategoriComponent } from './setup-perencanaan-kategori.component';

describe('SetupPerencanaanKategoriComponent', () => {
  let component: SetupPerencanaanKategoriComponent;
  let fixture: ComponentFixture<SetupPerencanaanKategoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPerencanaanKategoriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPerencanaanKategoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
