import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupAsalRujukanComponent } from './setup-asal-rujukan.component';

describe('SetupAsalRujukanComponent', () => {
  let component: SetupAsalRujukanComponent;
  let fixture: ComponentFixture<SetupAsalRujukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupAsalRujukanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupAsalRujukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
