import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemasukanRawatDaruratComponent } from './pemasukan-rawat-darurat.component';

describe('PemasukanRawatDaruratComponent', () => {
  let component: PemasukanRawatDaruratComponent;
  let fixture: ComponentFixture<PemasukanRawatDaruratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemasukanRawatDaruratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemasukanRawatDaruratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
