(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[592],{

/***/ 30013:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmisiPasienRawatInapService": () => (/* binding */ AdmisiPasienRawatInapService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _api_PIS_IRNA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/PIS/IRNA */ 44097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);





class AdmisiPasienRawatInapService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API_CONFIG = _api_PIS_IRNA__WEBPACK_IMPORTED_MODULE_0__.IRNA.ADMISI_PASIEN_RAWAT_INAP;
    }
    /**
     * onGetAllAdmisiPasienRawatInap
    */
    onGetAllAdmisiPasienRawatInap(parameter) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_ALL_ADMISI_PASIEN_IRNA, parameter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetAdmisiPasienRawatInapByIdRegister(RegisterId) {
        return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ADMISI_PASIEN_IRNA_BY_ID_REGISTER + RegisterId);
    }
    /**
     * onPostAdmisiRawatJalanTanpaPenjamin
    */
    onPostAdmisiRawatJalanTanpaPenjaminTPPRI(parameter) {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_NON_PENJAMIN_TPPRI, parameter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * onPostAdmisiRawatJalanWithPenjaminTPPRI
    */
    onPostAdmisiRawatJalanWithPenjaminTPPRI(parameter) {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN_TPPRI, parameter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * onPostAdmisiRawatJalanTanpaPenjamin
    */
    onPostAdmisiRawatJalanTanpaPenjamin(parameter) {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_NON_PENJAMIN, parameter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * onPostAdmisiRawatJalanWithPenjaminTPPRI
    */
    onPostAdmisiRawatJalanWithPenjamin(parameter) {
        return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_ADMISI_RAWAT_INAP_WITH_PENJAMIN, parameter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * onPutUpdateAdmisiRawatInapDifferentBed
    */
    onPutUpdateAdmisiRawatInapDifferentBed(id_antrian_tppri, reason_different_bed) {
        return this.httpOperationService.defaultPutRequest(this.API_CONFIG.PUT_UPDATE_DIFFERENT_BED, {
            id_antrian_tppri: id_antrian_tppri,
            reason_different_bed: reason_different_bed
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetPasienByPoli(id_poli) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API_CONFIG.GET_PASIEN_BY_POLI + '/' + id_poli, [])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
AdmisiPasienRawatInapService.ɵfac = function AdmisiPasienRawatInapService_Factory(t) { return new (t || AdmisiPasienRawatInapService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
AdmisiPasienRawatInapService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AdmisiPasienRawatInapService, factory: AdmisiPasienRawatInapService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90246:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-restriksi-obat/setup-restriksi-obat.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRestriksiObatService": () => (/* binding */ SetupRestriksiObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupRestriksiObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_RESTRIKSI_OBAT;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource() {
        this.onGetAll().subscribe((result) => {
            this.dataSource.next(result.data);
        });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<any>
     * @param ISetupPabrikModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service menubah data menjadi active
     * @onPutToActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk mwngubah data menjadi tidak aktif
     * @onPutToDeActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToDeActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
SetupRestriksiObatService.ɵfac = function SetupRestriksiObatService_Factory(t) { return new (t || SetupRestriksiObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupRestriksiObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupRestriksiObatService, factory: SetupRestriksiObatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 76731:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupCaraPakaiObatService": () => (/* binding */ SetupCaraPakaiObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupCaraPakaiObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_CARA_PAKAI_OBAT;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource() {
        this.onGetAll().subscribe((result) => {
            this.dataSource.next(result.data);
        });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<any>
     * @param ISetupPabrikModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service menubah data menjadi active
     * @onPutToActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk mwngubah data menjadi tidak aktif
     * @onPutToDeActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToDeActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
SetupCaraPakaiObatService.ɵfac = function SetupCaraPakaiObatService_Factory(t) { return new (t || SetupCaraPakaiObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupCaraPakaiObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupCaraPakaiObatService, factory: SetupCaraPakaiObatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96422:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-grup-obat/setup-grup-obat.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGrupObatService": () => (/* binding */ SetupGrupObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupGrupObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_GRUP_OBAT;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource() {
        this.onGetAll().subscribe((result) => {
            this.dataSource.next(result.data);
        });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPostSave Observable<any>
     * @param ISetupPabrikModel
    */
    onPostSave(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Manyimpan data baru
     * @onPutEdit Observable<any>
     * @param ISetupPabrikModel
    */
    onPutEdit(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service menubah data menjadi active
     * @onPutToActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETOACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk mwngubah data menjadi tidak aktif
     * @onPutToDeActive Observable<any>
     * @param ISetupPabrikModel
    */
    onPutToDeActive(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATETODEACTIVE, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
SetupGrupObatService.ɵfac = function SetupGrupObatService_Factory(t) { return new (t || SetupGrupObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupGrupObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupGrupObatService, factory: SetupGrupObatService.ɵfac, providedIn: 'root' });


/***/ })

}]);