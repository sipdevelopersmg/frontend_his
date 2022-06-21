(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[660],{

/***/ 44984:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/components/card/card-dashboard/card-dashboard.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDashboardComponent": () => (/* binding */ CardDashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);


class CardDashboardComponent {
    constructor() {
        this.handleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
    }
    handleClickCard(data) {
        this.handleClick.emit(data);
    }
}
CardDashboardComponent.ɵfac = function CardDashboardComponent_Factory(t) { return new (t || CardDashboardComponent)(); };
CardDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDashboardComponent, selectors: [["app-card-dashboard"]], inputs: { Card: "Card" }, outputs: { handleClick: "handleClick" }, decls: 17, vars: 3, consts: [[1, "card", "card-dashboard"], [1, "card-body", 3, "click"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "card-title", "fw-bold"], [1, "row", "align-items-center"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "text-end", "pe-1"], ["src", "../../../../../../assets/image/navbar/user.png", "alt", "", 1, "img-card-dashboard"], [1, "col-lg-9", "col-md-9", "col-sm-9", "col-xs-9"], [1, "fw-bold", "text-biru-muda", "mb-0", 2, "font-size", "1.75rem"], [1, "text-abu-tua", "mb-2"], [1, "text-biru-muda", "mb-0", 2, "display", "flex", "align-items", "center", "justify-content", "space-between"], [1, "fas", "fa-chevron-right", "fa-xs"]], template: function CardDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardDashboardComponent_Template_div_click_1_listener() { return ctx.handleClickCard(ctx.Card); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Detail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Card.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Card.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.Card.satuan, " ");
    } }, styles: [".card-dashboard[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-dashboard[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--bs-gray-400);\r\n}\r\n\r\nimg.img-card-dashboard[_ngcontent-%COMP%] {\r\n  height: 2.5rem;\r\n  background-color: #cbd1d673;\r\n  padding: 7px;\r\n  border-radius: 10px;\r\n}"] });


/***/ }),

/***/ 27153:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/components/chart/bar-chart/bar-chart.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarChartComponent": () => (/* binding */ BarChartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 86178);


class BarChartComponent {
    constructor() {
        this.Type = 'bar';
        this.Options = {
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2
                }
            },
            scales: {
                x: {},
                y: { min: 10 }
            },
            plugins: {
                legend: { display: true, position: 'bottom' },
            },
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio: 1
        };
    }
    ngOnInit() {
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], inputs: { Datasource: "Datasource" }, decls: 2, vars: 3, consts: [[1, "div_bar_chart", "mx-auto"], ["baseChart", "", "height", "100", "width", "100", 3, "type", "data", "options"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.Type)("data", ctx.Datasource)("options", ctx.Options);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: [".div_bar_chart[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 100%;\r\n  width: 100%;\r\n}"] });


/***/ }),

/***/ 99089:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/components/chart/progress-chart/progress-chart.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressChartComponent": () => (/* binding */ ProgressChartComponent)
/* harmony export */ });
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);



