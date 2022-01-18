import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { SocketFarmasi } from '../../../pharmacy.module';

import { AntrianFarmasiComponent } from './antrian-farmasi.component';

describe('AntrianFarmasiComponent', () => {
    let component: AntrianFarmasiComponent;
    let fixture: ComponentFixture<AntrianFarmasiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AntrianFarmasiComponent],
            imports: [SocketIoModule],
            providers: [SocketFarmasi]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AntrianFarmasiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
