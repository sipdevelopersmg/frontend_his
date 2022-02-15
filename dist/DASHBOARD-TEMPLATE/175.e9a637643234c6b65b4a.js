(self["webpackChunkdashboard_template"] = self["webpackChunkdashboard_template"] || []).push([[175],{

/***/ 87175:
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 61116);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 29996);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 94887);
/* harmony import */ var _pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/authentication/authentication.component */ 2595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 35366);







let AuthModule = /*@__PURE__*/ (() => {
    class AuthModule {
    }
    AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
    AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AuthModule });
    AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                    { path: '', component: _pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent, data: { title: 'Sign In Account' } }
                ]),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule
            ]] });
    return AuthModule;
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_pages_authentication_authentication_component__WEBPACK_IMPORTED_MODULE_1__.AuthenticationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] });
})();


/***/ }),

/***/ 2595:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/authentication/authentication.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationComponent": () => (/* binding */ AuthenticationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 31041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 35366);
/* harmony import */ var src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/shared/services/utility.service */ 35228);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/authentication.service */ 7942);
/* harmony import */ var _shared_components_atoms_typografi_atm_notification_atm_notification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/atoms/typografi/atm-notification/atm-notification.component */ 83252);
/* harmony import */ var _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-label/atm-label.component */ 73391);
/* harmony import */ var _shared_components_atoms_form_atm_validators_atm_validators_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/atoms/form/atm-validators/atm-validators.component */ 33410);
/* harmony import */ var _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/atoms/buttons/atm-button-primary/atm-button-primary.component */ 63067);









