import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntrianPemesananTempatTidurComponent } from './antrian-pemesanan-tempat-tidur.component';

describe('AntrianPemesananTempatTidurComponent', () => {
  let component: AntrianPemesananTempatTidurComponent;
  let fixture: ComponentFixture<AntrianPemesananTempatTidurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntrianPemesananTempatTidurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntrianPemesananTempatTidurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
