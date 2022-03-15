(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[102],{

/***/ 30096:
/*!********************************************************!*\
  !*** ./src/app/api/BILLING/KASIR/KASIR_RAWAT_JALAN.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_HISTORY_BUKA_KASIR": () => (/* binding */ GET_HISTORY_BUKA_KASIR),
/* harmony export */   "POST_SAVE_BUKA_KASIR_BY_PENGAWAS": () => (/* binding */ POST_SAVE_BUKA_KASIR_BY_PENGAWAS),
/* harmony export */   "GET_HISTORY_TAMBAH_MODAL_BY_ID_SALDO_KASIR": () => (/* binding */ GET_HISTORY_TAMBAH_MODAL_BY_ID_SALDO_KASIR),
/* harmony export */   "POST_SAVE_TAMBAH_MODAL_BY_PENGAWAS": () => (/* binding */ POST_SAVE_TAMBAH_MODAL_BY_PENGAWAS),
/* harmony export */   "POST_SAVE_BUKA_KASIR_BY_KASIR": () => (/* binding */ POST_SAVE_BUKA_KASIR_BY_KASIR),
/* harmony export */   "POST_SAVE_SETORAN_KASIR": () => (/* binding */ POST_SAVE_SETORAN_KASIR),
/* harmony export */   "GET_SALDO_KASIR_FOR_SETORAN": () => (/* binding */ GET_SALDO_KASIR_FOR_SETORAN),
/* harmony export */   "GET_HISTORY_SETORAN_KASIR": () => (/* binding */ GET_HISTORY_SETORAN_KASIR),
/* harmony export */   "POST_SAVE_TUTUP_KASIR": () => (/* binding */ POST_SAVE_TUTUP_KASIR),
/* harmony export */   "POST_CANCEL_TUTUP_KASIR": () => (/* binding */ POST_CANCEL_TUTUP_KASIR),
/* harmony export */   "GET_HISTORY_TUTUP_KASIR": () => (/* binding */ GET_HISTORY_TUTUP_KASIR),
/* harmony export */   "GET_PENDAPATAN_VERSI_KASIR": () => (/* binding */ GET_PENDAPATAN_VERSI_KASIR),
/* harmony export */   "GET_PENDAPATAN_VERSI_SISTEM": () => (/* binding */ GET_PENDAPATAN_VERSI_SISTEM),
/* harmony export */   "GET_DETAIL_PENDAPATAN_VERSI_SISTEM": () => (/* binding */ GET_DETAIL_PENDAPATAN_VERSI_SISTEM),
/* harmony export */   "POST_VALIDASI_CROSS_CHECK_TUTUP_KASIR": () => (/* binding */ POST_VALIDASI_CROSS_CHECK_TUTUP_KASIR),
/* harmony export */   "GET_HISTORY_CROSS_CHECK_TUTUP_KASIR": () => (/* binding */ GET_HISTORY_CROSS_CHECK_TUTUP_KASIR),
/* harmony export */   "GET_DETAIL_HISTORY_CROSS_CHECK_TUTUP_KASIR": () => (/* binding */ GET_DETAIL_HISTORY_CROSS_CHECK_TUTUP_KASIR),
/* harmony export */   "GET_LAPORAN_PENDAPATAN_VERSI_SYSTEM": () => (/* binding */ GET_LAPORAN_PENDAPATAN_VERSI_SYSTEM),
/* harmony export */   "GET_PREVIEW_LAPORAN_PENDAPATAN_VERSI_SYSTEM": () => (/* binding */ GET_PREVIEW_LAPORAN_PENDAPATAN_VERSI_SYSTEM)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_HISTORY_BUKA_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryOpened`;
const POST_SAVE_BUKA_KASIR_BY_PENGAWAS = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/BukaKasirByPengawas`;
const GET_HISTORY_TAMBAH_MODAL_BY_ID_SALDO_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryModalByIdSaldokasir/`;
const POST_SAVE_TAMBAH_MODAL_BY_PENGAWAS = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/TambahModalByPengawas`;
const POST_SAVE_BUKA_KASIR_BY_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/BukaKasirByKasir`;
const POST_SAVE_SETORAN_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/TambahSetoranByKasir`;
const GET_SALDO_KASIR_FOR_SETORAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetSaldoKasirByUserKasir`;
const GET_HISTORY_SETORAN_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistorySetoranByUserKasir`;
const POST_SAVE_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/TutupKasir`;
const POST_CANCEL_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/TutupKasirBatal/`;
const GET_HISTORY_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryClosedDynamic`;
const GET_PENDAPATAN_VERSI_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetPendapatanVersiKasir/`;
const GET_PENDAPATAN_VERSI_SISTEM = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetPendapatanVersiSistem/`;
const GET_DETAIL_PENDAPATAN_VERSI_SISTEM = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetDaftarPaymentAndInvoicePerKasir`;
const POST_VALIDASI_CROSS_CHECK_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/ValidasiKasir`;
const GET_HISTORY_CROSS_CHECK_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetHistoryValidatedDynamic`;
const GET_DETAIL_HISTORY_CROSS_CHECK_TUTUP_KASIR = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrSaldoKasir/GetDetailValidatedByPerKasir/`;
// export const GET_LAPORAN_PENDAPATAN_VERSI_SYSTEM = `${environment.webApiLaporan}` + `PIS/Billing_Pendapatan_Versi_Sistem.pdf`;
const GET_LAPORAN_PENDAPATAN_VERSI_SYSTEM = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiLaporan}` + `PIS/Transaksi_Cross_Check_Kasir.pdf`;
const GET_PREVIEW_LAPORAN_PENDAPATAN_VERSI_SYSTEM = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiLaporan}` + `PIS/Billing_Pendapatan_Versi_Sistem.html`;


/***/ }),

/***/ 41345:
/*!********************************************!*\
  !*** ./src/app/api/BILLING/KASIR/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_KASIR": () => (/* binding */ API_KASIR)
/* harmony export */ });
/* harmony import */ var _KASIR_RAWAT_JALAN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KASIR_RAWAT_JALAN */ 30096);

const API_KASIR = Object.assign({}, {
    "KASIR_RAWAT_JALAN": _KASIR_RAWAT_JALAN__WEBPACK_IMPORTED_MODULE_0__,
});


/***/ }),

/***/ 51597:
/*!****************************************************************!*\
  !*** ./src/app/api/BILLING/POSTING_BILLING/POSTING_BILLING.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST_GET_ALL_DAFTAR_POSTING": () => (/* binding */ POST_GET_ALL_DAFTAR_POSTING),
/* harmony export */   "POST_SAVE_POSTING_BILLING_IRNA": () => (/* binding */ POST_SAVE_POSTING_BILLING_IRNA),
/* harmony export */   "POST_BATAL_POSTING_BILLING_IRNA": () => (/* binding */ POST_BATAL_POSTING_BILLING_IRNA),
/* harmony export */   "POST_SAVE_POSTING_BILLING_IRDA": () => (/* binding */ POST_SAVE_POSTING_BILLING_IRDA),
/* harmony export */   "POST_BATAL_POSTING_BILLING_IRDA": () => (/* binding */ POST_BATAL_POSTING_BILLING_IRDA)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const POST_GET_ALL_DAFTAR_POSTING = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/BillGetDaftarInvPaidForPosting_IRNA_IRDA/`;
const POST_SAVE_POSTING_BILLING_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BillPostingIRNA`;
const POST_BATAL_POSTING_BILLING_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BillBatalPostingIRNA`;
const POST_SAVE_POSTING_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/BillPostingIRDA`;
const POST_BATAL_POSTING_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/BillBatalPostingIRDA`;


