import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaDokterComponent } from './beranda-dokter.component';

describe('BerandaDokterComponent', () => {
  let component: BerandaDokterComponent;
  let fixture: ComponentFixture<BerandaDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerandaDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerandaDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
