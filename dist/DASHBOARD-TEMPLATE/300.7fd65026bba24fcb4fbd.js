(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[300],{

/***/ 1725:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/Antrian/antrian-farmasi/antrian-farmasi.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AntrianFarmasiComponent": () => (/* binding */ AntrianFarmasiComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_kanban_v1_mol_kanban_v1_mol_kanban_v1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/molecules/kanban-v1/mol-kanban-v1/mol-kanban-v1.component */ 96671);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









class AntrianFarmasiComponent {
    constructor(socket, router, encryptionService, resepDokterService) {
        this.socket = socket;
        this.router = router;
        this.encryptionService = encryptionService;
        this.resepDokterService = resepDokterService;
    }
    ngOnInit() {
        this.resepDokterService.onGetAntrian();
        this.onSocketAntrian();
        this.onSocketPembayaran();
        this.onSocketResep();
        this.ButtonNav = [
            { Id: 'buatResep', Captions: 'Buat Resep', Icons1: 'fa-file-prescription' },
        ];
    }
    onSocketResep() {
        return this.socket.fromEvent('resep-callback')
            .subscribe((_result) => {
            console.log(_result);
            this.resepDokterService.onGetAntrian();
        });
    }
    onSocketAntrian() {
        return this.socket.fromEvent('antrian-callback')
            .subscribe((_result) => {
            console.log(_result);
            this.resepDokterService.onGetAntrian();
        });
    }
    onSocketPembayaran() {
        return this.socket.fromEvent('pembayaran-callback')
            .subscribe((_result) => {
            console.log(_result);
            this.resepDokterService.onGetAntrian();
        });
    }
    onClickButtonNav(args) {
        switch (args) {
            case "buatResep":
                this.router.navigate(['dashboard/Pharmacy/transaksi-obat/input-resep-irja']);
                break;
            default:
                break;
        }
    }
    onTransferItem() {
        let item;
        item = this.Columns[0]["Data"][0];
        this.Columns[0]["Data"].splice(0, 1);
        this.Columns[1]["Data"].push(item);
    }
    onTransferItemUsingDataDetailId(StatusBoardAwal, StatusBoardAkhir, DataDetailId) {
        let item;
        // ** Petakan Column By Board Id Awal
        let From = this.Columns.filter((item) => {
            return item.KeyField == StatusBoardAwal;
        });
        // ** Petakan Column By Board Id Akhir
        let To = this.Columns.filter((item) => {
            return item.KeyField == StatusBoardAkhir;
        });
        // ** Dapatkan Board Awal Data[i]["Id"] 
        let BoardAwalDataIndex = From[0]["Data"].findIndex((item) => {
            return item.Id == DataDetailId;
        });
        if (BoardAwalDataIndex !== -1) {
            // ** Isi Item 
            item = From[0]["Data"][BoardAwalDataIndex];
            // ** Hapus Board Awal 
            From[0]["Data"].splice(BoardAwalDataIndex, 1);
            // ** Isi Column Board Akhir
            To[0]["Data"].push(item);
            item = {};
        }
    }
    handePindahAntrian(Id) {
        // this.resepDokterService.generadeNoAntrian(noRegister).subscribe((result) => {
        //     this.resepDokterService.onGetAntrian();
        // });
        console.log('pindah antrian');
        const id = this.encryptionService.encrypt(JSON.stringify(Id));
        this.router.navigate(['dashboard/Pharmacy/transaksi-obat/telaah-resep-irja', id, "GRAHCIS"]);
    }
    handleSedangDiLayani(Id) {
        console.log('sedang di layani');
        const id = this.encryptionService.encrypt(JSON.stringify(Id));
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.isFormularium) {
            this.router.navigate(['dashboard/Pharmacy/transaksi-obat-formularium/transaksi-obat-formularium-irja', id, "GRAHCIS"]);
        }
        else {
            this.router.navigate(['dashboard/Pharmacy/transaksi-obat/transaksi-obat-irja', id, "GRAHCIS"]);
        }
    }
}
AntrianFarmasiComponent.ɵfac = function AntrianFarmasiComponent_Factory(t) { return new (t || AntrianFarmasiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__.Socket), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__.ResepDokterService)); };
AntrianFarmasiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AntrianFarmasiComponent, selectors: [["app-antrian-farmasi"]], decls: 3, vars: 4, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "Columns", "onPindahKeAntrian", "onSedangDiLayani"]], template: function AntrianFarmasiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickButtonNav", function AntrianFarmasiComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mol-kanban-v1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onPindahKeAntrian", function AntrianFarmasiComponent_Template_mol_kanban_v1_onPindahKeAntrian_1_listener($event) { return ctx.handePindahAntrian($event); })("onSedangDiLayani", function AntrianFarmasiComponent_Template_mol_kanban_v1_onSedangDiLayani_1_listener($event) { return ctx.handleSedangDiLayani($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, ctx.resepDokterService.dataAntrianIrja));
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_kanban_v1_mol_kanban_v1_mol_kanban_v1_component__WEBPACK_IMPORTED_MODULE_4__.MolKanbanV1Component], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 45849:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/Antrian/antrian-farmasi/telaah-resep-irja/telaah-resep-irja.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TelaahResepIrjaComponent": () => (/* binding */ TelaahResepIrjaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/grid.config.json */ 84217);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var src_app_modules_Pharmacy_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service */ 14307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service */ 20990);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
















const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = function () { return { wrapMode: "Both" }; };
class TelaahResepIrjaComponent {
    constructor(resepDokterService, transaksiObatIrjaService, router, encryptionService, activatedRoute, utilityService, utilityHelperService, pendaftaranPasienBaruService, formBuilder) {
        this.resepDokterService = resepDokterService;
        this.transaksiObatIrjaService = transaksiObatIrjaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.utilityHelperService = utilityHelperService;
        this.pendaftaranPasienBaruService = pendaftaranPasienBaruService;
        this.formBuilder = formBuilder;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'simpan', Captions: 'Simpan Telaah Resep', Icons1: 'fa-save fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.inputFieldState = 'detail';
        this.GridDataEditSettings = { allowEditing: true };
        this.keterangan = (field, data1) => {
            return data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_resep'];
        };
        this.totalharga = (field, data1) => {
            return (data1['is_racikan']) ? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'];
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
        this.whereField = "msi.nama_item";
        this.select = "'nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'";
        this.id_formularium = 0;
        this.fields = { text: 'nama_obat', value: 'id_item' };
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRJA.GET_OBAT_FORMULARIUM,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.id_item_racikan = null;
        this.nama_item_racikan = null;
        this.id_item = null;
        this.nama_item = null;
        this.currentResep = null;
        this.currentRacikan = null;
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            resep_id: [0, []],
            outlet: ['', []],
            pasien: ['', []],
            poli: ['', []],
            dokter: ['', []],
            umur: ['', []],
            total_bayar_resep: [0, []],
            telaah_nama_obat: [true, []],
            telaah_duplikasi_pengobatan: [true, []],
            telaah_interaksi_obat: [true, []],
            telaah_tepat_indikasi: [true, []],
            telaah_stabilitas: [true, []],
            keterangan_telaah_resep: ['', []]
        });
        this.itemsParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        this.id_item = args.itemData.id_item;
                        this.nama_item = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, this.currentResep.qty_resep);
                    }.bind(this)
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (this.currentResep.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', this.currentResep);
                        this.itemsObj.value = this.currentResep.id_item;
                    }, 10);
                }
            }
        };
        this.childGrid = {
            dataSource: this.dataSourceChild,
            // queryString: "resep_detail_id",
            // rowHeight: 30,
            // allowResizing: true,
            // allowTextWrap: true,
            // editSettings: { allowEditing: true},
            // textWrapSettings: { wrapMode: 'Both' },
            // columns: [
            //   { field: "nama_obat", headerText: "Nama Generik",allowEditing:false},
            //   { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams},
            //   { field: "qty_racikan", headerText: "Qty" ,allowEditing:false,width:50},
            //   { field: "harga_jual_apotek", headerText: "Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70},
            //   { field: "total_harga", headerText: "Total Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70}
            // ],
            // rowSelected(args){
            //     console.log(args);
            // }
        };
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.resepDokterService.onGetById(id).subscribe((result) => {
            this.dataHeader = result.data;
            console.log('header', this.dataHeader);
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            this.formInput.setValue({
                resep_id: id,
                outlet: result.data.nama_outlet,
                poli: result.data.nama_poli,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                umur: result.data.tgl_lahir,
                total_bayar_resep: 0,
                telaah_nama_obat: true,
                telaah_duplikasi_pengobatan: true,
                telaah_interaksi_obat: true,
                telaah_tepat_indikasi: true,
                telaah_stabilitas: true,
                keterangan_telaah_resep: ''
            });
            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(this.dataHeader.id_person, false)
                .subscribe((result) => {
                this.imageSrc = result.data;
            });
        });
    }
    mapingRacikan(details) {
        this.dataSourceChild = [];
        details.map((item) => {
            item.racikans.map((e) => {
                e.total_harga = e.qty_racikan * e.harga_jual_apotek;
                return e;
            });
            this.dataSourceChild.push(...item.racikans);
            item.total_harga = 0;
            return item;
        });
        let id_formularium = this.id_formularium;
        let id_item_racikan = this.id_item_racikan;
        let nama_item_racikan = this.nama_item_racikan;
        let currentRacikan = this.currentRacikan;
        this.itemsRacikanParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                console.log('formularium', id_formularium);
                this.itemsRacikanElem = document.createElement('input');
                return this.itemsRacikanElem;
            },
            read: () => {
                return this.itemsRacikanObj.text;
            },
            destroy: () => {
                this.itemsRacikanObj.destroy();
            },
            write: () => {
                this.itemsRacikanObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_11__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_10__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        id_item_racikan = args.itemData.id_item;
                        nama_item_racikan = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, currentRacikan.qty_racikan);
                    }.bind(this)
                });
                this.itemsRacikanObj.appendTo(this.itemsRacikanElem);
                if (currentRacikan.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', currentRacikan);
                        this.itemsRacikanObj.value = currentRacikan.id_item;
                    }, 10);
                }
            }
        };
        let dataSourceChild = this.dataSourceChild;
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            editSettings: { allowEditing: true },
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { field: "resep_detail_racikan_id", visible: false, headerText: "Racikan Id", allowEditing: false },
                { field: "nama_obat", headerText: "Nama Generik", allowEditing: false },
                { field: "id_item", visible: false, headerText: "Id Item", allowEditing: false },
                { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsRacikanParams },
                { field: "qty_racikan", headerText: "Qty", allowEditing: false, width: 50 },
                { field: "harga_jual_apotek", headerText: "Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 },
                { field: "total_harga", headerText: "Total Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 }
            ],
            rowSelected(args) {
                console.log(args.data.id_formularium);
                id_formularium = args.data.id_formularium;
                currentRacikan = args.data;
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                    }
                    if (args.action == 'edit') {
                        console.log('id_item_racikan = ', id_item_racikan);
                        args.data.id_item = id_item_racikan;
                        args.data.nama_item = nama_item_racikan;
                        let index = dataSourceChild.map((item) => { return item.resep_detail_racikan_id; }).indexOf(args.data.resep_detail_racikan_id);
                        dataSourceChild[index] = args.data;
                    }
                }
            }
        };
    }
    setFormGrif(selected, qty) {
        document.getElementsByName("harga_jual_apotek")[0].value = selected.harga_jual_apotek.toString();
        document.getElementsByName("total_harga")[0].value = (selected.harga_jual_apotek * qty).toString();
    }
    hanldeActionComplated(args) {
        if (args.requestType == 'save' && args.action == 'edit') {
            console.log(args);
            this.dataSource[args.rowIndex].id_item = this.id_item;
            this.dataSource[args.rowIndex].nama_item = this.nama_item;
            this.dataSource[args.rowIndex].harga_jual_apotek = args.data.harga_jual_apotek;
            this.dataSource[args.rowIndex].total_harga = args.data.total_harga;
            this.GridResepRacikan.refresh();
        }
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }
    handleSelected(args) {
        console.log(args);
        let tot = 0;
        this.GridResepRacikan.getSelectedRecords().map((item) => {
            let har = 0;
            if (item['is_racikan']) {
                item['racikans'].map((racikan) => {
                    har += this.dataSourceChild.find(o => o.resep_detail_racikan_id === racikan.resep_detail_racikan_id).total_harga;
                });
            }
            else {
                har = item['total_harga'];
            }
            tot += har;
        });
        this.total_bayar_resep.setValue(tot);
        this.id_formularium = (args.data.id_formularium) ? args.data.id_formularium : 0;
        this.currentResep = args.data;
        console.log('selected', this.GridResepRacikan.getSelectedRecords());
        console.log('data source', this.dataSource);
        console.log('data source grid', this.dataSourceChild);
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                break;
            case "simpan":
                let data = this.formInput.value;
                this.resepDokterService.insertTelaah(data).subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                    });
                });
                break;
            default:
                break;
        }
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TelaahResepIrjaComponent.ɵfac = function TelaahResepIrjaComponent_Factory(t) { return new (t || TelaahResepIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__.ResepDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_3__.TransaksiObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_6__.UtilityHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_7__.PendaftaranPasienBaruService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder)); };
TelaahResepIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: TelaahResepIrjaComponent, selectors: [["app-telaah-resep-irja"]], viewQuery: function TelaahResepIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
    } }, decls: 50, vars: 26, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], ["formControlName", "outlet", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], ["type", "checkbox", "formControlName", "telaah_nama_obat", 1, "form-check-input", "me-2"], ["type", "checkbox", "formControlName", "telaah_duplikasi_pengobatan", 1, "form-check-input"], ["type", "checkbox", "formControlName", "telaah_interaksi_obat", 1, "form-check-input"], ["type", "checkbox", "formControlName", "telaah_tepat_indikasi", 1, "form-check-input"], ["type", "checkbox", "formControlName", "telaah_stabilitas", 1, "form-check-input"], [1, "form-group"], ["for", "exampleFormControlTextarea1"], ["formControlName", "keterangan_telaah_resep", "id", "keterangan_telaah_resep", "name", "keterangan_telaah_resep", "rows", "3", 1, "form-control"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 12rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound", "rowSelected", "rowDeselected", "actionComplete"], ["GridResepRacikan", ""], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Cara Pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"]], template: function TelaahResepIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClickButtonNav", function TelaahResepIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Telaah Resep");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Apakah nama obat sesuai ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Apakah tidak ada duplikasi pengobatan ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26, "Apakah tidak ada interaksi obat dalam satu resep ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Apakah tepat indikasi obat dengan diagnosa dokter?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Apakah stabilitas obat sudah sesuai kondisi pasien ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Keterangan");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](40, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "ejs-grid", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("rowDataBound", function TelaahResepIrjaComponent_Template_ejs_grid_rowDataBound_44_listener($event) { return ctx.rowDataBound($event); })("dataBound", function TelaahResepIrjaComponent_Template_ejs_grid_dataBound_44_listener() { return ctx.onDataBound(); })("rowSelected", function TelaahResepIrjaComponent_Template_ejs_grid_rowSelected_44_listener($event) { return ctx.handleSelected($event); })("rowDeselected", function TelaahResepIrjaComponent_Template_ejs_grid_rowDeselected_44_listener($event) { return ctx.handleSelected($event); })("actionComplete", function TelaahResepIrjaComponent_Template_ejs_grid_actionComplete_44_listener($event) { return ctx.hanldeActionComplated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](47, "e-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "e-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](49, "e-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](25, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 100)("valueAccessor", ctx.quantity);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.AggregateColumnDirective], styles: [""] });


/***/ }),

/***/ 42500:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda-daftar/refund-obat-irda-daftar.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrdaDaftarComponent": () => (/* binding */ RefundObatIrdaDaftarComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 95129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irda/refund-obat-irda.service */ 89194);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component */ 55682);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = ["GridData"];
class RefundObatIrdaDaftarComponent {
    constructor(router, encryptionService, refundObatIrdaService) {
        this.router = router;
        this.encryptionService = encryptionService;
        this.refundObatIrdaService = refundObatIrdaService;
        this.ButtonNav = [
            { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
            { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
        ];
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.FilterColumnDatasource = [
            { text: 'No. Refund', value: 'tpo.nomor_retur_penjualan_obat' },
            { text: 'No. Penjualan', value: 'tpo.nomor_penjualan_obat' },
            { text: 'Nama Outlet', value: 'pso.nama_outlet' },
            { text: 'Status Refund', value: 'tpo.judul_kontrak' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
    }
    ngAfterViewInit() {
        // this.GridData.Grid.refresh();
        this.handlePencarianFilter([]);
    }
    ngOnInit() {
    }
    handlePencarianFilter(args) {
        this.refundObatIrdaService.onGetAllByParamsSource(args);
        // setTimeout(()=>{
        // this.GridData.Grid.refresh();
        // },500)
    }
    handleinitialized(component) {
        this.GridData = component;
    }
    handleClickButtonNav(args) {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/Pharmacy/refund-obat/refund-obat-irda');
                break;
            case 'Edit':
                const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_penjualan_obat_id));
                this.router.navigate(['dashboard/Pharmacy/refund-obat/refund-obat-irda-detail', id, "GRAHCIS"]);
                break;
            case 'Delete':
                // this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
        console.log(this.SelectedData);
    }
    handleRowDataBound(args) {
        let status_transaksi = args.data.status_transaksi;
        if (status_transaksi == "VALIDATED") {
            args.row.classList.add('e-validation-background');
        }
        if (status_transaksi == "CANCELED") {
            args.row.classList.add('e-canceled-background');
        }
        if (status_transaksi == "CLOSED") {
            args.row.classList.add('e-closed-background');
        }
    }
}
RefundObatIrdaDaftarComponent.ɵfac = function RefundObatIrdaDaftarComponent_Factory(t) { return new (t || RefundObatIrdaDaftarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrdaService)); };
RefundObatIrdaDaftarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RefundObatIrdaDaftarComponent, selectors: [["app-refund-obat-irda-daftar"]], viewQuery: function RefundObatIrdaDaftarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.GridData = _t.first);
    } }, decls: 8, vars: 9, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [3, "FilterColumnDatasource", "handle-pencarian"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected", "row-data-bound"], ["GridData", ""]], template: function RefundObatIrdaDaftarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrdaDaftarComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mol-offcanvas-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("handle-pencarian", function RefundObatIrdaDaftarComponent_Template_mol_offcanvas_filter_handle_pencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mol-grid", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("row-selected", function RefundObatIrdaDaftarComponent_Template_mol_grid_row_selected_5_listener($event) { return ctx.handleSelectedRow($event); })("row-data-bound", function RefundObatIrdaDaftarComponent_Template_mol_grid_row_data_bound_5_listener($event) { return ctx.handleRowDataBound($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("FilterColumnDatasource", ctx.FilterColumnDatasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("grid-height", "calc(100vh - 19rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, ctx.refundObatIrdaService.dataSource))("grid-paging", true)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__.MolOffcanvasFilterComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.MolGridComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 71887:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda-detail/refund-obat-irda-detail.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrdaDetailComponent": () => (/* binding */ RefundObatIrdaDetailComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/detailItem.json */ 1584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irda/refund-obat-irda.service */ 89194);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-textarea/mol-input-textarea.component */ 81892);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);















const _c0 = ["modalCanceled"];
const _c1 = ["modalClosed"];
function RefundObatIrdaDetailComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrdaDetailComponent_ng_template_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrdaDetailComponent_ng_template_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r4.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrdaDetailComponent_ng_template_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r5.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class RefundObatIrdaDetailComponent {
    constructor(formBuilder, refundObatIrdaService, encryptionService, activatedRoute, location, utilityService, modalService) {
        this.formBuilder = formBuilder;
        this.refundObatIrdaService = refundObatIrdaService;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
            { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' }
        ];
        this.ConfigGrid = /*#__PURE__*/ (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            nomor_retur_penjualan_obat: ["",],
            tanggal_retur_penjualan_obat: [null,],
            nama_outlet: ["",],
            keterangan_retur_penjualan_obat: ["",],
            jumlah_item_retur: [0,],
        });
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        this.id = parseInt(id);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.refundObatIrdaService.onGetById(id).subscribe((result) => {
            this.formInput.setValue({
                nomor_retur_penjualan_obat: result.data.nomor_retur_penjualan_obat,
                tanggal_retur_penjualan_obat: result.data.tanggal_retur_penjualan_obat,
                nama_outlet: result.data.nama_outlet,
                keterangan_retur_penjualan_obat: result.data.keterangan_retur_penjualan_obat,
                jumlah_item_retur: result.data.jumlah_item_retur,
            });
            this.refundObatIrdaService.setDetail(id);
        });
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Validasi':
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Apakah anda yakin ingin validasi?',
                    text: "",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Iya Validasi',
                    cancelButtonText: 'Tidak',
                    focusCancel: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.onValidation();
                    }
                });
                break;
            case 'Cancel':
                this.modalRef = this.modalService.show(this.modalCanceled, Object.assign({}, { class: 'modal-lg' }));
                break;
            case 'Close':
                this.modalRef = this.modalService.show(this.modalClosed, Object.assign({}, { class: 'modal-lg' }));
                break;
            default:
                break;
        }
    }
    onValidation() {
        this.refundObatIrdaService.Validation(this.id).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Validasi', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
            });
        });
    }
    onCalceled() {
        let reason_canceled = document.getElementsByName("reason_canceled")[0].value;
        this.refundObatIrdaService.Cancel(this.id, reason_canceled).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Cancel', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
                this.modalRef.hide();
            });
        });
    }
}
RefundObatIrdaDetailComponent.ɵfac = function RefundObatIrdaDetailComponent_Factory(t) { return new (t || RefundObatIrdaDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService)); };
RefundObatIrdaDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: RefundObatIrdaDetailComponent, selectors: [["app-refund-obat-irda-detail"]], viewQuery: function RefundObatIrdaDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalClosed = _t.first);
    } }, decls: 18, vars: 18, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "nomor_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "tanggal_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "nama_outlet", 3, "label", "inputFieldState"], ["formControlName", "keterangan_retur_penjualan_obat", 3, "label", "inputFieldState"], [3, "grid-DataSource", "columns"], [1, "row"], [1, "col-sm-5"], [1, "col-sm-4"], [1, "col-sm-3"], ["formControlName", "jumlah_item_retur", 3, "label", "isFooter", "inputFieldState"], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrdaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrdaDetailComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mol-input-textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mol-grid", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mol-input-numeric", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, RefundObatIrdaDetailComponent_ng_template_16_Template, 18, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "No Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Tanggal Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Keterangan")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 16, ctx.refundObatIrdaService.dataDetail$))("columns", ctx.ConfigGrid.TrDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Jumlah Item")("isFooter", true)("inputFieldState", "detail")("inputFieldState", "detail");
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__.MolInputTextareaComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__.MolGridComponent, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 10626:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda/refund-obat-irda.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrdaComponent": () => (/* binding */ RefundObatIrdaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/lookupitem.json */ 49755);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 55214);
/* harmony import */ var _json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/LookupGridNoRegistrasi.json */ 94421);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irda/refund-obat-irda.service */ 89194);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/MM/services/setup-data/setup-item/setup-item.service */ 11781);
/* harmony import */ var _services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_org_input_look_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component */ 96053);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);






















const _c0 = ["LookupNoRegistrasi"];
const _c1 = ["gridDetail"];
const _c2 = ["LookupItem"];
const _c3 = ["modalQty"];
const _c4 = ["modalSatuan"];
const _c5 = ["modalCanceled"];
function RefundObatIrdaComponent_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Edit Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_ng_template_38_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r10.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown.enter", function RefundObatIrdaComponent_ng_template_38_Template_input_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r12.handleQtyChange(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RefundObatIrdaComponent_ng_template_40_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", item_r15.kode_satuan);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r15.kode_satuan, " ");
} }
function RefundObatIrdaComponent_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Edit Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_ng_template_40_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r16.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "select", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown.enter", function RefundObatIrdaComponent_ng_template_40_Template_select_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r18.handleSatuanChange(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RefundObatIrdaComponent_ng_template_40_option_10_Template, 2, 2, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r6.detailSelected.kode_satuan_besar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r6.datasatuan);
} }
function RefundObatIrdaComponent_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_ng_template_42_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r19.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_ng_template_42_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r21.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_ng_template_42_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
class RefundObatIrdaComponent {
    constructor(formBuilder, refundObatIrdaService, encryptionService, activatedRoute, location, renderer, modalService, changeDetection, utilityService, setupItemService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.refundObatIrdaService = refundObatIrdaService;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.renderer = renderer;
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.utilityService = utilityService;
        this.setupItemService = setupItemService;
        this.setupOutletService = setupOutletService;
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.urlNoRegistrasi = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_3__.PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRDA.GET_PASIEN_IRDA;
        this.LookupGridNoRegistrasi = /*#__PURE__*/ (_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fas fa-undo fa-sm' },
            { Id: 'simpan', Captions: 'simpan', Icons1: 'fa-save' },
        ];
        this.GridDataEditSettings = { allowEditing: true };
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.subscriptions = [];
        this.counterChildGrid = 0;
        this.datasatuan = [];
        this.childGridSatuan = [];
        this.id_stockroom = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.totalJumlahItem = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(0);
        this.itemBatch = [];
        this.id_item = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(0);
        //=========
        this.id = 0;
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            id_register: ['',],
            depo: ['',],
            debitur: ['',],
            nama_pasien: ['',],
            no_rm: ['',],
            no_register: ['',],
            dokter: ['',],
            umur: ['',],
            alamat: ['',],
            poli: ['',],
        });
        let id_item = this.id_item;
        let currentChildGird = null;
        this.itemsParams = {
            create: () => {
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.setupItemService.onGetEDItem(this.id_stockroom, id_item.value).subscribe((result) => {
                    this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__.DropDownList({
                        value: '',
                        dataSource: result.data,
                        fields: { value: 'batch_number', text: 'batch_number' },
                        enabled: true,
                        placeholder: 'Select a Batch',
                        floatLabelType: 'Never',
                        change: function (args) {
                            this.setFormGrif(args);
                            id_item.next(args.itemData.id_item);
                        }.bind(this),
                    });
                    this.itemsObj.appendTo(this.itemsElem);
                });
                if (currentChildGird) {
                    setTimeout(() => {
                        this.itemsObj.value = currentChildGird.batch_number;
                    }, 500);
                }
            }
        };
        let dataSourceChild = this.dataScourceGridChild;
        let counterChildGrid = this.counterChildGrid;
        let dataSourceGrid = this.dataSourceGrid;
        let totalJumlahItem = this.totalJumlahItem;
        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "penjualan_obat_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: false,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "penjualan_obat_id", headerText: 'penjualan_obat_id', width: 100, visible: false },
                { field: "penjualan_obat_detail_id", headerText: 'penjualan_obat_detail_id', width: 100, visible: false },
                { field: "no_urut", headerText: 'urut', visible: false },
                { field: "id_item", headerText: 'id_item', width: 100, visible: false },
                // { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "batch_number", headerText: 'Batch Number', textAlign: 'Right', width: 200 },
                { field: "expired_date", headerText: 'Expired Date', textAlign: 'Right', width: 80, editType: "datepickeredit", format: "dd MMMM yyyy" },
                { field: "qty_besar", headerText: 'Banyak', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "satuan", headerText: 'Satuan', visible: false, editType: 'dropdownedit', edit: this.satuanParams, width: 200 },
                { field: "isi", headerText: 'Isi', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
                { field: "qty_retur_penjualan_obat", headerText: 'Qty', headerTextAlign: 'Center', textAlign: 'Right', width: 50, format: 'N2', allowEditing: true },
                { field: "nama_satuan", headerText: 'Satuan', headerTextAlign: 'Center', textAlign: 'Left', width: 100, format: 'N2', allowEditing: false, visible: false },
                { field: "harga_satuan_retur", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
                { field: "sub_total", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
            ],
            rowSelected(args) {
                currentChildGird = args.data;
            },
            actionBegin(args) {
                if (args.requestType === 'add') {
                    args.data['id_item'] = this.parentDetails.parentRowData.id_item;
                    args.data['penjualan_obat_id'] = this.parentDetails.parentRowData.penjualan_obat_id;
                    args.data['penjualan_obat_detail_id'] = this.parentDetails.parentRowData.penjualan_obat_detail_id;
                    args.data['harga_satuan_retur'] = this.parentDetails.parentRowData.harga_satuan;
                    args.data['counterChildGrid'] = counterChildGrid++;
                    id_item.next(this.parentDetails.parentRowData.id_item);
                }
                // if (args.requestType === 'beginEdit'){
                //     SelectedDataRacikanObat = args.rowData;
                // }
            },
            actionComplete(args) {
                if (args.requestType === 'save') {
                    console.log('complete', args);
                    if (args.action === 'add') {
                        dataSourceChild.push(args.data);
                    }
                    if (args.action === 'edit') {
                        let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data.counterChildGrid);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_retur_penjualan_obat);
                            }
                        });
                        itemPrent.qty_retur = total;
                        data.push(itemPrent);
                    });
                    // setTimeout(()=>{
                    dataSourceGrid.next(data);
                    totalJumlahItem.next(data.sum('qty_retur'));
                    // console.log(data);
                    // },500)
                }
                if (args.requestType === "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data[0].counterChildGrid);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_pemakaian_internal);
                            }
                        });
                        itemPrent.qty = total;
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
            }
        };
        this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
            if (e.keyCode == 112) {
                this.LookupItem.onOpenModal();
                e.preventDefault();
            }
        });
        this.GridDetailToolbar = [
            { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
        ];
        this.setupOutletService.setDataSource();
    }
    ngAfterViewInit() {
        // let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        // console.log(pemesanan_id);
        // this.onLoadDetailData(pemesanan_id);
    }
    onDataBound() {
        this.gridDetail.detailRowModule.expandAll();
    }
    setFormGrif(args) {
        document.getElementsByName("expired_date")[0].value = args.itemData.expired_date;
        document.getElementsByName("nama_satuan")[0].value = args.itemData.nama_satuan;
        document.getElementsByName("hpp_satuan")[0].value = args.itemData.harga_satuan_netto;
    }
    heandleSelectedNoRegistrasi(args) {
        this.formInput.setValue({
            id_register: args.id_register,
            depo: this.depo.value,
            debitur: args.nama_debitur,
            nama_pasien: args.nama_pasien,
            no_rm: args.no_rekam_medis,
            no_register: args.no_register,
            dokter: args.nama_dokter,
            umur: args.umur,
            alamat: args.alamat_pasien,
            poli: args.nama_poli,
        });
    }
    handleClickRefesh() {
        if (this.depo.value == '') {
            this.utilityService.onShowingCustomAlert('warning', 'Validasi', 'Depo belum di pilih');
            return false;
        }
        this.refundObatIrdaService.getDetailPenjualan(this.depo.value, this.id_register.value).subscribe((result) => {
            result.data.map((e, i) => {
                return e.qty = 0;
            });
            this.dataSourceGrid.next(result.data);
        });
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    handleSelectdRow(args) {
        this.currentIndex = args.rowIndex;
        this.datasatuan = args.data.satuans;
        this.detailSelected = args.data;
        this.satuanVal = args.data.kode_satuan_besar;
    }
    handleActionCompleted($event) {
        if ($event.requestType == 'save') {
            console.log($event);
            this.refundObatIrdaService.updateFromInline($event.rowIndex, $event.data, $event.rowData);
            this.gridDetail.refresh();
        }
        // console.log('complate parent',this.gridDetail.childGrid.dataSource);
    }
    KeyDownHandler(event) {
        if (event.keyCode === 106) {
            this.onOpenQty();
        }
        ;
        if (event.keyCode === 46) {
            this.refundObatIrdaService.removeDataDetail(this.currentIndex);
            this.gridDetail.refresh();
            setTimeout(() => {
                if (this.currentIndex != 0) {
                    this.gridDetail.selectedRowIndex = 0;
                }
            }, 100);
        }
        ;
        //   if (event.keyCode === 111) {
        //       this.onOpenHarga()
        //   }
        //   if (event.keyCode === 109) {
        //       this.onOpenSubtotal()
        //   }
        if (event.keyCode === 107) {
            this.onOpenSatuan();
        }
    }
    onToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.LookupItem.onOpenModal();
                break;
            default:
                break;
        }
    }
    onOpenQty() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.modalService.onShow, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("QtyValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalQty, Object.assign({}, { class: 'modal-lg' }));
    }
    onOpenSatuan() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.modalService.onShown, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("SatuanValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalSatuan, Object.assign({}, { class: 'modal-lg' }));
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
    selectLastRowdetail() {
        setTimeout(() => {
            let last = this.gridDetail.dataSource;
            this.gridDetail.selectedRowIndex = last.length - 1;
        }, 150);
    }
    onSave() {
        if (this.formInput.valid) {
            let data = this.formInput.value;
            this.dataScourceGridChild.map((e, i) => {
                e.sub_total = e.qty_retur_penjualan_obat * e.harga_satuan_retur;
                e.no_urut = i + 1;
                return e;
            });
            data.jumlah_item_retur = this.dataScourceGridChild.sum('qty_retur_penjualan_obat');
            data.total_transaksi_retur = this.dataScourceGridChild.sum('sub_total');
            data.nomor_retur_penjualan_obat = '23135';
            data.tanggal_retur_penjualan_obat = '2021-12-10';
            data.id_outlet_terima_retur = this.depo.value;
            console.log('data header', data);
            console.log('data detail', this.dataScourceGridChild);
            data.details = this.dataScourceGridChild;
            console.log('data', data);
            this.refundObatIrdaService.Insert(data).subscribe((result) => {
                console.log(result);
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Refund Obat', result.message)
                    .then(() => {
                    this.onReset();
                });
            });
        }
        else {
            alert('isi semua data');
        }
    }
    onReset() {
        this.formInput.reset();
        this.dataScourceGridChild = [];
        this.dataSourceGrid.next([]);
        this.ChildGrid.dataSource = [];
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Reset':
                this.onReset();
                break;
            case "simpan":
                // this.dataScourceGridChild;
                this.onSave();
                break;
            default:
                break;
        }
    }
    get id_register() { return this.formInput.get('id_register'); }
    get depo() { return this.formInput.get('depo'); }
}
RefundObatIrdaComponent.ɵfac = function RefundObatIrdaComponent_Factory(t) { return new (t || RefundObatIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irda_refund_obat_irda_service__WEBPACK_IMPORTED_MODULE_4__.RefundObatIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_5__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_8__.SetupItemService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_9__.SetupOutletService)); };
RefundObatIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RefundObatIrdaComponent, selectors: [["app-refund-obat-irda"]], viewQuery: function RefundObatIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.LookupNoRegistrasi = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.LookupItem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalQty = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalSatuan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
    } }, decls: 44, vars: 55, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], [3, "lookup-url", "idTitle", "modal-title", "columns", "filter-lookup", "label", "onGetSelectedData"], ["LookupNoRegistrasi", ""], ["formControlName", "no_rm", 3, "label", "inputFieldState"], ["formControlName", "debitur", 3, "label", "inputFieldState"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "depo", 3, "dataSource", "fields", "allowFiltering"], ["MaritalOutletDropdown", ""], ["formControlName", "alamat", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], [3, "editSettings", "dataSource", "gridLines", "allowResizing", "childGrid", "actionComplete", "toolbarClick", "load", "rowSelected", "dataBound"], ["gridDetail", ""], ["field", "no_urut", "headerText", "urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_outlet", "headerText", "Depo", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "user_inputed_name", "headerText", "User Entry", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "time_inputed", "headerText", "Waktu Entry", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "kode_item", "headerText", "Kode Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "qty_jual", "headerText", "QTY Jual", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "qty_returned", "headerText", "QTY Telah Diretur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "qty_retur", "headerText", "QTY Akan Di Retur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["modalQty", ""], ["modalSatuan", ""], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], ["type", "text", "id", "QtyValueId", 1, "form-control", 3, "keydown.enter"], ["qtyValueId", ""], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary"], ["id", "SatuanValueId", "multiple", "", 1, "form-control", 3, "value", "keydown.enter"], ["satuanValueId", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "col-sm-4"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrdaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "org-input-look-up", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onGetSelectedData", function RefundObatIrdaComponent_Template_org_input_look_up_onGetSelectedData_4_listener($event) { return ctx.heandleSelectedNoRegistrasi($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrdaComponent_Template_button_click_11_listener() { return ctx.handleClickRefesh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "atm-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "ejs-dropdownlist", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "mol-input-text", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "mol-input-text", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "mol-input-text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "ejs-grid", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("actionComplete", function RefundObatIrdaComponent_Template_ejs_grid_actionComplete_24_listener($event) { return ctx.handleActionCompleted($event); })("toolbarClick", function RefundObatIrdaComponent_Template_ejs_grid_toolbarClick_24_listener($event) { return ctx.onToolbarClick($event); })("load", function RefundObatIrdaComponent_Template_ejs_grid_load_24_listener($event) { return ctx.handleLoadGrid($event); })("rowSelected", function RefundObatIrdaComponent_Template_ejs_grid_rowSelected_24_listener($event) { return ctx.handleSelectdRow($event); })("dataBound", function RefundObatIrdaComponent_Template_ejs_grid_dataBound_24_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](27, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "e-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "e-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "e-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "e-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "e-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "e-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "e-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "e-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "e-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "e-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, RefundObatIrdaComponent_ng_template_38_Template, 13, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](40, RefundObatIrdaComponent_ng_template_40_Template, 14, 2, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](42, RefundObatIrdaComponent_ng_template_42_Template, 18, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("lookup-url", ctx.urlNoRegistrasi)("idTitle", "nama_pasien")("modal-title", "Data No Registrasi")("columns", ctx.LookupGridNoRegistrasi.columns)("filter-lookup", _r0.filter)("label", "No Registrasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "No Rm")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Debitur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Nama Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("LabelCaption", "Depo");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 51, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Alamat Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("editSettings", ctx.GridDataEditSettings)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](26, 53, ctx.dataSourceGrid))("gridLines", "Both")("allowResizing", true)("childGrid", ctx.ChildGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_10__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _shared_components_organism_loockUp_org_input_look_up_org_input_look_up_component__WEBPACK_IMPORTED_MODULE_11__.OrgInputLookUpComponent, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_13__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownListComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.AggregateColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    padding-left: 12px;\r\n    width: 100%;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border: 0;\r\n  }\r\n  \r\n  #DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  #NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n  }\r\n  \r\n  div.head[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n  }\r\n  \r\n  .is-racikan[_ngcontent-%COMP%]{\r\n    background-color: #f3e6f3;\r\n  }\r\n  \r\n  .form_paragraf[_ngcontent-%COMP%]{\r\n    display: inline-block!important;\r\n  }\r\n  \r\n  .form-label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  #basic-addon1[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  padding-left: 12px;\r\n  width: 100%;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border: 0;\r\n}\r\n  \r\n  .e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\n  min-height: 14px !important;\r\n}\r\n  \r\n  th.e-headercell[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  color: black;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  padding: 5px !important;\r\n  height: 30px !important;\r\n}\r\n  \r\n  span.e-headertext[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n}\r\n  \r\n  td.e-rowcell[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}"] });