/***/ }),

/***/ 94027:
/*!**************************************************************************!*\
  !*** ./src/app/api/BILLING/SETTING_HARGA_TARIF/SETTING_TARIF_BERLAKU.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_TARIF_BERLAKU": () => (/* binding */ GET_ALL_TARIF_BERLAKU),
/* harmony export */   "GET_ALL_TARIF_BERLAKU_BY_KELAS_PERAWATAN": () => (/* binding */ GET_ALL_TARIF_BERLAKU_BY_KELAS_PERAWATAN),
/* harmony export */   "GET_TARIF_BERLAKU_BY_ID": () => (/* binding */ GET_TARIF_BERLAKU_BY_ID),
/* harmony export */   "POST_SAVE_TARIF_BERLAKU": () => (/* binding */ POST_SAVE_TARIF_BERLAKU),
/* harmony export */   "POST_SAVE_TARIF_BERLAKU_LIST_OF_OBJECT": () => (/* binding */ POST_SAVE_TARIF_BERLAKU_LIST_OF_OBJECT),
/* harmony export */   "POST_SAVE_KESELURUHAN_TARIF_BERLAKU": () => (/* binding */ POST_SAVE_KESELURUHAN_TARIF_BERLAKU),
/* harmony export */   "PUT_UPDATE_TARIF_BERLAKU": () => (/* binding */ PUT_UPDATE_TARIF_BERLAKU),
/* harmony export */   "PUT_UPDATE_STATUS_TARIF_BERLAKU": () => (/* binding */ PUT_UPDATE_STATUS_TARIF_BERLAKU),
/* harmony export */   "PUT_UPDATE_KESELURUHAN_TARIF_BERLAKU": () => (/* binding */ PUT_UPDATE_KESELURUHAN_TARIF_BERLAKU),
/* harmony export */   "GET_ALL_TARIF_BERLAKU_BY_DYNAMIC_FILTER_FOR_TIKET": () => (/* binding */ GET_ALL_TARIF_BERLAKU_BY_DYNAMIC_FILTER_FOR_TIKET),
/* harmony export */   "GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA": () => (/* binding */ GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA),
/* harmony export */   "GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRDA": () => (/* binding */ GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRDA)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetAll`;
const GET_ALL_TARIF_BERLAKU_BY_KELAS_PERAWATAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetByIdKelasPerawatan/`;
const GET_TARIF_BERLAKU_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetById/`;
const POST_SAVE_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/Insert`;
const POST_SAVE_TARIF_BERLAKU_LIST_OF_OBJECT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/InsertListOfObjects`;
const POST_SAVE_KESELURUHAN_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/InsertTarifByPercentAndKelas`;
const PUT_UPDATE_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/Update`;
const PUT_UPDATE_STATUS_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/UpdateStatusActive`;
const PUT_UPDATE_KESELURUHAN_TARIF_BERLAKU = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/UpdateTarifByPercentAndKelas`;
const GET_ALL_TARIF_BERLAKU_BY_DYNAMIC_FILTER_FOR_TIKET = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetAllByDynamicForTiket/`;
const GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetAllForInputTransIrnaByDynamic`;
const GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlaku/GetAllForInputTransIrdaByDynamic`;


/***/ }),

/***/ 82807:
/*!***************************************************************************!*\
  !*** ./src/app/api/BILLING/SETTING_HARGA_TARIF/SETTING_TARIF_PER_POLI.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_TARIF_BERLAKU_PER_POLI": () => (/* binding */ GET_ALL_TARIF_BERLAKU_PER_POLI),
