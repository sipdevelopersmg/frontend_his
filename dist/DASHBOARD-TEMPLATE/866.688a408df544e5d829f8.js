(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[866],{

/***/ 5140:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/daftar-resep-formularium-irda/daftar-resep-formularium-irda.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaftarResepFormulariumIrdaComponent": () => (/* binding */ DaftarResepFormulariumIrdaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 70548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irda.service */ 33392);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component */ 55682);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = ["GridResepRacikan"];
const _c1 = ["GridData"];
function DaftarResepFormulariumIrdaComponent_ng_template_14_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lihat Detail Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DaftarResepFormulariumIrdaComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DaftarResepFormulariumIrdaComponent_ng_template_14_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const data_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.handleClickDetail(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DaftarResepFormulariumIrdaComponent_ng_template_14_a_8_Template, 2, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, data_r3.headerText), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, data_r3.key), " - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r3.count, " ", data_r3.field == "nama_dokter" ? "resep" : "obat", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", data_r3.field == "nomor_resep");
} }
const _c2 = function () { return { wrapMode: "Both" }; };
class DaftarResepFormulariumIrdaComponent {
    constructor(router, encryptionService, resepFormulariumIrdaService) {
        this.router = router;
        this.encryptionService = encryptionService;
        this.resepFormulariumIrdaService = resepFormulariumIrdaService;
        this.ButtonNav = [
            { Id: 'Add', Captions: 'Buat Resep Baru', Icons1: 'fa-plus fa-sm' },
            { Id: 'pulang', Captions: 'Resep Pulang', Icons1: 'fa-home fa-sm' },
        ];
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.FilterColumnDatasource = [
            { text: 'Nomor Resep', value: 'trd.nomor_resep' }
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.dataSource = [];
        this.dataSourceChild = [];
        this.keterangan = (field, data1) => {
            return data1['nama_rute_pemberian_obat'] + ', sehari ' +
                data1['qty_harian'] + ' ' + data1['nama_satuan'] + ' ' + data1['ket_label'] + ' ' + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.GridGroupSettings = { showDropArea: false, columns: ['nama_dokter', 'nomor_resep'] };
    }
    ngAfterViewInit() {
        // this.GridData.Grid.refresh();
    }
    ngOnInit() {
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        };
        this.resepFormulariumIrdaService.onInitList();
        this.handlePencarianFilter([]);
    }
    rowDataBound(args) {
        // console.log(args.data.is_racikan)
        // let is_racikan = args.data.is_racikan;
        // if (!is_racikan) {
        //     //here hide which parent row has no child records
        //     args.row.querySelector('td').innerHTML = " ";
        //     args.row.querySelector('td').className = "e-customizedExpandcell";
        // } else {
        // //     // args.row.classList.add('is-racikan');
        // }
    }
    onDataBound() {
        // this.GridResepRacikan.detailRowModule.expandAll();
    }
    handlePencarianFilter(args) {
        this.resepFormulariumIrdaService.onGetAllByResepActiveByRegister(args).subscribe((result) => {
            this.dataSource = result.data;
            this.mapingRacikan(result.data);
            this.GridResepRacikan.refresh();
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
    handleClickDetail(args) {
        console.log(args.items);
        const id = this.encryptionService.encrypt(JSON.stringify(args.items[0].resep_id));
        this.router.navigate(['Dokter/resep-formularium-irda/view-resep-formularium-irda', id, "GRAHCIS"]);
    }
    handleClickButtonNav(args) {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('Dokter/resep-formularium-irda/input-resep-formularium-irda');
                break;
            case 'Edit':
                const pemesanan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.resep_id));
                this.router.navigate(['Dokter/resep-formularium-irda/input-resep-formularium-irda', pemesanan_id, "GRAHCIS"]);
                break;
            case 'pulang':
                this.router.navigateByUrl('Dokter/resep-formularium-irda/pulang-resep-formularium-irda');
                break;
            default:
                break;
        }
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
        console.log(this.SelectedData);
    }
}
DaftarResepFormulariumIrdaComponent.ɵfac = function DaftarResepFormulariumIrdaComponent_Factory(t) { return new (t || DaftarResepFormulariumIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_2__.ResepFormulariumIrdaService)); };
DaftarResepFormulariumIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DaftarResepFormulariumIrdaComponent, selectors: [["app-daftar-resep-formularium-irda"]], viewQuery: function DaftarResepFormulariumIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.GridData = _t.first);
    } }, decls: 16, vars: 24, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [3, "FilterColumnDatasource", "handle-pencarian"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowGrouping", "groupSettings", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridResepRacikan", ""], ["field", "nama_dokter", "headerText", "Dokter", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nomor_resep", "headerText", "Nomor Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Pemakain", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["groupSettingsCaptionTemplate", ""], ["title", "", 1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", 3, "click"], [1, "mb-0", 2, "font-size", "15px"], [1, "mb-0"], ["class", "cursor-pointer", "title", "lihat detail resep", 4, "ngIf"], ["title", "lihat detail resep", 1, "cursor-pointer"]], template: function DaftarResepFormulariumIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickButtonNav", function DaftarResepFormulariumIrdaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mol-offcanvas-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handle-pencarian", function DaftarResepFormulariumIrdaComponent_Template_mol_offcanvas_filter_handle_pencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ejs-grid", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rowDataBound", function DaftarResepFormulariumIrdaComponent_Template_ejs_grid_rowDataBound_5_listener($event) { return ctx.rowDataBound($event); })("dataBound", function DaftarResepFormulariumIrdaComponent_Template_ejs_grid_dataBound_5_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "e-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "e-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "e-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "e-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "e-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "e-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DaftarResepFormulariumIrdaComponent_ng_template_14_Template, 9, 9, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("FilterColumnDatasource", ctx.FilterColumnDatasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowGrouping", true)("groupSettings", ctx.GridGroupSettings)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 220)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__.MolOffcanvasFilterComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.AggregateColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [""] });


/***/ }),

/***/ 72742:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/input-resep-formularium-irda.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputResepFormulariumIrdaComponent": () => (/* binding */ InputResepFormulariumIrdaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/lookupitem.json */ 40352);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 95084);
/* harmony import */ var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json/GridResep.json */ 27838);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irda.service */ 33392);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service */ 88817);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_interval_aturan_pakai_setup_interval_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-interval-aturan-pakai/setup-interval-aturan-pakai.service */ 72568);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);































const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["modalTemplateResep"];
const _c3 = ["MaritalOutletDropdown"];
const _c4 = ["GridResepRacikan"];
const _c5 = ["itemTemplate"];
function InputResepFormulariumIrdaComponent_div_12_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", data_r13.nama_generik, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r13.sediaan_obat);
} }
function InputResepFormulariumIrdaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ejs-dropdownlist", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filtering", function InputResepFormulariumIrdaComponent_div_12_Template_ejs_dropdownlist_filtering_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r14.onFiltering($event); })("change", function InputResepFormulariumIrdaComponent_div_12_Template_ejs_dropdownlist_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r16.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, InputResepFormulariumIrdaComponent_div_12_ng_template_8_Template, 7, 2, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r0.data)("fields", ctx_r0.fields)("placeholder", ctx_r0.text)("query", ctx_r0.query)("sortOrder", ctx_r0.sorting)("allowFiltering", true);
} }
function InputResepFormulariumIrdaComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_div_13_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r17.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_div_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r19.handelClickRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function InputResepFormulariumIrdaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Kemasan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ejs-dropdownlist", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_div_14_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r21.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 3, ctx_r2.setupMetodeRacikanService.dataSource))("fields", ctx_r2.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function InputResepFormulariumIrdaComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ejs-combobox", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_div_32_Template_ejs_combobox_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r23.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r3.dataSourceSatuanAturanPakai)("fields", ctx_r3.DropdownsatuanPakaiFields);
} }
function InputResepFormulariumIrdaComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_ng_template_95_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimpan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_ng_template_95_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r27.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_ng_template_95_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r28.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
const _c6 = function () { return { wrapMode: "Both" }; };
class InputResepFormulariumIrdaComponent {
    constructor(formBuilder, resepFormulariumIrdaService, setupMetodeRacikanService, setupRutePemberianObatService, setupSatuanAturanPakaiService, setupIntervalAturanPakaiService, setupTambahanAturanPakaiService, setupLabelPemakaianObatService, utilityService, modalService, router, encryptionService, activatedRoute, daftarPasienService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrdaService = resepFormulariumIrdaService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.setupRutePemberianObatService = setupRutePemberianObatService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupIntervalAturanPakaiService = setupIntervalAturanPakaiService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.daftarPasienService = daftarPasienService;
        this.setupOutletService = setupOutletService;
        /**
          * Variable Button Nav
          * @ButtonNav: ButtonNavModel[]
          */
        this.ButtonNav = [
            { Id: "Kembali", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
            { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
            { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
            { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
        ];
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA.GET_RACIKAN;
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA.GET_TEMPLATE_RESEP;
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__, 2)));
        this.DropdownAturanFields = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };
        this.DropdownRuteFields = { text: "nama_rute_pemberian_obat", value: "id_rute_pemberian_obat" };
        this.DropdownPemakaianFields = { text: "interval_aturan_pakai", value: "id_interval_aturan_pakai" };
        this.DropdownLabelFields = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.FormAddObatState = "input";
        // ** Satuan 
        this.SatuanObat = "-";
        this.DropdownObatFields = { text: 'nama_obat', value: 'id_item' };
        this.DropdownMetodeRacikanFields = { text: 'metode_racikan', value: 'id_metode_racikan' };
        this.DropdownsatuanPakaiFields = { text: "satuan_aturan_pakai", value: "id_satuan_aturan_pakai" };
        this.NamaObatDatasource = [];
        this.dataSourceTambahanAturanPakai = [];
        this.dataSourceLabelPemakaian = [];
        this.dataSourceSatuanAturanPakai = [];
        // ** Waktu Pakai
        this.WaktuPakai = [];
        // ** Grid Daftar Obat Properties
        this.GridDaftarObatEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.GridDaftarObatDataSource = [];
        this.GridDaftarObatColumns = /*#__PURE__*/ (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.GridDetailResepRacikanDatasource = [];
        this.GridResepRacikanDatasource = [];
        this.DataRacikan = [];
        this.newdetail = [];
        this.baru = 0;
        this.data_header = null;
        this.counter = 0;
        this.counterRacikan = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.inputObat = false;
        this.whereField = "psg.nama_generik";
        this.select = "'nama_generik', 'id_formularium','sediaan_obat'";
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_generik', value: 'id_formularium' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.text = "Select a Obat";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
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
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.keterangan = (field, data1) => {
            return data1['rute_pemberian_obat'] + ', sehari ' +
                data1['qty_harian'] + ' ' + data1['nama_satuan'] + ' ' + data1['ket_label'] + ' ' + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.dataUbah = null;
        this.updateResepDokter = false;
        this.pulang = false;
        this.idArry = [];
        this.setIdOutlet = 0;
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [1, []],
            metode_racikan: ['Puyer', []],
            id_formularium: [null, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            jumlah_hari: [1, []],
            qty_harian: [1, []],
            qty_resep: [1, []],
            nama_satuan: ['-', []],
            id_rute_pemberian_obat: [null, []],
            rute_pemberian_obat: ['', []],
            id_satuan_aturan_pakai: [null, []],
            satuan_aturan_pakai: ['', []],
            label: ['', []],
            ket_label: ['', []],
            id_label_pemakaian_obat: [null, []],
            label_pemakaian_obat: ['', []],
            aturan: ['', []],
            ket_aturan: ['', []],
            id_tambahan_aturan_pakai: [null, []],
            label_tambahan_aturan_pakai_obat: ['', []],
        });
        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepFormulariumIrdaService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                else {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', '', true);
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
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_formularium;
                        document.getElementsByName("nama_satuan")[0].value = args.itemData.sediaan_obat;
                        console.log('currentItem', currentIdItem);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_formularium;
                        this.itemsObj.value = currentIdItem;
                    }, 10);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepFormulariumIrdaService.dataSourceChildGrid.next(dataSourceChild);
        this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataSourceGrid.value);
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
                { field: "counter", headerText: 'counter', width: 100, visible: false },
                { field: "counterRacikan", headerText: 'counterRacikan', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_formularium", headerText: 'id', width: 100, visible: false },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                console.log('row selected', SelectedDataRacikanObat);
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    // (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_harian;
                    SelectedDataRacikanObat = null;
                }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_formularium = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_formularium = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
            }
        };
        this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
            this.dataSourceLabelPemakaian = result.data;
        });
        this.setupMetodeRacikanService.setDataSource();
        // this.resepFormulariumIrdaService.setDataObat([]);
        this.setupRutePemberianObatService.setDataSource();
        this.setupIntervalAturanPakaiService.setDataSource();
        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceTambahanAturanPakai = result.data;
        });
        this.setupSatuanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceSatuanAturanPakai = result.data;
        });
        this.resepFormulariumIrdaService.reset();
        this.setupOutletService.setDataSource();
        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/I';
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (typeof this.activatedRoute.snapshot.params["id"] !== 'undefined') {
                let idString;
                idString = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
                this.idArry = idString.split(',');
                console.log(idString);
                console.log(this.idArry);
                if (this.idArry[1] == 'pulang') {
                    this.pulang = true;
                    this.ButtonNav = [
                        { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                        { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Simpan Resep Pulang" },
                    ];
                }
                else {
                    this.ButtonNav = [
                        { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                        { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Ubah Resep Dokter" },
                    ];
                }
                this.updateResep(parseInt(this.idArry[0]));
            }
        }, 1);
    }
    updateResep(id) {
        this.resepFormulariumIrdaService.onGetById(id).subscribe((result) => {
            this.dataUbah = result.data;
            this.setIdOutlet = result.data.id_outlet;
            this.MaritalOutletDropdown.value = result.data.id_outlet;
            this.heandleSelectedTemplateResep(result.data);
            this.updateResepDokter = true;
        });
    }
    handleClickTambahObat() {
        this.inputObat = true;
        this.tanggal_mulai_text.setValue(this.utilityService.onFormatDate(this.tanggal_mulai.value, 'Do MMMM yyyy'));
        this.tanggal_sampai_text.setValue(this.utilityService.onFormatDate(this.tanggal_sampai.value, 'Do MMMM yyyy'));
    }
    handleChangeOutlet(args) {
        this.setIdOutlet = args.value;
    }
    onLoad(args) {
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
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.sediaan_obat);
        this.nama_obat.setValue(args.itemData.nama_generik);
    }
    handleChangeLabel(args) {
        this.label_pemakaian_obat.setValue('');
        this.id_label_pemakaian_obat.setValue(args.value);
        this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        this.qty_harian.setValue(args.itemData.berapa_kali_per_hari);
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
    handleChangeRacikan(args) {
        if (args) {
            this.nama_satuan.setValue('PUYER');
        }
        else {
            this.nama_satuan.setValue("-");
        }
    }
    handleChangeNamaRacikan() {
        this.set_racikan_id.setValue(null);
    }
    handelClickRacikan() {
        this.LookupRacikan.onOpenModal();
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
        this.nama_satuan.setValue(args.itemData.metode_racikan);
    }
    handleChangeRute(args) {
        this.rute_pemberian_obat.setValue(args.itemData.nama_rute_pemberian_obat);
    }
    handleChangePemakaian(args) {
        console.log(args);
        //   this.interval_aturan_pakai.setValue(args.itemData.interval_aturan_pakai);
    }
    handleChangeSatuanAturan(args) {
        this.satuan_aturan_pakai.setValue(args.itemData.satuan_aturan_pakai);
    }
    handleSelectedRacikan(args) {
        args.is_racikan = true;
        this.set_racikan_id.setValue(args.set_racikan_id);
        this.nama_obat.setValue(args.nama_obat);
        this.nama_racikan.setValue(args.nama_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.metode_racikan.setValue(args.metode_racikan);
        this.id_rute_pemberian_obat.setValue(args.id_rute_pemberian_obat);
        this.rute_pemberian_obat.setValue(args.nama_rute_pemberian_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.nama_satuan.setValue(args.metode_racikan);
        this.label.setValue(args.id_label_pemakaian_obat);
        this.id_label_pemakaian_obat.setValue(args.id_label_pemakaian_obat);
        this.ket_label.setValue(args.ket_label);
        this.id_satuan_aturan_pakai.setValue(args.id_satuan_aturan_pakai);
        this.satuan_aturan_pakai.setValue(args.satuan_aturan_pakai);
        this.aturan.setValue(args.id_tambahan_aturan_pakai);
        this.label_tambahan_aturan_pakai_obat.setValue(args.label_tambahan_aturan_pakai_obat);
        this.id_tambahan_aturan_pakai.setValue(args.id_tambahan_aturan_pakai);
        this.ket_aturan.setValue(args.ket_aturan);
        let detail = [];
        // detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counterRacikan = counterRacikan;
            element.komposisi = parseInt(element.kandungan_obat);
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        console.log(detail);
        this.DataRacikan = detail;
    }
    heandleSelectedTemplateResep(args) {
        let obat = [];
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
            element.rute_pemberian_obat = element.nama_rute_pemberian_obat;
            // this.resepFormulariumIrdaService.addDetail(element);
            obat.push(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });
        });
        this.dataSourceGrid.next(obat);
        this.resepFormulariumIrdaService.dataSourceChildGrid.next(detail);
        this.resepFormulariumIrdaService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.isGetFromTemplate = true;
    }
    handleAddObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat;
            this.counter++;
            FormAddObat.counter = this.counter;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            //   this.resepFormulariumIrdaService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value;
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataDetail);
            let racikan;
            racikan = this.GridResepRacikan.childGrid.dataSource;
            console.log(racikan);
            if (this.is_racikan.value && this.DataRacikan.length > 0) {
                console.log(this.DataRacikan);
                this.DataRacikan.forEach((item, index) => {
                    item.counter = this.counter;
                    racikan.push(item);
                });
                this.DataRacikan = [];
            }
            console.log(racikan);
            this.resepFormulariumIrdaService.dataSourceChildGrid.next(racikan);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }
    validasi(FormData) {
        let message = [];
        let htmlSelection = '';
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi');
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi');
            }
        }
        else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih');
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih');
            }
        }
        if (FormData.rute_pemberian_obat == '' || FormData.rute_pemberian_obat == null) {
            message.push('Rute Pemberian Obat Obat belum di isi');
        }
        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi');
        }
        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi');
        }
        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value, index) => {
                htmlSelection += `<li>${value}</li>`;
            });
            htmlSelection += `</ul></div>`;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            });
            return false;
        }
        else {
            return true;
        }
    }
    onResetFormObat() {
        this.set_racikan_id.setValue(null);
        this.id_metode_racikan.setValue(null);
        this.metode_racikan.setValue('');
        this.id_formularium.setValue(null);
        this.nama_racikan.setValue('');
        this.nama_obat.setValue('');
        this.nama_satuan.setValue('-');
        this.SatuanObat = "";
        this.is_racikan.setValue(false);
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value;
            dataDetail[this.currentIndex] = FormAddObat;
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat();
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
    }
    // ** Grid Daftar Obat method
    onInitalizedGrid(component) {
        this.gridDaftarObat = component;
    }
    // ** Grid Daftar Obat method
    onToolbarClick(args) {
        switch (args.item.id) {
            case "edit":
                //   this.FormAddObat.setValue(this.SelectedDataObat);
                this.onEditData();
                this.FormAddObatState = "edit";
                break;
            case "delete":
                let dataObat = this.resepFormulariumIrdaService.dataSourceParentGrid.value;
                dataObat.splice(this.currentIndex, 1);
                this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataObat);
                this.dataSourceGrid.next(dataObat);
                this.GridResepRacikan.refresh();
                break;
            default:
                break;
        }
        ;
    }
    onEditData() {
        let data = this.SelectedDataObat;
        console.log(data);
        this.FormAddObat.setValue({
            counter: data.counter,
            no_urut: data.no_urut,
            is_racikan: data.is_racikan,
            set_racikan_id: data.set_racikan_id,
            id_metode_racikan: data.id_metode_racikan,
            metode_racikan: data.metode_racikan,
            id_formularium: data.id_formularium,
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
            jumlah_hari: data.jumlah_hari,
            qty_harian: data.qty_harian,
            id_rute_pemberian_obat: data.id_rute_pemberian_obat,
            rute_pemberian_obat: data.nama_rute_pemberian_obat
        });
    }
    onActionComplete(args) {
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataSourceParent);
        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    Insert() {
        if (this.setIdOutlet == 0) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '');
            return false;
        }
        this.data_header = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.setIdOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'D',
            nama_template: '',
            tanggal_resep: moment__WEBPACK_IMPORTED_MODULE_0___default()().format()
        };
        this.newdetail = this.resepFormulariumIrdaService.dataSourceParentGrid.value.filter((item) => {
            return item.is_racikan && !item.set_racikan_id;
        });
        this.baru = 0;
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(this.modalTemplateResep, Object.assign({}, { class: 'modal-lg' }));
        }
        else {
            this.methodConfirmSetRacikan(0);
        }
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.data_header.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Apakah Anda Ingin Menyimpan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya Simpan Sebagai Template Racikan',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1;
                }
                else {
                    this.baru = 0;
                }
                this.methodInsert(this.data_header, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.data_header, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepFormulariumIrdaService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                // this.resepFormulariumIrdaService.reset();
                this.isGetFromTemplate = false;
                this.router.navigateByUrl('Dokter/resep-formularium-irda/daftar-resep-formularium-irda');
            });
        });
    }
    ubahResep() {
        if (this.pulang) {
            this.resepFormulariumIrdaService.pulangResepRawatInap(this.dataUbah, 0).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Simpan Resep Pulang', result.message)
                    .then(() => {
                    const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                    this.router.navigate(['Dokter/resep-formularium-irda/view-resep-formularium-irda', id, "GRAHCIS"]);
                });
            });
        }
        else {
            this.resepFormulariumIrdaService.ubahResepRawatInap(this.dataUbah).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Resep Ini Berhasil Di Ubah', result.message)
                    .then(() => {
                    const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                    this.router.navigate(['Dokter/resep-formularium-irda/view-resep-formularium-irda', id, "GRAHCIS"]);
                });
            });
        }
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali_update":
                const id = this.encryptionService.encrypt(JSON.stringify(this.dataUbah.resep_id));
                this.router.navigate(['Dokter/resep-formularium-irda/view-resep-formularium-irda', id, "GRAHCIS"]);
                break;
            case "ubah":
                this.ubahResep();
                break;
            case "Kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irda/daftar-resep-formularium-irda');
                break;
            case "Template":
                this.handelClickTemplateResep();
                break;
            case "Reset":
                // this.resepFormulariumIrdaService.reset();
                this.isGetFromTemplate = false;
                window.location.reload();
                break;
            case "Simpan":
                // console.log('childernya',this.dataScourceGridChild)  
                this.resepFormulariumIrdaService.dataSourceChildGrid.next(this.dataScourceGridChild);
                this.Insert();
                // this.resepFormulariumIrdaService.saveResep();
                break;
            default:
                break;
        }
    }
    handelClickTemplateResep() {
        this.LookupTemplateResep.onOpenModal();
    }
    get tanggal_mulai() { return this.FormAddObat.get('tanggal_mulai'); }
    ;
    get tanggal_sampai() { return this.FormAddObat.get('tanggal_sampai'); }
    ;
    get tanggal_mulai_text() { return this.FormAddObat.get('tanggal_mulai_text'); }
    ;
    get tanggal_sampai_text() { return this.FormAddObat.get('tanggal_sampai_text'); }
    ;
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_formularium() { return this.FormAddObat.get('id_formularium'); }
    ;
    get nama_racikan() { return this.FormAddObat.get('nama_racikan'); }
    get nama_obat() { return this.FormAddObat.get('nama_obat'); }
    ;
    get jumlah_hari() { return this.FormAddObat.get('jumlah_hari'); }
    get qty_harian() { return this.FormAddObat.get('qty_harian'); }
    get qty_resep() { return this.FormAddObat.get('qty_resep'); }
    get nama_satuan() { return this.FormAddObat.get('nama_satuan'); }
    get id_rute_pemberian_obat() { return this.FormAddObat.get('id_rute_pemberian_obat'); }
    get rute_pemberian_obat() { return this.FormAddObat.get('rute_pemberian_obat'); }
    get jumlah_satuan_aturan_pakai() { return this.FormAddObat.get('jumlah_satuan_aturan_pakai'); }
    get id_satuan_aturan_pakai() { return this.FormAddObat.get('id_satuan_aturan_pakai'); }
    get satuan_aturan_pakai() { return this.FormAddObat.get('satuan_aturan_pakai'); }
    //   get jumlah_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('jumlah_interval_aturan_pakai'); }
    //   get id_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_interval_aturan_pakai'); }
    //   get interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('interval_aturan_pakai'); }
    get aturan() { return this.FormAddObat.get('aturan'); }
    get ket_aturan() { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai() { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai_obat() { return this.FormAddObat.get('label_tambahan_aturan_pakai_obat'); }
    get label() { return this.FormAddObat.get('label'); }
    get ket_label() { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat() { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat() { return this.FormAddObat.get('label_pemakaian_obat'); }
}
InputResepFormulariumIrdaComponent.ɵfac = function InputResepFormulariumIrdaComponent_Factory(t) { return new (t || InputResepFormulariumIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_6__.ResepFormulariumIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_7__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_8__.SetupRutePemberianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_interval_aturan_pakai_setup_interval_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__.SetupIntervalAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_12__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_15__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_16__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_17__.SetupOutletService)); };
InputResepFormulariumIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: InputResepFormulariumIrdaComponent, selectors: [["app-input-resep-formularium-irda"]], viewQuery: function InputResepFormulariumIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.MaritalOutletDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, decls: 97, vars: 87, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "form-irna", 3, "formGroup"], [1, "row"], [1, "col-lg-4"], [1, "row", "mb-2"], [1, "col-lg-2", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-10 col-md-11 col-sm-11 col-xs-11", 4, "ngIf"], ["class", "col-lg-10 col-md-10 col-sm-10 col-xs-10", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-lg-12"], ["for", "kemasan", 1, "form-label"], ["id", "DropdownRutePemberian", "formControlName", "id_rute_pemberian_obat", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["for", "label", 1, "form-label"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "row mb-2", 4, "ngIf"], ["for", "NumericQty", 1, "form-label"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-6"], ["id", "NumericQty", "formControlName", "qty_harian", 3, "format", "showSpinButton", "readonly", "showClearButton", "ste"], ["id", "NumericQty", "formControlName", "jumlah_hari", 1, "form_paragraf", 3, "format", "showSpinButton", "showClearButton", "min", "ste"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "hidden", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "hidden", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [1, "col-lg-8"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "allowTextWrap", "textWrapSettings", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Satuan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "metode_racikan", "headerText", "Kemasan Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-11", "col-sm-11", "col-xs-11"], ["id", "DropdownObat", "formControlName", "id_formularium", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], ["itemTemplate", ""], [1, "col-6"], [1, "name"], [1, "city"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function InputResepFormulariumIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onClickButtonNav", function InputResepFormulariumIrdaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, InputResepFormulariumIrdaComponent_div_12_Template, 10, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, InputResepFormulariumIrdaComponent_div_13_Template, 10, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, InputResepFormulariumIrdaComponent_div_14_Template, 10, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Rute Pemberian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ejs-combobox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_Template_ejs_combobox_change_22_listener($event) { return ctx.handleChangeRute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "ejs-dropdownlist", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_Template_ejs_dropdownlist_change_31_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, InputResepFormulariumIrdaComponent_div_32_Template, 8, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "ejs-combobox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_Template_ejs_combobox_change_39_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](45, "Qty/Hari");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](46, "ejs-numerictextbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "Untuk Berapa Hari");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](52, "ejs-numerictextbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_Template_button_click_55_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumIrdaComponent_Template_button_click_59_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](60, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](62, "\u00A0Edit Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](63, "org-look-up-hirarki", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumIrdaComponent_Template_org_look_up_hirarki_onGetSelectedData_63_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "org-look-up-hirarki", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumIrdaComponent_Template_org_look_up_hirarki_onGetSelectedData_65_listener($event) { return ctx.handleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](70, "atm-label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](72, "ejs-dropdownlist", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumIrdaComponent_Template_ejs_dropdownlist_change_72_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "ejs-grid", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toolbarClick", function InputResepFormulariumIrdaComponent_Template_ejs_grid_toolbarClick_77_listener($event) { return ctx.onToolbarClick($event); })("load", function InputResepFormulariumIrdaComponent_Template_ejs_grid_load_77_listener($event) { return ctx.onLoad($event); })("rowDataBound", function InputResepFormulariumIrdaComponent_Template_ejs_grid_rowDataBound_77_listener($event) { return ctx.rowDataBound($event); })("dataBound", function InputResepFormulariumIrdaComponent_Template_ejs_grid_dataBound_77_listener() { return ctx.onDataBound(); })("rowSelected", function InputResepFormulariumIrdaComponent_Template_ejs_grid_rowSelected_77_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function InputResepFormulariumIrdaComponent_Template_ejs_grid_actionComplete_77_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](80, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](81, "e-column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](82, "e-column", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](83, "e-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](84, "e-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](85, "e-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](86, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](87, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](88, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](89, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](90, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](91, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](92, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](93, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](94, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](95, InputResepFormulariumIrdaComponent_ng_template_95_Template, 24, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](23, 80, ctx.setupRutePemberianObatService.dataSource))("fields", ctx.DropdownRuteFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("readonly", true)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false)("min", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid)("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid)("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](74, 82, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](79, 84, ctx.dataSourceGrid))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](86, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 200)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__.ComboBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__.DropDownListComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_29__.NumericTextBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_19__.OrgLookUpHirarkiComponent, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_20__.AtmLabelComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 64961:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/pulang-resep-formularium-irda.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulangResepFormulariumIrdaComponent": () => (/* binding */ PulangResepFormulariumIrdaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/GridResep.json */ 82988);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json/lookupitem.json */ 44354);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 14260);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irda.service */ 33392);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);






























