import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPenanggungJawabRakStorageComponent } from './setup-penanggung-jawab-rak-storage.component';

describe('SetupPenanggungJawabRakStorageComponent', () => {
  let component: SetupPenanggungJawabRakStorageComponent;
  let fixture: ComponentFixture<SetupPenanggungJawabRakStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPenanggungJawabRakStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPenanggungJawabRakStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