/* harmony export */   "GET_TARIF_BERLAKU_PER_POLI_BY_ID": () => (/* binding */ GET_TARIF_BERLAKU_PER_POLI_BY_ID),
/* harmony export */   "GET_TARIF_BERLAKU_PER_POLI_BY_POLI_ID": () => (/* binding */ GET_TARIF_BERLAKU_PER_POLI_BY_POLI_ID),
/* harmony export */   "GET_TARIF_BERLAKU_PER_POLI_BY_DYNAMIC_FILTER_AND_ID_POLI": () => (/* binding */ GET_TARIF_BERLAKU_PER_POLI_BY_DYNAMIC_FILTER_AND_ID_POLI),
/* harmony export */   "POST_SAVE_TARIF_BERLAKU_PER_POLI": () => (/* binding */ POST_SAVE_TARIF_BERLAKU_PER_POLI),
/* harmony export */   "POST_SAVE_TARIF_BERLAKU_PER_POLI_LIST": () => (/* binding */ POST_SAVE_TARIF_BERLAKU_PER_POLI_LIST),
/* harmony export */   "PUT_UPDATE_STATUS_TARIF_BERLAKU_PER_POLI": () => (/* binding */ PUT_UPDATE_STATUS_TARIF_BERLAKU_PER_POLI)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_TARIF_BERLAKU_PER_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetAll`;
const GET_TARIF_BERLAKU_PER_POLI_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetById/`;
const GET_TARIF_BERLAKU_PER_POLI_BY_POLI_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetByIdPoli/`;
const GET_TARIF_BERLAKU_PER_POLI_BY_DYNAMIC_FILTER_AND_ID_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/GetAllByDynamic_NotInTarifBerlakuPoli_ByPoli`;
const POST_SAVE_TARIF_BERLAKU_PER_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/Insert`;
const POST_SAVE_TARIF_BERLAKU_PER_POLI_LIST = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/InsertListOfObjects`;
const PUT_UPDATE_STATUS_TARIF_BERLAKU_PER_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TarifBerlakuPoli/UpdateStatusActive`;


/***/ }),

/***/ 38407:
/*!**********************************************************!*\
  !*** ./src/app/api/BILLING/SETTING_HARGA_TARIF/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_SETTING_HARGA_TARIF": () => (/* binding */ API_SETTING_HARGA_TARIF)
/* harmony export */ });
/* harmony import */ var _SETTING_HARGA_TARIF_SETTING_TARIF_BERLAKU__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SETTING_HARGA_TARIF/SETTING_TARIF_BERLAKU */ 94027);
/* harmony import */ var _SETTING_HARGA_TARIF_SETTING_TARIF_PER_POLI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SETTING_HARGA_TARIF/SETTING_TARIF_PER_POLI */ 82807);


const API_SETTING_HARGA_TARIF = Object.assign({}, {
    "SETTING_TARIF_BERLAKU": _SETTING_HARGA_TARIF_SETTING_TARIF_BERLAKU__WEBPACK_IMPORTED_MODULE_0__,
    "SETTING_TARIF_PER_POLI": _SETTING_HARGA_TARIF_SETTING_TARIF_PER_POLI__WEBPACK_IMPORTED_MODULE_1__,
});


/***/ }),

/***/ 33331:
/*!**************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_BANK_PAYMENT.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL": () => (/* binding */ GET_ALL),
/* harmony export */   "GET_BY_ID": () => (/* binding */ GET_BY_ID),
/* harmony export */   "POST_SAVE": () => (/* binding */ POST_SAVE),
/* harmony export */   "PUT_UPDATE": () => (/* binding */ PUT_UPDATE),
/* harmony export */   "DELETE": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetBankPayment/GetAll`;
const GET_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetBankPayment/GetById/`;
const POST_SAVE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetBankPayment/Insert`;
const PUT_UPDATE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetBankPayment/Update`;
const DELETE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetBankPayment/Delete/`;


/***/ }),

/***/ 24454:
/*!*************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_EDC_PAYMENT.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL": () => (/* binding */ GET_ALL),
/* harmony export */   "GET_BY_ID": () => (/* binding */ GET_BY_ID),
/* harmony export */   "POST_SAVE": () => (/* binding */ POST_SAVE),
/* harmony export */   "PUT_UPDATE": () => (/* binding */ PUT_UPDATE),
/* harmony export */   "DELETE": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetEdcPayment/GetAll`;
const GET_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetEdcPayment/GetById/`;
const POST_SAVE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetEdcPayment/Insert`;
const PUT_UPDATE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetEdcPayment/Update`;
const DELETE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetEdcPayment/Delete/`;


/***/ }),

/***/ 29557:
/*!************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_GRUP_TARIF.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_GRUP_TARIF": () => (/* binding */ GET_ALL_GRUP_TARIF),
/* harmony export */   "GET_GRUP_TARIF_BY_ID": () => (/* binding */ GET_GRUP_TARIF_BY_ID),
/* harmony export */   "POST_SAVE_GRUP_TARIF": () => (/* binding */ POST_SAVE_GRUP_TARIF),
/* harmony export */   "PUT_UPDATE_GRUP_TARIF": () => (/* binding */ PUT_UPDATE_GRUP_TARIF),
/* harmony export */   "DELETE_GRUP_TARIF_BY_ID": () => (/* binding */ DELETE_GRUP_TARIF_BY_ID)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_GRUP_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupGrupTarif/GetAllRecursive`;
const GET_GRUP_TARIF_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupGrupTarif/GetById/`;
const POST_SAVE_GRUP_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupGrupTarif/Insert`;
const PUT_UPDATE_GRUP_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupGrupTarif/Update`;
const DELETE_GRUP_TARIF_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupGrupTarif/Delete/`;


/***/ }),

/***/ 68759:
/*!***************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_JENIS_RUANGAN.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_JENIS_RUANGAN": () => (/* binding */ GET_ALL_JENIS_RUANGAN),
/* harmony export */   "GET_JENIS_RUANGAN_BY_ID": () => (/* binding */ GET_JENIS_RUANGAN_BY_ID),
/* harmony export */   "POST_SAVE_JENIS_RUANGAN": () => (/* binding */ POST_SAVE_JENIS_RUANGAN),
/* harmony export */   "PUT_UPDATE_JENIS_RUANGAN": () => (/* binding */ PUT_UPDATE_JENIS_RUANGAN),
/* harmony export */   "DELETE_JENIS_RUANGAN_BY_ID": () => (/* binding */ DELETE_JENIS_RUANGAN_BY_ID)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_JENIS_RUANGAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupJenisRuangan/GetAll`;
const GET_JENIS_RUANGAN_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupJenisRuangan/GetById/`;
const POST_SAVE_JENIS_RUANGAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupJenisRuangan/Insert`;
const PUT_UPDATE_JENIS_RUANGAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupJenisRuangan/Update`;
const DELETE_JENIS_RUANGAN_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupJenisRuangan/Delete/`;


/***/ }),

/***/ 51306:
/*!*****************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_KELAS_PERAWATAN.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_KELAS_PERAWATAN": () => (/* binding */ GET_ALL_KELAS_PERAWATAN),
/* harmony export */   "GET_KELAS_PERAWATAN_BY_ID": () => (/* binding */ GET_KELAS_PERAWATAN_BY_ID),
/* harmony export */   "POST_SAVE_KELAS_PERAWATAN": () => (/* binding */ POST_SAVE_KELAS_PERAWATAN),
/* harmony export */   "PUT_UPDATE_KELAS_PERAWATAN": () => (/* binding */ PUT_UPDATE_KELAS_PERAWATAN),
/* harmony export */   "PUT_UPDATE_STATUS_KELAS_PERAWATAN": () => (/* binding */ PUT_UPDATE_STATUS_KELAS_PERAWATAN),
/* harmony export */   "DELETE_KELAS_PERAWATAN_BY_ID": () => (/* binding */ DELETE_KELAS_PERAWATAN_BY_ID),
/* harmony export */   "GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA": () => (/* binding */ GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_KELAS_PERAWATAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/GetAll`;
const GET_KELAS_PERAWATAN_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/GetById/`;
const POST_SAVE_KELAS_PERAWATAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/Insert`;
const PUT_UPDATE_KELAS_PERAWATAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/Update`;
const PUT_UPDATE_STATUS_KELAS_PERAWATAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/UpdateStatusActive`;
const DELETE_KELAS_PERAWATAN_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/KelasPerawatan/Delete/`;
// ** Kelas Perawatan For Admisi IRJA
const GET_ALL_KELAS_PERAWATAN_FOR_LOOKUP_ADMISI_IRJA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiAdmisi}` + `Admisi/KelasPerawatanGetAllForLookupAdmisi_IRJA`;