let AuthenticationComponent = /*@__PURE__*/ (() => {
    class AuthenticationComponent {
        constructor(formBuilder, utilityService, authenticationService) {
            this.formBuilder = formBuilder;
            this.utilityService = utilityService;
            this.authenticationService = authenticationService;
        }
        ngOnInit() {
            this.onSetFormAuthenticationAttribute();
        }
        onSetFormAuthenticationAttribute() {
            this.formAuthentication = this.formBuilder.group({
                Username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
                PrinterToken: ['', []]
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
        onClickButtonSignIn(formAuthentication) {
            const username = formAuthentication.Username;
            const password = formAuthentication.Password;
            const printerToken = formAuthentication.PrinterToken;
            if (username !== '' && password !== '') {
                this.authenticationService.onLogin(username, password, printerToken);
            }
            if (username === '' && password === '') {
                this.utilityService.onShowingCustomAlert('error', 'Oops', 'Sign In Failed');
            }
        }
        get Username() { return this.formAuthentication.get('Username'); }
        get Password() { return this.formAuthentication.get('Password'); }
        get PrinterToken() { return this.formAuthentication.get('PrinterToken'); }
    }
    AuthenticationComponent.ɵfac = function AuthenticationComponent_Factory(t) { return new (t || AuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_modules_shared_services_utility_service__WEBPACK_IMPORTED_MODULE_0__.UtilityService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService)); };
    AuthenticationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AuthenticationComponent, selectors: [["app-authentication"]], decls: 34, vars: 17, consts: [["id", "section-authentication"], ["aria-live", "polite", "aria-atomic", "true", 1, "atmNotifAuth"], [1, "row", "p-0", "m-0"], [1, "col-lg-8", "col-md-8", "col-sm-8", "col-xs-8", "bg-image-auth"], [1, "row", "div-text-image"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12", "mb-2"], ["src", "../../../../../assets/image/authentication/image-logo.png", "alt", "grahcis", 1, "image-logo"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-xs-12"], [1, "font-cabin", "mb-0", "text-abu-muda"], [1, "col-lg-4", "col-md-4", "col-sm-4", "col-xs-4"], [1, "row", "align-items-center", "h-100"], [1, "card", "border-0", "shadow-sm"], [1, "card-body"], [3, "formGroup"], [1, "mb-3", "pb-1", "text-center", "border-bottom"], [1, "font-cabin", "mb-0"], [1, "mb-3"], [3, "LabelCaption", "LabelFor"], ["type", "text", "id", "Username", "formControlName", "Username", "autocomplete", "off", "required", "", 1, "form-control"], [3, "IsFormControlTouched", "IsFormControlInvalid", "ValidatorsCaption"], [1, "input-group", "mb-0"], ["type", "password", "id", "Password", "aria-label", "Password", "aria-describedby", "see-password", "autocomplete", "off", "formControlName", "Password", 1, "form-control", 3, "keydown.enter"], ["id", "see-password", 1, "input-group-text", "cursor-pointer", 3, "click"], ["id", "PasswordIcon", 1, "fas", "fa-eye", "fa-sm"], ["type", "text", "id", "PrinterToken", "aria-label", "PrinterToken", "autocomplete", "off", "formControlName", "PrinterToken", 1, "form-control"], [3, "IsButtonBlock", "IsButtonDisabled", "ButtonPrimaryCaption", "ButtonPrimaryIcon", "onClickButtonPrimary"]], template: function AuthenticationComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "atm-notification", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h5", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Gracia Health Care Information System ");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "form", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h5", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "Sign In Account");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "atm-label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "input", 18);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "atm-validators", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "atm-label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "input", 21);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown.enter", function AuthenticationComponent_Template_input_keydown_enter_26_listener() { return ctx.formAuthentication.valid ? ctx.onClickButtonSignIn(ctx.formAuthentication.value) : ""; });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "span", 22);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AuthenticationComponent_Template_span_click_27_listener() { return ctx.onTogglingSeePassword("Password"); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "i", 23);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "atm-validators", 19);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "atm-label", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "input", 24);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "atm-button-primary", 25);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onClickButtonPrimary", function AuthenticationComponent_Template_atm_button_primary_onClickButtonPrimary_33_listener() { return ctx.onClickButtonSignIn(ctx.formAuthentication.value); });
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formAuthentication);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Username")("LabelFor", "Username");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsFormControlTouched", ctx.Username.touched)("IsFormControlInvalid", ctx.Username.invalid)("ValidatorsCaption", "Username Tidak Boleh Kosong");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Password")("LabelFor", "Password");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsFormControlTouched", ctx.Password.touched)("IsFormControlInvalid", ctx.Password.invalid)("ValidatorsCaption", "Password Tidak Boleh Kosong");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("LabelCaption", "Printer Token")("LabelFor", "Printer Token");
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("IsButtonBlock", true)("IsButtonDisabled", !ctx.formAuthentication.valid)("ButtonPrimaryCaption", " Sign In")("ButtonPrimaryIcon", "fa-sign-in-alt");
            }
        }, directives: [_shared_components_atoms_typografi_atm_notification_atm_notification_component__WEBPACK_IMPORTED_MODULE_2__.AtmNotificationComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _shared_components_atoms_form_atm_label_atm_label_component__WEBPACK_IMPORTED_MODULE_3__.AtmLabelComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _shared_components_atoms_form_atm_validators_atm_validators_component__WEBPACK_IMPORTED_MODULE_4__.AtmValidatorsComponent, _shared_components_atoms_buttons_atm_button_primary_atm_button_primary_component__WEBPACK_IMPORTED_MODULE_5__.AtmButtonPrimaryComponent], styles: ["section#section-authentication[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  max-height: 100vh;\r\n  width: 100vw;\r\n  max-width: 100vw;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%] {\r\n  height: 2.5rem;\r\n  max-height: 2.5rem;\r\n}\r\n\r\n.div-input-auth[_ngcontent-%COMP%] {\r\n  padding-top: 25vh;\r\n}\r\n\r\n.div-text-image[_ngcontent-%COMP%] {\r\n  padding: 25vh 0 0 0;\r\n  margin: 0;\r\n  text-align: center;\r\n}\r\n\r\n.bg-image-auth[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  max-height: 100vh;\r\n  background-image: url('/image-login.9cf91c7cc6b3b8f5775a.jpg');\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  box-shadow: inset 0 0 0 50vw hsla(0, 0%, 6%, 0.3);\r\n}\r\n\r\n.atmNotifAuth[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 1rem;\r\n  top: 1rem;\r\n  z-index: 2;\r\n}"] });
    return AuthenticationComponent;
})();


/***/ })

}]);