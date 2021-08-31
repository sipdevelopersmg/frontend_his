import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupItemComponent } from './setup-item.component';

describe('SetupItemComponent', () => {
  let component: SetupItemComponent;
  let fixture: ComponentFixture<SetupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