/***/ }),

/***/ 25853:
/*!****************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_KELOMPOK_TARIF.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_KELOMPOK_TARIF": () => (/* binding */ GET_ALL_KELOMPOK_TARIF),
/* harmony export */   "GET_KELOMPOK_TARIF_BY_ID": () => (/* binding */ GET_KELOMPOK_TARIF_BY_ID),
/* harmony export */   "POST_SAVE_KELOMPOK_TARIF": () => (/* binding */ POST_SAVE_KELOMPOK_TARIF),
/* harmony export */   "PUT_UPDATE_KELOMPOK_TARIF": () => (/* binding */ PUT_UPDATE_KELOMPOK_TARIF),
/* harmony export */   "DELETE_KELOMPOK_TARIF_BY_ID": () => (/* binding */ DELETE_KELOMPOK_TARIF_BY_ID)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_KELOMPOK_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupKelompokTarif/GetAll`;
const GET_KELOMPOK_TARIF_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupKelompokTarif/GetById/`;
const POST_SAVE_KELOMPOK_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupKelompokTarif/Insert`;
const PUT_UPDATE_KELOMPOK_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupKelompokTarif/Update`;
const DELETE_KELOMPOK_TARIF_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupKelompokTarif/Delete/`;


/***/ }),

/***/ 43862:
/*!****************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_PAYMENT_METHOD.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_PAYMENT_METHOD": () => (/* binding */ GET_ALL_PAYMENT_METHOD),
/* harmony export */   "GET_ALL_PAYMENT_METHOD_BY_NAME": () => (/* binding */ GET_ALL_PAYMENT_METHOD_BY_NAME),
/* harmony export */   "GET_BY_ID_PAYMENT_METHOD": () => (/* binding */ GET_BY_ID_PAYMENT_METHOD),
/* harmony export */   "GET_ALL_PAYMENT_METHOD_DETAIL": () => (/* binding */ GET_ALL_PAYMENT_METHOD_DETAIL),
/* harmony export */   "GET_BY_ID": () => (/* binding */ GET_BY_ID),
/* harmony export */   "POST_SAVE": () => (/* binding */ POST_SAVE),
/* harmony export */   "PUT_UPDATE": () => (/* binding */ PUT_UPDATE),
/* harmony export */   "DELETE": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_PAYMENT_METHOD = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethod/GetAll`;
const GET_ALL_PAYMENT_METHOD_BY_NAME = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethod/GetPaymentMethodByName/`;
const GET_BY_ID_PAYMENT_METHOD = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetAllByIdPaymentMethod/`;
const GET_ALL_PAYMENT_METHOD_DETAIL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetAll`;
const GET_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/GetById/`;
const POST_SAVE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Insert`;
const PUT_UPDATE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Update`;
const DELETE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetPaymentMethodDetail/Delete/`;


/***/ }),

/***/ 36845:
/*!******************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_POLI.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_POLI": () => (/* binding */ GET_ALL_POLI),
/* harmony export */   "GET_POLI_BY_ID": () => (/* binding */ GET_POLI_BY_ID),
/* harmony export */   "POST_SAVE_POLI": () => (/* binding */ POST_SAVE_POLI),
/* harmony export */   "PUT_UPDATE_POLI": () => (/* binding */ PUT_UPDATE_POLI),
/* harmony export */   "DELETE_POLI_BY_ID": () => (/* binding */ DELETE_POLI_BY_ID),
/* harmony export */   "PUT_UPDATE_STATUS_POLI": () => (/* binding */ PUT_UPDATE_STATUS_POLI),
/* harmony export */   "GET_ALL_BY_ID_JENIS_RUANGAN": () => (/* binding */ GET_ALL_BY_ID_JENIS_RUANGAN),
/* harmony export */   "GET_ALL_POLI_FOR_LOOKUP_ADMISI": () => (/* binding */ GET_ALL_POLI_FOR_LOOKUP_ADMISI),
/* harmony export */   "GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP": () => (/* binding */ GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP),
/* harmony export */   "GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP": () => (/* binding */ GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP),
/* harmony export */   "GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_DARURAT": () => (/* binding */ GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_DARURAT)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/GetAllRecursive`;
const GET_POLI_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/GetById/`;
const POST_SAVE_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/Insert`;
const PUT_UPDATE_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/Update`;
const DELETE_POLI_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/Delete/`;
const PUT_UPDATE_STATUS_POLI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/UpdateStatusActive`;
const GET_ALL_BY_ID_JENIS_RUANGAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/GetByIdJenisRuangan/`;
const GET_ALL_POLI_FOR_LOOKUP_ADMISI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiAdmisi}` + `Admisi/PoliGetAllForLookupAdmisi/`;
const GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/PoliLookup_IRNA`;
const GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/PoliLookup_IRNA_ByJenisRuangan/`;
const GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_DARURAT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/Poli/PoliLookup_IRDA`;


/***/ }),

