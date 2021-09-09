import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ComboBoxModule, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';

import { CommandColumnService, DetailRowService, EditService, GridModule, PageService, PdfExportService, ResizeService, SearchService, ToolbarService } from '@syncfusion/ej2-angular-grids';

import { AtmLabelComponent } from './components/atoms/form/atm-label/atm-label.component';
import { AtmValidatorsComponent } from './components/atoms/form/atm-validators/atm-validators.component';
import { AtmButtonDangerComponent } from './components/atoms/buttons/atm-button-danger/atm-button-danger.component';
import { AtmButtonPrimaryComponent } from './components/atoms/buttons/atm-button-primary/atm-button-primary.component';
import { AtmHeaderRibbonComponent } from './components/atoms/typografi/atm-header-ribbon/atm-header-ribbon.component';
import { AtmNotificationComponent } from './components/atoms/typografi/atm-notification/atm-notification.component';
import { AtmInputComponent } from './components/atoms/form/atm-input/atm-input.component';
import { AtmInputGroupComponentAtom } from './components/atoms/form/atm-input-group-atom/atm-input-group.component';
import { AtmTextareaComponent } from './components/atoms/form/atm-textarea/atm-textarea.component';
import { AtmDatepickerComponent } from './components/atoms/form/atm-datepicker/atm-datepicker.component';
import { AtmSelectComponent } from './components/atoms/form/atm-select/atm-select.component';
import { AtmButtonNewComponent } from './components/atoms/buttons/atm-button-new/atm-button-new.component';
import { AtmButtonEditComponent } from './components/atoms/buttons/atm-button-edit/atm-button-edit.component';
import { AtmButtonDeleteComponent } from './components/atoms/buttons/atm-button-delete/atm-button-delete.component';
import { AtmButtonSaveCloseComponent } from './components/atoms/buttons/atm-button-save-close/atm-button-save-close.component';
import { AtmCheckboxComponent } from './components/atoms/form/atm-checkbox/atm-checkbox.component';
import { AtmCardComponent } from './components/atoms/card/atm-card/atm-card.component';
import { AtmCardHeaderComponent } from './components/atoms/card/atm-card-header/atm-card-header.component';
import { AtmCardButtonComponent } from './components/atoms/card/atm-card-button/atm-card-button.component';
import { AtmBoardComponent } from './components/atoms/board/atm-board/atm-board.component';
import { AtmRadioButtonComponent } from './components/atoms/form/atm-radio-button/atm-radio-button.component';

import { MolLockUpFiltersComponent } from './components/molecules/filter/mol-lock-up-filters/mol-lock-up-filters.component';
import { MolInputGroupKodeComponent } from './components/molecules/form/mol-input-group-kode/mol-input-group-kode.component';
import { MolInputGroupComponent } from './components/molecules/form/mol-input-group/mol-input-group.component';
import { MolInputTextComponent } from './components/molecules/form/mol-input-text/mol-input-text.component';
import { MolInputTextareaComponent } from './components/molecules/form/mol-input-textarea/mol-input-textarea.component';
import { MolGridComponent } from './components/molecules/grid/grid/grid.component';
import { MolInputDatepickerComponent } from './components/molecules/form/mol-input-datepicker/mol-input-datepicker.component';
import { MolInputSelectComponent } from './components/molecules/form/mol-input-select/mol-input-select.component';
import { MolButtonMasterComponent } from './components/molecules/button/mol-button-master/mol-button-master.component';
import { MolButtonNavComponent } from './components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolDatepickerSyncfusionComponent } from './components/molecules/form/mol-datepicker-syncfusion/mol-datepicker-syncfusion.component';
import { MolKanbanV1Component } from './components/molecules/kanban-v1/mol-kanban-v1/mol-kanban-v1.component';
import { MolInputCheckboxComponent } from './components/molecules/form/mol-input-checkbox/mol-input-checkbox.component';
import { MolRadioButtonComponent } from './components/molecules/form/mol-radio-button/mol-radio-button.component';
import { MolInputTextSplitComponent } from './components/molecules/form/mol-input-text-split/mol-input-text-split.component';
import { MolDropdownSyncfusionComponent } from './components/molecules/form/mol-dropdown-syncfusion/mol-dropdown-syncfusion.component';
import { MolTreeGridComponent } from './components/molecules/grid/tree-grid/tree-grid.component';
import { MolOffcanvasFilterComponent } from './components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component';
import { MolInputCheckboxSingleComponent } from './components/molecules/form/mol-input-checkbox-single/mol-input-checkbox-single.component';

import { OrgInputLookUpKodeComponent } from './components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgInputLookUpComponent } from './components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgTabsComponentComponent } from './components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { OrgTabsItemComponentComponent } from './components/organism/tabs/org-tabs-item-component/org-tabs-item-component.component';
import { OrgTabsLabelComponentComponent } from './components/organism/tabs/org-tabs-label-component/org-tabs-label-component.component';
import { OrgTabsBodyComponentComponent } from './components/organism/tabs/org-tabs-body-component/org-tabs-body-component.component';
import { OrgCardLayoutComponent } from './components/organism/card/card-layout/card-layout.component';
import { OrgLookUpComponent } from './components/organism/loockUp/org-look-up/org-look-up.component';
import { OrgInputWilayahComponent } from './components/organism/org-input-wilayah/org-input-wilayah.component';
import { OrgLookUpChecklistComponent } from './components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';

