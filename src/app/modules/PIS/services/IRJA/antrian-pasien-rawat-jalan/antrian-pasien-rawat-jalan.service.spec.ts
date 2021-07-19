import { TestBed } from '@angular/core/testing';
import { AntrianPasienRawatJalanService } from './antrian-pasien-rawat-jalan.service';


describe('AntrianPasienRawatJalanService', () => {
    let service: AntrianPasienRawatJalanService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AntrianPasienRawatJalanService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