/***/ 36684:
/*!*******************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_TARIF.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_TARIF": () => (/* binding */ GET_ALL_TARIF),
/* harmony export */   "GET_TARIF_BY_ID": () => (/* binding */ GET_TARIF_BY_ID),
/* harmony export */   "POST_SAVE_TARIF": () => (/* binding */ POST_SAVE_TARIF),
/* harmony export */   "PUT_UPDATE_TARIF": () => (/* binding */ PUT_UPDATE_TARIF),
/* harmony export */   "PUT_UPDATE_STATUS_TARIF": () => (/* binding */ PUT_UPDATE_STATUS_TARIF),
/* harmony export */   "POST_TARIF_GET_ALL_TARIF_BERLAKU_BY_KELAS": () => (/* binding */ POST_TARIF_GET_ALL_TARIF_BERLAKU_BY_KELAS),
/* harmony export */   "GET_ALL_BY_GRUP_TARIF": () => (/* binding */ GET_ALL_BY_GRUP_TARIF)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetAll`;
const GET_TARIF_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetById/`;
const POST_SAVE_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/Insert`;
const PUT_UPDATE_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/Update`;
const PUT_UPDATE_STATUS_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/UpdateStatusActive`;
const POST_TARIF_GET_ALL_TARIF_BERLAKU_BY_KELAS = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetAllByDynamic_NotInTarifBerlaku_ByKelas`;
const GET_ALL_BY_GRUP_TARIF = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetAllByGroupTarif/`;


/***/ }),

/***/ 69264:
/*!*************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_TARIF_PAKET.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL_TARIF_PAKET_PARENT": () => (/* binding */ GET_ALL_TARIF_PAKET_PARENT),
/* harmony export */   "GET_ALL_TARIF_PAKET_CHILD_BY_PARENT_ID": () => (/* binding */ GET_ALL_TARIF_PAKET_CHILD_BY_PARENT_ID),
/* harmony export */   "GET_ALL_TARIF_PAKET_CHILD_FOR_LOOKUP": () => (/* binding */ GET_ALL_TARIF_PAKET_CHILD_FOR_LOOKUP),
/* harmony export */   "POST_SAVE_TARIF_PAKET": () => (/* binding */ POST_SAVE_TARIF_PAKET),
/* harmony export */   "POST_DELETE_TARIF_PAKET": () => (/* binding */ POST_DELETE_TARIF_PAKET),
/* harmony export */   "PUT_UPDATE_STATUS_TARIF_PAKET": () => (/* binding */ PUT_UPDATE_STATUS_TARIF_PAKET)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL_TARIF_PAKET_PARENT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetAllForPaketTarifParent`;
const GET_ALL_TARIF_PAKET_CHILD_BY_PARENT_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarifPaket/GetAllChildByParent/`;
const GET_ALL_TARIF_PAKET_CHILD_FOR_LOOKUP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarif/GetAllForPaketTarifChildLookup`;
const POST_SAVE_TARIF_PAKET = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarifPaket/InsertListOfObjects`;
const POST_DELETE_TARIF_PAKET = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarifPaket/Delete`;
const PUT_UPDATE_STATUS_TARIF_PAKET = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTarifPaket/UpdateStatusActive`;


/***/ }),

/***/ 67910:
/*!*******************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_TIKET_PEMERIKSAAN.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL": () => (/* binding */ GET_ALL),
/* harmony export */   "GET_BY_ID": () => (/* binding */ GET_BY_ID),
/* harmony export */   "POST_SAVE": () => (/* binding */ POST_SAVE),
/* harmony export */   "PUT_UPDATE": () => (/* binding */ PUT_UPDATE),
/* harmony export */   "DELETE": () => (/* binding */ DELETE)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/GetAll`;
const GET_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/GetById/`;
const POST_SAVE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Insert`;
const PUT_UPDATE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Update`;
const DELETE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetupTiketPemeriksaan/Delete/`;


/***/ }),

/***/ 30556:
/*!*****************************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/SETUP_VOUCHER_PAYMENT.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_ALL": () => (/* binding */ GET_ALL),
/* harmony export */   "GET_BY_ID": () => (/* binding */ GET_BY_ID),
/* harmony export */   "POST_SAVE": () => (/* binding */ POST_SAVE),
/* harmony export */   "PUT_UPDATE": () => (/* binding */ PUT_UPDATE),
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "CANCEL": () => (/* binding */ CANCEL)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const GET_ALL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/GetAll`;
const GET_BY_ID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/GetById/`;
const POST_SAVE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/Insert`;
const PUT_UPDATE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/Update`;
const DELETE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/Delete/`;
const CANCEL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/SetVoucher/Cancel`;


/***/ }),

/***/ 57978:
/*!*************************************************!*\
  !*** ./src/app/api/BILLING/SETUP_DATA/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_SETUP_DATA": () => (/* binding */ API_SETUP_DATA)
/* harmony export */ });
/* harmony import */ var _SETUP_DATA_SETUP_GRUP_TARIF__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_GRUP_TARIF */ 29557);
/* harmony import */ var _SETUP_DATA_SETUP_KELOMPOK_TARIF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_KELOMPOK_TARIF */ 25853);
/* harmony import */ var _SETUP_DATA_SETUP_TARIF__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_TARIF */ 36684);
/* harmony import */ var _SETUP_DATA_SETUP_KELAS_PERAWATAN__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_KELAS_PERAWATAN */ 51306);
/* harmony import */ var _SETUP_DATA_SETUP_JENIS_RUANGAN__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_JENIS_RUANGAN */ 68759);
/* harmony import */ var _SETUP_DATA_SETUP_POLI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_POLI */ 36845);
/* harmony import */ var _SETUP_DATA_SETUP_TARIF_PAKET__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_TARIF_PAKET */ 69264);
/* harmony import */ var _SETUP_DATA_SETUP_PAYMENT_METHOD__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_PAYMENT_METHOD */ 43862);
/* harmony import */ var _SETUP_DATA_SETUP_BANK_PAYMENT__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_BANK_PAYMENT */ 33331);
/* harmony import */ var _SETUP_DATA_SETUP_VOUCHER_PAYMENT__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_VOUCHER_PAYMENT */ 30556);
/* harmony import */ var _SETUP_DATA_SETUP_EDC_PAYMENT__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_EDC_PAYMENT */ 24454);
/* harmony import */ var _SETUP_DATA_SETUP_TIKET_PEMERIKSAAN__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SETUP_DATA/SETUP_TIKET_PEMERIKSAAN */ 67910);












