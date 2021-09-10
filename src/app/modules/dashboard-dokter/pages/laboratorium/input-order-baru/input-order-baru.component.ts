import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import * as TabsConfig from '../json/InputOrderBaru.json';

@Component({
    selector: 'app-input-order-baru',
    templateUrl: './input-order-baru.component.html',
    styleUrls: ['./input-order-baru.component.css']
})
export class InputOrderBaruLabComponent implements OnInit {

    // ** Tabs Order Laboratorium Dummy Datasource
    TabsOrderLaboratorium = TabsConfig;

    // ** Selected Checkbox Datasource
    SelectedCheckbox: any[];

    // ** Grid Daftar Order Properties
    GridDaftarOrderEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDaftarOrderDatasource: any[] = [];
    GridDaftarOrderColumns: Columns[];
    private gridDaftarOrder: MolGridComponent = null;

    // ** Form Add Diagnosa
    FormAddDiagnosa: FormGroup;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogAddDiagnosa') modalDialogAddDiagnosa: TemplateRef<any>;

    public get width(): any {
        return window.innerWidth;
    };

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.GridDaftarOrderColumns = [
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "parameter_caption",
                "headerText": "Order Tindakan",
                "type": "string",
                "visible": true,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "defaultEdit",
                "field": "hasil",
                "headerText": "L/R",
                "visible": false,
                "width": 50,
                "textAlign": "Center",
                "headerTextAlign": "Center"
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "defaultEdit",
                "field": "polos_or_kontras",
                "headerText": "Polos / Kontras",
                "visible": false,
                "width": 50,
                "textAlign": "Center",
                "headerTextAlign": "Center"
            },
        ];

        this.FormAddDiagnosa = this.formBuilder.group({
            subjective: ['', []],
            objective: ['', []],
            assesment: ['', []],
            catatan_assesment: ['', []],
            plan: ['', []]
        });

        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
    }

    onGetSelectedTabId(args: any): void {
        // console.log(args);
    }

    onClickTabButton(tabs_button: any): void {
        this.SelectedCheckbox = tabs_button.parameter;

        this.onCheckGridDaftarOrderDatasource();
    }

    onChangeTabsCheckbox(Parameter: any): void {
        let elem = document.getElementById(Parameter.parameter_id + "CheckParameter") as HTMLInputElement;

        elem.checked = elem.checked;

        if (elem.checked) {
            elem.value = "true";
            this.onAddItemToGridDaftarOrder(Parameter);
        } else {
            elem.value = "false";
            this.onRemoveItemFromGridDaftarOrder(Parameter);
        };
    }

    onCheckGridDaftarOrderDatasource(): void {
        this.GridDaftarOrderDatasource.forEach((check) => {
            check.parameter_checked = true;

            let elem = document.getElementById(check.parameter_id + "CheckParameter") as HTMLInputElement;

            // ** Check apakah Parent sudah di render di view
            if (elem) {
                elem.checked = true;
            };
        });
    }

    onAddItemToGridDaftarOrder(Parameter: any) {
        this.GridDaftarOrderDatasource.push(Parameter);

        this.onCheckGridDaftarOrderDatasource();

        this.gridDaftarOrder.Grid.refresh();
    }

    onRemoveItemFromGridDaftarOrder(Parameter: any) {
        const index = this.GridDaftarOrderDatasource.map(e => e.parameter_id).indexOf(Parameter.parameter_id);

        this.GridDaftarOrderDatasource[index].parameter_checked = false;

        this.GridDaftarOrderDatasource.splice(index, 1);

        this.gridDaftarOrder.Grid.refresh();
    }

    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarOrder = component;
    }

    onRowSelected(args: any): void {
        console.log(args);
    }

    onClickButtonAddDiagnosa(): void {
        this.modalRef = this.modalService.show(
            this.modalDialogAddDiagnosa,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onSubmitFormAddDiagnosa(FormAddDiagnosa: any): void {
        console.log(FormAddDiagnosa);
    }

    onSubmitLaboratoriumPasien(): void {
        console.log(this.GridDaftarOrderDatasource);
    }
}
