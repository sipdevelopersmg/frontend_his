import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ITabsPemeriksaanModel } from '../../../models/laboratorium.model';
import { DaftarPasienService } from '../../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import { LaboratoriumService } from '../../../services/laboratorium/laboratorium.service';
import Config from '../json/InputOrderBaru.json';
import * as API_PIS_SETUP_DATA from '../../../../../api/PIS/SETUP_DATA';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';

@Component({
    selector: 'app-input-order-baru',
    templateUrl: './input-order-baru.component.html',
    styleUrls: ['./input-order-baru.component.css']
})
export class InputOrderBaruLabComponent implements OnInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    // ** Tabs Order Laboratorium Dummy Datasource
    TabsOrderLaboratorium: ITabsPemeriksaanModel[] = [];

    // ** Selected Checkbox Datasource
    SelectedCheckbox: any[];

    // ** Grid Daftar Order Properties
    GridDaftarOrderEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDaftarOrderDatasource: any[] = [];
    GridDaftarOrderColumns: Columns[];
    private gridDaftarOrder: MolGridComponent = null;

    // ** Form Add Diagnosa
    FormAddDiagnosa: FormGroup;

    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

    // ** Modal Dialog Add / Edit Setup User Properties
    modalRef: BsModalRef;
    @ViewChild('modalDialogAddDiagnosa') modalDialogAddDiagnosa: TemplateRef<any>;

    // ** Form Insert Order Lab
    FormInsertOrderLab: FormGroup;

    public get width(): any {
        return window.innerWidth;
    };

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private laboratoriumService: LaboratoriumService,
        private daftarPasienService: DaftarPasienService,
        private dashboardDokterService: DashboardDokterService,
    ) { }

    ngOnInit(): void {
        this.GridDaftarOrderColumns = [
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "id_mapping_tarif_penunjang",
                "headerText": "ID",
                "type": "string",
                "visible": false,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "defaultEdit",
                "field": "nama_tindakan_penunjang",
                "headerText": "Order Tindakan",
                "type": "string",
                "visible": true,
                "width": 150
            },
            {
                "allowEditing": true,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "qty_order",
                "headerText": "Qty",
                "type": "number",
                "textAlign": "Right",
                "headerTextAlign": "Right",
                "format": "N0",
                "visible": true,
                "width": 70
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

        this.FormInsertOrderLab = this.formBuilder.group({
            id_register: [0, []],
            id_kelas: [0, []],
            kode_grup_penunjang: ["LAB", []],
            id_icd: [0, []],
            id_poli_order: [0, []],
            id_dokter_order: [0, []],
            keterangan: ["", []],
            keterangan_sample: ["", []],
            is_order_darah: [false, []],
        });

        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();

        this.onGetAllIDataOrderPenunjang();
    }

    onGetAllIDataOrderPenunjang(): void {
        this.laboratoriumService.onGetAllOrderPenunjang()
            .subscribe((result) => {
                this.TabsOrderLaboratorium = result.data;
            })
    }

    onGetSelectedTabId(args: any): void {
        // console.log(args);
    }

    onClickTabButton(tabs_button: any): void {
        this.SelectedCheckbox = tabs_button.labChild;

        this.onCheckGridDaftarOrderDatasource();
    }

    onChangeTabsCheckbox(Parameter: any): void {
        let elem = document.getElementById(Parameter.id_mapping_tarif_penunjang + "CheckParameter") as HTMLInputElement;

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

            let elem = document.getElementById(check.id_mapping_tarif_penunjang + "CheckParameter") as HTMLInputElement;

            // ** Check apakah Parent sudah di render di view
            if (elem) {
                elem.checked = true;
            };
        });
    }

    onAddItemToGridDaftarOrder(Parameter: any) {
        Parameter['qty_order'] = 1;

        this.GridDaftarOrderDatasource.push(Parameter);

        this.onCheckGridDaftarOrderDatasource();

        this.gridDaftarOrder.Grid.refresh();
    }

    onRemoveItemFromGridDaftarOrder(Parameter: any) {
        const index = this.GridDaftarOrderDatasource.map(e => e.id_mapping_tarif_penunjang).indexOf(Parameter.id_mapping_tarif_penunjang);

        this.GridDaftarOrderDatasource[index].parameter_checked = false;

        this.GridDaftarOrderDatasource.splice(index, 1);

        this.gridDaftarOrder.Grid.refresh();
    }

    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarOrder = component;
    }

    onActionCompleteGrid(args: any): void {
        // console.log(args);
    }

    onRowSelected(args: any): void {
        // console.log(args);
    }

    onClickButtonAddDiagnosa(): void {
        this.modalRef = this.modalService.show(
            this.modalDialogAddDiagnosa,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    onClickPilihDiagnosa(): void {
        this.LookupDiagnosa.onOpenModal();
    }

    onGetSeletedLookupDiagnosa(args: any): void {
        this.id_icd.setValue(args.id_icd);
        this.keterangan.setValue(`${args.kode_icd} - ${args.nama_icd}`);
    }

    onSubmitFormAddDiagnosa(FormAddDiagnosa: any): void {
        console.log(FormAddDiagnosa);
    }

    onSubmitLaboratoriumPasien(FormInsertOrderLab: any): void {
        FormInsertOrderLab.id_register = this.daftarPasienService.ActivePasien.value.id_register;;
        FormInsertOrderLab.id_kelas = this.daftarPasienService.ActivePasien.value.id_kelas_rawat;
        FormInsertOrderLab.kode_grup_penunjang = "LAB";
        FormInsertOrderLab.id_poli_order = this.daftarPasienService.ActivePasien.value.id_poli;
        FormInsertOrderLab.id_dokter_order = this.daftarPasienService.ActivePasien.value.id_dokter;
        FormInsertOrderLab.item_order = this.GridDaftarOrderDatasource;

        this.laboratoriumService.onPostSaveOrderPenunjang(FormInsertOrderLab)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Order Laboratorium Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormLaboratoriumPasien();

                            setTimeout(() => {
                                this.router.navigate(['/Dokter/laboratorium/riwayat-pemeriksaan']);
                            }, 500);
                        })
                }
            })
    }

    onResetFormLaboratoriumPasien(): void {
        this.FormInsertOrderLab.reset();

        this.id_register.setValue(0);
        this.id_kelas.setValue(0);
        this.kode_grup_penunjang.setValue("LAB");
        this.id_icd.setValue(0);
        this.id_poli_order.setValue(0);
        this.id_dokter_order.setValue(0);
        this.keterangan.setValue("");
        this.keterangan_sample.setValue("");
        this.is_order_darah.setValue(false);
    }

    get id_register(): AbstractControl { return this.FormInsertOrderLab.get('id_register') }
    get id_kelas(): AbstractControl { return this.FormInsertOrderLab.get('id_kelas') }
    get kode_grup_penunjang(): AbstractControl { return this.FormInsertOrderLab.get('kode_grup_penunjang') }
    get id_icd(): AbstractControl { return this.FormInsertOrderLab.get('id_icd') }
    get id_poli_order(): AbstractControl { return this.FormInsertOrderLab.get('id_poli_order') }
    get id_dokter_order(): AbstractControl { return this.FormInsertOrderLab.get('id_dokter_order') }
    get keterangan(): AbstractControl { return this.FormInsertOrderLab.get('keterangan') }
    get keterangan_sample(): AbstractControl { return this.FormInsertOrderLab.get('keterangan_sample') }
    get is_order_darah(): AbstractControl { return this.FormInsertOrderLab.get('is_order_darah') }
}