class ProgressChartComponent {
    constructor() {
        this.Caption = "Kunjungan";
        this.Type = "doughnut";
        this.Options = {
            cutout: 80,
            maintainAspectRatio: false,
            responsive: true,
            aspectRatio: 1,
            plugins: {
                tooltip: {
                    filter: tooltipItem => tooltipItem['index'] == 0
                },
                legend: {
                    display: false
                },
            }
        };
        this.Plugins = [
            {
                id: 'plugin1',
                beforeInit: (chart) => {
                    const dataset = chart.data.datasets[0];
                    chart.data.labels = [dataset.label];
                    let total = parseInt(dataset.data[0]) + parseInt(dataset.data[1]);
                    dataset.data = [total - dataset.data[0], total - dataset.data[1]];
                },
                beforeDraw: (chart) => {
                    let width = chart.width;
                    let height = chart.height;
                    let ctx = chart.ctx;
                    ctx.restore();
                    let fontSize = 1;
                    ctx.font = fontSize + "em sans-serif";
                    ctx.fillStyle = "#9b9b9b";
                    ctx.textBaseline = "middle";
                    let total;
                    if (this.Caption !== 'Kunjungan') {
                        let prosentase = (chart.data.datasets[0].data[1] / chart.data.datasets[0].data[0]);
                        let prosentaseNotRound = prosentase.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
                        total = Math.round(JSON.parse(prosentaseNotRound) * 100);
                        let text = total + ' ' + this.Caption, textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2;
                        ctx.fillText(text, textX, textY);
                        ctx.save();
                    }
                    else {
                        total = chart.data.datasets[0].data[0] + chart.data.datasets[0].data[1];
                        let text = total.toString(), textX = Math.round((width - ctx.measureText(text).width) / 2), textY = height / 2.2;
                        ctx.fillText(text, textX, textY);
                        let text2 = "Kunjungan", text2X = Math.round((width - ctx.measureText(text2).width) / 2), text2Y = height / 1.8;
                        ctx.fillText('Kunjungan', text2X, text2Y);
                        ctx.save();
                    }
                },
            }
        ];
    }
    onResize(event) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }
    ngOnInit() {
        this.onDetectScreenSize(window.innerWidth);
    }
    onDetectScreenSize(screenWidth) {
        this.screenWidth = screenWidth;
        if (screenWidth >= 1920) {
            this.Options.cutout = 80;
        }
        else {
            this.Options.cutout = 80;
        }
        ;
        setTimeout(() => {
            this.Chart.options['cutout'] = this.Options.cutout;
            this.Chart.ngOnChanges({});
        }, 250);
    }
}
ProgressChartComponent.ɵfac = function ProgressChartComponent_Factory(t) { return new (t || ProgressChartComponent)(); };
ProgressChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressChartComponent, selectors: [["app-progress-chart"]], viewQuery: function ProgressChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.Chart = _t.first);
    } }, hostBindings: function ProgressChartComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ProgressChartComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { Datasource: "Datasource", Caption: "Caption" }, decls: 2, vars: 4, consts: [[1, "div_progress_chart", "mx-auto"], ["baseChart", "", "height", "100", "width", "100", 3, "data", "type", "options", "plugins"]], template: function ProgressChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.Datasource)("type", ctx.Type)("options", ctx.Options)("plugins", ctx.Plugins);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: ["div.div_progress_chart[_ngcontent-%COMP%] {\r\n  display: block;\r\n  height: 11rem;\r\n  width: 100%;\r\n}"] });


/***/ }),

/***/ 69699:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/components/detail-section/detail-section.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailSectionComponent": () => (/* binding */ DetailSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chart/bar-chart/bar-chart.component */ 27153);




class DetailSectionComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.ButtonNav = [
            { Id: "back", Icons1: 'fa-chevron-left', Captions: 'Back' },
        ];
        this.IsKunjungan = false;
    }
    ngOnInit() {
        this.activatedRoute.paramMap
            .subscribe((result) => {
            this.Title = result.get('jenis');
            this.IsKunjungan = result.get('jenis').includes('Kunjungan');
            this.Data = JSON.parse(localStorage.getItem('CardDashboardData'));
        });
    }
    handleClickButtonNav(args) {
        if (args == 'back') {
            if (this.IsKunjungan) {
                this.router.navigateByUrl('dashboard/Dashboard/Pelayanan/dashboard-pelayanan');
            }
            else {
                this.router.navigateByUrl('dashboard/Dashboard/Pendapatan/dashboard-pendapatan');
            }
        }
    }
}
DetailSectionComponent.ɵfac = function DetailSectionComponent_Factory(t) { return new (t || DetailSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
DetailSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DetailSectionComponent, selectors: [["app-detail-section"]], decls: 13, vars: 5, consts: [[3, "ButtonNav", "TransparentBackground", "onClickButtonNav"], [1, "row", "h-100"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-2", "h-100"], [1, "card", "card-detail-section", "h-100"], [1, "card-body", "h-100"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [1, "text-hitam", "mb-0"], [1, "text-abu-tua", "mb-0", 2, "font-size", "14px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1"], [3, "Datasource"]], template: function DetailSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickButtonNav", function DetailSectionComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-bar-chart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav)("TransparentBackground", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.Title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("Datasource", ctx.Data);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__.OrgCardLayoutComponent, _chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_1__.BarChartComponent], styles: [".card-detail-section[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n}"] });


/***/ }),

