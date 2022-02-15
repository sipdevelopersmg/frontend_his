(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[776],{

/***/ 38994:
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/components/main-menu/main-menu.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolMainMenuComponent": () => (/* binding */ MolMainMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _single_menu_single_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-menu/single-menu.component */ 27585);




function MolMainMenuComponent_div_0_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MolMainMenuComponent_div_0_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r3.onClickMenu(item_r2.id_menu, item_r2.caption); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "atm-single-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", item_r2.Id, "Col");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IdMenu", item_r2.id_menu)("IconMenu", item_r2.icon)("NamaMenu", item_r2.caption);
    }
}
function MolMainMenuComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MolMainMenuComponent_div_0_div_1_Template, 2, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.MainMenu);
    }
}
let MolMainMenuComponent = /*@__PURE__*/ (() => {
    class MolMainMenuComponent {
        constructor(navigationService) {
            this.navigationService = navigationService;
            // ** Variable untuk menampung MainMenu
            this.MainMenu = [];
            // ** Variable untuk Kondisi menampilkan MainMenu atau tidak
            this.ShowMainMenu = true;
            this.onGetMainMenuSubject();
            this.onGetBackToMainMenuState();
        }
        ngOnInit() {
            this.navigationService.onFetchMainMenuFromSessionStorage();
        }
        onGetMainMenuSubject() {
            this.navigationService.onGetMainMenuSubject()
                .subscribe((result) => {
                this.MainMenu = result;
            });
        }
        onGetBackToMainMenuState() {
            this.navigationService.onGetBackToMainMenu()
                .subscribe((result) => {
                if (result === true) {
                    // ** Set Value Show Main Menu menjadi true
                    this.ShowMainMenu = true;
                    // this.navigationService.onSetBackToMainMenu(false);
                }
            });
        }
        onClickMenu(MenuId, MenuTitle) {
            this.navigationService.onFetchChildMenuFromSessionStorage(MenuId);
            this.navigationService.onSetMainMenuTitle(MenuTitle);
        }
        onClickChildMenu(ChildMenuId) {
            this.navigationService.onFetchSidebarMenuFromSessionStorage(ChildMenuId);
            // this.navigationService.onSetActiveSidebarMenu(ChildMenuId);
        }
    }
    MolMainMenuComponent.ɵfac = function MolMainMenuComponent_Factory(t) { return new (t || MolMainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
    MolMainMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MolMainMenuComponent, selectors: [["mol-main-menu"]], decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], ["class", "col-lg-4 col-md-4 col-sm-4 col-xs-4 mb-3", 3, "id", "click", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "mb-3", 3, "id", "click"], [3, "IdMenu", "IconMenu", "NamaMenu"]], template: function MolMainMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, MolMainMenuComponent_div_0_Template, 2, 1, "div", 0);
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ShowMainMenu);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _single_menu_single_menu_component__WEBPACK_IMPORTED_MODULE_1__.AtmSingleMenuComponent], styles: [""] });
    return MolMainMenuComponent;
})();


/***/ }),

/***/ 27585:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/core/components/main-menu/single-menu/single-menu.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmSingleMenuComponent": () => (/* binding */ AtmSingleMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/auth/services/authentication.service */ 7942);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61116);




function AtmSingleMenuComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("icon ", ctx_r0.IconMenu, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.NamaMenu, " ");
    }
}
function AtmSingleMenuComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.NamaMenu, " ");
    }
}
let AtmSingleMenuComponent = /*@__PURE__*/ (() => {
    class AtmSingleMenuComponent {
        constructor(authenticationService) {
            this.authenticationService = authenticationService;
            this.handleClickedSingleMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }
        ngOnInit() {
            this.UserData = this.authenticationService.currentUserValue;
        }
        handleClickSingleMenu() {
            const menu = {
                IdMenu: this.IdMenu,
                IconMenu: this.IconMenu,
                NamaMenu: this.NamaMenu
            };
            this.handleClickedSingleMenu.emit(menu);
        }
    }
    AtmSingleMenuComponent.ɵfac = function AtmSingleMenuComponent_Factory(t) { return new (t || AtmSingleMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
    AtmSingleMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AtmSingleMenuComponent, selectors: [["atm-single-menu"]], inputs: { IdMenu: "IdMenu", IconMenu: "IconMenu", NamaMenu: "NamaMenu" }, outputs: { handleClickedSingleMenu: "handleClickedSingleMenu" }, decls: 4, vars: 3, consts: [[1, "card", "rounded", "border-left-biru-muda", "shadow-sm", "cursor-pointer", "card-hover", 3, "id"], [1, "card-body", "py-2", 3, "click"], ["class", "row align-items-center", 4, "ngIf"], [1, "row", "align-items-center"], [1, "col-2", "px-0", "text-center"], [1, "col-10", "px-0"], [1, "font-cabin", "mb-0", 2, "color", "#0083bf"], [1, "col-2", "px-0", "text-center", 2, "color", "#0083bf", "font-size", "25px"], [1, "fas", "fa-cogs"], [1, "font-cabin", "mb-0", 2, "color", "#0083bf", "font-size", "21px"]], template: function AtmSingleMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmSingleMenuComponent_Template_div_click_1_listener() { return ctx.handleClickSingleMenu(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AtmSingleMenuComponent_div_2_Template, 6, 4, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AtmSingleMenuComponent_div_3_Template, 6, 1, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.IdMenu);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserData.id_role != 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.UserData.id_role == 1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["div.card-hover[_ngcontent-%COMP%]:hover {\r\n  background-color: #00afff;\r\n  transition: all 0.25s;\r\n}\r\n\r\ndiv.card-hover[_ngcontent-%COMP%]:hover    > .card-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%]    > h5[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\ndiv.card-hover[_ngcontent-%COMP%]:hover    > .card-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-2[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\r\n  background-color: white !important;\r\n}\r\n\r\ndiv.card-hover[_ngcontent-%COMP%]:hover    > .card-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-2[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\n.card-round[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.card-body[_ngcontent-%COMP%] {\r\n  height: 4.5rem;\r\n  max-height: 4.5rem;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\nh5.font-cabin.mb-0[_ngcontent-%COMP%] {\r\n  font-size: 17px;\r\n}\r\n\r\nimg.image-main-menu[_ngcontent-%COMP%] {\r\n  height: 2rem;\r\n  max-height: 2rem;\r\n}"] });
    return AtmSingleMenuComponent;
})();


/***/ }),

/***/ 27761:
/*!********************************************************************!*\
  !*** ./src/app/modules/core/components/navbar/navbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmNavbarComponent": () => (/* binding */ AtmNavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/services/authentication.service */ 7942);





let AtmNavbarComponent = /*@__PURE__*/ (() => {
    class AtmNavbarComponent {
        constructor(router, navigationService, authenticationService) {
            this.router = router;
            this.navigationService = navigationService;
            this.authenticationService = authenticationService;
            this.onClickNavbarBrand = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }
        ngOnInit() {
            this.UserData = this.authenticationService.currentUserValue;
        }
        onClickedNavbarBrand(args) {
            this.onClickNavbarBrand.emit(args);
        }
        onNavigateToChangePassword() {
            this.router.navigate(['/dashboard/ganti-password']);
            this.navigationService.onSetHideTopMenuSubject(true);
        }
        onClickButtonLogout() {
            return this.authenticationService.onLogout();
        }
    }
    AtmNavbarComponent.ɵfac = function AtmNavbarComponent_Factory(t) { return new (t || AtmNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
    AtmNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AtmNavbarComponent, selectors: [["atm-navbar"]], outputs: { onClickNavbarBrand: "onClickNavbarBrand" }, decls: 22, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "background-biru-muda"], [1, "container-fluid", "ps-0"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarDashboard", "aria-controls", "navbarDashboard", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarDashboard", 1, "collapse", "navbar-collapse"], ["id", "NavbarBrand", 1, "navbar-brand", "font-cabin", "text-white", "fw-bolder", "border-end", "brand-logo", "cursor-pointer", 3, "click"], [1, "fas", "fa-th"], [1, "navbar-brand", "font-cabin", "text-abu-muda"], ["id", "imgBrandNavbar", "src", ".../../../../../../../assets/image/authentication/image-logo.png", "alt", "grahcis-logo"], [1, "navbar-nav", "ms-auto", "mb-2", "mb-lg-0"], [1, "nav-item", "dropdown", "cursor-pointer"], ["id", "dropdownUser", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "font-cabin", "text-white", "dropdown-toggle"], ["src", "../../../../assets/image/navbar/user.png", "alt", "button-user", 1, "img-logout"], ["aria-labelledby", "dropdownUser", 1, "dropdown-menu", "py-1", "hover-dropdown-user"], [1, "dropdown-items-user"], [1, "dropdown-item", 3, "click"], ["data-bs-toggle", "tooltip", "title", "Sign Out", 1, "nav-item", "cursor-pointer", 3, "click"], [1, "nav-link", "font-cabin", "text-white"], ["src", "../../../../assets/image/navbar/logout.png", "alt", "button-logout", 1, "img-logout"]], template: function AtmNavbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AtmNavbarComponent_Template_a_click_5_listener($event) { return ctx.onClickedNavbarBrand($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AtmNavbarComponent_Template_a_click_16_listener() { return ctx.onNavigateToChangePassword(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Ganti Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AtmNavbarComponent_Template_li_click_18_listener() { return ctx.onClickButtonLogout(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Sign Out ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.UserData.full_name, " ");
            }
        }, styles: ["a.brand-logo[_ngcontent-%COMP%] {\r\n  width: 4.5em;\r\n  max-width: 4.5em;\r\n  text-align: center;\r\n}\r\n\r\n#imgBrandNavbar[_ngcontent-%COMP%] {\r\n  height: 1.5rem;\r\n  max-height: 1.5rem;\r\n}\r\n\r\nimg.img-logout[_ngcontent-%COMP%] {\r\n  height: 1.5em;\r\n  max-height: 1.5em;\r\n  width: 1.5em;\r\n  max-width: 1.5em;\r\n  padding: 0.2em;\r\n  border: 1px solid white;\r\n  background-color: white;\r\n  border-radius: 4px;\r\n}\r\n\r\nul.dropdown-menu.py-1.hover-dropdown-user[_ngcontent-%COMP%] {\r\n  background-color: #00afff !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nul.dropdown-menu.py-1.hover-dropdown-user[_ngcontent-%COMP%]    > li.dropdown-items-user[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--biru-muda) !important;\r\n}\r\n\r\nul.dropdown-menu.py-1.hover-dropdown-user[_ngcontent-%COMP%]    > li.dropdown-items-user[_ngcontent-%COMP%]:active {\r\n  background-color: var(--biru-muda) !important;\r\n}\r\n\r\nul.dropdown-menu.py-1.hover-dropdown-user[_ngcontent-%COMP%]    > li.dropdown-items-user[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\nul.dropdown-menu.py-1.hover-dropdown-user[_ngcontent-%COMP%]    > li.dropdown-items-user[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  color: var(--biru-muda) !important;\r\n}"] });
    return AtmNavbarComponent;
})();


/***/ }),

/***/ 41496:
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/components/sidebar/sidebar.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolSidebarComponent": () => (/* binding */ MolSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _treeview_menu_atm_treeview_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeview-menu/atm-treeview-menu.component */ 88091);



let MolSidebarComponent = /*@__PURE__*/ (() => {
    class MolSidebarComponent {
        constructor() {
            this.SidebarCollapse = false;
            this.IsAdaButtonSidebar = false;
            this.handleClickedButtonSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }
        ngOnInit() {
        }
        handleClickButtonSidebar(args) {
            this.handleClickedButtonSidebar.emit(args);
        }
    }
    MolSidebarComponent.ɵfac = function MolSidebarComponent_Factory(t) { return new (t || MolSidebarComponent)(); };
    MolSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MolSidebarComponent, selectors: [["mol-sidebar"]], inputs: { SidebarCollapse: "SidebarCollapse", IsAdaButtonSidebar: "IsAdaButtonSidebar", ButtonSidebarCaption: "ButtonSidebarCaption", ButtonSidebarIcon: "ButtonSidebarIcon" }, outputs: { handleClickedButtonSidebar: "handleClickedButtonSidebar" }, decls: 1, vars: 4, consts: [[3, "SidebarCollapse", "IsAdaButtonSidebar", "ButtonSidebarCaption", "ButtonSidebarIcon", "handleClickedButtonSidebar"]], template: function MolSidebarComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "atm-treeview-menu", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("handleClickedButtonSidebar", function MolSidebarComponent_Template_atm_treeview_menu_handleClickedButtonSidebar_0_listener($event) { return ctx.handleClickButtonSidebar($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("SidebarCollapse", ctx.SidebarCollapse)("IsAdaButtonSidebar", ctx.IsAdaButtonSidebar)("ButtonSidebarCaption", ctx.ButtonSidebarCaption)("ButtonSidebarIcon", ctx.ButtonSidebarIcon);
            }
        }, directives: [_treeview_menu_atm_treeview_menu_component__WEBPACK_IMPORTED_MODULE_0__.AtmTreeviewMenuComponent], styles: [""] });
    return MolSidebarComponent;
})();


/***/ }),

/***/ 88091:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/core/components/sidebar/treeview-menu/atm-treeview-menu.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtmTreeviewMenuComponent": () => (/* binding */ AtmTreeviewMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79996);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61116);






