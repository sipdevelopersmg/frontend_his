import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupItemDetailComponent } from './setup-item-detail.component';

describe('SetupItemDetailComponent', () => {
  let component: SetupItemDetailComponent;
  let fixture: ComponentFixture<SetupItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupItemDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
