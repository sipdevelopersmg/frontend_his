(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[954],{

/***/ 19431:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupJenisRuanganService": () => (/* binding */ SetupJenisRuanganService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_BILLING__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/BILLING */ 88044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SetupJenisRuanganService = /*@__PURE__*/ (() => {
    class SetupJenisRuanganService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API_JENIS_RUANGAN = _api_BILLING__WEBPACK_IMPORTED_MODULE_0__.API_BILLING.SETUP_DATA.SETUP_JENIS_RUANGAN;
        }
        /**
         * Service Untuk Menampilkan Semua Data Jenis Ruangan
         * @onGetAll Observable<GetAllJenisRuanganModel>
        */
        onGetAll() {
            return this.httpOperationService.defaultGetRequest(this.API_JENIS_RUANGAN.GET_ALL_JENIS_RUANGAN);
        }
        /**
         * Service Untuk Menampilkan Data Jenis Ruangan
         * @onGetById Observable<GetByIdJenisRuanganModel>
        */
        onGetById(JenisRuanganId) {
            return this.httpOperationService.defaultGetRequest(this.API_JENIS_RUANGAN.GET_JENIS_RUANGAN_BY_ID + JenisRuanganId);
        }
        /**
         * Service Untuk Manyimpan data baru
         * @onPostSave Observable<PostInsertJenisRuanganModel>
         * @param JenisRuanganModel
        */
        onPostSave(Data) {
            return this.httpOperationService.defaultPostRequest(this.API_JENIS_RUANGAN.POST_SAVE_JENIS_RUANGAN, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        /**
         * Service Untuk Mengedit Data
         * @onPutEdit Observable<PutUpdateJenisRuanganModel>
         * @param JenisRuanganModel
        */
        onPutEdit(Data) {
            return this.httpOperationService.defaultPutRequest(this.API_JENIS_RUANGAN.PUT_UPDATE_JENIS_RUANGAN, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        /**
         * Service Untuk Menghapus Data
         * @onDelete Observable<DeleteJenisRuanganModel>
         * @param JenisRuanganId
        */
        onDelete(JenisRuanganId) {
            return this.httpOperationService.defaultDeleteRequest(this.API_JENIS_RUANGAN.DELETE_JENIS_RUANGAN_BY_ID + JenisRuanganId)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
    }
    SetupJenisRuanganService.ɵfac = function SetupJenisRuanganService_Factory(t) { return new (t || SetupJenisRuanganService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SetupJenisRuanganService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupJenisRuanganService, factory: SetupJenisRuanganService.ɵfac, providedIn: 'root' });
    return SetupJenisRuanganService;
})();


/***/ }),

/***/ 488:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupKelasPerawatanService": () => (/* binding */ SetupKelasPerawatanService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_BILLING__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/BILLING */ 88044);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SetupKelasPerawatanService = /*@__PURE__*/ (() => {
    class SetupKelasPerawatanService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API_KELAS_PERAWATAN = _api_BILLING__WEBPACK_IMPORTED_MODULE_0__.API_BILLING.SETUP_DATA.SETUP_KELAS_PERAWATAN;
        }
        /**
        * Service Untuk Menampilkan Semua Data Kelas Perawatan
        * @onGetAll Observable<GetAllKelompokTarifModel>
       */
        onGetAll() {
            return this.httpOperationService.defaultGetRequest(this.API_KELAS_PERAWATAN.GET_ALL_KELAS_PERAWATAN);
        }
        /**
         * Service Untuk Menampilkan Data Kelas Perawatan
         * @onGetById Observable<GetByIdKelasPerawatanModel>
        */
        onGetById(KelasPerawatanId) {
            return this.httpOperationService.defaultGetRequest(this.API_KELAS_PERAWATAN.GET_KELAS_PERAWATAN_BY_ID + KelasPerawatanId);
        }
        /**
         * Service Untuk Manyimpan data baru
         * @onPostSave Observable<PostInsertKelasPerawatanModel>
         * @param KelasPerawatanModel
        */
        onPostSave(Data) {
            return this.httpOperationService.defaultPostRequest(this.API_KELAS_PERAWATAN.POST_SAVE_KELAS_PERAWATAN, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        /**
         * Service Untuk Mengedit Data
         * @onPutEdit Observable<PutUpdateKelasPerawatanModel>
         * @param KelasPerawatanModel
        */
        onPutEdit(Data) {
            return this.httpOperationService.defaultPutRequest(this.API_KELAS_PERAWATAN.PUT_UPDATE_KELAS_PERAWATAN, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        /**
         * Service Untuk Mengubah Status Active
         * @onPutStatusActive Observable<PutUpdateStatusKelasPerawatanModel>
         * @param id_kelas: number
         * @param is_active: boolean
        */
        onPutStatusActive(id_kelas, is_active) {
            return this.httpOperationService.defaultPutRequest(this.API_KELAS_PERAWATAN.PUT_UPDATE_STATUS_KELAS_PERAWATAN, {
                id_kelas: id_kelas,
                is_active: !is_active
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        /**
         * Service Untuk Menghapus Data
         * @onDelete Observable<DeleteKelasPerawatanModel>
         * @param KelasPerawatanId
        */
        onDelete(KelasPerawatanId) {
            return this.httpOperationService.defaultDeleteRequest(this.API_KELAS_PERAWATAN.DELETE_KELAS_PERAWATAN_BY_ID + KelasPerawatanId)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        /**
         * Service Untuk Menampilkan Semua Data Kelas Perawatan
         * @onGetAllForLookupAdmisiIrja Observable<GetAllKelompokTarifModel>
        */
        onGetAllForLookupAdmisiIrja() {
            return this.httpOperationService.defaultGetRequest(this.API_KELAS_PERAWATAN.GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA);
        }
    }
    SetupKelasPerawatanService.ɵfac = function SetupKelasPerawatanService_Factory(t) { return new (t || SetupKelasPerawatanService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SetupKelasPerawatanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupKelasPerawatanService, factory: SetupKelasPerawatanService.ɵfac, providedIn: 'root' });
    return SetupKelasPerawatanService;
})();


/***/ }),

/***/ 12712:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_PIS_IRNA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/PIS/IRNA */ 36620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SuratPengantarPembayaranService = /*@__PURE__*/ (() => {
    class SuratPengantarPembayaranService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API_CONFIG = _api_PIS_IRNA__WEBPACK_IMPORTED_MODULE_0__.IRNA.SURAT_PENGANTAR_PEMBAYARAN;
        }
        onGetAllCaraPulang() {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_CARA_PULANG);
        }
        onGetAllKondisiPulang() {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_ALL_KONDISI_PULANG);
        }
        onPostSaveInfoKematian(parameter) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_INFO_KEMATIAN, parameter)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        onGetInfoKematianByIdRegister(RegisterId) {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_INFO_KEMATIAN_BY_ID_REGISTER + RegisterId);
        }
        onPostSavePengantarPembayaran(jenis_rawat, parameter) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_SAVE_PENGANTAR_PEMBAYARAN + `/${jenis_rawat}`, parameter)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        onCancelPengantarPembayaran(id_register, reason_canceled) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.POST_CANCEL_PENGANTAR_PEMBAYARAN, {
                id_register: id_register,
                reason_canceled: reason_canceled
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        onGetPengantarPembayaranByIdRegister(RegisterId) {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.GET_PENGANTAR_PEMBAYARAN_BY_ID_REGISTER + RegisterId);
        }
    }
    SuratPengantarPembayaranService.ɵfac = function SuratPengantarPembayaranService_Factory(t) { return new (t || SuratPengantarPembayaranService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SuratPengantarPembayaranService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SuratPengantarPembayaranService, factory: SuratPengantarPembayaranService.ɵfac, providedIn: 'root' });
    return SuratPengantarPembayaranService;
})();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuratPengantarPembayaranService);


