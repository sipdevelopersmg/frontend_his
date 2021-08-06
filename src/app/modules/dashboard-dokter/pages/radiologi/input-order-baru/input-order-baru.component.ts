import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import * as TabsConfig from '../json/InputOrderBaru.json';

@Component({
    selector: 'app-input-order-baru',
    templateUrl: './input-order-baru.component.html',
    styleUrls: ['./input-order-baru.component.css']
})
export class InputOrderBaruRadComponent implements OnInit {

    // ** Tabs Order Radiologi Dummy Datasource
    TabsOrderRadiologi = TabsConfig;

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

    constructor(
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
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
                "visible": true,
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

            if (Parameter.parameter_hasil) {
                let elemLeft = document.getElementById(Parameter.parameter_id + "Left") as HTMLInputElement;
                elemLeft.checked = false;
                elemLeft.value = "false";

                let elemRight = document.getElementById(Parameter.parameter_id + "Right") as HTMLInputElement;
                elemRight.checked = false;
                elemRight.value = "false";

                let elemPolos = document.getElementById(Parameter.parameter_id + "Polos") as HTMLInputElement;
                elemPolos.checked = false;

                let elemKontras = document.getElementById(Parameter.parameter_id + "Kontras") as HTMLInputElement;
                elemKontras.checked = false;
            }
        };
    }

    onChangeTabsCheckboxChildren(Parameter: any, Options: string) {
        const index = this.GridDaftarOrderDatasource.map(e => e.parameter_id).indexOf(Parameter.parameter_id);

        // ** Check Apabila Left / Right di check
        if (Options == "Left" || Options == "Right") {
            let elemLeft = document.getElementById(Parameter.parameter_id + "Left") as HTMLInputElement;
            let elemRight = document.getElementById(Parameter.parameter_id + "Right") as HTMLInputElement;

            if (elemLeft.checked && elemRight.checked) {
                Parameter.hasil = "LR";
            } else if (elemRight.checked) {
                Parameter.hasil = "R";
            } else if (elemLeft.checked) {
                Parameter.hasil = "L";
            } else {
                Parameter.hasil = "";
            };

            this.GridDaftarOrderDatasource[index].hasil = Parameter.hasil;

            switch (this.GridDaftarOrderDatasource[index].hasil) {
                case "LR":
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_left = true;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_right = true;
                    break;
                case "L":
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_left = true;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_right = false;
                    break;
                case "R":
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_left = false;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_right = true;
                    break;
                default:
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_left = false;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_right = false;
                    break;
            }

            this.gridDaftarOrder.Grid.refresh();
        }

        // ** Check Apabila Polos / Kontras di check 
        if (Options == "Polos" || Options == "Kontras") {
            let elemPolos = document.getElementById(Parameter.parameter_id + "Polos") as HTMLInputElement;
            let elemKontras = document.getElementById(Parameter.parameter_id + "Kontras") as HTMLInputElement;

            if (elemPolos.checked) {
                Parameter.polos_or_kontras = "polos";
            } else if (elemKontras.checked) {
                Parameter.polos_or_kontras = "kontras";
            } else {
                Parameter.polos_or_kontras = "";
            }

            this.GridDaftarOrderDatasource[index].polos_or_kontras = Parameter.polos_or_kontras;

            switch (this.GridDaftarOrderDatasource[index].polos_or_kontras) {
                case "polos":
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_polos = true;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_kontras = false;
                    break;
                case "kontras":
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_polos = false;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_kontras = true;
                    break;
                default:
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_left = false;
                    this.GridDaftarOrderDatasource[index].parameter_hasil.parameter_right = false;
                    break;
            }

            this.gridDaftarOrder.Grid.refresh();
        }
    }

    onCheckGridDaftarOrderDatasource(): void {
        this.GridDaftarOrderDatasource.forEach((check) => {
            check.parameter_checked = true;

            let elem = document.getElementById(check.parameter_id + "CheckParameter") as HTMLInputElement;

            // ** Check apakah Parent sudah di render di view
            if (elem) {
                elem.checked = true;
            };

            // ** Check apakah Hasil sudah di render di view
            if (check.hasil) {
                let elemLeft = document.getElementById(check.parameter_id + "Left") as HTMLInputElement;
                let elemRight = document.getElementById(check.parameter_id + "Right") as HTMLInputElement;

                if (elemLeft || elemRight) {
                    if (check.hasil == "LR") {
                        elemLeft.checked = true;
                        elemRight.checked = true;
                    }
                    else if (check.hasil == "L") {
                        elemLeft.checked = true;
                    }
                    else if (check.hasil == "R") {
                        elemRight.checked = true;
                    }
                    else {
                        // ** Do Nothing
                    }
                }
            };

            // ** Check apakah Polos / Kontras sudah di render di view
            if (check.polos_or_kontras) {
                let elemPolos = document.getElementById(check.parameter_id + "Polos") as HTMLInputElement;
                let elemKontras = document.getElementById(check.parameter_id + "Kontras") as HTMLInputElement;

                if (elemPolos || elemKontras) {
                    if (elemPolos.checked) {
                        check.polos_or_kontras = "polos";
                    } else if (elemKontras.checked) {
                        check.polos_or_kontras = "kontras";
                    } else {
                        check.polos_or_kontras = "";
                    }
                }
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
        this.GridDaftarOrderDatasource[index].hasil = "";
        this.GridDaftarOrderDatasource[index].polos_or_kontras = "";

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

    onSubmitRadiologiPasien(): void {
        console.log(this.GridDaftarOrderDatasource);
    }
}
