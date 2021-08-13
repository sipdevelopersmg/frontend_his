import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupSpesialiasiDokterComponent } from './setup-spesialiasi-dokter.component';

describe('SetupSpesialiasiDokterComponent', () => {
  let component: SetupSpesialiasiDokterComponent;
  let fixture: ComponentFixture<SetupSpesialiasiDokterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupSpesialiasiDokterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupSpesialiasiDokterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
