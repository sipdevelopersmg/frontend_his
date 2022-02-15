(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[592],{

/***/ 87958:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdmisiPasienRawatInapService": () => (/* binding */ AdmisiPasienRawatInapService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_PIS_IRNA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../api/PIS/IRNA */ 36620);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let AdmisiPasienRawatInapService = /*@__PURE__*/ (() => {
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
    return AdmisiPasienRawatInapService;
})();


/***/ }),

/***/ 15235:
/*!*******************************************!*\
  !*** ./src/app/prototype/ArrPrototype.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Menjumlahkan */
Array.prototype.sum = function (prop) {
    var total = 0;
    for (var i = 0, _len = this.length; i < _len; i++) {
        total += this[i][prop];
    }
    return total;
};
/** menyelipkan data di array index yg sudah di tentukan */
Array.prototype.insertToIndex = function (index) {
    // this.splice( index, 0, item );
    index = Math.min(index, this.length);
    arguments.length > 1
        && this.splice.apply(this, [index, 0].concat([].pop.call(arguments)))
        && this.insertToIndex.apply(this, arguments);
    return this;
};
/** mengurutkan data yang sudah di tentukan */
Array.prototype.orderBy = function (prop) {
    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers,
            * and you may want to customize it to your needs
            */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        };
    }
    this.sort(dynamicSort(prop));
};



/***/ })

}]);