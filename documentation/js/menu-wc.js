'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">dashboard-template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-bfe6b9b55ee27785a0fc96c6df199ec4"' : 'data-target="#xs-components-links-module-AppModule-bfe6b9b55ee27785a0fc96c6df199ec4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bfe6b9b55ee27785a0fc96c6df199ec4"' :
                                            'id="xs-components-links-module-AppModule-bfe6b9b55ee27785a0fc96c6df199ec4"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-2016730ffbae60c3a522e2d3d20d50c0"' : 'data-target="#xs-components-links-module-AuthModule-2016730ffbae60c3a522e2d3d20d50c0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-2016730ffbae60c3a522e2d3d20d50c0"' :
                                            'id="xs-components-links-module-AuthModule-2016730ffbae60c3a522e2d3d20d50c0"' }>
                                            <li class="link">
                                                <a href="components/AuthenticationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthenticationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-f00496da76a58bc6b5361b584bdc6836"' : 'data-target="#xs-components-links-module-CoreModule-f00496da76a58bc6b5361b584bdc6836"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-f00496da76a58bc6b5361b584bdc6836"' :
                                            'id="xs-components-links-module-CoreModule-f00496da76a58bc6b5361b584bdc6836"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmNavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmSingleMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmSingleMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmTreeviewMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmTreeviewMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BerandaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BerandaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ExmpleMasterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExmpleMasterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolMainMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolMainMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolSidebarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolTopMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolTopMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreRoutingModule.html" data-type="entity-link">CoreRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PisModule.html" data-type="entity-link">PisModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PisModule-961d7bf6e9cdd7418c4fc49a26c0c806"' : 'data-target="#xs-components-links-module-PisModule-961d7bf6e9cdd7418c4fc49a26c0c806"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PisModule-961d7bf6e9cdd7418c4fc49a26c0c806"' :
                                            'id="xs-components-links-module-PisModule-961d7bf6e9cdd7418c4fc49a26c0c806"' }>
                                            <li class="link">
                                                <a href="components/InfoComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">InfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrangtuaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrangtuaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PendaftaranPasienBaruComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PendaftaranPasienBaruComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PribadiComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PribadiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PisRoutingModule.html" data-type="entity-link">PisRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-85216646b578550d24ceba86e854920b"' : 'data-target="#xs-components-links-module-SharedModule-85216646b578550d24ceba86e854920b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-85216646b578550d24ceba86e854920b"' :
                                            'id="xs-components-links-module-SharedModule-85216646b578550d24ceba86e854920b"' }>
                                            <li class="link">
                                                <a href="components/AtmButtonDangerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmButtonDangerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmButtonPrimaryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmButtonPrimaryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmHeaderRibbonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmHeaderRibbonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmInputComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmInputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmInputGroupComponentAtom.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmInputGroupComponentAtom</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmLabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmLabelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmNotificationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmNotificationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmTextareaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmTextareaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AtmValidatorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AtmValidatorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolGridComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolInputGroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolInputGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolInputGroupKodeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolInputGroupKodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolInputTextComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolInputTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolInputTextareaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolInputTextareaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MolLockUpFiltersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MolLockUpFiltersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrgInputLookUpComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrgInputLookUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppButtonSearchComponent.html" data-type="entity-link">AppButtonSearchComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonWarningComponent.html" data-type="entity-link">ButtonWarningComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/NotificationModel.html" data-type="entity-link">NotificationModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExampleMasterService.html" data-type="entity-link">ExampleMasterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpOperationService.html" data-type="entity-link">HttpOperationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigationService.html" data-type="entity-link">NavigationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UtilityService.html" data-type="entity-link">UtilityService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Array.html" data-type="entity-link">Array</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChildMenu.html" data-type="entity-link">ChildMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Columns.html" data-type="entity-link">Columns</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Data.html" data-type="entity-link">Data</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/exampleMasterModel.html" data-type="entity-link">exampleMasterModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/exampleMasterModelResponse.html" data-type="entity-link">exampleMasterModelResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MainMenu.html" data-type="entity-link">MainMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MainMenu-1.html" data-type="entity-link">MainMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidebarMenu.html" data-type="entity-link">SidebarMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SidebarMenuItems.html" data-type="entity-link">SidebarMenuItems</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});