/***/ }),

/***/ 82184:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja-daftar/refund-obat-irja-daftar.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrjaDaftarComponent": () => (/* binding */ RefundObatIrjaDaftarComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 24719);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irja/refund-obat-irja.service */ 53648);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component */ 55682);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = ["GridData"];
class RefundObatIrjaDaftarComponent {
    constructor(router, encryptionService, refundObatIrjaService) {
        this.router = router;
        this.encryptionService = encryptionService;
        this.refundObatIrjaService = refundObatIrjaService;
        this.ButtonNav = [
            { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
            { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
        ];
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.FilterColumnDatasource = [
            { text: 'No. Refund', value: 'tpo.nomor_retur_penjualan_obat' },
            { text: 'No. Penjualan', value: 'tpo.nomor_penjualan_obat' },
            { text: 'Nama Outlet', value: 'pso.nama_outlet' },
            { text: 'Status Refund', value: 'tpo.judul_kontrak' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
    }
    ngAfterViewInit() {
        // this.GridData.Grid.refresh();
        this.handlePencarianFilter([]);
    }
    ngOnInit() {
    }
    handlePencarianFilter(args) {
        this.refundObatIrjaService.onGetAllByParamsSource(args);
        // setTimeout(()=>{
        // this.GridData.Grid.refresh();
        // },500)
    }
    handleinitialized(component) {
        this.GridData = component;
    }
    handleClickButtonNav(args) {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/Pharmacy/refund-obat/refund-obat-irja');
                break;
            case 'Edit':
                const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_penjualan_obat_id));
                this.router.navigate(['dashboard/Pharmacy/refund-obat/refund-obat-irja-detail', id, "GRAHCIS"]);
                break;
            case 'Delete':
                // this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
        console.log(this.SelectedData);
    }
    handleRowDataBound(args) {
        let status_transaksi = args.data.status_transaksi;
        if (status_transaksi == "VALIDATED") {
            args.row.classList.add('e-validation-background');
        }
        if (status_transaksi == "CANCELED") {
            args.row.classList.add('e-canceled-background');
        }
        if (status_transaksi == "CLOSED") {
            args.row.classList.add('e-closed-background');
        }
    }
}
RefundObatIrjaDaftarComponent.ɵfac = function RefundObatIrjaDaftarComponent_Factory(t) { return new (t || RefundObatIrjaDaftarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrjaService)); };
RefundObatIrjaDaftarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RefundObatIrjaDaftarComponent, selectors: [["app-refund-obat-irja-daftar"]], viewQuery: function RefundObatIrjaDaftarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.GridData = _t.first);
    } }, decls: 8, vars: 9, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [3, "FilterColumnDatasource", "handle-pencarian"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected", "row-data-bound"], ["GridData", ""]], template: function RefundObatIrjaDaftarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrjaDaftarComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mol-offcanvas-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("handle-pencarian", function RefundObatIrjaDaftarComponent_Template_mol_offcanvas_filter_handle_pencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mol-grid", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("row-selected", function RefundObatIrjaDaftarComponent_Template_mol_grid_row_selected_5_listener($event) { return ctx.handleSelectedRow($event); })("row-data-bound", function RefundObatIrjaDaftarComponent_Template_mol_grid_row_data_bound_5_listener($event) { return ctx.handleRowDataBound($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("FilterColumnDatasource", ctx.FilterColumnDatasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("grid-height", "calc(100vh - 19rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, ctx.refundObatIrjaService.dataSource))("grid-paging", true)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__.MolOffcanvasFilterComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.MolGridComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 94993:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja-detail/refund-obat-irja-detail.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrjaDetailComponent": () => (/* binding */ RefundObatIrjaDetailComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/detailItem.json */ 90580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irja/refund-obat-irja.service */ 53648);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-textarea/mol-input-textarea.component */ 81892);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);















const _c0 = ["modalCanceled"];
const _c1 = ["modalClosed"];
function RefundObatIrjaDetailComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrjaDetailComponent_ng_template_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrjaDetailComponent_ng_template_17_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r4.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrjaDetailComponent_ng_template_17_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r5.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class RefundObatIrjaDetailComponent {
    constructor(formBuilder, refundObatIrjaService, encryptionService, activatedRoute, location, utilityService, modalService) {
        this.formBuilder = formBuilder;
        this.refundObatIrjaService = refundObatIrjaService;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
            { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' }
        ];
        this.ConfigGrid = /*#__PURE__*/ (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            nomor_retur_penjualan_obat: ["",],
            tanggal_retur_penjualan_obat: [null,],
            nomor_penjualan_obat: ["",],
            nama_outlet: ["",],
            keterangan_retur_penjualan_obat: ["",],
            jumlah_item_retur: [0,],
        });
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        this.id = parseInt(id);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.refundObatIrjaService.onGetById(id).subscribe((result) => {
            this.formInput.setValue({
                nomor_retur_penjualan_obat: result.data.nomor_retur_penjualan_obat,
                tanggal_retur_penjualan_obat: result.data.tanggal_retur_penjualan_obat,
                nomor_penjualan_obat: result.data.nomor_penjualan_obat,
                nama_outlet: result.data.nama_outlet,
                keterangan_retur_penjualan_obat: result.data.keterangan_retur_penjualan_obat,
                jumlah_item_retur: result.data.jumlah_item_retur,
            });
            this.refundObatIrjaService.setDetail(id);
        });
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Validasi':
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Apakah anda yakin ingin validasi?',
                    text: "",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Iya Validasi',
                    cancelButtonText: 'Tidak',
                    focusCancel: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.onValidation();
                    }
                });
                break;
            case 'Cancel':
                this.modalRef = this.modalService.show(this.modalCanceled, Object.assign({}, { class: 'modal-lg' }));
                break;
            case 'Close':
                this.modalRef = this.modalService.show(this.modalClosed, Object.assign({}, { class: 'modal-lg' }));
                break;
            default:
                break;
        }
    }
    onValidation() {
        this.refundObatIrjaService.Validation(this.id).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Validasi', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
            });
        });
    }
    onCalceled() {
        let reason_canceled = document.getElementsByName("reason_canceled")[0].value;
        this.refundObatIrjaService.Cancel(this.id, reason_canceled).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Cancel', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
                this.modalRef.hide();
            });
        });
    }
}
RefundObatIrjaDetailComponent.ɵfac = function RefundObatIrjaDetailComponent_Factory(t) { return new (t || RefundObatIrjaDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService)); };
RefundObatIrjaDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: RefundObatIrjaDetailComponent, selectors: [["app-refund-obat-irja-detail"]], viewQuery: function RefundObatIrjaDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalClosed = _t.first);
    } }, decls: 19, vars: 20, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "nomor_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "tanggal_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "nomor_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "nama_outlet", 3, "label", "inputFieldState"], ["formControlName", "keterangan_retur_penjualan_obat", 3, "label", "inputFieldState"], [3, "grid-DataSource", "columns"], [1, "row"], [1, "col-sm-5"], [1, "col-sm-4"], [1, "col-sm-3"], ["formControlName", "jumlah_item_retur", 3, "label", "isFooter", "inputFieldState"], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrjaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrjaDetailComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mol-input-textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "mol-grid", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mol-input-numeric", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, RefundObatIrjaDetailComponent_ng_template_17_Template, 18, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "No Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Tanggal Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "No Penjualan Obat")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Keterangan")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 18, ctx.refundObatIrjaService.dataDetail$))("columns", ctx.ConfigGrid.TrDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Jumlah Item")("isFooter", true)("inputFieldState", "detail")("inputFieldState", "detail");
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__.MolInputTextareaComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__.MolGridComponent, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 52181:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja/refund-obat-irja.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrjaComponent": () => (/* binding */ RefundObatIrjaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/lookupitem.json */ 62352);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 64813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irja/refund-obat-irja.service */ 53648);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/MM/services/setup-data/setup-item/setup-item.service */ 11781);
/* harmony import */ var _services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _shared_components_molecules_form_mol_datepicker_syncfusion_mol_datepicker_syncfusion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-datepicker-syncfusion/mol-datepicker-syncfusion.component */ 40565);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-textarea/mol-input-textarea.component */ 81892);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);




















const _c0 = ["gridDetail"];
const _c1 = ["LookupItem"];
const _c2 = ["modalQty"];
const _c3 = ["modalSatuan"];
const _c4 = ["modalCanceled"];
function RefundObatIrjaComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Edit Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_ng_template_37_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r10.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown.enter", function RefundObatIrjaComponent_ng_template_37_Template_input_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r12.handleQtyChange(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function RefundObatIrjaComponent_ng_template_39_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngValue", item_r15.kode_satuan);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", item_r15.kode_satuan, " ");
} }
function RefundObatIrjaComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Edit Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_ng_template_39_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r16.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "select", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("keydown.enter", function RefundObatIrjaComponent_ng_template_39_Template_select_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r18.handleSatuanChange(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, RefundObatIrjaComponent_ng_template_39_option_10_Template, 2, 2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", ctx_r6.detailSelected.kode_satuan_besar);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r6.datasatuan);
} }
function RefundObatIrjaComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "h5", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_ng_template_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r19.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_ng_template_41_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r21.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_ng_template_41_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
class RefundObatIrjaComponent {
    constructor(formBuilder, refundObatIrjaService, location, renderer, modalService, changeDetection, utilityService, setupItemService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.refundObatIrjaService = refundObatIrjaService;
        this.location = location;
        this.renderer = renderer;
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.utilityService = utilityService;
        this.setupItemService = setupItemService;
        this.setupOutletService = setupOutletService;
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fas fa-undo fa-sm' },
            { Id: 'simpan', Captions: 'simpan', Icons1: 'fa-save' },
        ];
        this.GridDataEditSettings = { allowEditing: true };
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.subscriptions = [];
        this.counterChildGrid = 0;
        this.datasatuan = [];
        this.childGridSatuan = [];
        this.id_stockroom = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.totalJumlahItem = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(0);
        this.itemBatch = [];
        this.id_item = new rxjs__WEBPACK_IMPORTED_MODULE_14__.BehaviorSubject(0);
        //=========
        this.id = 0;
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            penjualan_obat_id: [0,],
            id_outlet_terima_retur: [0,],
            tanggal_transaksi: [null,],
            depo: ['',],
            no_bill: ['',],
            nama_pasien: ['',],
            no_rm: ['',],
            no_register: ['',],
            keterangan_retur_penjualan_obat: ['',]
        });
        let id_item = this.id_item;
        let currentChildGird = null;
        this.satuanParams = {
            create: () => {
                this.satuanElem = document.createElement('input');
                return this.satuanElem;
            },
            read: () => {
                return this.satuanObj.text;
            },
            destroy: () => {
                this.satuanObj.destroy();
            },
            write: () => {
                // this.childGridSatuan = this.refundObatIrjaService.getSatuanDetail(this.id_item.value);
                // this.satuanObj = new DropDownList({
                //     value: '',
                //     dataSource: this.childGridSatuan,
                //     fields: { value: 'kode_satuan', text: 'kode_satuan' },
                //     enabled: true,
                //     placeholder: 'Select a Satuan',
                //     floatLabelType: 'Never',
                // });
                // this.satuanObj.appendTo(this.satuanElem);
                // if(currentChildGird){
                //     this.satuanObj.value = currentChildGird.satuan;
                // }
            }
        };
        this.itemsParams = {
            create: () => {
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.setupItemService.onGetEDItem(this.id_stockroom, id_item.value).subscribe((result) => {
                    this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__.DropDownList({
                        value: '',
                        dataSource: result.data,
                        fields: { value: 'batch_number', text: 'batch_number' },
                        enabled: true,
                        placeholder: 'Select a Batch',
                        floatLabelType: 'Never',
                        change: function (args) {
                            this.setFormGrif(args);
                            id_item.next(args.itemData.id_item);
                        }.bind(this),
                    });
                    this.itemsObj.appendTo(this.itemsElem);
                });
                if (currentChildGird) {
                    setTimeout(() => {
                        this.itemsObj.value = currentChildGird.batch_number;
                    }, 500);
                }
            }
        };
        let dataSourceChild = this.dataScourceGridChild;
        let counterChildGrid = this.counterChildGrid;
        let dataSourceGrid = this.dataSourceGrid;
        let totalJumlahItem = this.totalJumlahItem;
        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "penjualan_obat_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: false,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "penjualan_obat_id", headerText: 'penjualan_obat_id', width: 100, visible: false },
                { field: "penjualan_obat_detail_id", headerText: 'penjualan_obat_detail_id', width: 100, visible: false },
                { field: "no_urut", headerText: 'urut', visible: false },
                { field: "id_item", headerText: 'id_item', width: 100, visible: false },
                // { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "batch_number", headerText: 'Batch Number', textAlign: 'Right', width: 200 },
                { field: "expired_date", headerText: 'Expired Date', textAlign: 'Right', width: 80, editType: "datepickeredit", format: "dd MMMM yyyy" },
                { field: "qty_besar", headerText: 'Banyak', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "satuan", headerText: 'Satuan', visible: false, editType: 'dropdownedit', edit: this.satuanParams, width: 200 },
                { field: "isi", headerText: 'Isi', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
                { field: "qty_retur_penjualan_obat", headerText: 'Qty', headerTextAlign: 'Center', textAlign: 'Right', width: 50, format: 'N2', allowEditing: true },
                { field: "nama_satuan", headerText: 'Satuan', headerTextAlign: 'Center', textAlign: 'Left', width: 100, format: 'N2', allowEditing: false, visible: false },
                { field: "harga_satuan_retur", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
                { field: "sub_total", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
            ],
            rowSelected(args) {
                currentChildGird = args.data;
            },
            actionBegin(args) {
                if (args.requestType === 'add') {
                    args.data['id_item'] = this.parentDetails.parentRowData.id_item;
                    args.data['penjualan_obat_id'] = this.parentDetails.parentRowData.penjualan_obat_id;
                    args.data['penjualan_obat_detail_id'] = this.parentDetails.parentRowData.penjualan_obat_detail_id;
                    args.data['harga_satuan_retur'] = this.parentDetails.parentRowData.harga_satuan;
                    args.data['counterChildGrid'] = counterChildGrid++;
                    id_item.next(this.parentDetails.parentRowData.id_item);
                }
            },
            actionComplete(args) {
                if (args.requestType === 'save') {
                    console.log('complete', args);
                    if (args.action === 'add') {
                        dataSourceChild.push(args.data);
                    }
                    if (args.action === 'edit') {
                        let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data.counterChildGrid);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_retur_penjualan_obat);
                            }
                        });
                        itemPrent.qty_retur = total;
                        data.push(itemPrent);
                    });
                    // setTimeout(()=>{
                    dataSourceGrid.next(data);
                    totalJumlahItem.next(data.sum('qty_retur'));
                    // console.log(data);
                    // },500)
                }
                if (args.requestType === "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data[0].counterChildGrid);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_pemakaian_internal);
                            }
                        });
                        itemPrent.qty = total;
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
            }
        };
        this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
            if (e.keyCode == 112) {
                this.LookupItem.onOpenModal();
                e.preventDefault();
            }
        });
        this.GridDetailToolbar = [
            // { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
        ];
        this.setupOutletService.setDataSource();
    }
    onDataBound() {
        this.gridDetail.detailRowModule.expandAll();
    }
    setFormGrif(args) {
        document.getElementsByName("expired_date")[0].value = args.itemData.expired_date;
        document.getElementsByName("nama_satuan")[0].value = args.itemData.nama_satuan;
        document.getElementsByName("hpp_satuan")[0].value = args.itemData.harga_satuan_netto;
    }
    handleClickRefesh() {
        if (this.depo.value == '') {
            this.utilityService.onShowingCustomAlert('warning', 'Validasi', 'Depo belum di pilih');
            return false;
        }
        if (this.tanggal_transaksi.value == null) {
            this.utilityService.onShowingCustomAlert('warning', 'Validasi', 'Tanggal transaksi penjualan belum di pilih');
            return false;
        }
        this.refundObatIrjaService.onGetDataTransaksiObat([
            {
                columnName: "tpo.tanggal_penjualan_obat",
                filter: "equal",
                searchText: "",
                searchText2: this.utilityService.onFormatDate(this.tanggal_transaksi.value, 'yyyy-MM-DD')
            },
            {
                columnName: "tpo.id_outlet",
                filter: "equal",
                searchText: this.depo.value,
                searchText2: ""
            }
        ]);
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    handleSelectedPasien(args) {
        console.log(args.data);
        this.formInput.setValue({
            id_outlet_terima_retur: args.data.id_outlet,
            penjualan_obat_id: args.data.penjualan_obat_id,
            tanggal_transaksi: this.tanggal_transaksi.value,
            depo: this.depo.value,
            no_bill: args.data.nomor_penjualan_obat,
            nama_pasien: args.data.nama_pasien,
            no_rm: args.data.no_rekam_medis,
            no_register: args.data.no_register,
            keterangan_retur_penjualan_obat: ''
        });
        this.refundObatIrjaService.getDetail(args.data.penjualan_obat_id).subscribe((result) => {
            this.dataSourceGrid.next(result.data);
            console.log(this.dataSourceGrid.value);
        });
    }
    handleSelectdRow(args) {
        this.currentIndex = args.rowIndex;
        this.datasatuan = args.data.satuans;
        this.detailSelected = args.data;
        this.satuanVal = args.data.kode_satuan_besar;
    }
    handleActionCompleted($event) {
        if ($event.requestType == 'save') {
            console.log($event);
            this.refundObatIrjaService.updateFromInline($event.rowIndex, $event.data, $event.rowData);
            this.gridDetail.refresh();
        }
        // console.log('complate parent',this.gridDetail.childGrid.dataSource);
    }
    KeyDownHandler(event) {
        if (event.keyCode === 106) {
            this.onOpenQty();
        }
        ;
        if (event.keyCode === 46) {
            this.refundObatIrjaService.removeDataDetail(this.currentIndex);
            this.gridDetail.refresh();
            setTimeout(() => {
                if (this.currentIndex != 0) {
                    this.gridDetail.selectedRowIndex = 0;
                }
            }, 100);
        }
        ;
        //   if (event.keyCode === 111) {
        //       this.onOpenHarga()
        //   }
        //   if (event.keyCode === 109) {
        //       this.onOpenSubtotal()
        //   }
        if (event.keyCode === 107) {
            this.onOpenSatuan();
        }
    }
    onToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.LookupItem.onOpenModal();
                break;
            default:
                break;
        }
    }
    onLoadDetailData(id) {
        this.refundObatIrjaService.onGetById(id).subscribe((result) => {
            this.id = parseInt(id);
            this.formInput.setValue({
                pemakaian_internal_id: parseInt(id),
                pic_pemberi: '',
                pic_penerima: '',
                time_serah_terima: new Date(),
                total_transaksi: 0,
            });
            this.id_stockroom = result.data.id_stockroom;
            this.refundObatIrjaService.getDetail(id).subscribe((result) => {
                result.data.map((e, i) => {
                    return e.qty = 0;
                });
                this.dataSourceGrid.next(result.data);
            });
            //this.persetujuanMutasiService.setDetail(pemesanan_id);
        });
    }
    onOpenQty() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)(this.modalService.onShow, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("QtyValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalQty, Object.assign({}, { class: 'modal-lg' }));
    }
    onOpenSatuan() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)(this.modalService.onShown, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("SatuanValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalSatuan, Object.assign({}, { class: 'modal-lg' }));
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
    selectLastRowdetail() {
        setTimeout(() => {
            let last = this.gridDetail.dataSource;
            this.gridDetail.selectedRowIndex = last.length - 1;
        }, 150);
    }
    onSave() {
        if (this.formInput.valid) {
            let data = this.formInput.value;
            this.dataScourceGridChild.map((e, i) => {
                e.sub_total = e.qty_retur_penjualan_obat * e.harga_satuan_retur;
                e.no_urut = i + 1;
                return e;
            });
            data.jumlah_item_retur = this.dataScourceGridChild.sum('qty_retur_penjualan_obat');
            data.total_transaksi_retur = this.dataScourceGridChild.sum('sub_total');
            data.nomor_retur_penjualan_obat = '23135';
            data.tanggal_retur_penjualan_obat = '2021-12-10';
            console.log('data header', data);
            console.log('data detail', this.dataScourceGridChild);
            data.details = this.dataScourceGridChild;
            console.log('data', data);
            this.refundObatIrjaService.Insert(data).subscribe((result) => {
                console.log(result);
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Refund Obat', result.message)
                    .then(() => {
                    this.onReset();
                });
            });
        }
        else {
            alert('isi semua data');
        }
    }
    onReset() {
        this.formInput.reset();
        this.dataScourceGridChild = [];
        this.dataSourceGrid.next([]);
        this.ChildGrid.dataSource = [];
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Reset':
                this.onReset();
                break;
            case "simpan":
                // this.dataScourceGridChild;
                this.onSave();
                break;
            default:
                break;
        }
    }
    get tanggal_transaksi() { return this.formInput.get('tanggal_transaksi'); }
    ;
    get depo() { return this.formInput.get('depo'); }
    ;
    get no_bill() { return this.formInput.get('no_bill'); }
    ;
    get nama_pasien() { return this.formInput.get('nama_pasien'); }
    ;
    get no_rm() { return this.formInput.get('no_rm'); }
    ;
    get no_register() { return this.formInput.get('no_register'); }
    ;
}
RefundObatIrjaComponent.ɵfac = function RefundObatIrjaComponent_Factory(t) { return new (t || RefundObatIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irja_refund_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_18__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_5__.SetupItemService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_6__.SetupOutletService)); };
RefundObatIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: RefundObatIrjaComponent, selectors: [["app-refund-obat-irja"]], viewQuery: function RefundObatIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.LookupItem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.modalQty = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.modalSatuan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
    } }, decls: 43, vars: 46, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "depo", 3, "dataSource", "fields", "allowFiltering"], ["MaritalOutletDropdown", ""], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "mb-2"], ["formControlName", "tanggal_transaksi", 3, "label", "format"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected"], ["GridResep", ""], [1, "row", "mb-2", "mt-2"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "no_register", 3, "label", "inputFieldState"], ["formControlName", "no_rm", 3, "label", "inputFieldState"], ["formControlName", "keterangan_retur_penjualan_obat", 3, "label"], [3, "editSettings", "dataSource", "gridLines", "allowResizing", "childGrid", "height", "actionComplete", "toolbarClick", "load", "rowSelected", "dataBound"], ["gridDetail", ""], ["field", "no_urut", "headerText", "urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "kode_item", "headerText", "Kode Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", "width", "100", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", "width", "300", 3, "visible", "allowEditing"], ["field", "qty_jual", "headerText", "QTY Jual", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", "width", "100", 3, "visible", "allowEditing"], ["field", "qty_returned", "headerText", "QTY Telah Diretur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", "width", "100", 3, "visible", "allowEditing"], ["field", "qty_retur", "headerText", "QTY Akan Di Retur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", "width", "100", 3, "visible", "allowEditing"], ["modalQty", ""], ["modalSatuan", ""], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], ["type", "text", "id", "QtyValueId", 1, "form-control", 3, "keydown.enter"], ["qtyValueId", ""], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary"], ["id", "SatuanValueId", "multiple", "", 1, "form-control", 3, "value", "keydown.enter"], ["satuanValueId", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "col-sm-4"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "atm-label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "ejs-dropdownlist", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "mol-datepicker-syncfusion", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RefundObatIrjaComponent_Template_button_click_14_listener() { return ctx.handleClickRefesh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "mol-grid", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("row-selected", function RefundObatIrjaComponent_Template_mol_grid_row_selected_16_listener($event) { return ctx.handleSelectedPasien($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "mol-input-text", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "mol-input-text", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "mol-input-text", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "mol-input-textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "ejs-grid", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("actionComplete", function RefundObatIrjaComponent_Template_ejs_grid_actionComplete_26_listener($event) { return ctx.handleActionCompleted($event); })("toolbarClick", function RefundObatIrjaComponent_Template_ejs_grid_toolbarClick_26_listener($event) { return ctx.onToolbarClick($event); })("load", function RefundObatIrjaComponent_Template_ejs_grid_load_26_listener($event) { return ctx.handleLoadGrid($event); })("rowSelected", function RefundObatIrjaComponent_Template_ejs_grid_rowSelected_26_listener($event) { return ctx.handleSelectdRow($event); })("dataBound", function RefundObatIrjaComponent_Template_ejs_grid_dataBound_26_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "e-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "e-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "e-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](33, "e-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "e-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "e-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "e-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](37, RefundObatIrjaComponent_ng_template_37_Template, 13, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](39, RefundObatIrjaComponent_ng_template_39_Template, 14, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](41, RefundObatIrjaComponent_ng_template_41_Template, 18, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("LabelCaption", "Depo");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](10, 40, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Tanggal")("format", "dd MMMM yyyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-height", "6rem")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](18, 42, ctx.refundObatIrjaService.dataTransaksiObat))("grid-paging", false)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Nama Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No. Register")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No. RM")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Keterangan");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("editSettings", ctx.GridDataEditSettings)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](28, 44, ctx.dataSourceGrid))("gridLines", "Both")("allowResizing", true)("childGrid", ctx.ChildGrid)("height", "calc(100vh - 31rem)");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_7__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_8__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_19__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _shared_components_molecules_form_mol_datepicker_syncfusion_mol_datepicker_syncfusion_component__WEBPACK_IMPORTED_MODULE_9__.MolDatepickerSyncfusionComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__.MolGridComponent, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__.MolInputTextComponent, _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_12__.MolInputTextareaComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_20__.AggregateColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    padding-left: 12px;\r\n    width: 100%;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border: 0;\r\n  }\r\n  \r\n  #DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  #NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n  }\r\n  \r\n  div.head[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n  }\r\n  \r\n  .is-racikan[_ngcontent-%COMP%]{\r\n    background-color: #f3e6f3;\r\n  }\r\n  \r\n  .form_paragraf[_ngcontent-%COMP%]{\r\n    display: inline-block!important;\r\n  }\r\n  \r\n  .form-label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  #basic-addon1[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  padding-left: 12px;\r\n  width: 100%;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border: 0;\r\n}\r\n  \r\n  .e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\n  min-height: 14px !important;\r\n}\r\n  \r\n  th.e-headercell[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  color: black;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  padding: 5px !important;\r\n  height: 30px !important;\r\n}\r\n  \r\n  span.e-headertext[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n}\r\n  \r\n  td.e-rowcell[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}"] });


/***/ }),

/***/ 94108:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna-daftar/refund-obat-irna-daftar.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrnaDaftarComponent": () => (/* binding */ RefundObatIrnaDaftarComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 23609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irna/refund-obat-irna.service */ 96897);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component */ 55682);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = ["GridData"];
class RefundObatIrnaDaftarComponent {
    constructor(router, encryptionService, refundObatIrnaService) {
        this.router = router;
        this.encryptionService = encryptionService;
        this.refundObatIrnaService = refundObatIrnaService;
        this.ButtonNav = [
            { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
            { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
        ];
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.FilterColumnDatasource = [
            { text: 'No. Refund', value: 'tpo.nomor_retur_penjualan_obat' },
            { text: 'No. Penjualan', value: 'tpo.nomor_penjualan_obat' },
            { text: 'Nama Outlet', value: 'pso.nama_outlet' },
            { text: 'Status Refund', value: 'tpo.judul_kontrak' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
    }
    ngAfterViewInit() {
        // this.GridData.Grid.refresh();
        this.handlePencarianFilter([]);
    }
    ngOnInit() {
    }
    handlePencarianFilter(args) {
        this.refundObatIrnaService.onGetAllByParamsSource(args);
        // setTimeout(()=>{
        // this.GridData.Grid.refresh();
        // },500)
    }
    handleinitialized(component) {
        this.GridData = component;
    }
    handleClickButtonNav(args) {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/Pharmacy/refund-obat/refund-obat-irna');
                break;
            case 'Edit':
                const id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.retur_penjualan_obat_id));
                this.router.navigate(['dashboard/Pharmacy/refund-obat/refund-obat-irna-detail', id, "GRAHCIS"]);
                break;
            case 'Delete':
                // this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
        console.log(this.SelectedData);
    }
    handleRowDataBound(args) {
        let status_transaksi = args.data.status_transaksi;
        if (status_transaksi == "VALIDATED") {
            args.row.classList.add('e-validation-background');
        }
        if (status_transaksi == "CANCELED") {
            args.row.classList.add('e-canceled-background');
        }
        if (status_transaksi == "CLOSED") {
            args.row.classList.add('e-closed-background');
        }
    }
}
RefundObatIrnaDaftarComponent.ɵfac = function RefundObatIrnaDaftarComponent_Factory(t) { return new (t || RefundObatIrnaDaftarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrnaService)); };
RefundObatIrnaDaftarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: RefundObatIrnaDaftarComponent, selectors: [["app-refund-obat-irna-daftar"]], viewQuery: function RefundObatIrnaDaftarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.GridData = _t.first);
    } }, decls: 8, vars: 9, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [3, "FilterColumnDatasource", "handle-pencarian"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected", "row-data-bound"], ["GridData", ""]], template: function RefundObatIrnaDaftarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrnaDaftarComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mol-offcanvas-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("handle-pencarian", function RefundObatIrnaDaftarComponent_Template_mol_offcanvas_filter_handle_pencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mol-grid", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("row-selected", function RefundObatIrnaDaftarComponent_Template_mol_grid_row_selected_5_listener($event) { return ctx.handleSelectedRow($event); })("row-data-bound", function RefundObatIrnaDaftarComponent_Template_mol_grid_row_data_bound_5_listener($event) { return ctx.handleRowDataBound($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("FilterColumnDatasource", ctx.FilterColumnDatasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("grid-height", "calc(100vh - 19rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](7, 7, ctx.refundObatIrnaService.dataSource))("grid-paging", true)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__.MolOffcanvasFilterComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.MolGridComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 53619:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna-detail/refund-obat-irna-detail.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrnaDetailComponent": () => (/* binding */ RefundObatIrnaDetailComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/detailItem.json */ 86501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irna/refund-obat-irna.service */ 96897);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-textarea/mol-input-textarea.component */ 81892);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);















const _c0 = ["modalCanceled"];
const _c1 = ["modalClosed"];
function RefundObatIrnaDetailComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrnaDetailComponent_ng_template_16_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r2.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrnaDetailComponent_ng_template_16_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r4.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RefundObatIrnaDetailComponent_ng_template_16_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r5.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
class RefundObatIrnaDetailComponent {
    constructor(formBuilder, refundObatIrnaService, encryptionService, activatedRoute, location, utilityService, modalService) {
        this.formBuilder = formBuilder;
        this.refundObatIrnaService = refundObatIrnaService;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
            { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' }
        ];
        this.ConfigGrid = /*#__PURE__*/ (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_detailItem_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            nomor_retur_penjualan_obat: ["",],
            tanggal_retur_penjualan_obat: [null,],
            nama_outlet: ["",],
            keterangan_retur_penjualan_obat: ["",],
            jumlah_item_retur: [0,],
        });
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        this.id = parseInt(id);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.refundObatIrnaService.onGetById(id).subscribe((result) => {
            this.formInput.setValue({
                nomor_retur_penjualan_obat: result.data.nomor_retur_penjualan_obat,
                tanggal_retur_penjualan_obat: result.data.tanggal_retur_penjualan_obat,
                nama_outlet: result.data.nama_outlet,
                keterangan_retur_penjualan_obat: result.data.keterangan_retur_penjualan_obat,
                jumlah_item_retur: result.data.jumlah_item_retur,
            });
            this.refundObatIrnaService.setDetail(id);
        });
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Validasi':
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: 'Apakah anda yakin ingin validasi?',
                    text: "",
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Iya Validasi',
                    cancelButtonText: 'Tidak',
                    focusCancel: true,
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.onValidation();
                    }
                });
                break;
            case 'Cancel':
                this.modalRef = this.modalService.show(this.modalCanceled, Object.assign({}, { class: 'modal-lg' }));
                break;
            case 'Close':
                this.modalRef = this.modalService.show(this.modalClosed, Object.assign({}, { class: 'modal-lg' }));
                break;
            default:
                break;
        }
    }
    onValidation() {
        this.refundObatIrnaService.Validation(this.id).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Validasi', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
            });
        });
    }
    onCalceled() {
        let reason_canceled = document.getElementsByName("reason_canceled")[0].value;
        this.refundObatIrnaService.Cancel(this.id, reason_canceled).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Cancel', result.message)
                .then(() => {
                this.onLoadDetailData(this.id);
                this.modalRef.hide();
            });
        });
    }
}
RefundObatIrnaDetailComponent.ɵfac = function RefundObatIrnaDetailComponent_Factory(t) { return new (t || RefundObatIrnaDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__.BsModalService)); };
RefundObatIrnaDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: RefundObatIrnaDetailComponent, selectors: [["app-refund-obat-irna-detail"]], viewQuery: function RefundObatIrnaDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.modalClosed = _t.first);
    } }, decls: 18, vars: 18, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "nomor_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "tanggal_retur_penjualan_obat", 3, "label", "inputFieldState"], ["formControlName", "nama_outlet", 3, "label", "inputFieldState"], ["formControlName", "keterangan_retur_penjualan_obat", 3, "label", "inputFieldState"], [3, "grid-DataSource", "columns"], [1, "row"], [1, "col-sm-5"], [1, "col-sm-4"], [1, "col-sm-3"], ["formControlName", "jumlah_item_retur", 3, "label", "isFooter", "inputFieldState"], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrnaDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrnaDetailComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](7, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](8, "mol-input-textarea", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "mol-grid", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](15, "mol-input-numeric", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, RefundObatIrnaDetailComponent_ng_template_16_Template, 18, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "No Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Tanggal Retur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Keterangan")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 16, ctx.refundObatIrnaService.dataDetail$))("columns", ctx.ConfigGrid.TrDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Jumlah Item")("isFooter", true)("inputFieldState", "detail")("inputFieldState", "detail");
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_8__.MolInputTextareaComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__.MolGridComponent, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 44997:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna/refund-obat-irna.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrnaComponent": () => (/* binding */ RefundObatIrnaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9112);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/lookupitem.json */ 47876);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 8493);
/* harmony import */ var _json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/LookupGridNoRegistrasi.json */ 85702);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/refund-obat/refund-obat-irna/refund-obat-irna.service */ 96897);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/MM/services/setup-data/setup-item/setup-item.service */ 11781);
/* harmony import */ var _services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_org_input_look_up_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component */ 96053);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);






