function AtmTreeviewMenuComponent_li_10_li_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmTreeviewMenuComponent_li_10_li_10_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const childItem_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.onClickSidebarItem(childItem_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const childItem_r4 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", childItem_r4.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](childItem_r4.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](childItem_r4.caption);
    }
}
function AtmTreeviewMenuComponent_li_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmTreeviewMenuComponent_li_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const item_r2 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return (item_r2.sidebarChild == null ? null : item_r2.sidebarChild.length) >= 1 ? ctx_r7.onTogglingHideChildMenu(item_r2.id_menu_sidebar) : ctx_r7.onClickSidebarItem(item_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AtmTreeviewMenuComponent_li_10_li_10_Template, 7, 5, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r2 = ctx.$implicit;
        const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", item_r2.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", item_r2.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", item_r2.caption == "Beranda");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.SidebarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", item_r2.id_menu_sidebar, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", (item_r2.sidebarChild == null ? null : item_r2.sidebarChild.length) < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.SidebarCollapse ? "col-12" : "col-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", item_r2.icon, " fa-sm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.SidebarCollapse ? "is-hidden" : "is-show");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r2.caption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "", item_r2.id_menu_sidebar, "ChildMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.SidebarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", item_r2.sidebarChild);
    }
}
function AtmTreeviewMenuComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmTreeviewMenuComponent_div_11_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.handleClickButtonSidebar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("fas ", ctx_r1.ButtonSidebarIcon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r1.SidebarCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.ButtonSidebarCaption);
    }
}
let AtmTreeviewMenuComponent = /*@__PURE__*/ (() => {
    class AtmTreeviewMenuComponent {
        constructor(router, activatedRoute, navigationService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.navigationService = navigationService;
            this.SidebarCollapse = false;
            this.IsActiveState = false;
            this.UserData = JSON.parse(localStorage.getItem('UserData'));
            this.IsAdaButtonSidebar = false;
            this.handleClickedButtonSidebar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
            this.onGetMainMenuTitle();
            this.onGetSidebarMenu();
        }
        ngOnInit() {
            this.SidebarMenuTitle = localStorage.getItem("ActiveMainMenuTitle");
            let SidebarMenu = JSON.parse(localStorage.getItem("ActiveSidebarMenu"));
            this.MenuSidebar = SidebarMenu && SidebarMenu.length >= 1 ? SidebarMenu : [];
        }
        // ** Untuk mendapatkan Main Menu Title
        onGetMainMenuTitle() {
            this.navigationService.onGetMainMenuTitle()
                .subscribe((_result) => {
                this.SidebarMenuTitle = _result;
            });
        }
        // ** Untuk mendapatkan Sidebar Menu Datasource
        onGetSidebarMenu() {
            this.navigationService.onGetActiveSidebarMenuSubject()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((_result) => {
                if (_result.length >= 1)
                    return _result;
                else
                    return [];
            }))
                .subscribe((_result) => {
                this.MenuSidebar = _result;
            });
        }
        onTogglingHideChildMenu(id) {
            this.onTogglingIconArrow(id);
            // ** Get element berdasarkan ChildMenu yg dipilih
            let elem = document.getElementById(id + "ChildMenu");
            // ** Buat variable kondisi
            let conditionHidden = elem.classList.contains("is-hidden");
            let conditionShow = elem.classList.contains("is-show");
            // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
            if (conditionHidden) {
                if (conditionShow) {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-selected");
                }
                else {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-show");
                    elem.classList.add("is-selected");
                }
                ;
            }
            ;
            // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
            if (!conditionHidden) {
                if (conditionShow) {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-show");
                    elem.classList.remove("is-selected");
                }
                else {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-selected");
                }
            }
            ;
        }
        onTogglingIconArrow(id) {
            // ** Get element berdasarkan Icon yg dipilih
            let elem = document.getElementById(id + "Icon");
            // ** Buat variable kondisi
            let conditionRight = elem.classList.contains("fa-angle-right");
            let conditionDown = elem.classList.contains("fa-angle-down");
            // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
            if (conditionRight && !conditionDown) {
                elem.classList.remove("fa-angle-right");
                elem.classList.add("fa-angle-down");
            }
            ;
            if (!conditionRight && conditionDown) {
                elem.classList.remove("fa-angle-down");
                elem.classList.add("fa-angle-right");
            }
            ;
        }
        onClickSidebarItem(item) {
            this.navigationService.onSetFieldGridBySidebarMenuId(item.fieldgrid);
            let url = this.UserData.id_role == 2 || this.UserData.nama_role == 'dokter' ? '' : 'dashboard/';
            this.router.navigateByUrl(url + item.url);
            setTimeout(() => {
                let NavbarBrand = document.getElementById("NavbarBrand");
                NavbarBrand.click();
                this.navigationService.onSetHideTopMenuSubject(true);
            }, 100);
        }
        onClickBackToMainMenu(args) {
            this.navigationService.onSetBackToMainMenu(true);
            if (!this.SidebarCollapse) {
                let NavbarBrand = document.getElementById("NavbarBrand");
                NavbarBrand.click();
            }
        }
        onGetActiveSidebarMenu() {
        }
        getChild(activatedRoute) {
            if (activatedRoute.firstChild) {
                return this.getChild(activatedRoute.firstChild);
            }
            else {
                return activatedRoute;
            }
        }
        handleClickButtonSidebar(args) {
            this.handleClickedButtonSidebar.emit(args);
        }
    }
    AtmTreeviewMenuComponent.ɵfac = function AtmTreeviewMenuComponent_Factory(t) { return new (t || AtmTreeviewMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
    AtmTreeviewMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AtmTreeviewMenuComponent, selectors: [["atm-treeview-menu"]], inputs: { SidebarMenuTitle: "SidebarMenuTitle", SidebarCollapse: "SidebarCollapse", IsAdaButtonSidebar: "IsAdaButtonSidebar", ButtonSidebarCaption: "ButtonSidebarCaption", ButtonSidebarIcon: "ButtonSidebarIcon" }, outputs: { handleClickedButtonSidebar: "handleClickedButtonSidebar" }, decls: 12, vars: 10, consts: [[1, "row", "mx-0", "px-0"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2", "px-0"], [1, "list-group"], ["id", "MainMenuTitle", 1, "list-group-item-title", "cursor-pointer", "background-biru-muda", "p-0", "mb-2"], ["data-bs-toggle", "tooltip", 1, "items-group-title", "mx-0", "px-0", "div-main-menu-title", 3, "title", "click"], [1, "col-2", "text-center"], [1, "fas", "fa-home"], [1, "col-10"], [1, "font-cabin", "mb-2"], ["class", "list-group-item cursor-pointer p-0 mb-1 list-sidebar-item", 3, "id", 4, "ngFor", "ngForOf"], ["class", "col-lg-12 col-md-12 col-sm-12 col-xs-12 d-grid gap-2", 4, "ngIf"], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1", "list-sidebar-item", 3, "id"], ["data-bs-toggle", "tooltip", 1, "items-group", "mx-0", "px-2", 3, "title", "hidden", "click"], [1, "col-1", "text-center", 3, "hidden"], [1, "fas", "fa-angle-right", 3, "hidden", "id"], [1, "col-9"], [1, "font-cabin", "mb-2", 2, "font-size", "14px"], [1, "list-group", "list-group-child", "is-hidden", 3, "id", "hidden"], ["class", "list-group-item cursor-pointer p-0 mb-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1", 3, "click"], ["data-bs-toggle", "tooltip", 1, "items-group-child", "mx-0", "px-0", 3, "title"], [1, "col-3", "text-end"], [1, "col-9", "ps-3"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "d-grid", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "hidden"]], template: function AtmTreeviewMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AtmTreeviewMenuComponent_Template_div_click_4_listener($event) { return ctx.onClickBackToMainMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AtmTreeviewMenuComponent_li_10_Template, 11, 17, "li", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AtmTreeviewMenuComponent_div_11_Template, 6, 5, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("is-ada-button-sidebar", ctx.IsAdaButtonSidebar);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx.SidebarMenuTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.SidebarCollapse ? "col-12" : "col-2");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.SidebarCollapse ? "is-hidden" : "is-show");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.SidebarMenuTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.MenuSidebar);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsAdaButtonSidebar);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["li.list-group-item-title[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  border-radius: 0;\r\n  color: white;\r\n  transition: all 0.1s;\r\n}\r\n\r\ndiv.div-main-menu-title[_ngcontent-%COMP%] {\r\n  height: 3rem;\r\n  border-radius: 0 !important;\r\n  align-items: center;\r\n}\r\n\r\ndiv.items-group-title[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  border-radius: 0px;\r\n  transition: all 0.25s;\r\n}\r\n\r\nli.list-group-item-title[_ngcontent-%COMP%]    > div.items-group-title[_ngcontent-%COMP%]:hover {\r\n  background-color: #f6f4f7 !important;\r\n  color: #00afff !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nli.list-group-item-title[_ngcontent-%COMP%]    > div.items-group-title[_ngcontent-%COMP%]::after {\r\n  background-color: #f6f4f7 !important;\r\n  color: #00afff !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: var(--hitam);\r\n  transition: all 0.1s;\r\n}\r\n\r\ndiv.items-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]:hover, .is-active[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]::after {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nul.list-group-child[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: white;\r\n  transition: all 0.25s;\r\n}\r\n\r\ndiv.items-group-child[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n  font-size: 14px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group-child[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--biru-muda) !important;\r\n  color: #f6f4f7 !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  animation: fadeIn 400ms ease-in-out both;\r\n}\r\n\r\nul.list-group-child.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-selected[_ngcontent-%COMP%] {\r\n  background-color: #f6f4f7 !important;\r\n  transition: all 0.7s !important;\r\n}\r\n\r\n.is-ada-button-sidebar[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 10rem);\r\n  max-height: calc(100vh - 10rem);\r\n  overflow-y: auto;\r\n}"] });
    return AtmTreeviewMenuComponent;
})();


/***/ }),

/***/ 11195:
/*!************************************************************************!*\
  !*** ./src/app/modules/core/components/top-menu/top-menu.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MolTopMenuComponent": () => (/* binding */ MolTopMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 61116);




function MolTopMenuComponent_div_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MolTopMenuComponent_div_5_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const item_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onGetSidebarMenu(item_r1.id_menu); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", item_r1.id_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](item_r1.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.caption);
    }
}
let MolTopMenuComponent = /*@__PURE__*/ (() => {
    class MolTopMenuComponent {
        constructor(navigationService) {
            this.navigationService = navigationService;
            this.ToggleVisibility = false;
            this.onToggledVisibility = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
            this.onGetActiveChildMenu();
            this.onGetHideTopMenuSubject();
            this.navigationService.onGetBackToMainMenu()
                .subscribe((_result) => {
                if (_result === true) {
                    this.ToggleVisibility = _result;
                    let elem = document.getElementById("ArrowVisibilty");
                    if (this.ToggleVisibility == true) {
                        elem.classList.remove("fa-chevron-circle-up");
                        elem.classList.add("fa-chevron-circle-down");
                    }
                    ;
                    this.onToggledVisibility.emit(_result);
                }
            });
        }
        ngOnInit() {
            this.ChildMenu = JSON.parse(localStorage.getItem("ActiveChildMenu"));
            this.onTogglingVisibility();
        }
        onGetActiveChildMenu() {
            this.navigationService.onGetActiveChildMenuSubject()
                .subscribe((_result) => {
                if (this.ToggleVisibility) {
                    this.onTogglingVisibility();
                }
                this.ChildMenu = _result;
            });
        }
        onGetSidebarMenu(ChildMenuId) {
            this.navigationService.onFetchSidebarMenuFromSessionStorage(ChildMenuId);
        }
        onTogglingVisibility() {
            this.ToggleVisibility = !this.ToggleVisibility;
            let elem = document.getElementById("ArrowVisibilty");
            if (this.ToggleVisibility == true) {
                elem.classList.remove("fa-chevron-circle-up");
                elem.classList.add("fa-chevron-circle-down");
            }
            else {
                elem.classList.remove("fa-chevron-circle-down");
                elem.classList.add("fa-chevron-circle-up");
            }
            this.onToggledVisibility.emit(this.ToggleVisibility);
        }
        // ** Method ini digunakan untuk listening State yg dikirim ketika menekan Sidebar Menu Item
        onGetHideTopMenuSubject() {
            this.navigationService.onGetHideTopMenuSubject()
                .subscribe((_result) => {
                if (_result === true) {
                    this.ToggleVisibility = _result;
                    let elem = document.getElementById("ArrowVisibilty");
                    if (this.ToggleVisibility == true) {
                        elem.classList.remove("fa-chevron-circle-up");
                        elem.classList.add("fa-chevron-circle-down");
                    }
                    this.onToggledVisibility.emit(_result);
                }
            }, (error) => {
                console.log(error);
            }, () => {
            });
        }
    }
    MolTopMenuComponent.ɵfac = function MolTopMenuComponent_Factory(t) { return new (t || MolTopMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
    MolTopMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MolTopMenuComponent, selectors: [["mol-top-menu"]], inputs: { ToggleVisibility: "ToggleVisibility" }, outputs: { onToggledVisibility: "onToggledVisibility" }, decls: 10, vars: 8, consts: [[1, "card", "shadow-sm", "border-0", "bg-white", "py-0"], [1, "card-body", "px-1", "py-0"], [1, "row", "px-0", "mx-0"], [1, "col-11", "pe-0", "py-2"], [1, "row", 3, "hidden"], ["class", "col-lg-1 col-md-1 col-sm-1 col-xs-1 px-1 cursor-pointer ", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-1"], [1, "row", "text-end", "align-items-end", 2, "height", "100%"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "cursor-pointer", 3, "click"], ["id", "ArrowVisibilty", 1, "fas", "fa-chevron-circle-up", "fa-lg", "text-biru-muda"], [1, "col-lg-1", "col-md-1", "col-sm-1", "col-xs-1", "px-1", "cursor-pointer", 3, "click"], [1, "card", "card-child", "card-top-menu", "p-0", 3, "id"], [1, "card-body", "p-0"], [1, "row", "text-center", "align-items-center", 2, "height", "100%"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "font-cabin", "mb-0"]], template: function MolTopMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MolTopMenuComponent_div_5_Template, 9, 5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MolTopMenuComponent_Template_div_click_8_listener() { return ctx.onTogglingVisibility(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.ToggleVisibility ? "card-header-hidding" : "card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.ToggleVisibility ? "" : "height-5rem");
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.ToggleVisibility);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.ChildMenu);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.ToggleVisibility ? "py-0" : "py-1");
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".card-header[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  max-height: 5rem;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.card-header-hidding[_ngcontent-%COMP%] {\r\n  height: 1rem !important;\r\n  max-height: 1rem !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.card-top-menu[_ngcontent-%COMP%] {\r\n  background-color: #f6f4f7;\r\n}\r\n\r\n.card-top-menu[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--biru-muda);\r\n  transition: all 0.25s;\r\n}\r\n\r\nsvg[_ngcontent-%COMP%] {\r\n  color: var(--biru-muda);\r\n}\r\n\r\np.font-cabin.mb-0[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: var(--biru-muda);\r\n}\r\n\r\n.card-top-menu[_ngcontent-%COMP%]:hover    > .card-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-lg-12[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%], .card-top-menu[_ngcontent-%COMP%]:hover    > .card-body[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-lg-12[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  color: white !important;\r\n}\r\n\r\n.height-5rem[_ngcontent-%COMP%] {\r\n  height: 5rem;\r\n  max-height: 5rem;\r\n}\r\n\r\n.card-child[_ngcontent-%COMP%] {\r\n  height: 4rem;\r\n}\r\n\r\n@media (max-width: 1366.98px) {\r\n  p.font-cabin.mb-0[_ngcontent-%COMP%] {\r\n    font-size: 12.5px;\r\n    color: var(--biru-muda);\r\n  }\r\n}"] });
    return MolTopMenuComponent;
})();


/***/ }),

/***/ 34428:
/*!*****************************************************!*\
  !*** ./src/app/modules/core/core-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreRoutingModule": () => (/* binding */ CoreRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _pages_beranda_beranda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/beranda/beranda.component */ 77296);
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ 52483);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 41911);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 49858);
/* harmony import */ var _pages_setup_role_menu_setup_role_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/setup-role-menu/setup-role-menu.component */ 5582);
/* harmony import */ var _pages_setup_role_setup_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/setup-role/setup-role.component */ 83506);
/* harmony import */ var _pages_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/setup-user/setup-user.component */ 68106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);










const coreRoutes = [
    {
        path: "", component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent, children: [
            { path: "beranda", component: _pages_beranda_beranda_component__WEBPACK_IMPORTED_MODULE_0__.BerandaComponent, data: { title: "Beranda" } },
            { path: "setup-user", component: _pages_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_6__.SetupUserComponent, data: { title: "Setup User" } },
            { path: "setup-role", component: _pages_setup_role_setup_role_component__WEBPACK_IMPORTED_MODULE_5__.SetupRoleComponent, data: { title: "Setup Role" } },
            { path: "setup-role-menu", component: _pages_setup_role_menu_setup_role_menu_component__WEBPACK_IMPORTED_MODULE_4__.SetupRoleMenuComponent, data: { title: "Setup Roles Menu" } },
            { path: "ganti-password", component: _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent, data: { title: "Ganti Password" } },
            {
                path: "PIS",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(528), __webpack_require__.e(486), __webpack_require__.e(954), __webpack_require__.e(592), __webpack_require__.e(586)]).then(__webpack_require__.bind(__webpack_require__, /*! ../PIS/pis.module */ 586)).then(m => m.PisModule),
            },
            {
                path: "MM",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(28), __webpack_require__.e(725), __webpack_require__.e(14), __webpack_require__.e(592), __webpack_require__.e(826)]).then(__webpack_require__.bind(__webpack_require__, /*! ../MM/mm.module */ 46826)).then(m => m.MaterialManagementModule),
            },
            {
                path: "MM_TE",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(28), __webpack_require__.e(725), __webpack_require__.e(735)]).then(__webpack_require__.bind(__webpack_require__, /*! ../MM-TANPA-ED/mm.module */ 43735)).then(m => m.MaterialManagementTanpaEDModule),
            },
            {
                path: "Pharmacy",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(528), __webpack_require__.e(28), __webpack_require__.e(280), __webpack_require__.e(14), __webpack_require__.e(592), __webpack_require__.e(452)]).then(__webpack_require__.bind(__webpack_require__, /*! ../Pharmacy/pharmacy.module */ 12452)).then(m => m.PharmacyModule),
            },
            {
                path: "Billing",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(528), __webpack_require__.e(954), __webpack_require__.e(299)]).then(__webpack_require__.bind(__webpack_require__, /*! ../Billing/billing.module */ 75299)).then(m => m.BillingModule)
            },
            {
                path: "OM",
                loadChildren: () => __webpack_require__.e(/*! import() */ 524).then(__webpack_require__.bind(__webpack_require__, /*! ../OM/om.module */ 90524)).then(m => m.OrderManagementModule)
            },
        ]
    },
    { path: "**", component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__.PageNotFoundComponent, data: { title: 'Page Not Found' } },
];
let CoreRoutingModule = /*@__PURE__*/ (() => {
    class CoreRoutingModule {
    }
    CoreRoutingModule.ɵfac = function CoreRoutingModule_Factory(t) { return new (t || CoreRoutingModule)(); };
    CoreRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CoreRoutingModule });
    CoreRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(coreRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
    return CoreRoutingModule;
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CoreRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 68776:
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 94887);
/* harmony import */ var _core_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core-routing.module */ 34428);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _pages_beranda_beranda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/beranda/beranda.component */ 77296);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 41911);
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ 49858);
/* harmony import */ var _pages_exmple_master_exmple_master_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/exmple-master/exmple-master.component */ 4080);
/* harmony import */ var _components_sidebar_treeview_menu_atm_treeview_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/treeview-menu/atm-treeview-menu.component */ 88091);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 27761);
/* harmony import */ var _components_main_menu_single_menu_single_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main-menu/single-menu/single-menu.component */ 27585);
/* harmony import */ var _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/top-menu/top-menu.component */ 11195);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 41496);
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ 38994);
/* harmony import */ var _pages_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/setup-user/setup-user.component */ 68106);
/* harmony import */ var _pages_setup_role_setup_role_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/setup-role/setup-role.component */ 83506);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 10804);
/* harmony import */ var _pages_setup_role_menu_setup_role_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/setup-role-menu/setup-role-menu.component */ 5582);
/* harmony import */ var _pages_setup_role_menu_data_role_data_role_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/setup-role-menu/data-role/data-role.component */ 75896);
/* harmony import */ var _pages_setup_role_menu_input_role_input_role_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/setup-role-menu/input-role/input-role.component */ 53557);
/* harmony import */ var _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/change-password/change-password.component */ 52483);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 35366);






















