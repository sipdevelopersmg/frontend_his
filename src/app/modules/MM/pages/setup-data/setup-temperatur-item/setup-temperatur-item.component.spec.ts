import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTemperaturItemComponent } from './setup-temperatur-item.component';

describe('SetupTemperaturItemComponent', () => {
  let component: SetupTemperaturItemComponent;
  let fixture: ComponentFixture<SetupTemperaturItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTemperaturItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTemperaturItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