const _c0 = ["LookupNoRegistrasi"];
const _c1 = ["gridDetail"];
const _c2 = ["LookupItem"];
const _c3 = ["modalQty"];
const _c4 = ["modalSatuan"];
const _c5 = ["modalCanceled"];
function RefundObatIrnaComponent_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Edit Qty");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_ng_template_39_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r10.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "input", 43, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown.enter", function RefundObatIrnaComponent_ng_template_39_Template_input_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r11); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r12.handleQtyChange(_r9.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
function RefundObatIrnaComponent_ng_template_41_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngValue", item_r15.kode_satuan);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", item_r15.kode_satuan, " ");
} }
function RefundObatIrnaComponent_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Edit Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_ng_template_41_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r16.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "select", 47, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("keydown.enter", function RefundObatIrnaComponent_ng_template_41_Template_select_keydown_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](9); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r18.handleSatuanChange(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, RefundObatIrnaComponent_ng_template_41_option_10_Template, 2, 2, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](13, "Oke");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", ctx_r6.detailSelected.kode_satuan_besar);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r6.datasatuan);
} }
function RefundObatIrnaComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "h5", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "Canceled");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_ng_template_43_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r19.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](10, "Reason Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](12, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_ng_template_43_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r21.onCalceled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](15, "Cancel Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_ng_template_43_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r22.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](17, "Batal");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} }
class RefundObatIrnaComponent {
    constructor(formBuilder, refundObatIrnaService, encryptionService, activatedRoute, location, renderer, modalService, changeDetection, utilityService, setupItemService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.refundObatIrnaService = refundObatIrnaService;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.renderer = renderer;
        this.modalService = modalService;
        this.changeDetection = changeDetection;
        this.utilityService = utilityService;
        this.setupItemService = setupItemService;
        this.setupOutletService = setupOutletService;
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.urlNoRegistrasi = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_3__.PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRNA.GET_PASIEN_IRNA_OPEN;
        this.LookupGridNoRegistrasi = /*#__PURE__*/ (_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_LookupGridNoRegistrasi_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Reset', Captions: 'Reset', Icons1: 'fas fa-undo fa-sm' },
            { Id: 'simpan', Captions: 'simpan', Icons1: 'fa-save' },
        ];
        this.GridDataEditSettings = { allowEditing: true };
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.subscriptions = [];
        this.counterChildGrid = 0;
        this.datasatuan = [];
        this.childGridSatuan = [];
        this.id_stockroom = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.totalJumlahItem = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(0);
        this.itemBatch = [];
        this.id_item = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(0);
        //=========
        this.id = 0;
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            id_register: ['',],
            depo: ['',],
            debitur: ['',],
            nama_pasien: ['',],
            bed: ['',],
            no_rm: ['',],
            no_register: ['',],
            dokter: ['',],
            umur: ['',],
            alamat: ['',],
            poli: ['',],
        });
        let id_item = this.id_item;
        let currentChildGird = null;
        this.itemsParams = {
            create: () => {
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.setupItemService.onGetEDItem(this.id_stockroom, id_item.value).subscribe((result) => {
                    this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__.DropDownList({
                        value: '',
                        dataSource: result.data,
                        fields: { value: 'batch_number', text: 'batch_number' },
                        enabled: true,
                        placeholder: 'Select a Batch',
                        floatLabelType: 'Never',
                        change: function (args) {
                            this.setFormGrif(args);
                            id_item.next(args.itemData.id_item);
                        }.bind(this),
                    });
                    this.itemsObj.appendTo(this.itemsElem);
                });
                if (currentChildGird) {
                    setTimeout(() => {
                        this.itemsObj.value = currentChildGird.batch_number;
                    }, 500);
                }
            }
        };
        let dataSourceChild = this.dataScourceGridChild;
        let counterChildGrid = this.counterChildGrid;
        let dataSourceGrid = this.dataSourceGrid;
        let totalJumlahItem = this.totalJumlahItem;
        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "penjualan_obat_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: false,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "penjualan_obat_id", headerText: 'penjualan_obat_id', width: 100, visible: false },
                { field: "penjualan_obat_detail_id", headerText: 'penjualan_obat_detail_id', width: 100, visible: false },
                { field: "no_urut", headerText: 'urut', visible: false },
                { field: "id_item", headerText: 'id_item', width: 100, visible: false },
                // { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "batch_number", headerText: 'Batch Number', textAlign: 'Right', width: 200 },
                { field: "expired_date", headerText: 'Expired Date', textAlign: 'Right', width: 80, editType: "datepickeredit", format: "dd MMMM yyyy" },
                { field: "qty_besar", headerText: 'Banyak', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "satuan", headerText: 'Satuan', visible: false, editType: 'dropdownedit', edit: this.satuanParams, width: 200 },
                { field: "isi", headerText: 'Isi', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
                { field: "qty_retur_penjualan_obat", headerText: 'Qty', headerTextAlign: 'Center', textAlign: 'Right', width: 50, format: 'N2', allowEditing: true },
                { field: "nama_satuan", headerText: 'Satuan', headerTextAlign: 'Center', textAlign: 'Left', width: 100, format: 'N2', allowEditing: false, visible: false },
                { field: "harga_satuan_retur", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
                { field: "sub_total", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
            ],
            rowSelected(args) {
                currentChildGird = args.data;
            },
            actionBegin(args) {
                if (args.requestType === 'add') {
                    args.data['id_item'] = this.parentDetails.parentRowData.id_item;
                    args.data['penjualan_obat_id'] = this.parentDetails.parentRowData.penjualan_obat_id;
                    args.data['penjualan_obat_detail_id'] = this.parentDetails.parentRowData.penjualan_obat_detail_id;
                    args.data['harga_satuan_retur'] = this.parentDetails.parentRowData.harga_satuan;
                    args.data['counterChildGrid'] = counterChildGrid++;
                    id_item.next(this.parentDetails.parentRowData.id_item);
                }
                // if (args.requestType === 'beginEdit'){
                //     SelectedDataRacikanObat = args.rowData;
                // }
            },
            actionComplete(args) {
                if (args.requestType === 'save') {
                    console.log('complete', args);
                    if (args.action === 'add') {
                        dataSourceChild.push(args.data);
                    }
                    if (args.action === 'edit') {
                        let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data.counterChildGrid);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_retur_penjualan_obat);
                            }
                        });
                        itemPrent.qty_retur = total;
                        data.push(itemPrent);
                    });
                    // setTimeout(()=>{
                    dataSourceGrid.next(data);
                    totalJumlahItem.next(data.sum('qty_retur'));
                    // console.log(data);
                    // },500)
                }
                if (args.requestType === "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterChildGrid; }).indexOf(args.data[0].counterChildGrid);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        let total = 0;
                        dataSourceChild.forEach((item, index) => {
                            if (itemPrent.id_item == item.id_item) {
                                total = total + parseInt(item.qty_pemakaian_internal);
                            }
                        });
                        itemPrent.qty = total;
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
            }
        };
        this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
            if (e.keyCode == 112) {
                this.LookupItem.onOpenModal();
                e.preventDefault();
            }
        });
        this.GridDetailToolbar = [
            { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
        ];
        this.setupOutletService.setDataSource();
    }
    ngAfterViewInit() {
        // let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        // console.log(pemesanan_id);
        // this.onLoadDetailData(pemesanan_id);
    }
    onDataBound() {
        this.gridDetail.detailRowModule.expandAll();
    }
    setFormGrif(args) {
        document.getElementsByName("expired_date")[0].value = args.itemData.expired_date;
        document.getElementsByName("nama_satuan")[0].value = args.itemData.nama_satuan;
        document.getElementsByName("hpp_satuan")[0].value = args.itemData.harga_satuan_netto;
    }
    heandleSelectedNoRegistrasi(args) {
        this.formInput.setValue({
            id_register: args.id_register,
            depo: this.depo.value,
            debitur: args.nama_debitur,
            nama_pasien: args.nama_pasien,
            no_rm: args.no_rekam_medis,
            no_register: args.no_register,
            dokter: args.nama_dokter,
            umur: args.umur,
            alamat: args.alamat_pasien,
            poli: args.nama_poli,
            bed: args.room_descr + ' - ' + args.bed_no,
        });
    }
    handleClickRefesh() {
        if (this.depo.value == '') {
            this.utilityService.onShowingCustomAlert('warning', 'Validasi', 'Depo belum di pilih');
            return false;
        }
        this.refundObatIrnaService.getDetailPenjualan(this.depo.value, this.id_register.value).subscribe((result) => {
            result.data.map((e, i) => {
                return e.qty = 0;
            });
            this.dataSourceGrid.next(result.data);
        });
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    handleSelectdRow(args) {
        this.currentIndex = args.rowIndex;
        this.datasatuan = args.data.satuans;
        this.detailSelected = args.data;
        this.satuanVal = args.data.kode_satuan_besar;
    }
    handleActionCompleted($event) {
        if ($event.requestType == 'save') {
            console.log($event);
            this.refundObatIrnaService.updateFromInline($event.rowIndex, $event.data, $event.rowData);
            this.gridDetail.refresh();
        }
        // console.log('complate parent',this.gridDetail.childGrid.dataSource);
    }
    KeyDownHandler(event) {
        if (event.keyCode === 106) {
            this.onOpenQty();
        }
        ;
        if (event.keyCode === 46) {
            this.refundObatIrnaService.removeDataDetail(this.currentIndex);
            this.gridDetail.refresh();
            setTimeout(() => {
                if (this.currentIndex != 0) {
                    this.gridDetail.selectedRowIndex = 0;
                }
            }, 100);
        }
        ;
        //   if (event.keyCode === 111) {
        //       this.onOpenHarga()
        //   }
        //   if (event.keyCode === 109) {
        //       this.onOpenSubtotal()
        //   }
        if (event.keyCode === 107) {
            this.onOpenSatuan();
        }
    }
    onToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.LookupItem.onOpenModal();
                break;
            default:
                break;
        }
    }
    onOpenQty() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.modalService.onShow, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("QtyValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalQty, Object.assign({}, { class: 'modal-lg' }));
    }
    onOpenSatuan() {
        const _combine = (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.combineLatest)(this.modalService.onShown, this.modalService.onHidden).subscribe(() => this.changeDetection.markForCheck());
        this.subscriptions.push(this.modalService.onShown.subscribe(() => {
            setTimeout(() => {
                document.getElementById("SatuanValueId").focus();
            }, 100);
        }));
        this.subscriptions.push(this.modalService.onHidden.subscribe((reason) => {
            this.gridDetail.selectedRowIndex = this.currentIndex;
            this.gridDetail.selectRows([this.currentIndex]);
            this.unsubscribe();
        }));
        this.subscriptions.push(_combine);
        this.modalRef = this.modalService.show(this.modalSatuan, Object.assign({}, { class: 'modal-lg' }));
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription) => {
            subscription.unsubscribe();
        });
        this.subscriptions = [];
    }
    selectLastRowdetail() {
        setTimeout(() => {
            let last = this.gridDetail.dataSource;
            this.gridDetail.selectedRowIndex = last.length - 1;
        }, 150);
    }
    onSave() {
        if (this.formInput.valid) {
            let data = this.formInput.value;
            this.dataScourceGridChild.map((e, i) => {
                e.sub_total = e.qty_retur_penjualan_obat * e.harga_satuan_retur;
                e.no_urut = i + 1;
                return e;
            });
            data.jumlah_item_retur = this.dataScourceGridChild.sum('qty_retur_penjualan_obat');
            data.total_transaksi_retur = this.dataScourceGridChild.sum('sub_total');
            data.nomor_retur_penjualan_obat = '23135';
            data.tanggal_retur_penjualan_obat = '2021-12-10';
            data.id_outlet_terima_retur = this.depo.value;
            console.log('data header', data);
            console.log('data detail', this.dataScourceGridChild);
            data.details = this.dataScourceGridChild;
            console.log('data', data);
            this.refundObatIrnaService.Insert(data).subscribe((result) => {
                console.log(result);
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Refund Obat', result.message)
                    .then(() => {
                    this.onReset();
                });
            });
        }
        else {
            alert('isi semua data');
        }
    }
    onReset() {
        this.formInput.reset();
        this.dataScourceGridChild = [];
        this.dataSourceGrid.next([]);
        this.ChildGrid.dataSource = [];
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case 'Reset':
                this.onReset();
                break;
            case "simpan":
                // this.dataScourceGridChild;
                this.onSave();
                break;
            default:
                break;
        }
    }
    get id_register() { return this.formInput.get('id_register'); }
    get depo() { return this.formInput.get('depo'); }
}
RefundObatIrnaComponent.ɵfac = function RefundObatIrnaComponent_Factory(t) { return new (t || RefundObatIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_refund_obat_refund_obat_irna_refund_obat_irna_service__WEBPACK_IMPORTED_MODULE_4__.RefundObatIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_5__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_20__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_MM_services_setup_data_setup_item_setup_item_service__WEBPACK_IMPORTED_MODULE_8__.SetupItemService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_9__.SetupOutletService)); };
RefundObatIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: RefundObatIrnaComponent, selectors: [["app-refund-obat-irna"]], viewQuery: function RefundObatIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.LookupNoRegistrasi = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.gridDetail = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.LookupItem = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalQty = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalSatuan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.modalCanceled = _t.first);
    } }, decls: 45, vars: 57, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], [3, "lookup-url", "idTitle", "modal-title", "columns", "filter-lookup", "label", "onGetSelectedData"], ["LookupNoRegistrasi", ""], ["formControlName", "no_rm", 3, "label", "inputFieldState"], ["formControlName", "debitur", 3, "label", "inputFieldState"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "mb-2"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "depo", 3, "dataSource", "fields", "allowFiltering"], ["MaritalOutletDropdown", ""], ["formControlName", "alamat", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "bed", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], [3, "editSettings", "dataSource", "gridLines", "allowResizing", "childGrid", "actionComplete", "toolbarClick", "load", "rowSelected", "dataBound"], ["gridDetail", ""], ["field", "no_urut", "headerText", "urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_outlet", "headerText", "Depo", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "user_inputed_name", "headerText", "User Entry", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "time_inputed", "headerText", "Waktu Entry", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "kode_item", "headerText", "Kode Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "qty_jual", "headerText", "QTY Jual", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "qty_returned", "headerText", "QTY Telah Diretur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "qty_retur", "headerText", "QTY Akan Di Retur", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["modalQty", ""], ["modalSatuan", ""], ["modalCanceled", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], ["type", "text", "id", "QtyValueId", 1, "form-control", 3, "keydown.enter"], ["qtyValueId", ""], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary"], ["id", "SatuanValueId", "multiple", "", 1, "form-control", 3, "value", "keydown.enter"], ["satuanValueId", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "col-sm-4"], ["for", "reason_canceled"], [1, "col-sm-8"], ["type", "text", "name", "reason_canceled", 1, "form-control", "form-control-sm"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function RefundObatIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClickButtonNav", function RefundObatIrnaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "org-input-look-up", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onGetSelectedData", function RefundObatIrnaComponent_Template_org_input_look_up_onGetSelectedData_4_listener($event) { return ctx.heandleSelectedNoRegistrasi($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RefundObatIrnaComponent_Template_button_click_11_listener() { return ctx.handleClickRefesh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "Get Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](16, "atm-label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "ejs-dropdownlist", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](21, "mol-input-text", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "mol-input-text", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "mol-input-text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "mol-input-text", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "ejs-grid", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("actionComplete", function RefundObatIrnaComponent_Template_ejs_grid_actionComplete_25_listener($event) { return ctx.handleActionCompleted($event); })("toolbarClick", function RefundObatIrnaComponent_Template_ejs_grid_toolbarClick_25_listener($event) { return ctx.onToolbarClick($event); })("load", function RefundObatIrnaComponent_Template_ejs_grid_load_25_listener($event) { return ctx.handleLoadGrid($event); })("rowSelected", function RefundObatIrnaComponent_Template_ejs_grid_rowSelected_25_listener($event) { return ctx.handleSelectdRow($event); })("dataBound", function RefundObatIrnaComponent_Template_ejs_grid_dataBound_25_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "e-column", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](30, "e-column", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "e-column", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](32, "e-column", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](33, "e-column", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](34, "e-column", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](35, "e-column", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "e-column", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](37, "e-column", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](38, "e-column", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, RefundObatIrnaComponent_ng_template_39_Template, 13, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](41, RefundObatIrnaComponent_ng_template_41_Template, 14, 2, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](43, RefundObatIrnaComponent_ng_template_43_Template, 18, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("lookup-url", ctx.urlNoRegistrasi)("idTitle", "nama_pasien")("modal-title", "Data No Registrasi")("columns", ctx.LookupGridNoRegistrasi.columns)("filter-lookup", _r0.filter)("label", "No Registrasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "No Rm")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Debitur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Nama Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("LabelCaption", "Depo");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](20, 53, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Alamat Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Bed")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("editSettings", ctx.GridDataEditSettings)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](27, 55, ctx.dataSourceGrid))("gridLines", "Both")("allowResizing", true)("childGrid", ctx.ChildGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_10__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, _shared_components_organism_loockUp_org_input_look_up_org_input_look_up_component__WEBPACK_IMPORTED_MODULE_11__.OrgInputLookUpComponent, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormControlName, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_13__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownListComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_22__.AggregateColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ɵNgSelectMultipleOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.AsyncPipe], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  padding-left: 12px;\r\n  width: 100%;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border: 0;\r\n}\r\n\r\n#DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n#NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding-right: 5px;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n  font-weight: 500 !important;\r\n}\r\n\r\n.is-racikan[_ngcontent-%COMP%]{\r\n  background-color: #f3e6f3;\r\n}\r\n\r\n.form_paragraf[_ngcontent-%COMP%]{\r\n  display: inline-block!important;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n#basic-addon1[_ngcontent-%COMP%] {\r\nheight: 32px;\r\npadding-left: 12px;\r\nwidth: 100%;\r\nborder-top-left-radius: 0;\r\nborder-bottom-left-radius: 0;\r\nborder: 0;\r\n}\r\n\r\n.e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\nmin-height: 14px !important;\r\n}\r\n\r\nth.e-headercell[_ngcontent-%COMP%] {\r\nbackground-color: rgba(0, 0, 0, 0.03);\r\ncolor: black;\r\nborder: 1px solid rgba(0, 0, 0, 0.125);\r\npadding: 5px !important;\r\nheight: 30px !important;\r\n}\r\n\r\nspan.e-headertext[_ngcontent-%COMP%] {\r\nfont-size: 13px !important;\r\n}\r\n\r\ntd.e-rowcell[_ngcontent-%COMP%] {\r\npadding: 5px !important;\r\n}"] });


/***/ }),

/***/ 93712:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irja/daftar-resep-formularium-irja/daftar-resep-formularium-irja.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaftarResepFormulariumIrjaComponent": () => (/* binding */ DaftarResepFormulariumIrjaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class DaftarResepFormulariumIrjaComponent {
    constructor() { }
    ngOnInit() {
    }
}
DaftarResepFormulariumIrjaComponent.ɵfac = function DaftarResepFormulariumIrjaComponent_Factory(t) { return new (t || DaftarResepFormulariumIrjaComponent)(); };
DaftarResepFormulariumIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DaftarResepFormulariumIrjaComponent, selectors: [["app-daftar-resep-formularium-irja"]], decls: 2, vars: 0, template: function DaftarResepFormulariumIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "daftar-resep-formularium-irja works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ 44755:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irja/view-resep-formularium-irja/view-resep-formularium-irja.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResepFormulariumIrjaComponent": () => (/* binding */ ViewResepFormulariumIrjaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class ViewResepFormulariumIrjaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ViewResepFormulariumIrjaComponent.ɵfac = function ViewResepFormulariumIrjaComponent_Factory(t) { return new (t || ViewResepFormulariumIrjaComponent)(); };
ViewResepFormulariumIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewResepFormulariumIrjaComponent, selectors: [["app-view-resep-formularium-irja"]], decls: 2, vars: 0, template: function ViewResepFormulariumIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "view-resep-formularium-irja works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ 8351:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-racikan/resep-racikan.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepRacikanComponent": () => (/* binding */ ResepRacikanComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_resep_racikan_resep_racikan_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/resep-racikan/resep-racikan.service */ 8320);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);





const _c0 = ["GridResepRacikan"];
class ResepRacikanComponent {
    constructor(resepRacikanService) {
        this.resepRacikanService = resepRacikanService;
        /**
         * @GridResepRacikanDatasource
        */
        this.GridResepRacikanDatasource = [];
        /**
         * @GridDetailResepRacikanDatasource
        */
        this.GridDetailResepRacikanDatasource = [];
        this.ChildGrid = {
            dataSource: this.GridDetailResepRacikanDatasource,
            queryString: "id_obat",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-xs', id: 'Add' },
            ],
            editSettings: { allowAdding: true },
            columns: [
                { field: "id_obat", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', width: 200 },
                { field: "satuan", headerText: 'Satuan', width: 100 },
                { field: "satuan_terkecil", headerText: 'Satuan Terkecil', width: 100 },
                { field: "dosis_obat", headerText: 'Dosis Obat', textAlign: 'Right', width: 80 },
                { field: "dosis_yg_diinginkan", headerText: 'Dosis yang Diinginkan', width: 100, headerTextAlign: 'Center', textAlign: 'Right' },
                { field: "jumlah", headerText: 'Jumlah', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "harga", headerText: 'Harga (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "subtotal", headerText: 'Subtotal (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
            ],
        };
    }
    ngOnInit() {
        this.resepRacikanService.onGetResepRacikanDummy()
            .subscribe((result) => {
            this.GridResepRacikanDatasource = result;
        });
    }
    onLoad(args) {
        this.resepRacikanService.onGetDetailResepRacikanDummy()
            .subscribe((result) => {
            this.GridResepRacikan.childGrid.dataSource = result;
        });
    }
}
ResepRacikanComponent.ɵfac = function ResepRacikanComponent_Factory(t) { return new (t || ResepRacikanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_resep_racikan_resep_racikan_service__WEBPACK_IMPORTED_MODULE_0__.ResepRacikanService)); };
ResepRacikanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ResepRacikanComponent, selectors: [["app-resep-racikan"]], viewQuery: function ResepRacikanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.DetailRowService])], decls: 18, vars: 3, consts: [[1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card"], [1, "card-header"], [1, "mb-0", "text-biru-muda"], [1, "card-body", "p-0"], ["height", "calc(100vh - 13rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "load"], ["GridResepRacikan", ""], ["field", "id_obat", "headerText", "Nama Obat", "textAlign", "Left", 3, "visible"], ["field", "nama_obat", "headerText", "Nama Obat", "textAlign", "Left"], ["field", "jumlah", "headerText", "Jumlah", "textAlign", "Center", "format", "N1"], ["field", "satuan", "headerText", "Satuan", "textAlign", "Left"], ["field", "harga", "headerText", "Harga (Rp)", "textAlign", "Right", "format", "N2"], ["field", "diskon", "headerText", "Diskon (%)", "textAlign", "Right", "format", "N2"], ["field", "subtotal", "headerText", "Subtotal (Rp)", "textAlign", "Right", "format", "N2"]], template: function ResepRacikanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "org-card-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Resep Racikan Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ejs-grid", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ResepRacikanComponent_Template_ejs_grid_load_8_listener($event) { return ctx.onLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "e-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "e-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "e-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "e-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "e-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "e-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "e-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.GridResepRacikanDatasource)("childGrid", ctx.ChildGrid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_1__.OrgCardLayoutComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_3__.AggregateColumnDirective], styles: [".e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\n  min-height: 14px !important;\r\n}\r\n\r\nth.e-headercell[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  color: black;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  padding: 10px !important;\r\n  height: 30px !important;\r\n}\r\n\r\nspan.e-headertext[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n}\r\n\r\ntd.e-rowcell[_ngcontent-%COMP%] {\r\n  padding: 10px !important;\r\n}"] });


/***/ }),

/***/ 14402:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupCaraPakaiObatComponent": () => (/* binding */ SetupCaraPakaiObatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 5652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.service */ 76731);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);













const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupCaraPakaiObatComponent {
    constructor(formBuilder, utilityService, setupCaraPakaiObatService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupCaraPakaiObatService = setupCaraPakaiObatService;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_cara_pakai_obat: [0, []],
            kode_cara_pakai_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            cara_pakai_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_cara_pakai_obat);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupCaraPakaiObatService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataCaraPakaiObat() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupCaraPakaiObatService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupCaraPakaiObatService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_cara_pakai_obat
    */
    SetActive(is_active, id_cara_pakai_obat) {
        let data = {
            id_cara_pakai_obat: id_cara_pakai_obat
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupCaraPakaiObatService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupCaraPakaiObatService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get kode_cara_pakai_obat() { return this.FormInputData.get('kode_cara_pakai_obat'); }
    get cara_pakai_obat() { return this.FormInputData.get('cara_pakai_obat'); }
}
SetupCaraPakaiObatComponent.ɵfac = function SetupCaraPakaiObatComponent_Factory(t) { return new (t || SetupCaraPakaiObatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_service__WEBPACK_IMPORTED_MODULE_2__.SetupCaraPakaiObatService)); };
SetupCaraPakaiObatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SetupCaraPakaiObatComponent, selectors: [["app-setup-cara-pakai-obat"]], viewQuery: function SetupCaraPakaiObatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 18, vars: 22, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "kode_cara_pakai_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "cara_pakai_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"]], template: function SetupCaraPakaiObatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function SetupCaraPakaiObatComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onGetSelectedTabId", function SetupCaraPakaiObatComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Data Cara Pakai Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("row-selected", function SetupCaraPakaiObatComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupCaraPakaiObatComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupCaraPakaiObatComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupCaraPakaiObatComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupCaraPakaiObatComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupCaraPakaiObatComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Input Cara Pakai Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Kode Cara Pakai Obat")("IsFormControlInvalid", ctx.kode_cara_pakai_obat.invalid)("ValidatorsCaption", "Kode Cara Pakai Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState)("disabled", ctx.inputFieldState === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Nama Cara Pakai Obat")("IsFormControlInvalid", ctx.cara_pakai_obat.invalid)("ValidatorsCaption", "Nama Cara Pakai Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName], styles: [""] });


/***/ }),

/***/ 9973:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-grup-obat/setup-grup-obat.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGrupObatComponent": () => (/* binding */ SetupGrupObatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 92232);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_grup_obat_setup_grup_obat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-grup-obat/setup-grup-obat.service */ 96422);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);













const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupGrupObatComponent {
    constructor(formBuilder, utilityService, setupGrupObatService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupGrupObatService = setupGrupObatService;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_grup_obat: ['', []],
            kode_grup_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            nama_grup_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_grup_obat);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupGrupObatService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataGrupObat() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        delete Data.user_created;
        delete Data.time_created;
        delete Data.user_deactived;
        delete Data.time_deactived;
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupGrupObatService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupGrupObatService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_grup_obat
    */
    SetActive(is_active, id_grup_obat) {
        let data = {
            id_grup_obat: id_grup_obat
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupGrupObatService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupGrupObatService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get kode_grup_obat() { return this.FormInputData.get('kode_grup_obat'); }
    get nama_grup_obat() { return this.FormInputData.get('nama_grup_obat'); }
}
SetupGrupObatComponent.ɵfac = function SetupGrupObatComponent_Factory(t) { return new (t || SetupGrupObatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_setup_data_setup_grup_obat_setup_grup_obat_service__WEBPACK_IMPORTED_MODULE_2__.SetupGrupObatService)); };
SetupGrupObatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SetupGrupObatComponent, selectors: [["app-setup-grup-obat"]], viewQuery: function SetupGrupObatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 18, vars: 22, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "kode_grup_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "nama_grup_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"]], template: function SetupGrupObatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function SetupGrupObatComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onGetSelectedTabId", function SetupGrupObatComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Data Grup Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("row-selected", function SetupGrupObatComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupGrupObatComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupGrupObatComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupGrupObatComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupGrupObatComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupGrupObatComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Input Grup Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Kode Grup Obat")("IsFormControlInvalid", ctx.kode_grup_obat.invalid)("ValidatorsCaption", "Kode Grup Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState)("disabled", ctx.inputFieldState === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Nama Grup Obat")("IsFormControlInvalid", ctx.nama_grup_obat.invalid)("ValidatorsCaption", "Nama Grup Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName], styles: [""] });


/***/ }),

/***/ 96699:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupLabelPemakaianObatComponent": () => (/* binding */ SetupLabelPemakaianObatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 60141);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);













const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupLabelPemakaianObatComponent {
    constructor(formBuilder, utilityService, setupLabelPemakaianObatService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_label_pemakaian_obat: [0, []],
            kode_label_pemakaian_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            nama_label_pemakaian_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            berapa_kali_per_hari: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_label_pemakaian_obat);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
        this.kode_label_pemakaian_obat.setValue('');
        this.nama_label_pemakaian_obat.setValue('');
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupLabelPemakaianObatService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataLabelPemakaianObat() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupLabelPemakaianObatService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupLabelPemakaianObatService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_label_pemakaian_obat
    */
    SetActive(is_active, id_label_pemakaian_obat) {
        let data = {
            id_label_pemakaian_obat: id_label_pemakaian_obat
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupLabelPemakaianObatService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupLabelPemakaianObatService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get kode_label_pemakaian_obat() { return this.FormInputData.get('kode_label_pemakaian_obat'); }
    get nama_label_pemakaian_obat() { return this.FormInputData.get('nama_label_pemakaian_obat'); }
    get berapa_kali_per_hari() { return this.FormInputData.get('berapa_kali_per_hari'); }
}
SetupLabelPemakaianObatComponent.ɵfac = function SetupLabelPemakaianObatComponent_Factory(t) { return new (t || SetupLabelPemakaianObatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_2__.SetupLabelPemakaianObatService)); };
SetupLabelPemakaianObatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SetupLabelPemakaianObatComponent, selectors: [["app-setup-label-pemakaian-obat"]], viewQuery: function SetupLabelPemakaianObatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 19, vars: 24, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "kode_label_pemakaian_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "nama_label_pemakaian_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "berapa_kali_per_hari", 3, "label", "inputFieldState"]], template: function SetupLabelPemakaianObatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function SetupLabelPemakaianObatComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onGetSelectedTabId", function SetupLabelPemakaianObatComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Data Label Pemakaian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("row-selected", function SetupLabelPemakaianObatComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupLabelPemakaianObatComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupLabelPemakaianObatComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupLabelPemakaianObatComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupLabelPemakaianObatComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupLabelPemakaianObatComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Input Label Pemakaian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Kode Label Pemakaian Obat")("IsFormControlInvalid", ctx.kode_label_pemakaian_obat.invalid)("ValidatorsCaption", "Kode Label Pemakaian Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState)("disabled", ctx.inputFieldState === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Nama Label Pemakaian Obat")("IsFormControlInvalid", ctx.nama_label_pemakaian_obat.invalid)("ValidatorsCaption", "Nama Label Pemakaian Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Berapa Kali Perhari")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName], styles: [""] });


/***/ }),

/***/ 74025:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-outlet/setup-outlet.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupOutletComponent": () => (/* binding */ SetupOutletComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 84212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var src_app_modules_MM_services_setup_data_setup_stockroom_setup_stock_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service */ 330);
/* harmony import */ var _services_setup_data_setup_tipe_outlet_setup_tipe_outlet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/setup-data/setup-tipe-outlet/setup-tipe-outlet.service */ 80009);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 38583);


















const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupOutletComponent {
    constructor(formBuilder, utilityService, setupOutletService, setupStockroomService, setupTipeOutletService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupOutletService = setupOutletService;
        this.setupStockroomService = setupStockroomService;
        this.setupTipeOutletService = setupTipeOutletService;
        this.MaritalTipeOutletDropdownField = { text: 'tipe_outlet', value: 'id_tipe_outlet' };
        this.MaritalStockroomDropdownField = { text: 'nama_stockroom', value: 'id_stockroom' };
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_outlet: [0, []],
            id_stockroom: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            kode_outlet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            nama_outlet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            id_tipe_outlet: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
        this.setupStockroomService.setDataSource();
        this.setupTipeOutletService.setDataSource();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_outlet);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupOutletService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataOutlet() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupOutletService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupOutletService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_outlet
    */
    SetActive(is_active, id_outlet) {
        let data = {
            id_outlet: id_outlet
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupOutletService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupOutletService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get id_stockroom() { return this.FormInputData.get('id_stockroom'); }
    get kode_outlet() { return this.FormInputData.get('kode_outlet'); }
    get nama_outlet() { return this.FormInputData.get('nama_outlet'); }
    get id_tipe_outlet() { return this.FormInputData.get('id_tipe_outlet'); }
}
SetupOutletComponent.ɵfac = function SetupOutletComponent_Factory(t) { return new (t || SetupOutletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_2__.SetupOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_modules_MM_services_setup_data_setup_stockroom_setup_stock_room_service__WEBPACK_IMPORTED_MODULE_3__.SetupStockroomService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_setup_data_setup_tipe_outlet_setup_tipe_outlet_service__WEBPACK_IMPORTED_MODULE_4__.SetupTipeOutletService)); };
SetupOutletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: SetupOutletComponent, selectors: [["app-setup-outlet"]], viewQuery: function SetupOutletComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 32, vars: 34, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "id_stockroom", 3, "dataSource", "fields", "allowFiltering"], ["MaritalStockroomDropdown", ""], ["formControlName", "kode_outlet", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "nama_outlet", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["id", "marital", "formControlName", "id_tipe_outlet", 3, "dataSource", "fields", "allowFiltering"], ["MaritalTipeOutletDropdown", ""]], template: function SetupOutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onClickButtonNav", function SetupOutletComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("onGetSelectedTabId", function SetupOutletComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](5, "Data Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("row-selected", function SetupOutletComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupOutletComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupOutletComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupOutletComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupOutletComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupOutletComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, "Input Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](18, "atm-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](20, "ejs-dropdownlist", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](23, "mol-input-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "mol-input-text", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](27, "atm-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](29, "ejs-dropdownlist", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](31, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](33, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("LabelCaption", "Stockroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 29, ctx.setupStockroomService.dataSource))("fields", ctx.MaritalStockroomDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Kode Outlet")("IsFormControlInvalid", ctx.kode_outlet.invalid)("ValidatorsCaption", "Kode Outlet Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState)("disabled", ctx.inputFieldState === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("label", "Nama Outlet")("IsFormControlInvalid", ctx.nama_outlet.invalid)("ValidatorsCaption", "Nama Outlet Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("LabelCaption", "Tipe Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](31, 31, ctx.setupTipeOutletService.dataSource))("fields", ctx.MaritalTipeOutletDropdownField)("allowFiltering", true);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_5__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_8__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_9__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_11__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_15__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_12__.MolInputTextComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 19718:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRutePemberianObatComponent": () => (/* binding */ SetupRutePemberianObatComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 53106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service */ 88817);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_molecules_form_mol_input_checkbox_single_mol_input_checkbox_single_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-checkbox-single/mol-input-checkbox-single.component */ 53661);














const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupRutePemberianObatComponent {
    constructor(formBuilder, utilityService, setupRutePemberianObatService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupRutePemberianObatService = setupRutePemberianObatService;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_rute_pemberian_obat: [0, []],
            nama_rute_pemberian_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            rute_pasien: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]],
            ordered: [0, []],
            is_parenteral: [false, []],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_rute_pemberian_obat);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupRutePemberianObatService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataRutePemberianObat() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupRutePemberianObatService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupRutePemberianObatService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_rute_pemberian_obat
    */
    SetActive(is_active, id_rute_pemberian_obat) {
        let data = {
            id_rute_pemberian_obat: id_rute_pemberian_obat
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupRutePemberianObatService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupRutePemberianObatService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get id_rute_pemberian_obat() { return this.FormInputData.get('id_rute_pemberian_obat'); }
    get nama_rute_pemberian_obat() { return this.FormInputData.get('nama_rute_pemberian_obat'); }
    get rute_pasien() { return this.FormInputData.get('rute_pasien'); }
    get ordered() { return this.FormInputData.get('ordered'); }
    get is_parenteral() { return this.FormInputData.get('is_parenteral'); }
}
SetupRutePemberianObatComponent.ɵfac = function SetupRutePemberianObatComponent_Factory(t) { return new (t || SetupRutePemberianObatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_2__.SetupRutePemberianObatService)); };
SetupRutePemberianObatComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: SetupRutePemberianObatComponent, selectors: [["app-setup-rute-pemberian-obat"]], viewQuery: function SetupRutePemberianObatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 20, vars: 24, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "nama_rute_pemberian_obat", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "rute_pasien", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "ordered", 3, "label", "inputFieldState"], ["formControlName", "is_parenteral", "id", "is_parenteral", 3, "label"]], template: function SetupRutePemberianObatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onClickButtonNav", function SetupRutePemberianObatComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("onGetSelectedTabId", function SetupRutePemberianObatComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Data Rute Pemberian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("row-selected", function SetupRutePemberianObatComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupRutePemberianObatComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupRutePemberianObatComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupRutePemberianObatComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupRutePemberianObatComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupRutePemberianObatComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Input Rute Pemberian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "mol-input-checkbox-single", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Nama Rute Pemberian Obat")("IsFormControlInvalid", ctx.nama_rute_pemberian_obat.invalid)("ValidatorsCaption", "Nama Rute Pemberian Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Kode Rute Pemberian Obat")("IsFormControlInvalid", ctx.rute_pasien.invalid)("ValidatorsCaption", "Kode Rute Pemberian Obat Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Ordered")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Parenteral");
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _shared_components_molecules_form_mol_input_checkbox_single_mol_input_checkbox_single_component__WEBPACK_IMPORTED_MODULE_10__.MolInputCheckboxSingleComponent], styles: [""] });