let CoreModule = /*@__PURE__*/ (() => {
    class CoreModule {
    }
    CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
    CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: CoreModule });
    CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
                _core_routing_module__WEBPACK_IMPORTED_MODULE_1__.CoreRoutingModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
                _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__.ContextMenuModule,
            ]] });
    return CoreModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
            _pages_beranda_beranda_component__WEBPACK_IMPORTED_MODULE_2__.BerandaComponent,
            _pages_setup_user_setup_user_component__WEBPACK_IMPORTED_MODULE_12__.SetupUserComponent,
            _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__.PageNotFoundComponent,
            _pages_exmple_master_exmple_master_component__WEBPACK_IMPORTED_MODULE_5__.ExmpleMasterComponent,
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.AtmNavbarComponent,
            _components_sidebar_treeview_menu_atm_treeview_menu_component__WEBPACK_IMPORTED_MODULE_6__.AtmTreeviewMenuComponent,
            _components_main_menu_single_menu_single_menu_component__WEBPACK_IMPORTED_MODULE_8__.AtmSingleMenuComponent,
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.MolSidebarComponent,
            _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_9__.MolTopMenuComponent,
            _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__.MolMainMenuComponent,
            _pages_setup_role_setup_role_component__WEBPACK_IMPORTED_MODULE_13__.SetupRoleComponent,
            _pages_setup_role_menu_setup_role_menu_component__WEBPACK_IMPORTED_MODULE_14__.SetupRoleMenuComponent,
            _pages_setup_role_menu_data_role_data_role_component__WEBPACK_IMPORTED_MODULE_15__.DataRoleComponent,
            _pages_setup_role_menu_input_role_input_role_component__WEBPACK_IMPORTED_MODULE_16__.InputRoleComponent,
            _pages_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__.ChangePasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _core_routing_module__WEBPACK_IMPORTED_MODULE_1__.CoreRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_21__.ContextMenuModule], exports: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__.AtmNavbarComponent,
            _components_sidebar_treeview_menu_atm_treeview_menu_component__WEBPACK_IMPORTED_MODULE_6__.AtmTreeviewMenuComponent,
            _components_main_menu_single_menu_single_menu_component__WEBPACK_IMPORTED_MODULE_8__.AtmSingleMenuComponent,
            _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__.MolSidebarComponent,
            _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_9__.MolTopMenuComponent,
            _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__.MolMainMenuComponent] });
})();


/***/ }),

/***/ 77296:
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/pages/beranda/beranda.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BerandaComponent": () => (/* binding */ BerandaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 42693);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);
/* harmony import */ var src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/services/authentication.service */ 7942);
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/main-menu/main-menu.component */ 38994);





let BerandaComponent = /*@__PURE__*/ (() => {
    class BerandaComponent {
        constructor(httpClient, httpOperationService, authenticationService) {
            this.httpClient = httpClient;
            this.httpOperationService = httpOperationService;
            this.authenticationService = authenticationService;
        }
        ngOnInit() {
            this.UserFullName = this.authenticationService.currentUserValue.full_name;
            // this.onCheckDirectPrint();
        }
        onCheckDirectPrint() {
            // this.httpClient.get<any>('http://localhost:3000/api/laptop/11')
            //     .subscribe((result) => {
            //         console.log(result);
            //     });
            // this.httpClient.post<any>(
            //     'http://localhost:3000/api/laptop/GetAllLaptopByDynamicFilter',
            //     [
            //         { column: 'id', filter: 'equal', searchText: '1', searchText2: '' },
            //         { column: 'name', filter: 'like', searchText: 'Apple', searchText2: '' },
            //     ]
            // ).subscribe((result) => {
            //     console.log(result);
            // })
        }
    }
    BerandaComponent.ɵfac = function BerandaComponent_Factory(t) { return new (t || BerandaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_0__.HttpOperationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
    BerandaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BerandaComponent, selectors: [["app-beranda"]], decls: 8, vars: 1, consts: [[1, "row", "pt-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "text-center", "mb-2"], [1, "font-cabin", "text-biru-tua"], [1, "font-roboto", "text-biru-muda"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "py-2"]], template: function BerandaComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h5", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Selamat Datang Di GRAHCIS, ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "mol-main-menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.UserFullName, " ");
            }
        }, directives: [_components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__.MolMainMenuComponent], styles: [""] });
    return BerandaComponent;
})();


/***/ }),

/***/ 52483:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/core/pages/change-password/change-password.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 35228);
/* harmony import */ var src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/auth/services/authentication.service */ 7942);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 66908);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-label/atm-label.component */ 73391);
/* harmony import */ var _shared_components_atoms_form_atm_validators_atm_validators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-validators/atm-validators.component */ 33410);
/* harmony import */ var _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/atoms/buttons/atm-button-primary/atm-button-primary.component */ 63067);









let ChangePasswordComponent = /*@__PURE__*/ (() => {
    class ChangePasswordComponent {
        constructor(formBuilder, utilityService, authenticationService) {
            this.formBuilder = formBuilder;
            this.utilityService = utilityService;
            this.authenticationService = authenticationService;
        }
        ngOnInit() {
            this.FormChangePassword = this.formBuilder.group({
                id_user: [0, []],
                password_lama: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
                password_baru: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
                confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            });
        }
        onTogglingSeePassword(ElementId) {
            const elem = document.getElementById(ElementId);
            const elemIcon = document.getElementById(ElementId + 'Icon');
            if (elem.type === 'password') {
                elem.type = 'text';
                elemIcon.classList.remove('fa-eye');
                elemIcon.classList.add('fa-eye-slash');
            }
            else {
                elem.type = 'password';
                elemIcon.classList.remove('fa-eye-slash');
                elemIcon.classList.add('fa-eye');
            }
        }
        onClickButtonSubmit(FormChangePassword) {
            if (FormChangePassword.confirmation !== FormChangePassword.password_baru) {
                this.utilityService.onShowingCustomAlert('error', 'Oops', 'Konfirmasi Password Salah');
            }
            else {
                FormChangePassword.id_user = this.authenticationService.currentUserValue.id_user;
                this.authenticationService.onChangePassword(FormChangePassword)
                    .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                        .then(() => {
                        this.FormChangePassword.reset();
                    });
                });
            }
        }
        get password_lama() { return this.FormChangePassword.get('password_lama'); }
        get password_baru() { return this.FormChangePassword.get('password_baru'); }
        get confirmation() { return this.FormChangePassword.get('confirmation'); }
    }
    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) { return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
    ChangePasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ChangePasswordComponent, selectors: [["app-change-password"]], decls: 32, vars: 17, consts: [[1, "row", "justify-content-center"], [1, "col-lg-6", "col-md-6", "col-sm-6", "col-xs-6", "py-3"], [3, "formGroup"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], [1, "input-group", "mb-0"], ["type", "password", "id", "password_lama", "aria-label", "password_lama", "aria-describedby", "see-password", "formControlName", "password_lama", 1, "form-control"], ["id", "password_lama", 1, "input-group-text", "cursor-pointer", 3, "click"], ["id", "password_lamaIcon", 1, "fas", "fa-eye", "fa-sm"], [3, "IsFormControlTouched", "IsFormControlInvalid", "ValidatorsCaption"], ["type", "password", "id", "password_baru", "aria-label", "password_baru", "aria-describedby", "see-password", "formControlName", "password_baru", 1, "form-control"], ["id", "see-password", 1, "input-group-text", "cursor-pointer", 3, "click"], ["id", "password_baruIcon", 1, "fas", "fa-eye", "fa-sm"], [1, "row", "mb-4"], ["type", "password", "id", "confirmation_password", "aria-label", "confirmation_password", "aria-describedby", "see-password", "formControlName", "confirmation", 1, "form-control"], ["id", "confirmation_passwordIcon", 1, "fas", "fa-eye", "fa-sm"], [3, "IsButtonBlock", "IsButtonDisabled", "ButtonPrimaryCaption", "ButtonPrimaryIcon", "onClickButtonPrimary"]], template: function ChangePasswordComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "org-card-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "form", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "atm-label", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "input", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_10_listener() { return ctx.onTogglingSeePassword("password_lama"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "i", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](12, "atm-validators", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "atm-label", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "input", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_19_listener() { return ctx.onTogglingSeePassword("password_baru"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "atm-validators", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "atm-label", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "input", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "span", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_span_click_28_listener() { return ctx.onTogglingSeePassword("confirmation_password"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "i", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "atm-validators", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "atm-button-primary", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickButtonPrimary", function ChangePasswordComponent_Template_atm_button_primary_onClickButtonPrimary_31_listener() { return ctx.onClickButtonSubmit(ctx.FormChangePassword.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.FormChangePassword);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Password Lama");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsFormControlTouched", ctx.password_lama.touched)("IsFormControlInvalid", ctx.password_lama.invalid)("ValidatorsCaption", "Password Lama Tidak Boleh Kosong");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Password Baru");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsFormControlTouched", ctx.password_baru.touched)("IsFormControlInvalid", ctx.password_baru.invalid)("ValidatorsCaption", "Password Baru Tidak Boleh Kosong");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Konfirmasi Password Baru");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsFormControlTouched", ctx.confirmation.touched)("IsFormControlInvalid", ctx.confirmation.invalid)("ValidatorsCaption", "Konfirmasi Password Baru Tidak Boleh Kosong");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsButtonBlock", true)("IsButtonDisabled", !ctx.FormChangePassword.valid)("ButtonPrimaryCaption", "Ubah Password")("ButtonPrimaryIcon", "fa-save");
            }
        }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__.OrgCardLayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_3__.AtmLabelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_components_atoms_form_atm_validators_atm_validators_component__WEBPACK_IMPORTED_MODULE_4__.AtmValidatorsComponent, _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_5__.AtmButtonPrimaryComponent], styles: [""] });
    return ChangePasswordComponent;
})();


/***/ }),

/***/ 41911:
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/pages/dashboard/dashboard.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 43835);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 90611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ 27761);
/* harmony import */ var _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/top-menu/top-menu.component */ 11195);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/sidebar/sidebar.component */ 41496);

// import { Socket } from 'ngx-socket-io';








const _c0 = ["TopMenuComponent"];
let DashboardComponent = /*@__PURE__*/ (() => {
    class DashboardComponent {
        constructor(router, 
        // private socket: Socket,
        activatedRoute, navigationService, notificationService) {
            this.router = router;
            this.activatedRoute = activatedRoute;
            this.navigationService = navigationService;
            this.notificationService = notificationService;
            this.HideHeaderRibbon = false;
            // ** Sidebar Collapse State
            this.SidebarCollapse = true;
            this.SidebarMenuDatasource = [];
            this.ToggleTopMenu = false;
            this.DashboardDokterState = false;
            this.onCheckIsSidebarEmpty();
        }
        ngOnInit() {
            // this.onGetNotification();
        }
        onClickNavbarBrand(args) {
            const type = args.type;
            this.SidebarCollapse = type === 'click' ? !this.SidebarCollapse : !this.SidebarCollapse;
        }
        // ** Ketika component Dashboard memuat component Baru
        // ** Misal ketika beralih dari Halaman Beranda ke Halaman About
        // ** Maka Dashboard Component memuat component About sebagai component Baru
        componentAdded(args) {
            this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
                const routeData = this.getChild(this.activatedRoute);
                // ** Header Ribbon Hide ketika di halaman Beranda
                routeData.data.subscribe((data) => {
                    this.HeaderRibbon = data.title;
                    if (data.title === 'Beranda') {
                        this.HideHeaderRibbon = true;
                    }
                    else {
                        this.HideHeaderRibbon = false;
                    }
                });
                // ** Hide Top Menu ketika di module Dashboard Dokter
                routeData.parent.data
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1))
                    .subscribe((parent) => {
                    const dashboardDokter = ["Dashboard Dokter", "Pemeriksaan Radiologi Pasien", "Pemeriksaan Laboratorium Pasien"];
                    if (dashboardDokter.includes(parent.title)) {
                        this.DashboardDokterState = true;
                    }
                    else {
                        this.DashboardDokterState = false;
                    }
                });
            });
        }
        getChild(activatedRoute) {
            if (activatedRoute.firstChild) {
                return this.getChild(activatedRoute.firstChild);
            }
            else {
                return activatedRoute;
            }
        }
        onCollapseSidebar() {
            this.SidebarCollapse = true;
            this.ToggleTopMenu = true;
        }
        onGetNotification() {
            // return this.socket.fromEvent('notification')
            //     .pipe(
            //         map((notify: any) => {
            //             return notify.data;
            //         })
            //     ).subscribe((_result) => {
            //         let header = 'Pemberitahuan Baru';
            //         let body = _result.Message;
            //         this.notificationService.onShowToast(header, body, { className: 'bg-primary text-light', delay: 10000 });
            //     });
        }
        onCheckIsSidebarEmpty() {
            this.navigationService.onGetActiveSidebarMenuSubject()
                .subscribe((result) => {
                if (!this.DashboardDokterState) {
                    setTimeout(() => {
                        this.SidebarCollapse = false;
                    }, 250);
                }
            });
        }
        onClickBackToMainMenu(args) {
            // console.log(args);
        }
        onTogglingTopMenu(args) {
            const sidebarSection = document.getElementById('sidebar-section');
            args === true ? sidebarSection.classList.add('hidding-top-menu') : sidebarSection.classList.remove('hidding-top-menu');
        }
        ngOnDestroy() {
            localStorage.clear();
            sessionStorage.clear();
        }
    }
    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService)); };
    DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], viewQuery: function DashboardComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.TopMenuComponent = _t.first);
            }
        }, decls: 15, vars: 6, consts: [["id", "dashboard-section"], [1, "wrapper"], [1, "row", "px-0", "mx-0"], ["id", "navbar-section", 1, "bg-white", "px-0"], [3, "onClickNavbarBrand"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-0"], ["id", "top-menu", 1, "bg-white"], [3, "ToggleVisibility", "onToggledVisibility"], ["TopMenuComponent", ""], ["id", "sidebar-section", 1, "p-0"], [3, "SidebarCollapse"], ["id", "content-section"], [3, "activate"]], template: function DashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "section", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "atm-navbar", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onClickNavbarBrand", function DashboardComponent_Template_atm_navbar_onClickNavbarBrand_4_listener($event) { return ctx.onClickNavbarBrand($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "section", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mol-top-menu", 7, 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onToggledVisibility", function DashboardComponent_Template_mol_top_menu_onToggledVisibility_8_listener($event) { return ctx.onTogglingTopMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "section", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "mol-sidebar", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "section", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "router-outlet", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("activate", function DashboardComponent_Template_router_outlet_activate_14_listener($event) { return ctx.componentAdded($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ToggleVisibility", ctx.ToggleTopMenu);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("collapse-sidebar", ctx.SidebarCollapse);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("SidebarCollapse", ctx.SidebarCollapse);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("expand-content", ctx.SidebarCollapse);
            }
        }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__.AtmNavbarComponent, _components_top_menu_top_menu_component__WEBPACK_IMPORTED_MODULE_3__.MolTopMenuComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.MolSidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet], styles: ["section#navbar-section[_ngcontent-%COMP%] {\r\n  height: 3.5em;\r\n  max-height: 3.5em;\r\n  box-shadow: 2px 0 6px 0 #888;\r\n  transition: all 0.25s;\r\n  z-index: 3;\r\n}\r\n\r\nsection#sidebar-section[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  max-width: 20%;\r\n  height: calc(100vh - 8.5rem);\r\n  max-height: calc(100vh - 8.5rem);\r\n  z-index: 2;\r\n  box-shadow: 2px 0 2px -2px #888;\r\n  transition: all 0.25s;\r\n  background-color: #f6f4f7;\r\n  overflow-y: auto;\r\n}\r\n\r\nsection#sidebar-section.hidding-top-menu[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 4.5rem) !important;\r\n  max-height: calc(100vh - 4.5rem) !important;\r\n}\r\n\r\n.collapse-sidebar[_ngcontent-%COMP%] {\r\n  width: 7.5% !important;\r\n  max-width: 7.5% !important;\r\n  overflow-y: hidden !important;\r\n}\r\n\r\nsection#content-section[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  max-width: 80%;\r\n  height: calc(100vh - 8.5rem);\r\n  max-height: calc(100vh - 8.5rem);\r\n  transition: all 0.25s;\r\n  padding: 0.5em 0.75em;\r\n}\r\n\r\n.expand-content[_ngcontent-%COMP%] {\r\n  width: 92.5% !important;\r\n  max-width: 92.5% !important;\r\n}\r\n\r\n.ngb-toasts[_ngcontent-%COMP%] {\r\n  margin: 4em 0.5em 0.5em 0.5em !important;\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  z-index: 1200;\r\n}\r\n\r\n.ngb-toasts[_ngcontent-%COMP%]    > div.toast-header[_ngcontent-%COMP%]    > button.btn-close[_ngcontent-%COMP%] {\r\n  margin-right: 0 !important;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.card-router-outlet[_ngcontent-%COMP%] {\r\n  border-top: 0.25em solid #1a73e8;\r\n}\r\n\r\n@media only screen and (min-width: 992.98px) and (max-width: 1199.98px) {\r\n  section#sidebar-section[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    max-width: 20%;\r\n    height: calc(100vh - 3.5em);\r\n    max-height: calc(100vh - 3.5em);\r\n    z-index: 2;\r\n    box-shadow: 2px 0 2px -2px #888;\r\n    transition: all 0.7s;\r\n  }\r\n\r\n  .collapse-sidebar[_ngcontent-%COMP%] {\r\n    width: 8% !important;\r\n    max-width: 8% !important;\r\n  }\r\n\r\n  section#content-section[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    max-width: 80%;\r\n    height: calc(100vh - 3.5em);\r\n    max-height: calc(100vh - 3.5em);\r\n    transition: all 0.7s;\r\n    padding: 0.5em 0.75em;\r\n  }\r\n\r\n  .expand-content[_ngcontent-%COMP%] {\r\n    width: 92% !important;\r\n    max-width: 92% !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1366.98px) {\r\n  section#sidebar-section[_ngcontent-%COMP%] {\r\n    width: 20%;\r\n    max-width: 20%;\r\n    height: calc(100vh - 8.5em);\r\n    max-height: calc(100vh - 8.5em);\r\n    z-index: 2;\r\n    box-shadow: 2px 0 2px -2px #888;\r\n    transition: all 0.7s;\r\n  }\r\n\r\n  .collapse-sidebar[_ngcontent-%COMP%] {\r\n    width: 5.25% !important;\r\n    max-width: 5.25% !important;\r\n  }\r\n\r\n  section#content-section[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    max-width: 80%;\r\n    height: calc(100vh - 8.5em);\r\n    max-height: calc(100vh - 8.5em);\r\n    transition: all 0.7s;\r\n    padding: 0.5em 0.75em;\r\n  }\r\n\r\n  .expand-content[_ngcontent-%COMP%] {\r\n    width: 94.75% !important;\r\n    max-width: 94.75% !important;\r\n  }\r\n}"] });
    return DashboardComponent;
})();


/***/ }),