const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["GridResepRacikan"];
const _c3 = ["itemTemplate"];
const _c4 = ["modalTemplateResep"];
function PulangResepFormulariumIrdaComponent_div_21_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r13.nama_generik, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r13.sediaan_obat);
} }
function PulangResepFormulariumIrdaComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ejs-dropdownlist", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("filtering", function PulangResepFormulariumIrdaComponent_div_21_Template_ejs_dropdownlist_filtering_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r14.onFiltering($event); })("change", function PulangResepFormulariumIrdaComponent_div_21_Template_ejs_dropdownlist_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r16.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, PulangResepFormulariumIrdaComponent_div_21_ng_template_10_Template, 7, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r1.data)("fields", ctx_r1.fields)("placeholder", ctx_r1.text)("query", ctx_r1.query)("sortOrder", ctx_r1.sorting)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.nama_satuan.value, " ");
} }
function PulangResepFormulariumIrdaComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_div_22_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r17.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_div_22_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r19.handelClickRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function PulangResepFormulariumIrdaComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Kemasan Racikan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ejs-dropdownlist", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_div_23_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r21.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 3, ctx_r3.setupMetodeRacikanService.dataSource))("fields", ctx_r3.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function PulangResepFormulariumIrdaComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ejs-combobox", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_div_38_Template_ejs_combobox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r23.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r4.dataSourceSatuanAturanPakai)("fields", ctx_r4.DropdownsatuanPakaiFields);
} }
function PulangResepFormulariumIrdaComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_ng_template_83_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimapan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_ng_template_83_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r27.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_ng_template_83_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r28.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
class PulangResepFormulariumIrdaComponent {
    constructor(formBuilder, resepFormulariumIrdaService, setupLabelPemakaianObatService, setupTambahanAturanPakaiService, setupSatuanAturanPakaiService, setupMetodeRacikanService, renderer, daftarPasienService, router, modalService, utilityService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrdaService = resepFormulariumIrdaService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.renderer = renderer;
        this.daftarPasienService = daftarPasienService;
        this.router = router;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.setupOutletService = setupOutletService;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'simpan', Captions: 'Simpan Resep Pulang', Icons1: 'fas fa-save fa-sm' },
        ];
        this.onSetTemplateResep = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN;
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_TEMPLATE_RESEP;
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_4__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.isGetFromTemplate = false;
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
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.whereField = "psg.nama_generik";
        this.select = "'nama_generik', 'id_formularium','sediaan_obat'";
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_generik', value: 'id_formularium' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.text = "Select a Obat";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                e.updateData(this.data, query);
            }
        };
        //=====================
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.dataheader = null;
        this.baru = 0;
        this.setIdOutlet = 0;
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [null, []],
            metode_racikan: ['', []],
            id_formularium: [null, []],
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
            label_tambahan_aturan_pakai_obat: ['', []],
        });
        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepFormulariumIrdaService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                else {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', '', true);
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
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownList({
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
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_formularium;
                        document.getElementsByName("nama_satuan")[0].value = args.itemData.sediaan_obat;
                        console.log('currentItem', currentIdItem);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_formularium;
                        this.itemsObj.value = currentIdItem;
                    }, 10);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepFormulariumIrdaService.dataSourceChildGrid.next(dataSourceChild);
        this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataSourceGrid.value);
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
                { field: "counter", headerText: 'counter', width: 100, visible: false },
                { field: "counterRacikan", headerText: 'counterRacikan', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_formularium", headerText: 'id', width: 100, visible: false },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                console.log('row selected', SelectedDataRacikanObat);
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    //   (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                    SelectedDataRacikanObat = null;
                }
                // if (args.requestType === 'beginEdit'){
                //     SelectedDataRacikanObat = args.rowData;
                // }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_formularium = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_formularium = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
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
        this.resepFormulariumIrdaService.setDataObat([]);
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;
        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/J';
        this.setupOutletService.setDataSource();
    }
    onLoad(args) {
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
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.sediaan_obat);
        this.nama_obat.setValue(args.itemData.nama_generik);
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
        this.LookupRacikan.onOpenModal();
    }
    handelClickTemplateResep() {
        this.LookupTemplateResep.onOpenModal();
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
    }
    handleChangeOutlet(args) {
        this.setIdOutlet = args.value;
    }
    heandleSelectedRacikan(args) {
        this.counter++;
        args.counter = this.counter;
        args.is_racikan = true;
        args.no_urut = 0;
        args.id_formularium = null;
        args.nama_satuan = null;
        args.label = null;
        args.nama_racikan = args.nama_obat;
        args.label = args.ket_label;
        args.aturan = args.ket_aturan;
        // this.resepFormulariumIrdaService.addDetail(args);
        let dataObat = this.dataSourceGrid.value;
        dataObat.push(args);
        this.dataSourceGrid.next(dataObat);
        this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataObat);
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counter = this.counter;
            element.counterRacikan = counterRacikan;
            element.komposisi = element.kandungan_obat;
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        this.resepFormulariumIrdaService.dataSourceChildGrid.next(detail);
        this.GridResepRacikan.refresh();
    }
    heandleSelectedTemplateResep(args) {
        console.log(args);
        let obat = [];
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
            // this.resepFormulariumIrdaService.addDetail(element);
            obat.push(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });
        });
        this.dataSourceGrid.next(obat);
        this.resepFormulariumIrdaService.dataSourceChildGrid.next(detail);
        this.resepFormulariumIrdaService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.onSetTemplateResep.emit(true);
    }
    handleAddObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            this.counter++;
            FormAddObat.counter = this.counter;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            // this.resepFormulariumIrdaService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value;
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataDetail);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }
    validasi(FormData) {
        let message = [];
        let htmlSelection = '';
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi');
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi');
            }
        }
        else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih');
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih');
            }
        }
        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi');
        }
        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi');
        }
        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value, index) => {
                htmlSelection += `<li>${value}</li>`;
            });
            htmlSelection += `</ul></div>`;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            });
            return false;
        }
        else {
            return true;
        }
    }
    onResetFormObat() {
        this.FormAddObat.reset();
        this.qty_resep.setValue(1);
        this.is_racikan.setValue(false);
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value;
            dataDetail[this.currentIndex] = FormAddObat;
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat();
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
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
                let dataObat = this.resepFormulariumIrdaService.dataSourceParentGrid.value;
                dataObat.splice(this.currentIndex, 1);
                this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataObat);
                this.dataSourceGrid.next(dataObat);
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
            id_formularium: data.id_formularium,
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
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepFormulariumIrdaService.dataSourceParentGrid.next(dataSourceParent);
        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    onClickButtonNav(args) {
        switch (args) {
            case "simpan":
                this.Insert();
                break;
            case "kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irda/daftar-resep-formularium-irda');
                break;
            default:
                break;
        }
    }
    Insert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.setIdOutlet == 0) {
                this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '');
                return false;
            }
            this.dataheader = {
                id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
                id_register: this.daftarPasienService.ActivePasien.value.id_register,
                id_outlet: this.setIdOutlet,
                id_person: this.daftarPasienService.ActivePasien.value.id_person,
                jenis_rawat: 'I',
                nama_template: '',
                tanggal_resep: moment__WEBPACK_IMPORTED_MODULE_0___default()().format()
            };
            this.newdetail = this.resepFormulariumIrdaService.dataSourceParentGrid.value.filter((item) => {
                return item.is_racikan && !item.set_racikan_id;
            });
            this.baru = 0;
            if (!this.isGetFromTemplate) {
                // this.modalRef = this.modalService.show(
                //     this.modalTemplateResep,
                //     Object.assign({}, { class: 'modal-lg' })
                // );
                this.methodConfirmSetRacikan(0);
            }
            else {
                this.methodConfirmSetRacikan(0);
            }
        });
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.dataheader.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
                this.methodInsert(this.dataheader, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.dataheader, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepFormulariumIrdaService.pulangResepRawatInap(Data, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                //   this.resepFormulariumIrdaService.reset();
                window.location.reload();
                this.isGetFromTemplate = false;
            });
        });
    }
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_formularium() { return this.FormAddObat.get('id_formularium'); }
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
}
PulangResepFormulariumIrdaComponent.ɵfac = function PulangResepFormulariumIrdaComponent_Factory(t) { return new (t || PulangResepFormulariumIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_6__.ResepFormulariumIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_11__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_14__.SetupOutletService)); };
PulangResepFormulariumIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: PulangResepFormulariumIrdaComponent, selectors: [["app-pulang-resep-formularium-irda"]], viewQuery: function PulangResepFormulariumIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
    } }, outputs: { onSetTemplateResep: "onSetTemplateResep" }, decls: 85, vars: 72, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "row", "pt-2", "mb-2"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-4 col-md-4 col-sm-4 col-xs-4", 4, "ngIf"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3", 4, "ngIf"], ["class", "col-lg-2 col-md-2 col-sm-2 col-xs-2", 4, "ngIf"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "pe-1"], ["for", "NumericQty", 1, "form-label"], ["id", "NumericQty", "formControlName", "qty_resep", 3, "format", "showSpinButton", "showClearButton", "ste"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "pe-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "col-lg-1 col-md-1 col-sm-1 col-xs-1 pe-1", 4, "ngIf"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "ps-4"], [1, "row", "align-content-center", "h-100", "mb-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-0", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "queryString", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "card-body", "p-0"], ["height", "calc(100vh - 24rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Satuan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "metode_racikan", "headerText", "Kemasan Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "ket_label", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10", "pe-0"], ["id", "DropdownObat", "formControlName", "id_formularium", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], ["itemTemplate", ""], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "px-0"], ["id", "basic-addon1", 1, "input-group-text", "bg-primary", "text-white"], [1, "col-6"], [1, "name"], [1, "city"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mb-2", "row"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function PulangResepFormulariumIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClickButtonNav", function PulangResepFormulariumIrdaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "atm-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "ejs-dropdownlist", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_Template_ejs_dropdownlist_change_10_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, PulangResepFormulariumIrdaComponent_div_21_Template, 15, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, PulangResepFormulariumIrdaComponent_div_22_Template, 10, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, PulangResepFormulariumIrdaComponent_div_23_Template, 10, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "ejs-numerictextbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Label Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "ejs-combobox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_Template_ejs_combobox_change_37_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, PulangResepFormulariumIrdaComponent_div_38_Template, 7, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](43, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "ejs-combobox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrdaComponent_Template_ejs_combobox_change_45_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_Template_button_click_49_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrdaComponent_Template_button_click_54_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](55, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57, "\u00A0Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "org-look-up-hirarki", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function PulangResepFormulariumIrdaComponent_Template_org_look_up_hirarki_onGetSelectedData_58_listener($event) { return ctx.heandleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "org-look-up-hirarki", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function PulangResepFormulariumIrdaComponent_Template_org_look_up_hirarki_onGetSelectedData_60_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "ejs-grid", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("toolbarClick", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_toolbarClick_66_listener($event) { return ctx.onToolbarClick($event); })("load", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_load_66_listener($event) { return ctx.onLoad($event); })("rowDataBound", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_rowDataBound_66_listener($event) { return ctx.rowDataBound($event); })("dataBound", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_dataBound_66_listener() { return ctx.onDataBound(); })("rowSelected", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_rowSelected_66_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function PulangResepFormulariumIrdaComponent_Template_ejs_grid_actionComplete_66_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](70, "e-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](71, "e-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](72, "e-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](73, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](74, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](75, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](76, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](77, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](78, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](80, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](81, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](82, "e-column", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](83, PulangResepFormulariumIrdaComponent_ng_template_83_Template, 25, 0, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 68, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx.width >= 1023 && ctx.width <= 1200 ? "pt-1" : "pt-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("queryString", "set_racikan_id")("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](68, 70, ctx.dataSourceGrid))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__.NumericTextBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__.ComboBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__.OrgLookUpHirarkiComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 25622:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/view-resep-formularium-irda/view-resep-formularium-irda.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResepFormulariumIrdaComponent": () => (/* binding */ ViewResepFormulariumIrdaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irda.service */ 33392);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);