/***/ }),

/***/ 67668:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupTipeOutletComponent": () => (/* binding */ SetupTipeOutletComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 20520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_setup_data_setup_tipe_outlet_setup_tipe_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/setup-data/setup-tipe-outlet/setup-tipe-outlet.service */ 80009);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);













const _c0 = ["OrgTabsRef"];
const _c1 = function () { return []; };
class SetupTipeOutletComponent {
    constructor(formBuilder, utilityService, setupTipeOutletService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupTipeOutletService = setupTipeOutletService;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_tipe_outlet: [0, []],
            tipe_outlet: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
            keterangan: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]],
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupTipeOutletService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataTipeOutlet() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupTipeOutletService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupTipeOutletService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get tipe_outlet() { return this.FormInputData.get('tipe_outlet'); }
    get keterangan() { return this.FormInputData.get('keterangan'); }
}
SetupTipeOutletComponent.ɵfac = function SetupTipeOutletComponent_Factory(t) { return new (t || SetupTipeOutletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_setup_data_setup_tipe_outlet_setup_tipe_outlet_service__WEBPACK_IMPORTED_MODULE_2__.SetupTipeOutletService)); };
SetupTipeOutletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: SetupTipeOutletComponent, selectors: [["app-setup-tipe-outlet"]], viewQuery: function SetupTipeOutletComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, decls: 18, vars: 21, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "tipe_outlet", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "keterangan", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"]], template: function SetupTipeOutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onClickButtonNav", function SetupTipeOutletComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "org-tabs", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("onGetSelectedTabId", function SetupTipeOutletComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "Data Tipe Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("row-selected", function SetupTipeOutletComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupTipeOutletComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupTipeOutletComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupTipeOutletComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupTipeOutletComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "org-tabs-label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Input Tipe Outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](17, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ButtonNav", ctx.TabId == "Input" ? ctx.ButtonNav : _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](20, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("showHeader", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Tipe Outlet")("IsFormControlInvalid", ctx.tipe_outlet.invalid)("ValidatorsCaption", "Tipe Outlet Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("label", "Keterangan")("IsFormControlInvalid", ctx.keterangan.invalid)("ValidatorsCaption", "Keterangan Outlet Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_7__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_8__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName], styles: [""] });


/***/ }),

/***/ 12426:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-formularium/setup-formularium/setup-formularium.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_GridSetting_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupFormulariumComponent": () => (/* binding */ SetupFormulariumComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_GridSetting_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/GridSetting.json */ 48544);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/lookupitem.json */ 99131);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _services_formularium_setup_terapi_setup_terapi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/formularium/setup-terapi/setup-terapi.service */ 99990);
/* harmony import */ var _services_formularium_setup_terapi_generik_setup_terapi_generik_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/formularium/setup-terapi-generik/setup-terapi-generik.service */ 57317);
/* harmony import */ var _services_formularium_setup_generik_setup_generik_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/formularium/setup-generik/setup-generik.service */ 65555);
/* harmony import */ var _services_formularium_setup_formularium_setup_formularium_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/formularium/setup-formularium/setup-formularium.service */ 83601);
/* harmony import */ var _services_formularium_setup_jenis_formularium_setup_jenis_formularium_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/formularium/setup-jenis-formularium/setup-jenis-formularium.service */ 72023);
/* harmony import */ var _services_formularium_setup_sediaan_obat_setup_sediaan_obat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/formularium/setup-sediaan-obat/setup-sediaan-obat.service */ 71904);
/* harmony import */ var _services_formularium_setup_restriksi_obat_setup_restriksi_obat_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/formularium/setup-restriksi-obat/setup-restriksi-obat.service */ 90246);
/* harmony import */ var _services_formularium_setup_peresepan_maksimal_setup_peresepan_maksimal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/formularium/setup-peresepan-maksimal/setup-peresepan-maksimal.service */ 50744);
/* harmony import */ var _services_formularium_setup_parameter_maksimal_setup_parameter_maksimal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/formularium/setup-parameter-maksimal/setup-parameter-maksimal.service */ 91969);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 93809);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_org_look_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-look-up/org-look-up.component */ 35260);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-textarea/mol-input-textarea.component */ 81892);
/* harmony import */ var _shared_components_molecules_form_mol_datepicker_syncfusion_mol_datepicker_syncfusion_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-datepicker-syncfusion/mol-datepicker-syncfusion.component */ 40565);



























const _c0 = ["modalTambahTerapi"];
const _c1 = ["modalTambahTerapiGenerik"];
const _c2 = ["modalTambahFormularium"];
const _c3 = ["modalSetupGenerik"];
const _c4 = ["modalSetupTerapi"];
const _c5 = ["modalSetupSediaan"];
const _c6 = ["modalSetupRestriksi"];
const _c7 = ["modalSetupPeresepanMaksimal"];
const _c8 = ["LookupItem"];
function SetupFormulariumComponent_ng_template_15_i_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "i", 33);
} }
function SetupFormulariumComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_15_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r22.handleSubTerapi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](3, SetupFormulariumComponent_ng_template_15_i_3_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", data_r20.id_terapi_parent == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate2"](" ", data_r20.kode_terapi, " ", data_r20.nama_terapi, " ");
} }
function SetupFormulariumComponent_ng_template_65_mol_input_text_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](0, "mol-input-text", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("inputFieldState", "detail")("label", "Parent Terapi");
} }
function SetupFormulariumComponent_ng_template_65_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Tambah Terapi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_65_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](11, SetupFormulariumComponent_ng_template_65_mol_input_text_11_Template, 1, 2, "mol-input-text", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "mol-input-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "mol-input-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "mol-input-text", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_65_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r27.handleSimpanTerapi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](17, "Simpan Terapi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r7.FormInputDataTerapi);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx_r7.hideParentTarif);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Kode Terapi")("IsFormControlInvalid", ctx_r7.kode_terapi.invalid)("ValidatorsCaption", "Kode Terapi Tidak Boleh Kosong")("inputFieldState", ctx_r7.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "No Terapi")("IsFormControlInvalid", ctx_r7.no_terapi.invalid)("ValidatorsCaption", "No Terapi Tidak Boleh Kosong")("inputFieldState", ctx_r7.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Nama Terapi")("IsFormControlInvalid", ctx_r7.nama_terapi.invalid)("ValidatorsCaption", "Nama Terapi Outlet Tidak Boleh Kosong")("inputFieldState", ctx_r7.inputFieldState);
} }
function SetupFormulariumComponent_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Tambah Terapi Generik");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_67_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r29.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "mol-input-text", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](12, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](14, "ejs-dropdownlist", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_67_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r31.handleSetupGenerik(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](19, "Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_67_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r32.handleSimpanTerapiGenerik(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](22, "Simpan Terapi Generik");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r9.FormInputDataTerapiGenerik);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "No")("inputFieldState", ctx_r9.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Nama Generik");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](16, 7, ctx_r9.setupGenerikService.dataSource))("fields", ctx_r9.MaritalGenerikDropdownField)("allowFiltering", true);
} }
function SetupFormulariumComponent_ng_template_69_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Tambah formularium");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_69_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r37.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](15, "ejs-dropdownlist", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](20, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](22, "ejs-dropdownlist", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](24, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_69_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r39.handleSetupSediaan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](27, "Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](29, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](30, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](32, "ejs-dropdownlist", 64, 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_69_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r40.handleSetupRestriksi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](37, "Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](40, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "ejs-dropdownlist", 66, 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](44, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](45, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](46, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_69_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r41.handleSetupPeresepanMaksimal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](47, "Setup");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](48, "mol-input-textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](49, "mol-datepicker-syncfusion", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](50, "mol-datepicker-syncfusion", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_69_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r42.handleSimpanFormularium(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](53, "Simpan Formularium");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r11.FormInputDataFormularium);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Jenis");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 22, ctx_r11.setupJenisFormulariumService.dataSource))("fields", ctx_r11.MaritalJenisFormulariumDropdownField)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Sediaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](24, 24, ctx_r11.setupSediaanObatService.dataSource))("fields", ctx_r11.MaritalSediaanObatDropdownField)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Restriksi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](34, 26, ctx_r11.setupRestriksiObatService.dataSource))("fields", ctx_r11.MaritalRestriksiObatDropdownField)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Peresepan Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](44, 28, ctx_r11.setupPeresepanMaksimalService.dataSource))("fields", ctx_r11.MaritalPeresepanMaksimalDropdownField)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Keterangan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Tgl Berlaku")("format", "dd MMMM yyyy");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Tgl Berakhir")("format", "dd MMMM yyyy");
} }
function SetupFormulariumComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Setup Generik");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_71_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); ctx_r43.modalRef.hide(); return ctx_r43.handleTambahTerapiGenerik(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "mol-input-text", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "mol-input-text", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "mol-input-text", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_71_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r45.handleSimpanGenerik(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](14, "Simpan Generk");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r13.FormInputDataGenerik);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "No Generik")("IsFormControlInvalid", ctx_r13.no_generik.invalid)("ValidatorsCaption", "No Generik Tidak Boleh Kosong")("inputFieldState", ctx_r13.inputFieldState)("disabled", ctx_r13.inputFieldState === "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Nama Generik")("IsFormControlInvalid", ctx_r13.nama_generik.invalid)("ValidatorsCaption", "Nama Generik Tidak Boleh Kosong")("inputFieldState", ctx_r13.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Alias")("inputFieldState", ctx_r13.inputFieldState);
} }
function SetupFormulariumComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Setup Sediaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_73_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); ctx_r46.modalRef.hide(); return ctx_r46.handleTambahFormularium(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "mol-input-textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_73_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r48.handleSimpanSediaan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Simpan Sediaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r15.FormInputDataSediaan);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "sediaan_obat");
} }
function SetupFormulariumComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Setup Restriksi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_75_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); ctx_r49.modalRef.hide(); return ctx_r49.handleTambahFormularium(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "mol-input-textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_75_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r51.handleSimpanRestriksi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](12, "Simpan Restrisi");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r17.FormInputDataRestriksi);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "restriksi_obat");
} }
function SetupFormulariumComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Setup Peresepan Maksimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_77_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); ctx_r53.modalRef.hide(); return ctx_r53.handleTambahFormularium(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "mol-input-text", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](10, "mol-input-text", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](11, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](13, "atm-label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](15, "ejs-dropdownlist", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_ng_template_77_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r55.handleSimpanPeresepanMaksimal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Simpan Peresepan Maksimal");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx_r19.FormInputDataPeresepanMaksimal);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Peresepan Maksimal")("IsFormControlInvalid", ctx_r19.peresepan_maksimal.invalid)("ValidatorsCaption", "Peresepan Maksimal Tidak Boleh Kosong")("inputFieldState", ctx_r19.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("label", "Nilai")("inputFieldState", ctx_r19.inputFieldState);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](17, 11, ctx_r19.setupParameterMaksimalService.dataSource))("fields", ctx_r19.MaritalParameterMaksimalDropdownField)("allowFiltering", true);
} }
class SetupFormulariumComponent {
    constructor(modalService, formBuilder, utilityService, setupTerapiService, setupTerapiGenerikService, setupGenerikService, setupFormulariumService, setupJenisFormulariumService, setupSediaanObatService, setupRestriksiObatService, setupPeresepanMaksimalService, setupParameterMaksimalService) {
        this.modalService = modalService;
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupTerapiService = setupTerapiService;
        this.setupTerapiGenerikService = setupTerapiGenerikService;
        this.setupGenerikService = setupGenerikService;
        this.setupFormulariumService = setupFormulariumService;
        this.setupJenisFormulariumService = setupJenisFormulariumService;
        this.setupSediaanObatService = setupSediaanObatService;
        this.setupRestriksiObatService = setupRestriksiObatService;
        this.setupPeresepanMaksimalService = setupPeresepanMaksimalService;
        this.setupParameterMaksimalService = setupParameterMaksimalService;
        this.MaritalGenerikDropdownField = { text: 'nama_generik', value: 'id_generik' };
        this.MaritalJenisFormulariumDropdownField = { text: 'jenis_formularium', value: 'id_jenis_formularium' };
        this.MaritalSediaanObatDropdownField = { text: 'sediaan_obat', value: 'id_sediaan_obat' };
        this.MaritalRestriksiObatDropdownField = { text: 'nama_restriksi', value: 'id_restriksi_obat' };
        this.MaritalPeresepanMaksimalDropdownField = { text: 'peresepan_maksimal', value: 'id_peresepan_maksimal' };
        this.MaritalParameterMaksimalDropdownField = { text: 'parameter_maksimal', value: 'id_parameter_maksimal' };
        this.GridSetting = /*#__PURE__*/ (_json_GridSetting_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_GridSetting_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_GridSetting_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.hideParentTarif = true;
        this.allowMultiSelection = false;
        this.DataSourceGeneric = [];
        this.DataSourceSediaan = [];
        this.DataSourceRestreksi = [];
        this.DataSourceMax = [];
        this.DataSourceDagang = [];
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.urlObat = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_2__.PHARMACY.FORMULARIUM.SETUP_FORMULARIUM.OBAT_LOOKUP;
        this.currentFormulariumObat = null;
    }
    ngOnInit() {
        this.wrapSettings = { wrapMode: 'Content' };
        this.FormInputDataTerapi = this.formBuilder.group({
            id_terapi: [0, []],
            id_terapi_parent: [null, []],
            parent_terapi: ['', []],
            no_terapi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            kode_terapi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            nama_terapi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            level_rekursif_terapi: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
        });
        this.FormInputDataTerapiGenerik = this.formBuilder.group({
            id_terapi: [0, []],
            no_terapi_generik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            id_generik: [0, []],
        });
        this.FormInputDataFormularium = this.formBuilder.group({
            id_formularium: [0, []],
            id_generik: [0, []],
            id_terapi: [0, []],
            id_jenis_formularium: [0, []],
            id_sediaan_obat: [0, []],
            id_restriksi_obat: [0, []],
            id_peresepan_maksimal: [0, []],
            keterangan: ['', []],
            tgl_berlaku: [null, []],
            tgl_berakhir: [null, []],
        });
        this.FormInputDataGenerik = this.formBuilder.group({
            id_generik: [0, []],
            no_generik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            nama_generik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            alias_generik: ['', []],
            is_active: [false, []]
        });
        this.FormInputDataSediaan = this.formBuilder.group({
            id_sediaan_obat: [0, []],
            sediaan_obat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
        });
        this.FormInputDataRestriksi = this.formBuilder.group({
            nama_restriksi: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
        });
        this.FormInputDataPeresepanMaksimal = this.formBuilder.group({
            peresepan_maksimal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
            nilai_maksimal: [0, []],
            id_parameter_maksimal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_22__.Validators.required]],
        });
        this.getAllTerapi();
        this.setupGenerikService.setDataSource();
        this.setupJenisFormulariumService.setDataSource();
        this.setupSediaanObatService.setDataSource();
        this.setupRestriksiObatService.setDataSource();
        this.setupPeresepanMaksimalService.setDataSource();
        this.setupParameterMaksimalService.setDataSource();
    }
    /* ====== METHOD TERAPI =========== */
    nodeSelected(e) {
        console.log(e);
        this.CurrentDataTerapi = e.nodeData;
        this.setupTerapiGenerikService.setDataSource(this.CurrentDataTerapi.id);
        this.setupFormulariumService.setDataSource(0);
        this.setupFormulariumService.getFormulariumObat(0);
    }
    ;
    getAllTerapi() {
        this.setupTerapiService.onGetAll().subscribe((result) => {
            this.field = { dataSource: result.data, id: 'id_terapi', parentID: 'id_terapi_parent', text: 'nama_terapi', hasChildren: 'is_parent' };
        });
    }
    handleSimpanTerapi() {
        this.setupTerapiService.onPostSave(this.FormInputDataTerapi.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.FormInputDataTerapi.reset();
                this.modalRef.hide();
                this.getAllTerapi();
            });
        });
    }
    handleAddTerapi() {
        this.id_terapi_parent.setValue(null);
        this.parent_terapi.setValue('');
        this.level_rekursif_terapi.setValue(0);
        this.hideParentTarif = true;
        this.modalRef = this.modalService.show(this.modalTambahTerapi, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSubTerapi() {
        this.id_terapi_parent.setValue(this.CurrentDataTerapi.id);
        this.parent_terapi.setValue(this.CurrentDataTerapi.text);
        this.level_rekursif_terapi.setValue(1);
        this.hideParentTarif = false;
        this.modalRef = this.modalService.show(this.modalTambahTerapi, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSetupTerapi() {
        console.log('setup terapi');
        this.modalRef.hide();
        this.modalRef = this.modalService.show(this.modalSetupTerapi, Object.assign({}, { class: 'modal-lg' }));
    }
    /* ==== Method Generik ====== */
    handleTambahTerapiGenerik(reset) {
        this.id_terapi_g.setValue(this.CurrentDataTerapi.id);
        if (reset) {
            this.FormInputDataTerapiGenerik.reset();
        }
        this.modalRef = this.modalService.show(this.modalTambahTerapiGenerik, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanTerapiGenerik() {
        let data = this.FormInputDataTerapiGenerik.value;
        data.id_terapi = this.CurrentDataTerapi.id;
        this.setupTerapiGenerikService.onPostSave(this.FormInputDataTerapiGenerik.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.FormInputDataTerapiGenerik.reset();
                this.modalRef.hide();
                this.setupTerapiGenerikService.setDataSource(this.CurrentDataTerapi.id);
            });
        });
    }
    handleSelectedGeneric(args) {
        this.CurrentDataTerapiGenerik = args.data;
        console.log(this.CurrentDataTerapiGenerik);
        this.setupFormulariumService.setDataSource(this.CurrentDataTerapiGenerik.id_generik);
        this.setupFormulariumService.getFormulariumObat(0);
    }
    // ==== Method Formularium =======
    handleTambahFormularium(reset) {
        if (reset) {
            this.FormInputDataFormularium.reset();
            this.id_terapi_f.setValue(this.CurrentDataTerapi.id);
            this.id_generik_f.setValue(this.CurrentDataTerapiGenerik.id_generik);
        }
        else {
            this.id_terapi_f.setValue(this.CurrentDataTerapi.id);
            this.id_generik_f.setValue(this.CurrentDataTerapiGenerik.id_generik);
        }
        this.modalRef = this.modalService.show(this.modalTambahFormularium, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanFormularium() {
        console.log(this.FormInputDataFormularium.value);
        this.setupFormulariumService.onPostSave(this.FormInputDataFormularium.value).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.FormInputDataFormularium.reset();
                this.modalRef.hide();
                this.setupFormulariumService.setDataSource(this.CurrentDataTerapiGenerik.id_generik);
            });
        });
    }
    //==============
    //++++++++ Setup Generik
    handleSetupGenerik() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(this.modalSetupGenerik, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanGenerik() {
        this.setupGenerikService.onPostSave(this.FormInputDataGenerik.value)
            .subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.setupGenerikService.setDataSource();
                this.id_generik_g.setValue(result.data);
                this.modalRef.hide();
                this.modalRef = this.modalService.show(this.modalTambahTerapiGenerik, Object.assign({}, { class: 'modal-lg' }));
            });
        });
    }
    //++++++++ Setup Sediaan
    handleSetupSediaan() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(this.modalSetupSediaan, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanSediaan() {
        this.setupSediaanObatService.onPostSave(this.FormInputDataSediaan.value)
            .subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.setupSediaanObatService.setDataSource();
                this.id_sediaan_obat_f.setValue(result.data);
                this.modalRef.hide();
                this.modalRef = this.modalService.show(this.modalTambahFormularium, Object.assign({}, { class: 'modal-lg' }));
            });
        });
    }
    //++++++++ Setup Restriksi
    handleSetupRestriksi() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(this.modalSetupRestriksi, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanRestriksi() {
        this.setupRestriksiObatService.onPostSave(this.FormInputDataRestriksi.value)
            .subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.setupRestriksiObatService.setDataSource();
                this.id_restriksi_obat_f.setValue(result.data);
                this.modalRef.hide();
                this.modalRef = this.modalService.show(this.modalTambahFormularium, Object.assign({}, { class: 'modal-lg' }));
            });
        });
    }
    //++++++++ Setup Peresepan Maksimal
    handleSetupPeresepanMaksimal() {
        this.modalRef.hide();
        this.modalRef = this.modalService.show(this.modalSetupPeresepanMaksimal, Object.assign({}, { class: 'modal-lg' }));
    }
    handleSimpanPeresepanMaksimal() {
        this.setupPeresepanMaksimalService.onPostSave(this.FormInputDataPeresepanMaksimal.value)
            .subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.setupPeresepanMaksimalService.setDataSource();
                this.id_peresepan_maksimal_f.setValue(result.data);
                this.modalRef.hide();
                this.modalRef = this.modalService.show(this.modalTambahFormularium, Object.assign({}, { class: 'modal-lg' }));
            });
        });
    }
    handleSelectedFormularium(args) {
        this.id_formularium.setValue(args.data.id_formularium);
        this.setupFormulariumService.getFormulariumObat(args.data.id_formularium);
    }
    handleTambahFormulariumObat() {
        if (this.id_formularium.value) {
            this.LookupItem.onOpenModal();
        }
        else {
            alert('pillih formularium');
        }
    }
    heandleSelectedItem($event) {
        console.log($event);
        this.setupFormulariumService.insertFormulariumObat({
            id_item: $event.id_item,
            id_formularium: this.id_formularium.value
        }).subscribe((result) => {
            this.setupFormulariumService.getFormulariumObat(this.id_formularium.value);
        });
    }
    handleSelectedFormulariumObat(args) {
        this.currentFormulariumObat = args.data;
    }
    handleDeleteFormulariumObat() {
        this.setupFormulariumService.deleteFormulariumObat({
            id_item: this.currentFormulariumObat.id_item,
            id_formularium: this.id_formularium.value
        }).subscribe((result) => {
            this.setupFormulariumService.getFormulariumObat(this.id_formularium.value);
        });
    }
    get parent_terapi() { return this.FormInputDataTerapi.get('parent_terapi'); }
    get id_terapi_parent() { return this.FormInputDataTerapi.get('id_terapi_parent'); }
    get kode_terapi() { return this.FormInputDataTerapi.get('kode_terapi'); }
    get no_terapi() { return this.FormInputDataTerapi.get('no_terapi'); }
    get nama_terapi() { return this.FormInputDataTerapi.get('nama_terapi'); }
    get level_rekursif_terapi() { return this.FormInputDataTerapi.get('level_rekursif_terapi'); }
    get id_terapi_g() { return this.FormInputDataTerapiGenerik.get('id_terapi'); }
    get id_generik_g() { return this.FormInputDataTerapiGenerik.get('id_generik'); }
    get no_terapi_generik() { return this.FormInputDataTerapiGenerik.get('no_terapi_generik'); }
    get id_formularium() { return this.FormInputDataFormularium.get('id_formularium'); }
    get id_generik_f() { return this.FormInputDataFormularium.get('id_generik'); }
    get id_terapi_f() { return this.FormInputDataFormularium.get('id_terapi'); }
    get id_jenis_formularium_f() { return this.FormInputDataFormularium.get('id_jenis_formularium'); }
    get id_sediaan_obat_f() { return this.FormInputDataFormularium.get('id_sediaan_obat'); }
    get id_restriksi_obat_f() { return this.FormInputDataFormularium.get('id_restriksi_obat'); }
    get id_peresepan_maksimal_f() { return this.FormInputDataFormularium.get('id_peresepan_maksimal'); }
    get keterangan() { return this.FormInputDataFormularium.get('keterangan'); }
    get tgl_berlaku() { return this.FormInputDataFormularium.get('tgl_berlaku'); }
    get tgl_berakhir() { return this.FormInputDataFormularium.get('tgl_berakhir'); }
    get no_generik() { return this.FormInputDataGenerik.get('no_generik'); }
    get nama_generik() { return this.FormInputDataGenerik.get('nama_generik'); }
    get nilai_maksimal() { return this.FormInputDataPeresepanMaksimal.get('nilai_maksimal'); }
    get id_parameter_maksimal() { return this.FormInputDataPeresepanMaksimal.get('id_parameter_maksimal'); }
    get peresepan_maksimal() { return this.FormInputDataPeresepanMaksimal.get('peresepan_maksimal'); }
}
SetupFormulariumComponent.ɵfac = function SetupFormulariumComponent_Factory(t) { return new (t || SetupFormulariumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_terapi_setup_terapi_service__WEBPACK_IMPORTED_MODULE_5__.SetupTerapiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_terapi_generik_setup_terapi_generik_service__WEBPACK_IMPORTED_MODULE_6__.SetupTerapiGenerikService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_generik_setup_generik_service__WEBPACK_IMPORTED_MODULE_7__.SetupGenerikService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_formularium_setup_formularium_service__WEBPACK_IMPORTED_MODULE_8__.SetupFormulariumService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_jenis_formularium_setup_jenis_formularium_service__WEBPACK_IMPORTED_MODULE_9__.SetupJenisFormulariumService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_sediaan_obat_setup_sediaan_obat_service__WEBPACK_IMPORTED_MODULE_10__.SetupSediaanObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_restriksi_obat_setup_restriksi_obat_service__WEBPACK_IMPORTED_MODULE_11__.SetupRestriksiObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_peresepan_maksimal_setup_peresepan_maksimal_service__WEBPACK_IMPORTED_MODULE_12__.SetupPeresepanMaksimalService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_services_formularium_setup_parameter_maksimal_setup_parameter_maksimal_service__WEBPACK_IMPORTED_MODULE_13__.SetupParameterMaksimalService)); };
SetupFormulariumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: SetupFormulariumComponent, selectors: [["app-setup-formularium"]], viewQuery: function SetupFormulariumComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c8, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalTambahTerapi = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalTambahTerapiGenerik = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalTambahFormularium = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalSetupGenerik = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalSetupTerapi = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalSetupSediaan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalSetupRestriksi = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalSetupPeresepanMaksimal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.LookupItem = _t.first);
    } }, decls: 79, vars: 29, consts: [[1, "row"], [1, "col-sm-3"], [1, "card"], [1, "card-header"], [1, "row", "justify-content-between"], [1, "col-md-7"], [1, "m-0"], [1, "col-auto"], [3, "click"], [1, "fas", "fa-plus-circle", "tambah", "text-primary"], [1, "card-body", "p-0"], ["id", "treeparent"], ["id", "treeelement", "e-nodeclick", "onClick", 3, "fields", "allowMultiSelection", "nodeSelected"], ["nodeTemplate", ""], [3, "grid-id", "grid-height", "grid-lines", "columns", "grid-DataSource", "row-selected"], ["gridDaftarOrder", ""], [1, "col-sm-6"], [1, "col-sm-12", "mb-3"], [3, "grid-id", "grid-height", "grid-lines", "columns", "grid-DataSource", "textWrapSettings", "row-selected"], [3, "lookup-url", "columns", "filter-lookup", "modal-title", "onGetSelectedData"], ["LookupItem", ""], [1, "col-sm-12"], [1, "fas", "fa-plus-circle", "tambah", "text-primary", "me-2"], [1, "fas", "fa-times-circle", "tambah", "text-danger"], ["modalTambahTerapi", ""], ["modalTambahTerapiGenerik", ""], ["modalTambahFormularium", ""], ["modalSetupGenerik", ""], ["modalSetupSediaan", ""], ["modalSetupRestriksi", ""], ["modalSetupPeresepanMaksimal", ""], [1, "ejob"], ["class", "fas fa-plus-circle tambah_terapi text-primary ", 4, "ngIf"], [1, "fas", "fa-plus-circle", "tambah_terapi", "text-primary"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "parent_terapi", 3, "inputFieldState", "label", 4, "ngIf"], ["formControlName", "kode_terapi", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "no_terapi", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "nama_terapi", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["formControlName", "parent_terapi", 3, "inputFieldState", "label"], ["formControlName", "no_terapi_generik", 3, "label", "inputFieldState"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-6", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "id_generik", 3, "dataSource", "fields", "allowFiltering"], ["MaritalGenerikDropdown", ""], [1, "col-sm-2"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", "formControlName", "id_jenis_formularium", 3, "dataSource", "fields", "allowFiltering"], ["MaritalJenisFormulariumDropdown", ""], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6"], ["id", "marital", "formControlName", "id_sediaan_obat", 3, "dataSource", "fields", "allowFiltering"], ["MaritalSediaanObatDropdown", ""], ["id", "marital", "formControlName", "id_restriksi_obat", 3, "dataSource", "fields", "allowFiltering"], ["MaritalRestriksiObatDropdown", ""], ["id", "marital", "formControlName", "id_peresepan_maksimal", 3, "dataSource", "fields", "allowFiltering"], ["MaritalPeresepanMaksimalDropdown", ""], ["formControlName", "keterangan", 3, "label"], ["formControlName", "tgl_berlaku", 3, "label", "format"], ["formControlName", "tgl_berakhir", 3, "label", "format"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], ["formControlName", "no_generik", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "nama_generik", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "alias_generik", 3, "label", "inputFieldState"], ["formControlName", "sediaan_obat", 3, "label"], ["formControlName", "nama_restriksi", 3, "label"], ["formControlName", "peresepan_maksimal", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "nilai", 3, "label", "inputFieldState"], ["id", "marital", "formControlName", "id_parameter_maksimal", 3, "dataSource", "fields", "allowFiltering"], ["MaritalParameterMaksimalDropdown", ""]], template: function SetupFormulariumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "org-card-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](8, "Terapi");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_Template_a_click_10_listener() { return ctx.handleAddTerapi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "ejs-treeview", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("nodeSelected", function SetupFormulariumComponent_Template_ejs_treeview_nodeSelected_14_listener($event) { return ctx.nodeSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](15, SetupFormulariumComponent_ng_template_15_Template, 5, 3, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Generik");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_Template_a_click_25_listener() { return ctx.handleTambahTerapiGenerik(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](26, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "mol-grid", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("row-selected", function SetupFormulariumComponent_Template_mol_grid_row_selected_28_listener($event) { return ctx.handleSelectedGeneric($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](32, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](38, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](39, "Formularium");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_Template_a_click_41_listener() { return ctx.handleTambahFormularium(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](42, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "mol-grid", 18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("row-selected", function SetupFormulariumComponent_Template_mol_grid_row_selected_44_listener($event) { return ctx.handleSelectedFormularium($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "org-look-up", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onGetSelectedData", function SetupFormulariumComponent_Template_org_look_up_onGetSelectedData_47_listener($event) { return ctx.heandleSelectedItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](55, "Nama Dagang");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_Template_a_click_57_listener() { return ctx.handleTambahFormulariumObat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](58, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function SetupFormulariumComponent_Template_a_click_59_listener() { return ctx.handleDeleteFormulariumObat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](60, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](62, "mol-grid", 18, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("row-selected", function SetupFormulariumComponent_Template_mol_grid_row_selected_62_listener($event) { return ctx.handleSelectedFormulariumObat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](64, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](65, SetupFormulariumComponent_ng_template_65_Template, 18, 14, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](67, SetupFormulariumComponent_ng_template_67_Template, 23, 9, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](69, SetupFormulariumComponent_ng_template_69_Template, 54, 30, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](71, SetupFormulariumComponent_ng_template_71_Template, 15, 12, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](73, SetupFormulariumComponent_ng_template_73_Template, 13, 2, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](75, SetupFormulariumComponent_ng_template_75_Template, 13, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](77, SetupFormulariumComponent_ng_template_77_Template, 21, 13, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("fields", ctx.field)("allowMultiSelection", ctx.allowMultiSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("grid-id", "GridDaftarOrder")("grid-height", "calc(100vh - 250px)")("grid-lines", "Both")("columns", ctx.GridSetting.GridGenerik.columns)("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](30, 23, ctx.setupTerapiGenerikService.dataSource));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("grid-id", "GridDaftarOrder")("grid-height", "calc((100vh - 350px)/2)")("grid-lines", "Both")("columns", ctx.GridSetting.GridSediaan.columns)("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](46, 25, ctx.setupFormulariumService.dataSource))("textWrapSettings", ctx.wrapSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("lookup-url", ctx.urlObat)("columns", ctx.GridLookUpItem.columns)("filter-lookup", ctx.GridLookUpItem.filter)("modal-title", "Data Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("grid-id", "GridDaftarOrder")("grid-height", "calc((100vh - 350px)/2)")("grid-lines", "Both")("columns", ctx.GridSetting.GridItem.columns)("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](64, 27, ctx.setupFormulariumService.dataSource_obat))("textWrapSettings", ctx.wrapSettings);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_14__.OrgCardLayoutComponent, _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_23__.TreeViewComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_15__.MolGridComponent, _shared_components_organism_loockUp_org_look_up_org_look_up_component__WEBPACK_IMPORTED_MODULE_16__.OrgLookUpComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_17__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlName, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_18__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__.DropDownListComponent, _shared_components_molecules_form_mol_input_textarea_mol_input_textarea_component__WEBPACK_IMPORTED_MODULE_19__.MolInputTextareaComponent, _shared_components_molecules_form_mol_datepicker_syncfusion_mol_datepicker_syncfusion_component__WEBPACK_IMPORTED_MODULE_20__.MolDatepickerSyncfusionComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe], styles: ["#treeparent[_ngcontent-%COMP%]{\r\n    display: block;\r\n    max-width: 400px;\r\n    height: calc(100vh - 210px);\r\n    margin: auto;\r\n    overflow: auto;\r\n    border: 1px solid #dddddd;\r\n    border-radius: 3px;\r\n}\r\n\r\n#treeelement[_ngcontent-%COMP%]{\r\n    max-height: calc(100vh - 210px);\r\n    overflow: auto;\r\n}\r\n\r\n.tambah[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n    margin-top: 1px;\r\n}\r\n\r\n.tambah_terapi[_ngcontent-%COMP%]{\r\n    font-size: 18px;\r\n    margin-top: 1px;\r\n}"] });


/***/ }),

/***/ 76995:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-formularium/setup-formularium/setup-generik/setup-generik.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGenerikComponent": () => (/* binding */ SetupGenerikComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 83720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_Pharmacy_services_formularium_setup_generik_setup_generik_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/formularium/setup-generik/setup-generik.service */ 65555);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 23021);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38499);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 9212);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 62751);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);












const _c0 = ["OrgTabsRef"];
class SetupGenerikComponent {
    constructor(formBuilder, utilityService, setupGenerikService) {
        this.formBuilder = formBuilder;
        this.utilityService = utilityService;
        this.setupGenerikService = setupGenerikService;
        this.setInitTabs = false;
        /**
         * Variable untuk menyimpan Configurasi Grid
         * @Json Config
        */
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        /**
         * Variable untuk menentukan component input
         * @val normal,edit,detail
        */
        this.inputFieldState = 'normal';
        /**
         * Variable untuk menentukan tap berada di posisi mana
         * @valur data | input
        */
        this.TabId = 'Data';
        this.GridData = null;
        this.GridDataEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.FormInputData = this.formBuilder.group({
            id_generik: [0, []],
            no_generik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            nama_generik: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            alias_generik: ['', []],
            is_active: [false, []]
        });
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        if (this.setInitForm == 'input') {
            this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        }
        this.GetAllData();
    }
    handleSelectedTabId(TabId) {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        }
        else {
            this.GetAllData;
        }
    }
    InitalizedGrid(component) {
        this.GridData = component;
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
    }
    handleActionComplete($event) {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_generik);
            }
        }
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }
    handleClickCommandGrid(args) {
        console.log(args);
    }
    handleClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }
    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args) {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }
    /** method setting input new data */
    setNewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting edit data */
    setEditForm() {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    ;
    /** method setting lihat data detail */
    setViewForm() {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }
    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom() {
        this.FormInputData.reset();
    }
    /** Method Untuk Mereload Data Grid */
    GetAllData() {
        this.setupGenerikService.onGetAll()
            .subscribe((result) => {
            this.GridDatasource = result.data;
        });
    }
    AddDataGenerik() {
        console.log('Add');
    }
    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data) {
        this.FormInputData.reset();
        this.FormInputData.setValue(Data);
    }
    /** Method menyimpan | menubah data */
    SaveAndNew() {
        const Data = this.FormInputData.value;
        if (this.inputFieldState == 'normal') {
            this.setupGenerikService.onPostSave(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                    this.ResetFrom();
                });
            });
        }
        else {
            this.setupGenerikService.onPutEdit(Data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                    .then(() => {
                });
            });
        }
    }
    /** Method untuk mengubah status aktif | Non Active
     * @param is_active,kode_generik
    */
    SetActive(is_active, id_generik) {
        let data = {
            id_generik: id_generik
        };
        console.log('data', data);
        console.log('is_active', is_active);
        if (is_active) {
            this.setupGenerikService.onPutToActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
        else {
            this.setupGenerikService.onPutToDeActive(data)
                .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                    .then(() => {
                });
            });
        }
    }
    Clear() {
        this.ResetFrom();
    }
    Cancel() {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }
    KeyDownHandler(event) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        }
        ;
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        }
        ;
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }
    get no_generik() { return this.FormInputData.get('no_generik'); }
    get nama_generik() { return this.FormInputData.get('nama_generik'); }
    get alias_generik() { return this.FormInputData.get('alias_generik'); }
}
SetupGenerikComponent.ɵfac = function SetupGenerikComponent_Factory(t) { return new (t || SetupGenerikComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_1__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_formularium_setup_generik_setup_generik_service__WEBPACK_IMPORTED_MODULE_2__.SetupGenerikService)); };
SetupGenerikComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SetupGenerikComponent, selectors: [["app-setup-generik"]], viewQuery: function SetupGenerikComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
    } }, inputs: { setInitForm: "setInitForm", setInitTabs: "setInitTabs" }, decls: 19, vars: 22, consts: [[3, "showHeader", "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-editSettings", "grid-lines", "grid-toolbar", "columns", "row-selected", "toolbar-click", "load-grid", "initialized", "command-click", "action-complete"], ["GridData", ""], [1, "p-2", 3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "mb-2"], ["formControlName", "no_generik", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState", "disabled"], ["formControlName", "nama_generik", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "alias_generik", 3, "label", "inputFieldState"]], template: function SetupGenerikComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "org-tabs", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onGetSelectedTabId", function SetupGenerikComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.handleSelectedTabId($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "org-tabs-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "Data Generik");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mol-grid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("row-selected", function SetupGenerikComponent_Template_mol_grid_row_selected_7_listener($event) { return ctx.handleSelectedRow($event); })("toolbar-click", function SetupGenerikComponent_Template_mol_grid_toolbar_click_7_listener($event) { return ctx.handleToolbarClick($event); })("load-grid", function SetupGenerikComponent_Template_mol_grid_load_grid_7_listener($event) { return ctx.handleLoadGrid($event); })("initialized", function SetupGenerikComponent_Template_mol_grid_initialized_7_listener($event) { return ctx.InitalizedGrid($event); })("command-click", function SetupGenerikComponent_Template_mol_grid_command_click_7_listener($event) { return ctx.handleClickCommandGrid($event); })("action-complete", function SetupGenerikComponent_Template_mol_grid_action_complete_7_listener($event) { return ctx.handleActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "org-tabs-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "org-tabs-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](11, "Input Generik");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "org-tabs-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("showHeader", ctx.setInitTabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("Id", "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("grid-height", 300)("grid-DataSource", ctx.GridDatasource)("grid-paging", false)("grid-editSettings", ctx.GridDataEditSettings)("grid-lines", "Both")("grid-toolbar", ctx.GridDataToolbar)("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("Id", "Input");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.FormInputData);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "No Generik")("IsFormControlInvalid", ctx.no_generik.invalid)("ValidatorsCaption", "No Generik Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState)("disabled", ctx.inputFieldState === "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Nama Generik")("IsFormControlInvalid", ctx.nama_generik.invalid)("ValidatorsCaption", "Nama Generik Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Alias")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_3__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsBodyComponentComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_7__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_8__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName], styles: [""] });


/***/ }),

/***/ 17332:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irda/transaksi-obat-formularium-irda.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatFormulariumIrdaComponent": () => (/* binding */ TransaksiObatFormulariumIrdaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class TransaksiObatFormulariumIrdaComponent {
    constructor() { }
    ngOnInit() {
    }
}
TransaksiObatFormulariumIrdaComponent.ɵfac = function TransaksiObatFormulariumIrdaComponent_Factory(t) { return new (t || TransaksiObatFormulariumIrdaComponent)(); };
TransaksiObatFormulariumIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransaksiObatFormulariumIrdaComponent, selectors: [["app-transaksi-obat-formularium-irda"]], decls: 2, vars: 0, template: function TransaksiObatFormulariumIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "transaksi-obat-formularium-irda works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [""] });


/***/ }),