/***/ 4080:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/core/pages/exmple-master/exmple-master.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExmpleMasterComponent": () => (/* binding */ ExmpleMasterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _json_GridDaftarBarang_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/GridDaftarBarang.json */ 60692);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 75470);
/* harmony import */ var src_app_modules_core_services_example_example_master_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/core/services/example/example-master.service */ 94907);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 66908);
/* harmony import */ var _shared_components_molecules_form_mol_input_checkbox_single_mol_input_checkbox_single_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/molecules/form/mol-input-checkbox-single/mol-input-checkbox-single.component */ 36740);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/molecules/grid/grid/grid.component */ 39456);









const _c0 = ["lookUpPasien"];
const _c1 = ["modalDialogBatch"];
function ExmpleMasterComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Input No. Batch");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExmpleMasterComponent_ng_template_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mol-grid", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("row-selected", function ExmpleMasterComponent_ng_template_6_Template_mol_grid_row_selected_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5.onSelectedRow($event); })("toolbar-click", function ExmpleMasterComponent_ng_template_6_Template_mol_grid_toolbar_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.onToolbarClick($event); })("initialized", function ExmpleMasterComponent_ng_template_6_Template_mol_grid_initialized_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.onInitalizedGrid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Simpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("grid-id", "GridDaftarBarang")("grid-height", 300)("grid-lines", "Both")("grid-editSettings", ctx_r1.GridDaftarBarangEditSettings)("columns", ctx_r1.GridDaftarBarangColums.GridDaftarBarang.columns)("grid-DataSource", ctx_r1.GridDaftarBarangDataSource)("grid-toolbar", ctx_r1.GridDaftarBarangToolbar);
    }
}
let ExmpleMasterComponent = /*@__PURE__*/ (() => {
    class ExmpleMasterComponent {
        constructor(fb, modalService, exampleHttp) {
            this.fb = fb;
            this.modalService = modalService;
            this.exampleHttp = exampleHttp;
            // ** Grid Setup Role Button Properties
            this.gridDaftarBarang = null;
            this.GridDaftarBarangEditSettings = { allowAdding: true, allowEditing: true };
            this.GridDaftarBarangColums = _json_GridDaftarBarang_json__WEBPACK_IMPORTED_MODULE_0__;
            this.GridDaftarBarangToolbar = ["Add"];
            this.formPasien = this.fb.group({
                name: [''],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
                example: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
                lookup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            });
            this.columns = [
                {
                    width: 10,
                    headerText: 'Email',
                    field: 'email',
                    visible: true,
                },
                {
                    width: 10,
                    headerText: 'Example',
                    field: 'example',
                    visible: true,
                },
                {
                    width: 10,
                    headerText: 'Name',
                    field: 'name',
                    visible: true,
                },
                {
                    width: 10,
                    headerText: 'Lookup',
                    field: 'lookup',
                    visible: false,
                },
            ];
            this.sourceGrid = this.exampleHttp.getExample();
        }
        ngOnInit() { }
        ngAfterViewInit() { }
        handleError() {
            console.log('error');
        }
        handleSukses(response) {
            console.log(response);
        }
        handleSubmit(data) {
            console.log(this.formPasien.value);
            if (this.formPasien.valid) {
                this.exampleHttp.postExampleWithAction(data, 'url', this.handleSukses.bind(this), this.handleError.bind(this));
            }
        }
        heandleSelectedLookUp(arg) {
            this.lookup.setValue(arg.email);
        }
        onClickButton() {
            // ** Set Modal Size
            this.modalRef = this.modalService.show(this.modalDialogBatch);
        }
        onSelectedRow(args) {
        }
        onToolbarClick(args) {
            const item = args.item.id;
            switch (item) {
                case 'add':
                    break;
                default:
                    break;
            }
        }
        onInitalizedGrid(component) {
            this.gridDaftarBarang = component;
        }
        get email() { return this.formPasien.get('email'); }
        get example() { return this.formPasien.get('example'); }
        get lookup() { return this.formPasien.get('lookup'); }
    }
    ExmpleMasterComponent.ɵfac = function ExmpleMasterComponent_Factory(t) { return new (t || ExmpleMasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_modules_core_services_example_example_master_service__WEBPACK_IMPORTED_MODULE_2__.ExampleMasterService)); };
    ExmpleMasterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ExmpleMasterComponent, selectors: [["app-exmple-master"]], viewQuery: function ExmpleMasterComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.lookUpPasien = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.modalDialogBatch = _t.first);
            }
        }, decls: 8, vars: 1, consts: [[1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [3, "label"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["modalDialogBatch", ""], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body", "p-0"], [3, "grid-id", "grid-height", "grid-lines", "grid-editSettings", "columns", "grid-DataSource", "grid-toolbar", "row-selected", "toolbar-click", "initialized"], ["gridDaftarBarang", ""], [1, "modal-footer", "background-abu-muda"], ["type", "button", 1, "btn", "btn-primary"]], template: function ExmpleMasterComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "org-card-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mol-input-checkbox-single", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExmpleMasterComponent_Template_button_click_4_listener() { return ctx.onClickButton(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Simpan");
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExmpleMasterComponent_ng_template_6_Template, 11, 7, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", "Test CheckBox");
            }
        }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_3__.OrgCardLayoutComponent, _shared_components_molecules_form_mol_input_checkbox_single_mol_input_checkbox_single_component__WEBPACK_IMPORTED_MODULE_4__.MolInputCheckboxSingleComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_5__.MolGridComponent], styles: [""] });
    return ExmpleMasterComponent;
})();


/***/ }),

/***/ 49858:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/core/pages/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/navigation.service */ 65740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/atoms/buttons/atm-button-primary/atm-button-primary.component */ 63067);





function PageNotFoundComponent_atm_button_primary_15_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "atm-button-primary", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickButtonPrimary", function PageNotFoundComponent_atm_button_primary_15_Template_atm_button_primary_onClickButtonPrimary_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onClickButtonKembali($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IsButtonBlock", false)("ButtonPrimaryCaption", " Kembali")("ButtonPrimaryIcon", "fa-undo-alt");
    }
}
function PageNotFoundComponent_atm_button_primary_16_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "atm-button-primary", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClickButtonPrimary", function PageNotFoundComponent_atm_button_primary_16_Template_atm_button_primary_onClickButtonPrimary_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onClickButtonKembaliBeranda($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("IsButtonBlock", false)("ButtonPrimaryCaption", " Kembali Ke Beranda")("ButtonPrimaryIcon", "fa-undo-alt");
    }
}
let PageNotFoundComponent = /*@__PURE__*/ (() => {
    class PageNotFoundComponent {
        constructor(router, navigationService) {
            this.router = router;
            this.navigationService = navigationService;
        }
        ngOnInit() {
        }
        onClickButtonKembali(args) {
            let type = args.type;
            if (type == "click") {
                this.router.navigateByUrl('dashboard/beranda');
            }
        }
        onClickButtonKembaliBeranda(args) {
            let type = args.type;
            if (type == "click") {
                this.router.navigateByUrl('dashboard/beranda');
            }
        }
    }
    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_modules_shared_services_navigation_service__WEBPACK_IMPORTED_MODULE_0__.NavigationService)); };
    PageNotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 17, vars: 2, consts: [["id", "page-not-found"], [1, "row", "justify-content-center", "align-items-center", "px-0", "mx-0"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", "text-end", "border-end"], ["src", "../../../assets/image/page-not-found/undraw_page_not_found_su7k.svg", "alt", "page-not-found", 1, "image-not-found"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", "text-start"], [1, "mb-3"], [1, "font-roboto", "fw-bold", "text-biru-muda"], [1, "font-cabin", "text-abu-tua"], [1, "font-cabin", "text-abu-tua", "mb-3"], [1, "font-cabin", "text-black"], [3, "IsButtonBlock", "ButtonPrimaryCaption", "ButtonPrimaryIcon", "onClickButtonPrimary", 4, "ngIf"], [3, "IsButtonBlock", "ButtonPrimaryCaption", "ButtonPrimaryIcon", "onClickButtonPrimary"]], template: function PageNotFoundComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Oops... ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Halaman Tidak Ditemukan / ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h5", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Anda Tidak Berkenan Membuka Halaman Ini ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Mohon Hubungi Administrator Untuk Info Lebih Lanjut ");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PageNotFoundComponent_atm_button_primary_15_Template, 1, 3, "atm-button-primary", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PageNotFoundComponent_atm_button_primary_16_Template, 1, 3, "atm-button-primary", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.navigationService.Restriction.value);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.navigationService.Restriction.value);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_1__.AtmButtonPrimaryComponent], styles: ["section#page-not-found[_ngcontent-%COMP%] {\r\n  padding-top: 25vh;\r\n}\r\n\r\nimg.image-not-found[_ngcontent-%COMP%] {\r\n  width: 23em;\r\n  max-width: 23em;\r\n  height: 15em;\r\n  max-height: 15em;\r\n}"] });
    return PageNotFoundComponent;
})();


/***/ }),

/***/ 75896:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role-menu/data-role/data-role.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataRoleComponent": () => (/* binding */ DataRoleComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 22501);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_GridSetupRoleMenu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../json/GridSetupRoleMenu.json */ 38758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ 75470);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 35228);
/* harmony import */ var _services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/setup-role/setup-role.service */ 15804);
/* harmony import */ var _services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/setup-role-menu/setup-role-menu.service */ 70500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/components/molecules/grid/grid/grid.component */ 39456);









