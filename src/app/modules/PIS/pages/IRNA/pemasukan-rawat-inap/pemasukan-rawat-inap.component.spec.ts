import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemasukanRawatInapComponent } from './pemasukan-rawat-inap.component';

describe('PemasukanRawatInapComponent', () => {
  let component: PemasukanRawatInapComponent;
  let fixture: ComponentFixture<PemasukanRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemasukanRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemasukanRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