/***/ 18727:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irja/transaksi-obat-formularium-irja.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatFormulariumIrjaComponent": () => (/* binding */ TransaksiObatFormulariumIrjaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 70114);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var _services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service */ 14307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service */ 20990);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);

















const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = function () { return { wrapMode: "Both" }; };
class TransaksiObatFormulariumIrjaComponent {
    constructor(resepDokterService, transaksiObatIrjaService, router, encryptionService, activatedRoute, utilityService, utilityHelperService, pendaftaranPasienBaruService, formBuilder) {
        this.resepDokterService = resepDokterService;
        this.transaksiObatIrjaService = transaksiObatIrjaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.utilityHelperService = utilityHelperService;
        this.pendaftaranPasienBaruService = pendaftaranPasienBaruService;
        this.formBuilder = formBuilder;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'simpan', Captions: 'Simpan Penjualan Resep', Icons1: 'fa-save fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.inputFieldState = 'detail';
        this.GridDataEditSettings = { allowEditing: true };
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_resep'] + ' ' + data1['nama_satuan'];
        };
        this.totalharga = (field, data1) => {
            return (data1['is_racikan']) ? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'];
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
        this.whereField = "msi.nama_item";
        this.select = "'nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'";
        this.id_formularium = 0;
        this.fields = { text: 'nama_obat', value: 'id_item' };
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRJA.GET_OBAT_FORMULARIUM,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.id_item_racikan = null;
        this.nama_item_racikan = null;
        this.id_item = null;
        this.nama_item = null;
        this.currentResep = null;
        this.currentRacikan = null;
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            outlet: ['', []],
            pasien: ['', []],
            poli: ['', []],
            dokter: ['', []],
            umur: ['', []],
            total_bayar_resep: [0, []]
        });
        this.itemsParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        this.id_item = args.itemData.id_item;
                        this.nama_item = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, this.currentResep.qty_resep);
                    }.bind(this)
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (this.currentResep.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', this.currentResep);
                        this.itemsObj.value = this.currentResep.id_item;
                    }, 10);
                }
            }
        };
        this.childGrid = {
            dataSource: this.dataSourceChild,
            // queryString: "resep_detail_id",
            // rowHeight: 30,
            // allowResizing: true,
            // allowTextWrap: true,
            // editSettings: { allowEditing: true},
            // textWrapSettings: { wrapMode: 'Both' },
            // columns: [
            //   { field: "nama_obat", headerText: "Nama Generik",allowEditing:false},
            //   { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams},
            //   { field: "qty_racikan", headerText: "Qty" ,allowEditing:false,width:50},
            //   { field: "harga_jual_apotek", headerText: "Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70},
            //   { field: "total_harga", headerText: "Total Harga", textAlign:"Right", format: "N2",allowEditing:false,width:70}
            // ],
            // rowSelected(args){
            //     console.log(args);
            // }
        };
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.resepDokterService.onGetById(id).subscribe((result) => {
            this.dataHeader = result.data;
            console.log('header', this.dataHeader);
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            this.formInput.setValue({
                outlet: result.data.nama_outlet,
                poli: result.data.nama_poli,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                umur: result.data.tgl_lahir,
                total_bayar_resep: 0
            });
            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(this.dataHeader.id_person, false)
                .subscribe((result) => {
                this.imageSrc = result.data;
            });
        });
    }
    mapingRacikan(details) {
        this.dataSourceChild = [];
        details.map((item) => {
            item.racikans.map((e) => {
                e.total_harga = e.qty_racikan * e.harga_jual_apotek;
                return e;
            });
            this.dataSourceChild.push(...item.racikans);
            item.total_harga = 0;
            return item;
        });
        let id_formularium = this.id_formularium;
        let id_item_racikan = this.id_item_racikan;
        let nama_item_racikan = this.nama_item_racikan;
        let currentRacikan = this.currentRacikan;
        this.itemsRacikanParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                console.log('formularium', id_formularium);
                this.itemsRacikanElem = document.createElement('input');
                return this.itemsRacikanElem;
            },
            read: () => {
                return this.itemsRacikanObj.text;
            },
            destroy: () => {
                this.itemsRacikanObj.destroy();
            },
            write: () => {
                this.itemsRacikanObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_12__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_11__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        id_item_racikan = args.itemData.id_item;
                        nama_item_racikan = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, currentRacikan.qty_racikan);
                    }.bind(this)
                });
                this.itemsRacikanObj.appendTo(this.itemsRacikanElem);
                if (currentRacikan.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', currentRacikan);
                        this.itemsRacikanObj.value = currentRacikan.id_item;
                    }, 10);
                }
            }
        };
        let dataSourceChild = this.dataSourceChild;
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            editSettings: { allowEditing: true },
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { field: "resep_detail_racikan_id", visible: false, headerText: "Racikan Id", allowEditing: false },
                { field: "nama_obat", headerText: "Nama Generik", allowEditing: false },
                { field: "id_item", visible: false, headerText: "Id Item", allowEditing: false },
                { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsRacikanParams },
                { field: "qty_racikan", headerText: "Qty", allowEditing: false, width: 50 },
                { field: "harga_jual_apotek", headerText: "Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 },
                { field: "total_harga", headerText: "Total Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 }
            ],
            rowSelected(args) {
                console.log(args.data.id_formularium);
                id_formularium = args.data.id_formularium;
                currentRacikan = args.data;
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                    }
                    if (args.action == 'edit') {
                        console.log('id_item_racikan = ', id_item_racikan);
                        args.data.id_item = id_item_racikan;
                        args.data.nama_item = nama_item_racikan;
                        let index = dataSourceChild.map((item) => { return item.resep_detail_racikan_id; }).indexOf(args.data.resep_detail_racikan_id);
                        dataSourceChild[index] = args.data;
                    }
                }
            }
        };
    }
    setFormGrif(selected, qty) {
        document.getElementsByName("harga_jual_apotek")[0].value = selected.harga_jual_apotek.toString();
        document.getElementsByName("total_harga")[0].value = (selected.harga_jual_apotek * qty).toString();
    }
    hanldeActionComplated(args) {
        if (args.requestType == 'save' && args.action == 'edit') {
            console.log(args);
            this.dataSource[args.rowIndex].id_item = this.id_item;
            this.dataSource[args.rowIndex].nama_item = this.nama_item;
            this.dataSource[args.rowIndex].harga_jual_apotek = args.data.harga_jual_apotek;
            this.dataSource[args.rowIndex].total_harga = args.data.total_harga;
            this.GridResepRacikan.refresh();
        }
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }
    handleSelected(args) {
        console.log(args);
        let tot = 0;
        this.GridResepRacikan.getSelectedRecords().map((item) => {
            let har = 0;
            if (item['is_racikan']) {
                item['racikans'].map((racikan) => {
                    har += this.dataSourceChild.find(o => o.resep_detail_racikan_id === racikan.resep_detail_racikan_id).total_harga;
                });
            }
            else {
                har = item['total_harga'];
            }
            tot += har;
        });
        this.total_bayar_resep.setValue(tot);
        this.id_formularium = (args.data.id_formularium) ? args.data.id_formularium : 0;
        this.currentResep = args.data;
        console.log('selected', this.GridResepRacikan.getSelectedRecords());
        console.log('data source', this.dataSource);
        console.log('data source grid', this.dataSourceChild);
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                break;
            case "simpan":
                let Data = this.dataHeader;
                console.log('datasource', this.dataSource);
                console.log('datasource_childgrid', this.dataSourceChild);
                Data.details = this.GridResepRacikan.getSelectedRecords();
                Data.details.map((e) => {
                    e.racikans = this.dataSourceChild.filter(o => o.resep_detail_id == e.resep_detail_id);
                    return e;
                });
                console.log(Data);
                this.transaksiObatIrjaService.InsertFormularium(Data).subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Data Berhasil Tersimpan', result.message)
                        .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                    });
                });
                break;
            default:
                break;
        }
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TransaksiObatFormulariumIrjaComponent.ɵfac = function TransaksiObatFormulariumIrjaComponent_Factory(t) { return new (t || TransaksiObatFormulariumIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_2__.ResepDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_3__.TransaksiObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_4__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_5__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_6__.UtilityHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_7__.PendaftaranPasienBaruService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder)); };
TransaksiObatFormulariumIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: TransaksiObatFormulariumIrjaComponent, selectors: [["app-transaksi-obat-formularium-irja"]], viewQuery: function TransaksiObatFormulariumIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
    } }, decls: 28, vars: 45, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "row", "mb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "img-thumbnail", 2, "width", "120px", "max-width", "120px", "height", "150px", "max-height", "150px", 3, "src"], ["formControlName", "outlet", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 20rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "editSettings", "rowDataBound", "dataBound", "rowSelected", "rowDeselected", "actionComplete"], ["GridResepRacikan", ""], [3, "width", "field", "visible", "type", "textAlign", "headerTextAlign"], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "nama_item", "headerText", "Obat", "editType", "dropdownedit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "edit"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "total_harga", "headerText", "Total", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function TransaksiObatFormulariumIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onClickButtonNav", function TransaksiObatFormulariumIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "ejs-grid", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("rowDataBound", function TransaksiObatFormulariumIrjaComponent_Template_ejs_grid_rowDataBound_15_listener($event) { return ctx.rowDataBound($event); })("dataBound", function TransaksiObatFormulariumIrjaComponent_Template_ejs_grid_dataBound_15_listener() { return ctx.onDataBound(); })("rowSelected", function TransaksiObatFormulariumIrjaComponent_Template_ejs_grid_rowSelected_15_listener($event) { return ctx.handleSelected($event); })("rowDeselected", function TransaksiObatFormulariumIrjaComponent_Template_ejs_grid_rowDeselected_15_listener($event) { return ctx.handleSelected($event); })("actionComplete", function TransaksiObatFormulariumIrjaComponent_Template_ejs_grid_actionComplete_15_listener($event) { return ctx.hanldeActionComplated($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "e-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "e-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "e-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "e-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "e-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "e-column", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](27, "mol-input-numeric", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", ctx.imageSrc ? ctx.imageSrc : "../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](44, _c4))("editSettings", ctx.GridDataEditSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("width", 50)("field", "Checkbox")("visible", true)("type", "checkbox")("textAlign", "Center")("headerTextAlign", "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("edit", ctx.itemsParams);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 120)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_9__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_10__.MolInputNumericComponent], styles: [""] });


/***/ }),

/***/ 65011:
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/transaksi-obat-formularium-irna.component.ts ***!
  \************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatFormulariumIrnaComponent": () => (/* binding */ TransaksiObatFormulariumIrnaComponent)
/* harmony export */ });
/* harmony import */ var src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/BILLING */ 35877);
/* harmony import */ var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/LookupGridRuangan.json */ 29816);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 72288);
/* harmony import */ var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/gridResep.config.json */ 7418);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_irna_resep_dokter_irna_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service */ 85191);
/* harmony import */ var _services_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.service */ 54906);
/* harmony import */ var src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service */ 30013);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component */ 15528);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);




















const _c0 = ["LookupKodeRuangan"];
const _c1 = ["GridDetailResep"];
const _c2 = ["GridPasien"];
function TransaksiObatFormulariumIrnaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mol-grid", 4, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("row-selected", function TransaksiObatFormulariumIrnaComponent_span_18_Template_mol_grid_row_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r5.handleSelectedRowResep($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-height", "calc(100vh - 20rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 5, ctx_r2.transaksiObatIrnaService.dataResep))("grid-paging", false)("grid-lines", "Both")("columns", ctx_r2.GridConfigResep.GridColumns);
} }
const _c3 = function () { return { wrapMode: "Both" }; };
function TransaksiObatFormulariumIrnaComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TransaksiObatFormulariumIrnaComponent_span_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r8.handelClickLihatresep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Lihat Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TransaksiObatFormulariumIrnaComponent_span_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r10.handleClickSimpan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Simpan Transaksi Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ejs-grid", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toolbarClick", function TransaksiObatFormulariumIrnaComponent_span_19_Template_ejs_grid_toolbarClick_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r11.handleToolbarClick($event); })("rowDataBound", function TransaksiObatFormulariumIrnaComponent_span_19_Template_ejs_grid_rowDataBound_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r12.rowDataBound($event); })("dataBound", function TransaksiObatFormulariumIrnaComponent_span_19_Template_ejs_grid_dataBound_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r13.onDataBound(); })("rowSelected", function TransaksiObatFormulariumIrnaComponent_span_19_Template_ejs_grid_rowSelected_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r14.handleSelected($event); })("actionComplete", function TransaksiObatFormulariumIrnaComponent_span_19_Template_ejs_grid_actionComplete_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r15.hanldeActionComplated($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "e-columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "e-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "e-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "e-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "e-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "e-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "mol-input-numeric", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx_r3.dataSource)("childGrid", ctx_r3.childGrid)("toolbar", ctx_r3.GridDataToolbar)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](25, _c3))("editSettings", ctx_r3.GridDataEditSettings);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx_r3.keterangan);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("edit", ctx_r3.itemsParams);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx_r3.inputFieldState);
} }
class TransaksiObatFormulariumIrnaComponent {
    constructor(formBuilder, resepDokterIrnaService, transaksiObatIrnaService, admisiPasienRawatInapService
    // public setupPoliService: SetupPoliService
    ) {
        this.formBuilder = formBuilder;
        this.resepDokterIrnaService = resepDokterIrnaService;
        this.transaksiObatIrnaService = transaksiObatIrnaService;
        this.admisiPasienRawatInapService = admisiPasienRawatInapService;
        this.urlRuangan = src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_0__.API_BILLING.SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;
        this.LookupGridRuangan = /*#__PURE__*/ (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.GridConfigResep = /*#__PURE__*/ (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
        this.DataSourcePasien = [];
        this.DataSourceResep = [];
        this.DataSourceDetailResep = [];
        this.DataSourceDetailResepRacikan = [];
        this.inputFieldState = 'detail';
        this.handleClickResep = false;
        this.currentResepId = null;
        this.currentRegisterId = 1;
        this.GridDataEditSettings = { allowEditing: true };
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_resep'] + ' ' + data1['nama_satuan'];
        };
        this.totalharga = (field, data1) => {
            return (data1['is_racikan']) ? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'];
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
        this.whereField = "msi.nama_item";
        this.select = "'nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'";
        this.id_formularium = 0;
        this.fields = { text: 'nama_obat', value: 'id_item' };
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_4__.PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRJA.GET_OBAT_FORMULARIUM,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.id_item_racikan = null;
        this.nama_item_racikan = null;
        this.id_item = null;
        this.nama_item = null;
        this.currentResep = null;
        this.currentRacikan = null;
        this.reloadGrid = new rxjs__WEBPACK_IMPORTED_MODULE_15__.BehaviorSubject(0);
        this.currentIndex = null;
    }
    ngOnInit() {
        this.GridDataToolbar = [
            { text: 'remove', tooltipText: 'remove', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'remove' },
        ];
        this.formInput = this.formBuilder.group({
            nama_pasien: ['', []],
            umur: ['', []],
            poli: ['', []],
            bed: ['', []],
            dokter: ['', []],
            nomor_rm: ['', []],
            nomor_registrasi: ['', []],
            total_bayar_resep: [0, []]
        });
        this.itemsParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.Query().from('Obat/' + this.id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        this.id_item = args.itemData.id_item;
                        this.nama_item = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, this.currentResep.qty_resep);
                    }.bind(this)
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (this.currentResep.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', this.currentResep);
                        this.itemsObj.value = this.currentResep.id_item;
                    }, 10);
                }
            }
        };
        this.childGrid = {
            dataSource: this.dataSourceChild,
        };
        this.set(1);
        this.reloadGrid.subscribe((res) => {
            this.hitungTotal();
        });
    }
    heandleSelectedRuangan(args) {
        console.log(args);
        this.admisiPasienRawatInapService.onGetPasienByPoli(args.id_poli).subscribe((result) => {
            this.DataSourcePasien = result.data;
            this.GridPasien.Grid.refresh();
        });
        this.handleClickResep = false;
    }
    set(id_register) {
        this.resepDokterIrnaService.onGetByIdRegisterToTrans(id_register).subscribe((result) => {
            this.transaksiObatIrnaService.setResep(result.data);
            console.log(result.data);
        });
    }
    handleSelectedRow(args) {
        console.log(args);
        this.currentRegisterId = args.data.id_register;
        this.formInput.setValue({
            nama_pasien: args.data.nama_pasien,
            umur: args.data.usia,
            poli: args.data.nama_poli,
            bed: args.data.bed_no + ' - ' + args.data.bed_no,
            dokter: args.data.nama_dokter,
            nomor_rm: args.data.no_rekam_medis,
            nomor_registrasi: args.data.no_register,
            total_bayar_resep: 0,
        });
        this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
            this.transaksiObatIrnaService.setResep(result.data);
        });
    }
    handleSelectedRowResep(args) {
        this.handleClickResep = true;
        this.onLoadDetailData(args.data.resep_id);
        this.currentResepId = args.data.resep_id;
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridDetailResep.detailRowModule.expandAll();
    }
    onLoadDetailData(id) {
        this.resepDokterIrnaService.onGetById(id).subscribe((result) => {
            this.dataSource = result.data.details;
            this.GridDetailResep.refresh();
            this.mapingRacikan(result.data.details);
            let tot = 0;
            this.DataSourceDetailResep.map((item) => {
                let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
                tot += har;
                this.total_bayar_resep.setValue(tot);
            });
        });
    }
    mapingRacikan(details) {
        this.dataSourceChild = [];
        details.map((item) => {
            item.racikans.map((e) => {
                e.total_harga = e.qty_racikan * e.harga_jual_apotek;
                return e;
            });
            this.dataSourceChild.push(...item.racikans);
            item.total_harga = 0;
            return item;
        });
        let id_formularium = this.id_formularium;
        let id_item_racikan = this.id_item_racikan;
        let nama_item_racikan = this.nama_item_racikan;
        let currentRacikan = this.currentRacikan;
        this.itemsRacikanParams = {
            create: () => {
                this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', '', true);
                console.log('formularium', id_formularium);
                this.itemsRacikanElem = document.createElement('input');
                return this.itemsRacikanElem;
            },
            read: () => {
                return this.itemsRacikanObj.text;
            },
            destroy: () => {
                this.itemsRacikanObj.destroy();
            },
            write: () => {
                this.itemsRacikanObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_14__.Query().from('Obat/' + id_formularium).select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        id_item_racikan = args.itemData.id_item;
                        nama_item_racikan = args.itemData.nama_obat;
                        this.setFormGrif(args.itemData, currentRacikan.qty_racikan);
                    }.bind(this)
                });
                this.itemsRacikanObj.appendTo(this.itemsRacikanElem);
                if (currentRacikan.id_item) {
                    setTimeout(() => {
                        console.log('set combobax', currentRacikan);
                        this.itemsRacikanObj.value = currentRacikan.id_item;
                    }, 10);
                }
            }
        };
        let dataSourceChild = this.dataSourceChild;
        let reloadGrid = this.reloadGrid;
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            editSettings: { allowEditing: true },
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { field: "resep_detail_racikan_id", visible: false, headerText: "Racikan Id", allowEditing: false },
                { field: "nama_obat", headerText: "Nama Generik", allowEditing: false },
                { field: "id_item", visible: false, headerText: "Id Item", allowEditing: false },
                { field: "nama_item", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsRacikanParams },
                { field: "qty_racikan", headerText: "Qty", allowEditing: true, width: 50 },
                { field: "harga_jual_apotek", headerText: "Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 },
                { field: "total_harga", headerText: "Total Harga", textAlign: "Right", format: "N2", allowEditing: false, width: 70 }
            ],
            rowSelected(args) {
                console.log(args.data.id_formularium);
                id_formularium = args.data.id_formularium;
                currentRacikan = args.data;
            },
            actionComplete(args) {
                reloadGrid.next(1);
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                    }
                    if (args.action == 'edit') {
                        console.log('id_item_racikan = ', id_item_racikan);
                        args.data.id_item = id_item_racikan;
                        args.data.nama_item = nama_item_racikan;
                        args.data.total_harga = args.data.qty_racikan * args.data.harga_jual_apotek;
                        let index = dataSourceChild.map((item) => { return item.resep_detail_racikan_id; }).indexOf(args.data.resep_detail_racikan_id);
                        dataSourceChild[index] = args.data;
                    }
                }
            }
        };
    }
    handleToolbarClick(args) {
        const item = args.item.id;
        console.log(item);
        switch (item) {
            case 'remove':
                this.dataSource.splice(this.currentIndex, 1);
                this.GridDetailResep.refresh();
                console.log('remove');
                break;
            default:
                break;
        }
    }
    setFormGrif(selected, qty) {
        document.getElementsByName("harga_jual_apotek")[0].value = selected.harga_jual_apotek.toString();
        document.getElementsByName("total_harga")[0].value = (selected.harga_jual_apotek * qty).toString();
        let qty_racikan = document.getElementsByName("qty_racikan")[0];
        if (qty_racikan) {
            qty_racikan.addEventListener('click', (event) => {
                qty_racikan.select();
            });
            qty_racikan.addEventListener('keyup', (event) => {
                let qty_racikan = parseInt(document.getElementsByName("qty_racikan")[0].value);
                let total_harga = qty_racikan * selected.harga_jual_apotek;
                document.getElementsByName("total_harga")[0].value = total_harga.toString();
            });
            this.setInputFilter(qty_racikan, function (value) {
                return /^\d*$/.test(value);
            });
        }
    }
    setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                }
                else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                    this.value = this.oldValue;
                    if (this.oldSelectionStart !== null &&
                        this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                }
                else {
                    this.value = "";
                }
            });
        });
    }
    handleSelected(args) {
        console.log(args);
        this.currentIndex = args.rowIndex;
        this.id_formularium = (args.data.id_formularium) ? args.data.id_formularium : 0;
        this.currentResep = args.data;
        console.log('data source', this.dataSource);
        console.log('data source grid', this.dataSourceChild);
        this.hitungTotal();
    }
    hitungTotal() {
        let tot = 0;
        this.dataSource.map((item) => {
            let har = 0;
            if (item['is_racikan']) {
                item['racikans'].map((racikan) => {
                    har += this.dataSourceChild.find(o => o.resep_detail_racikan_id === racikan.resep_detail_racikan_id).total_harga;
                });
            }
            else {
                har = item['total_harga'];
            }
            tot += har;
        });
        this.total_bayar_resep.setValue(tot);
    }
    hanldeActionComplated(args) {
        if (args.requestType == 'save' && args.action == 'edit') {
            console.log(args);
            this.dataSource[args.rowIndex].id_item = this.id_item;
            this.dataSource[args.rowIndex].nama_item = this.nama_item;
            this.dataSource[args.rowIndex].qty_resep = args.data.qty_resep;
            this.dataSource[args.rowIndex].harga_jual_apotek = args.data.harga_jual_apotek;
            this.dataSource[args.rowIndex].total_harga = args.data.qty_resep * args.data.harga_jual_apotek;
            this.GridDetailResep.refresh();
        }
    }
    handelClickLihatresep() {
        this.handleClickResep = false;
    }
    handleClickSimpan() {
        let Data = {
            resep_id: this.currentResepId,
            details: this.dataSource
        };
        Data.details.map((e) => {
            e.racikans = this.dataSourceChild.filter(o => o.resep_detail_id == e.resep_detail_id);
            return e;
        });
        this.transaksiObatIrnaService.InsertFormularium(Data).subscribe((result) => {
            this.handleClickResep = false;
            this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
                this.transaksiObatIrnaService.setResep(result.data);
            });
        });
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TransaksiObatFormulariumIrnaComponent.ɵfac = function TransaksiObatFormulariumIrnaComponent_Factory(t) { return new (t || TransaksiObatFormulariumIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_irna_resep_dokter_irna_service__WEBPACK_IMPORTED_MODULE_5__.ResepDokterIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_service__WEBPACK_IMPORTED_MODULE_6__.TransaksiObatIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_7__.AdmisiPasienRawatInapService)); };
TransaksiObatFormulariumIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: TransaksiObatFormulariumIrnaComponent, selectors: [["app-transaksi-obat-formularium-irna"]], viewQuery: function TransaksiObatFormulariumIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.LookupKodeRuangan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.GridDetailResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.GridPasien = _t.first);
    } }, decls: 20, vars: 27, consts: [[1, "row"], [1, "col-sm-4"], [3, "lookup-url", "idKode", "modal-title", "idTitle", "columns", "filter-lookup", "label", "onGetSelectedData"], ["LookupKodeRuangan", ""], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected"], ["GridPasien", ""], [1, "col-sm-8"], [3, "formGroup"], [1, "col-sm-6"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], ["formControlName", "bed", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "nomor_rm", 3, "label", "inputFieldState"], ["formControlName", "nomor_registrasi", 3, "label", "inputFieldState"], [4, "ngIf"], ["GridResep", ""], ["type", "button", 1, "app-btn-master", "me-5", "btn", "btn-sm", "btn-primary-outline", 3, "click"], [1, "fas", "fa-arrow-left"], ["type", "button", 1, "app-btn-master", "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-save"], ["height", "calc(100vh - 20rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "allowTextWrap", "textWrapSettings", "editSettings", "toolbarClick", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridDetailResep", ""], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "nama_item", "headerText", "Obat", "editType", "dropdownedit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "edit"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "total_harga", "headerText", "Total", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function TransaksiObatFormulariumIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-card-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "org-input-look-up-kode", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onGetSelectedData", function TransaksiObatFormulariumIrnaComponent_Template_org_input_look_up_kode_onGetSelectedData_3_listener($event) { return ctx.heandleSelectedRuangan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("row-selected", function TransaksiObatFormulariumIrnaComponent_Template_mol_grid_row_selected_5_listener($event) { return ctx.handleSelectedRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "mol-input-text", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "mol-input-text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "mol-input-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, TransaksiObatFormulariumIrnaComponent_span_18_Template, 4, 7, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, TransaksiObatFormulariumIrnaComponent_span_19_Template, 19, 26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("lookup-url", ctx.urlRuangan)("idKode", "kode_poli")("modal-title", "Data Ruangan")("idTitle", "nama_poli")("columns", ctx.LookupGridRuangan.columns)("filter-lookup", ctx.LookupGridRuangan.filter)("label", "Ruangan");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-height", "calc(100vh - 16rem)")("grid-DataSource", ctx.DataSourcePasien)("grid-paging", false)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Bed")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No Rm")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No Reg")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.handleClickResep);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.handleClickResep);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_9__.OrgInputLookUpKodeComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_19__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_12__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 49181:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/input-resep-irja/input-resep-irja.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_transaksi_billing_config_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputResepIrjaComponent": () => (/* binding */ InputResepIrjaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/lookupitem.json */ 10954);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 27917);
/* harmony import */ var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/GridResep.json */ 47394);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _json_transaksi_billing_config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json/transaksi-billing.config.json */ 55885);
/* harmony import */ var _api_BILLING__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../api/BILLING */ 35877);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var _services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var _services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var _services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var _services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var _services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 35908);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component */ 15528);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
