const _c0 = ["modalDialogSetupRoleMenu"];
function DataRoleComponent_li_8_li_10_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_li_8_li_10_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const childItem_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.onGetMenuSidebar(childItem_r7.caption, childItem_r7.id_menu); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const childItem_r7 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", childItem_r7.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", childItem_r7.caption, " ");
    }
}
function DataRoleComponent_li_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_li_8_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const item_r5 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return (item_r5.childMenu == null ? null : item_r5.childMenu.length) >= 1 ? ctx_r10.onTogglingHideChildMenu(item_r5.id_menu) : ctx_r10.onGetMenuSidebar(item_r5.caption, item_r5.id_menu); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DataRoleComponent_li_8_li_10_Template, 5, 2, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", item_r5.id_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", item_r5.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", item_r5.id_menu, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (item_r5.childMenu == null ? null : item_r5.childMenu.length) < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](item_r5.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", item_r5.id_menu, "ChildMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r5.childMenu);
    }
}
function DataRoleComponent_ul_15_li_1_div_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_ul_15_li_1_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return (item_r13.childSidebarMenu == null ? null : item_r13.childSidebarMenu.length) >= 1 ? ctx_r16.onTogglingHideSidebarChildMenu(item_r13.id_menu_sidebar) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_ul_15_li_1_div_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r19.onSeeDetailButtonAndFieldGrid(item_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DataRoleComponent_ul_15_li_1_div_1_Template_input_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r18); const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.onChangeChecboxActiveSidebarMenu($event, item_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", item_r13.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]((item_r13.childSidebarMenu == null ? null : item_r13.childSidebarMenu.length) >= 1 ? "col-11" : "col-10");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", item_r13.id_menu_sidebar, "SidebarIcon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (item_r13.childSidebarMenu == null ? null : item_r13.childSidebarMenu.length) < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u00A0 ", item_r13.caption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("hidden", (item_r13.childSidebarMenu == null ? null : item_r13.childSidebarMenu.length) >= 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", item_r13.id_menu_sidebar, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", item_r13.status_akses);
    }
}
function DataRoleComponent_ul_15_li_1_li_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_ul_15_li_1_li_3_Template_div_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const childItem_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r25.onSeeDetailButtonAndFieldGrid(childItem_r24); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function DataRoleComponent_ul_15_li_1_li_3_Template_input_change_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const childItem_r24 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3); return ctx_r27.onChangeChecboxActiveSidebarMenu($event, childItem_r24); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const childItem_r24 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("title", childItem_r24.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", childItem_r24.caption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", childItem_r24.id_menu_sidebar, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("checked", childItem_r24.status_akses);
    }
}
function DataRoleComponent_ul_15_li_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DataRoleComponent_ul_15_li_1_div_1_Template, 10, 9, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "ul", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DataRoleComponent_ul_15_li_1_li_3_Template, 11, 4, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r13 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", item_r13.id_menu_sidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", item_r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate1"]("id", "", item_r13.id_menu_sidebar, "SidebarChild");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", item_r13.childSidebarMenu);
    }
}
function DataRoleComponent_ul_15_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, DataRoleComponent_ul_15_li_1_Template, 4, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.MenuSidebar);
    }
}
function DataRoleComponent_div_16_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "No Record to Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
}
function DataRoleComponent_ng_template_17_Template(rf, ctx) {
    if (rf & 1) {
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "h5", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DataRoleComponent_ng_template_17_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.modalRef.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Daftar Field Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mol-grid", 49, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("row-selected", function DataRoleComponent_ng_template_17_Template_mol_grid_row_selected_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r32.onSelectedRowGridFieldGrid($event); })("action-complete", function DataRoleComponent_ng_template_17_Template_mol_grid_action_complete_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r33.onActionCompleteGridField($event); })("initialized", function DataRoleComponent_ng_template_17_Template_mol_grid_initialized_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r34.onInitalizedGridField($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Daftar Button");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mol-grid", 49, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("row-selected", function DataRoleComponent_ng_template_17_Template_mol_grid_row_selected_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r35.onSelectedRowGridButton($event); })("action-complete", function DataRoleComponent_ng_template_17_Template_mol_grid_action_complete_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r36.onActionCompleteGridButton($event); })("initialized", function DataRoleComponent_ng_template_17_Template_mol_grid_initialized_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r37.onInitalizedGridButton($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.ModalDialogSetupRoleMenuTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("grid-id", "GridSetupRoleFieldGrid")("grid-height", 150)("grid-lines", "Both")("grid-editSettings", ctx_r4.GridSetupRoleFieldGridEditSettings)("columns", ctx_r4.GridSetupFieldGridColums.GridRoleFieldGrid.columns)("grid-DataSource", ctx_r4.GridSetupFieldGridDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("grid-id", "GridSetupRoleButton")("grid-height", 150)("grid-lines", "Both")("grid-editSettings", ctx_r4.GridSetupRoleButtonEditSettings)("columns", ctx_r4.GridSetupRoleButtonColums.GridRoleButton.columns)("grid-DataSource", ctx_r4.GridSetupRoleButtonDataSource);
    }
}
let DataRoleComponent = /*@__PURE__*/ (() => {
    class DataRoleComponent {
        constructor(modalService, utilityService, setupRoleService, setupRoleMenuService) {
            this.modalService = modalService;
            this.utilityService = utilityService;
            this.setupRoleService = setupRoleService;
            this.setupRoleMenuService = setupRoleMenuService;
            // ** Card Sidebar Menu Properties
            this.CardSidebarMenuTitle = "Daftar Menu Sidebar";
            // ** Grid Setup Role Button Properties
            this.gridSetupRoleButton = null;
            this.GridSetupRoleButtonEditSettings = { allowEditing: true };
            this.GridSetupRoleButtonColums = _json_GridSetupRoleMenu_json__WEBPACK_IMPORTED_MODULE_1__;
            // ** Grid Setup Role Button Properties
            this.gridSetupRoleFieldGrid = null;
            this.GridSetupRoleFieldGridEditSettings = { allowEditing: true };
            this.GridSetupFieldGridColums = _json_GridSetupRoleMenu_json__WEBPACK_IMPORTED_MODULE_1__;
        }
        ngOnInit() {
        }
        ngAfterViewInit() {
            if (Object.keys(this.RolesData).length != 0) {
                this.onGetMainMenu(this.RolesData);
            }
            else {
                this.setupRoleService.onGetCurrentDataRole()
                    .subscribe((result) => {
                    this.RolesData = result;
                    this.onGetMainMenu(this.RolesData);
                });
            }
        }
        onGetMainMenu(RoleData) {
            this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
                .subscribe((result) => {
                this.MainMenu = result.data;
            });
        }
        onGetMenuSidebar(TopMenuCaption, TopMenuId) {
            this.SelectedTopMenuId = TopMenuId;
            this.CardSidebarMenuTitle = "Daftar Menu Sidebar pada Menu " + TopMenuCaption;
            this.setupRoleMenuService.onGetSidebarMenuByMenuIdAndRoleId(TopMenuId, this.RolesData.id_role)
                .subscribe((result) => {
                this.MenuSidebar = result.data;
            });
        }
        onTogglingHideChildMenu(id) {
            this.onTogglingIconArrow(id);
            // ** Get element berdasarkan ChildMenu yg dipilih
            let elem = document.getElementById(id + "ChildMenu");
            // ** Buat variable kondisi
            let conditionHidden = elem.classList.contains("is-hidden");
            let conditionShow = elem.classList.contains("is-show");
            // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
            if (conditionHidden) {
                if (conditionShow) {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-selected");
                }
                else {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-show");
                    elem.classList.add("is-selected");
                }
                ;
            }
            ;
            // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
            if (!conditionHidden) {
                if (conditionShow) {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-show");
                    elem.classList.remove("is-selected");
                }
                else {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-selected");
                }
            }
            ;
        }
        onTogglingIconArrow(id) {
            // ** Get element berdasarkan Icon yg dipilih
            let elem = document.getElementById(id + "Icon");
            // ** Buat variable kondisi
            let conditionRight = elem.classList.contains("fa-angle-right");
            let conditionDown = elem.classList.contains("fa-angle-down");
            // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
            if (conditionRight && !conditionDown) {
                elem.classList.remove("fa-angle-right");
                elem.classList.add("fa-angle-down");
            }
            ;
            if (!conditionRight && conditionDown) {
                elem.classList.remove("fa-angle-down");
                elem.classList.add("fa-angle-right");
            }
            ;
        }
        onTogglingHideSidebarChildMenu(id) {
            this.onTogglingSidebarIconArrow(id);
            // ** Get element berdasarkan ChildMenu yg dipilih
            let elem = document.getElementById(id + "SidebarChild");
            // ** Buat variable kondisi
            let conditionHidden = elem.classList.contains("is-hidden");
            let conditionShow = elem.classList.contains("is-show");
            // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
            if (conditionHidden) {
                if (conditionShow) {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-selected");
                }
                else {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-show");
                    elem.classList.add("is-selected");
                }
                ;
            }
            ;
            // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
            if (!conditionHidden) {
                if (conditionShow) {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-show");
                    elem.classList.remove("is-selected");
                }
                else {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-selected");
                }
            }
            ;
        }
        onTogglingSidebarIconArrow(id) {
            // ** Get element berdasarkan Icon yg dipilih
            let elem = document.getElementById(id + "SidebarIcon");
            // ** Buat variable kondisi
            let conditionRight = elem.classList.contains("fa-angle-right");
            let conditionDown = elem.classList.contains("fa-angle-down");
            // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
            if (conditionRight && !conditionDown) {
                elem.classList.remove("fa-angle-right");
                elem.classList.add("fa-angle-down");
            }
            ;
            if (!conditionRight && conditionDown) {
                elem.classList.remove("fa-angle-down");
                elem.classList.add("fa-angle-right");
            }
            ;
        }
        onChangeChecboxActiveSidebarMenu(event, SidebarMenu) {
            event.preventDefault();
            event.stopPropagation();
            // ** Variable element checkbox saat ini
            let elem = document.getElementById(SidebarMenu.id_menu_sidebar + "Checkbox");
            // ** Antisipasi dulu biar tidak ter-check
            elem.checked = !elem.checked;
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'question',
                title: 'Apakah Anda Yakin',
                text: 'Mengubah Status ' + SidebarMenu.caption + ' ?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: `Yes`,
                denyButtonText: `Tidak, Kembali`,
            }).then((result) => {
                if (result.isConfirmed) {
                    if (elem.checked) {
                        this.setupRoleMenuService.onRemoveSidebarMenuFromRole(this.RolesData.id_role, SidebarMenu.id_menu_sidebar)
                            .subscribe((result) => {
                            this.setupRoleMenuService.onGetSidebarMenuByMenuIdAndRoleId(this.SelectedTopMenuId, this.RolesData.id_role)
                                .subscribe((result) => { this.MenuSidebar = result.data; });
                        }, (error) => {
                            console.log(error);
                        }, () => {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan');
                        });
                    }
                    else {
                        this.setupRoleMenuService.onInsertSidebarMenuToRole(this.RolesData.id_role, SidebarMenu.id_menu_sidebar)
                            .subscribe((result) => {
                            this.setupRoleMenuService.onGetSidebarMenuByMenuIdAndRoleId(this.SelectedTopMenuId, this.RolesData.id_role)
                                .subscribe((result) => { this.MenuSidebar = result.data; });
                        }, (error) => {
                            console.log(error);
                        }, () => {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan');
                        });
                    }
                    ;
                }
                else {
                    elem.checked = elem.checked;
                }
            });
        }
        onSeeDetailButtonAndFieldGrid(SidebarMenu) {
            this.SelectedSidebarMenuId = SidebarMenu.id_menu_sidebar;
            // ** Kosongkan Grid Datasource terlebih dahulu
            this.GridSetupFieldGridDataSource = [];
            this.GridSetupRoleButtonDataSource = [];
            // ** Set Modal Dialog Title
            this.ModalDialogSetupRoleMenuTitle = "Data Button & Field Grid " + SidebarMenu.caption;
            // ** Set Modal Size
            this.modalRef = this.modalService.show(this.modalDialogSetupRoleMenu, Object.assign({}, { class: 'modal-lg' }));
            // ** Panggil function untuk Get Button dan Field Grid
            this.onGetButtonAndFieldGridDatasource(SidebarMenu.id_menu_sidebar);
        }
        onGetButtonAndFieldGridDatasource(SidebarMenuId) {
            this.setupRoleMenuService.onGetFieldGridBySidebarMenuIdAndRoleId(SidebarMenuId, this.RolesData.id_role)
                .subscribe((result) => {
                this.GridSetupFieldGridDataSource = result.data;
            });
            this.setupRoleMenuService.onGetButtonSidebarMenuIdAndRoleId(SidebarMenuId, this.RolesData.id_role)
                .subscribe((result) => {
                this.GridSetupRoleButtonDataSource = result.data;
            });
        }
        onInitalizedGridField(component) {
            this.gridSetupRoleFieldGrid = component;
        }
        onActionCompleteGridField(args) {
            const requestType = args.requestType;
            const data = args.data;
            const previousData = args.previousData;
            if (requestType === "save") {
                if (data !== previousData) {
                    // ** Munculkan alert confirmation 
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'question',
                        title: 'Apakah Anda Yakin',
                        text: 'Mengubah Status Field ' + data.nama_header_text + ' ?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `Yes`,
                        denyButtonText: `Tidak, Kembali`,
                    }).then((result) => {
                        // ** Jika status_akses == true
                        if (result.isConfirmed && data.status_akses) {
                            this.setupRoleMenuService.onInsertFieldGridToRole(this.RolesData.id_role, data.id_menu_sidebar, data.id_field_grid)
                                .subscribe((result) => {
                                this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                                    .then(() => {
                                    this.onGetButtonAndFieldGridDatasource(data.id_menu_sidebar);
                                });
                            });
                        }
                        // ** Jika status akses == false
                        else if (result.isConfirmed && !data.status_akses) {
                            this.setupRoleMenuService.onRemoveFieldGridFromRole(this.RolesData.id_role, data.id_menu_sidebar, data.id_field_grid)
                                .subscribe((result) => {
                                this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                                    .then(() => {
                                    this.onGetButtonAndFieldGridDatasource(data.id_menu_sidebar);
                                });
                            });
                        }
                        else {
                            this.GridSetupFieldGridDataSource[args.rowIndex] = previousData;
                        }
                    });
                }
            }
        }
        onSelectedRowGridFieldGrid(args) {
            // console.log(args);
        }
        onInitalizedGridButton(component) {
            this.gridSetupRoleButton = component;
        }
        onSelectedRowGridButton(args) {
            args.data.id_menu_sidebar = this.SelectedSidebarMenuId;
        }
        onActionCompleteGridButton(args) {
            const requestType = args.requestType;
            const data = args.data;
            const previousData = args.previousData;
            if (requestType === "save") {
                if (data !== previousData) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'question',
                        title: 'Apakah Anda Yakin',
                        text: 'Mengubah Status Tombol ' + data.caption + ' ?',
                        showDenyButton: true,
                        showCancelButton: false,
                        confirmButtonText: `Yes`,
                        denyButtonText: `Tidak, Kembali`,
                    }).then((result) => {
                        // ** Jika status akses == true
                        if (result.isConfirmed && data.status_akses) {
                            this.setupRoleMenuService.onInsertButtonToRole(this.RolesData.id_role, data.id_menu_sidebar, data.id_button)
                                .subscribe((result) => {
                                this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                                    .then(() => {
                                    this.onGetButtonAndFieldGridDatasource(data.id_menu_sidebar);
                                });
                            });
                        }
                        // ** Jika status_akses == false
                        else if (result.isConfirmed && !data.status_akses) {
                            this.setupRoleMenuService.onRemoveButtonFromRole(this.RolesData.id_role, data.id_menu_sidebar, data.id_button)
                                .subscribe((result) => {
                                this.utilityService.onShowingCustomAlert('success', 'Success', result.message)
                                    .then(() => {
                                    this.onGetButtonAndFieldGridDatasource(data.id_menu_sidebar);
                                });
                            });
                        }
                        else {
                            this.GridSetupRoleButtonDataSource[args.rowIndex] = previousData;
                        }
                    });
                }
            }
        }
    }
    DataRoleComponent.ɵfac = function DataRoleComponent_Factory(t) { return new (t || DataRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_3__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_4__.SetupRoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_5__.SetupRoleMenuService)); };
    DataRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DataRoleComponent, selectors: [["app-data-role"]], viewQuery: function DataRoleComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.modalDialogSetupRoleMenu = _t.first);
            }
        }, inputs: { RolesData: "RolesData", MainMenu: "MainMenu" }, decls: 19, vars: 4, consts: [[1, "row"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4", "px-1"], [1, "card"], [1, "card-header", "py-2"], [1, "mb-0", "cardTitleSetupMenu"], [1, "card-body", "p-1", "cardBodySetupMenu"], [1, "list-group"], ["class", "list-group-item cursor-pointer p-0 mb-1 list-sidebar-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", "px-1"], ["class", "list-group", 4, "ngIf"], ["class", "row mx-0 py-2", 4, "ngIf"], ["modalDialogSetupRoleMenu", ""], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1", "list-sidebar-item", 3, "id"], ["data-bs-toggle", "tooltip", 1, "items-group", "mx-0", "px-2", 3, "title", "click"], [1, "col-12", "me-1"], [1, "row", "align-items-center"], [1, "col-1", "px-0", "text-end"], [1, "fas", "fa-angle-right", 3, "hidden", "id"], [1, "col-11"], [1, "font-cabin", "mb-2"], [1, "list-group", "list-group-child", "is-hidden", 3, "id"], ["class", "list-group-item cursor-pointer p-0 mb-1", 4, "ngFor", "ngForOf"], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1"], ["data-bs-toggle", "tooltip", 1, "items-group-child", "mx-0", "px-2", 3, "title", "click"], [1, "col-12", "ps-4", "me-1"], [1, "font-cabin", "mb-2", 2, "font-size", "16px"], ["class", "items-group mx-0 px-2", "data-bs-toggle", "tooltip", 3, "title", 4, "ngIf"], ["data-bs-toggle", "tooltip", 1, "items-group", "mx-0", "px-2", 3, "title"], [1, "me-1", "px-1", 2, "padding-top", "3px", 3, "click"], [1, "col-1", "text-end", "px-2", 2, "padding-top", "3px", 3, "hidden", "click"], [1, "badge", "bg-info"], [1, "fas", "fa-info-circle"], [1, "col-1", "text-start", "px-2"], [1, "form-check"], ["type", "checkbox", "value", "true", 1, "form-check-input", "form-select-lg", 3, "id", "checked", "change"], ["data-bs-toggle", "tooltip", 1, "items-group-child", "mx-0", "px-2", 3, "title"], [1, "col-10", "ps-4", "me-1", 2, "padding-top", "3px"], [1, "col-1", "text-end", "px-2", 2, "padding-top", "3px", 3, "click"], [1, "row", "mx-0", "py-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "text-abu-tua", "mb-0"], [1, "modal-header", "px-2", "py-1", "background-biru-muda", "text-white"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "btn", "pull-right", "text-white", 3, "click"], [1, "fas", "fa-window-close"], [1, "modal-body"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body", "p-0"], [3, "grid-id", "grid-height", "grid-lines", "grid-editSettings", "columns", "grid-DataSource", "row-selected", "action-complete", "initialized"], ["gridSetupRoleFieldGrid", ""], [1, "row", "mb-2"], ["gridSetupRoleButton", ""]], template: function DataRoleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Daftar Main Menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, DataRoleComponent_li_8_Template, 11, 7, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, DataRoleComponent_ul_15_Template, 2, 1, "ul", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, DataRoleComponent_div_16_Template, 4, 0, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, DataRoleComponent_ng_template_17_Template, 24, 13, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.MainMenu);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.CardSidebarMenuTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.MenuSidebar == null ? null : ctx.MenuSidebar.length) >= 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.MenuSidebar == null ? null : ctx.MenuSidebar.length) < 1);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_6__.MolGridComponent], styles: ["li.list-group-item[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: var(--hitam);\r\n  transition: all 0.1s;\r\n}\r\n\r\ndiv.items-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n  border: 1px solid var(--abu-muda);\r\n  border-radius: 5px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%]:hover, li.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%]:hover, .is-active[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n  border-radius: 5px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%]::after, li.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%]::after {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nul.list-group-child[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: white;\r\n  transition: all 0.25s;\r\n}\r\n\r\ndiv.items-group-child[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n  font-size: 16px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group-child[_ngcontent-%COMP%]    > .col-12[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--biru-muda) !important;\r\n  color: #f6f4f7 !important;\r\n  transition: all 0.25s;\r\n  border-radius: 5px;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  animation: fadeIn 400ms ease-in-out both;\r\n}\r\n\r\nul.list-group-child.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-selected[_ngcontent-%COMP%] {\r\n  background-color: #f6f4f7 !important;\r\n  transition: all 0.7s !important;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.cardTitleSetupMenu[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n.cardBodySetupMenu[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 260px);\r\n  max-height: calc(100vh - 260px);\r\n  overflow-y: auto;\r\n}"] });
    return DataRoleComponent;
})();


