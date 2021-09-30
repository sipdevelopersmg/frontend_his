import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsulComponent } from './konsul.component';

describe('KonsulComponent', () => {
  let component: KonsulComponent;
  let fixture: ComponentFixture<KonsulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonsulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
