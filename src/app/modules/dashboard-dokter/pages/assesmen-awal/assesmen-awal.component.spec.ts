import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssesmenAwalComponent } from './assesmen-awal.component';

describe('AssesmenAwalComponent', () => {
  let component: AssesmenAwalComponent;
  let fixture: ComponentFixture<AssesmenAwalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssesmenAwalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssesmenAwalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