/***/ }),

/***/ 53557:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role-menu/input-role/input-role.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputRoleComponent": () => (/* binding */ InputRoleComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 60509);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 44019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/setup-role/setup-role.service */ 15804);
/* harmony import */ var _services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/setup-role-menu/setup-role-menu.service */ 70500);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 61116);





function InputRoleComponent_li_8_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "row", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function InputRoleComponent_li_8_Template_input_change_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const item_r2 = restoredCtx.$implicit; const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.onCheckSelectedMenuNonAktif(item_r2, i_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r2 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", item_r2.id_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", item_r2.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.caption_menu_parent, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.caption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", item_r2.id_menu, "Checkbox");
    }
}
function InputRoleComponent_li_24_li_13_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function InputRoleComponent_li_24_li_13_Template_input_change_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const childItem_r9 = restoredCtx.$implicit; const j_r10 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r11.onCheckSelectedMenuAktif(childItem_r9, j_r10); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const childItem_r9 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", childItem_r9.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", childItem_r9.caption, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", childItem_r9.id_menu, "Checkbox");
    }
}
function InputRoleComponent_li_24_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputRoleComponent_li_24_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const item_r6 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return (item_r6.childMenu == null ? null : item_r6.childMenu.length) >= 1 ? ctx_r13.onTogglingHideChildMenu(item_r6.id_menu) : null; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function InputRoleComponent_li_24_Template_input_change_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const item_r6 = restoredCtx.$implicit; const i_r7 = restoredCtx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.onCheckSelectedMenuAktif(item_r6, i_r7); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ul", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, InputRoleComponent_li_24_li_13_Template, 8, 3, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const item_r6 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", item_r6.id_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("title", item_r6.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", item_r6.id_menu, "Icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", (item_r6.childMenu == null ? null : item_r6.childMenu.length) < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r6.caption);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", item_r6.id_menu, "Checkbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "", item_r6.id_menu, "ChildMenu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r6.childMenu);
    }
}
let InputRoleComponent = /*@__PURE__*/ (() => {
    class InputRoleComponent {
        constructor(setupRoleService, setupRoleMenuService) {
            this.setupRoleService = setupRoleService;
            this.setupRoleMenuService = setupRoleMenuService;
            this.SelectedMainMenuAktif = [];
            this.SelectedMainMenuNonAktif = [];
        }
        ngOnInit() { }
        ngAfterViewInit() {
            if (Object.keys(this.RolesData).length != 0) {
                this.onGetMainMenuAktif(this.RolesData);
                this.onGetMainMenuNonAktif(this.RolesData);
            }
            else {
                this.setupRoleService.onGetCurrentDataRole()
                    .subscribe((result) => {
                    this.RolesData = result;
                    this.onGetMainMenuAktif(this.RolesData);
                    this.onGetMainMenuNonAktif(this.RolesData);
                });
            }
        }
        onGetMainMenuAktif(RoleData) {
            this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
                .subscribe((result) => {
                this.MainMenuAktif = result.data;
            });
        }
        onGetMainMenuNonAktif(RoleData) {
            this.setupRoleMenuService.onGetAllMainMenuNotInRoleByRoleId(RoleData.id_role)
                .subscribe((result) => {
                this.MainMenuNonAktif = result.data;
            });
        }
        onTogglingHideChildMenu(id) {
            this.onTogglingIconArrow(id);
            // ** Get element berdasarkan ChildMenu yg dipilih
            let elem = document.getElementById(id + "ChildMenu");
            // ** Buat variable kondisi
            let conditionHidden = elem.classList.contains("is-hidden");
            let conditionShow = elem.classList.contains("is-show");
            // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
            if (conditionHidden) {
                if (conditionShow) {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-selected");
                }
                else {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-show");
                    elem.classList.add("is-selected");
                }
                ;
            }
            ;
            // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
            if (!conditionHidden) {
                if (conditionShow) {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-show");
                    elem.classList.remove("is-selected");
                }
                else {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-selected");
                }
            }
            ;
        }
        onTogglingIconArrow(id) {
            // ** Get element berdasarkan Icon yg dipilih
            let elem = document.getElementById(id + "Icon");
            // ** Buat variable kondisi
            let conditionRight = elem.classList.contains("fa-angle-right");
            let conditionDown = elem.classList.contains("fa-angle-down");
            // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
            if (conditionRight && !conditionDown) {
                elem.classList.remove("fa-angle-right");
                elem.classList.add("fa-angle-down");
            }
            ;
            if (!conditionRight && conditionDown) {
                elem.classList.remove("fa-angle-down");
                elem.classList.add("fa-angle-right");
            }
            ;
        }
        onTogglingHideSidebarChildMenu(id) {
            this.onTogglingSidebarIconArrow(id);
            // ** Get element berdasarkan ChildMenu yg dipilih
            let elem = document.getElementById(id + "SidebarChild");
            // ** Buat variable kondisi
            let conditionHidden = elem.classList.contains("is-hidden");
            let conditionShow = elem.classList.contains("is-show");
            // ** Kondisi apabila element ChildMenu memiliki class is-hidden atau is-show
            if (conditionHidden) {
                if (conditionShow) {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-selected");
                }
                else {
                    elem.classList.remove("is-hidden");
                    elem.classList.add("is-show");
                    elem.classList.add("is-selected");
                }
                ;
            }
            ;
            // ** Kondisi apabila element ChildMenu tidak memiliki class is-hidden atau is-show
            if (!conditionHidden) {
                if (conditionShow) {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-show");
                    elem.classList.remove("is-selected");
                }
                else {
                    elem.classList.add("is-hidden");
                    elem.classList.remove("is-selected");
                }
            }
            ;
        }
        onTogglingSidebarIconArrow(id) {
            // ** Get element berdasarkan Icon yg dipilih
            let elem = document.getElementById(id + "SidebarIcon");
            // ** Buat variable kondisi
            let conditionRight = elem.classList.contains("fa-angle-right");
            let conditionDown = elem.classList.contains("fa-angle-down");
            // ** Kondisi apabila element Icon tidak memiliki class angle-right atau angle-down
            if (conditionRight && !conditionDown) {
                elem.classList.remove("fa-angle-right");
                elem.classList.add("fa-angle-down");
            }
            ;
            if (!conditionRight && conditionDown) {
                elem.classList.remove("fa-angle-down");
                elem.classList.add("fa-angle-right");
            }
            ;
        }
        onCheckSelectedMenuNonAktif(MainMenu, Index) {
            // ** Get MainMenuId Checkbox Element
            let elem = document.getElementById(MainMenu.id_menu + "Checkbox");
            // ** Kondisi Ketika di check / di uncheck
            if (elem.checked) {
                this.SelectedMainMenuNonAktif.push(MainMenu);
            }
            else {
                const index = this.SelectedMainMenuNonAktif.map(e => e.id_menu).indexOf(MainMenu.id_menu);
                this.SelectedMainMenuNonAktif.splice(index, 1);
            }
        }
        onClickAddToMenuAktif() {
            // ** Lakukan Perulangan untuk mengetahui apabila 
            // ** variable this.SelectedMainMenuNonAktif memiliki length >= 1
            this.SelectedMainMenuNonAktif.forEach((item) => {
                // ** Kemudian run function dari Service Setup Role Menu
                this.setupRoleMenuService.onInsertMainMenuToRole(this.RolesData.id_role, item.id_menu).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
                    const i = this.SelectedMainMenuNonAktif.map(e => e.id_menu).indexOf(item.id_menu);
                    this.SelectedMainMenuNonAktif.splice(i, 1);
                })).subscribe((result) => {
                    this.onGetMainMenuAktif(this.RolesData);
                    this.onGetMainMenuNonAktif(this.RolesData);
                });
            });
        }
        onCheckSelectedMenuAktif(MainMenu, Index) {
            // ** Get MainMenuId Checkbox Element
            let elem = document.getElementById(MainMenu.id_menu + "Checkbox");
            // ** Kondisi Ketika di check / di uncheck
            if (elem.checked) {
                this.SelectedMainMenuAktif.push(MainMenu);
            }
            else {
                const index = this.SelectedMainMenuAktif.map(e => e.id_menu).indexOf(MainMenu.id_menu);
                this.SelectedMainMenuAktif.splice(index, 1);
            }
        }
        onClickRemoveFromMenuAktif() {
            // ** Lakukan Perulangan untuk mengetahui apabila 
            // ** variable this.SelectedMainMenuAktif memiliki length >= 1
            this.SelectedMainMenuAktif.forEach((item) => {
                // ** Kemudian run function dari Service Setup Role Menu
                this.setupRoleMenuService.onRemoveMainMenuFromRole(this.RolesData.id_role, item.id_menu).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
                    const i = this.SelectedMainMenuAktif.map(e => e.id_menu).indexOf(item.id_menu);
                    this.SelectedMainMenuAktif.splice(i, 1);
                })).subscribe((result) => {
                    this.onGetMainMenuAktif(this.RolesData);
                    this.onGetMainMenuNonAktif(this.RolesData);
                });
            });
        }
    }
    InputRoleComponent.ɵfac = function InputRoleComponent_Factory(t) { return new (t || InputRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_0__.SetupRoleService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_1__.SetupRoleMenuService)); };
    InputRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InputRoleComponent, selectors: [["app-input-role"]], inputs: { RolesData: "RolesData" }, decls: 25, vars: 2, consts: [[1, "row", "justify-content-center"], [1, "col-lg-5", "col-md-5", "col-sm-5", "col-xs-5", "px-1"], [1, "card"], [1, "card-header", "py-2"], [1, "mb-0", "cardTitleSetupMenu"], [1, "card-body", "p-1", "cardBodySetupMenu"], [1, "list-group"], ["class", "list-group-item cursor-pointer p-0 mb-1 list-sidebar-item", 3, "id", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-2", "col-sm-2", "col-xs-2", "px-1", "text-center"], [1, "row", "align-self-center", "align-items-center", 2, "padding-top", "10rem"], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12", "mb-5"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 2, "width", "3rem", 3, "click"], [1, "fas", "fa-angle-right"], [1, "col-lg-12", "col-md-12", "col-xs-12", "col-sm-12", "mb-3"], [1, "fas", "fa-angle-left"], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1", "list-sidebar-item", 3, "id"], ["data-bs-toggle", "tooltip", 1, "items-group", "mx-0", "px-2", "align-items-center", 3, "title"], [1, "col-11", "px-1", "me-1"], [1, "align-items-center"], [1, "col-12"], [1, "font-cabin", "mb-2", "text-biru-tua"], [1, "row", "align-items-center"], [1, "font-cabin", "mb-2", "text-hitam-muda"], [1, "col-1"], ["type", "checkbox", "value", "true", 1, "form-check-input", "form-select-lg", 3, "id", "change"], ["data-bs-toggle", "tooltip", 1, "items-group", "mx-0", "px-2", 3, "title"], [1, "col-11", "me-2", 3, "click"], [1, "col-1", "px-0", "text-end"], [1, "fas", "fa-angle-right", 3, "hidden", "id"], [1, "col-11"], [1, "font-cabin", "mb-2"], [1, "form-check"], [1, "list-group", "list-group-child", "is-hidden", 3, "id"], ["class", "list-group-item cursor-pointer p-0 mb-1", 4, "ngFor", "ngForOf"], [1, "list-group-item", "cursor-pointer", "p-0", "mb-1"], ["data-bs-toggle", "tooltip", 1, "items-group-child", "mx-0", "px-2", 3, "title"], [1, "col-11", "ps-4", "me-2"], [1, "font-cabin", "mb-2", 2, "font-size", "16px"]], template: function InputRoleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Daftar Main Menu Tidak Aktif");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, InputRoleComponent_li_8_Template, 13, 5, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputRoleComponent_Template_button_click_12_listener() { return ctx.onClickAddToMenuAktif(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InputRoleComponent_Template_button_click_15_listener() { return ctx.onClickRemoveFromMenuAktif(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "p", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Daftar Main Menu Aktif");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, InputRoleComponent_li_24_Template, 14, 8, "li", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.MainMenuNonAktif);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.MainMenuAktif);
            }
        }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: ["li.list-group-item[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: var(--hitam);\r\n  transition: all 0.1s;\r\n}\r\n\r\ndiv.items-group[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n  border: 1px solid var(--abu-muda);\r\n  border-radius: 5px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%]:hover, li.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%]:hover, .is-active[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n  border-radius: 5px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-10[_ngcontent-%COMP%]::after, li.list-group-item[_ngcontent-%COMP%]    > div.items-group[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%]::after {\r\n  background-color: var(--biru-muda) !important;\r\n  color: white !important;\r\n  transition: all 0.25s;\r\n}\r\n\r\nul.list-group-child[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  background-color: transparent;\r\n  color: white;\r\n  transition: all 0.25s;\r\n}\r\n\r\ndiv.items-group-child[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 5px;\r\n  transition: all 0.25s;\r\n  font-size: 16px;\r\n}\r\n\r\nli.list-group-item[_ngcontent-%COMP%]    > div.items-group-child[_ngcontent-%COMP%]    > .col-11[_ngcontent-%COMP%]:hover {\r\n  background-color: var(--biru-muda) !important;\r\n  color: #f6f4f7 !important;\r\n  transition: all 0.25s;\r\n  border-radius: 5px;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-show[_ngcontent-%COMP%] {\r\n  display: block;\r\n  animation: fadeIn 400ms ease-in-out both;\r\n}\r\n\r\nul.list-group-child.is-hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  animation: fadeOut 400ms ease-in-out both;\r\n}\r\n\r\n.is-selected[_ngcontent-%COMP%] {\r\n  background-color: #f6f4f7 !important;\r\n  transition: all 0.7s !important;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.cardTitleSetupMenu[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n}\r\n\r\n.cardBodySetupMenu[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 260px);\r\n  max-height: calc(100vh - 260px);\r\n  overflow-y: auto;\r\n}"] });
    return InputRoleComponent;
})();


/***/ }),

/***/ 5582:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role-menu/setup-role-menu.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoleMenuComponent": () => (/* binding */ SetupRoleMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/setup-role/setup-role.service */ 15804);
/* harmony import */ var _services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/setup-role-menu/setup-role-menu.service */ 70500);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 66908);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/organism/tabs/org-tabs-component/org-tabs-component.component */ 70651);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component */ 38511);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component */ 11753);
/* harmony import */ var _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component */ 38952);
/* harmony import */ var _data_role_data_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-role/data-role.component */ 75896);
/* harmony import */ var _input_role_input_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./input-role/input-role.component */ 53557);










