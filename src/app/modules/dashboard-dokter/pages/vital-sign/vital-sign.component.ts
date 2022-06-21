import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IVitalSignModel } from '../../models/vital_sign.model';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { VitalSignService } from '../../services/vital-sign/vital-sign.service';
import * as Config from './json/vital-sign.config.json';

@Component({
    selector: 'app-vital-sign',
    templateUrl: './vital-sign.component.html',
    styleUrls: ['./vital-sign.component.css']
})
export class VitalSignComponent implements OnInit, AfterViewInit {

    ShowTitle: boolean = true;

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[];

    /**
     * Form Group untuk mengatur Form Data
     * @FormGroup 
    */
    FormInputData: FormGroup;

    /**
     * Variable untuk menentukan apakah form dalam posisi input data atau edit data
     * @Boolean 
    */
    StatusFormNew: Boolean;

    /**
     * Variable untuk menentukan component input 
     * @val normal,edit,detail
    */
    inputFieldState = 'normal';

    /**
     * Variable untuk menentukan tap berada di posisi mana 
     * @value data | input
    */
    TabId: string = 'Data';

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    Config = Config;

    GridDatasource: any[];
    GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];
    GridTextWrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IVitalSignModel;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private vitalSignService: VitalSignService,
        private navigationService: NavigationService,
        private daftarPasienService: DaftarPasienService
    ) {
        this.FormInputData = this.formBuilder.group({
            id_vital_sign: [0, [Validators.required]],
            tanggal_periksa: [new Date(), [Validators.required]],
            id_register: [this.daftarPasienService.ActivePasien.value.id_register, [Validators.required]],
            id_dokter: [this.daftarPasienService.ActivePasien.value.id_dokter, [Validators.required]],
            tinggi_badan_cm: [0, [Validators.required]],
            berat_badan_kg: [0, [Validators.required]],
            suhu_badan_celcius: [0, [Validators.required]],
            tekanan_darah_atas: [0, [Validators.required]],
            tekanan_darah_bawah: [0, [Validators.required]],
            saturasi_oksigen: [0, [Validators.required]],
            denyut_nadi_per_menit: [0, [Validators.required]],
            respirasi_nafas_per_menit: [0, [Validators.required]],
            keterangan: ["", [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];

        this.GetAllData();

        if ((this.router.url).includes('Dokter')) {
            this.ShowTitle = true;
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (TabId == 'Input') {
            // this.setNewForm();
        } else {
            this.GetAllData();
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }

    /** Method setting input new data */
    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

    /** Method setting edit data */
    setEditForm(): void {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];

    };

    /** Method setting lihat data detail */
    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    ResetFrom(): void {
        this.id_vital_sign.setValue(0);
        this.tanggal_periksa.setValue(new Date());
        this.tinggi_badan_cm.setValue(0);
        this.berat_badan_kg.setValue(0);
        this.suhu_badan_celcius.setValue(0);
        this.tekanan_darah_atas.setValue(0);
        this.tekanan_darah_bawah.setValue(0);
        this.saturasi_oksigen.setValue(0);
        this.denyut_nadi_per_menit.setValue(0);
        this.respirasi_nafas_per_menit.setValue(0);
        this.keterangan.setValue("");
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.vitalSignService.onGetAllAlergi(this.daftarPasienService.ActivePasien.value.id_register)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data: IVitalSignModel): void {
        delete Data.user_inputed;
        delete Data.time_inputed;

        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        Data.tanggal_periksa = new Date();

        if (this.inputFieldState == 'normal') {

            delete Data.id_vital_sign;

            Data.id_register = this.daftarPasienService.ActivePasien.value.id_register;
            Data.id_dokter = this.daftarPasienService.ActivePasien.value.id_dokter;

            this.vitalSignService.onPostSaveAlergi(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.vitalSignService.onPutUpdateAlergi(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        }
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }

    get id_vital_sign(): AbstractControl { return this.FormInputData.get('id_vital_sign'); }
    get tanggal_periksa(): AbstractControl { return this.FormInputData.get('tanggal_periksa'); }
    get id_register(): AbstractControl { return this.FormInputData.get('id_register'); }
    get id_dokter(): AbstractControl { return this.FormInputData.get('id_dokter'); }
    get tinggi_badan_cm(): AbstractControl { return this.FormInputData.get('tinggi_badan_cm'); }
    get berat_badan_kg(): AbstractControl { return this.FormInputData.get('berat_badan_kg'); }
    get suhu_badan_celcius(): AbstractControl { return this.FormInputData.get('suhu_badan_celcius'); }
    get tekanan_darah_atas(): AbstractControl { return this.FormInputData.get('tekanan_darah_atas'); }
    get tekanan_darah_bawah(): AbstractControl { return this.FormInputData.get('tekanan_darah_bawah'); }
    get saturasi_oksigen(): AbstractControl { return this.FormInputData.get('saturasi_oksigen'); }
    get denyut_nadi_per_menit(): AbstractControl { return this.FormInputData.get('denyut_nadi_per_menit'); }
    get respirasi_nafas_per_menit(): AbstractControl { return this.FormInputData.get('respirasi_nafas_per_menit'); }
    get keterangan(): AbstractControl { return this.FormInputData.get('keterangan'); }
}
