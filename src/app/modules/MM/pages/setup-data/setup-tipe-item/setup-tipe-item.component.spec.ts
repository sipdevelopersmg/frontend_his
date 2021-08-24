import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupTipeItemComponent } from './setup-tipe-item.component';

describe('SetupTipeItemComponent', () => {
  let component: SetupTipeItemComponent;
  let fixture: ComponentFixture<SetupTipeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupTipeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupTipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
