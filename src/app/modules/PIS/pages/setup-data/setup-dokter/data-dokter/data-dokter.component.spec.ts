import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDokterComponent } from './data-dokter.component';

describe('DataDokterComponent', () => {
  let component: DataDokterComponent;
  let fixture: ComponentFixture<DataDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
