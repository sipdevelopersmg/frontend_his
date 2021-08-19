import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { PersonModel, PostSavePendaftaranPasienBaruModel } from '../../../models/IRJA/pendaftaran_pasien_baru.model';
import { AgamaService } from '../../setup-data/agama/agama.service';
import { JenisIdentitasService } from '../../setup-data/jenis-identitas/jenis-identitas.service';
import { MaritalStatusService } from '../../setup-data/marital-status/marital-status.service';
import { SetupBahasaService } from '../../setup-data/setup-bahasa/setup-bahasa.service';
import { SetupDebiturService } from '../../setup-data/setup-debitur/setup-debitur.service';
import { SetupEducationService } from '../../setup-data/setup-education/setup-education.service';
import { SetupEtnisService } from '../../setup-data/setup-etnis/setup-etnis.service';
import { SetupJobTypeService } from '../../setup-data/setup-job-type/setup-job-type.service';
import { SetupKebangsaanService } from '../../setup-data/setup-kebangsaan/setup-kebangsaan.service';
import { SetupKecamatanService } from '../../setup-data/setup-wilayah/setup-kecamatan.service';
import { SetupKotaService } from '../../setup-data/setup-wilayah/setup-kota.service';
import { SetupProvinsiService } from '../../setup-data/setup-wilayah/setup-provinsi.service';
import * as API_CONFIG from '../../../../../api';

@Injectable({
    providedIn: 'root'
})
export class PendaftaranPasienBaruService {

    API_PENDAFTARAN_PASIEN_BARU_IRJA = API_CONFIG.API.PIS.API_PIS.IRJA.IRJA.PENDAFTARAN_PASIEN_BARU;

    /**
     * @JenisIdentitasWnaSubject Digunakan untuk mengisi value pada Dropdown Jenis Identitas WNA 
     * @Observable Dapat disubscribe
    */
    public JenisIdentitasWnaSubject = new BehaviorSubject([]);

    /**
     * @JenisIdentitasWniSubject Digunakan untuk mengisi value pada Dropdown Jenis Identitas WNI 
     * @Observable Dapat disubscribe
    */
    public JenisIdentitasWniSubject = new BehaviorSubject([]);

    /**
     * @MaritalStatusSubject Digunakan untuk mengisi value pada Dropdown Marital Status
     * @Observable Dapat disubscribe
    */
    public MaritalStatusSubject = new BehaviorSubject([]);

    /**
     * @AgamaSubject Digunakan untuk mengisi value pada Dropdown Agama
     * @Observable Dapat disubscribe
    */
    public AgamaSubject = new BehaviorSubject([]);

    /**
     * @KebangsaanSubject Digunakan untuk mengisi value pada Dropdown Kebangsaan
     * @Observable Dapat disubscribe
    */
    public KebangsaanSubject = new BehaviorSubject([]);

    /**
     * @EtnisSubject Digunakan untuk mengisi value pada Dropdown Etnis
     * @Observable Dapat disubscribe
    */
    public EtnisSubject = new BehaviorSubject([]);

    /**
     * @BahasaSubject Digunakan untuk mengisi value pada Dropdown Bahasa
     * @Observable Dapat disubscribe
    */
    public BahasaSubject = new BehaviorSubject([]);

    /**
     * @EducationSubject Digunakan untuk mengisi value pada Dropdown Education
     * @Observable Dapat disubscribe
    */
    public EducationSubject = new BehaviorSubject([]);

    /**
     * @JobTypeSubject Digunakan untuk mengisi value pada Dropdown Job Type
     * @Observable Dapat disubscribe
    */
    public JobTypeSubject = new BehaviorSubject([]);

    /**
     * @ProvinsiSubject Digunakan untuk mengisi value pada Dropdown Provinsi
     * @Observable Dapat disubscribe
    */
    public ProvinsiSubject = new BehaviorSubject([]);

    /**
     * @KotaSubject Digunakan untuk mengisi value pada Dropdown Kota
     * @Observable Dapat disubscribe
    */
    public KotaSubject = new BehaviorSubject([]);

    /**
     * @KecamatanSubject Digunakan untuk mengisi value pada Dropdown Kecamatan
     * @Observable Dapat disubscribe
    */
    public KecamatanSubject = new BehaviorSubject([]);