/***/ 88579:
/*!*************************************************************************!*\
  !*** ./src/app/modules/Dashboard/components/filter/filter.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterComponent": () => (/* binding */ FilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-label/atm-label.component */ 49130);
/* harmony import */ var _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @syncfusion/ej2-angular-calendars */ 28219);





class FilterComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.handlePencarian = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.FormFilterDashboard = this.formBuilder.group({
            startDate: ['', []],
            endDate: ['', []]
        });
    }
    handleOpenFilter() {
        const btnFilterDashboard = document.getElementById('btnFilterDashboard');
        btnFilterDashboard.click();
    }
    handleCloseFilter() {
        const btnCloseFilterDashboard = document.getElementById('btnCloseFilterDashboard');
        btnCloseFilterDashboard.click();
    }
    handleClickButtonPencarian(FormFilterDashboard) {
        this.handlePencarian.emit(FormFilterDashboard);
        this.handleCloseFilter();
    }
    get startDate() { return this.FormFilterDashboard.get('startDate'); }
    ;
    get endDate() { return this.FormFilterDashboard.get('endDate'); }
    ;
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder)); };
FilterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], outputs: { handlePencarian: "handlePencarian" }, decls: 26, vars: 9, consts: [[1, "row", "align-items-center"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["id", "btnFilterDashboard", "type", "button", "data-bs-toggle", "offcanvas", "data-bs-target", "#offcanvasFilter", "aria-controls", "offcanvasFilter", 1, "btn", "btn-outline-primary", "btn-sm", "px-3", 3, "hidden"], ["tabindex", "-1", "id", "offcanvasFilter", "aria-labelledby", "offcanvasFilterLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasFilterLabel"], ["id", "btnCloseFilterDashboard", "type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"], [1, "offcanvas-body"], [1, "row", "mb-4", 3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "pe-1"], [3, "LabelCaption"], [1, "row", "my-2"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "pe-2"], ["formControlName", "startDate", 3, "format", "showClearButton", "max"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "ps-2"], ["formControlName", "endDate", 3, "format", "showClearButton", "min"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-end"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "mx-3", 3, "click"], [1, "fas", "fa-redo-alt", "fa-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-search", "fa-sm"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Cari Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Pencarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "atm-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ejs-datepicker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ejs-datepicker", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_20_listener() { return ctx.FormFilterDashboard.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_23_listener() { return ctx.handleClickButtonPencarian(ctx.FormFilterDashboard.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Cari ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.FormFilterDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("LabelCaption", "Tanggal Pencarian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("format", "dd MMMM yyyy")("showClearButton", false)("max", ctx.endDate.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("format", "dd MMMM yyyy")("showClearButton", false)("min", ctx.startDate.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_0__.AtmLabelComponent, _syncfusion_ej2_angular_calendars__WEBPACK_IMPORTED_MODULE_3__.DatePickerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".card-filter[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n}"] });


/***/ }),

/***/ 95536:
/*!***************************************************************!*\
  !*** ./src/app/modules/Dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutingModule": () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _components_detail_section_detail_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/detail-section/detail-section.component */ 69699);
/* harmony import */ var _pages_dashboard_pelayanan_dashboard_pelayanan_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dashboard-pelayanan/dashboard-pelayanan.component */ 4255);
/* harmony import */ var _pages_dashboard_pendapatan_dashboard_pendapatan_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard-pendapatan/dashboard-pendapatan.component */ 46900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






