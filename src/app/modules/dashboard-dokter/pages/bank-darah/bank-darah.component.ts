import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import * as Config from './json/bank-darah.config.json';
import * as API_PIS_SETUP_DATA from '../../../../api/PIS/SETUP_DATA';
import * as API_DASHBOARD_DOKTER from '../../../../api/DASHBOARD-DOKTER';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { BankDarahService } from '../../services/bank-darah/bank-darah.service';

@Component({
    selector: 'app-bank-darah',
    templateUrl: './bank-darah.component.html',
    styleUrls: ['./bank-darah.component.css']
})
export class BankDarahComponent implements OnInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    API_DASHBOARD_DOKTER = API_DASHBOARD_DOKTER.API_DASHBOARD_DOKTER.BANK_DARAH;

    FormBankDarah: FormGroup;

    GridData: MolGridComponent = null;
    GridBankDarahDatasource: any[] = [];
    GridBankDarahToolbar: any[] = [
        { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: 'Hapus', tooltipText: 'Hapus', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
    ];
    GridBankDarahRowIndex = 0;

    @ViewChild('LookupDiagnosa') LookupDiagnosa: OrgInputLookUpKodeComponent;
    urlDiagnosa = this.API_PIS_SETUP_DATA.SETUP_ICD_DIAGNOSA.GET_ALL_DIAGNOSA_FOR_LOOKUP_ADMISI;

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP;

    @ViewChild('GolonganDarah') GolonganDarah: DropDownListComponent;
    GolonganDarahDatasource: any = [
        { text: 'A+', value: 'A+' },
        { text: 'A-', value: 'A-' },
        { text: 'B+', value: 'B+' },
        { text: 'B-', value: 'B-' },
        { text: 'AB+', value: 'AB+' },
        { text: 'AB-', value: 'AB-' },
        { text: 'O+', value: 'O+' },
        { text: 'O-', value: 'O-' },
    ];
    GolonganDarahFields: object = { text: 'text', value: 'value' };

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;
    UrlLookupTarifBerlaku = this.API_DASHBOARD_DOKTER.GET_TARIF_ORDER_DARAH;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private bankDarahService: BankDarahService,
        public daftarPasienService: DaftarPasienService,
    ) { }

    ngOnInit(): void {
        this.FormBankDarah = this.formBuilder.group({
            id_register: [this.daftarPasienService.ActivePasien.value.id_register, []],
            id_kelas: [this.daftarPasienService.ActivePasien.value.id_kelas_rawat, []],
            kode_grup_penunjang: ["LAB", []],
            id_icd: [0, []],
            id_poli_order: [this.daftarPasienService.ActivePasien.value.id_poli, []],
            id_dokter_order: [this.daftarPasienService.ActivePasien.value.id_dokter, []],
            keterangan: ["", []],
            keterangan_sample: ["", []],
            is_order_darah: [true, []],
            master_order_darah: this.formBuilder.group({
                is_pernah_tranfusi: [false, []],
                is_hamil: [false, []],
                gol_darah: ["", []],
                tgl_diperlukan: [new Date, []],
                indikasi_transfusi: ["", []],
                catatan: ["", []],
            }),
        });
    }

    handleOpenModalBankDarah(): void {
        let btnBankDarah = document.getElementById('btnBankDarah') as HTMLElement;
        btnBankDarah.click();
    }

    handleSelectedDiagnosa(args: any): void {
        this.id_icd.setValue(args.id_icd);
    }

    handleSelectedLookupTarif(args: any): void {
        args.forEach((item) => {
            item.qty_order = 1;
        });

        this.GridBankDarahDatasource.push(...args);

        this.GridData.Grid.refresh();
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.GridBankDarahRowIndex = args.rowIndex;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        if (item == "add") {
            this.LookupChecklist.hanldeOpenModalLookupChecklist();
        } else {
            this.GridBankDarahDatasource.splice(this.GridBankDarahRowIndex, 1);
            this.GridData.Grid.refresh();
        }
    }

    handleSubmitBankDarah(FormBankDarah: any): void {
        FormBankDarah.item_order_darah = this.GridBankDarahDatasource;

        this.bankDarahService.onPostSaveBankDarah(FormBankDarah)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Order Darah Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormBankDarah();

                            this.handleCloseModalBankDarah();
                        })
                }
            })
    }

    onResetFormBankDarah(): void {
        this.id_icd.setValue(0);
        this.keterangan.setValue("");
        this.keterangan_sample.setValue("");
        this.is_pernah_tranfusi.setValue(false);
        this.is_hamil.setValue(false);
        this.gol_darah.setValue("");
        this.GolonganDarah.value = null;
        this.tgl_diperlukan.setValue(new Date());
        this.indikasi_transfusi.setValue("");
        this.catatan.setValue("");

        this.GridBankDarahDatasource = [];
        this.GridData.Grid.refresh();
    }

    handleCloseModalBankDarah(): void {
        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
        btnCloseModal.click();
    }

    get id_register(): AbstractControl { return this.FormBankDarah.get('id_register'); }
    get id_kelas(): AbstractControl { return this.FormBankDarah.get('id_kelas'); }
    get kode_grup_penunjang(): AbstractControl { return this.FormBankDarah.get('kode_grup_penunjang'); }
    get id_icd(): AbstractControl { return this.FormBankDarah.get('id_icd'); }
    get id_poli_order(): AbstractControl { return this.FormBankDarah.get('id_poli_order'); }
    get id_dokter_order(): AbstractControl { return this.FormBankDarah.get('id_dokter_order'); }
    get keterangan(): AbstractControl { return this.FormBankDarah.get('keterangan'); }
    get keterangan_sample(): AbstractControl { return this.FormBankDarah.get('keterangan_sample'); }
    get is_order_darah(): AbstractControl { return this.FormBankDarah.get('is_order_darah'); }
    get master_order_darah(): AbstractControl { return this.FormBankDarah.get('master_order_darah') as FormGroup; }
    get is_pernah_tranfusi(): AbstractControl { return this.FormBankDarah.get('master_order_darah.is_pernah_tranfusi'); }
    get is_hamil(): AbstractControl { return this.FormBankDarah.get('master_order_darah.is_hamil'); }
    get gol_darah(): AbstractControl { return this.FormBankDarah.get('master_order_darah.gol_darah'); }
    get tgl_diperlukan(): AbstractControl { return this.FormBankDarah.get('master_order_darah.tgl_diperlukan'); }
    get indikasi_transfusi(): AbstractControl { return this.FormBankDarah.get('master_order_darah.indikasi_transfusi'); }
    get catatan(): AbstractControl { return this.FormBankDarah.get('master_order_darah.catatan'); }
}
