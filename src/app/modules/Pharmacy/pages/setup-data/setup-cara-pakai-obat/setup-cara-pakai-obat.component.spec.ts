import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCaraPakaiObatComponent } from './setup-cara-pakai-obat.component';

describe('SetupCaraPakaiObatComponent', () => {
  let component: SetupCaraPakaiObatComponent;
  let fixture: ComponentFixture<SetupCaraPakaiObatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupCaraPakaiObatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCaraPakaiObatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