const dashboardRoutes = [
    {
        path: "Pelayanan", component: null, children: [
            {
                path: 'dashboard-pelayanan', component: _pages_dashboard_pelayanan_dashboard_pelayanan_component__WEBPACK_IMPORTED_MODULE_1__.DashboardPelayananComponent, data: { title: 'Dashboard Pelayanan' },
            },
            {
                path: 'detail-pelayanan/:jenis', component: _components_detail_section_detail_section_component__WEBPACK_IMPORTED_MODULE_0__.DetailSectionComponent, data: { title: 'Detail Pelayanan' },
            },
        ]
    },
    {
        path: "Pendapatan", component: null, children: [
            {
                path: 'dashboard-pendapatan', component: _pages_dashboard_pendapatan_dashboard_pendapatan_component__WEBPACK_IMPORTED_MODULE_2__.DashboardPendapatanComponent, data: { title: 'Dashboard Pendapatan' },
            },
            {
                path: 'detail-pendapatan/:jenis', component: _components_detail_section_detail_section_component__WEBPACK_IMPORTED_MODULE_0__.DetailSectionComponent, data: { title: 'Detail Pendapatan' },
            },
        ]
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(dashboardRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 47660:
/*!*******************************************************!*\
  !*** ./src/app/modules/Dashboard/dashboard.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/core.module */ 17396);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 72271);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ 95536);
/* harmony import */ var _pages_dashboard_pelayanan_dashboard_pelayanan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard-pelayanan/dashboard-pelayanan.component */ 4255);
/* harmony import */ var _pages_dashboard_pendapatan_dashboard_pendapatan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard-pendapatan/dashboard-pendapatan.component */ 46900);
/* harmony import */ var _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/card/card-dashboard/card-dashboard.component */ 44984);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/filter/filter.component */ 88579);
/* harmony import */ var _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chart/bar-chart/bar-chart.component */ 27153);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _components_chart_progress_chart_progress_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chart/progress-chart/progress-chart.component */ 99089);
/* harmony import */ var _components_detail_section_detail_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/detail-section/detail-section.component */ 69699);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);














class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule,
        ], ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_dashboard_pelayanan_dashboard_pelayanan_component__WEBPACK_IMPORTED_MODULE_3__.DashboardPelayananComponent,
        _pages_dashboard_pendapatan_dashboard_pendapatan_component__WEBPACK_IMPORTED_MODULE_4__.DashboardPendapatanComponent,
        _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.CardDashboardComponent,
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_6__.FilterComponent,
        _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__.BarChartComponent,
        _components_chart_progress_chart_progress_chart_component__WEBPACK_IMPORTED_MODULE_8__.ProgressChartComponent,
        _components_detail_section_detail_section_component__WEBPACK_IMPORTED_MODULE_9__.DetailSectionComponent], imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_0__.CoreModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule], exports: [ng2_charts__WEBPACK_IMPORTED_MODULE_13__.NgChartsModule] }); })();


/***/ }),

/***/ 4255:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/pages/dashboard-pelayanan/dashboard-pelayanan.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPelayananComponent": () => (/* binding */ DashboardPelayananComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/filter/filter.component */ 88579);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chart/bar-chart/bar-chart.component */ 27153);
/* harmony import */ var _components_chart_progress_chart_progress_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/chart/progress-chart/progress-chart.component */ 99089);
/* harmony import */ var _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card/card-dashboard/card-dashboard.component */ 44984);