const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = ["modalStopResep"];
function ViewResepFormulariumIrdaComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Tambahan Hari Pada Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrdaComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Tambah Jumlah Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ejs-numerictextbox", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Hari ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrdaComponent_ng_template_21_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.handleClickLanjutkanResepDokter(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Lanjukan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.htmlSelection, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false);
} }
function ViewResepFormulariumIrdaComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Stop Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrdaComponent_ng_template_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Anda Yakin Akan Menghentikan Obat ini?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrdaComponent_ng_template_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.handleClickStopResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Stop Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r4.htmlSelection, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
const _c5 = function () { return { wrapMode: "Both" }; };
class ViewResepFormulariumIrdaComponent {
    constructor(formBuilder, resepFormulariumIrdaService, router, encryptionService, activatedRoute, utilityService, modalService, utilityHelperService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrdaService = resepFormulariumIrdaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.utilityHelperService = utilityHelperService;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'lanjutkan', Captions: 'Lanjutkan Resep', Icons1: 'fa-forward fa-sm' },
            { Id: 'ubah', Captions: 'Ubah Resep', Icons1: 'fa-edit fa-sm' },
            { Id: 'stop', Captions: 'Hentikan Resep', Icons1: 'fa-stop-circle fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.inputFieldState = 'detail';
        this.keterangan = (field, data1) => {
            return data1['nama_rute_pemberian_obat'] +
                ', sehari ' + data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + ' ' + data1['ket_label'] + ' '
                + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
            ;
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
        this.htmlSelection = '';
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            no_register: ['', []],
            no_rekam_medis: ['', []],
            poli: ['', []],
            pasien: ['', []],
            bed: ['', []],
            dokter: ['', []],
            umur: ['', []],
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
        this.resepFormulariumIrdaService.onGetById(id).subscribe((result) => {
            this.formInput.setValue({
                bed: result.data.bed_no + ' - ' + result.data.bed_no,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                no_register: result.data.no_register,
                no_rekam_medis: result.data.no_rekam_medis,
                poli: result.data.nama_poli,
                umur: result.data.usia
            });
            this.dataHeader = result.data;
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
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
    handleClickLanjutkanResepDokter(args) {
        let Body;
        Body = this.GridResepRacikan.getSelectedRecords();
        Body.map((e, i) => {
            e.jumlah_hari = args;
            return e;
        });
        // console.log(Body);
        this.resepFormulariumIrdaService.lanjutakanResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di lanjutkan', result.message)
                .then(() => {
                this.modalRef.hide();
                this.onLoadDetailData(this.dataHeader.resep_id);
            });
        });
    }
    handleClickStopResepDokter(args) {
        let Body;
        Body = this.GridResepRacikan.getSelectedRecords();
        this.resepFormulariumIrdaService.stopResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di hentikan/Stop', result.message)
                .then(() => {
                this.modalRef.hide();
                this.onLoadDetailData(this.dataHeader.resep_id);
            });
        });
    }
    onClickButtonNav(args) {
        let data = this.GridResepRacikan.getSelectedRecords();
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irda/daftar-resep-formularium-irda');
                break;
            case "lanjutkan":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '');
                }
                else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(this.modalTambahanHariResep, Object.assign({}, { class: 'modal-md' }));
                }
                break;
            case "ubah":
                const id = this.encryptionService.encrypt(this.dataHeader.resep_id + ',ubah');
                this.router.navigate(['Dokter/resep-formularium-irda/ubah-resep-formularium-irda', id, "GRAHCIS"]);
                break;
            case "pulang":
                const id_resep = this.encryptionService.encrypt(this.dataHeader.resep_id + ',pulang');
                this.router.navigate(['Dokter/resep-irda/ubah-resep-irda', id_resep, "GRAHCIS"]);
                break;
            case "stop":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '');
                }
                else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(this.modalStopResep, Object.assign({}, { class: 'modal-md' }));
                }
                break;
            default:
                break;
        }
    }
    templateSelection() {
        let data = this.GridResepRacikan.getSelectedRecords();
        this.htmlSelection = '<ul>';
        data.forEach((value, index) => {
            this.htmlSelection += `<li>${value.nama_obat}</li>`;
        });
        this.htmlSelection += '</ul>';
        console.log(this.htmlSelection);
    }
}
ViewResepFormulariumIrdaComponent.ɵfac = function ViewResepFormulariumIrdaComponent_Factory(t) { return new (t || ViewResepFormulariumIrdaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irda_service__WEBPACK_IMPORTED_MODULE_1__.ResepFormulariumIrdaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_2__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__.UtilityHelperService)); };
ViewResepFormulariumIrdaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ViewResepFormulariumIrdaComponent, selectors: [["app-view-resep-formularium-irda"]], viewQuery: function ViewResepFormulariumIrdaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modalStopResep = _t.first);
    } }, decls: 25, vars: 38, consts: [[3, "ButtonNav", "HeaderRibbonClass", "ButtonNavClass", "onClickButtonNav"], [1, "row"], [1, "col-sm-4"], [3, "formGroup"], ["formControlName", "no_register", 3, "label", "inputFieldState"], ["formControlName", "no_rekam_medis", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "bed", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridResepRacikan", ""], [3, "width", "field", "visible", "type", "textAlign", "headerTextAlign"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["modalTambahanHariResep", ""], ["modalStopResep", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "text-success", 3, "innerHTML"], [1, "col-sm-9", "pe-0"], ["id", "tambahan_hari", "name", "tambahan_hari", 3, "format", "showSpinButton", "showClearButton"], ["tambah_hari", ""], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "px-0"], ["id", "basic-addon1", 1, "input-group-text"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger", 3, "innerHTML"]], template: function ViewResepFormulariumIrdaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickButtonNav", function ViewResepFormulariumIrdaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ejs-grid", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("rowDataBound", function ViewResepFormulariumIrdaComponent_Template_ejs_grid_rowDataBound_14_listener($event) { return ctx.rowDataBound($event); })("dataBound", function ViewResepFormulariumIrdaComponent_Template_ejs_grid_dataBound_14_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "e-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "e-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "e-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "e-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ViewResepFormulariumIrdaComponent_ng_template_21_Template, 22, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ViewResepFormulariumIrdaComponent_ng_template_23_Template, 14, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav)("HeaderRibbonClass", "col-lg-4 col-md-4 col-sm-4 col-xs-4")("ButtonNavClass", "col-lg-8 col-md-8 col-sm-8 col-xs-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "No Register")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "No RM")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Bed")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 50)("field", "Checkbox")("visible", true)("type", "checkbox")("textAlign", "Center")("headerTextAlign", "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 220)("valueAccessor", ctx.quantity);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.AggregateColumnDirective, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_12__.NumericTextBoxComponent], styles: [""] });


/***/ }),

/***/ 72169:
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irja/input-resep-formularium-irja/input-resep-formularium-irja.component.ts ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputResepFormulariumIrjaComponent": () => (/* binding */ InputResepFormulariumIrjaComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./json/lookupitem.json */ 83855);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 58001);
/* harmony import */ var src_app_prototype_ArrPrototype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/prototype/ArrPrototype */ 24292);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irja.service */ 46696);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);



























const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["GridResepRacikan"];
const _c3 = ["itemTemplate"];
const _c4 = ["modalTemplateResep"];
function InputResepFormulariumIrjaComponent_div_21_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r13.nama_generik, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r13.sediaan_obat);
} }
function InputResepFormulariumIrjaComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ejs-dropdownlist", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("filtering", function InputResepFormulariumIrjaComponent_div_21_Template_ejs_dropdownlist_filtering_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r14.onFiltering($event); })("change", function InputResepFormulariumIrjaComponent_div_21_Template_ejs_dropdownlist_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r16.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, InputResepFormulariumIrjaComponent_div_21_ng_template_10_Template, 7, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r1.data)("fields", ctx_r1.fields)("placeholder", ctx_r1.text)("query", ctx_r1.query)("sortOrder", ctx_r1.sorting)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.nama_satuan.value, " ");
} }
function InputResepFormulariumIrjaComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_div_22_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r17.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_div_22_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r19.handelClickRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function InputResepFormulariumIrjaComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Kemasan Racikan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ejs-dropdownlist", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_div_23_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r21.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 3, ctx_r3.setupMetodeRacikanService.dataSource))("fields", ctx_r3.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function InputResepFormulariumIrjaComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ejs-combobox", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_div_38_Template_ejs_combobox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r23.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r4.dataSourceSatuanAturanPakai)("fields", ctx_r4.DropdownsatuanPakaiFields);
} }
function InputResepFormulariumIrjaComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_ng_template_83_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimapan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_ng_template_83_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r27.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_ng_template_83_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r28.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
class InputResepFormulariumIrjaComponent {
    constructor(formBuilder, resepFormulariumIrjaService, setupLabelPemakaianObatService, setupTambahanAturanPakaiService, setupSatuanAturanPakaiService, setupMetodeRacikanService, setupOutletService, renderer, daftarPasienService, location, utilityService, modalService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrjaService = resepFormulariumIrjaService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.setupOutletService = setupOutletService;
        this.renderer = renderer;
        this.daftarPasienService = daftarPasienService;
        this.location = location;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN; // + '/' + 2 + '/J';
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_TEMPLATE_RESEP; // + '/' + 2;
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_2___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_2__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
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
        this.GridDetailResepRacikanDatasource = [];
        this.GridResepRacikanDatasource = [];
        this.dataSourceLabelPemakaian = [];
        this.dataSourceTambahanAturanPakai = [];
        this.dataSourceSatuanAturanPakai = [];
        this.counter = 0;
        this.counterRacikan = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.whereField = "psg.nama_generik";
        this.select = "'nama_generik', 'id_formularium','sediaan_obat'";
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_generik', value: 'id_formularium' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.text = "Select a Formularium";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                e.updateData(this.data, query);
            }
        };
        //=====================
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
            { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        ];
        this.idOutlet = null;
        this.data_header = null;
        this.currentTanggal = null;
        this.newdetail = [];
        this.baru = 0;
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.currentTanggal = moment__WEBPACK_IMPORTED_MODULE_5___default()().format();
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [null, []],
            metode_racikan: ['', []],
            id_formularium: [null, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            qty_resep: [1, []],
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
        this.resepFormulariumIrjaService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                else {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', '', true);
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
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownList({
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
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_formularium;
                        document.getElementsByName("nama_satuan")[0].value = args.itemData.sediaan_obat;
                        console.log('currentItem', currentIdItem);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_formularium;
                        this.itemsObj.value = currentIdItem;
                    }, 10);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepFormulariumIrjaService.dataSourceChildGrid.next(dataSourceChild);
        this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataSourceGrid.value);
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
            sortSettings: { columns: [{ field: 'counterRacikan', direction: 'Descending' }] },
            columns: [
                { field: "counter", headerText: 'counter', width: 100, visible: false },
                { field: "counterRacikan", headerText: 'counterRacikan', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_formularium", headerText: 'id', width: 100, visible: false },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                console.log('SelectedDataRacikanObat', SelectedDataRacikanObat);
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    // (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                    SelectedDataRacikanObat = null;
                }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_formularium = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_formularium = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    console.log('dataSourceChild', dataSourceChild);
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
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
        this.setupOutletService.setDataSource();
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;
        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/J';
    }
    onLoad(args) {
    }
    handleChangeOutlet(args) {
        this.idOutlet = args.value;
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
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.sediaan_obat);
        this.nama_obat.setValue(args.itemData.nama_generik);
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
        this.LookupRacikan.onOpenModal();
    }
    handelClickTemplateResep() {
        this.LookupTemplateResep.onOpenModal();
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
    }
    heandleSelectedRacikan(args) {
        this.counter++;
        args.counter = this.counter;
        args.is_racikan = true;
        args.no_urut = 0;
        args.id_item = null;
        args.nama_satuan = null;
        args.label = null;
        args.nama_racikan = args.nama_obat;
        args.label = args.ket_label;
        args.aturan = args.ket_aturan;
        let dataObat = this.dataSourceGrid.value;
        dataObat.push(args);
        this.dataSourceGrid.next(dataObat);
        this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataObat);
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counter = this.counter;
            element.counterRacikan = counterRacikan;
            element.komposisi = element.kandungan_obat;
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        this.resepFormulariumIrjaService.dataSourceChildGrid.next(detail);
        this.GridResepRacikan.refresh();
    }
    heandleSelectedTemplateResep(args) {
        console.log(args);
        let obat = [];
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
            // this.resepFormulariumIrjaService.addDetail(element);
            obat.push(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });
        });
        this.dataSourceGrid.next(obat);
        this.resepFormulariumIrjaService.dataSourceChildGrid.next(detail);
        this.resepFormulariumIrjaService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.isGetFromTemplate = true;
    }
    handleAddObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            this.counter++;
            FormAddObat.counter = this.counter;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            // this.resepFormulariumIrjaService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value;
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataDetail);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }
    validasi(FormData) {
        let message = [];
        let htmlSelection = '';
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi');
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi');
            }
        }
        else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih');
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih');
            }
        }
        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi');
        }
        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi');
        }
        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value, index) => {
                htmlSelection += `<li>${value}</li>`;
            });
            htmlSelection += `</ul></div>`;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            });
            return false;
        }
        else {
            return true;
        }
    }
    onResetFormObat() {
        this.FormAddObat.reset();
        this.qty_resep.setValue(1);
        this.is_racikan.setValue(false);
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value;
            dataDetail[this.currentIndex] = FormAddObat;
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat();
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
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
                let dataObat = this.resepFormulariumIrjaService.dataSourceParentGrid.value;
                dataObat.splice(this.currentIndex, 1);
                this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataObat);
                this.dataSourceGrid.next(dataObat);
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
            id_formularium: data.id_formularium,
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
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepFormulariumIrjaService.dataSourceParentGrid.next(dataSourceParent);
        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    onResetGrid() {
        // this.GridResepRacikan.refresh();
        // this.resepFormulariumIrjaService.dataSourceChildGrid.next([]);
        // this.resepFormulariumIrjaService.dataSourceParentGrid.next([]);
        window.location.reload();
        // this.dataScourceGridChild = [];
        // this.dataSourceGrid.next([]);
        // this.ChildGrid.dataSource = [];
        // this.GridResepRacikan.refresh();
    }
    onClickButtonNav(ButtonId) {
        switch (ButtonId) {
            case 'Save':
                this.onSave();
                break;
            case 'Back':
                this.location.back();
                break;
            default:
                break;
        }
    }
    onSave() {
        if (!this.idOutlet) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '');
            return false;
        }
        this.data_header = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.idOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'J',
            nama_template: '',
            tanggal_resep: this.currentTanggal
        };
        this.newdetail = this.resepFormulariumIrjaService.dataSourceParentGrid.value.filter((item) => {
            return item.is_racikan && !item.set_racikan_id;
        });
        this.baru = 0;
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(this.modalTemplateResep, Object.assign({}, { class: 'modal-lg' }));
        }
        else {
            this.methodConfirmSetRacikan(0);
        }
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.data_header.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                this.methodInsert(this.data_header, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.data_header, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepFormulariumIrjaService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                this.onResetGrid();
                this.isGetFromTemplate = false;
            });
        });
    }
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_formularium() { return this.FormAddObat.get('id_formularium'); }
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
}
InputResepFormulariumIrjaComponent.ɵfac = function InputResepFormulariumIrjaComponent_Factory(t) { return new (t || InputResepFormulariumIrjaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irja_service__WEBPACK_IMPORTED_MODULE_6__.ResepFormulariumIrjaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_11__.SetupOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_12__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_23__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService)); };
InputResepFormulariumIrjaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: InputResepFormulariumIrjaComponent, selectors: [["app-input-resep-formularium-irja"]], viewQuery: function InputResepFormulariumIrjaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
    } }, decls: 85, vars: 77, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "row", "pt-2", "mb-2"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-4 col-md-4 col-sm-4 col-xs-4", 4, "ngIf"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3", 4, "ngIf"], ["class", "col-lg-2 col-md-2 col-sm-2 col-xs-2", 4, "ngIf"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "pe-1"], ["for", "NumericQty", 1, "form-label"], ["id", "NumericQty", "formControlName", "qty_resep", 3, "format", "min", "showSpinButton", "showClearButton", "ste"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "pe-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "col-lg-1 col-md-1 col-sm-1 col-xs-1 pe-1", 4, "ngIf"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "ps-4"], [1, "row", "align-content-center", "h-100", "mb-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-0", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "queryString", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "card-body", "p-0"], ["height", "calc(100vh - 27rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "allowResizing", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_formularium", "headerText", "id_formularium", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Sediaan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "width"], ["field", "metode_racikan", "headerText", "Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "width"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing", "width"], ["field", "ket_label", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10", "pe-0"], ["id", "DropdownObat", "formControlName", "id_formularium", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], ["itemTemplate", ""], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "px-0"], ["id", "basic-addon1", 1, "input-group-text", "bg-primary", "text-white"], [1, "col-6"], [1, "name"], [1, "city"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mb-2", "row"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function InputResepFormulariumIrjaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClickButtonNav", function InputResepFormulariumIrjaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "atm-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "ejs-dropdownlist", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_Template_ejs_dropdownlist_change_10_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, InputResepFormulariumIrjaComponent_div_21_Template, 15, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, InputResepFormulariumIrjaComponent_div_22_Template, 10, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, InputResepFormulariumIrjaComponent_div_23_Template, 10, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "ejs-numerictextbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Label Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "ejs-combobox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_Template_ejs_combobox_change_37_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, InputResepFormulariumIrjaComponent_div_38_Template, 7, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](43, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "ejs-combobox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function InputResepFormulariumIrjaComponent_Template_ejs_combobox_change_45_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_Template_button_click_49_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function InputResepFormulariumIrjaComponent_Template_button_click_54_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](55, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57, "\u00A0Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "org-look-up-hirarki", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumIrjaComponent_Template_org_look_up_hirarki_onGetSelectedData_58_listener($event) { return ctx.heandleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "org-look-up-hirarki", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumIrjaComponent_Template_org_look_up_hirarki_onGetSelectedData_60_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "ejs-grid", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("toolbarClick", function InputResepFormulariumIrjaComponent_Template_ejs_grid_toolbarClick_66_listener($event) { return ctx.onToolbarClick($event); })("load", function InputResepFormulariumIrjaComponent_Template_ejs_grid_load_66_listener($event) { return ctx.onLoad($event); })("rowDataBound", function InputResepFormulariumIrjaComponent_Template_ejs_grid_rowDataBound_66_listener($event) { return ctx.rowDataBound($event); })("dataBound", function InputResepFormulariumIrjaComponent_Template_ejs_grid_dataBound_66_listener() { return ctx.onDataBound(); })("rowSelected", function InputResepFormulariumIrjaComponent_Template_ejs_grid_rowSelected_66_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function InputResepFormulariumIrjaComponent_Template_ejs_grid_actionComplete_66_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](70, "e-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](71, "e-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](72, "e-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](73, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](74, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](75, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](76, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](77, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](78, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](80, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](81, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](82, "e-column", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](83, InputResepFormulariumIrjaComponent_ng_template_83_Template, 25, 0, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 73, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("format", "N0")("min", 1)("showSpinButton", false)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx.width >= 1023 && ctx.width <= 1200 ? "pt-1" : "pt-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("queryString", "set_racikan_id")("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](68, 75, ctx.dataSourceGrid))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar)("allowResizing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false)("width", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_23__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_25__.NumericTextBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__.ComboBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__.OrgLookUpHirarkiComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_26__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_23__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 68700:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/daftar-resep-formularium-irna/daftar-resep-formularium-irna.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaftarResepFormulariumIrnaComponent": () => (/* binding */ DaftarResepFormulariumIrnaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 19949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service */ 59936);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component */ 55682);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);