const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["GridResepRacikan"];
const _c3 = ["itemTemplate"];
const _c4 = ["modalTemplateResep"];
function InputResepIrjaComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Nama Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "ejs-dropdownlist", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("filtering", function InputResepIrjaComponent_div_24_Template_ejs_dropdownlist_filtering_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r12.onFiltering($event); })("change", function InputResepIrjaComponent_div_24_Template_ejs_dropdownlist_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r14.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](11, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r2.data)("fields", ctx_r2.fields)("placeholder", ctx_r2.text)("query", ctx_r2.query)("sortOrder", ctx_r2.sorting)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtextInterpolate1"](" ", ctx_r2.nama_satuan.value, " ");
} }
function InputResepIrjaComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_div_25_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r15.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_div_25_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r17.handelClickRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](9, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
function InputResepIrjaComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Kemasan Racikan");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "ejs-dropdownlist", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_div_26_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r19.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](9, 3, ctx_r4.setupMetodeRacikanService.dataSource))("fields", ctx_r4.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function InputResepIrjaComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](4, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "ejs-combobox", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_div_41_Template_ejs_combobox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r21.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r5.dataSourceSatuanAturanPakai)("fields", ctx_r5.DropdownsatuanPakaiFields);
} }
function InputResepIrjaComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_ng_template_86_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r23.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](4, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimapan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](15, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](17, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](19, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](21, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_ng_template_86_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r25.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](22, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](23, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_ng_template_86_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵnextContext"](); return ctx_r26.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](24, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
} }
class InputResepIrjaComponent {
    constructor(formBuilder, resepDokterService, setupLabelPemakaianObatService, setupTambahanAturanPakaiService, setupSatuanAturanPakaiService, setupMetodeRacikanService, setupOutletService, daftarPasienService, utilityService, navigationService, modalService, router, renderer, location) {
        this.formBuilder = formBuilder;
        this.resepDokterService = resepDokterService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.setupOutletService = setupOutletService;
        this.daftarPasienService = daftarPasienService;
        this.utilityService = utilityService;
        this.navigationService = navigationService;
        this.modalService = modalService;
        this.router = router;
        this.renderer = renderer;
        this.location = location;
        this.API_TRANS_BILLING = _api_BILLING__WEBPACK_IMPORTED_MODULE_6__.API_BILLING;
        this.Config = /*#__PURE__*/ (_json_transaksi_billing_config_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_json_transaksi_billing_config_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_json_transaksi_billing_config_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.UrlLookupDaftarPasien = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.ADMISI_PASIEN_IRJA;
        this.urlRacikan = '';
        this.urlTemplateResep = '';
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.DropdownLabelFields = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
        this.DropdownAturanFields = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };
        this.DropdownsatuanPakaiFields = { text: "satuan_aturan_pakai", value: "id_satuan_aturan_pakai" };
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.FormAddObatState = "input";
        // ** Satuan 
        this.SatuanObat = "-";
        this.DropdownObatFields = { text: 'nama_obat', value: 'id_item' };
        this.DropdownMetodeRacikanFields = { text: 'metode_racikan', value: 'id_metode_racikan' };
        this.NamaObatDatasource = [];
        // ** Waktu Pakai
        this.WaktuPakai = [];
        // ** Grid Daftar Obat Properties
        this.GridDaftarObatEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.GridDaftarObatDataSource = [];
        this.GridDaftarObatColumns = /*#__PURE__*/ (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_GridResep_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
        this.GridDetailResepRacikanDatasource = [];
        this.GridResepRacikanDatasource = [];
        this.dataSourceLabelPemakaian = [];
        this.dataSourceTambahanAturanPakai = [];
        this.dataSourceSatuanAturanPakai = [];
        this.counter = 0;
        this.counterRacikan = 0;
        this.dataScourceGridChild = [];
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_obat', value: 'id_item' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where('msi.nama_item', 'contains', '', true);
        this.text = "Select a Obat";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                //   let query: Query = new Query().from('Obat').select(['nama_obat', 'id_item','kandungan_obat','nama_satuan']).take(10);
                // change the type of filtering
                //   query = (e.text !== '') ? query.where('msi.nama_item', 'contains', e.text, true) : query;
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where('msi.nama_item', 'contains', e.text, true);
                e.updateData(this.data, query);
            }
        };
        //=====================
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where('msi.nama_item', 'contains', '', true);
        this.ButtonNav = [
            { Id: "Kembali", Icons1: "fa-chevron-left", Captions: "Kembali" },
            { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
            { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
            { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
        ];
        this.Data = [];
        this.newdetail = [];
        this.baru = 0;
        this.nama_resep = '';
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.currentTanggal = moment__WEBPACK_IMPORTED_MODULE_7___default()().format();
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [null, []],
            metode_racikan: ['', []],
            id_item: [null, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            qty_resep: ['', []],
            nama_satuan: ['-', []],
            label: ['', []],
            ket_label: ['', []],
            id_label_pemakaian_obat: [null, []],
            label_pemakaian_obat: ['', []],
            id_satuan_aturan_pakai: [null, []],
            satuan_aturan_pakai: [null, []],
            aturan: ['', []],
            ket_aturan: ['', []],
            id_tambahan_aturan_pakai: [null, []],
            label_tambahan_aturan_pakai_obat: ['', []]
        });
        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepDokterService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat')
                        .select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'])
                        .take(10).where('msi.nama_item', 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__.DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        }
                        else {
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where("msi.nama_item", 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        this.setFormGrif(args, currentQtyResep, currentIdItem, SelectedDataRacikanObat);
                        currentIdItem = args.itemData.id_item;
                        console.log(args.itemData.id_item);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    // this.itemsObj.dataSource = this.data;
                    // console.log('set value',SelectedDataRacikanObat);
                    // console.log('query',this.query);
                    setTimeout(() => {
                        this.itemsObj.value = SelectedDataRacikanObat.id_item;
                    }, 500);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        this.resepDokterService.dataSourceChildGrid.next(dataSourceChild);
        let nav = 'add';
        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "counter",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "counter", headerText: 'c', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Satuan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_item", headerText: 'id', width: 100, visible: false },
                { field: "komposisi", headerText: 'kps', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
                { field: "seper", headerText: '1/', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "kandungan", headerText: 'Kandungan', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                // console.log('row selected',SelectedDataRacikanObat)
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    args.data['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                    SelectedDataRacikanObat = null;
                }
                // if (args.requestType === 'beginEdit'){
                //     SelectedDataRacikanObat = args.rowData;
                // }
            },
            actionComplete(args) {
                if (args.requestType === 'save') {
                    if (args.action === 'add') {
                        args.data.id_item = currentIdItem;
                        dataSourceChild.push(args.data);
                    }
                    if (args.action === 'edit') {
                        args.data.id_item = currentIdItem;
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                }
                if (args.requestType === "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                }
            }
        };
        this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
            this.dataSourceLabelPemakaian = result.data;
        });
        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceTambahanAturanPakai = result.data;
        });
        this.setupSatuanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceSatuanAturanPakai = result.data;
        });
        this.setupMetodeRacikanService.setDataSource();
        // this.resepDokterService.setDataObat([]);
        this.setupOutletService.setDataSource();
        //   this.urlTemplateResep = this.urlTemplateResep+'/'+this.daftarPasienService.ActivePasien.value.id_dokter;
        //   this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/J';
    }
    onLoad(args) {
    }
    setFormGrif(args, currentQtyResep, id_item, SelectedDataRacikanObat) {
        // console.log('function setgrid',SelectedDataRacikanObat);
        if (SelectedDataRacikanObat) {
            document.getElementsByName("nama_satuan")[0].value = SelectedDataRacikanObat.nama_satuan;
            document.getElementsByName("komposisi")[0].value = SelectedDataRacikanObat.komposisi;
            document.getElementsByName("seper")[0].value = SelectedDataRacikanObat.seper;
            document.getElementsByName("kandungan")[0].value = SelectedDataRacikanObat.kandungan;
            document.getElementsByName("qty_racikan")[0].value = SelectedDataRacikanObat.qty_racikan;
        }
        else {
            document.getElementsByName("nama_satuan")[0].value = args.itemData.nama_satuan;
            document.getElementsByName("komposisi")[0].value = args.itemData.kandungan_obat;
            document.getElementsByName("seper")[0].value = '1';
            document.getElementsByName("kandungan")[0].value = args.itemData.kandungan_obat;
            document.getElementsByName("qty_racikan")[0].value = currentQtyResep.toString();
        }
        let seper = document.getElementsByName("seper")[0];
        if (seper) {
            seper.addEventListener('click', (event) => {
                seper.select();
            });
            seper.addEventListener('keyup', (event) => {
                let komposisi = parseInt(document.getElementsByName("komposisi")[0].value);
                let seper = parseInt(document.getElementsByName("seper")[0].value);
                let hasil = komposisi / seper;
                document.getElementsByName("kandungan")[0].value = hasil.toString();
                let butuh = currentQtyResep * hasil;
                let qty = butuh / komposisi;
                document.getElementsByName("qty_racikan")[0].value = qty.toString();
            });
            this.setInputFilter(seper, function (value) {
                return /^\d*$/.test(value);
            });
        }
        let kandungan = document.getElementsByName("kandungan")[0];
        if (kandungan) {
            kandungan.addEventListener('click', (event) => {
                kandungan.select();
            });
            kandungan.addEventListener('keyup', (event) => {
                let kandungan = parseInt(document.getElementsByName("kandungan")[0].value);
                let komposisi = parseInt(document.getElementsByName("komposisi")[0].value);
                let butuh = currentQtyResep * kandungan;
                console.log(butuh);
                let qty = butuh / komposisi;
                document.getElementsByName("qty_racikan")[0].value = qty.toString();
                document.getElementsByName("seper")[0].value = '1';
            });
            this.setInputFilter(kandungan, function (value) {
                return /^\d*$/.test(value);
            });
        }
        let qty_racikan = document.getElementsByName("qty_racikan")[0];
        if (qty_racikan) {
            qty_racikan.addEventListener('click', (event) => {
                qty_racikan.select();
            });
            this.setInputFilter(qty_racikan, function (value) {
                return /^\d*$/.test(value);
            });
        }
    }
    setInputFilter(textbox, inputFilter) {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                }
                else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                    this.value = this.oldValue;
                    if (this.oldSelectionStart !== null &&
                        this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                }
                else {
                    this.value = "";
                }
            });
        });
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }
    handleSelectedLookupPasien(args) {
        this.idDokter = args.id_dokter;
        this.idPasien = args.id_pasien;
        this.idRegister = args.id_register;
        this.idPerson = args.id_person;
        this.no_register = args.no_register;
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_TEMPLATE_RESEP + '/' + args.id_dokter;
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN + '/' + args.id_dokter + '/J';
    }
    handleChangeOutlet(args) {
        this.idOutlet = args.value;
    }
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.nama_satuan);
        this.nama_obat.setValue(args.itemData.nama_obat);
    }
    handleChangeLabel(args) {
        if (typeof args.value === 'number' && (args.value % 1) === 0) {
            this.label_pemakaian_obat.setValue('');
            this.id_label_pemakaian_obat.setValue(args.value);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        }
        else {
            this.label_pemakaian_obat.setValue(args.value);
            this.id_label_pemakaian_obat.setValue(1);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        }
    }
    handleChangeAturan(args) {
        if (typeof args.value === 'number' && (args.value % 1) === 0) {
            this.label_tambahan_aturan_pakai_obat.setValue('');
            this.id_tambahan_aturan_pakai.setValue(args.value);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        }
        else {
            this.label_tambahan_aturan_pakai_obat.setValue(args.value);
            this.id_tambahan_aturan_pakai.setValue(1);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        }
    }
    handleChangeSatuanAturan(args) {
        this.satuan_aturan_pakai.setValue(args.itemData.satuan_aturan_pakai);
    }
    handleChangeNamaRacikan() {
        this.set_racikan_id.setValue(null);
    }
    handelClickRacikan() {
        if (this.idRegister) {
            this.LookupRacikan.onOpenModal();
        }
        else {
            this.utilityService.onShowingCustomAlert('warning', 'Isi Data Pasien Terlebih Dahulu', '');
        }
    }
    handelClickTemplateResep() {
        if (this.idRegister) {
            this.LookupTemplateResep.onOpenModal();
        }
        else {
            this.utilityService.onShowingCustomAlert('warning', 'Isi Data Pasien Terlebih Dahulu', '');
        }
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
    }
    heandleSelectedRacikan(args) {
        this.counter++;
        args.counter = this.counter;
        args.is_racikan = true;
        args.is_racikan = true;
        args.no_urut = 0;
        args.id_item = null;
        args.nama_satuan = null;
        args.label = null;
        args.nama_racikan = args.nama_obat;
        args.label = args.ket_label;
        args.aturan = args.ket_aturan;
        this.resepDokterService.addDetail(args);
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counter = this.counter;
            element.counterRacikan = counterRacikan;
            detail.push(element);
        });
        console.log(detail);
        this.resepDokterService.dataSourceChildGrid.next(detail);
    }
    heandleSelectedTemplateResep(args) {
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            this.counter++;
            element.counter = this.counter;
            if (element.is_racikan) {
                element.nama_racikan = element.nama_obat;
            }
            else {
                element.nama_racikan = '';
            }
            if (element.id_label_pemakaian_obat == 1) {
                element.label = element.ket_label;
            }
            else {
                element.label = element.id_label_pemakaian_obat;
            }
            if (element.id_tambahan_aturan_pakai == 1) {
                element.aturan = element.ket_aturan;
            }
            else {
                element.aturan = element.id_tambahan_aturan_pakai;
            }
            this.resepDokterService.addDetail(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                detail.push(racikan);
            });
        });
        this.resepDokterService.dataSourceChildGrid.next(detail);
        this.onSetTemplateResep();
    }
    handleAddObat(FormAddObat) {
        this.counter++;
        FormAddObat.counter = this.counter;
        if (FormAddObat.is_racikan) {
            FormAddObat.nama_obat = FormAddObat.nama_racikan;
        }
        else {
            FormAddObat.id_metode_racikan = null;
            FormAddObat.metode_racikan = null;
        }
        this.resepDokterService.addDetail(FormAddObat);
        this.onResetFormObat();
    }
    onResetFormObat() {
        this.FormAddObat.reset();
        this.is_racikan.setValue(false);
    }
    // ** Dropdown Waktu Pakai onchange method
    onChangeWaktuPakai(waktu) {
        // ** Cek element yg di checklist
        const element = document.getElementById('waktuPakai' + waktu);
        // ** Get index number di variable WaktuPakai
        const index = this.WaktuPakai.indexOf(waktu);
        // ** Jika element di checklist maka....
        if (element.checked) {
            this.WaktuPakai.push(waktu);
        }
        else {
            this.WaktuPakai.splice(index, 1);
        }
        ;
        // ** Isikan value waktu_pakai di FormAddObat
        // this.waktu_pakai.setValue(this.WaktuPakai.join());
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        this.resepDokterService.editDetail(this.currentIndex, FormAddObat);
        this.onResetFormObat();
        this.GridResepRacikan.refresh();
        this.FormAddObatState = "input";
    }
    // ** Reset Form Add Obat 
    onResetFormDataObat() {
        this.FormAddObat.reset();
        this.SatuanObat = "";
    }
    // ** Grid Daftar Obat method
    onInitalizedGrid(component) {
        this.gridDaftarObat = component;
    }
    // ** Grid Daftar Obat method
    onToolbarClick(args) {
        switch (args.item.id) {
            case "edit":
                // this.FormAddObat.setValue(this.SelectedDataObat);
                this.onEditData();
                this.FormAddObatState = "edit";
                break;
            case "delete":
                this.resepDokterService.removeDataDetail(this.currentIndex);
                this.GridResepRacikan.refresh();
                break;
            default:
                break;
        }
        ;
    }
    onEditData() {
        let data = this.SelectedDataObat;
        this.FormAddObat.setValue({
            counter: data.counter,
            no_urut: data.no_urut,
            is_racikan: data.is_racikan,
            set_racikan_id: data.set_racikan_id,
            id_metode_racikan: data.id_metode_racikan,
            metode_racikan: data.metode_racikan,
            id_item: data.id_item,
            nama_obat: data.nama_obat,
            qty_resep: data.qty_resep,
            nama_satuan: data.nama_satuan,
            label: data.label,
            ket_label: data.ket_label,
            id_label_pemakaian_obat: data.id_label_pemakaian_obat,
            label_pemakaian_obat: data.label_pemakaian_obat,
            aturan: data.aturan,
            ket_aturan: data.ket_aturan,
            id_tambahan_aturan_pakai: data.id_tambahan_aturan_pakai,
            label_tambahan_aturan_pakai_obat: data.label_tambahan_aturan_pakai_obat,
            nama_racikan: data.nama_racikan,
            id_satuan_aturan_pakai: data.id_satuan_aturan_pakai,
            satuan_aturan_pakai: data.satuan_aturan_pakai,
        });
    }
    onActionComplete(args) {
        //   let dataSourceParent: any = this.GridResepRacikan.dataSource;
        //   this.resepDokterService.dataSourceParentGrid.next(dataSourceParent);
        //   console.log("Parent", this.GridResepRacikan.dataSource);
        //   console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    //================= SIMPAN PARENT ================
    onClickButtonNav(args) {
        switch (args) {
            case "Template":
                this.handelClickTemplateResep();
            case "Reset":
                this.resepDokterService.reset();
                this.isGetFromTemplate = false;
                break;
            case "Simpan":
                this.onGetGridResepDatasource();
                break;
            case "Kembali":
                this.location.back();
                break;
            default:
                break;
        }
    }
    onSetTemplateResep() {
        this.isGetFromTemplate = true;
    }
    onGetGridResepDatasource() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_25__.__awaiter)(this, void 0, void 0, function* () {
            this.dataHeader = {
                id_dokter: this.idDokter,
                id_register: this.idRegister,
                id_outlet: this.idOutlet,
                id_person: this.idPerson,
                jenis_rawat: 'J',
                nama_template: '',
                tanggal_resep: this.currentTanggal
            };
            let detail = yield this.resepDokterService.dataDetail;
            this.newdetail = detail.filter((item) => {
                return item.is_racikan && !item.set_racikan_id;
            });
            this.baru = 0;
            if (!this.isGetFromTemplate) {
                this.modalRef = this.modalService.show(this.modalTemplateResep, Object.assign({}, { class: 'modal-lg' }));
            }
            else {
                this.methodConfirmSetRacikan(0);
            }
        });
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.dataHeader.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                title: 'Apakah Anda Ingin Menyimapan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Saya Yakin',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1;
                }
                else {
                    this.baru = 0;
                }
                this.methodInsert(this.dataHeader, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.dataHeader, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepDokterService.Insert(Data, is_simpan_template, is_simpan_racikan)
            .subscribe((result) => {
            if (result.responseResult) {
                this.resepDokterService.generadeNoAntrian(this.no_register).subscribe((result) => {
                    if (result.responseResult) {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                            .then(() => {
                            this.resepDokterService.reset();
                            this.isGetFromTemplate = false;
                            this.location.back();
                        });
                    }
                });
            }
        });
        // this.location.back();
    }
    //================================================
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_item() { return this.FormAddObat.get('id_item'); }
    ;
    get nama_obat() { return this.FormAddObat.get('nama_obat'); }
    ;
    get qty_resep() { return this.FormAddObat.get('qty_resep'); }
    get nama_satuan() { return this.FormAddObat.get('nama_satuan'); }
    get label() { return this.FormAddObat.get('label'); }
    get ket_label() { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat() { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat() { return this.FormAddObat.get('label_pemakaian_obat'); }
    get aturan() { return this.FormAddObat.get('aturan'); }
    get ket_aturan() { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai() { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai_obat() { return this.FormAddObat.get('label_tambahan_aturan_pakai_obat'); }
    get nama_racikan() { return this.FormAddObat.get('nama_racikan'); }
    get satuan_aturan_pakai() { return this.FormAddObat.get('satuan_aturan_pakai'); }
    ;
    ngOnDestroy() {
        this.resepDokterService.reset();
    }
}
InputResepIrjaComponent.ɵfac = function InputResepIrjaComponent_Factory(t) { return new (t || InputResepIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_8__.ResepDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_9__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_12__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_13__.SetupOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_14__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_15__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_16__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_17__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_22__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_28__.Location)); };
InputResepIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineComponent"]({ type: InputResepIrjaComponent, selectors: [["app-input-resep-irja"]], viewQuery: function InputResepIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
    } }, decls: 88, vars: 83, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "card"], [1, "card-body", "p-2"], [1, "row"], [1, "col-sm-5"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "col-sm-7"], [3, "modal-title", "idKode", "idTitle", "label", "lookup-url", "filter-lookup", "columns", "onGetSelectedData"], ["LookupPasien", ""], [1, "row", "pt-2", "mb-2"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-4 col-md-4 col-sm-4 col-xs-4", 4, "ngIf"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3", 4, "ngIf"], ["class", "col-lg-2 col-md-2 col-sm-2 col-xs-2", 4, "ngIf"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "pe-1"], ["for", "NumericQty", 1, "form-label"], ["id", "NumericQty", "formControlName", "qty_resep", 3, "format", "showSpinButton", "showClearButton", "ste"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "pe-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "col-lg-1 col-md-1 col-sm-1 col-xs-1 pe-1", 4, "ngIf"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "ps-4"], [1, "row", "align-content-center", "h-100", "mb-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-0", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "queryString", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "card-body", "p-0"], ["height", "calc(100vh - 27rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "allowResizing", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Satuan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "width"], ["field", "metode_racikan", "headerText", "Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "width"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "ket_label", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10", "pe-0"], ["id", "DropdownObat", "formControlName", "id_item", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "px-0"], ["id", "basic-addon1", 1, "input-group-text", "bg-primary", "text-white"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mb-2", "row"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function InputResepIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onClickButtonNav", function InputResepIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](8, "atm-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](10, "ejs-dropdownlist", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_Template_ejs_dropdownlist_change_10_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](14, "org-input-look-up-kode", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onGetSelectedData", function InputResepIrjaComponent_Template_org_input_look_up_kode_onGetSelectedData_14_listener($event) { return ctx.handleSelectedLookupPasien($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](20, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](21, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](23, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](24, InputResepIrjaComponent_div_24_Template, 13, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](25, InputResepIrjaComponent_div_25_Template, 10, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](26, InputResepIrjaComponent_div_26_Template, 10, 5, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](27, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](30, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](31, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](33, "ejs-numerictextbox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](38, "Label Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](40, "ejs-combobox", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_Template_ejs_combobox_change_40_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](41, InputResepIrjaComponent_div_41_Template, 7, 3, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](42, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](43, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](45, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](46, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](47, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](48, "ejs-combobox", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("change", function InputResepIrjaComponent_Template_ejs_combobox_change_48_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](51, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](52, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_Template_button_click_52_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](53, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](54, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](55, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](57, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("click", function InputResepIrjaComponent_Template_button_click_57_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](58, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](59, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtext"](60, "\u00A0Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](61, "org-look-up-hirarki", 39, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onGetSelectedData", function InputResepIrjaComponent_Template_org_look_up_hirarki_onGetSelectedData_61_listener($event) { return ctx.heandleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](63, "org-look-up-hirarki", 41, 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("onGetSelectedData", function InputResepIrjaComponent_Template_org_look_up_hirarki_onGetSelectedData_63_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](65, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](66, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](68, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](69, "ejs-grid", 45, 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵlistener"]("toolbarClick", function InputResepIrjaComponent_Template_ejs_grid_toolbarClick_69_listener($event) { return ctx.onToolbarClick($event); })("load", function InputResepIrjaComponent_Template_ejs_grid_load_69_listener($event) { return ctx.onLoad($event); })("rowDataBound", function InputResepIrjaComponent_Template_ejs_grid_rowDataBound_69_listener($event) { return ctx.rowDataBound($event); })("dataBound", function InputResepIrjaComponent_Template_ejs_grid_dataBound_69_listener() { return ctx.onDataBound(); })("rowSelected", function InputResepIrjaComponent_Template_ejs_grid_rowSelected_69_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function InputResepIrjaComponent_Template_ejs_grid_actionComplete_69_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementStart"](72, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](73, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](74, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](75, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](76, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](77, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](78, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](79, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](80, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](81, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](82, "e-column", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](83, "e-column", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](84, "e-column", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelement"](85, "e-column", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplate"](86, InputResepIrjaComponent_ng_template_86_Template, 25, 0, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](12, 79, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("modal-title", "Daftar Pasien")("idKode", "no_rekam_medis")("idTitle", "nama_pasien")("label", "Pasien")("lookup-url", ctx.UrlLookupDaftarPasien)("filter-lookup", ctx.Config.LookupPasien.filter)("columns", ctx.Config.LookupPasien.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵclassMap"](ctx.width >= 1023 && ctx.width <= 1200 ? "pt-1" : "pt-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("queryString", "set_racikan_id")("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵpipeBind1"](71, 81, ctx.resepDokterService.dataDetail$))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar)("allowResizing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_19__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_29__.DropDownListComponent, _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_20__.OrgInputLookUpKodeComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_30__.NumericTextBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_29__.ComboBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_21__.OrgLookUpHirarkiComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_31__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    padding-left: 12px;\r\n    width: 100%;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border: 0;\r\n  }\r\n  \r\n  #DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  #NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n  }\r\n  \r\n  div.head[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n  }\r\n  \r\n  .is-racikan[_ngcontent-%COMP%] {\r\n    background-color: #f3e6f3;\r\n  }\r\n  \r\n  .e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\n    min-height: 14px !important;\r\n  }\r\n  \r\n  th.e-headercell[_ngcontent-%COMP%] {\r\n    background-color: rgba(0, 0, 0, 0.03);\r\n    color: black;\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    padding: 5px !important;\r\n    height: 30px !important;\r\n  }\r\n  \r\n  span.e-headertext[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n  }\r\n  \r\n  td.e-rowcell[_ngcontent-%COMP%] {\r\n    padding: 5px !important;\r\n  }\r\n  \r\n  .e-grid[_ngcontent-%COMP%]   .e-detailheadercell[_ngcontent-%COMP%], td.e-detailcell.e-lastrowcell[_ngcontent-%COMP%] {\r\n    background-color: var(--biru-muda) !important;\r\n  }\r\n  \r\n  div.e-gridcontent[_ngcontent-%COMP%]   tr.e-detailrow[_ngcontent-%COMP%]   td.e-detailcell[_ngcontent-%COMP%]   div.e-headercontent[_ngcontent-%COMP%]   th.e-headercell[_ngcontent-%COMP%] {\r\n    background-color: var(--biru-muda) !important;\r\n  }"] });


/***/ }),

/***/ 15169:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatIrdaComponent": () => (/* binding */ TransaksiObatIrdaComponent)
/* harmony export */ });
/* harmony import */ var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/LookupGridRuangan.json */ 9523);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 75149);
/* harmony import */ var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/gridResep.config.json */ 12074);
/* harmony import */ var src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/BILLING */ 35877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_irda_resep_dokter_irda_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter-irda/resep-dokter-irda.service */ 75631);
/* harmony import */ var _services_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.service */ 15553);
/* harmony import */ var src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service */ 30013);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);
















const _c0 = ["LookupKodeRuangan"];
const _c1 = ["GridDetailResep"];
const _c2 = ["GridPasien"];
function TransaksiObatIrdaComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mol-grid", 2, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("row-selected", function TransaksiObatIrdaComponent_span_15_Template_mol_grid_row_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r4.handleSelectedRowResep($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("grid-height", "calc(100vh - 20rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 5, ctx_r1.transaksiObatIrdaService.dataResep))("grid-paging", false)("grid-lines", "Both")("columns", ctx_r1.GridConfigResep.GridColumns);
} }
const _c3 = function () { return { wrapMode: "Both" }; };
function TransaksiObatIrdaComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TransaksiObatIrdaComponent_span_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.handelClickLihatresep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Daftar Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function TransaksiObatIrdaComponent_span_16_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r9.handleClickSimpan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Simpan Transaksi Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "ejs-grid", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("rowDataBound", function TransaksiObatIrdaComponent_span_16_Template_ejs_grid_rowDataBound_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.rowDataBound($event); })("dataBound", function TransaksiObatIrdaComponent_span_16_Template_ejs_grid_dataBound_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r11.onDataBound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "e-columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "e-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "e-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "e-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "e-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "mol-input-numeric", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx_r2.DataSourceDetailResep)("childGrid", ctx_r2.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx_r2.keterangan);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx_r2.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx_r2.hargajual);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx_r2.inputFieldState);
} }
class TransaksiObatIrdaComponent {
    constructor(formBuilder, resepDokterIrdaService, transaksiObatIrdaService, admisiPasienRawatInapService, utilityService) {
        this.formBuilder = formBuilder;
        this.resepDokterIrdaService = resepDokterIrdaService;
        this.transaksiObatIrdaService = transaksiObatIrdaService;
        this.admisiPasienRawatInapService = admisiPasienRawatInapService;
        this.utilityService = utilityService;
        this.urlRuangan = src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_3__.API_BILLING.SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;
        this.LookupGridRuangan = /*#__PURE__*/ (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.GridConfigResep = /*#__PURE__*/ (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.DataSourcePasien = [];
        this.DataSourceResep = [];
        this.DataSourceDetailResep = [];
        this.DataSourceDetailResepRacikan = [];
        this.inputFieldState = 'detail';
        this.handleClickResep = false;
        this.currentResepId = null;
        this.currentRegisterId = 1;
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' + data1['nama_satuan'];
        };
        this.hargajual = (field, data1) => {
            return (!data1['is_racikan']) ? data1['harga_jual_apotek'] * data1['qty_harian'] : data1['harga_jual_apotek'];
        };
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            nama_pasien: ['', []],
            umur: ['', []],
            bed: ['', []],
            dokter: ['', []],
            nomor_rm: ['', []],
            nomor_registrasi: ['', []],
            total_bayar_resep: [0, []]
        });
        this.childGrid = {
            dataSource: this.DataSourceDetailResepRacikan,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { "field": "nama_obat", "headerText": "Nama Obat" },
                { "field": "qty_racikan", "headerText": "Qty", "width": 50 },
                { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign": "Right", "format": "N2", "width": 70 },
                { "field": "total_harga", "headerText": "Total Harga", "textAlign": "Right", "format": "N2", "width": 70 }
            ]
        };
        this.set(1);
        this.refreshGridPasien();
    }
    refreshGridPasien() {
        this.transaksiObatIrdaService.onGetPasienIrda([]).subscribe((result) => {
            this.DataSourcePasien = result.data;
            this.GridPasien.Grid.refresh();
        });
    }
    set(id_register) {
        this.resepDokterIrdaService.onGetByIdRegisterToTrans(id_register).subscribe((result) => {
            this.transaksiObatIrdaService.setResep(result.data);
            console.log(result.data);
        });
    }
    handleSelectedRow(args) {
        console.log(args);
        this.currentRegisterId = args.data.id_register;
        this.formInput.setValue({
            nama_pasien: args.data.nama_pasien,
            umur: args.data.umur,
            bed: '',
            dokter: args.data.nama_dokter,
            nomor_rm: args.data.no_rekam_medis,
            nomor_registrasi: args.data.no_register,
            total_bayar_resep: 0,
        });
        this.resepDokterIrdaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
            this.transaksiObatIrdaService.setResep(result.data);
        });
        this.handleClickResep = false;
    }
    handleSelectedRowResep(args) {
        this.handleClickResep = true;
        this.onLoadDetailData(args.data.resep_id);
        this.currentResepId = args.data.resep_id;
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridDetailResep.detailRowModule.expandAll();
    }
    onLoadDetailData(id) {
        this.resepDokterIrdaService.onGetById(id).subscribe((result) => {
            this.DataSourceDetailResep = result.data.details;
            this.GridDetailResep.refresh();
            this.mapingRacikan(result.data.details);
            let tot = 0;
            this.DataSourceDetailResep.map((item) => {
                console.log();
                tot += item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_harian'] * item['harga_jual_apotek'];
                this.total_bayar_resep.setValue(tot);
            });
        });
    }
    mapingRacikan(details) {
        this.DataSourceDetailResepRacikan = [];
        details.map((item) => {
            item.racikans.map((e) => {
                return e.total_harga = e.qty_racikan * e.harga_jual_apotek;
            });
            this.DataSourceDetailResepRacikan.push(...item.racikans);
        });
        this.childGrid = {
            dataSource: this.DataSourceDetailResepRacikan,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { "field": "nama_obat", "headerText": "Nama Obat" },
                { "field": "qty_racikan", "headerText": "Qty", "width": 50 },
                { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign": "Right", "format": "N2", "width": 70 },
                { "field": "total_harga", "headerText": "Total Harga", "textAlign": "Right", "format": "N2", "width": 70 }
            ]
        };
    }
    handelClickLihatresep() {
        this.handleClickResep = false;
    }
    handleClickSimpan() {
        // this.transaksiObatIrdaService.Insert(this.currentResepId).subscribe((result) => {
        this.handleClickResep = false;
        this.resepDokterIrdaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.transaksiObatIrdaService.setResep(result.data);
                this.refreshGridPasien();
            });
        });
        // })
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TransaksiObatIrdaComponent.ɵfac = function TransaksiObatIrdaComponent_Factory(t) { return new (t || TransaksiObatIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_irda_resep_dokter_irda_service__WEBPACK_IMPORTED_MODULE_4__.ResepDokterIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_service__WEBPACK_IMPORTED_MODULE_5__.TransaksiObatIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_6__.AdmisiPasienRawatInapService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__.UtilityService)); };
TransaksiObatIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: TransaksiObatIrdaComponent, selectors: [["app-transaksi-obat-irda"]], viewQuery: function TransaksiObatIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.LookupKodeRuangan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.GridDetailResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.GridPasien = _t.first);
    } }, decls: 17, vars: 18, consts: [[1, "row"], [1, "col-sm-4"], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected"], ["GridPasien", ""], [1, "col-sm-8"], [3, "formGroup"], [1, "col-sm-6"], ["formControlName", "nomor_rm", 3, "label", "inputFieldState"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "nomor_registrasi", 3, "label", "inputFieldState"], [4, "ngIf"], ["GridResep", ""], ["type", "button", 1, "app-btn-master", "me-5", "btn", "btn-sm", "btn-primary-outline", 3, "click"], [1, "fas", "fa-arrow-left"], ["type", "button", 1, "app-btn-master", "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-save"], ["height", "calc(100vh - 24rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridDetailResep", ""], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "harga_jual_apotek", "headerText", "Total Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width", "valueAccessor"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function TransaksiObatIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "org-card-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mol-grid", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("row-selected", function TransaksiObatIrdaComponent_Template_mol_grid_row_selected_3_listener($event) { return ctx.handleSelectedRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, TransaksiObatIrdaComponent_span_15_Template, 4, 7, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, TransaksiObatIrdaComponent_span_16_Template, 18, 23, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("grid-height", "calc(100vh - 13rem)")("grid-DataSource", ctx.DataSourcePasien)("grid-paging", false)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "No Rm")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("label", "No Reg")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.handleClickResep);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.handleClickResep);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_10__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_15__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_11__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n    height: 32px;\r\n    padding-left: 12px;\r\n    width: 100%;\r\n    border-top-left-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n    border: 0;\r\n  }\r\n  \r\n  #DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  \r\n  #NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-right: 5px;\r\n  }\r\n  \r\n  div.head[_ngcontent-%COMP%] {\r\n    font-size: 13px !important;\r\n    font-weight: 500 !important;\r\n  }\r\n  \r\n  .is-racikan[_ngcontent-%COMP%]{\r\n    background-color: #f3e6f3;\r\n  }\r\n  \r\n  .form_paragraf[_ngcontent-%COMP%]{\r\n    display: inline-block!important;\r\n  }\r\n  \r\n  .form-label[_ngcontent-%COMP%] {\r\n  margin-bottom: 0px;\r\n}\r\n  \r\n  #basic-addon1[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  padding-left: 12px;\r\n  width: 100%;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border: 0;\r\n}\r\n  \r\n  .e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\n  min-height: 14px !important;\r\n}\r\n  \r\n  th.e-headercell[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n  color: black;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  padding: 5px !important;\r\n  height: 30px !important;\r\n}\r\n  \r\n  span.e-headertext[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n}\r\n  \r\n  td.e-rowcell[_ngcontent-%COMP%] {\r\n  padding: 5px !important;\r\n}\r\n  \r\n  .e-grid[_ngcontent-%COMP%]   .e-detailheadercell[_ngcontent-%COMP%], td.e-detailcell.e-lastrowcell[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-muda) !important;\r\n}\r\n  \r\n  div.e-gridcontent[_ngcontent-%COMP%]   tr.e-detailrow[_ngcontent-%COMP%]   td.e-detailcell[_ngcontent-%COMP%]   div.e-headercontent[_ngcontent-%COMP%]   th.e-headercell[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-muda) !important;\r\n}"] });


/***/ }),

/***/ 61391:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatIrjaComponent": () => (/* binding */ TransaksiObatIrjaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 36914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var _services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service */ 14307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service */ 20990);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);














const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = function () { return { wrapMode: "Both" }; };
class TransaksiObatIrjaComponent {
    constructor(resepDokterService, transaksiObatIrjaService, router, encryptionService, activatedRoute, utilityService, utilityHelperService, pendaftaranPasienBaruService, formBuilder) {
        this.resepDokterService = resepDokterService;
        this.transaksiObatIrjaService = transaksiObatIrjaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.utilityHelperService = utilityHelperService;
        this.pendaftaranPasienBaruService = pendaftaranPasienBaruService;
        this.formBuilder = formBuilder;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'simpan', Captions: 'Simpan Penjualan Resep', Icons1: 'fa-save fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.inputFieldState = 'detail';
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_resep'] + ' ' + data1['nama_satuan'];
        };
        this.totalharga = (field, data1) => {
            return (data1['is_racikan']) ? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'];
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            outlet: ['', []],
            pasien: ['', []],
            poli: ['', []],
            dokter: ['', []],
            umur: ['', []],
            total_bayar_resep: [0, []]
        });
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { "field": "nama_obat", "headerText": "Nama Obat" },
                { "field": "qty_racikan", "headerText": "Qty", "width": 50 },
                { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign": "Right", "format": "N2", "width": 70 },
                { "field": "total_harga", "headerText": "Total Harga", "textAlign": "Right", "format": "N2", "width": 70 }
            ]
        };
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.resepDokterService.onGetById(id).subscribe((result) => {
            this.dataHeader = result.data;
            console.log('header', this.dataHeader);
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            this.formInput.setValue({
                outlet: result.data.nama_outlet,
                poli: result.data.nama_poli,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                umur: result.data.tgl_lahir,
                total_bayar_resep: 0
            });
            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(this.dataHeader.id_person, false)
                .subscribe((result) => {
                this.imageSrc = result.data;
            });
        });
    }
    mapingRacikan(details) {
        this.dataSourceChild = [];
        details.map((item) => {
            item.racikans.map((e) => {
                return e.total_harga = e.qty_racikan * e.harga_jual_apotek;
            });
            this.dataSourceChild.push(...item.racikans);
        });
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: [
                { "field": "nama_obat", "headerText": "Nama Obat" },
                { "field": "qty_racikan", "headerText": "Qty", "width": 50 },
                { "field": "harga_jual_apotek", "headerText": "Harga", "textAlign": "Right", "format": "N2", "width": 70 },
                { "field": "total_harga", "headerText": "Total Harga", "textAlign": "Right", "format": "N2", "width": 70 }
            ]
        };
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }
    handleSelected(args) {
        // this.total_bayar_resep.setValue(0);
        let tot = 0;
        this.GridResepRacikan.getSelectedRecords().map((item) => {
            let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
            tot += har;
            this.total_bayar_resep.setValue(tot);
        });
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                break;
            case "simpan":
                let Data = this.dataHeader;
                Data.details = this.GridResepRacikan.getSelectedRecords();
                this.transaksiObatIrjaService.Insert(Data).subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Data Berhasil Tersimpan', result.message)
                        .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                    });
                });
                break;
            default:
                break;
        }
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TransaksiObatIrjaComponent.ɵfac = function TransaksiObatIrjaComponent_Factory(t) { return new (t || TransaksiObatIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_1__.ResepDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__.TransaksiObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__.UtilityHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRJA_pendaftaran_pasien_baru_pendaftaran_pasien_baru_service__WEBPACK_IMPORTED_MODULE_6__.PendaftaranPasienBaruService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder)); };
TransaksiObatIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: TransaksiObatIrjaComponent, selectors: [["app-transaksi-obat-irja"]], viewQuery: function TransaksiObatIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
    } }, decls: 27, vars: 42, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "row", "mb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "img-thumbnail", 2, "width", "120px", "max-width", "120px", "height", "150px", "max-height", "150px", 3, "src"], ["formControlName", "outlet", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 20rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound", "rowSelected", "rowDeselected"], ["GridResepRacikan", ""], [3, "width", "field", "visible", "type", "textAlign", "headerTextAlign"], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "harga_jual_apotek", "headerText", "Total", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width", "valueAccessor"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function TransaksiObatIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onClickButtonNav", function TransaksiObatIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](10, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ejs-grid", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("rowDataBound", function TransaksiObatIrjaComponent_Template_ejs_grid_rowDataBound_15_listener($event) { return ctx.rowDataBound($event); })("dataBound", function TransaksiObatIrjaComponent_Template_ejs_grid_dataBound_15_listener() { return ctx.onDataBound(); })("rowSelected", function TransaksiObatIrjaComponent_Template_ejs_grid_rowSelected_15_listener($event) { return ctx.handleSelected($event); })("rowDeselected", function TransaksiObatIrjaComponent_Template_ejs_grid_rowDeselected_15_listener($event) { return ctx.handleSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](18, "e-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](19, "e-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "e-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "e-column", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](22, "e-column", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](26, "mol-input-numeric", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("src", ctx.imageSrc ? ctx.imageSrc : "../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Outlet")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](41, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 50)("field", "Checkbox")("visible", true)("type", "checkbox")("textAlign", "Center")("headerTextAlign", "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 120)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx.totalharga);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_7__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_8__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_13__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_9__.MolInputNumericComponent], styles: ["#basic-addon1[_ngcontent-%COMP%] {\r\n  height: 32px;\r\n  padding-left: 12px;\r\n  width: 100%;\r\n  border-top-left-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n  border: 0;\r\n}\r\n\r\n#DropdownObat[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\r\n  border-top-right-radius: 0;\r\n  border-bottom-right-radius: 0;\r\n}\r\n\r\n#NumericQty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  padding-right: 5px;\r\n}\r\n\r\ndiv.head[_ngcontent-%COMP%] {\r\n  font-size: 13px !important;\r\n  font-weight: 500 !important;\r\n}\r\n\r\n.is-racikan[_ngcontent-%COMP%]{\r\n  background-color: #f3e6f3;\r\n}\r\n\r\n.form_paragraf[_ngcontent-%COMP%]{\r\n  display: inline-block!important;\r\n}\r\n\r\n.form-label[_ngcontent-%COMP%] {\r\nmargin-bottom: 0px;\r\n}\r\n\r\n#basic-addon1[_ngcontent-%COMP%] {\r\nheight: 32px;\r\npadding-left: 12px;\r\nwidth: 100%;\r\nborder-top-left-radius: 0;\r\nborder-bottom-left-radius: 0;\r\nborder: 0;\r\n}\r\n\r\n.e-toolbar[_ngcontent-%COMP%]   .e-toolbar-item[_ngcontent-%COMP%]   .e-tbar-btn.e-btn[_ngcontent-%COMP%]   .e-icons.e-btn-icon[_ngcontent-%COMP%] {\r\nmin-height: 14px !important;\r\n}\r\n\r\nth.e-headercell[_ngcontent-%COMP%] {\r\nbackground-color: rgba(0, 0, 0, 0.03);\r\ncolor: black;\r\nborder: 1px solid rgba(0, 0, 0, 0.125);\r\npadding: 5px !important;\r\nheight: 30px !important;\r\n}\r\n\r\nspan.e-headertext[_ngcontent-%COMP%] {\r\nfont-size: 13px !important;\r\n}\r\n\r\ntd.e-rowcell[_ngcontent-%COMP%] {\r\npadding: 5px !important;\r\n}\r\n\r\n.e-grid[_ngcontent-%COMP%]   .e-detailheadercell[_ngcontent-%COMP%], td.e-detailcell.e-lastrowcell[_ngcontent-%COMP%] {\r\nbackground-color: var(--biru-muda) !important;\r\n}\r\n\r\ndiv.e-gridcontent\r\ntr.e-detailrow\r\ntd.e-detailcell\r\ndiv.e-headercontent\r\nth.e-headercell[_ngcontent-%COMP%] {\r\nbackground-color: var(--biru-muda) !important;\r\n}"] });


/***/ }),

