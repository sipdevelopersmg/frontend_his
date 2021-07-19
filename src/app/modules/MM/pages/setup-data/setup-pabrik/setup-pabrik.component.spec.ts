import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPabrikComponent } from './setup-pabrik.component';

describe('SetupPabrikComponent', () => {
  let component: SetupPabrikComponent;
  let fixture: ComponentFixture<SetupPabrikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPabrikComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPabrikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
