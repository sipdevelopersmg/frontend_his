(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[14],{

/***/ 65712:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-restriksi-obat/setup-restriksi-obat.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRestriksiObatService": () => (/* binding */ SetupRestriksiObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 55011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);






let SetupRestriksiObatService = /*@__PURE__*/ (() => {
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
    return SetupRestriksiObatService;
})();


/***/ }),

/***/ 71329:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupCaraPakaiObatService": () => (/* binding */ SetupCaraPakaiObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 55011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);






let SetupCaraPakaiObatService = /*@__PURE__*/ (() => {
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
    return SetupCaraPakaiObatService;
})();


/***/ }),

/***/ 73186:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-grup-obat/setup-grup-obat.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGrupObatService": () => (/* binding */ SetupGrupObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 55011);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);






let SetupGrupObatService = /*@__PURE__*/ (() => {
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
    return SetupGrupObatService;
})();


/***/ })

}]);