/***/ 69354:
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irja/view-resep-irja/view-resep-irja.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResepIrjaComponent": () => (/* binding */ ViewResepIrjaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../json/grid.config.json */ 36914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service */ 67669);
/* harmony import */ var src_app_modules_Pharmacy_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service */ 14307);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);













const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = function () { return { wrapMode: "Both" }; };
class ViewResepIrjaComponent {
    constructor(resepDokterService, transaksiObatIrjaService, router, encryptionService, activatedRoute, utilityService, utilityHelperService, formBuilder) {
        this.resepDokterService = resepDokterService;
        this.transaksiObatIrjaService = transaksiObatIrjaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.utilityHelperService = utilityHelperService;
        this.formBuilder = formBuilder;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            // { Id: 'simpan', Captions: 'Simpan Penjualan Resep', Icons1: 'fa-save fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.inputFieldState = 'detail';
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_resep'] + ' ' + data1['nama_satuan'];
        };
        this.totalharga = (field, data1) => {
            return (data1['is_racikan']) ? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'];
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            pasien: ['', []],
            poli: ['', []],
            dokter: ['', []],
            umur: ['', []],
            total_bayar_resep: [0, []]
        });
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        };
    }
    ngAfterViewInit() {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }
    onLoadDetailData(id) {
        this.resepDokterService.onGetById(id).subscribe((result) => {
            this.dataHeader = result.data;
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
            this.formInput.setValue({
                poli: result.data.nama_poli,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                umur: result.data.tgl_lahir,
                total_bayar_resep: 0
            });
            this.imageSrc = result.data.nama_foto;
        });
    }
    mapingRacikan(details) {
        this.dataSourceChild = [];
        details.map((item) => {
            this.dataSourceChild.push(...item.racikans);
        });
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        };
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }
    handleSelected(args) {
        // this.total_bayar_resep.setValue(0);
        let tot = 0;
        this.GridResepRacikan.getSelectedRecords().map((item) => {
            let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
            tot += har;
            this.total_bayar_resep.setValue(tot);
        });
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                break;
            case "simpan":
                let Data = this.dataHeader;
                Data.details = this.GridResepRacikan.getSelectedRecords();
                this.transaksiObatIrjaService.Insert(Data).subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Data Berhasil Tersimpan', result.message)
                        .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                    });
                });
                break;
            default:
                break;
        }
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
ViewResepIrjaComponent.ɵfac = function ViewResepIrjaComponent_Factory(t) { return new (t || ViewResepIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_resep_dokter_service__WEBPACK_IMPORTED_MODULE_1__.ResepDokterService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_service__WEBPACK_IMPORTED_MODULE_2__.TransaksiObatIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_3__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__.UtilityHelperService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder)); };
ViewResepIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ViewResepIrjaComponent, selectors: [["app-view-resep-irja"]], viewQuery: function ViewResepIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c3, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
    } }, decls: 25, vars: 34, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-4"], [1, "row", "mb-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "img-thumbnail", 2, "width", "120px", "max-width", "120px", "height", "150px", "max-height", "150px", 3, "src"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 20rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound", "rowSelected", "rowDeselected"], ["GridResepRacikan", ""], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "harga_jual_apotek", "headerText", "Total", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width", "valueAccessor"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function ViewResepIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onClickButtonNav", function ViewResepIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ejs-grid", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("rowDataBound", function ViewResepIrjaComponent_Template_ejs_grid_rowDataBound_14_listener($event) { return ctx.rowDataBound($event); })("dataBound", function ViewResepIrjaComponent_Template_ejs_grid_dataBound_14_listener() { return ctx.onDataBound(); })("rowSelected", function ViewResepIrjaComponent_Template_ejs_grid_rowSelected_14_listener($event) { return ctx.handleSelected($event); })("rowDeselected", function ViewResepIrjaComponent_Template_ejs_grid_rowDeselected_14_listener($event) { return ctx.handleSelected($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "e-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "e-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "e-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "e-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "mol-input-numeric", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", ctx.imageSrc ? ctx.imageSrc : "../../../../../../assets/image/pendaftaran-ulang-pasien/blank.png", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](33, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 120)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx.totalharga);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx.inputFieldState);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_12__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_8__.MolInputNumericComponent], styles: [""] });


/***/ }),

/***/ 53830:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatIrnaComponent": () => (/* binding */ TransaksiObatIrnaComponent)
/* harmony export */ });
/* harmony import */ var _json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/LookupGridRuangan.json */ 12369);
/* harmony import */ var _json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/gridPasien.config.json */ 40951);
/* harmony import */ var _json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/gridResep.config.json */ 49504);
/* harmony import */ var src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/BILLING */ 35877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_dashboard_dokter_services_resep_dokter_irna_resep_dokter_irna_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service */ 85191);
/* harmony import */ var _services_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.service */ 54906);
/* harmony import */ var src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/PIS/services/IRNA/admisi-pasien-rawat-inap/admisi-pasien-rawat-inap.service */ 30013);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component */ 15528);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 88594);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/molecules/form/mol-input-numeric/mol-input-numeric.component */ 61047);

















const _c0 = ["LookupKodeRuangan"];
const _c1 = ["GridDetailResep"];
const _c2 = ["GridPasien"];
function TransaksiObatIrnaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "mol-grid", 4, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("row-selected", function TransaksiObatIrnaComponent_span_18_Template_mol_grid_row_selected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r5.handleSelectedRowResep($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-height", "calc(100vh - 20rem)")("grid-DataSource", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 5, ctx_r2.transaksiObatIrnaService.dataResep))("grid-paging", false)("grid-lines", "Both")("columns", ctx_r2.GridConfigResep.GridColumns);
} }
const _c3 = function () { return { wrapMode: "Both" }; };
function TransaksiObatIrnaComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TransaksiObatIrnaComponent_span_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r8.handelClickLihatresep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, " Lihat Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function TransaksiObatIrnaComponent_span_19_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r10.handleClickSimpan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, " Simpan Transaksi Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ejs-grid", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("rowDataBound", function TransaksiObatIrnaComponent_span_19_Template_ejs_grid_rowDataBound_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r11.rowDataBound($event); })("dataBound", function TransaksiObatIrnaComponent_span_19_Template_ejs_grid_dataBound_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r12.onDataBound(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "e-columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "e-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "e-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "e-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "e-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "mol-input-numeric", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx_r3.DataSourceDetailResep)("childGrid", ctx_r3.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx_r3.keterangan);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx_r3.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 130)("valueAccessor", ctx_r3.hargajual);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Total Bayar Resep")("isFooter", true)("inputFieldState", "detail")("inputFieldState", ctx_r3.inputFieldState);
} }
class TransaksiObatIrnaComponent {
    constructor(formBuilder, resepDokterIrnaService, transaksiObatIrnaService, admisiPasienRawatInapService, utilityService) {
        this.formBuilder = formBuilder;
        this.resepDokterIrnaService = resepDokterIrnaService;
        this.transaksiObatIrnaService = transaksiObatIrnaService;
        this.admisiPasienRawatInapService = admisiPasienRawatInapService;
        this.utilityService = utilityService;
        this.urlRuangan = src_app_api_BILLING__WEBPACK_IMPORTED_MODULE_3__.API_BILLING.SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;
        this.LookupGridRuangan = /*#__PURE__*/ (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_LookupGridRuangan_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.GridConfig = /*#__PURE__*/ (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_json_gridPasien_config_json__WEBPACK_IMPORTED_MODULE_1__, 2)));
        this.GridConfigResep = /*#__PURE__*/ (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_gridResep_config_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.DataSourcePasien = [];
        this.DataSourceResep = [];
        this.DataSourceDetailResep = [];
        this.DataSourceDetailResepRacikan = [];
        this.inputFieldState = 'detail';
        this.handleClickResep = false;
        this.currentResepId = null;
        this.currentRegisterId = 1;
        this.keterangan = (field, data1) => {
            return data1['nama_obat'] + ', ' +
                data1['ket_label'] + ', ' +
                data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' + data1['nama_satuan'];
        };
        this.hargajual = (field, data1) => {
            return data1['harga_jual_apotek'] * data1['qty_harian'];
        };
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            nama_pasien: ['', []],
            umur: ['', []],
            poli: ['', []],
            bed: ['', []],
            dokter: ['', []],
            nomor_rm: ['', []],
            nomor_registrasi: ['', []],
            total_bayar_resep: [0, []]
        });
        this.childGrid = {
            dataSource: this.DataSourceDetailResepRacikan,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfigResep.columnsChild
        };
        this.set(1);
    }
    heandleSelectedRuangan(args) {
        console.log(args);
        this.admisiPasienRawatInapService.onGetPasienByPoli(args.id_poli).subscribe((result) => {
            this.DataSourcePasien = result.data;
            this.GridPasien.Grid.refresh();
        });
        this.handleClickResep = false;
    }
    set(id_register) {
        this.resepDokterIrnaService.onGetByIdRegisterToTrans(id_register).subscribe((result) => {
            this.transaksiObatIrnaService.setResep(result.data);
            console.log(result.data);
        });
    }
    handleSelectedRow(args) {
        console.log(args);
        this.currentRegisterId = args.data.id_register;
        this.formInput.setValue({
            nama_pasien: args.data.nama_pasien,
            umur: args.data.usia,
            poli: args.data.nama_poli,
            bed: args.data.bed_no + ' - ' + args.data.bed_no,
            dokter: args.data.nama_dokter,
            nomor_rm: args.data.no_rekam_medis,
            nomor_registrasi: args.data.no_register,
            total_bayar_resep: 0,
        });
        this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
            this.transaksiObatIrnaService.setResep(result.data);
        });
    }
    handleSelectedRowResep(args) {
        this.handleClickResep = true;
        this.onLoadDetailData(args.data.resep_id);
        this.currentResepId = args.data.resep_id;
    }
    rowDataBound(args) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        }
        else {
            // args.row.classList.add('is-racikan');
        }
    }
    onDataBound() {
        this.GridDetailResep.detailRowModule.expandAll();
    }
    onLoadDetailData(id) {
        this.resepDokterIrnaService.onGetById(id).subscribe((result) => {
            this.DataSourceDetailResep = result.data.details;
            this.GridDetailResep.refresh();
            this.mapingRacikan(result.data.details);
            let tot = 0;
            this.DataSourceDetailResep.map((item) => {
                let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
                tot += har;
                this.total_bayar_resep.setValue(tot);
            });
        });
    }
    mapingRacikan(details) {
        this.DataSourceDetailResepRacikan = [];
        details.map((item) => {
            this.DataSourceDetailResepRacikan.push(...item.racikans);
        });
        this.childGrid = {
            dataSource: this.DataSourceDetailResepRacikan,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfigResep.columnsChild
        };
    }
    handelClickLihatresep() {
        this.handleClickResep = false;
    }
    handleClickSimpan() {
        // this.transaksiObatIrnaService.Insert(this.currentResepId).subscribe((result)=>{
        this.handleClickResep = false;
        this.resepDokterIrnaService.onGetByIdRegisterToTrans(this.currentRegisterId).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.transaksiObatIrnaService.setResep(result.data);
            });
        });
        // })
    }
    get total_bayar_resep() { return this.formInput.get('total_bayar_resep'); }
}
TransaksiObatIrnaComponent.ɵfac = function TransaksiObatIrnaComponent_Factory(t) { return new (t || TransaksiObatIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_resep_dokter_irna_resep_dokter_irna_service__WEBPACK_IMPORTED_MODULE_4__.ResepDokterIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_service__WEBPACK_IMPORTED_MODULE_5__.TransaksiObatIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_PIS_services_IRNA_admisi_pasien_rawat_inap_admisi_pasien_rawat_inap_service__WEBPACK_IMPORTED_MODULE_6__.AdmisiPasienRawatInapService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_7__.UtilityService)); };
TransaksiObatIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: TransaksiObatIrnaComponent, selectors: [["app-transaksi-obat-irna"]], viewQuery: function TransaksiObatIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.LookupKodeRuangan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.GridDetailResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.GridPasien = _t.first);
    } }, decls: 20, vars: 27, consts: [[1, "row"], [1, "col-sm-4"], [3, "lookup-url", "idKode", "modal-title", "idTitle", "columns", "filter-lookup", "label", "onGetSelectedData"], ["LookupKodeRuangan", ""], [3, "grid-height", "grid-DataSource", "grid-paging", "grid-lines", "columns", "row-selected"], ["GridPasien", ""], [1, "col-sm-8"], [3, "formGroup"], [1, "col-sm-6"], ["formControlName", "nama_pasien", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], ["formControlName", "bed", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "nomor_rm", 3, "label", "inputFieldState"], ["formControlName", "nomor_registrasi", 3, "label", "inputFieldState"], [4, "ngIf"], ["GridResep", ""], ["type", "button", 1, "app-btn-master", "me-5", "btn", "btn-sm", "btn-primary-outline", 3, "click"], [1, "fas", "fa-arrow-left"], ["type", "button", 1, "app-btn-master", "btn", "btn-sm", "btn-primary", 3, "click"], [1, "fas", "fa-save"], ["height", "calc(100vh - 23rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridDetailResep", ""], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "harga_jual_apotek", "headerText", "Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "harga_jual_apotek", "headerText", "Total Harga", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width", "valueAccessor"], [1, "row", "pe-2"], [1, "col-sm-5"], [1, "col-sm-7"], ["formControlName", "total_bayar_resep", 3, "label", "isFooter", "inputFieldState"]], template: function TransaksiObatIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-card-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "org-input-look-up-kode", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onGetSelectedData", function TransaksiObatIrnaComponent_Template_org_input_look_up_kode_onGetSelectedData_3_listener($event) { return ctx.heandleSelectedRuangan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "mol-grid", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("row-selected", function TransaksiObatIrnaComponent_Template_mol_grid_row_selected_5_listener($event) { return ctx.handleSelectedRow($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "mol-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "mol-input-text", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "mol-input-text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "mol-input-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, TransaksiObatIrnaComponent_span_18_Template, 4, 7, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, TransaksiObatIrnaComponent_span_19_Template, 18, 23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("lookup-url", ctx.urlRuangan)("idKode", "kode_poli")("modal-title", "Data Ruangan")("idTitle", "nama_poli")("columns", ctx.LookupGridRuangan.columns)("filter-lookup", ctx.LookupGridRuangan.filter)("label", "Ruangan");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-height", "calc(100vh - 16rem)")("grid-DataSource", ctx.DataSourcePasien)("grid-paging", false)("grid-lines", "Both")("columns", ctx.GridConfig.GridColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Bed")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No Rm")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "No Reg")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx.handleClickResep);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.handleClickResep);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_9__.OrgInputLookUpKodeComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_10__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_11__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_16__.AggregateColumnDirective, _shared_components_molecules_form_mol_input_numeric_mol_input_numeric_component__WEBPACK_IMPORTED_MODULE_12__.MolInputNumericComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 82684:
/*!*************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pharmacy-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmacyRoutingModule": () => (/* binding */ PharmacyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pages_Antrian_antrian_farmasi_antrian_farmasi_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/Antrian/antrian-farmasi/antrian-farmasi.component */ 1725);
/* harmony import */ var _pages_Antrian_antrian_farmasi_telaah_resep_irja_telaah_resep_irja_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Antrian/antrian-farmasi/telaah-resep-irja/telaah-resep-irja.component */ 45849);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_daftar_refund_obat_irda_daftar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda-daftar/refund-obat-irda-daftar.component */ 42500);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_detail_refund_obat_irda_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda-detail/refund-obat-irda-detail.component */ 71887);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_refund_obat_irda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda/refund-obat-irda.component */ 10626);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_daftar_refund_obat_irja_daftar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja-daftar/refund-obat-irja-daftar.component */ 82184);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_detail_refund_obat_irja_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja-detail/refund-obat-irja-detail.component */ 94993);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_refund_obat_irja_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja/refund-obat-irja.component */ 52181);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_daftar_refund_obat_irna_daftar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna-daftar/refund-obat-irna-daftar.component */ 94108);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_detail_refund_obat_irna_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna-detail/refund-obat-irna-detail.component */ 53619);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_refund_obat_irna_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna/refund-obat-irna.component */ 44997);
/* harmony import */ var _pages_resep_racikan_resep_racikan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/resep-racikan/resep-racikan.component */ 8351);
/* harmony import */ var _pages_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component */ 14402);
/* harmony import */ var _pages_setup_data_setup_grup_obat_setup_grup_obat_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/setup-data/setup-grup-obat/setup-grup-obat.component */ 9973);
/* harmony import */ var _pages_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component */ 96699);
/* harmony import */ var _pages_setup_data_setup_outlet_setup_outlet_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/setup-data/setup-outlet/setup-outlet.component */ 74025);
/* harmony import */ var _pages_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component */ 19718);
/* harmony import */ var _pages_setup_data_setup_tipe_outlet_setup_tipe_outlet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component */ 67668);
/* harmony import */ var _pages_setup_formularium_setup_formularium_setup_formularium_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/setup-formularium/setup-formularium/setup-formularium.component */ 12426);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irda_transaksi_obat_formularium_irda_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irda/transaksi-obat-formularium-irda.component */ 17332);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irja_transaksi_obat_formularium_irja_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irja/transaksi-obat-formularium-irja.component */ 18727);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irna_transaksi_obat_formularium_irna_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/transaksi-obat-formularium-irna.component */ 65011);
/* harmony import */ var _pages_transaksi_obat_input_resep_irja_input_resep_irja_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/transaksi-obat/input-resep-irja/input-resep-irja.component */ 49181);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.component */ 15169);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.component */ 61391);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irja_view_resep_irja_view_resep_irja_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irja/view-resep-irja/view-resep-irja.component */ 69354);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.component */ 53830);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 37716);






























const pharmacyRoutes = [
    { path: "", component: null, data: { title: "Pharmacy" } },
    { path: "antrian-farmasi", component: _pages_Antrian_antrian_farmasi_antrian_farmasi_component__WEBPACK_IMPORTED_MODULE_0__.AntrianFarmasiComponent, data: { title: "Antrian Pharmacy" } },
    { path: "setup-formularium", component: _pages_setup_formularium_setup_formularium_setup_formularium_component__WEBPACK_IMPORTED_MODULE_18__.SetupFormulariumComponent, data: { title: "Setup Formularium" } },
    { path: "resep-racikan", component: _pages_resep_racikan_resep_racikan_component__WEBPACK_IMPORTED_MODULE_11__.ResepRacikanComponent, data: { title: "Resep Racikan" } },
    {
        path: "setup-data", component: null, data: { title: "Setup Data" },
        children: [
            { path: "setup-tipe-outlet", component: _pages_setup_data_setup_tipe_outlet_setup_tipe_outlet_component__WEBPACK_IMPORTED_MODULE_17__.SetupTipeOutletComponent, data: { title: "Setup Tipe Outlet" } },
            { path: "setup-outlet", component: _pages_setup_data_setup_outlet_setup_outlet_component__WEBPACK_IMPORTED_MODULE_15__.SetupOutletComponent, data: { title: "Setup Outlet" } },
            { path: "setup-grup-obat", component: _pages_setup_data_setup_grup_obat_setup_grup_obat_component__WEBPACK_IMPORTED_MODULE_13__.SetupGrupObatComponent, data: { title: "Setup Grup Obat" } },
            { path: "setup-cara-pakai-obat", component: _pages_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_component__WEBPACK_IMPORTED_MODULE_12__.SetupCaraPakaiObatComponent, data: { title: "Setup Cara Pakai Obat" } },
            { path: "setup-rute-pemberian-obat", component: _pages_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_component__WEBPACK_IMPORTED_MODULE_16__.SetupRutePemberianObatComponent, data: { title: "Setup rute Pemberian Obat" } },
            { path: "setup-label-pemakaian-obat", component: _pages_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_component__WEBPACK_IMPORTED_MODULE_14__.SetupLabelPemakaianObatComponent, data: { title: "Setup Label Pemakaian Obat" } },
        ]
    },
    {
        path: "transaksi-obat", component: null, data: { title: "Transaksi Obat" },
        children: [
            { path: "view-obat-irja/:id/:key", component: _pages_transaksi_obat_transaksi_obat_irja_view_resep_irja_view_resep_irja_component__WEBPACK_IMPORTED_MODULE_25__.ViewResepIrjaComponent, data: { title: "View Resep Rawat Jalan" } },
            { path: "transaksi-obat-irja/:id/:key", component: _pages_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_component__WEBPACK_IMPORTED_MODULE_24__.TransaksiObatIrjaComponent, data: { title: "Transaksi Obat Rawat Jalan" } },
            { path: "telaah-resep-irja/:id/:key", component: _pages_Antrian_antrian_farmasi_telaah_resep_irja_telaah_resep_irja_component__WEBPACK_IMPORTED_MODULE_1__.TelaahResepIrjaComponent, data: { title: "Telaah Resep Irja" } },
            { path: "transaksi-obat-irna", component: _pages_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_component__WEBPACK_IMPORTED_MODULE_26__.TransaksiObatIrnaComponent, data: { title: "Transaksi Obat Rawat Inap" } },
            { path: "transaksi-obat-irda", component: _pages_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_component__WEBPACK_IMPORTED_MODULE_23__.TransaksiObatIrdaComponent, data: { title: "Transaksi Obat Rawat Darurat" } },
            { path: "input-resep-irja", component: _pages_transaksi_obat_input_resep_irja_input_resep_irja_component__WEBPACK_IMPORTED_MODULE_22__.InputResepIrjaComponent, data: { title: "Input Resep Irja" } },
        ]
    },
    {
        path: "transaksi-obat-formularium", component: null, data: { title: "Transaksi Formularium Obat" },
        children: [
            { path: "view-obat-formularium-irja/:id/:key", component: _pages_transaksi_obat_transaksi_obat_irja_view_resep_irja_view_resep_irja_component__WEBPACK_IMPORTED_MODULE_25__.ViewResepIrjaComponent, data: { title: "View Resep Rawat Jalan" } },
            { path: "transaksi-obat-formularium-irja/:id/:key", component: _pages_transaksi_obat_formularium_transaksi_obat_formularium_irja_transaksi_obat_formularium_irja_component__WEBPACK_IMPORTED_MODULE_20__.TransaksiObatFormulariumIrjaComponent, data: { title: "Transaksi Obat Formularium Rawat Jalan" } },
            { path: "transaksi-obat-formularium-irna", component: _pages_transaksi_obat_formularium_transaksi_obat_formularium_irna_transaksi_obat_formularium_irna_component__WEBPACK_IMPORTED_MODULE_21__.TransaksiObatFormulariumIrnaComponent, data: { title: "Transaksi Obat Formularium Rawat Inap" } },
            { path: "transaksi-obat-formularium-irda", component: _pages_transaksi_obat_formularium_transaksi_obat_formularium_irda_transaksi_obat_formularium_irda_component__WEBPACK_IMPORTED_MODULE_19__.TransaksiObatFormulariumIrdaComponent, data: { title: "Transaksi Obat Formularium Rawat Darurat" } },
            { path: "input-resep-formularium-irja", component: _pages_transaksi_obat_input_resep_irja_input_resep_irja_component__WEBPACK_IMPORTED_MODULE_22__.InputResepIrjaComponent, data: { title: "Input Resep Irja" } },
        ]
    },
    {
        path: "refund-obat", component: null, data: { title: "Refund Obat" },
        children: [
            { path: "refund-obat-irja", component: _pages_refund_obat_refund_obat_irja_refund_obat_irja_component__WEBPACK_IMPORTED_MODULE_7__.RefundObatIrjaComponent, data: { title: "Input Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irja-daftar", component: _pages_refund_obat_refund_obat_irja_daftar_refund_obat_irja_daftar_component__WEBPACK_IMPORTED_MODULE_5__.RefundObatIrjaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irja-detail/:id/:key", component: _pages_refund_obat_refund_obat_irja_detail_refund_obat_irja_detail_component__WEBPACK_IMPORTED_MODULE_6__.RefundObatIrjaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Jalan" } },
            { path: "refund-obat-irda", component: _pages_refund_obat_refund_obat_irda_refund_obat_irda_component__WEBPACK_IMPORTED_MODULE_4__.RefundObatIrdaComponent, data: { title: "Input Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irda-daftar", component: _pages_refund_obat_refund_obat_irda_daftar_refund_obat_irda_daftar_component__WEBPACK_IMPORTED_MODULE_2__.RefundObatIrdaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irda-detail/:id/:key", component: _pages_refund_obat_refund_obat_irda_detail_refund_obat_irda_detail_component__WEBPACK_IMPORTED_MODULE_3__.RefundObatIrdaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Darurat" } },
            { path: "refund-obat-irna", component: _pages_refund_obat_refund_obat_irna_refund_obat_irna_component__WEBPACK_IMPORTED_MODULE_10__.RefundObatIrnaComponent, data: { title: "Input Retur Penjualan Obat Rawat Inap" } },
            { path: "refund-obat-irna-daftar", component: _pages_refund_obat_refund_obat_irna_daftar_refund_obat_irna_daftar_component__WEBPACK_IMPORTED_MODULE_8__.RefundObatIrnaDaftarComponent, data: { title: "Daftar Retur Penjualan Obat Rawat Inap" } },
            { path: "refund-obat-irna-detail/:id/:key", component: _pages_refund_obat_refund_obat_irna_detail_refund_obat_irna_detail_component__WEBPACK_IMPORTED_MODULE_9__.RefundObatIrnaDetailComponent, data: { title: "Detail Retur Penjualan Obat Rawat Inap" } },
        ]
    }
];
class PharmacyRoutingModule {
}
PharmacyRoutingModule.ɵfac = function PharmacyRoutingModule_Factory(t) { return new (t || PharmacyRoutingModule)(); };
PharmacyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineNgModule"]({ type: PharmacyRoutingModule });
PharmacyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule.forChild(pharmacyRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsetNgModuleScope"](PharmacyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule] }); })();


/***/ }),

/***/ 27300:
/*!*****************************************************!*\
  !*** ./src/app/modules/Pharmacy/pharmacy.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PharmacyModule": () => (/* binding */ PharmacyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 72271);
/* harmony import */ var _pages_Antrian_antrian_farmasi_antrian_farmasi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Antrian/antrian-farmasi/antrian-farmasi.component */ 1725);
/* harmony import */ var _pharmacy_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pharmacy-routing.module */ 82684);
/* harmony import */ var _pages_setup_formularium_setup_formularium_setup_formularium_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/setup-formularium/setup-formularium/setup-formularium.component */ 12426);
/* harmony import */ var _pages_resep_racikan_resep_racikan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/resep-racikan/resep-racikan.component */ 8351);
/* harmony import */ var _pages_setup_data_setup_tipe_outlet_setup_tipe_outlet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/setup-data/setup-tipe-outlet/setup-tipe-outlet.component */ 67668);
/* harmony import */ var _pages_setup_data_setup_outlet_setup_outlet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/setup-data/setup-outlet/setup-outlet.component */ 74025);
/* harmony import */ var _pages_setup_data_setup_grup_obat_setup_grup_obat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/setup-data/setup-grup-obat/setup-grup-obat.component */ 9973);
/* harmony import */ var _pages_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.component */ 14402);
/* harmony import */ var _pages_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.component */ 19718);
/* harmony import */ var _pages_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.component */ 96699);
/* harmony import */ var _pages_setup_formularium_setup_formularium_setup_generik_setup_generik_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/setup-formularium/setup-formularium/setup-generik/setup-generik.component */ 76995);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.component */ 53830);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.component */ 61391);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_refund_obat_irja_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja/refund-obat-irja.component */ 52181);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_refund_obat_irna_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna/refund-obat-irna.component */ 44997);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irja_view_resep_irja_view_resep_irja_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irja/view-resep-irja/view-resep-irja.component */ 69354);
/* harmony import */ var _pages_transaksi_obat_input_resep_irja_input_resep_irja_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/transaksi-obat/input-resep-irja/input-resep-irja.component */ 49181);
/* harmony import */ var _pages_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.component */ 15169);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_daftar_refund_obat_irja_daftar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja-daftar/refund-obat-irja-daftar.component */ 82184);
/* harmony import */ var _pages_refund_obat_refund_obat_irja_detail_refund_obat_irja_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irja-detail/refund-obat-irja-detail.component */ 94993);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_refund_obat_irda_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda/refund-obat-irda.component */ 10626);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_daftar_refund_obat_irda_daftar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda-daftar/refund-obat-irda-daftar.component */ 42500);
/* harmony import */ var _pages_refund_obat_refund_obat_irda_detail_refund_obat_irda_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irda-detail/refund-obat-irda-detail.component */ 71887);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_daftar_refund_obat_irna_daftar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna-daftar/refund-obat-irna-daftar.component */ 94108);
/* harmony import */ var _pages_refund_obat_refund_obat_irna_detail_refund_obat_irna_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/refund-obat/refund-obat-irna-detail/refund-obat-irna-detail.component */ 53619);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irja_input_resep_formularium_irja_input_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irja/input-resep-formularium-irja/input-resep-formularium-irja.component */ 72169);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irja_daftar_resep_formularium_irja_daftar_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irja/daftar-resep-formularium-irja/daftar-resep-formularium-irja.component */ 93712);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irja_view_resep_formularium_irja_view_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irja/view-resep-formularium-irja/view-resep-formularium-irja.component */ 44755);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irna_input_resep_formularium_input_resep_formularium_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irna/input-resep-formularium/input-resep-formularium.component */ 45965);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irna_daftar_resep_formularium_irna_daftar_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irna/daftar-resep-formularium-irna/daftar-resep-formularium-irna.component */ 68700);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irna_view_resep_formularium_irna_view_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irna/view-resep-formularium-irna/view-resep-formularium-irna.component */ 99746);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irna_pulang_resep_formularium_irna_pulang_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/pulang-resep-formularium-irna.component */ 28825);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irda_input_resep_formularium_irda_input_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/input-resep-formularium-irda.component */ 72742);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irda_daftar_resep_formularium_irda_daftar_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irda/daftar-resep-formularium-irda/daftar-resep-formularium-irda.component */ 5140);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irda_view_resep_formularium_irda_view_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irda/view-resep-formularium-irda/view-resep-formularium-irda.component */ 25622);
/* harmony import */ var _pages_resep_formularium_resep_formularium_irda_pulang_resep_formularium_irda_pulang_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/pulang-resep-formularium-irda.component */ 64961);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irja_transaksi_obat_formularium_irja_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irja/transaksi-obat-formularium-irja.component */ 18727);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irna_transaksi_obat_formularium_irna_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/transaksi-obat-formularium-irna.component */ 65011);
/* harmony import */ var _pages_transaksi_obat_formularium_transaksi_obat_formularium_irda_transaksi_obat_formularium_irda_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/transaksi-obat-formularium/transaksi-obat-formularium-irda/transaksi-obat-formularium-irda.component */ 17332);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _pages_Antrian_antrian_farmasi_telaah_resep_irja_telaah_resep_irja_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/Antrian/antrian-farmasi/telaah-resep-irja/telaah-resep-irja.component */ 45849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 37716);















































