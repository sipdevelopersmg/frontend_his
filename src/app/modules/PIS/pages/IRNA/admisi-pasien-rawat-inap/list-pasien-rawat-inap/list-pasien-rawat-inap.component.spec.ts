import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPasienRawatInapComponent } from './list-pasien-rawat-inap.component';

describe('ListPasienRawatInapComponent', () => {
  let component: ListPasienRawatInapComponent;
  let fixture: ComponentFixture<ListPasienRawatInapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPasienRawatInapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPasienRawatInapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