const _c0 = ["GridResepRacikan"];
const _c1 = ["GridData"];
function DaftarResepFormulariumIrnaComponent_ng_template_14_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Lihat Detail Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function DaftarResepFormulariumIrnaComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DaftarResepFormulariumIrnaComponent_ng_template_14_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const data_r3 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.handleClickDetail(data_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, DaftarResepFormulariumIrnaComponent_ng_template_14_a_8_Template, 2, 0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 5, data_r3.headerText), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 7, data_r3.key), " - \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", data_r3.count, " ", data_r3.field == "nama_dokter" ? "resep" : "obat", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", data_r3.field == "nomor_resep");
} }
const _c2 = function () { return { wrapMode: "Both" }; };
class DaftarResepFormulariumIrnaComponent {
    constructor(router, encryptionService, resepFormulariumIrnaService) {
        this.router = router;
        this.encryptionService = encryptionService;
        this.resepFormulariumIrnaService = resepFormulariumIrnaService;
        this.ButtonNav = [
            { Id: 'Add', Captions: 'Buat Resep Baru', Icons1: 'fa-plus fa-sm' },
            { Id: 'pulang', Captions: 'Resep Pulang', Icons1: 'fa-home fa-sm' },
        ];
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];
        this.FilterColumnDatasource = [
            { text: 'Nomor Resep', value: 'trd.nomor_resep' }
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.dataSource = [];
        this.dataSourceChild = [];
        this.keterangan = (field, data1) => {
            return data1['nama_rute_pemberian_obat'] + ', sehari ' +
                data1['qty_harian'] + ' ' + data1['nama_satuan'] + ' ' + data1['ket_label'] + ' ' + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.GridGroupSettings = { showDropArea: false, columns: ['nama_dokter', 'nomor_resep'] };
    }
    ngAfterViewInit() {
        // this.GridData.Grid.refresh();
    }
    ngOnInit() {
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        };
        this.resepFormulariumIrnaService.onInitList();
        this.handlePencarianFilter([]);
    }
    rowDataBound(args) {
        // console.log(args.data.is_racikan)
        // let is_racikan = args.data.is_racikan;
        // if (!is_racikan) {
        //     //here hide which parent row has no child records
        //     args.row.querySelector('td').innerHTML = " ";
        //     args.row.querySelector('td').className = "e-customizedExpandcell";
        // } else {
        // //     // args.row.classList.add('is-racikan');
        // }
    }
    onDataBound() {
        // this.GridResepRacikan.detailRowModule.expandAll();
    }
    handlePencarianFilter(args) {
        this.resepFormulariumIrnaService.onGetAllByResepActiveByRegister(args).subscribe((result) => {
            this.dataSource = result.data;
            this.mapingRacikan(result.data);
            this.GridResepRacikan.refresh();
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
    handleClickDetail(args) {
        console.log(args.items);
        const id = this.encryptionService.encrypt(JSON.stringify(args.items[0].resep_id));
        this.router.navigate(['Dokter/resep-formularium-irna/view-resep-formularium-irna', id, "GRAHCIS"]);
    }
    handleClickButtonNav(args) {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('Dokter/resep-formularium-irna/input-resep-formularium-irna');
                break;
            case 'Edit':
                const pemesanan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.resep_id));
                this.router.navigate(['Dokter/resep-formularium-irna/input-resep-formularium-irna', pemesanan_id, "GRAHCIS"]);
                break;
            case 'pulang':
                this.router.navigateByUrl('Dokter/resep-formularium-irna/pulang-resep-formularium-irna');
                break;
            default:
                break;
        }
    }
    handleSelectedRow(args) {
        this.SelectedData = args.data;
        console.log(this.SelectedData);
    }
}
DaftarResepFormulariumIrnaComponent.ɵfac = function DaftarResepFormulariumIrnaComponent_Factory(t) { return new (t || DaftarResepFormulariumIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_1__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_2__.ResepFormulariumIrnaService)); };
DaftarResepFormulariumIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DaftarResepFormulariumIrnaComponent, selectors: [["app-daftar-resep-formularium-irna"]], viewQuery: function DaftarResepFormulariumIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.GridData = _t.first);
    } }, decls: 16, vars: 24, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [3, "FilterColumnDatasource", "handle-pencarian"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowGrouping", "groupSettings", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridResepRacikan", ""], ["field", "nama_dokter", "headerText", "Dokter", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nomor_resep", "headerText", "Nomor Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Pemakain", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["groupSettingsCaptionTemplate", ""], ["title", "", 1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", 3, "click"], [1, "mb-0", 2, "font-size", "15px"], [1, "mb-0"], ["class", "cursor-pointer", "title", "lihat detail resep", 4, "ngIf"], ["title", "lihat detail resep", 1, "cursor-pointer"]], template: function DaftarResepFormulariumIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickButtonNav", function DaftarResepFormulariumIrnaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mol-offcanvas-filter", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handle-pencarian", function DaftarResepFormulariumIrnaComponent_Template_mol_offcanvas_filter_handle_pencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ejs-grid", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("rowDataBound", function DaftarResepFormulariumIrnaComponent_Template_ejs_grid_rowDataBound_5_listener($event) { return ctx.rowDataBound($event); })("dataBound", function DaftarResepFormulariumIrnaComponent_Template_ejs_grid_dataBound_5_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "e-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "e-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "e-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "e-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "e-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "e-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, DaftarResepFormulariumIrnaComponent_ng_template_14_Template, 9, 9, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("FilterColumnDatasource", ctx.FilterColumnDatasource);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowGrouping", true)("groupSettings", ctx.GridGroupSettings)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 220)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_filter_mol_offcanvas_filter_mol_offcanvas_filter_component__WEBPACK_IMPORTED_MODULE_4__.MolOffcanvasFilterComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_7__.AggregateColumnDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.TitleCasePipe], styles: [""] });


/***/ }),

/***/ 45965:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/input-resep-formularium/input-resep-formularium.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputResepFormulariumComponent": () => (/* binding */ InputResepFormulariumComponent)
/* harmony export */ });
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/lookupitem.json */ 56812);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 97128);
/* harmony import */ var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json/GridResep.json */ 73457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service */ 59936);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service */ 88817);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_interval_aturan_pakai_setup_interval_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-interval-aturan-pakai/setup-interval-aturan-pakai.service */ 72568);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);































