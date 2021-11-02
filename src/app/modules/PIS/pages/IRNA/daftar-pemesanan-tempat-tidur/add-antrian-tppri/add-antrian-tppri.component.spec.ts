import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntrianTppriComponent } from './add-antrian-tppri.component';

describe('AddAntrianTppriComponent', () => {
  let component: AddAntrianTppriComponent;
  let fixture: ComponentFixture<AddAntrianTppriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAntrianTppriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAntrianTppriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
