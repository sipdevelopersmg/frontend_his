(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[904],{

/***/ 9679:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPoliService": () => (/* binding */ SetupPoliService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _api_BILLING__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/BILLING */ 35877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);





class SetupPoliService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API_POLI = _api_BILLING__WEBPACK_IMPORTED_MODULE_0__.API_BILLING.SETUP_DATA.SETUP_POLI;
    }
    /**
     * Service Untuk Menampilkan Semua Data Poli
     * @onGetAll Observable<GetAllGrupTarifModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_ALL_POLI);
    }
    /**
     * Service Untuk Menampilkan Data Poli
     * @onGetById Observable<GetByIdPoliModel>
    */
    onGetById(PoliId) {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_POLI_BY_ID + PoliId);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostInsertPoliModel>
     * @param PoliModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API_POLI.POST_SAVE_POLI, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdatePoliModel>
     * @param PoliModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API_POLI.PUT_UPDATE_POLI, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Mengedit Data
     * @onPutEdit Observable<PutUpdatePoliModel>
     * @param PoliModel
    */
    onPutStatusEdit(id_poli, is_active) {
        return this.httpOperationService.defaultPutRequest(this.API_POLI.PUT_UPDATE_STATUS_POLI, {
            id_poli: id_poli,
            is_active: is_active
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Menghapus Data
     * @onDelete Observable<DeletePoliModel>
     * @param PoliId
    */
    onDelete(PoliId) {
        return this.httpOperationService.defaultDeleteRequest(this.API_POLI.DELETE_POLI_BY_ID + PoliId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
        }));
    }
    /**
    * Service Untuk Menampilkan Data Poli Per Ruangan
    * @onGetAllByIdJenisRuangan Observable<GetByIdJenisRuanganModel>
   */
    onGetAllByIdJenisRuangan(JenisRuanganId) {
        return this.httpOperationService.defaultGetRequest(this.API_POLI.GET_ALL_BY_ID_JENIS_RUANGAN + JenisRuanganId);
    }
    onGetAllForLookupRawatInap(Data) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP, Data);
    }
}
SetupPoliService.ɵfac = function SetupPoliService_Factory(t) { return new (t || SetupPoliService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupPoliService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupPoliService, factory: SetupPoliService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18614:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupDokterService": () => (/* binding */ SetupDokterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api */ 39354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var _agama_agama_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../agama/agama.service */ 73088);
/* harmony import */ var _setup_wilayah_setup_kota_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setup-wilayah/setup-kota.service */ 65105);
/* harmony import */ var _setup_etnis_setup_etnis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setup-etnis/setup-etnis.service */ 50147);
/* harmony import */ var _setup_bahasa_setup_bahasa_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../setup-bahasa/setup-bahasa.service */ 18484);
/* harmony import */ var _setup_job_type_setup_job_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../setup-job-type/setup-job-type.service */ 67144);
/* harmony import */ var _setup_wilayah_setup_provinsi_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../setup-wilayah/setup-provinsi.service */ 86237);
/* harmony import */ var _marital_status_marital_status_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../marital-status/marital-status.service */ 34225);
/* harmony import */ var _setup_education_setup_education_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../setup-education/setup-education.service */ 79134);
/* harmony import */ var _jenis_identitas_jenis_identitas_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jenis-identitas/jenis-identitas.service */ 1817);
/* harmony import */ var _setup_wilayah_setup_kecamatan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../setup-wilayah/setup-kecamatan.service */ 14331);
/* harmony import */ var _setup_kebangsaan_setup_kebangsaan_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../setup-kebangsaan/setup-kebangsaan.service */ 86968);
/* harmony import */ var _setup_smf_dokter_setup_smf_dokter_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../setup-smf-dokter/setup-smf-dokter.service */ 60082);
/* harmony import */ var _setup_status_dokter_setup_status_dokter_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../setup-status-dokter/setup-status-dokter.service */ 47670);
/* harmony import */ var _setup_spesialisasi_dokter_setup_spesialisasi_dokter_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../setup-spesialisasi-dokter/setup-spesialisasi-dokter.service */ 92958);




