const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["modalTemplateResep"];
const _c3 = ["MaritalOutletDropdown"];
const _c4 = ["GridResepRacikan"];
const _c5 = ["itemTemplate"];
function InputResepFormulariumComponent_div_12_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate1"](" ", data_r13.nama_generik, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtextInterpolate"](data_r13.sediaan_obat);
} }
function InputResepFormulariumComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "ejs-dropdownlist", 58, 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("filtering", function InputResepFormulariumComponent_div_12_Template_ejs_dropdownlist_filtering_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r14.onFiltering($event); })("change", function InputResepFormulariumComponent_div_12_Template_ejs_dropdownlist_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r16.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](8, InputResepFormulariumComponent_div_12_ng_template_8_Template, 7, 2, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r0.data)("fields", ctx_r0.fields)("placeholder", ctx_r0.text)("query", ctx_r0.query)("sortOrder", ctx_r0.sorting)("allowFiltering", true);
} }
function InputResepFormulariumComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_div_13_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r17.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_div_13_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r19.handelClickRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](9, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
function InputResepFormulariumComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Kemasan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ejs-dropdownlist", 69, 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_div_14_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r21.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](9, 3, ctx_r2.setupMetodeRacikanService.dataSource))("fields", ctx_r2.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function InputResepFormulariumComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](5, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "ejs-combobox", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_div_32_Template_ejs_combobox_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r23.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r3.dataSourceSatuanAturanPakai)("fields", ctx_r3.DropdownsatuanPakaiFields);
} }
function InputResepFormulariumComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_ng_template_95_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](4, "i", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimpan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](12, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](13, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](14, "label", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](16, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](18, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](20, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_ng_template_95_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r27.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](21, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_ng_template_95_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵnextContext"](); return ctx_r28.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](23, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
} }
const _c6 = function () { return { wrapMode: "Both" }; };
class InputResepFormulariumComponent {
    constructor(formBuilder, resepFormulariumIrnaService, setupMetodeRacikanService, setupRutePemberianObatService, setupSatuanAturanPakaiService, setupIntervalAturanPakaiService, setupTambahanAturanPakaiService, setupLabelPemakaianObatService, utilityService, modalService, router, encryptionService, activatedRoute, daftarPasienService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrnaService = resepFormulariumIrnaService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.setupRutePemberianObatService = setupRutePemberianObatService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupIntervalAturanPakaiService = setupIntervalAturanPakaiService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.daftarPasienService = daftarPasienService;
        this.setupOutletService = setupOutletService;
        /**
           * Variable Button Nav
           * @ButtonNav: ButtonNavModel[]
           */
        this.ButtonNav = [
            { Id: "Kembali", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
            { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
            { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
            { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
        ];
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN;
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA.GET_TEMPLATE_RESEP;
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__, 2)));
        this.DropdownAturanFields = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };
        this.DropdownRuteFields = { text: "nama_rute_pemberian_obat", value: "id_rute_pemberian_obat" };
        this.DropdownPemakaianFields = { text: "interval_aturan_pakai", value: "id_interval_aturan_pakai" };
        this.DropdownLabelFields = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
        this.SetupOutletDropdownField = { text: 'nama_outlet', value: 'id_outlet' };
        this.FormAddObatState = "input";
        // ** Satuan 
        this.SatuanObat = "-";
        this.DropdownObatFields = { text: 'nama_obat', value: 'id_item' };
        this.DropdownMetodeRacikanFields = { text: 'metode_racikan', value: 'id_metode_racikan' };
        this.DropdownsatuanPakaiFields = { text: "satuan_aturan_pakai", value: "id_satuan_aturan_pakai" };
        this.NamaObatDatasource = [];
        this.dataSourceTambahanAturanPakai = [];
        this.dataSourceLabelPemakaian = [];
        this.dataSourceSatuanAturanPakai = [];
        // ** Waktu Pakai
        this.WaktuPakai = [];
        // ** Grid Daftar Obat Properties
        this.GridDaftarObatEditSettings = { allowAdding: true, allowDeleting: true, allowEditing: true };
        this.GridDaftarObatDataSource = [];
        this.GridDaftarObatColumns = /*#__PURE__*/ (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.GridDetailResepRacikanDatasource = [];
        this.GridResepRacikanDatasource = [];
        this.DataRacikan = [];
        this.newdetail = [];
        this.baru = 0;
        this.data_header = null;
        this.counter = 0;
        this.counterRacikan = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_22__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.inputObat = false;
        this.whereField = "psg.nama_generik";
        this.select = "'nama_generik', 'id_formularium','sediaan_obat'";
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRNA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_generik', value: 'id_formularium' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.text = "Select a Obat";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
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
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRNA.GET_OBAT_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.keterangan = (field, data1) => {
            return data1['rute_pemberian_obat'] + ', sehari ' +
                data1['qty_harian'] + ' ' + data1['nama_satuan'] + ' ' + data1['ket_label'] + ' ' + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.dataUbah = null;
        this.updateResepDokter = false;
        this.pulang = false;
        this.idArry = [];
        this.setIdOutlet = 0;
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [1, []],
            metode_racikan: ['Puyer', []],
            id_formularium: [null, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            jumlah_hari: [1, []],
            qty_harian: [1, []],
            qty_resep: [1, []],
            nama_satuan: ['-', []],
            id_rute_pemberian_obat: [null, []],
            rute_pemberian_obat: ['', []],
            id_satuan_aturan_pakai: [null, []],
            satuan_aturan_pakai: ['', []],
            label: ['', []],
            ket_label: ['', []],
            id_label_pemakaian_obat: [null, []],
            label_pemakaian_obat: ['', []],
            aturan: ['', []],
            ket_aturan: ['', []],
            id_tambahan_aturan_pakai: [null, []],
            label_tambahan_aturan_pakai_obat: ['', []],
        });
        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepFormulariumIrnaService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                else {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', '', true);
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
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_23__.Query().from('Obat').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_formularium;
                        document.getElementsByName("nama_satuan")[0].value = args.itemData.sediaan_obat;
                        console.log('currentItem', currentIdItem);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_formularium;
                        this.itemsObj.value = currentIdItem;
                    }, 10);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepFormulariumIrnaService.dataSourceChildGrid.next(dataSourceChild);
        this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataSourceGrid.value);
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
                { field: "counter", headerText: 'counter', width: 100, visible: false },
                { field: "counterRacikan", headerText: 'counterRacikan', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_formularium", headerText: 'id', width: 100, visible: false },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                console.log('row selected', SelectedDataRacikanObat);
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    // (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_harian;
                    SelectedDataRacikanObat = null;
                }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_formularium = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_formularium = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
            }
        };
        this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
            this.dataSourceLabelPemakaian = result.data;
        });
        this.setupMetodeRacikanService.setDataSource();
        // this.resepFormulariumIrnaService.setDataObat([]);
        this.setupRutePemberianObatService.setDataSource();
        this.setupIntervalAturanPakaiService.setDataSource();
        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceTambahanAturanPakai = result.data;
        });
        this.setupSatuanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceSatuanAturanPakai = result.data;
        });
        this.resepFormulariumIrnaService.reset();
        this.setupOutletService.setDataSource();
        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/I';
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (typeof this.activatedRoute.snapshot.params["id"] !== 'undefined') {
                let idString;
                idString = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
                this.idArry = idString.split(',');
                console.log(idString);
                console.log(this.idArry);
                if (this.idArry[1] == 'pulang') {
                    this.pulang = true;
                    this.ButtonNav = [
                        { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                        { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Simpan Resep Pulang" },
                    ];
                }
                else {
                    this.ButtonNav = [
                        { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                        { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Ubah Resep Dokter" },
                    ];
                }
                this.updateResep(parseInt(this.idArry[0]));
            }
        }, 1);
    }
    updateResep(id) {
        this.resepFormulariumIrnaService.onGetById(id).subscribe((result) => {
            this.dataUbah = result.data;
            this.setIdOutlet = result.data.id_outlet;
            this.MaritalOutletDropdown.value = result.data.id_outlet;
            this.heandleSelectedTemplateResep(result.data);
            this.updateResepDokter = true;
        });
    }
    handleClickTambahObat() {
        this.inputObat = true;
        this.tanggal_mulai_text.setValue(this.utilityService.onFormatDate(this.tanggal_mulai.value, 'Do MMMM yyyy'));
        this.tanggal_sampai_text.setValue(this.utilityService.onFormatDate(this.tanggal_sampai.value, 'Do MMMM yyyy'));
    }
    handleChangeOutlet(args) {
        this.setIdOutlet = args.value;
    }
    onLoad(args) {
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
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.sediaan_obat);
        this.nama_obat.setValue(args.itemData.nama_generik);
    }
    handleChangeLabel(args) {
        this.label_pemakaian_obat.setValue('');
        this.id_label_pemakaian_obat.setValue(args.value);
        this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        this.qty_harian.setValue(args.itemData.berapa_kali_per_hari);
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
    handleChangeRacikan(args) {
        if (args) {
            this.nama_satuan.setValue('PUYER');
        }
        else {
            this.nama_satuan.setValue("-");
        }
    }
    handleChangeNamaRacikan() {
        this.set_racikan_id.setValue(null);
    }
    handelClickRacikan() {
        this.LookupRacikan.onOpenModal();
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
        this.nama_satuan.setValue(args.itemData.metode_racikan);
    }
    handleChangeRute(args) {
        this.rute_pemberian_obat.setValue(args.itemData.nama_rute_pemberian_obat);
    }
    handleChangePemakaian(args) {
        console.log(args);
        //   this.interval_aturan_pakai.setValue(args.itemData.interval_aturan_pakai);
    }
    handleChangeSatuanAturan(args) {
        this.satuan_aturan_pakai.setValue(args.itemData.satuan_aturan_pakai);
    }
    handleSelectedRacikan(args) {
        args.is_racikan = true;
        this.set_racikan_id.setValue(args.set_racikan_id);
        this.nama_obat.setValue(args.nama_obat);
        this.nama_racikan.setValue(args.nama_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.metode_racikan.setValue(args.metode_racikan);
        this.id_rute_pemberian_obat.setValue(args.id_rute_pemberian_obat);
        this.rute_pemberian_obat.setValue(args.nama_rute_pemberian_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.nama_satuan.setValue(args.metode_racikan);
        this.label.setValue(args.id_label_pemakaian_obat);
        this.id_label_pemakaian_obat.setValue(args.id_label_pemakaian_obat);
        this.ket_label.setValue(args.ket_label);
        this.id_satuan_aturan_pakai.setValue(args.id_satuan_aturan_pakai);
        this.satuan_aturan_pakai.setValue(args.satuan_aturan_pakai);
        this.aturan.setValue(args.id_tambahan_aturan_pakai);
        this.label_tambahan_aturan_pakai_obat.setValue(args.label_tambahan_aturan_pakai_obat);
        this.id_tambahan_aturan_pakai.setValue(args.id_tambahan_aturan_pakai);
        this.ket_aturan.setValue(args.ket_aturan);
        let detail = [];
        // detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counterRacikan = counterRacikan;
            element.komposisi = parseInt(element.kandungan_obat);
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        console.log(detail);
        this.DataRacikan = detail;
    }
    heandleSelectedTemplateResep(args) {
        let obat = [];
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
            element.rute_pemberian_obat = element.nama_rute_pemberian_obat;
            // this.resepFormulariumIrnaService.addDetail(element);
            obat.push(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });
        });
        this.dataSourceGrid.next(obat);
        this.resepFormulariumIrnaService.dataSourceChildGrid.next(detail);
        this.resepFormulariumIrnaService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.isGetFromTemplate = true;
    }
    handleAddObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat;
            this.counter++;
            FormAddObat.counter = this.counter;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            //   this.resepFormulariumIrnaService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value;
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataDetail);
            let racikan;
            racikan = this.GridResepRacikan.childGrid.dataSource;
            console.log(racikan);
            if (this.is_racikan.value && this.DataRacikan.length > 0) {
                console.log(this.DataRacikan);
                this.DataRacikan.forEach((item, index) => {
                    item.counter = this.counter;
                    racikan.push(item);
                });
                this.DataRacikan = [];
            }
            console.log(racikan);
            this.resepFormulariumIrnaService.dataSourceChildGrid.next(racikan);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }
    validasi(FormData) {
        let message = [];
        let htmlSelection = '';
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi');
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi');
            }
        }
        else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih');
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih');
            }
        }
        if (FormData.rute_pemberian_obat == '' || FormData.rute_pemberian_obat == null) {
            message.push('Rute Pemberian Obat Obat belum di isi');
        }
        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi');
        }
        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi');
        }
        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value, index) => {
                htmlSelection += `<li>${value}</li>`;
            });
            htmlSelection += `</ul></div>`;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            });
            return false;
        }
        else {
            return true;
        }
    }
    onResetFormObat() {
        this.set_racikan_id.setValue(null);
        this.id_metode_racikan.setValue(null);
        this.metode_racikan.setValue('');
        this.id_formularium.setValue(null);
        this.nama_racikan.setValue('');
        this.nama_obat.setValue('');
        this.nama_satuan.setValue('-');
        this.SatuanObat = "";
        this.is_racikan.setValue(false);
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value;
            dataDetail[this.currentIndex] = FormAddObat;
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat();
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
    }
    // ** Grid Daftar Obat method
    onInitalizedGrid(component) {
        this.gridDaftarObat = component;
    }
    // ** Grid Daftar Obat method
    onToolbarClick(args) {
        switch (args.item.id) {
            case "edit":
                //   this.FormAddObat.setValue(this.SelectedDataObat);
                this.onEditData();
                this.FormAddObatState = "edit";
                break;
            case "delete":
                let dataObat = this.resepFormulariumIrnaService.dataSourceParentGrid.value;
                dataObat.splice(this.currentIndex, 1);
                this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataObat);
                this.dataSourceGrid.next(dataObat);
                this.GridResepRacikan.refresh();
                break;
            default:
                break;
        }
        ;
    }
    onEditData() {
        let data = this.SelectedDataObat;
        console.log(data);
        this.FormAddObat.setValue({
            counter: data.counter,
            no_urut: data.no_urut,
            is_racikan: data.is_racikan,
            set_racikan_id: data.set_racikan_id,
            id_metode_racikan: data.id_metode_racikan,
            metode_racikan: data.metode_racikan,
            id_formularium: data.id_formularium,
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
            jumlah_hari: data.jumlah_hari,
            qty_harian: data.qty_harian,
            id_rute_pemberian_obat: data.id_rute_pemberian_obat,
            rute_pemberian_obat: data.nama_rute_pemberian_obat
        });
    }
    onActionComplete(args) {
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataSourceParent);
        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    Insert() {
        if (this.setIdOutlet == 0) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '');
            return false;
        }
        this.data_header = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.setIdOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'I',
            nama_template: '',
            tanggal_resep: moment__WEBPACK_IMPORTED_MODULE_0___default()().format()
        };
        this.newdetail = this.resepFormulariumIrnaService.dataSourceParentGrid.value.filter((item) => {
            return item.is_racikan && !item.set_racikan_id;
        });
        this.baru = 0;
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(this.modalTemplateResep, Object.assign({}, { class: 'modal-lg' }));
        }
        else {
            this.methodConfirmSetRacikan(0);
        }
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.data_header.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                title: 'Apakah Anda Ingin Menyimpan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya Simpan Sebagai Template Racikan',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1;
                }
                else {
                    this.baru = 0;
                }
                this.methodInsert(this.data_header, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.data_header, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepFormulariumIrnaService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                // this.resepFormulariumIrnaService.reset();
                this.isGetFromTemplate = false;
                this.router.navigateByUrl('Dokter/resep-formularium-irna/daftar-resep-formularium-irna');
            });
        });
    }
    ubahResep() {
        if (this.pulang) {
            this.resepFormulariumIrnaService.pulangResepRawatInap(this.dataUbah, 0).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Simpan Resep Pulang', result.message)
                    .then(() => {
                    const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                    this.router.navigate(['Dokter/resep-formularium-irna/view-resep-formularium-irna', id, "GRAHCIS"]);
                });
            });
        }
        else {
            this.resepFormulariumIrnaService.ubahResepRawatInap(this.dataUbah).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Resep Ini Berhasil Di Ubah', result.message)
                    .then(() => {
                    const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                    this.router.navigate(['Dokter/resep-formularium-irna/view-resep-formularium-irna', id, "GRAHCIS"]);
                });
            });
        }
    }
    onClickButtonNav(args) {
        switch (args) {
            case "kembali_update":
                const id = this.encryptionService.encrypt(JSON.stringify(this.dataUbah.resep_id));
                this.router.navigate(['Dokter/resep-formularium-irna/view-resep-formularium-irna', id, "GRAHCIS"]);
                break;
            case "ubah":
                this.ubahResep();
                break;
            case "Kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irna/daftar-resep-formularium-irna');
                break;
            case "Template":
                this.handelClickTemplateResep();
                break;
            case "Reset":
                // this.resepFormulariumIrnaService.reset();
                this.isGetFromTemplate = false;
                window.location.reload();
                break;
            case "Simpan":
                // console.log('childernya',this.dataScourceGridChild)  
                this.resepFormulariumIrnaService.dataSourceChildGrid.next(this.dataScourceGridChild);
                this.Insert();
                // this.resepFormulariumIrnaService.saveResep();
                break;
            default:
                break;
        }
    }
    handelClickTemplateResep() {
        this.LookupTemplateResep.onOpenModal();
    }
    get tanggal_mulai() { return this.FormAddObat.get('tanggal_mulai'); }
    ;
    get tanggal_sampai() { return this.FormAddObat.get('tanggal_sampai'); }
    ;
    get tanggal_mulai_text() { return this.FormAddObat.get('tanggal_mulai_text'); }
    ;
    get tanggal_sampai_text() { return this.FormAddObat.get('tanggal_sampai_text'); }
    ;
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_formularium() { return this.FormAddObat.get('id_formularium'); }
    ;
    get nama_racikan() { return this.FormAddObat.get('nama_racikan'); }
    get nama_obat() { return this.FormAddObat.get('nama_obat'); }
    ;
    get jumlah_hari() { return this.FormAddObat.get('jumlah_hari'); }
    get qty_harian() { return this.FormAddObat.get('qty_harian'); }
    get qty_resep() { return this.FormAddObat.get('qty_resep'); }
    get nama_satuan() { return this.FormAddObat.get('nama_satuan'); }
    get id_rute_pemberian_obat() { return this.FormAddObat.get('id_rute_pemberian_obat'); }
    get rute_pemberian_obat() { return this.FormAddObat.get('rute_pemberian_obat'); }
    get jumlah_satuan_aturan_pakai() { return this.FormAddObat.get('jumlah_satuan_aturan_pakai'); }
    get id_satuan_aturan_pakai() { return this.FormAddObat.get('id_satuan_aturan_pakai'); }
    get satuan_aturan_pakai() { return this.FormAddObat.get('satuan_aturan_pakai'); }
    //   get jumlah_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('jumlah_interval_aturan_pakai'); }
    //   get id_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_interval_aturan_pakai'); }
    //   get interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('interval_aturan_pakai'); }
    get aturan() { return this.FormAddObat.get('aturan'); }
    get ket_aturan() { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai() { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai_obat() { return this.FormAddObat.get('label_tambahan_aturan_pakai_obat'); }
    get label() { return this.FormAddObat.get('label'); }
    get ket_label() { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat() { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat() { return this.FormAddObat.get('label_pemakaian_obat'); }
}
InputResepFormulariumComponent.ɵfac = function InputResepFormulariumComponent_Factory(t) { return new (t || InputResepFormulariumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_6__.ResepFormulariumIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_7__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_rute_pemberian_obat_setup_rute_pemberian_obat_service__WEBPACK_IMPORTED_MODULE_8__.SetupRutePemberianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_interval_aturan_pakai_setup_interval_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_10__.SetupIntervalAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_11__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_12__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_15__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_26__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_16__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_17__.SetupOutletService)); };
InputResepFormulariumComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineComponent"]({ type: InputResepFormulariumComponent, selectors: [["app-input-resep-formularium"]], viewQuery: function InputResepFormulariumComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵviewQuery"](_c5, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.MaritalOutletDropdown = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
    } }, decls: 97, vars: 87, consts: [[3, "ButtonNav", "onClickButtonNav"], [1, "form-irna", 3, "formGroup"], [1, "row"], [1, "col-lg-4"], [1, "row", "mb-2"], [1, "col-lg-2", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-10 col-md-11 col-sm-11 col-xs-11", 4, "ngIf"], ["class", "col-lg-10 col-md-10 col-sm-10 col-xs-10", 4, "ngIf"], ["class", "row", 4, "ngIf"], [1, "col-lg-12"], ["for", "kemasan", 1, "form-label"], ["id", "DropdownRutePemberian", "formControlName", "id_rute_pemberian_obat", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["for", "label", 1, "form-label"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "row mb-2", 4, "ngIf"], ["for", "NumericQty", 1, "form-label"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-6"], ["id", "NumericQty", "formControlName", "qty_harian", 3, "format", "showSpinButton", "readonly", "showClearButton", "ste"], ["id", "NumericQty", "formControlName", "jumlah_hari", 1, "form_paragraf", 3, "format", "showSpinButton", "showClearButton", "min", "ste"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "hidden", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "hidden", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [1, "col-lg-8"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "allowTextWrap", "textWrapSettings", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Satuan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "metode_racikan", "headerText", "Kemasan Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-11", "col-sm-11", "col-xs-11"], ["id", "DropdownObat", "formControlName", "id_formularium", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], ["itemTemplate", ""], [1, "col-6"], [1, "name"], [1, "city"], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function InputResepFormulariumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onClickButtonNav", function InputResepFormulariumComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](9, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](12, InputResepFormulariumComponent_div_12_Template, 10, 7, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](13, InputResepFormulariumComponent_div_13_Template, 10, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](14, InputResepFormulariumComponent_div_14_Template, 10, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](20, "Rute Pemberian Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](22, "ejs-combobox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_Template_ejs_combobox_change_22_listener($event) { return ctx.handleChangeRute($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](28, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](29, "Label");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](31, "ejs-dropdownlist", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_Template_ejs_dropdownlist_change_31_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](32, InputResepFormulariumComponent_div_32_Template, 8, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](37, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](38, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](39, "ejs-combobox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_Template_ejs_combobox_change_39_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](44, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](45, "Qty/Hari");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](46, "ejs-numerictextbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](50, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](51, "Untuk Berapa Hari");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](52, "ejs-numerictextbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](55, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_Template_button_click_55_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](56, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](57, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](58, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](59, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("click", function InputResepFormulariumComponent_Template_button_click_59_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](60, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](61, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtext"](62, "\u00A0Edit Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](63, "org-look-up-hirarki", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumComponent_Template_org_look_up_hirarki_onGetSelectedData_63_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](65, "org-look-up-hirarki", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("onGetSelectedData", function InputResepFormulariumComponent_Template_org_look_up_hirarki_onGetSelectedData_65_listener($event) { return ctx.handleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](68, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](70, "atm-label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](72, "ejs-dropdownlist", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("change", function InputResepFormulariumComponent_Template_ejs_dropdownlist_change_72_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](74, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](76, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](77, "ejs-grid", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵlistener"]("toolbarClick", function InputResepFormulariumComponent_Template_ejs_grid_toolbarClick_77_listener($event) { return ctx.onToolbarClick($event); })("load", function InputResepFormulariumComponent_Template_ejs_grid_load_77_listener($event) { return ctx.onLoad($event); })("rowDataBound", function InputResepFormulariumComponent_Template_ejs_grid_rowDataBound_77_listener($event) { return ctx.rowDataBound($event); })("dataBound", function InputResepFormulariumComponent_Template_ejs_grid_dataBound_77_listener() { return ctx.onDataBound(); })("rowSelected", function InputResepFormulariumComponent_Template_ejs_grid_rowSelected_77_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function InputResepFormulariumComponent_Template_ejs_grid_actionComplete_77_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipe"](79, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementStart"](80, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](81, "e-column", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](82, "e-column", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](83, "e-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](84, "e-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](85, "e-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](86, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](87, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](88, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](89, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](90, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](91, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](92, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](93, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelement"](94, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplate"](95, InputResepFormulariumComponent_ng_template_95_Template, 24, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](23, 80, ctx.setupRutePemberianObatService.dataSource))("fields", ctx.DropdownRuteFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("readonly", true)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false)("min", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid)("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid)("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](74, 82, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpipeBind1"](79, 84, ctx.dataSourceGrid))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵpureFunction0"](86, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 200)("valueAccessor", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵproperty"]("visible", false)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_18__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__.ComboBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_28__.DropDownListComponent, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_29__.NumericTextBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_19__.OrgLookUpHirarkiComponent, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_20__.AtmLabelComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_30__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 28825:
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/pulang-resep-formularium-irna.component.ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache;
var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PulangResepFormulariumIrnaComponent": () => (/* binding */ PulangResepFormulariumIrnaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 43479);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 88259);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @syncfusion/ej2-data */ 78865);
/* harmony import */ var _json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./json/lookupitem.json */ 22103);
/* harmony import */ var _json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./json/lookuptemplateresep.json */ 26283);
/* harmony import */ var _json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./json/GridResep.json */ 67292);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service */ 59936);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service */ 65203);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service */ 561);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service */ 43233);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service */ 6524);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service */ 80443);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 8210);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);
/* harmony import */ var _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component */ 54313);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);






























