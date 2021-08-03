import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPasienComponent } from './edit-pasien.component';

describe('EditPasienComponent', () => {
  let component: EditPasienComponent;
  let fixture: ComponentFixture<EditPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
