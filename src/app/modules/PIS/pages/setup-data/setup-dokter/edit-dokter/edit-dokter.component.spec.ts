import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDokterComponent } from './edit-dokter.component';

describe('EditDokterComponent', () => {
  let component: EditDokterComponent;
  let fixture: ComponentFixture<EditDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