const _c0 = ["LookupRacikan"];
const _c1 = ["LookupTemplateResep"];
const _c2 = ["GridResepRacikan"];
const _c3 = ["itemTemplate"];
const _c4 = ["modalTemplateResep"];
function PulangResepFormulariumIrnaComponent_div_21_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", data_r13.nama_generik, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate"](data_r13.sediaan_obat);
} }
function PulangResepFormulariumIrnaComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "ejs-dropdownlist", 59, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("filtering", function PulangResepFormulariumIrnaComponent_div_21_Template_ejs_dropdownlist_filtering_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r14.onFiltering($event); })("change", function PulangResepFormulariumIrnaComponent_div_21_Template_ejs_dropdownlist_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r16.handleChangeObat($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](10, PulangResepFormulariumIrnaComponent_div_21_ng_template_10_Template, 7, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r1.data)("fields", ctx_r1.fields)("placeholder", ctx_r1.text)("query", ctx_r1.query)("sortOrder", ctx_r1.sorting)("allowFiltering", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtextInterpolate1"](" ", ctx_r1.nama_satuan.value, " ");
} }
function PulangResepFormulariumIrnaComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Nama Racikan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_div_22_Template_input_change_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r17.handleChangeNamaRacikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_div_22_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r19.handelClickRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](9, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
function PulangResepFormulariumIrnaComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Kemasan Racikan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "ejs-dropdownlist", 73, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_div_23_Template_ejs_dropdownlist_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r21.handleChangeMetodeRacikan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](9, 3, ctx_r3.setupMetodeRacikanService.dataSource))("fields", ctx_r3.DropdownMetodeRacikanFields)("allowFiltering", true);
} }
function PulangResepFormulariumIrnaComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](4, "Satuan");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "ejs-combobox", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_div_38_Template_ejs_combobox_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r23.handleChangeSatuanAturan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx_r4.dataSourceSatuanAturanPakai)("fields", ctx_r4.DropdownsatuanPakaiFields);
} }
function PulangResepFormulariumIrnaComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "h5", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](2, "Simpan Template Resep Dokter");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_ng_template_83_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r25.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](4, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](8, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](9, "Apakah Dokter Ingin Menyimapan Resep Ini Sebagai Template Resep?");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](11, "Template resep di gunakan untuk membuat resep dengan data resep yg sudah ada");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](12, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](17, "Nama Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](19, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](20, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](21, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_ng_template_83_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r27.handleClickSimpanTemplateResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](22, "Simpan Template Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](23, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_ng_template_83_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵrestoreView"](_r26); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵnextContext"](); return ctx_r28.handleClickAbaikan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](24, "Tidak");
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
} }
class PulangResepFormulariumIrnaComponent {
    constructor(formBuilder, resepFormulariumIrnaService, setupLabelPemakaianObatService, setupTambahanAturanPakaiService, setupSatuanAturanPakaiService, setupMetodeRacikanService, renderer, daftarPasienService, router, modalService, utilityService, setupOutletService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrnaService = resepFormulariumIrnaService;
        this.setupLabelPemakaianObatService = setupLabelPemakaianObatService;
        this.setupTambahanAturanPakaiService = setupTambahanAturanPakaiService;
        this.setupSatuanAturanPakaiService = setupSatuanAturanPakaiService;
        this.setupMetodeRacikanService = setupMetodeRacikanService;
        this.renderer = renderer;
        this.daftarPasienService = daftarPasienService;
        this.router = router;
        this.modalService = modalService;
        this.utilityService = utilityService;
        this.setupOutletService = setupOutletService;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'simpan', Captions: 'Simpan Resep Pulang', Icons1: 'fas fa-save fa-sm' },
        ];
        this.onSetTemplateResep = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.urlRacikan = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN;
        this.urlTemplateResep = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_TEMPLATE_RESEP;
        this.GridLookUpItem = /*#__PURE__*/ (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_json_lookupitem_json__WEBPACK_IMPORTED_MODULE_3__, 2)));
        this.GridlookUpTemplateResep = /*#__PURE__*/ (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache || (_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4___namespace_cache = __webpack_require__.t(_json_lookuptemplateresep_json__WEBPACK_IMPORTED_MODULE_4__, 2)));
        this.isGetFromTemplate = false;
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
        this.GridDaftarObatColumns = /*#__PURE__*/ (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache || (_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5___namespace_cache = __webpack_require__.t(_json_GridResep_json__WEBPACK_IMPORTED_MODULE_5__, 2)));
        this.GridDetailResepRacikanDatasource = [];
        this.GridResepRacikanDatasource = [];
        this.dataSourceLabelPemakaian = [];
        this.dataSourceTambahanAturanPakai = [];
        this.dataSourceSatuanAturanPakai = [];
        this.counter = 0;
        this.counterRacikan = 0;
        this.dataSourceGrid = new rxjs__WEBPACK_IMPORTED_MODULE_19__.BehaviorSubject([]);
        this.dataScourceGridChild = [];
        this.whereField = "psg.nama_generik";
        this.select = "'nama_generik', 'id_formularium','sediaan_obat'";
        // SERVER SIDE 
        this.IsUserLogin = JSON.parse(localStorage.getItem('UserData'));
        this.data = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.fields = { text: 'nama_generik', value: 'id_formularium' };
        this.query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.text = "Select a Obat";
        this.sorting = 'Ascending';
        this.onFiltering = (e) => {
            // load overall data when search key empty.
            if (e.text === '') {
                e.updateData(this.data);
            }
            else {
                let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                e.updateData(this.data, query);
            }
        };
        //=====================
        this.dataChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.DataManager({
            headers: [
                {
                    Authorization: "Bearer " + this.IsUserLogin.token
                }
            ],
            url: src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_1__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA.GET_FORMULARIUM_PARAMS_DROPDOWNLIST,
            adaptor: new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.ODataV4Adaptor,
            crossDomain: true,
        });
        this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', '', true);
        this.dataheader = null;
        this.baru = 0;
        this.setIdOutlet = 0;
    }
    get width() { return window.innerWidth; }
    ;
    ngOnInit() {
        this.FormAddObat = this.formBuilder.group({
            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [null, []],
            metode_racikan: ['', []],
            id_formularium: [null, []],
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
            label_tambahan_aturan_pakai_obat: ['', []],
        });
        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepFormulariumIrnaService.dataSelectRacikan.next(SelectedDataRacikanObat);
        this.itemsParams = {
            create: () => {
                if (SelectedDataRacikanObat) {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', SelectedDataRacikanObat.nama_obat, true);
                }
                else {
                    this.queryChild = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium')
                        .select([this.select])
                        .take(10).where(this.whereField, 'contains', '', true);
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
                this.itemsObj = new _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_21__.DropDownList({
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
                            let query = new _syncfusion_ej2_data__WEBPACK_IMPORTED_MODULE_20__.Query().from('Formularium').select([this.select]).take(10).where(this.whereField, 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_formularium;
                        document.getElementsByName("nama_satuan")[0].value = args.itemData.sediaan_obat;
                        console.log('currentItem', currentIdItem);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if (SelectedDataRacikanObat) {
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_formularium;
                        this.itemsObj.value = currentIdItem;
                    }, 10);
                }
            }
        };
        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepFormulariumIrnaService.dataSourceChildGrid.next(dataSourceChild);
        this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataSourceGrid.value);
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
                { field: "counter", headerText: 'counter', width: 100, visible: false },
                { field: "counterRacikan", headerText: 'counterRacikan', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Sediaan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_formularium", headerText: 'id', width: 100, visible: false },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data;
                console.log('row selected', SelectedDataRacikanObat);
            },
            actionBegin(args) {
                console.log('begin', args);
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    args.data[counter] = this.parentDetails.parentKeyFieldValue;
                    args.data['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    //   (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                    SelectedDataRacikanObat = null;
                }
                // if (args.requestType === 'beginEdit'){
                //     SelectedDataRacikanObat = args.rowData;
                // }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_formularium = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_formularium = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan; }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                    let data = [];
                    dataSourceChild.orderBy('-counterRacikan');
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent);
                    });
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500);
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
        this.resepFormulariumIrnaService.setDataObat([]);
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;
        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/J';
        this.setupOutletService.setDataSource();
    }
    onLoad(args) {
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
    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args) {
        this.nama_satuan.setValue(args.itemData.sediaan_obat);
        this.nama_obat.setValue(args.itemData.nama_generik);
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
        this.LookupRacikan.onOpenModal();
    }
    handelClickTemplateResep() {
        this.LookupTemplateResep.onOpenModal();
    }
    handleChangeMetodeRacikan(args) {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
    }
    handleChangeOutlet(args) {
        this.setIdOutlet = args.value;
    }
    heandleSelectedRacikan(args) {
        this.counter++;
        args.counter = this.counter;
        args.is_racikan = true;
        args.no_urut = 0;
        args.id_formularium = null;
        args.nama_satuan = null;
        args.label = null;
        args.nama_racikan = args.nama_obat;
        args.label = args.ket_label;
        args.aturan = args.ket_aturan;
        // this.resepFormulariumIrnaService.addDetail(args);
        let dataObat = this.dataSourceGrid.value;
        dataObat.push(args);
        this.dataSourceGrid.next(dataObat);
        this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataObat);
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counter = this.counter;
            element.counterRacikan = counterRacikan;
            element.komposisi = element.kandungan_obat;
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        this.resepFormulariumIrnaService.dataSourceChildGrid.next(detail);
        this.GridResepRacikan.refresh();
    }
    heandleSelectedTemplateResep(args) {
        console.log(args);
        let obat = [];
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
            // this.resepFormulariumIrnaService.addDetail(element);
            obat.push(element);
            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });
        });
        this.dataSourceGrid.next(obat);
        this.resepFormulariumIrnaService.dataSourceChildGrid.next(detail);
        this.resepFormulariumIrnaService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.onSetTemplateResep.emit(true);
    }
    handleAddObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            this.counter++;
            FormAddObat.counter = this.counter;
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            // this.resepFormulariumIrnaService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value;
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataDetail);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }
    validasi(FormData) {
        let message = [];
        let htmlSelection = '';
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi');
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi');
            }
        }
        else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih');
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih');
            }
        }
        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi');
        }
        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi');
        }
        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value, index) => {
                htmlSelection += `<li>${value}</li>`;
            });
            htmlSelection += `</ul></div>`;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            });
            return false;
        }
        else {
            return true;
        }
    }
    onResetFormObat() {
        this.FormAddObat.reset();
        this.qty_resep.setValue(1);
        this.is_racikan.setValue(false);
    }
    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat) {
        if (this.validasi(FormAddObat)) {
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value;
            dataDetail[this.currentIndex] = FormAddObat;
            this.dataSourceGrid.next(dataDetail);
            this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat();
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
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
                let dataObat = this.resepFormulariumIrnaService.dataSourceParentGrid.value;
                dataObat.splice(this.currentIndex, 1);
                this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataObat);
                this.dataSourceGrid.next(dataObat);
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
            id_formularium: data.id_formularium,
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
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepFormulariumIrnaService.dataSourceParentGrid.next(dataSourceParent);
        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }
    // ** Grid Daftar Obat method
    onRowSelected(args) {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }
    onClickButtonNav(args) {
        switch (args) {
            case "simpan":
                this.Insert();
                break;
            case "kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irna/daftar-resep-formularium-irna');
                break;
            default:
                break;
        }
    }
    Insert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_22__.__awaiter)(this, void 0, void 0, function* () {
            if (this.setIdOutlet == 0) {
                this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '');
                return false;
            }
            this.dataheader = {
                id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
                id_register: this.daftarPasienService.ActivePasien.value.id_register,
                id_outlet: this.setIdOutlet,
                id_person: this.daftarPasienService.ActivePasien.value.id_person,
                jenis_rawat: 'I',
                nama_template: '',
                tanggal_resep: moment__WEBPACK_IMPORTED_MODULE_0___default()().format()
            };
            this.newdetail = this.resepFormulariumIrnaService.dataSourceParentGrid.value.filter((item) => {
                return item.is_racikan && !item.set_racikan_id;
            });
            this.baru = 0;
            if (!this.isGetFromTemplate) {
                // this.modalRef = this.modalService.show(
                //     this.modalTemplateResep,
                //     Object.assign({}, { class: 'modal-lg' })
                // );
                this.methodConfirmSetRacikan(0);
            }
            else {
                this.methodConfirmSetRacikan(0);
            }
        });
    }
    handleClickSimpanTemplateResepDokter() {
        let nama_resep = document.getElementsByName("nama_resep")[0].value;
        this.dataheader.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1);
    }
    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0);
    }
    methodConfirmSetRacikan(simpan_template) {
        if (this.newdetail.length > 0) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
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
                this.methodInsert(this.dataheader, simpan_template, this.baru);
            });
        }
        else {
            this.methodInsert(this.dataheader, simpan_template, 0);
        }
    }
    methodInsert(Data, is_simpan_template, is_simpan_racikan) {
        this.resepFormulariumIrnaService.pulangResepRawatInap(Data, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                //   this.resepFormulariumIrnaService.reset();
                window.location.reload();
                this.isGetFromTemplate = false;
            });
        });
    }
    get is_racikan() { return this.FormAddObat.get('is_racikan'); }
    ;
    get set_racikan_id() { return this.FormAddObat.get('set_racikan_id'); }
    ;
    get id_metode_racikan() { return this.FormAddObat.get('id_metode_racikan'); }
    ;
    get metode_racikan() { return this.FormAddObat.get('metode_racikan'); }
    ;
    get id_formularium() { return this.FormAddObat.get('id_formularium'); }
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
}
PulangResepFormulariumIrnaComponent.ɵfac = function PulangResepFormulariumIrnaComponent_Factory(t) { return new (t || PulangResepFormulariumIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_6__.ResepFormulariumIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_label_pemakaian_obat_setup_label_pemakaian_obat_service__WEBPACK_IMPORTED_MODULE_7__.SetupLabelPemakaianObatService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_tambahan_aturan_pakai_setup_tambahan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_8__.SetupTambahanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_satuan_aturan_pakai_setup_satuan_aturan_pakai_service__WEBPACK_IMPORTED_MODULE_9__.SetupSatuanAturanPakaiService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_metode_racikan_setup_metode_racikan_service__WEBPACK_IMPORTED_MODULE_10__.SetupMetodeRacikanService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_18__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_11__.DaftarPasienService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_24__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_13__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_setup_data_setup_outlet_setup_outlet_service__WEBPACK_IMPORTED_MODULE_14__.SetupOutletService)); };
PulangResepFormulariumIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineComponent"]({ type: PulangResepFormulariumIrnaComponent, selectors: [["app-pulang-resep-formularium-irna"]], viewQuery: function PulangResepFormulariumIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.LookupTemplateResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵloadQuery"]()) && (ctx.modalTemplateResep = _t.first);
    } }, outputs: { onSetTemplateResep: "onSetTemplateResep" }, decls: 85, vars: 72, consts: [[3, "ButtonNav", "onClickButtonNav"], [3, "formGroup"], [1, "row"], [1, "col-sm-6"], [1, "card"], [1, "card-body", "p-2"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], ["id", "marital", 3, "dataSource", "fields", "allowFiltering", "change"], ["MaritalOutletDropdown", ""], [1, "row", "pt-2", "mb-2"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["for", "DropdownObat", 1, "form-label"], ["type", "checkbox", "formControlName", "is_racikan", 1, "form-check-input"], ["class", "col-lg-4 col-md-4 col-sm-4 col-xs-4", 4, "ngIf"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3", 4, "ngIf"], ["class", "col-lg-2 col-md-2 col-sm-2 col-xs-2", 4, "ngIf"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "pe-1"], ["for", "NumericQty", 1, "form-label"], ["id", "NumericQty", "formControlName", "qty_resep", 3, "format", "showSpinButton", "showClearButton", "ste"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "pe-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], ["id", "DropdownLabelPemakaian", "formControlName", "label", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], ["class", "col-lg-1 col-md-1 col-sm-1 col-xs-1 pe-1", 4, "ngIf"], ["id", "DropdownTambahanAturanPakai", "formControlName", "aturan", "popupWidth", "25rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "ps-4"], [1, "row", "align-content-center", "h-100", "mb-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-0", 3, "hidden"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-plus-circle", "fa-sm"], [3, "hidden"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", 3, "disabled", "click"], [1, "fas", "fa-edit", "fa-sm"], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "queryString", "modal-title", "onGetSelectedData"], ["LookupRacikan", ""], [3, "lookup-url", "columns", "columnsChild", "filter-lookup", "modal-title", "queryString", "onGetSelectedData"], ["LookupTemplateResep", ""], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12"], [1, "card-body", "p-0"], ["height", "calc(100vh - 24rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "toolbar", "toolbarClick", "load", "rowDataBound", "dataBound", "rowSelected", "actionComplete"], ["GridResepRacikan", ""], ["field", "no_urut", "headerText", "no_urut", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "is_racikan", "headerText", "is_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "set_racikan_id", "headerText", "set_racikan_id", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_metode_racikan", "headerText", "id_metode_racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_item", "headerText", "id_item", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_label_pemakaian_obat", "headerText", "id_label_pemakaian_obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "id_tambahan_aturan_pakai", "headerText", "id_tambahan_aturan_pakai", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "nama_satuan", "headerText", "Satuan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "metode_racikan", "headerText", "Kemasan Racikan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "qty_resep", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", "format", "N2", 3, "visible", "allowEditing"], ["field", "ket_label", "headerText", "Pemakaian", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "ket_aturan", "headerText", "Aturan", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["modalTemplateResep", ""], [1, "col-lg-10", "col-md-10", "col-sm-10", "col-xs-10", "pe-0"], ["id", "DropdownObat", "formControlName", "id_formularium", "popupWidth", "55rem", 3, "allowFiltering", "dataSource", "fields", "placeholder", "query", "sortOrder", "filtering", "change"], ["Drop", ""], ["itemTemplate", ""], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "px-0"], ["id", "basic-addon1", 1, "input-group-text", "bg-primary", "text-white"], [1, "col-6"], [1, "name"], [1, "city"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3"], [1, "input-group"], ["type", "text", "formControlName", "nama_racikan", 1, "form-control", "form-select-sm", 3, "change"], ["id", "btnInputGroup", "type", "button", 1, "btn", "btn-primary", 2, "padding", ".1rem .8rem", "background-color", "#00afff; border: 0", 3, "click"], [1, "fas", "fa-search"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2"], ["formControlName", "id_metode_racikan", 3, "dataSource", "fields", "allowFiltering", "change"], ["MolDropdown", ""], ["id", "DropdownLabelPemakaian", "formControlName", "id_satuan_aturan_pakai", "popupWidth", "30rem", 3, "allowFiltering", "dataSource", "fields", "change"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", 2, "text-align", "center"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "mb-2", "row"], [1, "col-sm-4"], ["for", "nama_resep"], [1, "col-sm-8"], ["type", "text", "name", "nama_resep", 1, "form-control", "form-control-sm"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function PulangResepFormulariumIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onClickButtonNav", function PulangResepFormulariumIrnaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](8, "atm-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](10, "ejs-dropdownlist", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_Template_ejs_dropdownlist_change_10_listener($event) { return ctx.handleChangeOutlet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](17, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](18, "Racik");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](21, PulangResepFormulariumIrnaComponent_div_21_Template, 15, 8, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](22, PulangResepFormulariumIrnaComponent_div_22_Template, 10, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](23, PulangResepFormulariumIrnaComponent_div_23_Template, 10, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](27, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](28, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](30, "ejs-numerictextbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](31, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](35, "Label Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](37, "ejs-combobox", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_Template_ejs_combobox_change_37_listener($event) { return ctx.handleChangeLabel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](38, PulangResepFormulariumIrnaComponent_div_38_Template, 7, 3, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](39, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](42, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](43, "Aturan Tambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](45, "ejs-combobox", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("change", function PulangResepFormulariumIrnaComponent_Template_ejs_combobox_change_45_listener($event) { return ctx.handleChangeAturan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](47, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](48, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](49, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_Template_button_click_49_listener() { return ctx.handleAddObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](50, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](51, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](52, "\u00A0Obat");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](54, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("click", function PulangResepFormulariumIrnaComponent_Template_button_click_54_listener() { return ctx.onUpdateDataObat(ctx.FormAddObat.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](55, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtext"](57, "\u00A0Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](58, "org-look-up-hirarki", 36, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function PulangResepFormulariumIrnaComponent_Template_org_look_up_hirarki_onGetSelectedData_58_listener($event) { return ctx.heandleSelectedRacikan($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](60, "org-look-up-hirarki", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("onGetSelectedData", function PulangResepFormulariumIrnaComponent_Template_org_look_up_hirarki_onGetSelectedData_60_listener($event) { return ctx.heandleSelectedTemplateResep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](62, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](63, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](64, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](66, "ejs-grid", 42, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵlistener"]("toolbarClick", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_toolbarClick_66_listener($event) { return ctx.onToolbarClick($event); })("load", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_load_66_listener($event) { return ctx.onLoad($event); })("rowDataBound", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_rowDataBound_66_listener($event) { return ctx.rowDataBound($event); })("dataBound", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_dataBound_66_listener() { return ctx.onDataBound(); })("rowSelected", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_rowSelected_66_listener($event) { return ctx.onRowSelected($event); })("actionComplete", function PulangResepFormulariumIrnaComponent_Template_ejs_grid_actionComplete_66_listener($event) { return ctx.onActionComplete($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipe"](68, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementStart"](69, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](70, "e-column", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](71, "e-column", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](72, "e-column", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](73, "e-column", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](74, "e-column", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](75, "e-column", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](76, "e-column", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](77, "e-column", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](78, "e-column", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](79, "e-column", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](80, "e-column", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](81, "e-column", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelement"](82, "e-column", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplate"](83, PulangResepFormulariumIrnaComponent_ng_template_83_Template, 25, 0, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("formGroup", ctx.FormAddObat);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("LabelCaption", "Depo Farmasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](12, 68, ctx.setupOutletService.dataSource))("fields", ctx.SetupOutletDropdownField)("allowFiltering", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceLabelPemakaian)("fields", ctx.DropdownLabelFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("ngIf", !ctx.is_racikan.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("allowFiltering", true)("dataSource", ctx.dataSourceTambahanAturanPakai)("fields", ctx.DropdownAturanFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵclassMap"](ctx.width >= 1023 && ctx.width <= 1200 ? "pt-1" : "pt-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState != "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.FormAddObatState == "input");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("disabled", ctx.FormAddObat.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("hidden", ctx.width >= 1023 && ctx.width <= 1200);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlRacikan)("columns", ctx.GridLookUpItem.columns)("columnsChild", ctx.GridLookUpItem.columnsChild)("filter-lookup", ctx.GridLookUpItem.filter)("queryString", "set_racikan_id")("modal-title", "Data Racikan Dokter");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("lookup-url", ctx.urlTemplateResep)("columns", ctx.GridlookUpTemplateResep.columns)("columnsChild", ctx.GridlookUpTemplateResep.columnsChild)("filter-lookup", ctx.GridlookUpTemplateResep.filter)("modal-title", "Data Template Resep Dokter")("queryString", "resep_id");
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵpipeBind1"](68, 70, ctx.dataSourceGrid))("childGrid", ctx.ChildGrid)("toolbar", ctx.GridDaftarObatToolbar);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", false)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵproperty"]("visible", true)("allowEditing", false);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_15__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_16__.AtmLabelComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__.DropDownListComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_27__.NumericTextBoxComponent, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_25__.ComboBoxComponent, _shared_components_organism_loockUp_org_look_up_hirarki_org_look_up_hirarki_component__WEBPACK_IMPORTED_MODULE_17__.OrgLookUpHirarkiComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_28__.AggregateColumnDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe], styles: [""] });


/***/ }),