@NgModule({
    declarations: [
        AtmLabelComponent,
        AtmValidatorsComponent,
        AtmButtonDangerComponent,
        AtmButtonPrimaryComponent,
        AtmHeaderRibbonComponent,
        AtmNotificationComponent,
        AtmInputComponent,
        AtmInputGroupComponentAtom,
        AtmTextareaComponent,
        AtmSelectComponent,
        AtmDatepickerComponent,
        AtmButtonNewComponent,
        AtmButtonEditComponent,
        AtmButtonDeleteComponent,
        AtmButtonSaveCloseComponent,
        AtmCheckboxComponent,
        AtmButtonSaveCloseComponent,
        AtmCardComponent,
        AtmCardHeaderComponent,
        AtmCardButtonComponent,
        AtmBoardComponent,
        AtmRadioButtonComponent,
        MolInputTextareaComponent,
        MolGridComponent,
        MolInputTextComponent,
        MolInputGroupKodeComponent,
        MolInputGroupComponent,
        MolLockUpFiltersComponent,
        MolInputDatepickerComponent,
        MolInputSelectComponent,
        MolButtonMasterComponent,
        MolButtonNavComponent,
        MolDatepickerSyncfusionComponent,
        MolKanbanV1Component,
        MolInputCheckboxComponent,
        MolRadioButtonComponent,
        MolInputTextSplitComponent,
        MolDropdownSyncfusionComponent,
        MolTreeGridComponent,
        MolOffcanvasFilterComponent,
        MolInputCheckboxSingleComponent,
        OrgInputLookUpKodeComponent,
        OrgInputLookUpComponent,
        OrgTabsComponentComponent,
        OrgTabsItemComponentComponent,
        OrgTabsLabelComponentComponent,
        OrgTabsBodyComponentComponent,
        OrgCardLayoutComponent,
        OrgLookUpComponent,
        OrgInputWilayahComponent,
        OrgLookUpChecklistComponent,
    ],
    imports: [
        CommonModule,
        GridModule,
        ModalModule.forRoot(),
        TreeViewModule,
        NgbModule,
        BsDropdownModule.forRoot(),
        DatePickerModule,
        DropDownListModule,
        DragDropModule,
        Ng2SearchPipeModule,
        NumericTextBoxModule,
        ComboBoxModule,
        TreeViewModule,
        FormsModule
    ],
    exports: [
        AtmLabelComponent,
        AtmValidatorsComponent,
        AtmButtonDangerComponent,
        AtmButtonPrimaryComponent,
        AtmHeaderRibbonComponent,
        AtmNotificationComponent,
        AtmInputComponent,
        AtmInputGroupComponentAtom,
        AtmTextareaComponent,
        AtmSelectComponent,
        AtmDatepickerComponent,
        AtmButtonNewComponent,
        AtmButtonEditComponent,
        AtmButtonDeleteComponent,
        AtmButtonSaveCloseComponent,
        AtmCheckboxComponent,
        AtmCardComponent,
        AtmCardHeaderComponent,
        AtmCardButtonComponent,
        AtmBoardComponent,
        AtmRadioButtonComponent,
        MolInputTextareaComponent,
        MolGridComponent,
        MolInputTextComponent,
        MolInputGroupKodeComponent,
        MolInputGroupComponent,
        MolLockUpFiltersComponent,
        MolInputDatepickerComponent,
        MolInputSelectComponent,
        MolButtonMasterComponent,
        MolButtonNavComponent,
        MolDatepickerSyncfusionComponent,
        MolKanbanV1Component,
        MolInputCheckboxComponent,
        MolRadioButtonComponent,
        MolInputTextSplitComponent,
        MolDropdownSyncfusionComponent,
        MolTreeGridComponent,
        MolOffcanvasFilterComponent,
        MolInputCheckboxSingleComponent,
        OrgInputLookUpKodeComponent,
        OrgInputLookUpComponent,
        OrgTabsComponentComponent,
        OrgTabsItemComponentComponent,
        OrgTabsLabelComponentComponent,
        OrgTabsBodyComponentComponent,
        OrgCardLayoutComponent,
        OrgInputWilayahComponent,
        OrgLookUpChecklistComponent,
        DropDownListModule,
        NumericTextBoxModule,
        DatePickerModule,
        ComboBoxModule,
        OrgLookUpComponent,
        GridModule,
        TreeViewModule,
        Ng2SearchPipeModule
    ],
    providers: [
        EditService,
        ToolbarService,
        PdfExportService,
        ResizeService,
        SearchService,
        PageService,
        CommandColumnService,
        BsDropdownDirective,
        DetailRowService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