const SocketFarmasi = {
    url: `${src_environments_environment__WEBPACK_IMPORTED_MODULE_40__.environment.webApiSocket}`, options: {
        // "force new connection": true,
        // "reconnectionAttempts": "Infinity",
        // "timeout": 10000,
        "transports": ["websocket"]
    }
};
class PharmacyModule {
}
PharmacyModule.ɵfac = function PharmacyModule_Factory(t) { return new (t || PharmacyModule)(); };
PharmacyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineNgModule"]({ type: PharmacyModule });
PharmacyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_44__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _pharmacy_routing_module__WEBPACK_IMPORTED_MODULE_2__.PharmacyRoutingModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_45__.SocketIoModule.forRoot(SocketFarmasi),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_42__["ɵɵsetNgModuleScope"](PharmacyModule, { declarations: [_pages_Antrian_antrian_farmasi_antrian_farmasi_component__WEBPACK_IMPORTED_MODULE_1__.AntrianFarmasiComponent,
        _pages_setup_formularium_setup_formularium_setup_formularium_component__WEBPACK_IMPORTED_MODULE_3__.SetupFormulariumComponent,
        _pages_resep_racikan_resep_racikan_component__WEBPACK_IMPORTED_MODULE_4__.ResepRacikanComponent,
        _pages_setup_data_setup_tipe_outlet_setup_tipe_outlet_component__WEBPACK_IMPORTED_MODULE_5__.SetupTipeOutletComponent,
        _pages_setup_data_setup_outlet_setup_outlet_component__WEBPACK_IMPORTED_MODULE_6__.SetupOutletComponent,
        _pages_setup_data_setup_grup_obat_setup_grup_obat_component__WEBPACK_IMPORTED_MODULE_7__.SetupGrupObatComponent,
        _pages_setup_data_setup_cara_pakai_obat_setup_cara_pakai_obat_component__WEBPACK_IMPORTED_MODULE_8__.SetupCaraPakaiObatComponent,
        _pages_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_component__WEBPACK_IMPORTED_MODULE_9__.SetupRutePemberianObatComponent,
        _pages_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_component__WEBPACK_IMPORTED_MODULE_10__.SetupLabelPemakaianObatComponent,
        _pages_setup_formularium_setup_formularium_setup_generik_setup_generik_component__WEBPACK_IMPORTED_MODULE_11__.SetupGenerikComponent,
        _pages_transaksi_obat_transaksi_obat_irna_transaksi_obat_irna_component__WEBPACK_IMPORTED_MODULE_12__.TransaksiObatIrnaComponent,
        _pages_transaksi_obat_transaksi_obat_irja_transaksi_obat_irja_component__WEBPACK_IMPORTED_MODULE_13__.TransaksiObatIrjaComponent,
        _pages_refund_obat_refund_obat_irja_refund_obat_irja_component__WEBPACK_IMPORTED_MODULE_14__.RefundObatIrjaComponent,
        _pages_refund_obat_refund_obat_irna_refund_obat_irna_component__WEBPACK_IMPORTED_MODULE_15__.RefundObatIrnaComponent,
        _pages_transaksi_obat_transaksi_obat_irja_view_resep_irja_view_resep_irja_component__WEBPACK_IMPORTED_MODULE_16__.ViewResepIrjaComponent,
        _pages_transaksi_obat_input_resep_irja_input_resep_irja_component__WEBPACK_IMPORTED_MODULE_17__.InputResepIrjaComponent,
        _pages_transaksi_obat_transaksi_obat_irda_transaksi_obat_irda_component__WEBPACK_IMPORTED_MODULE_18__.TransaksiObatIrdaComponent,
        _pages_refund_obat_refund_obat_irja_daftar_refund_obat_irja_daftar_component__WEBPACK_IMPORTED_MODULE_19__.RefundObatIrjaDaftarComponent,
        _pages_refund_obat_refund_obat_irja_detail_refund_obat_irja_detail_component__WEBPACK_IMPORTED_MODULE_20__.RefundObatIrjaDetailComponent,
        _pages_refund_obat_refund_obat_irda_refund_obat_irda_component__WEBPACK_IMPORTED_MODULE_21__.RefundObatIrdaComponent,
        _pages_refund_obat_refund_obat_irda_daftar_refund_obat_irda_daftar_component__WEBPACK_IMPORTED_MODULE_22__.RefundObatIrdaDaftarComponent,
        _pages_refund_obat_refund_obat_irda_detail_refund_obat_irda_detail_component__WEBPACK_IMPORTED_MODULE_23__.RefundObatIrdaDetailComponent,
        _pages_refund_obat_refund_obat_irna_daftar_refund_obat_irna_daftar_component__WEBPACK_IMPORTED_MODULE_24__.RefundObatIrnaDaftarComponent,
        _pages_refund_obat_refund_obat_irna_detail_refund_obat_irna_detail_component__WEBPACK_IMPORTED_MODULE_25__.RefundObatIrnaDetailComponent,
        _pages_resep_formularium_resep_formularium_irja_input_resep_formularium_irja_input_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_26__.InputResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irja_daftar_resep_formularium_irja_daftar_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_27__.DaftarResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irja_view_resep_formularium_irja_view_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_28__.ViewResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irna_input_resep_formularium_input_resep_formularium_component__WEBPACK_IMPORTED_MODULE_29__.InputResepFormulariumComponent,
        _pages_resep_formularium_resep_formularium_irna_daftar_resep_formularium_irna_daftar_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_30__.DaftarResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irna_view_resep_formularium_irna_view_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_31__.ViewResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irna_pulang_resep_formularium_irna_pulang_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_32__.PulangResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irda_input_resep_formularium_irda_input_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_33__.InputResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_daftar_resep_formularium_irda_daftar_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_34__.DaftarResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_view_resep_formularium_irda_view_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_35__.ViewResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_pulang_resep_formularium_irda_pulang_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_36__.PulangResepFormulariumIrdaComponent,
        _pages_transaksi_obat_formularium_transaksi_obat_formularium_irja_transaksi_obat_formularium_irja_component__WEBPACK_IMPORTED_MODULE_37__.TransaksiObatFormulariumIrjaComponent,
        _pages_transaksi_obat_formularium_transaksi_obat_formularium_irna_transaksi_obat_formularium_irna_component__WEBPACK_IMPORTED_MODULE_38__.TransaksiObatFormulariumIrnaComponent,
        _pages_transaksi_obat_formularium_transaksi_obat_formularium_irda_transaksi_obat_formularium_irda_component__WEBPACK_IMPORTED_MODULE_39__.TransaksiObatFormulariumIrdaComponent,
        _pages_Antrian_antrian_farmasi_telaah_resep_irja_telaah_resep_irja_component__WEBPACK_IMPORTED_MODULE_41__.TelaahResepIrjaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_43__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_44__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _pharmacy_routing_module__WEBPACK_IMPORTED_MODULE_2__.PharmacyRoutingModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_45__.SocketIoModule], exports: [_pages_resep_formularium_resep_formularium_irja_input_resep_formularium_irja_input_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_26__.InputResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irja_daftar_resep_formularium_irja_daftar_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_27__.DaftarResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irja_view_resep_formularium_irja_view_resep_formularium_irja_component__WEBPACK_IMPORTED_MODULE_28__.ViewResepFormulariumIrjaComponent,
        _pages_resep_formularium_resep_formularium_irna_input_resep_formularium_input_resep_formularium_component__WEBPACK_IMPORTED_MODULE_29__.InputResepFormulariumComponent,
        _pages_resep_formularium_resep_formularium_irna_daftar_resep_formularium_irna_daftar_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_30__.DaftarResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irna_view_resep_formularium_irna_view_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_31__.ViewResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irna_pulang_resep_formularium_irna_pulang_resep_formularium_irna_component__WEBPACK_IMPORTED_MODULE_32__.PulangResepFormulariumIrnaComponent,
        _pages_resep_formularium_resep_formularium_irda_input_resep_formularium_irda_input_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_33__.InputResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_daftar_resep_formularium_irda_daftar_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_34__.DaftarResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_view_resep_formularium_irda_view_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_35__.ViewResepFormulariumIrdaComponent,
        _pages_resep_formularium_resep_formularium_irda_pulang_resep_formularium_irda_pulang_resep_formularium_irda_component__WEBPACK_IMPORTED_MODULE_36__.PulangResepFormulariumIrdaComponent] }); })();


/***/ }),

/***/ 83601:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-formularium/setup-formularium.service.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupFormulariumService": () => (/* binding */ SetupFormulariumService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupFormulariumService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_FORMULARIUM;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.dataSource_obat = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource(id_generik) {
        this.onGetAll(id_generik).subscribe((result) => {
            this.dataSource.next(result.data);
        });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll(id_generik) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID_GENERIK + '/' + id_generik);
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
    getFormulariumObat(id_formularium) {
        this.httpOperationService.defaultGetRequest(this.API.OBAT_GET_BY_ID_FORMULARIUM + "/" + id_formularium).subscribe((result) => {
            this.dataSource_obat.next(result.data);
        });
    }
    insertFormulariumObat(data) {
        return this.httpOperationService.defaultPostRequest(this.API.OBAT_INSERT, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    deleteFormulariumObat(data) {
        return this.httpOperationService.defaultPostRequest(this.API.OBAT_DELETE, data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
SetupFormulariumService.ɵfac = function SetupFormulariumService_Factory(t) { return new (t || SetupFormulariumService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupFormulariumService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupFormulariumService, factory: SetupFormulariumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65555:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-generik/setup-generik.service.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupGenerikService": () => (/* binding */ SetupGenerikService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupGenerikService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_GENERIK;
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
SetupGenerikService.ɵfac = function SetupGenerikService_Factory(t) { return new (t || SetupGenerikService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupGenerikService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupGenerikService, factory: SetupGenerikService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72023:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-jenis-formularium/setup-jenis-formularium.service.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupJenisFormulariumService": () => (/* binding */ SetupJenisFormulariumService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupJenisFormulariumService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_JENIS_FORMULARIUM;
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
SetupJenisFormulariumService.ɵfac = function SetupJenisFormulariumService_Factory(t) { return new (t || SetupJenisFormulariumService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupJenisFormulariumService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupJenisFormulariumService, factory: SetupJenisFormulariumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91969:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-parameter-maksimal/setup-parameter-maksimal.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupParameterMaksimalService": () => (/* binding */ SetupParameterMaksimalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupParameterMaksimalService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_PARAMETER_MAKSIMAL;
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
SetupParameterMaksimalService.ɵfac = function SetupParameterMaksimalService_Factory(t) { return new (t || SetupParameterMaksimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupParameterMaksimalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupParameterMaksimalService, factory: SetupParameterMaksimalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50744:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-peresepan-maksimal/setup-peresepan-maksimal.service.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupPeresepanMaksimalService": () => (/* binding */ SetupPeresepanMaksimalService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupPeresepanMaksimalService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_PERESEPAN_MAKSIMAL;
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
SetupPeresepanMaksimalService.ɵfac = function SetupPeresepanMaksimalService_Factory(t) { return new (t || SetupPeresepanMaksimalService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupPeresepanMaksimalService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupPeresepanMaksimalService, factory: SetupPeresepanMaksimalService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71904:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-sediaan-obat/setup-sediaan-obat.service.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupSediaanObatService": () => (/* binding */ SetupSediaanObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupSediaanObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_SEDIAAN_OBAT;
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
SetupSediaanObatService.ɵfac = function SetupSediaanObatService_Factory(t) { return new (t || SetupSediaanObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupSediaanObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupSediaanObatService, factory: SetupSediaanObatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 57317:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-terapi-generik/setup-terapi-generik.service.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupTerapiGenerikService": () => (/* binding */ SetupTerapiGenerikService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupTerapiGenerikService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_TERAPI_GENERIK;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    /**
    * Service Untuk Mengisi dataScource
    * @setDataSource Void
    */
    setDataSource(id_terapi) {
        this.onGetAll(id_terapi).subscribe((result) => {
            this.dataSource.next(result.data);
        });
    }
    /**
     * Service Untuk Menampilkan Semua data
     * @onGetAll Observable<SetupPabrikModel>
    */
    onGetAll(id_terapi) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID_TERAPI + '/' + id_terapi);
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
SetupTerapiGenerikService.ɵfac = function SetupTerapiGenerikService_Factory(t) { return new (t || SetupTerapiGenerikService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupTerapiGenerikService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupTerapiGenerikService, factory: SetupTerapiGenerikService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99990:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/formularium/setup-terapi/setup-terapi.service.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupTerapiService": () => (/* binding */ SetupTerapiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupTerapiService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.FORMULARIUM.SETUP_TERAPI;
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
        console.log(this.API);
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
SetupTerapiService.ɵfac = function SetupTerapiService_Factory(t) { return new (t || SetupTerapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupTerapiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupTerapiService, factory: SetupTerapiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 89194:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/refund-obat/refund-obat-irda/refund-obat-irda.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrdaService": () => (/* binding */ RefundObatIrdaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class RefundObatIrdaService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRDA;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.dataTransaksiObat = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
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
    getDetailPenjualan(id_outlet, id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_ID_REGISTER + '/' + id_outlet + '/' + id_register);
    }
    /**

     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
     */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetDataTransaksiObat(req) {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_PENJUALAN_BELUM_TERBAYAR, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })).subscribe((result) => {
            this.dataTransaksiObat.next(result.data);
        });
    }
    getDetail(id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_HEADER_ID + '/' + id);
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
    addDataDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    updateFromInline(index, data, rowData) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    editBanyak(index, banyak) {
        this.dataDetail[index].qty_retur_penjualan_obat = banyak;
    }
    sum() {
        this.total_transaksi = 0;
        this.jumlah_item = this.dataDetail.sum('qty_retur_penjualan_obat');
    }
    Insert(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    validasiPersetujuan(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Reset() {
        this.dataTransaksiObat.next([]);
    }
    getSatuanDetail(id_item) {
        // let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(id_item);
        // return this.dataDetail[index].satuans;
    }
    Validation(id) {
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, { retur_penjualan_obat_id: id })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Cancel(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
            retur_penjualan_obat_id: id,
            reason_canceled: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
RefundObatIrdaService.ɵfac = function RefundObatIrdaService_Factory(t) { return new (t || RefundObatIrdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
RefundObatIrdaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RefundObatIrdaService, factory: RefundObatIrdaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53648:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/refund-obat/refund-obat-irja/refund-obat-irja.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrjaService": () => (/* binding */ RefundObatIrjaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class RefundObatIrjaService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRJA;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.dataTransaksiObat = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
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
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetDataTransaksiObat(req) {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_PENJUALAN_BELUM_TERBAYAR, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })).subscribe((result) => {
            this.dataTransaksiObat.next(result.data);
        });
    }
    getDetail(id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_HEADER_ID + '/' + id);
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
    addDataDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    updateFromInline(index, data, rowData) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    editBanyak(index, banyak) {
        this.dataDetail[index].qty_retur_penjualan_obat = banyak;
    }
    sum() {
        this.total_transaksi = 0;
        this.jumlah_item = this.dataDetail.sum('qty_retur_penjualan_obat');
    }
    Insert(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    validasiPersetujuan(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Reset() {
        this.dataTransaksiObat.next([]);
    }
    getSatuanDetail(id_item) {
        // let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(id_item);
        // return this.dataDetail[index].satuans;
    }
    Validation(id) {
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, { retur_penjualan_obat_id: id })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Cancel(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
            retur_penjualan_obat_id: id,
            reason_canceled: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
RefundObatIrjaService.ɵfac = function RefundObatIrjaService_Factory(t) { return new (t || RefundObatIrjaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
RefundObatIrjaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RefundObatIrjaService, factory: RefundObatIrjaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 96897:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/refund-obat/refund-obat-irna/refund-obat-irna.service.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefundObatIrnaService": () => (/* binding */ RefundObatIrnaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class RefundObatIrnaService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRNA;
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.dataTransaksiObat = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
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
    getDetailPenjualan(id_outlet, id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_ID_REGISTER + '/' + id_outlet + '/' + id_register);
    }
    /**
  
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Observable<Model>
     */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_BY_PARAMS, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetDataTransaksiObat(req) {
        this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_PENJUALAN_BELUM_TERBAYAR, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        })).subscribe((result) => {
            this.dataTransaksiObat.next(result.data);
        });
    }
    getDetail(id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_DETAIL_PENJUALAN_BY_HEADER_ID + '/' + id);
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
    addDataDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    updateFromInline(index, data, rowData) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    editBanyak(index, banyak) {
        this.dataDetail[index].qty_retur_penjualan_obat = banyak;
    }
    sum() {
        this.total_transaksi = 0;
        this.jumlah_item = this.dataDetail.sum('qty_retur_penjualan_obat');
    }
    Insert(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    validasiPersetujuan(Data) {
        return this.httpOperationService.defaultPutRequest(this.API.INSERT, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Reset() {
        this.dataTransaksiObat.next([]);
    }
    getSatuanDetail(id_item) {
        // let index = this.dataDetail.map((item) => { return item.id_item }).indexOf(id_item);
        // return this.dataDetail[index].satuans;
    }
    Validation(id) {
        return this.httpOperationService.defaultPutRequest(this.API.VALIDASI, { retur_penjualan_obat_id: id })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Cancel(id, reason) {
        return this.httpOperationService.defaultPutRequest(this.API.CANCEL, {
            retur_penjualan_obat_id: id,
            reason_canceled: reason
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
RefundObatIrnaService.ɵfac = function RefundObatIrnaService_Factory(t) { return new (t || RefundObatIrnaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
RefundObatIrnaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RefundObatIrnaService, factory: RefundObatIrnaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8320:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/resep-racikan/resep-racikan.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepRacikanService": () => (/* binding */ ResepRacikanService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


class ResepRacikanService {
    constructor() {
        this.ResepRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
        this.DetailResepRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    onGetResepRacikanDummy() {
        const ResepRacikan = [
            {
                id_obat: 1, is_racikan: true, kode_obat: 'TES1', nama_obat: 'OBAT A', jumlah: 5, satuan: 'pcs', harga: 5000, diskon: 0, subtotal: 5000 * 5, detail_racikan: []
            },
            {
                id_obat: 2, is_racikan: false, kode_obat: 'TES2', nama_obat: 'OBAT B', jumlah: 1, satuan: '', harga: 5000, diskon: 0, subtotal: 5000, detail_racikan: []
            },
            {
                id_obat: 3, is_racikan: true, kode_obat: 'TES1', nama_obat: 'OBAT A', jumlah: 5, satuan: 'pcs', harga: 5000, diskon: 0, subtotal: 5000 * 5, detail_racikan: []
            },
            {
                id_obat: 4, is_racikan: false, kode_obat: 'TES2', nama_obat: 'OBAT B', jumlah: 1, satuan: '', harga: 5000, diskon: 0, subtotal: 5000, detail_racikan: [
                    {
                        id_obat: 4, kode_obat: 'TES21', nama_obat: 'HOLIMOX 500 MG', satuan: '', satuan_terkecil: 'TABLET', dosis_obat: 0.5, dosis_yg_diinginkan: 0.5, jumlah: 1, harga: 2500, subtotal: 2500
                    },
                    {
                        id_obat: 4, kode_obat: 'TES22', nama_obat: 'AZOMAX 500 MG', satuan: '', satuan_terkecil: 'TABLET', dosis_obat: 0.5, dosis_yg_diinginkan: 0.5, jumlah: 1, harga: 2500, subtotal: 2500
                    }
                ]
            },
        ];
        this.ResepRacikan.next(ResepRacikan);
        return this.ResepRacikan.asObservable();
    }
    ;
    onGetDetailResepRacikanDummy() {
        const DetailResepRacikan = [];
        this.ResepRacikan.value.map((item) => {
            DetailResepRacikan.push(...item.detail_racikan);
        });
        this.DetailResepRacikan.next(DetailResepRacikan);
        return this.DetailResepRacikan.asObservable();
    }
}
ResepRacikanService.ɵfac = function ResepRacikanService_Factory(t) { return new (t || ResepRacikanService)(); };
ResepRacikanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ResepRacikanService, factory: ResepRacikanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80009:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-tipe-outlet/setup-tipe-outlet.service.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupTipeOutletService": () => (/* binding */ SetupTipeOutletService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupTipeOutletService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_TIPE_OUTLET;
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
SetupTipeOutletService.ɵfac = function SetupTipeOutletService_Factory(t) { return new (t || SetupTipeOutletService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupTipeOutletService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupTipeOutletService, factory: SetupTipeOutletService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 15553:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irda/transaksi-obat-irda.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatIrdaService": () => (/* binding */ TransaksiObatIrdaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);






class TransaksiObatIrdaService {
    constructor(httpOperationService, notificationService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRDA;
        this.dataResep = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    Insert(resep_id) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT + '/' + resep_id, [])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    setResep(Data) {
        this.dataResep.next(Data);
    }
    onGetPasienIrda(dynamicFilter) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_PASIEN_IRDA, dynamicFilter)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
TransaksiObatIrdaService.ɵfac = function TransaksiObatIrdaService_Factory(t) { return new (t || TransaksiObatIrdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService)); };
TransaksiObatIrdaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TransaksiObatIrdaService, factory: TransaksiObatIrdaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54906:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irna/transaksi-obat-irna.service.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiObatIrnaService": () => (/* binding */ TransaksiObatIrnaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);






class TransaksiObatIrnaService {
    constructor(httpOperationService, notificationService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.TRANSAKSI_OBAT.TRANSAKSI_OBAT_IRNA;
        this.dataResep = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    }
    Insert(resep_id) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT + '/' + resep_id, [])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    InsertFormularium(Data) {
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_FORMULARIUM, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    setResep(Data) {
        this.dataResep.next(Data);
    }
}
TransaksiObatIrnaService.ɵfac = function TransaksiObatIrnaService_Factory(t) { return new (t || TransaksiObatIrnaService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService)); };
TransaksiObatIrnaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TransaksiObatIrnaService, factory: TransaksiObatIrnaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84217:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/Antrian/antrian-farmasi/telaah-resep-irja/json/grid.config.json ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":50}]}');

/***/ }),

/***/ 95129:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda-daftar/json/grid.config.json ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"nomor_retur_penjualan_obat","headerText":"Nomor Refund","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tanggal_retur_penjualan_obat","headerText":"Tanggal Refund","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_outlet","headerText":"Nama Outlet","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"keterangan_retur_penjualan_obat","headerText":"Keterangan","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"jumlah_item_retur","headerText":"Jumlah Item","type":"number","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"status_transaksi","headerText":"Status","type":"string","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"time_inputed","headerText":"Waktu Input","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 1584:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda-detail/json/detailItem.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TrDetail":[{"allowEditing":false,"field":"retur_penjualan_obat_detail_id","headerText":"Id","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"no_urut","headerText":"No Urut","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"id_item","headerText":"Id Item","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"kode_item","headerText":"Kode Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":170},{"allowEditing":false,"field":"kode_item","headerText":"Kode Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":170},{"allowEditing":false,"field":"nama_item","headerText":"Nama Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true},{"allowEditing":false,"field":"batch_number","headerText":"Batch","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":180},{"allowEditing":false,"field":"expired_date","headerText":"Expired","editType":"defaultEdit","type":"Date","format":"dd/MM/yyyy","textAlign":"left","headerTextAlign":"Center","visible":true,"width":200},{"allowEditing":true,"field":"qty_retur_penjualan_obat","headerText":"Banyak","editType":"defaultEdit","type":"","format":"N2","textAlign":"right","headerTextAlign":"Center","visible":true,"width":200}]}');

/***/ }),

/***/ 94421:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda/json/LookupGridNoRegistrasi.json ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_register","headerText":"No Register","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_rekam_medis","headerText":"No RM","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_pasien","headerText":"Nama Pasien","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"gender","headerText":"Gender","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_debitur","headerText":"Debitur","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_dokter","headerText":"Dokter","type":"string","visible":true}],"filter":[{"field":"no_registrasi","filter":"like","title":"No Register"},{"field":"no_rm","filter":"like","title":"No RM"},{"field":"nama_pasien","filter":"like","title":"Nama PAsien"}]}');

/***/ }),

/***/ 55214:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda/json/gridPasien.config.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"depo","headerText":"Depo","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"pasien","headerText":"Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_rm","headerText":"No Rm","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_register","headerText":"No Register","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tanggal_masuk","headerText":"Tgl Masuk","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"gender","headerText":"Sex","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_debitur","headerText":"Nama Debitur","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 49755:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irda/json/lookupitem.json ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_item","headerText":"Kode","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_item","headerText":"Nama Barang","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"barcode","headerText":"Barcode","type":"string","visible":true}],"filter":[{"field":"kode_item","filter":"like","title":"KODE"},{"field":"nama_item","filter":"like","title":"NAMA"},{"field":"nama_item","filter":"barcode","title":"BARCODE"}]}');

/***/ }),

/***/ 24719:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja-daftar/json/grid.config.json ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"nomor_retur_penjualan_obat","headerText":"Nomor Refund","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tanggal_retur_penjualan_obat","headerText":"Tanggal Refund","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_penjualan_obat","headerText":"No Penjualan","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_outlet","headerText":"Nama Outlet","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"keterangan_retur_penjualan_obat","headerText":"Keterangan","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"jumlah_item_retur","headerText":"Jumlah Item","type":"number","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"status_transaksi","headerText":"Status","type":"string","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"time_inputed","headerText":"Waktu Input","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 90580:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja-detail/json/detailItem.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TrDetail":[{"allowEditing":false,"field":"retur_penjualan_obat_detail_id","headerText":"Id","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"no_urut","headerText":"No Urut","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"id_item","headerText":"Id Item","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"kode_item","headerText":"Kode Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":170},{"allowEditing":false,"field":"nama_item","headerText":"Nama Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true},{"allowEditing":false,"field":"batch_number","headerText":"Batch","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":180},{"allowEditing":false,"field":"expired_date","headerText":"Expired","editType":"defaultEdit","type":"Date","format":"dd/MM/yyyy","textAlign":"left","headerTextAlign":"Center","visible":true,"width":200},{"allowEditing":true,"field":"qty_retur_penjualan_obat","headerText":"Banyak","editType":"defaultEdit","type":"","format":"N2","textAlign":"right","headerTextAlign":"Center","visible":true,"width":200}]}');

/***/ }),

/***/ 64813:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja/json/gridPasien.config.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"nomor_penjualan_obat","headerText":"No Bill","type":"string","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"tanggal_penjualan_obat","headerText":"Tgl Bill","type":"string","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nama_outlet","headerText":"Depo","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_rekam_medis","headerText":"No Rm","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_register","headerText":"No Register","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tgl_masuk","headerText":"Tgl Masuk","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"gender","headerText":"Sex","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_debitur","headerText":"Nama Debitur","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 62352:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irja/json/lookupitem.json ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_item","headerText":"Kode","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_item","headerText":"Nama Barang","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"barcode","headerText":"Barcode","type":"string","visible":true}],"filter":[{"field":"kode_item","filter":"like","title":"KODE"},{"field":"nama_item","filter":"like","title":"NAMA"},{"field":"nama_item","filter":"barcode","title":"BARCODE"}]}');

/***/ }),

/***/ 23609:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna-daftar/json/grid.config.json ***!
  \**************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"nomor_retur_penjualan_obat","headerText":"Nomor Refund","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tanggal_retur_penjualan_obat","headerText":"Tanggal Refund","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_outlet","headerText":"Nama Outlet","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"keterangan_retur_penjualan_obat","headerText":"Keterangan","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"jumlah_item_retur","headerText":"Jumlah Item","type":"number","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"status_transaksi","headerText":"Status","type":"string","format":"","textAlign":"right","visible":true,"editType":"defaultEdit"},{"field":"time_inputed","headerText":"Waktu Input","type":"Date","format":"dd/MM/yyyy","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 86501:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna-detail/json/detailItem.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"TrDetail":[{"allowEditing":false,"field":"retur_penjualan_obat_detail_id","headerText":"Id","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"no_urut","headerText":"No Urut","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"id_item","headerText":"Id Item","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":false},{"allowEditing":false,"field":"kode_item","headerText":"Kode Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":170},{"allowEditing":false,"field":"kode_item","headerText":"Kode Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":170},{"allowEditing":false,"field":"nama_item","headerText":"Nama Obat","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true},{"allowEditing":false,"field":"batch_number","headerText":"Batch","editType":"defaultEdit","type":"","format":"","textAlign":"left","headerTextAlign":"Center","visible":true,"width":180},{"allowEditing":false,"field":"expired_date","headerText":"Expired","editType":"defaultEdit","type":"Date","format":"dd/MM/yyyy","textAlign":"left","headerTextAlign":"Center","visible":true,"width":200},{"allowEditing":true,"field":"qty_retur_penjualan_obat","headerText":"Banyak","editType":"defaultEdit","type":"","format":"N2","textAlign":"right","headerTextAlign":"Center","visible":true,"width":200}]}');

/***/ }),

/***/ 85702:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna/json/LookupGridNoRegistrasi.json ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_register","headerText":"No Register","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_rekam_medis","headerText":"No RM","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_pasien","headerText":"Nama Pasien","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"gender","headerText":"Gender","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_debitur","headerText":"Debitur","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_dokter","headerText":"Dokter","type":"string","visible":true}],"filter":[{"field":"no_registrasi","filter":"like","title":"No Register"},{"field":"no_rm","filter":"like","title":"No RM"},{"field":"nama_pasien","filter":"like","title":"Nama PAsien"}]}');

/***/ }),

/***/ 8493:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna/json/gridPasien.config.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"depo","headerText":"Depo","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"pasien","headerText":"Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_rm","headerText":"No Rm","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"no_register","headerText":"No Register","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"tanggal_masuk","headerText":"Tgl Masuk","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"gender","headerText":"Sex","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_debitur","headerText":"Nama Debitur","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 47876:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/refund-obat/refund-obat-irna/json/lookupitem.json ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_item","headerText":"Kode","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_item","headerText":"Nama Barang","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"barcode","headerText":"Barcode","type":"string","visible":true}],"filter":[{"field":"kode_item","filter":"like","title":"KODE"},{"field":"nama_item","filter":"like","title":"NAMA"},{"field":"nama_item","filter":"barcode","title":"BARCODE"}]}');

/***/ }),

/***/ 5652:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-cara-pakai-obat/json/grid.config.json ***!
  \***********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_cara_pakai_obat","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"kode_cara_pakai_obat","headerText":"Kode Cara Pakai Obat","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"cara_pakai_obat","headerText":"Cara Pakai Obat","visible":true},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 92232:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-grup-obat/json/grid.config.json ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_grup_obat","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"kode_grup_obat","headerText":"Kode Grup Obat","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"nama_grup_obat","headerText":"Nama Grup Obat","visible":true},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 60141:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-label-pemakaian-obat/json/grid.config.json ***!
  \****************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_label_pemakaian_obat","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"kode_label_pemakaian_obat","headerText":"Kode Label","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"nama_label_pemakaian_obat","headerText":"Nama Label","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"berapa_kali_per_hari","headerText":"Berapa Kali Per Hari","visible":true},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 84212:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-outlet/json/grid.config.json ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_outlet","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_stockroom","headerText":"Id Stokroom","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"kode_outlet","headerText":"Kode Outlet","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"nama_outlet","headerText":"Outlet","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_tipe_outlet","headerText":"Id Tipe Outlet","visible":true},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 53106:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-rute-pemberian-obat/json/grid.config.json ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_rute_pemberian_obat","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"nama_rute_pemberian_obat","headerText":"Nama Rute Pemberian Obat","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"rute_pasien","headerText":"Rute Pasien","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"ordered","headerText":"Ordered","visible":true},{"allowEditing":false,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_parenteral","headerText":"Parenteral","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 20520:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-data/setup-tipe-outlet/json/grid.config.json ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_tipe_outlet","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"tipe_outlet","headerText":"Tipe Outlet","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"keterangan","headerText":"Keterangan","visible":true}]}');

/***/ }),

/***/ 48544:
/*!********************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-formularium/json/GridSetting.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridGenerik":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_terapi_generik","headerText":"No","type":"string","visible":true,"width":100},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_generik","headerText":"Nama Generik","type":"string","visible":true}]},"GridSediaan":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"jenis_formularium","headerText":"F/NF","visible":true},{"allowEditing":false,"allowSorting":false,"editType":"numericEdit","field":"sediaan_obat","headerText":"Sediaan","type":"string","visible":true},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_restriksi","headerText":"Restriksi","type":"string","visible":true},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"peresepan_maksimal","headerText":"peresepan_maksimal","type":"string","visible":true}],"DataSource":[{"no":1,"fornasi":"F","ket":"Tab 10 mg, Tab 20 mg"},{"no":2,"fornasi":"NF","ket":"Caps"}]},"GridKeterangan":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no","headerText":"No","type":"string","visible":true,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"ket","headerText":"Keteranga","type":"string","visible":true}],"DataSource":[{"no":1,"ket":"Hanya untuk pemakaian pada tindakan anestesi atau perawatan di Rumah Sakit"},{"no":2,"ket":"untuk mengatasi nyeri kanker yang tidak respon terhadap analgetik non narkotik"},{"no":3,"ket":"nyeri pada serangan jantung."}]},"GridPeresepan":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no","headerText":"No","type":"string","visible":true,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"ket","headerText":"Keteranga","type":"string","visible":true}],"DataSource":[{"no":1,"ket":"Tab lepas lambat 10 mg dan 15 mg: 60 tab/bln"}]},"GridItem":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_item","headerText":"Kode Obat","type":"string","visible":true},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"barcode","headerText":"Barcode","type":"string","visible":true},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_item","headerText":"Nama Obat","type":"string","visible":true}]}}');

/***/ }),

/***/ 99131:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-formularium/setup-formularium/json/lookupitem.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_satuan","headerText":"Nama Satuan","type":"string","visible":true}],"filter":[{"field":"msi.nama_item","filter":"like","title":"NAMA OBAT"}]}');

/***/ }),

/***/ 83720:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/setup-formularium/setup-formularium/setup-generik/json/grid.config.json ***!
  \****************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"id_grup_obat","headerText":"Id","visible":false},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"kode_grup_obat","headerText":"Kode Grup Obat","visible":true},{"allowEditing":false,"allowSorting":true,"editType":"defaultEdit","field":"nama_grup_obat","headerText":"Nama Grup Obat","visible":true},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"is_active","headerText":"Status Active","type":"boolean","displayAsCheckBox":true,"visible":true,"width":100}]}');

/***/ }),

/***/ 70114:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irja/json/grid.config.json ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":50}]}');

/***/ }),

/***/ 29816:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/json/LookupGridRuangan.json ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"id_poli","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_poli","headerText":"Kode Ruangan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_poli","headerText":"Nama Ruangan","type":"string","visible":true}],"filter":[{"field":"kode_poli","filter":"like","title":"Kode Ruangan"},{"field":"nama_ruangan","filter":"like","title":"Nama Ruangan"}]}');

/***/ }),

/***/ 72288:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/json/gridPasien.config.json ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"bed_no","headerText":"Bed","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Nama Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 7418:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat-formularium/transaksi-obat-formularium-irna/json/gridResep.config.json ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Nomor Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"status_resep","headerText":"Status Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ }),

/***/ 47394:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/input-resep-irja/json/GridResep.json ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridInputResep":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"rx","headerText":"Rx","type":"string","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_urut","headerText":"No","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_resep","headerText":"Kode Resep","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","visible":true,"width":150},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"satuan","headerText":"Satuan","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"qty_obat","headerText":"Qty","format":"N","textAlign":"Right","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"aturan_pakai","headerText":"Jumlah Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"keterangan_pakai","headerText":"Aturan Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"waktu_pakai","headerText":"Waktu Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"catatan","headerText":"Catatan","type":"string","visible":true,"width":100}]},"GridHistoryResep":{"columns":[],"dataSource":[]}}');

/***/ }),

/***/ 10954:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/input-resep-irja/json/lookupitem.json ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 27917:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/input-resep-irja/json/lookuptemplateresep.json ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 55885:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/input-resep-irja/json/transaksi-billing.config.json ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"LookupPasien":{"columns":[{"allowEditing":true,"allowSorting":true,"displayAsCheckBox":true,"editType":"booleanEdit","field":"cek","headerText":"CEK","visible":false,"width":150},{"allowEditing":true,"allowSorting":true,"editType":"numericEdit","field":"id_person","format":"N2","headerText":"PERSON ID","type":"number","visible":false,"width":150},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_register","headerText":"NO. REGISTER","type":"string","visible":true,"width":100},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_pasien","headerText":"NAMA PASIEN","type":"string","visible":true,"width":200},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"no_rekam_medis","headerText":"NO. RM","type":"string","visible":true,"width":100},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"tgl_admisi","headerText":"TGL. ADMISI","type":"Date","format":"dd/MM/yyyy","visible":true,"width":100},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_kelas","headerText":"KELAS","type":"string","visible":true,"width":70},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_debitur","headerText":"DEBITUR","type":"string","visible":true,"width":150}],"filter":[{"field":"p.no_identitas","filter":"like","title":"NO. IDENTITAS"},{"field":"tp.no_register","filter":"like","title":"NO. REGISTER"},{"field":"concat(p.nama_depan, \' \',p.nama_belakang)","filter":"like","title":"NAMA PASIEN"},{"field":"tp.no_rekam_medis","filter":"like","title":"NO. RM"}]}}');

/***/ }),

/***/ 9523:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irda/json/LookupGridRuangan.json ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"id_poli","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_poli","headerText":"Kode Ruangan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_poli","headerText":"Nama Ruangan","type":"string","visible":true}],"filter":[{"field":"kode_poli","filter":"like","title":"Kode Ruangan"},{"field":"nama_ruangan","filter":"like","title":"Nama Ruangan"}]}');

/***/ }),

/***/ 75149:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irda/json/gridPasien.config.json ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"no_register","headerText":"No Register","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Nama Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 12074:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irda/json/gridResep.config.json ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Nomor Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"status_resep","headerText":"Status Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":50},{"field":"harga_jual_apotek","headerText":"Harga","format":"N2","width":70},{"field":"total_harga","headerText":"Total Harga","textAlign":"Right","format":"N2","width":70}]}');

/***/ }),

/***/ 36914:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irja/json/grid.config.json ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":50}]}');

/***/ }),

/***/ 12369:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irna/json/LookupGridRuangan.json ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"id_poli","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_poli","headerText":"Kode Ruangan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_poli","headerText":"Nama Ruangan","type":"string","visible":true}],"filter":[{"field":"kode_poli","filter":"like","title":"Kode Ruangan"},{"field":"nama_ruangan","filter":"like","title":"Nama Ruangan"}]}');

/***/ }),

/***/ 40951:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irna/json/gridPasien.config.json ***!
  \*******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nama_pasien","headerText":"Nama Pasien","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"bed_no","headerText":"Bed","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Nama Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}]}');

/***/ }),

/***/ 49504:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/transaksi-obat/transaksi-obat-irna/json/gridResep.config.json ***!
  \******************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_register","headerText":"Id","type":"number","format":"","textAlign":"left","visible":false,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Nomor Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Dokter","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"status_resep","headerText":"Status Resep","type":"string","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ })

}]);