const _c0 = ["FilterDashboardComps"];
function DashboardPelayananComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "app-card-dashboard", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handleClick", function DashboardPelayananComponent_div_6_Template_app_card_dashboard_handleClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.handleClickCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Card", item_r2);
} }
class DashboardPelayananComponent {
    constructor(router) {
        this.router = router;
        this.ButtonNav = [
            { Id: "filter", Icons1: 'fa-search', Captions: '[F3] Filter' },
        ];
        this.CardDashboard = [];
        this.ChartKunjunganByJenisPasien = {
            datasets: [
                {
                    label: 'Population',
                    type: 'doughnut',
                    data: [1053, 210],
                    backgroundColor: ['#5283ff', '#9f9f9f'],
                    borderColor: ['#ffffff', '#ffffff'],
                    rotation: Math.PI / 2,
                    borderWidth: 0,
                    borderJoinStyle: 'round',
                    hoverBackgroundColor: ['#5283ff', '#9f9f9f']
                }
            ],
        };
        this.ChartBedOccupationRate = {
            datasets: [
                {
                    label: 'Population',
                    type: 'doughnut',
                    data: [500, 248],
                    backgroundColor: ['#5283ff', '#9f9f9f'],
                    borderColor: ['#ffffff', '#ffffff'],
                    rotation: Math.PI / 2,
                    borderWidth: 0,
                    borderJoinStyle: 'round',
                    hoverBackgroundColor: ['#5283ff', '#9f9f9f']
                }
            ],
        };
    }
    ngOnInit() {
        this.CardDashboard = [
            {
                id: 1,
                title: 'Total Kunjungan',
                value: '1263',
                satuan: 'Pasien'
            },
            {
                id: 2,
                title: 'Kunjungan Rawat Jalan',
                value: '834',
                satuan: 'Pasien'
            },
            {
                id: 3,
                title: 'Kunjungan Rawat Inap',
                value: '248',
                satuan: 'Pasien'
            },
            {
                id: 4,
                title: 'Kunjungan Rawat Darurat',
                value: '181',
                satuan: 'Pasien'
            },
        ];
        this.ChartKunjunganByCaraBayar = {
            datasets: [
                {
                    label: 'BPJS',
                    data: [842],
                    borderRadius: 5,
                },
                {
                    label: 'NON BPJS',
                    data: [421],
                    borderRadius: 5,
                }
            ],
            labels: ['']
        };
        this.ChartRawatJalan = {
            datasets: [
                {
                    data: [150],
                    label: "VCT",
                    borderRadius: 5,
                },
                {
                    data: [200],
                    label: "TB DOTS",
                    borderRadius: 5,
                },
                {
                    data: [100],
                    label: "DALAM",
                    borderRadius: 5,
                },
                {
                    data: [50],
                    label: "KANDUNGAN",
                    borderRadius: 5,
                },
                {
                    data: [180],
                    label: "SARAF",
                    borderRadius: 5,
                },
                {
                    data: [120],
                    label: "ANAK",
                    borderRadius: 5,
                },
                {
                    data: [18],
                    label: "GIZI",
                    borderRadius: 5,
                },
                {
                    data: [1],
                    label: "RENCANA OBTRADKOMPLEMENTER",
                    borderRadius: 5,
                },
                {
                    data: [15],
                    label: "CDC",
                    borderRadius: 5,
                },
                // {
                //     data: [6],
                //     label: "TRANSIT KEMOTERAPI",
                //     borderRadius: 5,
                // },
                // {
                //     data: [3],
                //     label: "JANTUNG",
                //     borderRadius: 5,
                // },
                // {
                //     data: [20],
                //     label: "PENYAKIT DALAM KHUSUS",
                //     borderRadius: 5,
                // },
                // {
                //     data: [60],
                //     label: "GIGI PRIVAT",
                //     borderRadius: 5,
                // },
                // {
                //     data: [100],
                //     label: "GIGI DAN MULUT",
                //     borderRadius: 5,
                // },
                // {
                //     data: [130],
                //     label: "KULIT & KELAMIN",
                //     borderRadius: 5,
                // },
                // {
                //     data: [60],
                //     label: "KLINIK KOSMETIK MEDIK",
                //     borderRadius: 5,
                // },
                // {
                //     data: [15],
                //     label: "MATA",
                //     borderRadius: 5,
                // },
                // {
                //     data: [100],
                //     label: "POLI UNTI TPKP",
                //     borderRadius: 5,
                // }
            ],
            labels: ['']
        };
        this.ChartRawatInap = {
            datasets: [
                {
                    data: [11],
                    label: "P.RAJAWALI 2B - BEDAH PRIA",
                    borderRadius: 5,
                },
                {
                    label: "P.RAJAWALI 3A - NON BEDAH NON INFEKSI WANITA",
                    borderRadius: 5,
                    data: [130],
                },
                {
                    label: "RAJAWALI",
                    borderRadius: 5,
                    data: [40],
                },
                {
                    label: "BEDAH PRIA",
                    borderRadius: 5,
                    data: [50],
                },
                {
                    label: "MATA",
                    borderRadius: 5,
                    data: [17],
                },
                // {
                //     label: "EMERGING INF. DESEASE",
                //     borderRadius: 5,
                //     data: [11],
                // },
                // {
                //     label: "P.RAJAWALI 1A - HCU",
                //     borderRadius: 5,
                //     data: [19],
                // },
                // {
                //     label: "P.RAJAWALI 1B - BEDAH PRIA",
                //     borderRadius: 5,
                //     data: [40],
                // },
                // {
                //     label: "P.RAJAWALI 1A - TINDAKAN",
                //     borderRadius: 5,
                //     data: [12],
                // },
                // {
                //     label: "P.RAJAWALI 2A - BEDAH WANITA",
                //     borderRadius: 5,
                //     data: [5],
                // },
                // {
                //     label: "P.RAJAWALI 3B - NON BEDAH NON INFEKSI PRIA",
                //     borderRadius: 5,
                //     data: [43],
                // },
                // {
                //     label: "P.RAJAWALI 4A - KANKER WANITA",
                //     borderRadius: 5,
                //     data: [3],
                // },
                // {
                //     label: "P.RAJAWALI 4B - KANKER WANITA",
                //     borderRadius: 5,
                //     data: [18],
                // },
                // {
                //     label: "P.RAJAWALI 5A - KANKER PRIA",
                //     borderRadius: 5,
                //     data: [80],
                // },
                // {
                //     label: "P.RAJAWALI 5B - KANKER WANITA",
                //     borderRadius: 5,
                //     data: [15],
                // },
                // {
                //     label: "P.RAJAWALI 6A - NON BEDAH INFEKSI WANITA",
                //     borderRadius: 5,
                //     data: [33],
                // },
                // {
                //     label: "P.RAJAWALI 6B - NON BEDAH INFEKSI PRIA",
                //     borderRadius: 5,
                //     data: [81],
                // }
            ],
            labels: ['']
        };
        this.ChartRawatDarurat = {
            datasets: [
                {
                    data: [11],
                    label: "IRDA ANAK",
                    borderRadius: 5,
                },
                {
                    data: [130],
                    label: "IRDA BEDAH",
                    borderRadius: 5,
                },
                {
                    data: [40],
                    label: "IRDA MATA",
                    borderRadius: 5,
                }
            ],
            labels: ['']
        };
    }
    handleClickButtonNav(args) {
        if (args == 'filter') {
            this.FilterDashboardComps.handleOpenFilter();
        }
    }
    handlePencarianFilter(args) {
        console.log(args);
    }
    handleClickCard(args) {
        let data = {};
        switch (args.title) {
            case 'Total Kunjungan':
                break;
            case 'Kunjungan Rawat Jalan':
                data = this.ChartRawatJalan;
                break;
            case 'Kunjungan Rawat Inap':
                data = this.ChartRawatInap;
                break;
            case 'Kunjungan Rawat Darurat':
                data = this.ChartRawatDarurat;
                break;
        }
        if (args.title !== 'Total Kunjungan') {
            localStorage.setItem('CardDashboardData', JSON.stringify(data));
            this.router.navigate(['dashboard/Dashboard/Pelayanan/detail-pelayanan', args.title]);
        }
    }
}
DashboardPelayananComponent.ɵfac = function DashboardPelayananComponent_Factory(t) { return new (t || DashboardPelayananComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
DashboardPelayananComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: DashboardPelayananComponent, selectors: [["app-dashboard-pelayanan"]], viewQuery: function DashboardPelayananComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.FilterDashboardComps = _t.first);
    } }, decls: 59, vars: 8, consts: [[3, "ButtonNav", "TransparentBackground", "onClickButtonNav"], [1, "row", "mb-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1"], [3, "handlePencarian"], ["FilterDashboardComps", ""], [1, "row", "mb-2"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3 mb-2 px-2", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "px-2"], [1, "card", "card-kunjungan-cara-bayar"], [1, "card-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [1, "text-hitam", "mb-0"], [1, "text-abu-tua", "mb-0", 2, "font-size", "14px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1", 2, "height", "13rem"], [3, "Datasource"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "px-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-2", "mb-2"], [3, "Datasource", "Caption"], [1, "row", "align-items-center"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "px-0", "text-center"], [1, "mb-0", 2, "font-size", "15px"], [1, "fas", "fa-square", "fa-sm", "text-abu-tua"], [1, "fas", "fa-square", "fa-sm", "text-biru-tua"], [1, "mb-0", 2, "font-size", "13px"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "mb-2", "px-2"], [3, "Card", "handleClick"]], template: function DashboardPelayananComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onClickButtonNav", function DashboardPelayananComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "app-filter", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("handlePencarian", function DashboardPelayananComponent_Template_app_filter_handlePencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, DashboardPelayananComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Kunjungan Berdasarkan Cara Bayar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Cara Bayar BPJS & Non BPJS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "app-bar-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Kunjungan Berdasarkan Jenis Pasien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, " Pasien Lama & Pasien Baru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "app-progress-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\u00A0 210 Pasien Baru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "\u00A0 1053 Pasien Lama ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, " Bed Occupation Rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, " Presentase Pemakaian Tempat Tidur ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "app-progress-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "\u00A0 248 Bed Digunakan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "\u00A0 252 Bed Tersedia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav)("TransparentBackground", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.CardDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Datasource", ctx.ChartKunjunganByCaraBayar);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Datasource", ctx.ChartKunjunganByJenisPasien)("Caption", "Kunjungan");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("Datasource", ctx.ChartBedOccupationRate)("Caption", "%");
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__.OrgCardLayoutComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__.BarChartComponent, _components_chart_progress_chart_progress_chart_component__WEBPACK_IMPORTED_MODULE_3__.ProgressChartComponent, _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_4__.CardDashboardComponent], styles: [".card-kunjungan-cara-bayar[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n}"] });


