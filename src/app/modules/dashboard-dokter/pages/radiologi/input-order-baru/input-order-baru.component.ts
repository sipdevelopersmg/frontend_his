import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { Columns } from 'src/app/modules/shared/components/molecules/grid/grid/grid.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ITabsPemeriksaanModel } from '../../../models/radiologi.model';
import { DaftarPasienService } from '../../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import { RadiologiService } from '../../../services/radiologi/radiologi.service';
import Config from '../json/InputOrderBaru.json';
import * as API_PIS_SETUP_DATA from '../../../../../api/PIS/SETUP_DATA';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';

@Component({
    selector: 'app-input-order-baru-rad',
    templateUrl: './input-order-baru.component.html',
    styleUrls: ['./input-order-baru.component.css']
})
export class InputOrderBaruRadComponent implements OnInit {

    @Input('ShowTitle') ShowTitle: boolean = true;

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    // ** Tabs Order Radiologi Dummy Datasource
    TabsOrderRadiologi: ITabsPemeriksaanModel[] = [];

    // ** Selected Checkbox Datasource
    SelectedCheckbox: any[];

    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

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

    // ** Form Insert Order Rad
    FormInsertOrderRad: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private radiologiService: RadiologiService,
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
                "headerText": "ID MAPPING TARIF PENUNJANG",
                "type": "number",
                "visible": false,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "id_mapping_tarif_penunjang_detail_radiologi",
                "headerText": "ID MAPPING TARIF PENUNJANG DETAIL RADIOLOGI",
                "type": "number",
                "visible": false,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "id_setup_tarif",
                "headerText": "ID SETUP TARIF ",
                "type": "number",
                "visible": false,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "nama_tindakan_penunjang",
                "headerText": "Order Tindakan",
                "type": "string",
                "visible": true,
                "width": 150
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "defaultEdit",
                "field": "left_or_right",
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
                "headerText": "P/K",
                "visible": true,
                "width": 50,
                "textAlign": "Center",
                "headerTextAlign": "Center"
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "numericEdit",
                "field": "qty_order",
                "headerText": "Qty",
                "type": "number",
                "textAlign": "Right",
                "headerTextAlign": "Right",
                "format": "N0",
                "visible": false,
                "width": 70
            },
            {
                "allowEditing": false,
                "allowSorting": false,
                "editType": "defaultEdit",
                "field": "keterangan_order",
                "headerText": "Keterangan",
                "textAlign": "Left",
                "visible": false,
                "width": 70
            },
        ];

        this.FormAddDiagnosa = this.formBuilder.group({
            subjective: ['', []],
            objective: ['', []],
            assesment: ['', []],
            catatan_assesment: ['', []],
            plan: ['', []]
        });

        this.FormInsertOrderRad = this.formBuilder.group({
            id_register: [0, []],
            id_kelas: [0, []],
            kode_grup_penunjang: ["RAD", []],
            id_icd: [0, []],
            id_poli_order: [0, []],
            id_dokter_order: [0, []],
            keterangan: ["", []],
            keterangan_sample: ["", []],
            is_order_darah: [false, []],
        });

        this.onGetAllIDataOrderPenunjang();
    }

    onGetAllIDataOrderPenunjang(): void {
        this.radiologiService.onGetAllOrderPenunjang()
            .subscribe((result) => {
                this.TabsOrderRadiologi = result.data;
            })
    }

    onGetSelectedTabId(args: any): void {
        // console.log(args);
    }

    onClickTabButton(tabs_button: any): void {
        this.SelectedCheckbox = tabs_button.radChild;

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

            if (Parameter.parameter_hasil) {
                let elemLeft = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Left") as HTMLInputElement;
                elemLeft.checked = false;
                elemLeft.value = "false";

                let elemRight = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Right") as HTMLInputElement;
                elemRight.checked = false;
                elemRight.value = "false";

                let elemPolos = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Polos") as HTMLInputElement;
                elemPolos.checked = false;

                let elemKontras = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Kontras") as HTMLInputElement;
                elemKontras.checked = false;
            }
        };
    }

    onChangeTabsCheckboxChildren(Parameter: any, Options: string) {
        const index = this.GridDaftarOrderDatasource.map(e => e.id_mapping_tarif_penunjang).indexOf(Parameter.id_mapping_tarif_penunjang);

        // ** Check Apabila Left / Right di check
        if (Options == "Left" || Options == "Right") {
            let elemLeft = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Left") as HTMLInputElement;
            let elemRight = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Right") as HTMLInputElement;

            if (elemLeft.checked && elemRight.checked) {
                Parameter.left_or_right = "LR";
                Parameter.item_rad.is_satu_sisi = false;
                Parameter.item_rad.is_dua_sisi = true;
            } else if (elemRight.checked) {
                Parameter.left_or_right = "R";
                Parameter.item_rad.is_satu_sisi = true;
                Parameter.item_rad.is_dua_sisi = false;
            } else if (elemLeft.checked) {
                Parameter.left_or_right = "L";
                Parameter.item_rad.is_satu_sisi = true;
                Parameter.item_rad.is_dua_sisi = false;
            } else {
                Parameter.left_or_right = "";
                Parameter.item_rad.is_satu_sisi = false;
                Parameter.item_rad.is_dua_sisi = false;
            };

            this.GridDaftarOrderDatasource[index].left_or_right = Parameter.left_or_right;

            this.gridDaftarOrder.Grid.refresh();
        };

        // ** Check Apabila Polos / Kontras di check 
        if (Options == "Polos" || Options == "Kontras") {
            let elemPolos = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Polos") as HTMLInputElement;
            let elemKontras = document.getElementById(Parameter.id_mapping_tarif_penunjang + "Kontras") as HTMLInputElement;

            if (elemPolos.checked) {
                Parameter.polos_or_kontras = "P";
                Parameter.item_rad.is_polos = true;
                Parameter.item_rad.is_kontras = false;
            } else if (elemKontras.checked) {
                Parameter.polos_or_kontras = "K";
                Parameter.item_rad.is_polos = false;
                Parameter.item_rad.is_kontras = true;
            } else {
                Parameter.polos_or_kontras = "";
                Parameter.item_rad.is_polos = false;
                Parameter.item_rad.is_kontras = false;
            }

            this.GridDaftarOrderDatasource[index].polos_or_kontras = Parameter.polos_or_kontras;

            this.gridDaftarOrder.Grid.refresh();
        };

        const data = {
            id_mapping_tarif_penunjang: Parameter.id_mapping_tarif_penunjang,
            is_satu_sisi: Parameter.item_rad.is_satu_sisi,
            is_dua_sisi: Parameter.item_rad.is_dua_sisi,
            is_kontras: Parameter.item_rad.is_kontras,
            is_polos: Parameter.item_rad.is_polos,
        };

        if (data) {
            this.onGetTarifRadiologiDetail(data, index);
        }
    }

    onGetTarifRadiologiDetail(Parameter: any, GridIndex: number): void {
        this.radiologiService.onGetTarifRadiologiDetail(Parameter)
            .subscribe((result) => {
                this.GridDaftarOrderDatasource[GridIndex].id_mapping_tarif_penunjang_detail_radiologi = result.data.id_mapping_tarif_penunjang_detail_radiologi;
                this.GridDaftarOrderDatasource[GridIndex]['id_setup_tarif'] = result.data.id_setup_tarif;
                this.GridDaftarOrderDatasource[GridIndex]['qty_order'] = 1;
                this.GridDaftarOrderDatasource[GridIndex]['keterangan_order'] = "";
            });
    }

    onCheckGridDaftarOrderDatasource(): void {
        this.GridDaftarOrderDatasource.forEach((check) => {
            check.parameter_checked = true;

            let elem = document.getElementById(check.id_mapping_tarif_penunjang + "CheckParameter") as HTMLInputElement;

            // ** Check apakah Parent sudah di render di view
            if (elem) {
                elem.checked = true;
            };

            // ** Check apakah left_or_right sudah di render di view
            if (check.left_or_right) {
                let elemLeft = document.getElementById(check.id_mapping_tarif_penunjang + "Left") as HTMLInputElement;
                let elemRight = document.getElementById(check.id_mapping_tarif_penunjang + "Right") as HTMLInputElement;

                if (elemLeft || elemRight) {
                    if (check.left_or_right == "LR") {
                        elemLeft.checked = true;
                        elemRight.checked = true;
                    }
                    else if (check.left_or_right == "L") {
                        elemLeft.checked = true;
                    }
                    else if (check.left_or_right == "R") {
                        elemRight.checked = true;
                    }
                    else {
                        // ** Do Nothing
                    }
                }
            };

            // ** Check apakah Polos / Kontras sudah di render di view
            if (check.polos_or_kontras) {
                let elemPolos = document.getElementById(check.id_mapping_tarif_penunjang + "Polos") as HTMLInputElement;
                let elemKontras = document.getElementById(check.id_mapping_tarif_penunjang + "Kontras") as HTMLInputElement;

                if (elemPolos || elemKontras) {
                    if (elemPolos.checked) {
                        check.polos_or_kontras = "P";
                    } else if (elemKontras.checked) {
                        check.polos_or_kontras = "K";
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
        const index = this.GridDaftarOrderDatasource.map(e => e.id_mapping_tarif_penunjang).indexOf(Parameter.id_mapping_tarif_penunjang);

        this.GridDaftarOrderDatasource[index].parameter_checked = false;
        this.GridDaftarOrderDatasource[index].left_or_right = "";
        this.GridDaftarOrderDatasource[index].polos_or_kontras = "";

        this.GridDaftarOrderDatasource.splice(index, 1);

        this.gridDaftarOrder.Grid.refresh();
    }

    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarOrder = component;
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

    onSubmitRadiologiPasien(FormInsertOrderRad: any): void {
        let UserData = JSON.parse(localStorage.getItem('UserData'));
        FormInsertOrderRad.id_dokter_order = UserData.id_karyawan;

        // FormInsertOrderRad.id_icd = this.daftarPasienService.ActivePasien.value.id_icd_masuk;
        FormInsertOrderRad.id_kelas = this.daftarPasienService.ActivePasien.value.id_kelas_rawat;
        FormInsertOrderRad.id_poli_order = this.daftarPasienService.ActivePasien.value.id_poli;
        FormInsertOrderRad.id_register = this.daftarPasienService.ActivePasien.value.id_register;
        FormInsertOrderRad.is_order_darah = false;

        const item_rad: any[] = this.GridDaftarOrderDatasource;

        item_rad.forEach((item) => {
            if (item.left_or_right) {
                switch (item.left_or_right) {
                    case "LR":
                        item.posisi = "LEFT_RIGHT";
                        break;
                    case "L":
                        item.posisi = "LEFT";
                        break;
                    case "R":
                        item.posisi = "RIGHT";
                        break;
                    case "":
                        item.posisi = "";
                        break;
                    default:
                        break;
                }
            } else {
                item.posisi = "";
            }

            if (item.polos_or_kontras) {
                switch (item.polos_or_kontras) {
                    case "P":
                        item.pk = "POLOS";
                        break;
                    case "K":
                        item.pk = "KONTRAS";
                        break;
                    case "":
                        item.posisi = "";
                        break;
                    default:
                        break;
                }
            } else {
                item.pk = "";
            }
        });

        FormInsertOrderRad.item_order = item_rad;

        this.radiologiService.onPostSaveOrderPenunjang(FormInsertOrderRad)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Order Radiologi Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormRadiologiPasien();

                            setTimeout(() => {
                                this.router.navigate(['/Dokter/radiologi/riwayat-pemeriksaan']);
                            }, 500);
                        })
                }
            });
    }

    onResetFormRadiologiPasien(): void {
        this.FormInsertOrderRad.reset();

        this.id_register.setValue(0);
        this.id_kelas.setValue(0);
        this.kode_grup_penunjang.setValue("RAD");
        this.id_icd.setValue(0);
        this.id_poli_order.setValue(0);
        this.id_dokter_order.setValue(0);
        this.keterangan.setValue("");
        this.keterangan_sample.setValue("");
        this.is_order_darah.setValue(false);
    }

    get id_register(): AbstractControl { return this.FormInsertOrderRad.get('id_register') }
    get id_kelas(): AbstractControl { return this.FormInsertOrderRad.get('id_kelas') }
    get kode_grup_penunjang(): AbstractControl { return this.FormInsertOrderRad.get('kode_grup_penunjang') }
    get id_icd(): AbstractControl { return this.FormInsertOrderRad.get('id_icd') }
    get id_poli_order(): AbstractControl { return this.FormInsertOrderRad.get('id_poli_order') }
    get id_dokter_order(): AbstractControl { return this.FormInsertOrderRad.get('id_dokter_order') }
    get keterangan(): AbstractControl { return this.FormInsertOrderRad.get('keterangan') }
    get keterangan_sample(): AbstractControl { return this.FormInsertOrderRad.get('keterangan_sample') }
    get is_order_darah(): AbstractControl { return this.FormInsertOrderRad.get('is_order_darah') }
}
