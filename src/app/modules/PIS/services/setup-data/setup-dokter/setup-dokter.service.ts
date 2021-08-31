import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
import { DokterModel, IGetAllDokterModel, GetAllDokterModel, GetByIdDokterModel, IPersonDokterSudahAdaModel, PostSavePendaftaranDokterBaruModel, PostSavePendaftaranDokterPersonSudahAdaModel, PostUploadFotoPersonDokterModel, PutUpdateDokterModel, IPutDetailDokterModel } from '../../../models/setup-data/setup-dokter.model';
import { AgamaService } from '../agama/agama.service';
import { JenisIdentitasService } from '../jenis-identitas/jenis-identitas.service';
import { MaritalStatusService } from '../marital-status/marital-status.service';
import { SetupBahasaService } from '../setup-bahasa/setup-bahasa.service';
import { SetupEducationService } from '../setup-education/setup-education.service';
import { SetupEtnisService } from '../setup-etnis/setup-etnis.service';
import { SetupJobTypeService } from '../setup-job-type/setup-job-type.service';
import { SetupKebangsaanService } from '../setup-kebangsaan/setup-kebangsaan.service';
import { SetupKecamatanService } from '../setup-wilayah/setup-kecamatan.service';
import { SetupKotaService } from '../setup-wilayah/setup-kota.service';
import { SetupProvinsiService } from '../setup-wilayah/setup-provinsi.service';
import { SetupSpesialisasiDokterService } from '../setup-spesialisasi-dokter/setup-spesialisasi-dokter.service';
import { SetupSmfDokterService } from '../setup-smf-dokter/setup-smf-dokter.service';
import { SetupStatusDokterService } from '../setup-status-dokter/setup-status-dokter.service';
import * as API_CONFIG from '../../../../../api';

@Injectable({
    providedIn: 'root'
})
export class SetupDokterService {

    API_DOKTER = API_CONFIG.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER;

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
     * @SpesialisasiDokterSubject Digunakan untuk mengisi value pada Dropdown Spesialisasi Dokter
     * @Observable Dapat disubscribe
    */
    public SpesialisasiDokterSubject = new BehaviorSubject([]);

    /**
     * @SmfDokterSubject Digunakan untuk mengisi value pada Dropdown Smf Dokter
     * @Observable Dapat disubscribe
    */
    public SmfDokterSubject = new BehaviorSubject([]);

    /**
     * @StatusDokterSubject Digunakan untuk mengisi value pada Dropdown Status Dokter
     * @Observable Dapat disubscribe
    */
    public StatusDokterSubject = new BehaviorSubject([]);

    private GridDaftarDokter = new BehaviorSubject([]);
    public GridDaftarDokter$ = this.GridDaftarDokter.asObservable();

    constructor(
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
        private agamaService: AgamaService,
        private setupKotaService: SetupKotaService,
        private setupEtnisService: SetupEtnisService,
        private setupBahasaService: SetupBahasaService,
        private setupJobTypeService: SetupJobTypeService,
        private setupProvinsiService: SetupProvinsiService,
        private maritalStatusService: MaritalStatusService,
        private setupEducationService: SetupEducationService,
        private jenisIdentitasService: JenisIdentitasService,
        private setupKecamatanService: SetupKecamatanService,
        private setupKebangsaanService: SetupKebangsaanService,
        private setupSmfDokterService: SetupSmfDokterService,
        private setupStatusDokterService: SetupStatusDokterService,
        private setupSpesialisasiDokterService: SetupSpesialisasiDokterService,
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

        this.setupSpesialisasiDokterService.onGetAll().subscribe((result) => {
            this.SpesialisasiDokterSubject.next(result.data);
        });

        this.setupSmfDokterService.onGetAll().subscribe((result) => {
            this.SmfDokterSubject.next(result.data);
        });

        this.setupStatusDokterService.onGetAll().subscribe((result) => {
            this.StatusDokterSubject.next(result.data);
        });
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
        return this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_PERSON_BY_NO_IDENTITAS + NoIdentitas)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onSaveSetupDokter Method Obervable untuk menyimpan Setup Dokter
     * @param Dokter DokterModel
    */
    onSaveSetupDokter(Dokter: DokterModel): Observable<PostSavePendaftaranDokterBaruModel> {
        return this.httpOperationService.defaultPostRequest(this.API_DOKTER.POST_SAVE_SETUP_DOKTER, Dokter)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onUploadFotoDokter Method Obervable untuk mengupload Foto Dokter
     * @param id_person: number, form_file: string
    */
    onUploadFotoDokter(Data: FormData): Observable<PostUploadFotoPersonDokterModel> {
        return this.httpOperationService.defaultUploadFileRequest(this.API_DOKTER.POST_UPLOAD_FOTO_DOKTER, Data)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onGetPersonDokterDetailByPersonId Method Obervable untuk mendapatkan Person Detail
     * @param id_person: number
    */
    onGetPersonDokterDetailByPersonId(PersonId: number): Observable<GetByIdDokterModel> {
        return this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_PERSON_DETAIL_BY_PERSON_ID + PersonId)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    /**
     * @onSavePendaftaranDokterPersonSudahAda Method Obervable untuk menyimpan Pendaftaran Dokter Person Sudah Ada
     * @param Person IPersonSudahAdaModel
    */
    onSavePendaftaranDokterPersonSudahAda(Person: IPersonDokterSudahAdaModel): Observable<PostSavePendaftaranDokterPersonSudahAdaModel> {
        return this.httpOperationService.defaultPostRequest(
            this.API_DOKTER.POST_PENDAFTARAN_DOKTER_PERSON_SUDAH_ADA, Person
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * @onGetAllDokter Method Obervable untuk Get All Dokter
    */
    onGetAllDokter(): void {
        this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_ALL_DOKTER)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            ).subscribe((result: GetAllDokterModel) => {
                if (result) {
                    this.GridDaftarDokter.next(result.data);
                }
            });
    }

    /**
     * @onDeleteDokter Method Obervable untuk Mengubah Status Active Dokter
    */
    onDeleteDokter(id_dokter: number, is_active: boolean): Observable<any> {
        return this.httpOperationService.defaultPutRequest(
            this.API_DOKTER.PUT_UPDATE_STATUS_ACTIVE_DOKTER,
            {
                id_dokter: id_dokter,
                is_active: is_active
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

    /**
     * @onUpdateDokter Method Obervable untuk Mengubah Detail Dokter
    */
    onUpdateDokter(DataDokter: IPutDetailDokterModel): Observable<PutUpdateDokterModel> {
        return this.httpOperationService.defaultPutRequest(
            this.API_DOKTER.PUT_UPDATE_DOKTER, DataDokter
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        );
    }

}
