import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuratPerintahMondokComponent } from './surat-perintah-mondok.component';

describe('SuratPerintahMondokComponent', () => {
  let component: SuratPerintahMondokComponent;
  let fixture: ComponentFixture<SuratPerintahMondokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuratPerintahMondokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuratPerintahMondokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
