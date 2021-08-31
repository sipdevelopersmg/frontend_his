import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTipeOutletComponent } from './setup-tipe-outlet.component';

describe('SetupTipeOutletComponent', () => {
  let component: SetupTipeOutletComponent;
  let fixture: ComponentFixture<SetupTipeOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTipeOutletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTipeOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
