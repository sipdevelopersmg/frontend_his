import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPoliComponent } from './setup-poli.component';

describe('SetupPoliComponent', () => {
  let component: SetupPoliComponent;
  let fixture: ComponentFixture<SetupPoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPoliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
