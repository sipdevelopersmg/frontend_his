import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTipeStockroomComponent } from './setup-tipe-stockroom.component';

describe('SetupTipeStockroomComponent', () => {
  let component: SetupTipeStockroomComponent;
  let fixture: ComponentFixture<SetupTipeStockroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTipeStockroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTipeStockroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