/***/ 99746:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/view-resep-formularium-irna/view-resep-formularium-irna.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewResepFormulariumIrnaComponent": () => (/* binding */ ViewResepFormulariumIrnaComponent)
/* harmony export */ });
/* harmony import */ var _json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/grid.config.json */ 69853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service */ 59936);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/encryption.service */ 26512);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 26966);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 63301);
/* harmony import */ var src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/helpers/utility/utility-helper.service */ 96922);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 27034);
/* harmony import */ var _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @syncfusion/ej2-angular-grids */ 46555);
/* harmony import */ var _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @syncfusion/ej2-angular-inputs */ 48502);













const _c0 = ["LookupRacikan"];
const _c1 = ["GridResepRacikan"];
const _c2 = ["itemTemplate"];
const _c3 = ["modalTambahanHariResep"];
const _c4 = ["modalStopResep"];
function ViewResepFormulariumIrnaComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Tambahan Hari Pada Resep");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrnaComponent_ng_template_21_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Tambah Jumlah Hari");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "ejs-numerictextbox", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Hari ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrnaComponent_ng_template_21_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](15); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r8.handleClickLanjutkanResepDokter(_r5.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Lanjukan Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r2.htmlSelection, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("format", "N0")("showSpinButton", false)("showClearButton", false);
} }
function ViewResepFormulariumIrnaComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Stop Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrnaComponent_ng_template_23_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.modalRef.hide(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Anda Yakin Akan Menghentikan Obat ini?");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ViewResepFormulariumIrnaComponent_ng_template_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.handleClickStopResepDokter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Stop Obat");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHTML", ctx_r4.htmlSelection, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
const _c5 = function () { return { wrapMode: "Both" }; };
class ViewResepFormulariumIrnaComponent {
    constructor(formBuilder, resepFormulariumIrnaService, router, encryptionService, activatedRoute, utilityService, modalService, utilityHelperService) {
        this.formBuilder = formBuilder;
        this.resepFormulariumIrnaService = resepFormulariumIrnaService;
        this.router = router;
        this.encryptionService = encryptionService;
        this.activatedRoute = activatedRoute;
        this.utilityService = utilityService;
        this.modalService = modalService;
        this.utilityHelperService = utilityHelperService;
        this.ButtonNav = [
            { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
            { Id: 'lanjutkan', Captions: 'Lanjutkan Resep', Icons1: 'fa-forward fa-sm' },
            { Id: 'ubah', Captions: 'Ubah Resep', Icons1: 'fa-edit fa-sm' },
            { Id: 'stop', Captions: 'Hentikan Resep', Icons1: 'fa-stop-circle fa-sm' },
        ];
        this.GridConfig = /*#__PURE__*/ (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_json_grid_config_json__WEBPACK_IMPORTED_MODULE_0__, 2)));
        this.inputFieldState = 'detail';
        this.keterangan = (field, data1) => {
            return data1['nama_rute_pemberian_obat'] +
                ', sehari ' + data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + ' ' + data1['ket_label'] + ' '
                + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
            ;
        };
        this.quantity = (field, data1) => {
            return data1['qty_harian'] + ' ' +
                data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
        };
        this.dataSourceChild = [];
        this.dataSource = [];
        this.dataHeader = [];
        this.htmlSelection = '';
    }
    ngOnInit() {
        this.formInput = this.formBuilder.group({
            no_register: ['', []],
            no_rekam_medis: ['', []],
            poli: ['', []],
            pasien: ['', []],
            bed: ['', []],
            dokter: ['', []],
            umur: ['', []],
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
        this.resepFormulariumIrnaService.onGetById(id).subscribe((result) => {
            this.formInput.setValue({
                bed: result.data.bed_no + ' - ' + result.data.bed_no,
                pasien: result.data.nama_pasien,
                dokter: result.data.nama_dokter,
                no_register: result.data.no_register,
                no_rekam_medis: result.data.no_rekam_medis,
                poli: result.data.nama_poli,
                umur: result.data.usia
            });
            this.dataHeader = result.data;
            this.dataSource = result.data.details;
            this.GridResepRacikan.refresh();
            this.mapingRacikan(result.data.details);
            let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
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
    handleClickLanjutkanResepDokter(args) {
        let Body;
        Body = this.GridResepRacikan.getSelectedRecords();
        Body.map((e, i) => {
            e.jumlah_hari = args;
            return e;
        });
        // console.log(Body);
        this.resepFormulariumIrnaService.lanjutakanResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di lanjutkan', result.message)
                .then(() => {
                this.modalRef.hide();
                this.onLoadDetailData(this.dataHeader.resep_id);
            });
        });
    }
    handleClickStopResepDokter(args) {
        let Body;
        Body = this.GridResepRacikan.getSelectedRecords();
        this.resepFormulariumIrnaService.stopResepRawatInap(Body).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Obat ini berhasil di hentikan/Stop', result.message)
                .then(() => {
                this.modalRef.hide();
                this.onLoadDetailData(this.dataHeader.resep_id);
            });
        });
    }
    onClickButtonNav(args) {
        let data = this.GridResepRacikan.getSelectedRecords();
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('Dokter/resep-formularium-irna/daftar-resep-formularium-irna');
                break;
            case "lanjutkan":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '');
                }
                else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(this.modalTambahanHariResep, Object.assign({}, { class: 'modal-md' }));
                }
                break;
            case "ubah":
                const id = this.encryptionService.encrypt(this.dataHeader.resep_id + ',ubah');
                this.router.navigate(['Dokter/resep-formularium-irna/ubah-resep-formularium-irna', id, "GRAHCIS"]);
                break;
            case "pulang":
                const id_resep = this.encryptionService.encrypt(this.dataHeader.resep_id + ',pulang');
                this.router.navigate(['Dokter/resep-irna/ubah-resep-irna', id_resep, "GRAHCIS"]);
                break;
            case "stop":
                if (data.length == 0) {
                    this.utilityService.onShowingCustomAlert('warning', 'Obat belum di pilih', '');
                }
                else {
                    this.templateSelection();
                    this.modalRef = this.modalService.show(this.modalStopResep, Object.assign({}, { class: 'modal-md' }));
                }
                break;
            default:
                break;
        }
    }
    templateSelection() {
        let data = this.GridResepRacikan.getSelectedRecords();
        this.htmlSelection = '<ul>';
        data.forEach((value, index) => {
            this.htmlSelection += `<li>${value.nama_obat}</li>`;
        });
        this.htmlSelection += '</ul>';
        console.log(this.htmlSelection);
    }
}
ViewResepFormulariumIrnaComponent.ɵfac = function ViewResepFormulariumIrnaComponent_Factory(t) { return new (t || ViewResepFormulariumIrnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_Pharmacy_services_resep_formularium_resep_formularium_irna_service__WEBPACK_IMPORTED_MODULE_1__.ResepFormulariumIrnaService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_encryption_service__WEBPACK_IMPORTED_MODULE_2__.EncryptionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_helpers_utility_utility_helper_service__WEBPACK_IMPORTED_MODULE_5__.UtilityHelperService)); };
ViewResepFormulariumIrnaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ViewResepFormulariumIrnaComponent, selectors: [["app-view-resep-formularium-irna"]], viewQuery: function ViewResepFormulariumIrnaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.LookupRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.GridResepRacikan = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.itemTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modalTambahanHariResep = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.modalStopResep = _t.first);
    } }, decls: 25, vars: 38, consts: [[3, "ButtonNav", "HeaderRibbonClass", "ButtonNavClass", "onClickButtonNav"], [1, "row"], [1, "col-sm-4"], [3, "formGroup"], ["formControlName", "no_register", 3, "label", "inputFieldState"], ["formControlName", "no_rekam_medis", 3, "label", "inputFieldState"], ["formControlName", "pasien", 3, "label", "inputFieldState"], ["formControlName", "poli", 3, "label", "inputFieldState"], ["formControlName", "bed", 3, "label", "inputFieldState"], ["formControlName", "dokter", 3, "label", "inputFieldState"], ["formControlName", "umur", 3, "label", "inputFieldState"], [1, "col-sm-8"], [1, "card"], [1, "card-body", "p-0"], ["height", "calc(100vh - 15rem)", "gridLines", "Both", "rowHeight", "30", 3, "dataSource", "childGrid", "allowTextWrap", "textWrapSettings", "rowDataBound", "dataBound"], ["GridResepRacikan", ""], [3, "width", "field", "visible", "type", "textAlign", "headerTextAlign"], ["field", "nama_obat", "headerText", "Nama Obat", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing"], ["field", "rute_pemberian_obat", "headerText", "Resep", "editType", "defaultEdit", "textAlign", "left", "headerTextAlign", "center", 3, "visible", "allowEditing", "valueAccessor"], ["field", "qty_harian", "headerText", "Qty", "editType", "defaultEdit", "textAlign", "right", "headerTextAlign", "center", 3, "visible", "allowEditing", "width", "valueAccessor"], ["modalTambahanHariResep", ""], ["modalStopResep", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-10"], [1, "row", "mx-0", "my-1"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "text-success", 3, "innerHTML"], [1, "col-sm-9", "pe-0"], ["id", "tambahan_hari", "name", "tambahan_hari", 3, "format", "showSpinButton", "showClearButton"], ["tambah_hari", ""], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "px-0"], ["id", "basic-addon1", 1, "input-group-text"], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "text-danger", 3, "innerHTML"]], template: function ViewResepFormulariumIrnaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickButtonNav", function ViewResepFormulariumIrnaComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.onClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "mol-input-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "mol-input-text", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "mol-input-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "mol-input-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "mol-input-text", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "mol-input-text", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "mol-input-text", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ejs-grid", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("rowDataBound", function ViewResepFormulariumIrnaComponent_Template_ejs_grid_rowDataBound_14_listener($event) { return ctx.rowDataBound($event); })("dataBound", function ViewResepFormulariumIrnaComponent_Template_ejs_grid_dataBound_14_listener() { return ctx.onDataBound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "e-columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "e-column", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](18, "e-column", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "e-column", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "e-column", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, ViewResepFormulariumIrnaComponent_ng_template_21_Template, 22, 4, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, ViewResepFormulariumIrnaComponent_ng_template_23_Template, 14, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav)("HeaderRibbonClass", "col-lg-4 col-md-4 col-sm-4 col-xs-4")("ButtonNavClass", "col-lg-8 col-md-8 col-sm-8 col-xs-8");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "No Register")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "No RM")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Pasien")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Poli")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Bed")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Dokter")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("label", "Umur")("inputFieldState", ctx.inputFieldState);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.dataSource)("childGrid", ctx.childGrid)("allowTextWrap", true)("textWrapSettings", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 50)("field", "Checkbox")("visible", true)("type", "checkbox")("textAlign", "Center")("headerTextAlign", "Center");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", false)("valueAccessor", ctx.keterangan);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("allowEditing", true)("width", 220)("valueAccessor", ctx.quantity);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_6__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_7__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.GridComponent, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.ColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.AggregateColumnsDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.ColumnDirective, _syncfusion_ej2_angular_grids__WEBPACK_IMPORTED_MODULE_11__.AggregateColumnDirective, _syncfusion_ej2_angular_inputs__WEBPACK_IMPORTED_MODULE_12__.NumericTextBoxComponent], styles: [""] });


/***/ }),

/***/ 33392:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irda.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepFormulariumIrdaService": () => (/* binding */ ResepFormulariumIrdaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);