const API_SETUP_DATA = Object.assign({}, {
    "SETUP_GRUP_TARIF": _SETUP_DATA_SETUP_GRUP_TARIF__WEBPACK_IMPORTED_MODULE_0__,
    "SETUP_KELOMPOK_TARIF": _SETUP_DATA_SETUP_KELOMPOK_TARIF__WEBPACK_IMPORTED_MODULE_1__,
    "SETUP_TARIF": _SETUP_DATA_SETUP_TARIF__WEBPACK_IMPORTED_MODULE_2__,
    "SETUP_KELAS_PERAWATAN": _SETUP_DATA_SETUP_KELAS_PERAWATAN__WEBPACK_IMPORTED_MODULE_3__,
    "SETUP_JENIS_RUANGAN": _SETUP_DATA_SETUP_JENIS_RUANGAN__WEBPACK_IMPORTED_MODULE_4__,
    "SETUP_POLI": _SETUP_DATA_SETUP_POLI__WEBPACK_IMPORTED_MODULE_5__,
    "SETUP_TARIF_PAKET": _SETUP_DATA_SETUP_TARIF_PAKET__WEBPACK_IMPORTED_MODULE_6__,
    "SETUP_PAYMENT_METHOD": _SETUP_DATA_SETUP_PAYMENT_METHOD__WEBPACK_IMPORTED_MODULE_7__,
    "SETUP_BANK_PAYMENT": _SETUP_DATA_SETUP_BANK_PAYMENT__WEBPACK_IMPORTED_MODULE_8__,
    "SETUP_VOUCHER_PAYMENT": _SETUP_DATA_SETUP_VOUCHER_PAYMENT__WEBPACK_IMPORTED_MODULE_9__,
    "SETUP_EDC_PAYMENT": _SETUP_DATA_SETUP_EDC_PAYMENT__WEBPACK_IMPORTED_MODULE_10__,
    "SETUP_TIKET_PEMERIKSAAN": _SETUP_DATA_SETUP_TIKET_PEMERIKSAAN__WEBPACK_IMPORTED_MODULE_11__,
});


/***/ }),

/***/ 26043:
/*!************************************************************!*\
  !*** ./src/app/api/BILLING/TRANS_BILLING/TRANS_BILLING.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST_GET_DATA_PASIEN_FOR_LOOKUP": () => (/* binding */ POST_GET_DATA_PASIEN_FOR_LOOKUP),
