(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[12],{

/***/ 65003:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersetujuanMutasiService": () => (/* binding */ PersetujuanMutasiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM */ 74596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class PersetujuanMutasiService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__.MM.MUTASI.PENGAJUAN_MUTASI;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this.sub_total_1 = 0;
        this.total_disc = 0;
        this.sub_total_2 = 0;
        this.total_tax = 0;
        this.total_transaksi = 0;
        this.jumlah_item = 0;
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    // onGetAll(): Observable<any> {
    //     return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    // }
    onInitList() {
        this.dataSource.next([]);
    }
    /**
     * Service Untuk Menampilkan data header berdasarkan Id
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_HEADER_PERSTUJUAN_BY_PARAMS, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByParamsSource(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            if (result) {
                this.dataSource.next(result.data);
            }
        });
    }
    /**
     * Service Untuk Menampilkan data detail Item
     * @setDetail Void
    */
    setDetail(id) {
        this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID + '/' + id).subscribe((result) => {
            this.dataDetail = result.data;
        });
    }
    getDetail(id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID + '/' + id);
    }
    addDataDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    updateFromInline(index, data, rowData) {
        let indexsatuan = data.satuans.findIndex((e) => e.kode_satuan == data.kode_satuan_besar_mutasi);
        let isi = data.satuans[indexsatuan].isi;
        data.isi_mutasi = isi;
        data.qty_mutasi = data.qty_satuan_besar_mutasi * isi;
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    editBanyak(index, banyak) {
        this.dataDetail[index].qty_satuan_besar_mutasi = banyak;
        this.dataDetail[index].qty_mutasi = banyak * this.dataDetail[index].isi_mutasi;
    }
    editSatuan(index, satuan) {
        let indexsatuan = this.dataDetail[index].satuans.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar_mutasi);
        let isi = this.dataDetail[index].satuans[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar_mutasi = satuan;
        this.dataDetail[index].isi_mutasi = isi;
        this.dataDetail[index].qty_mutasi = this.dataDetail[index].qty_satuan_besar_mutasi * isi;
    }
    sum() {
        this.total_transaksi = this.dataDetail.sum('nominal_mutasi');
        this.jumlah_item = this.dataDetail.sum('qty_satuan_besar');
    }
    Insert(Data) {
        this.dataDetail.map((e, i) => {
            return e.no_urut = i + 1;
        });
        Data.details = this.dataDetail;
        Data.jumlah_item = this.jumlah_item;
        Data.total_transaksi = this.total_transaksi;
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Reset() {
        this.dataDetail = [];
        this.total_transaksi = 0;
        this.jumlah_item = 0;
    }
    getSatuanDetail(id_item) {
        let index = this.dataDetail.map((item) => { return item.id_item; }).indexOf(id_item);
        return this.dataDetail[index].satuans;
    }
    validasiPersetujuan(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_PERSETUJUAN, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Cancel(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
            mutasi_id: id,
            reason_canceled: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
PersetujuanMutasiService.ɵfac = function PersetujuanMutasiService_Factory(t) { return new (t || PersetujuanMutasiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
PersetujuanMutasiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PersetujuanMutasiService, factory: PersetujuanMutasiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29565:
/*!******************************************************************************!*\
  !*** ./src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PemesananService": () => (/* binding */ PemesananService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM_PENERIMAAN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM/PENERIMAAN */ 38712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);







class PemesananService {
    constructor(notificationService, httpOperationService, utilityService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.utilityService = utilityService;
        this.API = src_app_api_MM_PENERIMAAN__WEBPACK_IMPORTED_MODULE_0__.PENERIMAAN.TRANSPEMESANAN;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this.sub_total_1 = 0;
        this.total_disc = 0;
        this.sub_total_2 = 0;
        this.total_tax = 0;
        this.total_transaksi_pesan = 0;
        this.jumlah_item_pesan = 0;
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll() {
        return this.httpOperationService.defaultGetRequest(this.API.GET_ALL);
    }
    onInitList() {
        this.dataSource.next([]);
    }
    /**
     * Service Untuk Menampilkan data header berdasarkan Id
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_HEADER_BY_PARAMS, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByParamsSource(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            if (result) {
                this.dataSource.next(result.data);
            }
        });
    }
    /**
     * Service Untuk Menampilkan data detail Item
     * @setDetail Void
    */
    setDetail(id) {
        this.getDetail(id).subscribe((result) => {
            let data = result.data;
            data.map((item, index) => {
                return item.qty_sisa = item.qty_pesan - item.qty_terima;
            });
            this.dataDetail = data;
        });
    }
    getDetail(id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_BY_ID + '/' + id);
    }
    addDataDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    updateFromInline(index, data, rowData) {
        let indexsatuan = data.satuan.findIndex((e) => e.kode_satuan == data.kode_satuan_besar);
        let isi = data.satuan[indexsatuan].isi;
        data.isi = isi;
        data.qty_pesan = data.qty_satuan_besar * isi;
        // if (data.sub_total_pesan != rowData.sub_total_pesan) {
        //     data.harga_satuan = data.sub_total_pesan / data.qty_pesan;
        // } else {
        data.sub_total_pesan = data.qty_pesan * data.harga_satuan;
        // }
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    editBanyak(index, banyak) {
        this.dataDetail[index].qty_satuan_besar = banyak;
        this.dataDetail[index].qty_pesan = banyak * this.dataDetail[index].isi;
        this.dataDetail[index].sub_total_pesan = banyak * this.dataDetail[index].isi * this.dataDetail[index].harga_satuan;
        this.sum();
    }
    editHarga(index, harga) {
        this.dataDetail[index].harga_satuan = harga;
        this.dataDetail[index].sub_total_pesan = harga * this.dataDetail[index].qty_pesan;
        this.sum();
    }
    editSubtotal(index, subtotal) {
        this.dataDetail[index].sub_total_pesan = subtotal;
        this.dataDetail[index].harga_satuan = subtotal / this.dataDetail[index].qty_pesan;
        this.sum();
    }
    editSatuan(index, satuan) {
        let indexsatuan = this.dataDetail[index].satuan.findIndex((e) => e.kode_satuan == this.dataDetail[index].kode_satuan_besar);
        let isi = this.dataDetail[index].satuan[indexsatuan].isi;
        this.dataDetail[index].kode_satuan_besar = satuan;
        this.dataDetail[index].isi = isi;
        this.dataDetail[index].qty_pesan = this.dataDetail[index].qty_satuan_besar * isi;
        this.dataDetail[index].sub_total_pesan = this.dataDetail[index].qty_pesan * this.dataDetail[index].harga_satuan;
        this.sum();
    }
    sum() {
        this.sub_total_1 = this.dataDetail.sum('sub_total_pesan');
        this.sub_total_2 = this.dataDetail.sum('sub_total_pesan');
        this.total_transaksi_pesan = this.dataDetail.sum('sub_total_pesan');
        this.jumlah_item_pesan = this.dataDetail.sum('qty_pesan');
    }
    Insert(Data) {
        this.dataDetail.map((e, i) => {
            return e.no_urut = i + 1;
        });
        Data.tanggal_pemesanan = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_pemesanan);
        Data.tanggal_expired_pemesanan = this.utilityService.onFixingDatepickerSyncfusion(Data.tanggal_expired_pemesanan);
        Data.details = this.dataDetail;
        Data.sub_total_1 = this.sub_total_1;
        Data.total_disc = this.total_disc;
        Data.sub_total_2 = this.sub_total_2;
        Data.total_tax = this.total_tax;
        Data.jumlah_item_pesan = this.jumlah_item_pesan;
        Data.total_transaksi_pesan = this.total_transaksi_pesan;
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Reset() {
        this.dataDetail = [];
        this.total_transaksi_pesan = 0;
        this.jumlah_item_pesan = 0;
    }
    Validation(id) {
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, { pemesanan_id: id })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Cancel(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
            pemesanan_id: id,
            reason_canceled: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Close(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CLOSE, {
            pemesanan_id: id,
            reason_closed: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
PemesananService.ɵfac = function PemesananService_Factory(t) { return new (t || PemesananService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService)); };
PemesananService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: PemesananService, factory: PemesananService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23693:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/MM/services/setup-data/setup-jenis-penerimaan/setup-jenis-penerimaan.service.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupJenisPenerimaanService": () => (/* binding */ SetupJenisPenerimaanService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM */ 74596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupJenisPenerimaanService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__.MM.SETUP_DATA.SETUP_JENIS_PENERIMAAN;
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
}
SetupJenisPenerimaanService.ɵfac = function SetupJenisPenerimaanService_Factory(t) { return new (t || SetupJenisPenerimaanService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupJenisPenerimaanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupJenisPenerimaanService, factory: SetupJenisPenerimaanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 35621:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/MM/services/setup-data/setup-mekanisme-retur/setup-mekanisme-retur.service.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupMekanismeReturService": () => (/* binding */ SetupMekanismeReturService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM */ 74596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupMekanismeReturService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__.MM.SETUP_DATA.SETUP_MEKANISME_RETUR;
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
}
SetupMekanismeReturService.ɵfac = function SetupMekanismeReturService_Factory(t) { return new (t || SetupMekanismeReturService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupMekanismeReturService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupMekanismeReturService, factory: SetupMekanismeReturService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 11568:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/MM/services/setup-data/setup-payment-term/setup-payment-term.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPaymentTermService": () => (/* binding */ SetupPaymentTermService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM */ 74596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupPaymentTermService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__.MM.SETUP_DATA.SETUP_PAYMENT_TERM;
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
}
SetupPaymentTermService.ɵfac = function SetupPaymentTermService_Factory(t) { return new (t || SetupPaymentTermService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupPaymentTermService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupPaymentTermService, factory: SetupPaymentTermService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19436:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/MM/services/setup-data/setup-shipping-method/setup-shipping-method.service.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupShippingMethodService": () => (/* binding */ SetupShippingMethodService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/MM */ 74596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupShippingMethodService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_MM__WEBPACK_IMPORTED_MODULE_0__.MM.SETUP_DATA.SETUP_SHIPPING_METHOD;
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
}
SetupShippingMethodService.ɵfac = function SetupShippingMethodService_Factory(t) { return new (t || SetupShippingMethodService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupShippingMethodService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupShippingMethodService, factory: SetupShippingMethodService.ɵfac, providedIn: 'root' });


/***/ })

}]);