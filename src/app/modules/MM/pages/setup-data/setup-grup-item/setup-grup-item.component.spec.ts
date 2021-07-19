import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupGrupItemComponent } from './setup-grup-item.component';

describe('SetupGrupItemComponent', () => {
  let component: SetupGrupItemComponent;
  let fixture: ComponentFixture<SetupGrupItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupGrupItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupGrupItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