/* harmony export */   "GET_SCAN_BILLING_IRJA_BY_NO_REGISTER": () => (/* binding */ GET_SCAN_BILLING_IRJA_BY_NO_REGISTER),
/* harmony export */   "GET_DATA_BILLING_IRJA_BY_NO_REGISTER": () => (/* binding */ GET_DATA_BILLING_IRJA_BY_NO_REGISTER),
/* harmony export */   "GET_SALDO_KLAIM_BY_NO_REGISTER": () => (/* binding */ GET_SALDO_KLAIM_BY_NO_REGISTER),
/* harmony export */   "POST_SAVE_SALDO_KLAIM": () => (/* binding */ POST_SAVE_SALDO_KLAIM),
/* harmony export */   "POST_SAVE_INVOICE_TANPA_PAYMENT": () => (/* binding */ POST_SAVE_INVOICE_TANPA_PAYMENT),
/* harmony export */   "POST_SAVE_PAYMENT_WITH_EXISTING_INVOICE": () => (/* binding */ POST_SAVE_PAYMENT_WITH_EXISTING_INVOICE),
/* harmony export */   "POST_SAVE_INVOICE_DENGAN_PAYMENT": () => (/* binding */ POST_SAVE_INVOICE_DENGAN_PAYMENT),
/* harmony export */   "GET_HISTORY_INVOICE_TANPA_PAYMENT": () => (/* binding */ GET_HISTORY_INVOICE_TANPA_PAYMENT),
/* harmony export */   "GET_SALDO_DEPOSIT_BY_NO_REGISTER": () => (/* binding */ GET_SALDO_DEPOSIT_BY_NO_REGISTER),
/* harmony export */   "POST_SAVE_DEPOSIT": () => (/* binding */ POST_SAVE_DEPOSIT),
/* harmony export */   "POST_SAVE_RESTITUSI": () => (/* binding */ POST_SAVE_RESTITUSI),
/* harmony export */   "GET_HISTORY_INVOICE_PAID": () => (/* binding */ GET_HISTORY_INVOICE_PAID),
/* harmony export */   "POST_SAVE_POSTING_BILLING_IRJA": () => (/* binding */ POST_SAVE_POSTING_BILLING_IRJA),
/* harmony export */   "POST_CANCEL_POSTING_BILLING_IRJA": () => (/* binding */ POST_CANCEL_POSTING_BILLING_IRJA),
/* harmony export */   "GET_HISTORY_ALL_PAYMENT": () => (/* binding */ GET_HISTORY_ALL_PAYMENT),
/* harmony export */   "POST_CANCEL_PAYMENT_BILLING_IRJA": () => (/* binding */ POST_CANCEL_PAYMENT_BILLING_IRJA),
/* harmony export */   "POST_CANCEL_INVOICE_BILLING_IRJA": () => (/* binding */ POST_CANCEL_INVOICE_BILLING_IRJA),
/* harmony export */   "GET_PRINT_RINCIAN_BIAYA_BILLING": () => (/* binding */ GET_PRINT_RINCIAN_BIAYA_BILLING)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/PersonPasienGetAllByDynamicFilter`;
const GET_SCAN_BILLING_IRJA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/ScanRegisterIRJA/`;
const GET_DATA_BILLING_IRJA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/GetDataBillingIrja/`;
const GET_SALDO_KLAIM_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrKlaimSaldo/GetByIdRegister/`;
const POST_SAVE_SALDO_KLAIM = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrKlaimSaldo/Insert`;
const POST_SAVE_INVOICE_TANPA_PAYMENT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithoutPayment`;
const POST_SAVE_PAYMENT_WITH_EXISTING_INVOICE = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrInvoice/PaymentForExistingInvoice`;
const POST_SAVE_INVOICE_DENGAN_PAYMENT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrInvoice/InsertInvoiceWithPayment`;
const GET_HISTORY_INVOICE_TANPA_PAYMENT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TrInvoice/GetHistoryInvoiceByIdRegister/`;
const GET_SALDO_DEPOSIT_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/DepositGetByIdRegister/`;
const POST_SAVE_DEPOSIT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/Deposit`;
const POST_SAVE_RESTITUSI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/Restitusi`;
const GET_HISTORY_INVOICE_PAID = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/GetDataTransaksi_PAID/`;
const POST_SAVE_POSTING_BILLING_IRJA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/BillPosting/`;
const POST_CANCEL_POSTING_BILLING_IRJA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/BillBatalPosting`;
const GET_HISTORY_ALL_PAYMENT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/GetDaftarPayment/`;
const POST_CANCEL_PAYMENT_BILLING_IRJA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/BillBatalPayment`;
const POST_CANCEL_INVOICE_BILLING_IRJA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBilling/BillBatalInvoice`;
const GET_PRINT_RINCIAN_BIAYA_BILLING = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiLaporan}` + `PIS/Rincian_Biaya_Billing`;


/***/ }),

/***/ 47682:
/*!**********************************************************************!*\
  !*** ./src/app/api/BILLING/TRANS_BILLING_IRDA/TRANS_BILLING_IRDA.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST_GET_DATA_PASIEN_FOR_LOOKUP": () => (/* binding */ POST_GET_DATA_PASIEN_FOR_LOOKUP),
/* harmony export */   "GET_SCAN_BILLING_IRDA_BY_NO_REGISTER": () => (/* binding */ GET_SCAN_BILLING_IRDA_BY_NO_REGISTER),
/* harmony export */   "GET_DATA_BILLING_IRDA_BY_NO_REGISTER": () => (/* binding */ GET_DATA_BILLING_IRDA_BY_NO_REGISTER),
/* harmony export */   "POST_SAVE_DRAF_BILLING_IRDA": () => (/* binding */ POST_SAVE_DRAF_BILLING_IRDA),
/* harmony export */   "POST_SAVE_PULANG_BILLING_IRDA": () => (/* binding */ POST_SAVE_PULANG_BILLING_IRDA),
/* harmony export */   "POST_BATAL_PULANG_BILLING_IRDA": () => (/* binding */ POST_BATAL_PULANG_BILLING_IRDA),
/* harmony export */   "POST_SAVE_PELUNASAN_BILLING_IRDA": () => (/* binding */ POST_SAVE_PELUNASAN_BILLING_IRDA),
/* harmony export */   "POST_BATAL_PELUNASAN_BILLING_IRDA": () => (/* binding */ POST_BATAL_PELUNASAN_BILLING_IRDA),
/* harmony export */   "POST_SAVE_REPROSES_BILLING_IRDA": () => (/* binding */ POST_SAVE_REPROSES_BILLING_IRDA),
/* harmony export */   "POST_SAVE_POSTING_BILLING_IRDA": () => (/* binding */ POST_SAVE_POSTING_BILLING_IRDA)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/GetPasienForLookupBillingIRDA`;
const GET_SCAN_BILLING_IRDA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/ScanRegisterIRDA/`;
const GET_DATA_BILLING_IRDA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/GetDataBillingIRDA/`;
const POST_SAVE_DRAF_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/SaveDraftIrda`;
const POST_SAVE_PULANG_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/PulangIRDA`;
const POST_BATAL_PULANG_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/BatalPulangIRDA`;
const POST_SAVE_PELUNASAN_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/PelunasanIRDA`;
const POST_BATAL_PELUNASAN_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/BatalPaymentIRDA`;
const POST_SAVE_REPROSES_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/ReprosesIRDA`;
const POST_SAVE_POSTING_BILLING_IRDA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRDA/BillPostingIRDA`;


/***/ }),

/***/ 66022:
/*!**********************************************************************!*\
  !*** ./src/app/api/BILLING/TRANS_BILLING_IRNA/TRANS_BILLING_IRNA.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POST_GET_DATA_PASIEN_FOR_LOOKUP": () => (/* binding */ POST_GET_DATA_PASIEN_FOR_LOOKUP),
/* harmony export */   "GET_SCAN_BILLING_IRNA_BY_NO_REGISTER": () => (/* binding */ GET_SCAN_BILLING_IRNA_BY_NO_REGISTER),
/* harmony export */   "GET_DATA_BILLING_IRNA_BY_NO_REGISTER": () => (/* binding */ GET_DATA_BILLING_IRNA_BY_NO_REGISTER),
/* harmony export */   "POST_SAVE_DRAF_BILLING_IRNA": () => (/* binding */ POST_SAVE_DRAF_BILLING_IRNA),
/* harmony export */   "POST_PULANG_BILLING_IRNA": () => (/* binding */ POST_PULANG_BILLING_IRNA),
/* harmony export */   "POST_BATAL_PULANG_BILLING_IRNA": () => (/* binding */ POST_BATAL_PULANG_BILLING_IRNA),
/* harmony export */   "POST_SAVE_DEPOSIT": () => (/* binding */ POST_SAVE_DEPOSIT),
/* harmony export */   "GET_DEPOSIT_BY_ID_REGISTER": () => (/* binding */ GET_DEPOSIT_BY_ID_REGISTER),
/* harmony export */   "POST_SAVE_RESTITUSI": () => (/* binding */ POST_SAVE_RESTITUSI),
/* harmony export */   "POST_SAVE_PELUNASAN": () => (/* binding */ POST_SAVE_PELUNASAN),
/* harmony export */   "POST_BATAL_PELUNASAN": () => (/* binding */ POST_BATAL_PELUNASAN),
/* harmony export */   "POST_REPROSES": () => (/* binding */ POST_REPROSES),
/* harmony export */   "PUT_EKSTRAK_BED": () => (/* binding */ PUT_EKSTRAK_BED),
/* harmony export */   "POST_SAVE_AKOMODASI_MANUAL": () => (/* binding */ POST_SAVE_AKOMODASI_MANUAL),
/* harmony export */   "PUT_DELETE_AKOMODASI_MANUAL": () => (/* binding */ PUT_DELETE_AKOMODASI_MANUAL)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);

const POST_GET_DATA_PASIEN_FOR_LOOKUP = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/GetPasienForLookupBillingIRNA`;
const GET_SCAN_BILLING_IRNA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/ScanRegisterIRNA/`;
const GET_DATA_BILLING_IRNA_BY_NO_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/GetDataBillingIRNA/`;
const POST_SAVE_DRAF_BILLING_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/SaveDraftIrna`;
const POST_PULANG_BILLING_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/PulangIRNA`;
const POST_BATAL_PULANG_BILLING_IRNA = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BatalPulangIRNA`;
const POST_SAVE_DEPOSIT = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/Deposit`;
const GET_DEPOSIT_BY_ID_REGISTER = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/DepositGetByIdRegister/`;
const POST_SAVE_RESTITUSI = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/Restitusi`;
const POST_SAVE_PELUNASAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/PelunasanIRNA`;
const POST_BATAL_PELUNASAN = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BatalPaymentIRNA`;
const POST_REPROSES = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/ReprosesIRNA`;
const PUT_EKSTRAK_BED = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransDetailAkomodasiInapEkstrak/EkstrakBed/`;
const POST_SAVE_AKOMODASI_MANUAL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BillAddAkomodasiManual`;
const PUT_DELETE_AKOMODASI_MANUAL = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.webApiBilling}` + `tarif/TransBillingIRNA/BillDeleteAkomodasiManual`;