/***/ }),

/***/ 46900:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/Dashboard/pages/dashboard-pendapatan/dashboard-pendapatan.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPendapatanComponent": () => (/* binding */ DashboardPendapatanComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 15380);
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/filter/filter.component */ 88579);
/* harmony import */ var _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/chart/bar-chart/bar-chart.component */ 27153);
/* harmony import */ var _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/card/card-dashboard/card-dashboard.component */ 44984);








const _c0 = ["FilterDashboardComps"];
function DashboardPendapatanComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-card-dashboard", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("handleClick", function DashboardPendapatanComponent_div_6_Template_app_card_dashboard_handleClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.handleClickCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Card", item_r2);
} }
class DashboardPendapatanComponent {
    constructor(router) {
        this.router = router;
        this.ButtonNav = [
            { Id: "filter", Icons1: 'fa-search', Captions: '[F3] Filter' },
        ];
        this.CardDashboard = [];
    }
    ngOnInit() {
        this.CardDashboard = [
            {
                id: 1,
                title: 'Pendapatan Total',
                value: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(311553000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 2,
                title: 'Pendapatan Rawat Jalan',
                value: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(48851000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 3,
                title: 'Pendapatan Rawat Inap',
                value: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(153851000, 'EN', ''),
                satuan: 'Rupiah'
            },
            {
                id: 4,
                title: 'Pendapatan Rawat Darurat',
                value: (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.formatNumber)(108851000, 'EN', ''),
                satuan: 'Rupiah'
            },
        ];
        this.ChartPendapatanByCaraBayar = {
            datasets: [
                {
                    label: 'BPJS',
                    data: [207702000],
                    borderRadius: 5,
                },
                {
                    label: 'UMUM',
                    data: [103851000],
                    borderRadius: 5,
                }
            ],
            labels: ['']
        };
        this.ChartPendapatanByJenisBayar = {
            datasets: [
                {
                    label: 'AKOMODASI DAN KONSULTASI',
                    data: [207702000],
                    borderRadius: 5,
                },
                {
                    label: 'PELAYANAN RAWAT DARURAT',
                    data: [108851000],
                    borderRadius: 5,
                },
                {
                    label: 'RAWAT JALAN',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [56801333],
                    borderRadius: 5,
                },
                {
                    label: 'RADIOTERAPI',
                    data: [6801333],
                    borderRadius: 5,
                },
                {
                    label: 'PERSALINAN DAN KURETASE',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };
        this.ChartRawatJalan = {
            datasets: [
                {
                    label: 'KONSULTASI',
                    data: [7702000],
                    borderRadius: 5,
                },
                {
                    label: 'RAWAT JALAN',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };
        this.ChartRawatInap = {
            datasets: [
                {
                    label: 'AKOMODASI DAN KONSULTASI',
                    data: [10702000],
                    borderRadius: 5,
                },
                {
                    label: 'RADIOTERAPI',
                    data: [48851000],
                    borderRadius: 5,
                },
                {
                    label: 'PERSALINAN DAN KURETASE',
                    data: [10801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };
        this.ChartRawatDarurat = {
            datasets: [
                {
                    label: 'PELAYANAN RAWAT DARURAT',
                    data: [108851000],
                    borderRadius: 5,
                },
                {
                    label: 'PENJUALAN RESEP',
                    data: [56801333],
                    borderRadius: 5,
                },
            ],
            labels: ['']
        };
    }
    handleClickButtonNav(args) {
        if (args == 'filter') {
            this.FilterDashboardComps.handleOpenFilter();
        }
    }
    handlePencarianFilter(args) {
        console.log(args);
    }
    handleClickCard(args) {
        let data = {};
        switch (args.title) {
            case 'Pendapatan Total':
                break;
            case 'Pendapatan Rawat Jalan':
                data = this.ChartRawatJalan;
                break;
            case 'Pendapatan Rawat Inap':
                data = this.ChartRawatInap;
                break;
            case 'Pendapatan Rawat Darurat':
                data = this.ChartRawatDarurat;
                break;
        }
        if (args.title !== 'Pendapatan Total') {
            localStorage.setItem('CardDashboardData', JSON.stringify(data));
            this.router.navigate(['dashboard/Dashboard/Pendapatan/detail-pendapatan', args.title]);
        }
    }
}
DashboardPendapatanComponent.ɵfac = function DashboardPendapatanComponent_Factory(t) { return new (t || DashboardPendapatanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
DashboardPendapatanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DashboardPendapatanComponent, selectors: [["app-dashboard-pendapatan"]], viewQuery: function DashboardPendapatanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.FilterDashboardComps = _t.first);
    } }, decls: 31, vars: 5, consts: [[3, "ButtonNav", "TransparentBackground", "onClickButtonNav"], [1, "row", "mb-1"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1"], [3, "handlePencarian"], ["FilterDashboardComps", ""], [1, "row", "mb-3"], ["class", "col-lg-3 col-md-3 col-sm-3 col-xs-3 px-2", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-2"], [1, "card", "card-pendapatan-cara-bayar"], [1, "card-body"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], [1, "text-hitam", "mb-0"], [1, "text-abu-tua", "mb-0", 2, "font-size", "14px"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1", 2, "height", "13rem"], [3, "Datasource"], [1, "card", "card-pendapatan-jenis-bayar"], [1, "card-body", "h-100"], [1, "row", "h-100"], [1, "col-lg-3", "col-md-3", "col-sm-3", "col-xs-3", "px-2"], [3, "Card", "handleClick"]], template: function DashboardPendapatanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "org-card-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClickButtonNav", function DashboardPendapatanComponent_Template_org_card_layout_onClickButtonNav_0_listener($event) { return ctx.handleClickButtonNav($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-filter", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("handlePencarian", function DashboardPendapatanComponent_Template_app_filter_handlePencarian_3_listener($event) { return ctx.handlePencarianFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, DashboardPendapatanComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Pendapatan Berdasarkan Cara Bayar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " Cara Bayar BPJS & Umum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "app-bar-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " Pendapatan Berdasarkan Jenis Bayar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Jenis Bayar Pasien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "app-bar-chart", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ButtonNav", ctx.ButtonNav)("TransparentBackground", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.CardDashboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Datasource", ctx.ChartPendapatanByCaraBayar);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("Datasource", ctx.ChartPendapatanByJenisBayar);
    } }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_0__.OrgCardLayoutComponent, _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_1__.FilterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_chart_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__.BarChartComponent, _components_card_card_dashboard_card_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.CardDashboardComponent], styles: [".card-pendapatan-cara-bayar[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n}\r\n\r\n.card-pendapatan-jenis-bayar[_ngcontent-%COMP%] {\r\n  border-radius: 15px;\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n  border: 1px solid #cbd1d673;\r\n  height: 500px;\r\n}"] });


/***/ })

}]);