const _c0 = ["OrgTabsRef"];
let SetupRoleMenuComponent = /*@__PURE__*/ (() => {
    class SetupRoleMenuComponent {
        constructor(setupRoleService, setupRoleMenuService) {
            this.setupRoleService = setupRoleService;
            this.setupRoleMenuService = setupRoleMenuService;
            this.TabId = 'DataRoleActive';
        }
        ngOnInit() {
            this.UserData = JSON.parse(localStorage.getItem('UserData'));
            this.onGetCurrentDataRole();
        }
        onGetCurrentDataRole() {
            this.setupRoleService.onGetCurrentDataRole()
                .subscribe((result) => {
                this.RolesData = result;
                this.onGetMainMenuAktif(this.RolesData);
            });
        }
        onGetMainMenuAktif(RoleData) {
            this.setupRoleMenuService.onGetAllMainMenuByRoleId(RoleData.id_role)
                .subscribe((result) => {
                this.MainMenu = result.data;
            });
        }
        onGetSelectedTabId(TabId) {
            this.TabId = TabId;
            if (this.TabId == "DataRoleActive") {
                this.onGetCurrentDataRole();
            }
        }
    }
    SetupRoleMenuComponent.ɵfac = function SetupRoleMenuComponent_Factory(t) { return new (t || SetupRoleMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_0__.SetupRoleService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_setup_role_menu_setup_role_menu_service__WEBPACK_IMPORTED_MODULE_1__.SetupRoleMenuService)); };
    SetupRoleMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SetupRoleMenuComponent, selectors: [["app-setup-role-menu"]], viewQuery: function SetupRoleMenuComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 7);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.OrgTabsRef = _t.first);
            }
        }, decls: 13, vars: 5, consts: [[3, "onGetSelectedTabId"], ["OrgTabsRef", ""], [3, "Id"], [3, "RolesData", "MainMenu"], [3, "RolesData"]], template: function SetupRoleMenuComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "org-card-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "org-tabs", 0, 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onGetSelectedTabId", function SetupRoleMenuComponent_Template_org_tabs_onGetSelectedTabId_1_listener($event) { return ctx.onGetSelectedTabId($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "org-tabs-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "org-tabs-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "Data Role Menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "org-tabs-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-data-role", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "org-tabs-item");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "org-tabs-label", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Input Role Menu");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "org-tabs-body");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "app-input-role", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("Id", "DataRoleActive");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("RolesData", ctx.RolesData)("MainMenu", ctx.MainMenu);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("Id", "InputRoleMenu");
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("RolesData", ctx.RolesData);
            }
        }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__.OrgCardLayoutComponent, _shared_components_organism_tabs_org_tabs_component_org_tabs_component_component__WEBPACK_IMPORTED_MODULE_3__.OrgTabsComponentComponent, _shared_components_organism_tabs_org_tabs_item_component_org_tabs_item_component_component__WEBPACK_IMPORTED_MODULE_4__.OrgTabsItemComponentComponent, _shared_components_organism_tabs_org_tabs_label_component_org_tabs_label_component_component__WEBPACK_IMPORTED_MODULE_5__.OrgTabsLabelComponentComponent, _shared_components_organism_tabs_org_tabs_body_component_org_tabs_body_component_component__WEBPACK_IMPORTED_MODULE_6__.OrgTabsBodyComponentComponent, _data_role_data_role_component__WEBPACK_IMPORTED_MODULE_7__.DataRoleComponent, _input_role_input_role_component__WEBPACK_IMPORTED_MODULE_8__.InputRoleComponent], styles: [""] });
    return SetupRoleMenuComponent;
})();


/***/ }),

/***/ 83506:
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role/setup-role.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoleComponent": () => (/* binding */ SetupRoleComponent)
/* harmony export */ });
/* harmony import */ var _json_GridSetupRole_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./json/GridSetupRole.json */ 32944);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/setup-role/setup-role.service */ 15804);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 66908);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 10804);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/molecules/grid/grid/grid.component */ 39456);







const _c0 = ["gridSetupRole"];
let SetupRoleComponent = /*@__PURE__*/ (() => {
    class SetupRoleComponent {
        constructor(router, setupRoleService) {
            this.router = router;
            this.setupRoleService = setupRoleService;
            this.GridSetupRoleEditSettings = { allowAdding: true };
            this.GridSetupRoleContextMenuItems = [
                {
                    id: 'edit',
                    text: 'Edit',
                    iconCss: 'fas fa-plus-circle'
                }, {
                    id: 'delete',
                    text: 'Delete',
                    iconCss: 'fas fa-trash-alt'
                }, {
                    id: 'setting-role',
                    text: 'Roles Setting',
                    iconCss: 'fas fa-user-cog'
                }
            ];
            this.GridSetupRoleColums = _json_GridSetupRole_json__WEBPACK_IMPORTED_MODULE_0__;
        }
        ngOnInit() {
            this.GridSetupRoleToolbar = ["Search"];
            this.onGetAllRole();
        }
        onGetAllRole() {
            this.setupRoleService.onGetAllRole()
                .subscribe((result) => {
                this.GridSetupRoleDataSource = result.data;
            });
        }
        onSelectGridContextMenu(args) {
            if (args.item.id === "setting-role") {
                this.router.navigateByUrl('dashboard/setup-role-menu');
            }
        }
        onSelectedRow(args) {
            this.SelectedDataRole = args.data;
            this.setupRoleService.onSetCurrentDataRole(this.SelectedDataRole);
            localStorage.setItem('DataRole', JSON.stringify(this.SelectedDataRole));
        }
    }
    SetupRoleComponent.ɵfac = function SetupRoleComponent_Factory(t) { return new (t || SetupRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_1__.SetupRoleService)); };
    SetupRoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SetupRoleComponent, selectors: [["app-setup-role"]], viewQuery: function SetupRoleComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.gridSetupRole = _t.first);
            }
        }, decls: 6, vars: 9, consts: [[1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1"], ["target", "#GridSetupRole", 3, "items", "select"], [3, "grid-id", "grid-height", "grid-lines", "grid-editSettings", "grid-toolbar", "columns", "grid-DataSource", "grid-ContextMenuItems", "row-selected"], ["gridSetupRole", ""]], template: function SetupRoleComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "org-card-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ejs-contextmenu", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("select", function SetupRoleComponent_Template_ejs_contextmenu_select_3_listener($event) { return ctx.onSelectGridContextMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mol-grid", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("row-selected", function SetupRoleComponent_Template_mol_grid_row_selected_4_listener($event) { return ctx.onSelectedRow($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.GridSetupRoleContextMenuItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("grid-id", "GridSetupRole")("grid-height", 400)("grid-lines", "Both")("grid-editSettings", ctx.GridSetupRoleEditSettings)("grid-toolbar", ctx.GridSetupRoleToolbar)("columns", ctx.GridSetupRoleColums.GridHeader.columns)("grid-DataSource", ctx.GridSetupRoleDataSource)("grid-ContextMenuItems", ctx.GridSetupRoleContextMenuItems);
            }
        }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_2__.OrgCardLayoutComponent, _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__.ContextMenuComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_3__.MolGridComponent], styles: [""] });
    return SetupRoleComponent;
})();


/***/ }),

/***/ 68106:
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-user/setup-user.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupUserComponent": () => (/* binding */ SetupUserComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 22501);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _json_GridSetupUser_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./json/GridSetupUser.json */ 57311);
/* harmony import */ var _api_PIS_SETUP_DATA_SETUP_DOKTER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/PIS/SETUP_DATA/SETUP_DOKTER */ 71534);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ 75470);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 35228);
/* harmony import */ var _services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/setup-role/setup-role.service */ 15804);
/* harmony import */ var _services_setup_user_setup_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/setup-user/setup-user.service */ 51860);
/* harmony import */ var src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/auth/services/authentication.service */ 7942);
/* harmony import */ var _shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/organism/card/card-layout/card-layout.component */ 66908);
/* harmony import */ var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @syncfusion/ej2-angular-navigations */ 10804);
/* harmony import */ var _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/components/molecules/grid/grid/grid.component */ 39456);
/* harmony import */ var _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/molecules/form/mol-input-text/mol-input-text.component */ 31998);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-label/atm-label.component */ 73391);
/* harmony import */ var _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @syncfusion/ej2-angular-dropdowns */ 34594);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component */ 9714);


















const _c0 = ["gridSetupUser"];
const _c1 = ["LookupDokter"];
function SetupUserComponent_org_input_look_up_kode_42_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-input-look-up-kode", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("onGetSelectedData", function SetupUserComponent_org_input_look_up_kode_42_Template_org_input_look_up_kode_onGetSelectedData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r3.handleSelectedDokter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("modal-title", "Data Dokter")("lookup-url", ctx_r1.UrlLookupDokter)("idKode", "kode_dokter")("idTitle", "full_name")("columns", ctx_r1.GridAntrianColums.LookupDokter.columns)("filter-lookup", ctx_r1.GridAntrianColums.LookupDokter.filter)("label", "Pilih Dokter");
    }
}
let SetupUserComponent = /*@__PURE__*/ (() => {
    class SetupUserComponent {
        constructor(formBuilder, modalService, utilityService, setupRoleService, setupUserService, authenticationService) {
            this.formBuilder = formBuilder;
            this.modalService = modalService;
            this.utilityService = utilityService;
            this.setupRoleService = setupRoleService;
            this.setupUserService = setupUserService;
            this.authenticationService = authenticationService;
            this.API = _api_PIS_SETUP_DATA_SETUP_DOKTER__WEBPACK_IMPORTED_MODULE_2__;
            this.GridSetupUserEditSettings = { allowAdding: true };
            this.GridAntrianColums = _json_GridSetupUser_json__WEBPACK_IMPORTED_MODULE_1__;
            this.GridAntrianIrjaPaging = { pageSizes: true, pageSize: 12 };
            this.GridSetupUserContextMenuItems = [
                {
                    id: 'reset',
                    text: 'Reset Password',
                    iconCss: 'fas fa-redo-alt'
                }
            ];
            this.GridSetupUserGroupingSettings = { showDropArea: false, columns: ['nama_role'] };
            this.UrlLookupDokter = this.API.POST_GET_ALL_DOKTER_FOR_LOOKUP;
            this.DropdownRoleFields = { text: 'nama_role', value: 'id_role' };
            this.DropdownRoleIsDokter = false;
            // ** Input Field State
            this.inputFieldState = 'normal';
            // ** Radio Button Status Active Properties
            this.RadioButtonStatus = [
                { id: 'active', value: true, label: 'Active', checked: false, inputFieldState: 'normal' },
                { id: 'nonActive', value: false, label: 'Non Active', checked: false, inputFieldState: 'normal' },
            ];
        }
        ngOnInit() {
            this.GridSetupUserToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash fa-sm', id: 'delete' },
                'Search'
            ];
            this.FormSetupUser = this.formBuilder.group({
                id_role: [0, []],
                user_name: ['', []],
                password: ['', []],
                full_name: ['', []],
                id_karyawan: [0, []]
            });
            this.onGetAllActiveUser();
            this.onGetRoleActive();
        }
        onGetAllActiveUser() {
            this.setupUserService.onGetAllActiveUser()
                .subscribe((result) => {
                this.GridSetupUserDataSource = result.data;
            });
        }
        onToolbarClick(args) {
            const action = args.item.id;
            if (action === 'add') {
                let btnModalAddUser = document.getElementById('btnModalAddUser');
                btnModalAddUser.click();
            }
        }
        onSelectGridContextMenu(args) {
            if (args.item.id == "reset") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    icon: 'question',
                    title: 'Apakah Anda Yakin',
                    text: `Mengubah Password User ${this.SelectedUserData.full_name} ?`,
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: `Yes`,
                    denyButtonText: `Tidak, Kembali`,
                    focusDeny: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.authenticationService.onResetPassword(this.SelectedUserData.id_user)
                            .subscribe((result) => {
                            let message = `Password Baru User ${this.SelectedUserData.full_name} : ${result.data}`;
                            this.utilityService.onShowingCustomAlert('success', 'Success', message);
                        });
                    }
                    else if (result.isDenied) {
                        // ** Do Nothing
                    }
                });
            }
        }
        onRowSelected(args) {
            const Data = args.data;
            this.SelectedUserData = Data;
        }
        onTogglingSeePassword(ElementId) {
            const elem = document.getElementById(ElementId);
            const elemIcon = document.getElementById(ElementId + 'Icon');
            if (elem.type === 'password') {
                elem.type = 'text';
                elemIcon.classList.remove('fa-eye');
                elemIcon.classList.add('fa-eye-slash');
            }
            else {
                elem.type = 'password';
                elemIcon.classList.remove('fa-eye-slash');
                elemIcon.classList.add('fa-eye');
            }
        }
        onGetRoleActive() {
            this.setupRoleService.onGetAllRoleActive()
                .subscribe((result) => {
                this.DropdownRoleDatasource = result.data;
            });
        }
        handleChangeDropdownRole(args) {
            let itemData = args.itemData;
            this.DropdownRoleIsDokter = itemData.id_role === 2 || itemData.nama_role === 'dokter' ? true : false;
        }
        handleSelectedDokter(args) {
            this.id_karyawan.setValue(args.id_dokter);
        }
        onSubmitFormSetupUser(FormSetupUser) {
            // ** Eksekusi Function di Setup User Service
            this.setupUserService.onInsertUser(FormSetupUser)
                .subscribe((result) => {
                if (result.responseResult) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Disimpan')
                        .then(() => {
                        this.onClearFormSetupUser();
                        let btnCloseModal = document.getElementById('btnCloseModal');
                        btnCloseModal.click();
                        this.onGetAllActiveUser();
                    });
                }
                ;
            }, (error) => {
                console.log(error);
            });
        }
        onClearFormSetupUser() {
            this.id_role.setValue(0);
            this.user_name.setValue('');
            this.password.setValue('');
            this.full_name.setValue('');
            document.getElementById('confirmation_password').value = '';
            this.id_karyawan.setValue(0);
        }
        get id_role() { return this.FormSetupUser.get('id_role'); }
        get user_name() { return this.FormSetupUser.get('user_name'); }
        get password() { return this.FormSetupUser.get('password'); }
        get full_name() { return this.FormSetupUser.get('full_name'); }
        get id_karyawan() { return this.FormSetupUser.get('id_karyawan'); }
    }
    SetupUserComponent.ɵfac = function SetupUserComponent_Factory(t) { return new (t || SetupUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_4__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_setup_role_setup_role_service__WEBPACK_IMPORTED_MODULE_5__.SetupRoleService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_setup_user_setup_user_service__WEBPACK_IMPORTED_MODULE_6__.SetupUserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_modules_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__.AuthenticationService)); };
    SetupUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: SetupUserComponent, selectors: [["app-setup-user"]], viewQuery: function SetupUserComponent_Query(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c1, 5);
            }
            if (rf & 2) {
                let _t;
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.gridSetupUser = _t.first);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.LookupDokter = _t.first);
            }
        }, decls: 48, vars: 28, consts: [[1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "px-1"], ["target", "#GridSetupUser", 3, "items", "select"], [3, "grid-id", "grid-height", "grid-lines", "grid-editSettings", "grid-toolbar", "columns", "grid-DataSource", "grid-ContextMenuItems", "grid-grouping", "grid-group-settings", "toolbar-click", "row-selected"], ["gridSetupUser", ""], ["id", "btnModalAddUser", "type", "button", "data-bs-toggle", "modal", "data-bs-target", "#modalAddUser", 1, "btn", "btn-primary", 3, "hidden"], ["id", "modalAddUser", "data-bs-backdrop", "static", "data-bs-keyboard", "false", "aria-labelledby", " modalAddUserLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content", "border-0"], [1, "modal-header", "py-2", "px-3", "background-biru-muda", "text-white"], ["id", "modalAddUserLabel", 1, "modal-title"], ["id", "btnCloseAddUser", "type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], [3, "formGroup"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], ["formControlName", "user_name", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], ["formControlName", "full_name", 3, "label", "IsFormControlInvalid", "ValidatorsCaption", "inputFieldState"], [1, "row", "mb-2"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [3, "LabelCaption"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8"], [1, "input-group", "mb-0"], ["type", "password", "id", "password", "aria-label", "password", "aria-describedby", "see-password", "formControlName", "password", 1, "form-control", "form-select-sm"], ["id", "see-password", 1, "input-group-text", "cursor-pointer", 3, "click"], ["id", "passwordIcon", 1, "fas", "fa-eye", "fa-sm"], ["type", "password", "id", "confirmation_password", "aria-label", "confirmation_password", "aria-describedby", "see-password", 1, "form-control", "form-select-sm"], ["id", "confirmation_passwordIcon", 1, "fas", "fa-eye", "fa-sm"], ["formControlName", "id_role", 3, "dataSource", "fields", "allowFiltering", "change"], [3, "modal-title", "lookup-url", "idKode", "idTitle", "columns", "filter-lookup", "label", "onGetSelectedData", 4, "ngIf"], [1, "modal-footer", "py-2", "px-3", "background-abu-muda", "text-white"], ["id", "btnCloseModal", "type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [3, "modal-title", "lookup-url", "idKode", "idTitle", "columns", "filter-lookup", "label", "onGetSelectedData"], ["LookupDokter", ""]], template: function SetupUserComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "org-card-layout");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ejs-contextmenu", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("select", function SetupUserComponent_Template_ejs_contextmenu_select_3_listener($event) { return ctx.onSelectGridContextMenu($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mol-grid", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("toolbar-click", function SetupUserComponent_Template_mol_grid_toolbar_click_4_listener($event) { return ctx.onToolbarClick($event); })("row-selected", function SetupUserComponent_Template_mol_grid_row_selected_4_listener($event) { return ctx.onRowSelected($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, " Launch Modal Input Data User ");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](11, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "h5", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Input Data User");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "button", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "form", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "mol-input-text", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "mol-input-text", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](23, "atm-label", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](24, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](26, "input", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "span", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SetupUserComponent_Template_span_click_27_listener() { return ctx.onTogglingSeePassword("password"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "i", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "atm-label", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "div", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "input", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](35, "span", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SetupUserComponent_Template_span_click_35_listener() { return ctx.onTogglingSeePassword("confirmation_password"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "i", 26);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "div", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](38, "div", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "atm-label", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "ejs-dropdownlist", 27);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function SetupUserComponent_Template_ejs_dropdownlist_change_41_listener($event) { return ctx.handleChangeDropdownRole($event); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, SetupUserComponent_org_input_look_up_kode_42_Template, 2, 7, "org-input-look-up-kode", 28);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](43, "div", 29);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "button", 30);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](45, " Close ");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "button", 31);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function SetupUserComponent_Template_button_click_46_listener() { return ctx.onSubmitFormSetupUser(ctx.FormSetupUser.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](47, " Simpan ");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("items", ctx.GridSetupUserContextMenuItems);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("grid-id", "GridSetupUser")("grid-height", "calc(100vh - 15rem)")("grid-lines", "Both")("grid-editSettings", ctx.GridSetupUserEditSettings)("grid-toolbar", ctx.GridSetupUserToolbar)("columns", ctx.GridAntrianColums.GridHeader.columns)("grid-DataSource", ctx.GridSetupUserDataSource)("grid-ContextMenuItems", ctx.GridSetupUserContextMenuItems)("grid-grouping", true)("grid-group-settings", ctx.GridSetupUserGroupingSettings);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("hidden", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.FormSetupUser);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Username")("IsFormControlInvalid", ctx.user_name.invalid)("ValidatorsCaption", "Username Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("label", "Nama Lengkap")("IsFormControlInvalid", ctx.full_name.invalid)("ValidatorsCaption", "Nama Lengkap Tidak Boleh Kosong")("inputFieldState", ctx.inputFieldState);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("LabelCaption", "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("LabelCaption", "Konfirmasi Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("LabelCaption", "Role");
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx.DropdownRoleDatasource)("fields", ctx.DropdownRoleFields)("allowFiltering", true);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.DropdownRoleIsDokter);
            }
        }, directives: [_shared_components_organism_card_card_layout_card_layout_component__WEBPACK_IMPORTED_MODULE_8__.OrgCardLayoutComponent, _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_15__.ContextMenuComponent, _shared_components_molecules_grid_grid_grid_component__WEBPACK_IMPORTED_MODULE_9__.MolGridComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _shared_components_molecules_form_mol_input_text_mol_input_text_component__WEBPACK_IMPORTED_MODULE_10__.MolInputTextComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_11__.AtmLabelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _syncfusion_ej2_angular_dropdowns__WEBPACK_IMPORTED_MODULE_16__.DropDownListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _shared_components_organism_loockUp_org_input_look_up_kode_org_input_look_up_kode_component__WEBPACK_IMPORTED_MODULE_12__.OrgInputLookUpKodeComponent], styles: ["#GridSetupUsercaptioncell[_ngcontent-%COMP%] {\r\n  background-color: var(--biru-tua);\r\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;\r\n}"] });
    return SetupUserComponent;
})();


