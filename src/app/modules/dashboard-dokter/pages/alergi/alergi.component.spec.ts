import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiComponent } from './alergi.component';

describe('AlergiComponent', () => {
  let component: AlergiComponent;
  let fixture: ComponentFixture<AlergiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlergiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