/***/ }),

/***/ 35877:
/*!**************************************!*\
  !*** ./src/app/api/BILLING/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_BILLING": () => (/* binding */ API_BILLING)
/* harmony export */ });
/* harmony import */ var _BILLING_SETUP_DATA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BILLING/SETUP_DATA */ 57978);
/* harmony import */ var _BILLING_SETTING_HARGA_TARIF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BILLING/SETTING_HARGA_TARIF */ 38407);
/* harmony import */ var _TRANS_BILLING_TRANS_BILLING__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TRANS_BILLING/TRANS_BILLING */ 26043);
/* harmony import */ var _TRANS_BILLING_IRNA_TRANS_BILLING_IRNA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TRANS_BILLING_IRNA/TRANS_BILLING_IRNA */ 66022);
/* harmony import */ var _TRANS_BILLING_IRDA_TRANS_BILLING_IRDA__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TRANS_BILLING_IRDA/TRANS_BILLING_IRDA */ 47682);
/* harmony import */ var _KASIR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./KASIR */ 41345);
/* harmony import */ var _POSTING_BILLING_POSTING_BILLING__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./POSTING_BILLING/POSTING_BILLING */ 51597);







const API_BILLING = Object.assign({}, {
    "SETUP_DATA": _BILLING_SETUP_DATA__WEBPACK_IMPORTED_MODULE_0__.API_SETUP_DATA,
    "SETTING_HARGA_TARIF": _BILLING_SETTING_HARGA_TARIF__WEBPACK_IMPORTED_MODULE_1__.API_SETTING_HARGA_TARIF,
    "TRANS_BILLING": _TRANS_BILLING_TRANS_BILLING__WEBPACK_IMPORTED_MODULE_2__,
    "TRANS_BILLING_IRNA": _TRANS_BILLING_IRNA_TRANS_BILLING_IRNA__WEBPACK_IMPORTED_MODULE_3__,
    "TRANS_BILLING_IRDA": _TRANS_BILLING_IRDA_TRANS_BILLING_IRDA__WEBPACK_IMPORTED_MODULE_4__,
    "KASIR": _KASIR__WEBPACK_IMPORTED_MODULE_5__,
    "POSTING_BILLING": _POSTING_BILLING_POSTING_BILLING__WEBPACK_IMPORTED_MODULE_6__,
});


/***/ }),

/***/ 96922:
/*!***********************************************************!*\
  !*** ./src/app/helpers/utility/utility-helper.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityHelperService": () => (/* binding */ UtilityHelperService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class UtilityHelperService {
    constructor() { }
    /**
     * @onRemoveInfo
     * @Param Data: any, key: any[]
     * @Keterangan Menghapus key array yg ada pada Data
    */
    onRemoveInfo(Data, key) {
        key.forEach((e) => {
            delete Data[e];
        });
        return Data;
    }
    /**
     * @onSplitKodeWilayahKecamatan
     * @Param kode_kecamatan: any, Into: any[]
     * @Keterangan Memisahkan kode_kecamatan menjadi 3 array
     * @Keterangan Array 0 untuk kode_provinsi
     * @Keterangan Array 0 + Array 1 untuk kode_kota
    */
    onSplitKodeWilayahKecamatan(kode_kecamatan) {
        const arr = kode_kecamatan.split('.');
        const wilayah = {
            kode_wilayah_provinsi: arr[0],
            kode_wilayah_kota: `${arr[0]}.${arr[1]}`,
        };
        return wilayah;
    }
    /**
     * @getDiskon
     * @Param hargaAwal: number, dc: number
     * @Keterangan mendapatkan nilai diskon
    */
    getDiskon(hargaAwal, dc) {
        let diskon;
        let hargaDiskon;
        if (dc != 0) {
            diskon = hargaAwal * (dc / 100);
            hargaDiskon = diskon;
        }
        else {
            hargaDiskon = 0;
        }
        return hargaDiskon;
    }
    getAge(dateString) {
        let now = new Date();
        var yearNow = now.getFullYear();
        var monthNow = now.getMonth() + 1;
        var dateNow = now.getDate();
        var tgl = dateString.split('-');
        var m = tgl[1];
        var dob = new Date(parseInt(tgl[0]), parseInt(tgl[1]), parseInt(tgl[2]));
        var yearDob = dob.getFullYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var yearAge;
        yearAge = yearNow - yearDob;
        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow - monthDob;
        }
        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;
            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }
        let _age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };
        return _age;
    }
}
UtilityHelperService.ɵfac = function UtilityHelperService_Factory(t) { return new (t || UtilityHelperService)(); };
UtilityHelperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilityHelperService, factory: UtilityHelperService.ɵfac, providedIn: 'root' });


/***/ })

}]);