    /**
     * @DebiturSubject Digunakan untuk mengisi value pada Dropdown Debitur
     * @Observable Dapat disubscribe
    */
    public DebiturSubject = new BehaviorSubject([]);

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
        private agamaService: AgamaService,
        private setupKotaService: SetupKotaService,
        private setupEtnisService: SetupEtnisService,
        private setupBahasaService: SetupBahasaService,
        private setupJobTypeService: SetupJobTypeService,
        private setupDebiturService: SetupDebiturService,
        private setupProvinsiService: SetupProvinsiService,
        private maritalStatusService: MaritalStatusService,
        private setupEducationService: SetupEducationService,
        private jenisIdentitasService: JenisIdentitasService,
        private setupKecamatanService: SetupKecamatanService,
        private setupKebangsaanService: SetupKebangsaanService,
    ) { }

    /**
     * @onGetDropdownOptions Method untuk Get All Dropdown Options
     * @Keterangan Valuenya di next kedalam Behavior Subject, kemudian di View tinggal diberikan pipe | async
    */
    onGetDropdownOptions(): void {
        this.jenisIdentitasService.onGetAll().subscribe((result) => {
            this.JenisIdentitasWniSubject.next(result.data['wni']);
            this.JenisIdentitasWnaSubject.next(result.data['wna']);
        });

        this.maritalStatusService.onGetAll().subscribe((result) => {
            this.MaritalStatusSubject.next(result.data);
        });

        this.agamaService.onGetAll().subscribe((result) => {
            this.AgamaSubject.next(result.data);
        });

        this.setupKebangsaanService.onGetAll().subscribe((result) => {
            this.KebangsaanSubject.next(result.data);
        });

        this.setupEtnisService.onGetAll().subscribe((result) => {
            this.EtnisSubject.next(result.data);
        });

        this.setupBahasaService.onGetAllBahasa().subscribe((result) => {
            this.BahasaSubject.next(result.data);
        });

        this.setupEducationService.onGetAll().subscribe((result) => {
            this.EducationSubject.next(result.data);
        });

        this.setupJobTypeService.onGetAll().subscribe((result) => {
            this.JobTypeSubject.next(result.data);
        });

        this.setupProvinsiService.onGetAll().subscribe((result) => {
            this.ProvinsiSubject.next(result.data);
        });

        this.setupDebiturService.onGetAll().subscribe((result) => {
            this.DebiturSubject.next(result.data);
        })
    }

    /**
     * @onGetDropdownKotaDatasourceByProvinsiId Method untuk Get All Kota Options
     * @Keterangan Valuenya di next kedalam Behavior Subject, kemudian di View tinggal diberikan pipe | async
    */
    onGetDropdownKotaDatasourceByProvinsiId(ProvinsiId: string): void {
        this.setupKotaService.onGetAll(ProvinsiId)
            .subscribe(
                (result) => {
                    this.KotaSubject.next(result.data);
                }, (error) => {
                    console.log(error);
                });
    }

    /**
     * @onGetDropdownKecamatanDatasourceByKotaId Method untuk Get All Kecamatan Options
     * @Keterangan Valuenya di next kedalam Behavior Subject, kemudian di View tinggal diberikan pipe | async
    */
    onGetDropdownKecamatanDatasourceByKotaId(KotaId: string): void {
        this.setupKecamatanService.onGetAll(KotaId)
            .subscribe(
                (result) => {
                    this.KecamatanSubject.next(result.data);
                }, (error) => {
                    console.log(error);
                });
    }

    /**
     * @onCheckPersonByNoIdentitas Observable untuk check apakah No. Identitas Sudah Terdaftar
     * @param NoIdentitas string
     */
    onCheckPersonByNoIdentitas(NoIdentitas: string): Observable<any> {
        return this.httpOperationService.defaultGetRequest(this.API_PENDAFTARAN_PASIEN_BARU_IRJA.GET_PERSON_BY_NO_IDENTITAS + NoIdentitas)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onSavePendaftaranPasienBaruIrja Method Obervable untuk menyimpan Pendaftaran Pasien Baru IRJA
     * @param Person PersonModel
    */
    onSavePendaftaranPasienBaruIrja(Person: PersonModel): Observable<PostSavePendaftaranPasienBaruModel> {
        return this.httpOperationService.defaultPostRequest(this.API_PENDAFTARAN_PASIEN_BARU_IRJA.POST_PENDAFTARAN_PASIEN_BARU, Person)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }
}