/***/ }),

/***/ 94907:
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/services/example/example-master.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExampleMasterService": () => (/* binding */ ExampleMasterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var _shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/http-operation.service */ 27369);


let ExampleMasterService = /*@__PURE__*/ (() => {
    class ExampleMasterService {
        constructor(httpOperationService) {
            this.httpOperationService = httpOperationService;
        }
        postExampleWithAction(req, url, actionSukses, actionError) {
            // spinner show
            // this.httpOperationService.defaultPostRequest(API.PIS.API_PIS.POST_ADMISI_RAWAT_JALAN, req).subscribe(
            //     (_result) => {
            //         // spinner mesaggeexample.json
            //         if (_result) {
            //             actionSukses(_result);
            //         } else {
            //             actionError();
            //         }
            //     },
            //     (err) => {
            //         actionError();
            //     }
            // );
        }
        postExample(req) {
            // return this.httpOperationService.defaultPostRequest(API.IRJA.POST_ADMISI_RAWAT_JALAN, req);
        }
        getExample() {
            // return this.httpOperationService.defaultGetRequest(API.IRJA.GET_DATA_PASIEN_BY_NO_ANTRIAN);
        }
    }
    ExampleMasterService.ɵfac = function ExampleMasterService_Factory(t) { return new (t || ExampleMasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_0__.HttpOperationService)); };
    ExampleMasterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ExampleMasterService, factory: ExampleMasterService.ɵfac, providedIn: 'root' });
    return ExampleMasterService;
})();


/***/ }),

/***/ 70500:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/core/services/setup-role-menu/setup-role-menu.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoleMenuService": () => (/* binding */ SetupRoleMenuService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api/index */ 49290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SetupRoleMenuService = /*@__PURE__*/ (() => {
    class SetupRoleMenuService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API_CONFIG = _api_index__WEBPACK_IMPORTED_MODULE_0__.API.API_CORE.API_CORE;
        }
        // ** ============== Main Menu Services ===============
        onGetAllMainMenuByRoleId(RoleId) {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.SETUP_MAIN_MENU.GET_MAIN_MENU_FOR_MAPPING + RoleId);
        }
        onGetAllMainMenuNotInRoleByRoleId(RoleId) {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.SETUP_MAIN_MENU.GET_MAIN_MENU_NOT_IN_ROLE + RoleId);
        }
        onInsertMainMenuToRole(RoleId, MenuId) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.SETUP_MAIN_MENU.POST_MAIN_MENU_TO_ROLE, { "id_role": RoleId, "id_menu": MenuId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        onRemoveMainMenuFromRole(RoleId, MenuId) {
            return this.httpOperationService.defaultPutRequest(this.API_CONFIG.SETUP_MAIN_MENU.PUT_DELETE_MAIN_MENU_FROM_ROLE, { "id_role": RoleId, "id_menu": MenuId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        // ** ============== Sidebar Menu Services ==============
        onGetSidebarMenuByMenuIdAndRoleId(MenuId, RoleId) {
            return this.httpOperationService.defaultPostRequestWithoutLoading(this.API_CONFIG.SETUP_SIDEBAR_MENU.POST_SIDEBAR_MENU_FOR_MAPPING, { id_menu: MenuId, id_role: RoleId });
        }
        onInsertSidebarMenuToRole(RoleId, SidebarMenuId) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.SETUP_SIDEBAR_MENU.POST_SIDEBAR_MENU_TO_ROLE, { "id_role": RoleId, "id_menu_sidebar": SidebarMenuId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        onRemoveSidebarMenuFromRole(RoleId, SidebarMenuId) {
            return this.httpOperationService.defaultPutRequest(this.API_CONFIG.SETUP_SIDEBAR_MENU.PUT_DELETE_SIDEBAR_MENU_FROM_ROLE, { "id_role": RoleId, "id_menu_sidebar": SidebarMenuId }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        // ** ============== Field Grid Services ==============
        onGetFieldGridBySidebarMenuIdAndRoleId(SidebarMenuId, RoleId) {
            return this.httpOperationService.defaultPostRequestWithoutLoading(this.API_CONFIG.SETUP_FIELD_GRID.POST_FIELD_GRID_MENU_FOR_MAPPING, { id_menu_sidebar: SidebarMenuId, id_role: RoleId });
        }
        onInsertFieldGridToRole(RoleId, SidebarMenuId, FieldGridId) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.SETUP_FIELD_GRID.POST_FIELD_GRID_TO_ROLE, {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_field_grid": FieldGridId
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        onRemoveFieldGridFromRole(RoleId, SidebarMenuId, FieldGridId) {
            return this.httpOperationService.defaultPutRequest(this.API_CONFIG.SETUP_FIELD_GRID.PUT_DELETE_FIELD_GRID_FROM_ROLE, {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_field_grid": FieldGridId
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        // ** ============== Button Services ==============
        onGetButtonSidebarMenuIdAndRoleId(SidebarMenuId, RoleId) {
            return this.httpOperationService.defaultPostRequestWithoutLoading(this.API_CONFIG.SETUP_BUTTON.POST_BUTTON_MENU_FOR_MAPPING, { "id_menu_sidebar": SidebarMenuId, "id_role": RoleId });
        }
        onInsertButtonToRole(RoleId, SidebarMenuId, ButtonId) {
            return this.httpOperationService.defaultPostRequest(this.API_CONFIG.SETUP_BUTTON.POST_BUTTON_TO_ROLE, {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_button": ButtonId
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        onRemoveButtonFromRole(RoleId, SidebarMenuId, ButtonId) {
            return this.httpOperationService.defaultPutRequest(this.API_CONFIG.SETUP_BUTTON.PUT_DELETE_BUTTON_FROM_ROLE, {
                "id_role": RoleId,
                "id_menu_sidebar": SidebarMenuId,
                "id_button": ButtonId
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
    }
    SetupRoleMenuService.ɵfac = function SetupRoleMenuService_Factory(t) { return new (t || SetupRoleMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SetupRoleMenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupRoleMenuService, factory: SetupRoleMenuService.ɵfac, providedIn: 'root' });
    return SetupRoleMenuService;
})();


/***/ }),

/***/ 15804:
/*!************************************************************************!*\
  !*** ./src/app/modules/core/services/setup-role/setup-role.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupRoleService": () => (/* binding */ SetupRoleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 78512);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api */ 49290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);




let SetupRoleService = /*@__PURE__*/ (() => {
    class SetupRoleService {
        constructor(httpOperationService) {
            this.httpOperationService = httpOperationService;
            this.API_CONFIG = _api__WEBPACK_IMPORTED_MODULE_0__.API.API_CORE.API_CORE;
            this.CurrentDataRole = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        }
        onGetAllRole() {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.SETUP_ROLE.GET_ALL_ROLE);
        }
        onGetAllRoleActive() {
            return this.httpOperationService.defaultGetRequest(this.API_CONFIG.SETUP_ROLE.GET_ALL_ROLE_ACTIVE);
        }
        onSetCurrentDataRole(DataRole) {
            this.CurrentDataRole.next(DataRole);
        }
        onGetCurrentDataRole() {
            const DataRoleFromSessionStorage = JSON.parse(localStorage.getItem('DataRole'));
            if (DataRoleFromSessionStorage) {
                this.CurrentDataRole.next(DataRoleFromSessionStorage);
                return this.CurrentDataRole.asObservable();
            }
        }
    }
    SetupRoleService.ɵfac = function SetupRoleService_Factory(t) { return new (t || SetupRoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_1__.HttpOperationService)); };
    SetupRoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SetupRoleService, factory: SetupRoleService.ɵfac, providedIn: 'root' });
    return SetupRoleService;
})();


/***/ }),

/***/ 51860:
/*!************************************************************************!*\
  !*** ./src/app/modules/core/services/setup-user/setup-user.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetupUserService": () => (/* binding */ SetupUserService)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../api */ 49290);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 47727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/shared/services/notification.service */ 3393);
/* harmony import */ var src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/shared/services/http-operation.service */ 27369);





let SetupUserService = /*@__PURE__*/ (() => {
    class SetupUserService {
        constructor(notificationService, httpOperationService) {
            this.notificationService = notificationService;
            this.httpOperationService = httpOperationService;
            this.API = _api__WEBPACK_IMPORTED_MODULE_0__.API.API_CORE.API_CORE.SETUP_USER;
        }
        onGetAllActiveUser() {
            return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_USER_ACTIVE);
        }
        onInsertUser(DataUser) {
            return this.httpOperationService.defaultPostRequest(this.API.POST_INSERT_USER, DataUser)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }));
        }
        onGetAllUserKasir() {
            return this.httpOperationService.defaultGetRequest(this.API.GET_ALL_USER_KASIR);
        }
    }
    SetupUserService.ɵfac = function SetupUserService_Factory(t) { return new (t || SetupUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_notification_service__WEBPACK_IMPORTED_MODULE_1__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_modules_shared_services_http_operation_service__WEBPACK_IMPORTED_MODULE_2__.HttpOperationService)); };
    SetupUserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SetupUserService, factory: SetupUserService.ɵfac, providedIn: 'root' });
    return SetupUserService;
})();


/***/ }),

/***/ 60692:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/core/pages/exmple-master/json/GridDaftarBarang.json ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridDaftarBarang":{"columns":[{"allowEditing":true,"allowSorting":false,"editType":"defaultEdit","field":" no_batch","headerText":"NO. BATCH","visible":true,"width":100},{"allowEditing":true,"allowSorting":false,"editType":"defaultEdit","field":"exp_date","format":"dd MMMM yyyy","headerText":"EXP DATE","type":"DateTime","visible":true,"width":100},{"allowEditing":true,"allowSorting":false,"editType":"defaultEdit","field":"qty","headerText":"QTY","headerTextAlign":"Right","format":"N2","type":"numeric","visible":true,"width":100,"textAlign":"Right"}]}}');

/***/ }),

/***/ 38758:
/*!********************************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role-menu/json/GridSetupRoleMenu.json ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridRoleButton":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"numericEdit","field":" id_jenis_button","headerText":"ID","format":"N","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_button","headerText":"Nama Button","type":"string","visible":true,"width":100},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"caption","headerText":"Caption","visible":true,"width":100},{"allowEditing":true,"allowSorting":false,"allowFiltering":false,"editType":"booleanedit","field":"status_akses","headerText":"Status","type":"boolean","displayAsCheckBox":true,"visible":true,"width":50}]},"GridRoleFieldGrid":{"columns":[{"allowEditing":false,"allowSorting":false,"editType":"numericEdit","field":" id_field_grid","headerText":"ID","format":"N","visible":false,"width":50},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_asli_field","headerText":"Nama Field","type":"string","visible":true,"width":100},{"allowEditing":false,"allowSorting":false,"editType":"defaultEdit","field":"nama_header_text","headerText":"Header Text","visible":true,"width":100},{"allowEditing":true,"allowSorting":false,"editType":"booleanedit","field":"status_akses","headerText":"Status","type":"boolean","displayAsCheckBox":true,"visible":true,"width":50}]}}');

/***/ }),

/***/ 32944:
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-role/json/GridSetupRole.json ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridHeader":{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"numericEdit","field":"id_role","headerText":"ID","type":"string","visible":true,"width":50},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_role","headerText":"Nama Role","type":"string","visible":true,"width":100},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"keterangan","headerText":"Keterangan","visible":true,"width":100},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"time_created","headerText":"Created Date","visible":true,"type":"DateTime","format":"dd/MM/yyyy HH:mm:ss","width":100}]}}');

/***/ }),

/***/ 57311:
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/pages/setup-user/json/GridSetupUser.json ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"GridHeader":{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"numericEdit","field":"user_name","headerText":"Username","type":"string","visible":true,"width":150},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"nama_role","headerText":"Role User","type":"string","visible":true,"width":200},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"time_created","headerText":"Created Date","type":"DateTime","format":"dd/MM/yyyy HH:mm:ss","visible":true,"width":200},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"full_name","headerText":"Nama Lengkap","visible":true,"width":200},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"is_active","headerText":"Status Active","type":"string","visible":false,"width":50}]},"LookupDokter":{"columns":[{"allowEditing":true,"allowSorting":true,"editType":"numericEdit","field":"id_person","format":"N2","headerText":"PERSON ID","type":"number","visible":false,"width":150},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"kode_dokter","headerText":"KODE DOKTER","type":"string","visible":true,"width":90},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"full_name","headerText":"NAMA DOKTER","type":"string","visible":true,"width":200},{"allowEditing":true,"allowSorting":true,"editType":"defaultEdit","field":"spesialisasi_dokter","headerText":"SPESIALISASI","type":"string","visible":true,"width":110}],"filter":[{"field":"d.kode_dokter","filter":"like","title":"KODE DOKTER"},{"field":"concat(p.nama_depan, \' \',p.nama_belakang)","filter":"like","title":"NAMA DOKTER"}]}}');

/***/ })

}]);