import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemasukanRawatJalanComponent } from './pemasukan-rawat-jalan.component';

describe('PemasukanRawatJalanComponent', () => {
  let component: PemasukanRawatJalanComponent;
  let fixture: ComponentFixture<PemasukanRawatJalanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemasukanRawatJalanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemasukanRawatJalanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
