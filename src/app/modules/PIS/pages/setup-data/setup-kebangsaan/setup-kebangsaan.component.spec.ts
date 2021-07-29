import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupKebangsaanComponent } from './setup-kebangsaan.component';

describe('SetupKebangsaanComponent', () => {
  let component: SetupKebangsaanComponent;
  let fixture: ComponentFixture<SetupKebangsaanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupKebangsaanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupKebangsaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