class SetupDokterService {
    constructor(notificationService, httpOperationService, agamaService, setupKotaService, setupEtnisService, setupBahasaService, setupJobTypeService, setupProvinsiService, maritalStatusService, setupEducationService, jenisIdentitasService, setupKecamatanService, setupKebangsaanService, setupSmfDokterService, setupStatusDokterService, setupSpesialisasiDokterService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.agamaService = agamaService;
        this.setupKotaService = setupKotaService;
        this.setupEtnisService = setupEtnisService;
        this.setupBahasaService = setupBahasaService;
        this.setupJobTypeService = setupJobTypeService;
        this.setupProvinsiService = setupProvinsiService;
        this.maritalStatusService = maritalStatusService;
        this.setupEducationService = setupEducationService;
        this.jenisIdentitasService = jenisIdentitasService;
        this.setupKecamatanService = setupKecamatanService;
        this.setupKebangsaanService = setupKebangsaanService;
        this.setupSmfDokterService = setupSmfDokterService;
        this.setupStatusDokterService = setupStatusDokterService;
        this.setupSpesialisasiDokterService = setupSpesialisasiDokterService;
        this.API_DOKTER = _api__WEBPACK_IMPORTED_MODULE_0__.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_DOKTER;
        /**
         * @JenisIdentitasWnaSubject Digunakan untuk mengisi value pada Dropdown Jenis Identitas WNA
         * @Observable Dapat disubscribe
        */
        this.JenisIdentitasWnaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @JenisIdentitasWniSubject Digunakan untuk mengisi value pada Dropdown Jenis Identitas WNI
         * @Observable Dapat disubscribe
        */
        this.JenisIdentitasWniSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @MaritalStatusSubject Digunakan untuk mengisi value pada Dropdown Marital Status
         * @Observable Dapat disubscribe
        */
        this.MaritalStatusSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @AgamaSubject Digunakan untuk mengisi value pada Dropdown Agama
         * @Observable Dapat disubscribe
        */
        this.AgamaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @KebangsaanSubject Digunakan untuk mengisi value pada Dropdown Kebangsaan
         * @Observable Dapat disubscribe
        */
        this.KebangsaanSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @EtnisSubject Digunakan untuk mengisi value pada Dropdown Etnis
         * @Observable Dapat disubscribe
        */
        this.EtnisSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @BahasaSubject Digunakan untuk mengisi value pada Dropdown Bahasa
         * @Observable Dapat disubscribe
        */
        this.BahasaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @EducationSubject Digunakan untuk mengisi value pada Dropdown Education
         * @Observable Dapat disubscribe
        */
        this.EducationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @JobTypeSubject Digunakan untuk mengisi value pada Dropdown Job Type
         * @Observable Dapat disubscribe
        */
        this.JobTypeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @ProvinsiSubject Digunakan untuk mengisi value pada Dropdown Provinsi
         * @Observable Dapat disubscribe
        */
        this.ProvinsiSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @KotaSubject Digunakan untuk mengisi value pada Dropdown Kota
         * @Observable Dapat disubscribe
        */
        this.KotaSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @KecamatanSubject Digunakan untuk mengisi value pada Dropdown Kecamatan
         * @Observable Dapat disubscribe
        */
        this.KecamatanSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @SpesialisasiDokterSubject Digunakan untuk mengisi value pada Dropdown Spesialisasi Dokter
         * @Observable Dapat disubscribe
        */
        this.SpesialisasiDokterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @SmfDokterSubject Digunakan untuk mengisi value pada Dropdown Smf Dokter
         * @Observable Dapat disubscribe
        */
        this.SmfDokterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        /**
         * @StatusDokterSubject Digunakan untuk mengisi value pada Dropdown Status Dokter
         * @Observable Dapat disubscribe
        */
        this.StatusDokterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        this.GridDaftarDokter = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
        this.GridDaftarDokter$ = this.GridDaftarDokter.asObservable();
    }
    /**
    * @onGetDropdownOptions Method untuk Get All Dropdown Options
    * @Keterangan Valuenya di next kedalam Behavior Subject, kemudian di View tinggal diberikan pipe | async
   */
    onGetDropdownOptions() {
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
    onGetDropdownKotaDatasourceByProvinsiId(ProvinsiId) {
        this.setupKotaService.onGetAll(ProvinsiId)
            .subscribe((result) => {
            this.KotaSubject.next(result.data);
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * @onGetDropdownKecamatanDatasourceByKotaId Method untuk Get All Kecamatan Options
     * @Keterangan Valuenya di next kedalam Behavior Subject, kemudian di View tinggal diberikan pipe | async
    */
    onGetDropdownKecamatanDatasourceByKotaId(KotaId) {
        this.setupKecamatanService.onGetAll(KotaId)
            .subscribe((result) => {
            this.KecamatanSubject.next(result.data);
        }, (error) => {
            console.log(error);
        });
    }
    /**
     * @onCheckPersonByNoIdentitas Observable untuk check apakah No. Identitas Sudah Terdaftar
     * @param NoIdentitas string
     */
    onCheckPersonByNoIdentitas(NoIdentitas) {
        return this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_PERSON_BY_NO_IDENTITAS + NoIdentitas)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onSaveSetupDokter Method Obervable untuk menyimpan Setup Dokter
     * @param Dokter DokterModel
    */
    onSaveSetupDokter(Dokter) {
        return this.httpOperationService.defaultPostRequest(this.API_DOKTER.POST_SAVE_SETUP_DOKTER, Dokter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onUploadFotoDokter Method Obervable untuk mengupload Foto Dokter
     * @param id_person: number, form_file: string
    */
    onUploadFotoDokter(Data) {
        return this.httpOperationService.defaultUploadFileRequest(this.API_DOKTER.POST_UPLOAD_FOTO_DOKTER, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onGetPersonDokterDetailByPersonId Method Obervable untuk mendapatkan Person Detail
     * @param id_person: number
    */
    onGetPersonDokterDetailByPersonId(PersonId) {
        return this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_PERSON_DETAIL_BY_PERSON_ID + PersonId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onSavePendaftaranDokterPersonSudahAda Method Obervable untuk menyimpan Pendaftaran Dokter Person Sudah Ada
     * @param Person IPersonSudahAdaModel
    */
    onSavePendaftaranDokterPersonSudahAda(Person) {
        return this.httpOperationService.defaultPostRequest(this.API_DOKTER.POST_PENDAFTARAN_DOKTER_PERSON_SUDAH_ADA, Person).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onGetAllDokter Method Obervable untuk Get All Dokter
    */
    onGetAllDokter() {
        this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_ALL_DOKTER)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })).subscribe((result) => {
            if (result) {
                this.GridDaftarDokter.next(result.data);
            }
        });
    }
    /**
     * @onDeleteDokter Method Obervable untuk Mengubah Status Active Dokter
    */
    onDeleteDokter(id_dokter, is_active) {
        return this.httpOperationService.defaultPutRequest(this.API_DOKTER.PUT_UPDATE_STATUS_ACTIVE_DOKTER, {
            id_dokter: id_dokter,
            is_active: is_active
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * @onUpdateDokter Method Obervable untuk Mengubah Detail Dokter
    */
    onUpdateDokter(DataDokter) {
        return this.httpOperationService.defaultPutRequest(this.API_DOKTER.PUT_UPDATE_DOKTER, DataDokter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetDokterByDokterName(Name) {
        return this.httpOperationService.defaultGetRequest(this.API_DOKTER.GET_ALL_DOKTER)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.map)((result) => {
            console.log(Name);
            let cek = result.data.filter((item) => { return item.full_name == Name; })[0];
            console.log(cek);
            return result;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
SetupDokterService.ɵfac = function SetupDokterService_Factory(t) { return new (t || SetupDokterService)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_agama_agama_service__WEBPACK_IMPORTED_MODULE_3__.AgamaService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_wilayah_setup_kota_service__WEBPACK_IMPORTED_MODULE_4__.SetupKotaService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_etnis_setup_etnis_service__WEBPACK_IMPORTED_MODULE_5__.SetupEtnisService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_bahasa_setup_bahasa_service__WEBPACK_IMPORTED_MODULE_6__.SetupBahasaService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_job_type_setup_job_type_service__WEBPACK_IMPORTED_MODULE_7__.SetupJobTypeService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_wilayah_setup_provinsi_service__WEBPACK_IMPORTED_MODULE_8__.SetupProvinsiService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_marital_status_marital_status_service__WEBPACK_IMPORTED_MODULE_9__.MaritalStatusService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_education_setup_education_service__WEBPACK_IMPORTED_MODULE_10__.SetupEducationService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_jenis_identitas_jenis_identitas_service__WEBPACK_IMPORTED_MODULE_11__.JenisIdentitasService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_wilayah_setup_kecamatan_service__WEBPACK_IMPORTED_MODULE_12__.SetupKecamatanService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_kebangsaan_setup_kebangsaan_service__WEBPACK_IMPORTED_MODULE_13__.SetupKebangsaanService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_smf_dokter_setup_smf_dokter_service__WEBPACK_IMPORTED_MODULE_14__.SetupSmfDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_status_dokter_setup_status_dokter_service__WEBPACK_IMPORTED_MODULE_15__.SetupStatusDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_setup_spesialisasi_dokter_setup_spesialisasi_dokter_service__WEBPACK_IMPORTED_MODULE_16__.SetupSpesialisasiDokterService)); };
SetupDokterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjectable"]({ token: SetupDokterService, factory: SetupDokterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60082:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/setup-data/setup-smf-dokter/setup-smf-dokter.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupSmfDokterService": () => (/* binding */ SetupSmfDokterService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api */ 39354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);





class SetupSmfDokterService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API_SMF_DOKTER = _api__WEBPACK_IMPORTED_MODULE_0__.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_SMF_DOKTER;
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSmfModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API_SMF_DOKTER.GET_ALL_SETUP_SMF);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveSmfModel>
     * @param SmfModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API_SMF_DOKTER.POST_SAVE_SETUP_SMF, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateSmfModel>
     * @param SmfModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API_SMF_DOKTER.PUT_UPDATE_SETUP_SMF, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteSmfModel>
     * @param SmfId
    */
    onDelete(SmfId) {
        return this.httpOperationService.defaultDeleteRequest(this.API_SMF_DOKTER.DELETE_SETUP_SMF + SmfId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
        }));
    }
}
SetupSmfDokterService.ɵfac = function SetupSmfDokterService_Factory(t) { return new (t || SetupSmfDokterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupSmfDokterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupSmfDokterService, factory: SetupSmfDokterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92958:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/setup-data/setup-spesialisasi-dokter/setup-spesialisasi-dokter.service.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupSpesialisasiDokterService": () => (/* binding */ SetupSpesialisasiDokterService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api */ 39354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);





class SetupSpesialisasiDokterService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API_SPESIALISASI_DOKTER = _api__WEBPACK_IMPORTED_MODULE_0__.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_SPESIALISASI_DOKTER;
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSpesialisasiDokterModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API_SPESIALISASI_DOKTER.GET_ALL_SETUP_SPESIALISASI_DOKTER);
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllSpesialisasiDokterModel>
    */
    onGetById(SpesialisasiId) {
        return this.httpOperationService.defaultGetRequest(this.API_SPESIALISASI_DOKTER.GET_BY_ID_SETUP_SPESIALISASI_DOKTER + SpesialisasiId);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveSmfModel>
     * @param SmfModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API_SPESIALISASI_DOKTER.POST_SAVE_SETUP_SPESIALISASI_DOKTER, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateSpesialisasiDokterModel>
     * @param SpesialisasiDokterModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API_SPESIALISASI_DOKTER.PUT_UPDATE_SETUP_SPESIALISASI_DOKTER, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteSpesialisasiDokterModel>
     * @param SpesialisasiDokterId
    */
    onDelete(SpesialisasiDokterId) {
        return this.httpOperationService.defaultDeleteRequest(this.API_SPESIALISASI_DOKTER.DELETE_SETUP_SPESIALISASI_DOKTER + SpesialisasiDokterId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
        }));
    }
}
SetupSpesialisasiDokterService.ɵfac = function SetupSpesialisasiDokterService_Factory(t) { return new (t || SetupSpesialisasiDokterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupSpesialisasiDokterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupSpesialisasiDokterService, factory: SetupSpesialisasiDokterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47670:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/setup-data/setup-status-dokter/setup-status-dokter.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupStatusDokterService": () => (/* binding */ SetupStatusDokterService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api */ 39354);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);





class SetupStatusDokterService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API_STATUS_DOKTER = _api__WEBPACK_IMPORTED_MODULE_0__.API.PIS.API_PIS.SETUP_DATA.API_SETUP_DATA.SETUP_STATUS_DOKTER;
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<GetAllStatusDokterModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API_STATUS_DOKTER.GET_ALL_SETUP_STATUS_DOKTER);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<PostSaveStatusDokterModel>
     * @param StatusDokterModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API_STATUS_DOKTER.POST_SAVE_SETUP_STATUS_DOKTER, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<PutUpdateStatusDokterModel>
     * @param StatusDokterModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API_STATUS_DOKTER.PUT_UPDATE_SETUP_STATUS_DOKTER, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onDelete Observable<DeleteStatusDokterModel>
     * @param StatusDokterId
    */
    onDelete(StatusDokterId) {
        return this.httpOperationService.defaultDeleteRequest(this.API_STATUS_DOKTER.DELETE_SETUP_STATUS_DOKTER + StatusDokterId)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
        }));
    }
}
SetupStatusDokterService.ɵfac = function SetupStatusDokterService_Factory(t) { return new (t || SetupStatusDokterService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupStatusDokterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupStatusDokterService, factory: SetupStatusDokterService.ɵfac, providedIn: 'root' });


/***/ })

}]);