class ResepFormulariumIrdaService {
    constructor(httpOperationService, notificationService, daftarPasienService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.daftarPasienService = daftarPasienService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRDA;
        this.dataHistoryResep = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this._dataDetailRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetailRacikan$ = this._dataDetailRacikan.asObservable();
        this.dataObat = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceParentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceChildGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSelectRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.jumlah_item = 0;
        this.counter = 0;
    }
    get dataDetailRacikan() {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val) {
        this._dataDetailRacikan.next(val);
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    onInitList() {
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req) {
        let id_person = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER + "/" + id_person, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetByIdRegisterToTrans(id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER + "/" + id_register).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }
    setDataResep(req) {
        this.onGetAllByRegister(req).subscribe((result) => {
            this.dataHistoryResep.next(result.data);
        });
    }
    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
 * Service Untuk Menampilkan data header berdasarkan Id
 * @onGetAll Observable<SetupPabrikModel>
 */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    onGetAllByRegister(req) {
        let id_register = 1; //this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER + "/" + id_register, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    addDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    addDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ];
    }
    setDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = detailRacikan;
    }
    editDetail(index, data) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    saveResep() {
        console.log('parent', this.dataDetail);
        console.log('child', this.dataSourceChildGrid.value);
    }
    Insert(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        console.log(this.dataSourceChildGrid.value);
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP + '/' + is_simpan_template + '/' + is_simpan_racikan, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    sum() {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }
    reset() {
        this.dataSourceChildGrid.next([]);
        this.dataDetail = [];
    }
    stopResepRawatInap(data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_STOP, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    ubahResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    pulangResepRawatInap(Data, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data,
            id_register: Data.id_register
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + is_simpan_racikan, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    lanjutakanResepRawatInap(Body) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Pulang(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        let param = {
            id_register: Data.id_register,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + is_simpan_racikan, param)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
ResepFormulariumIrdaService.ɵfac = function ResepFormulariumIrdaService_Factory(t) { return new (t || ResepFormulariumIrdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__.DaftarPasienService)); };
ResepFormulariumIrdaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResepFormulariumIrdaService, factory: ResepFormulariumIrdaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 46696:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irja.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepFormulariumIrjaService": () => (/* binding */ ResepFormulariumIrjaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var src_app_api_PHARMACY_RESEP_DOKTER_RESEP_DOKTER_IRNA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/api/PHARMACY/RESEP-DOKTER/RESEP_DOKTER_IRNA */ 37360);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);








class ResepFormulariumIrjaService {
    constructor(httpOperationService, notificationService, daftarPasienService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.daftarPasienService = daftarPasienService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRJA;
        this.API_PULANG_IRNA = src_app_api_PHARMACY_RESEP_DOKTER_RESEP_DOKTER_IRNA__WEBPACK_IMPORTED_MODULE_1__.BAWA_PULANG;
        this.dataHistoryResep = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this._dataDetailRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataDetailRacikan$ = this._dataDetailRacikan.asObservable();
        this.dataObat = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataAntrianIrja = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataSourceParentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataSourceChildGrid = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject([]);
        this.dataSelectRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({});
        this.jumlah_item = 0;
        this.counter = 0;
    }
    get dataDetailRacikan() {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val) {
        this._dataDetailRacikan.next(val);
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    generadeNoAntrian(NoRegister) {
        return this.httpOperationService.defaultGetRequest(this.API.GENERADE_NO_ANTRIAN + "/" + NoRegister).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }
    setDataResep(req) {
        this.onGetAllByRegister(req).subscribe((result) => {
            this.dataHistoryResep.next(result.data);
        });
    }
    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetAllByRegister(req) {
        let id_person = this.daftarPasienService.ActivePasien.value.id_person;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER + "/" + id_person, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetAntrian() {
        this.httpOperationService.defaultPostRequestWithoutLoading(this.API.GET_ANTRIAN, [])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }))
            .subscribe((result) => {
            // console.log('TEST DATA LOAD BARU',result.data);
            this.dataAntrianIrja.next(result.data);
        });
    }
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    addDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    addDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ];
    }
    editDetail(index, data) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    saveResep() {
        console.log('parent', this.dataDetail);
        console.log('child', this.dataSourceChildGrid.value);
    }
    Insert(Data, is_simpan_template, is_simpan_racikan) {
        let nama_obat = '';
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        console.log('dataSourceChildGrid', this.dataSourceChildGrid.value);
        console.log('dataSourceParentGrid', this.dataSourceParentGrid.value);
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].nama_obat != nama_obat) ? 0 : urut;
                nama_obat = this.dataSourceParentGrid.value[index].nama_obat;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        console.log('Data', Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP_IRJA + '/' + is_simpan_template + '/' + is_simpan_racikan, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Pulang(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        let param = {
            id_register: Data.id_register,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API_PULANG_IRNA + '/' + is_simpan_racikan, param)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    sum() {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }
    reset() {
        this.dataSourceChildGrid.next([]);
        this.dataSourceParentGrid.next([]);
    }
}
ResepFormulariumIrjaService.ɵfac = function ResepFormulariumIrjaService_Factory(t) { return new (t || ResepFormulariumIrjaService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_4__.DaftarPasienService)); };
ResepFormulariumIrjaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ResepFormulariumIrjaService, factory: ResepFormulariumIrjaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59936:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/resep-formularium/resep-formularium-irna.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepFormulariumIrnaService": () => (/* binding */ ResepFormulariumIrnaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service */ 53786);







class ResepFormulariumIrnaService {
    constructor(httpOperationService, notificationService, daftarPasienService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.daftarPasienService = daftarPasienService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_FORMULARIUM.RESEP_FORMULARIUM_IRNA;
        this.dataHistoryResep = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this._dataDetailRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetailRacikan$ = this._dataDetailRacikan.asObservable();
        this.dataObat = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceParentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceChildGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSelectRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.jumlah_item = 0;
        this.counter = 0;
    }
    get dataDetailRacikan() {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val) {
        this._dataDetailRacikan.next(val);
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    onInitList() {
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req) {
        let id_person = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER + "/" + id_person, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetByIdRegisterToTrans(id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER + "/" + id_register).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }
    setDataResep(req) {
        this.onGetAllByRegister(req).subscribe((result) => {
            this.dataHistoryResep.next(result.data);
        });
    }
    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
 * Service Untuk Menampilkan data header berdasarkan Id
 * @onGetAll Observable<SetupPabrikModel>
 */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    onGetAllByRegister(req) {
        let id_register = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER + "/" + id_register, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    addDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    addDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ];
    }
    setDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = detailRacikan;
    }
    editDetail(index, data) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    saveResep() {
        console.log('parent', this.dataDetail);
        this.dataSourceChildGrid.subscribe((res) => {
            console.log(res);
        });
        // console.log('child',this.dataSourceChildGrid.value)
    }
    Insert(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        console.log(this.dataSourceParentGrid.value);
        console.log(this.dataSourceChildGrid.value);
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP + '/' + is_simpan_template + '/' + is_simpan_racikan, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    sum() {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }
    reset() {
        this.dataSourceChildGrid.next([]);
        this.dataDetail = [];
    }
    stopResepRawatInap(data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_STOP, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    ubahResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    pulangResepRawatInap(Data, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data,
            id_register: Data.id_register
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + is_simpan_racikan, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    lanjutakanResepRawatInap(Body) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
ResepFormulariumIrnaService.ɵfac = function ResepFormulariumIrnaService_Factory(t) { return new (t || ResepFormulariumIrnaService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_dashboard_dokter_services_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__.DaftarPasienService)); };
ResepFormulariumIrnaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResepFormulariumIrnaService, factory: ResepFormulariumIrnaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 72568:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-interval-aturan-pakai/setup-interval-aturan-pakai.service.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupIntervalAturanPakaiService": () => (/* binding */ SetupIntervalAturanPakaiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupIntervalAturanPakaiService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_INTERVAL_ATURAN_PAKAI;
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
SetupIntervalAturanPakaiService.ɵfac = function SetupIntervalAturanPakaiService_Factory(t) { return new (t || SetupIntervalAturanPakaiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupIntervalAturanPakaiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupIntervalAturanPakaiService, factory: SetupIntervalAturanPakaiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 65203:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupLabelPemakaianObatService": () => (/* binding */ SetupLabelPemakaianObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupLabelPemakaianObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_LABEL_PEMAKAIAN_OBAT;
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
SetupLabelPemakaianObatService.ɵfac = function SetupLabelPemakaianObatService_Factory(t) { return new (t || SetupLabelPemakaianObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupLabelPemakaianObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupLabelPemakaianObatService, factory: SetupLabelPemakaianObatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6524:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupMetodeRacikanService": () => (/* binding */ SetupMetodeRacikanService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupMetodeRacikanService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_METODE_RACIKAN;
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
SetupMetodeRacikanService.ɵfac = function SetupMetodeRacikanService_Factory(t) { return new (t || SetupMetodeRacikanService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupMetodeRacikanService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupMetodeRacikanService, factory: SetupMetodeRacikanService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 80443:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupOutletService": () => (/* binding */ SetupOutletService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupOutletService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_OUTLET;
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
SetupOutletService.ɵfac = function SetupOutletService_Factory(t) { return new (t || SetupOutletService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupOutletService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupOutletService, factory: SetupOutletService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88817:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRutePemberianObatService": () => (/* binding */ SetupRutePemberianObatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupRutePemberianObatService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_RUTE_PEMBERIAN_OBAT;
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
SetupRutePemberianObatService.ɵfac = function SetupRutePemberianObatService_Factory(t) { return new (t || SetupRutePemberianObatService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupRutePemberianObatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupRutePemberianObatService, factory: SetupRutePemberianObatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43233:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupSatuanAturanPakaiService": () => (/* binding */ SetupSatuanAturanPakaiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupSatuanAturanPakaiService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_SATUAN_ATURAN_PAKAI;
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
SetupSatuanAturanPakaiService.ɵfac = function SetupSatuanAturanPakaiService_Factory(t) { return new (t || SetupSatuanAturanPakaiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupSatuanAturanPakaiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupSatuanAturanPakaiService, factory: SetupSatuanAturanPakaiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 561:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupTambahanAturanPakaiService": () => (/* binding */ SetupTambahanAturanPakaiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);






class SetupTambahanAturanPakaiService {
    constructor(notificationService, httpOperationService) {
        this.notificationService = notificationService;
        this.httpOperationService = httpOperationService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.SETUP_DATA.SETUP_TAMBAHAN_ATURAN_PAKAI;
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
SetupTambahanAturanPakaiService.ɵfac = function SetupTambahanAturanPakaiService_Factory(t) { return new (t || SetupTambahanAturanPakaiService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
SetupTambahanAturanPakaiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SetupTambahanAturanPakaiService, factory: SetupTambahanAturanPakaiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75631:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-dokter/services/resep-dokter-irda/resep-dokter-irda.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepDokterIrdaService": () => (/* binding */ ResepDokterIrdaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var _daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../daftar-pasien/daftar-pasien.service */ 53786);







class ResepDokterIrdaService {
    constructor(httpOperationService, notificationService, daftarPasienService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.daftarPasienService = daftarPasienService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRDA;
        this.dataHistoryResep = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this._dataDetailRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetailRacikan$ = this._dataDetailRacikan.asObservable();
        this.dataObat = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceParentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceChildGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSelectRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.jumlah_item = 0;
        this.counter = 0;
    }
    get dataDetailRacikan() {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val) {
        this._dataDetailRacikan.next(val);
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    onInitList() {
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req) {
        let id_person = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER + "/" + id_person, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetByIdRegisterToTrans(id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER + "/" + id_register).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }
    setDataResep(req) {
        this.onGetAllByRegister(req).subscribe((result) => {
            this.dataHistoryResep.next(result.data);
        });
    }
    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
 * Service Untuk Menampilkan data header berdasarkan Id
 * @onGetAll Observable<SetupPabrikModel>
 */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    onGetAllByRegister(req) {
        let id_register = 1; //this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER + "/" + id_register, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    addDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    addDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ];
    }
    setDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = detailRacikan;
    }
    editDetail(index, data) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    saveResep() {
        console.log('parent', this.dataDetail);
        console.log('child', this.dataSourceChildGrid.value);
    }
    Insert(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        console.log(this.dataSourceChildGrid.value);
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP + '/' + is_simpan_template + '/' + is_simpan_racikan, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    sum() {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }
    reset() {
        this.dataSourceChildGrid.next([]);
        this.dataDetail = [];
    }
    stopResepRawatInap(data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_STOP, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    ubahResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    pulangResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    lanjutakanResepRawatInap(Body) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    Pulang(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        let param = {
            id_register: Data.id_register,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + is_simpan_racikan, param)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
ResepDokterIrdaService.ɵfac = function ResepDokterIrdaService_Factory(t) { return new (t || ResepDokterIrdaService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__.DaftarPasienService)); };
ResepDokterIrdaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResepDokterIrdaService, factory: ResepDokterIrdaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85191:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/dashboard-dokter/services/resep-dokter-irna/resep-dokter-irna.service.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResepDokterIrnaService": () => (/* binding */ ResepDokterIrnaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/api/PHARMACY */ 49548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 24317);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 49086);
/* harmony import */ var _daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../daftar-pasien/daftar-pasien.service */ 53786);







class ResepDokterIrnaService {
    constructor(httpOperationService, notificationService, daftarPasienService) {
        this.httpOperationService = httpOperationService;
        this.notificationService = notificationService;
        this.daftarPasienService = daftarPasienService;
        this.API = src_app_api_PHARMACY__WEBPACK_IMPORTED_MODULE_0__.PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA;
        this.dataHistoryResep = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this._dataDetail = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetail$ = this._dataDetail.asObservable();
        this._dataDetailRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataDetailRacikan$ = this._dataDetailRacikan.asObservable();
        this.dataObat = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceParentGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSourceChildGrid = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
        this.dataSelectRacikan = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({});
        this.jumlah_item = 0;
        this.counter = 0;
    }
    get dataDetailRacikan() {
        return this._dataDetailRacikan.getValue();
    }
    set dataDetailRacikan(val) {
        this._dataDetailRacikan.next(val);
    }
    get dataDetail() {
        return this._dataDetail.getValue();
    }
    set dataDetail(val) {
        this._dataDetail.next(val);
    }
    onInitList() {
    }
    /**
     * Service Untuk Menampilkan data berdasarkan dinamik filter
     * @onGetAll Void
    */
    onGetAllByResepActiveByRegister(req) {
        let id_person = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_AKTIF_BY_REGISTER + "/" + id_person, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    onGetByIdRegisterToTrans(id_register) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_RESEP_BY_REGISTER + "/" + id_register).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
      * Service Untuk Mengisi dataScource
      * @setDataSource Void
      */
    setDataObat(req) {
        this.onGetAllByParams(req).subscribe((result) => {
            this.dataObat.next(result.data);
        });
    }
    setDataResep(req) {
        this.onGetAllByRegister(req).subscribe((result) => {
            this.dataHistoryResep.next(result.data);
        });
    }
    /**
    * Service Untuk Menampilkan data berdasarkan dinamik filter
    * @onGetAll Observable<Model>
    */
    onGetAllByParams(req) {
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_OBAT, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    /**
 * Service Untuk Menampilkan data header berdasarkan Id
 * @onGetAll Observable<SetupPabrikModel>
 */
    onGetById(Id) {
        return this.httpOperationService.defaultGetRequest(this.API.GET_BY_ID + '/' + Id);
    }
    onGetAllByRegister(req) {
        let id_register = this.daftarPasienService.ActivePasien.value.id_register;
        return this.httpOperationService.defaultPostRequestByDynamicFilter(this.API.GET_ALL_RESEP_BY_REGISTER + "/" + id_register, req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    addDetail(detail) {
        this.dataDetail = [
            ...this.dataDetail,
            detail
        ];
        this.sum();
    }
    addDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = [
            ...this.dataDetailRacikan,
            detailRacikan
        ];
    }
    setDetailRacikan(detailRacikan) {
        this.dataDetailRacikan = detailRacikan;
    }
    editDetail(index, data) {
        this.dataDetail[index] = data;
        this.sum();
    }
    removeDataDetail(index) {
        this.dataDetail.splice(index, 1);
        this.sum();
    }
    saveResep() {
        console.log('parent', this.dataDetail);
        this.dataSourceChildGrid.subscribe((res) => {
            console.log(res);
        });
        // console.log('child',this.dataSourceChildGrid.value)
    }
    Insert(Data, is_simpan_template, is_simpan_racikan) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        console.log(this.dataSourceParentGrid.value);
        console.log(this.dataSourceChildGrid.value);
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        // console.log(Data);
        return this.httpOperationService.defaultPostRequest(this.API.INSERT_RESEP + '/' + is_simpan_template + '/' + is_simpan_racikan, Data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    sum() {
        this.jumlah_item = this.dataDetail.sum('qty_resep');
    }
    reset() {
        this.dataSourceChildGrid.next([]);
        this.dataDetail = [];
    }
    stopResepRawatInap(data) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_STOP, data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    ubahResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_UBAH + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    pulangResepRawatInap(Data) {
        let id_item = 0;
        let urut = 0;
        this.dataSourceParentGrid.value.map((e, i) => {
            e.no_urut = i + 1;
            e.racikans = [];
            return e;
        });
        this.dataSourceChildGrid.value.forEach((item) => {
            let index = this.dataSourceParentGrid.value.map((e) => { return e.counter; }).indexOf(item.counter);
            console.log(index);
            if (index != -1) {
                urut = (this.dataSourceParentGrid.value[index].id_item != id_item) ? 0 : urut;
                id_item = this.dataSourceParentGrid.value[index].id_item;
                urut++;
                item.no_urut = urut;
                this.dataSourceParentGrid.value[index].racikans.push(item);
            }
        });
        Data.details = this.dataSourceParentGrid.value;
        Data.jumlah_item = this.dataSourceParentGrid.value.sum('qty_resep');
        let Body = {
            resep_id_lama: Data.resep_id,
            resep_baru: Data
        };
        return this.httpOperationService.defaultPutRequest(this.API.BAWA_PULANG + '/' + 0, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
    lanjutakanResepRawatInap(Body) {
        return this.httpOperationService.defaultPutRequest(this.API.UPDATE_TO_LANJUT, Body)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
            this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
        }));
    }
}
ResepDokterIrnaService.ɵfac = function ResepDokterIrnaService_Factory(t) { return new (t || ResepDokterIrnaService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_daftar_pasien_daftar_pasien_service__WEBPACK_IMPORTED_MODULE_3__.DaftarPasienService)); };
ResepDokterIrnaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ResepDokterIrnaService, factory: ResepDokterIrnaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 24292:
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



/***/ }),

/***/ 64762:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 70548:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/daftar-resep-formularium-irda/json/grid.config.json ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ }),

/***/ 27838:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/json/GridResep.json ***!
  \**********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridInputResep":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"rx","headerText":"Rx","type":"string","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_urut","headerText":"No","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_resep","headerText":"Kode Resep","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","visible":true,"width":150},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"satuan","headerText":"Satuan","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"qty_obat","headerText":"Qty","format":"N","textAlign":"Right","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"aturan_pakai","headerText":"Jumlah Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"keterangan_pakai","headerText":"Aturan Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"waktu_pakai","headerText":"Waktu Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"catatan","headerText":"Catatan","type":"string","visible":true,"width":100}]},"GridHistoryResep":{"columns":[],"dataSource":[]}}');

/***/ }),

/***/ 40352:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/json/lookupitem.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 95084:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/input-resep-formularium-irda/json/lookuptemplateresep.json ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 82988:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/json/GridResep.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridInputResep":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"rx","headerText":"Rx","type":"string","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_urut","headerText":"No","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_resep","headerText":"Kode Resep","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","visible":true,"width":150},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"satuan","headerText":"Satuan","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"qty_obat","headerText":"Qty","format":"N","textAlign":"Right","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"aturan_pakai","headerText":"Jumlah Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"keterangan_pakai","headerText":"Aturan Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"waktu_pakai","headerText":"Waktu Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"catatan","headerText":"Catatan","type":"string","visible":true,"width":100}]},"GridHistoryResep":{"columns":[],"dataSource":[]}}');

/***/ }),

/***/ 44354:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/json/lookupitem.json ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 14260:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/pulang-resep-formularium-irda/json/lookuptemplateresep.json ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 256:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irda/view-resep-formularium-irda/json/grid.config.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ }),

/***/ 83855:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irja/input-resep-formularium-irja/json/lookupitem.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 58001:
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irja/input-resep-formularium-irja/json/lookuptemplateresep.json ***!
  \********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_template","filter":"like","title":"Nama Template Resep"}]}');

/***/ }),

/***/ 19949:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/daftar-resep-formularium-irna/json/grid.config.json ***!
  \*************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ }),

/***/ 73457:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/input-resep-formularium/json/GridResep.json ***!
  \*****************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridInputResep":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"rx","headerText":"Rx","type":"string","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_urut","headerText":"No","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_resep","headerText":"Kode Resep","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","visible":true,"width":150},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"satuan","headerText":"Satuan","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"qty_obat","headerText":"Qty","format":"N","textAlign":"Right","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"aturan_pakai","headerText":"Jumlah Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"keterangan_pakai","headerText":"Aturan Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"waktu_pakai","headerText":"Waktu Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"catatan","headerText":"Catatan","type":"string","visible":true,"width":100}]},"GridHistoryResep":{"columns":[],"dataSource":[]}}');

/***/ }),

/***/ 56812:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/input-resep-formularium/json/lookupitem.json ***!
  \******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 97128:
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/input-resep-formularium/json/lookuptemplateresep.json ***!
  \***************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 67292:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/json/GridResep.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridInputResep":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"rx","headerText":"Rx","type":"string","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"no_urut","headerText":"No","visible":true,"width":30},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"kode_resep","headerText":"Kode Resep","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Obat","visible":true,"width":150},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"satuan","headerText":"Satuan","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"qty_obat","headerText":"Qty","format":"N","textAlign":"Right","visible":true,"width":70},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"aturan_pakai","headerText":"Jumlah Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"keterangan_pakai","headerText":"Aturan Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"waktu_pakai","headerText":"Waktu Pakai","type":"string","visible":true,"width":120},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"catatan","headerText":"Catatan","type":"string","visible":true,"width":100}]},"GridHistoryResep":{"columns":[],"dataSource":[]}}');

/***/ }),

/***/ 22103:
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/json/lookupitem.json ***!
  \************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_obat","headerText":"Nama Racikan","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"qty_resep","headerText":"Qty","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_label","headerText":"Label","type":"string","visible":true},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"ket_aturan","headerText":"Tambahan Aturan","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"kandungan_obat","headerText":"Kandungan"},{"field":"nama_satuan","headerText":"Satuan"},{"field":"qty_racikan","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 26283:
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/pulang-resep-formularium-irna/json/lookuptemplateresep.json ***!
  \*********************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"set_racikan_id","headerText":"Id","type":"string","visible":false},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_template","headerText":"Nama Template Resep","type":"string","visible":true}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_resep","headerText":"Qty"}],"filter":[{"field":"nama_racikan","filter":"like","title":"Nama Racikan"}]}');

/***/ }),

/***/ 69853:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/Pharmacy/pages/resep-formularium/resep-formularium-irna/view-resep-formularium-irna/json/grid.config.json ***!
  \***********************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridColumns":[{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nama_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"nomor_resep","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"},{"field":"id_dokter","headerText":"Pemesanan Id","type":"number","format":"","textAlign":"left","visible":true,"editType":"defaultEdit"}],"columnsChild":[{"field":"nama_obat","headerText":"Nama Obat"},{"field":"qty_racikan","headerText":"Qty","width":100}]}');

/***/ })

}]);