/***/ }),

/***/ 39052:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/setup-data/setup-grup-penunjang/setup-grup-penunjang.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGrupPenunjangService": () => (/* binding */ SetupGrupPenunjangService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_PIS_SETUP_DATA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/PIS/SETUP_DATA */ 23977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SetupGrupPenunjangService = /*@__PURE__*/ (() => {
    class SetupGrupPenunjangService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API_ORDER_PENUNJANG = _api_PIS_SETUP_DATA__WEBPACK_IMPORTED_MODULE_0__.API_SETUP_DATA.SETUP_ORDER_PENUNJANG;
        }
        onGetAll() {
            return this.httpOperationService.defaultGetRequest(this.API_ORDER_PENUNJANG.GET_ALL_SETUP_GRUP_PENUNJANG);
        }
        onGetById(GrupPenunjangId) {
            return this.httpOperationService.defaultGetRequest(this.API_ORDER_PENUNJANG.GET_BY_ID_SETUP_GRUP_PENUNJANG + GrupPenunjangId);
        }
        onPostSave(Data) {
            return this.httpOperationService.defaultPostRequest(this.API_ORDER_PENUNJANG.POST_SAVE_SETUP_GRUP_PENUNJANG, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        onPutUpdate(Data) {
            return this.httpOperationService.defaultPutRequest(this.API_ORDER_PENUNJANG.PUT_UPDATE_SETUP_GRUP_PENUNJANG, Data)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
        onDelete(GrupPenunjangId) {
            return this.httpOperationService.defaultDeleteRequest(this.API_ORDER_PENUNJANG.DELETE_SETUP_GRUP_PENUNJANG + GrupPenunjangId)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.error.title || error.message, {}, true);
            }));
        }
    }
    SetupGrupPenunjangService.ɵfac = function SetupGrupPenunjangService_Factory(t) { return new (t || SetupGrupPenunjangService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SetupGrupPenunjangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupGrupPenunjangService, factory: SetupGrupPenunjangService.ɵfac, providedIn: 'root' });
    return SetupGrupPenunjangService;
})();


/***/ })

}]);