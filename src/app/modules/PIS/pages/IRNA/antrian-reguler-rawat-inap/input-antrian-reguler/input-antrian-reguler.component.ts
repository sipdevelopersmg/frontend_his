import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';
import Config from '../json/antrian-reguler-rawat-inap.config.json';

@Component({
    selector: 'app-input-antrian-reguler',
    templateUrl: './input-antrian-reguler.component.html',
    styleUrls: ['./input-antrian-reguler.component.css']
})
export class InputAntrianRegulerComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];
    FilterDropdownDatasource: any[];
    FilterDropdownFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridPageSettings = { pageSizes: false, pageSize: 30 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridToolbar: any[] = ["Search"];
    GridSelectedData: any;
    GridTextWrapSettings: TextWrapSettingsModel;

    FormAddAntrianReguler: FormGroup;

    API_CONFIG = API_CONFIG;

    Config = Config;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien = this.API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED.GET_ALL_PASIEN_FOR_LOOKUP_ANTRIAN_TPPRI;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any[];
    DropdownKelasFields: any;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: any[];
    DropdownDebiturFields: any = { text: 'nama_debitur', value: 'id_debitur' };

    @ViewChild('DatepickerTglRencanaMasuk') DatepickerTglRencanaMasuk: DatePickerComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupDebiturService: SetupDebiturService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Tambah_Antrian', Captions: 'Tambah Antrian', Icons1: 'fa-plus fa-sm' },
        ];

        this.FilterColumnDatasource = [
            { text: 'Pilih Kelas', value: 'tat.id_kelas_request' },
            { text: 'Tgl. Rencana Masuk', value: 'tat.tanggal_rencana_masuk' },
        ];

        this.GridTextWrapSettings = { wrapMode: 'Header' };

        this.handlePencarianFilter([]);

        this.onSetFormAttributes();
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Tambah_Antrian':
                this.handleOpenModalAddAntrianReguler();
                break;
            case 'Lihat_Antrian':
                break;
            default:
                break;
        }
    }

    handleChangeFilterPencarian(args: any): void {
        this.FilterDropdownDatasource = [];
        this.FilterDropdownFields = {};

        switch (args) {
            case 'Pilih Kelas':
                this.setupKelasPerawatanService.onGetAll()
                    .subscribe((result) => {
                        this.FilterDropdownDatasource = result.data;
                        this.FilterDropdownFields = { text: 'nama_kelas', value: 'id_kelas' }
                    });
                break;
            default:
                break;
        }
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        console.log(args);
    }

    handleOpenModalAddAntrianReguler(): void {
        let btnOpenModalAntrianReguler = document.getElementById("btnOpenModalAntrianReguler") as HTMLElement;
        btnOpenModalAntrianReguler.click();

        this.handleResetFormAddAntrianReguler();

        this.onGetDataKelasPerawatan();
    }

    handleCloseModalAddAntrianReguler(): void {
        let btnCloseModalAddAntrianReguler = document.getElementById("btnCloseModalAddAntrianReguler") as HTMLElement;
        btnCloseModalAddAntrianReguler.click();
    }

    onSetFormAttributes(): void {
        this.FormAddAntrianReguler = this.formBuilder.group({
            id_person: [0, [Validators.required]],
            no_rekam_medis: ["", [Validators.required]],
            id_debitur: [0, [Validators.required]],
            id_kelas_request: [0, [Validators.required]],
            tanggal_rencana_masuk: ["", []],
        });
    }

    onGetDataKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;

                this.DropdownKelasFields = { text: 'nama_kelas', value: 'id_kelas' }
            })
    }

    handleSelectedLookupPasien(args: any): void {
        this.id_person.setValue(args.id_person);
        this.no_rekam_medis.setValue(args.no_rekam_medis);

        this.setupDebiturService.onGetAllByPersonId(args.id_person)
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    handleSubmitFormAddAntrianReguler(FormAddAntrianReguler: any): void {
        console.log(FormAddAntrianReguler);
    }

    handleResetFormAddAntrianReguler(): void {
        this.FormAddAntrianReguler.reset();

        this.id_person.setValue(0);
        this.no_rekam_medis.setValue("");
        this.id_debitur.setValue(0);
        this.id_kelas_request.setValue(0);
        this.tanggal_rencana_masuk.setValue("");

        setTimeout(() => {
            this.LookupPasien.resetValue();
        }, 500);
    }

    get id_person(): AbstractControl { return this.FormAddAntrianReguler.get("id_person"); }
    get no_rekam_medis(): AbstractControl { return this.FormAddAntrianReguler.get("no_rekam_medis"); }
    get id_debitur(): AbstractControl { return this.FormAddAntrianReguler.get("id_debitur"); }
    get id_kelas_request(): AbstractControl { return this.FormAddAntrianReguler.get("id_kelas_request"); }
    get tanggal_rencana_masuk(): AbstractControl { return this.FormAddAntrianReguler.get("tanggal_rencana_masuk"); }
}
