import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { AntrianRegulerService } from 'src/app/modules/PIS/services/IRNA/antrian-reguler/antrian-reguler.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../../../api/PIS';
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

    modalRef: BsModalRef;
    @ViewChild('ModalAntrianRegulerRef') ModalAntrianRegulerRef: TemplateRef<any>;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien = this.API_CONFIG.API_PIS.IRJA.IRJA.PELAYANAN_RAWAT_JALAN.POST_GET_PASIEN_FOR_LOOKUP_ADMISI_NON_ANONIM;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any[];
    DropdownKelasFields: any;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: any[];
    DropdownDebiturFields: any = { text: 'nama_debitur', value: 'id_debitur' };

    @ViewChild('DatepickerTglRencanaMasuk') DatepickerTglRencanaMasuk: DatePickerComponent;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupDebiturService: SetupDebiturService,
        private antrianRegulerService: AntrianRegulerService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Tambah_Antrian', Captions: 'Tambah Antrian', Icons1: 'fa-plus fa-sm' },
        ];

        this.FilterColumnDatasource = [
            { text: 'Pilih Kelas', value: 'kp.nama_kelas' },
            { text: 'Tgl. Rencana Masuk', value: 'bb.tgl_rencana_inap' },
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
                        this.FilterDropdownFields = { text: 'nama_kelas', value: 'nama_kelas' }
                    });
                break;
            default:
                break;
        }
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.antrianRegulerService.onGetAllAntrianReguler(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleOpenModalAddAntrianReguler(): void {
        // let btnOpenModalAntrianReguler = document.getElementById("btnOpenModalAntrianReguler") as HTMLElement;
        // btnOpenModalAntrianReguler.click();

        this.modalRef = this.bsModalService.show(
            this.ModalAntrianRegulerRef,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.handleResetFormAddAntrianReguler();

        this.onGetDataKelasPerawatan();
    }

    handleCloseModalAddAntrianReguler(): void {
        // let btnCloseModalAddAntrianReguler = document.getElementById("btnCloseModalAddAntrianReguler") as HTMLElement;
        // btnCloseModalAddAntrianReguler.click();

        this.modalRef.hide();
    }

    onSetFormAttributes(): void {
        this.FormAddAntrianReguler = this.formBuilder.group({
            no_rekam_medis: ["", [Validators.required]],
            id_kelas: [0, [Validators.required]],
            id_debitur: [0, [Validators.required]],
            tgl_rencana_inap: ["", []],
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
        this.no_rekam_medis.setValue(args.no_rekam_medis);

        this.setupDebiturService.onGetAllByPersonId(args.id_person)
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    handleSubmitFormAddAntrianReguler(FormAddAntrianReguler: any): void {
        FormAddAntrianReguler.tgl_rencana_inap = this.utilityService.onFormatDate(FormAddAntrianReguler.tgl_rencana_inap);

        this.antrianRegulerService.onPostSaveAntrianReguler(FormAddAntrianReguler)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Antrian Reguler Berhasil Disimpan')
                        .then(() => {
                            this.handleResetFormAddAntrianReguler();
                            this.handleCloseModalAddAntrianReguler();
                            this.handlePencarianFilter([]);
                        })
                }
            });
    }

    handleResetFormAddAntrianReguler(): void {
        this.FormAddAntrianReguler.reset();

        this.no_rekam_medis.setValue("");
        this.id_debitur.setValue(0);
        this.id_kelas.setValue(0);
        this.tgl_rencana_inap.setValue("");
    }

    get no_rekam_medis(): AbstractControl { return this.FormAddAntrianReguler.get("no_rekam_medis"); }
    get id_debitur(): AbstractControl { return this.FormAddAntrianReguler.get("id_debitur"); }
    get id_kelas(): AbstractControl { return this.FormAddAntrianReguler.get("id_kelas"); }
    get tgl_rencana_inap(): AbstractControl { return this.FormAddAntrianReguler.get("tgl_rencana_inap"); }
}
