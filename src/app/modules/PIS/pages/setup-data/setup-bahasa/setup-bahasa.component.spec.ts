import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBahasaComponent } from './setup-bahasa.component';

describe('SetupBahasaComponent', () => {
  let component: SetupBahasaComponent;
  let fixture: ComponentFixture<SetupBahasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBahasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBahasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
