import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel, TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import Config from '../json/antrian-terprogram-rawat-inap.config.json';
import * as API_CONFIG from '../../../../../../api/PIS';
import * as API_BILLING_SETUP_DATA from '../../../../../../api/BILLING/SETUP_DATA';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { AntrianTerprogramService } from 'src/app/modules/PIS/services/IRNA/antrian-terprogram/antrian-terprogram.service';
import { JenisRuanganModel } from 'src/app/modules/Billing/models/setup-data/setup-jenis-ruangan.model';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { SetupJenisRuanganService } from 'src/app/modules/Billing/services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';

@Component({
    selector: 'app-input-antrian-terprogram',
    templateUrl: './input-antrian-terprogram.component.html',
    styleUrls: ['./input-antrian-terprogram.component.css']
})
export class InputAntrianTerprogramComponent implements OnInit {

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

    Config = Config;

    API_CONFIG = API_CONFIG;

    API_BILLING_SETUP_DATA = API_BILLING_SETUP_DATA.API_SETUP_DATA;

    FormAddAntrianTerprogram: FormGroup;

    modalRef: BsModalRef;
    @ViewChild('ModalAntrianTerprogramRef') ModalAntrianTerprogramRef: TemplateRef<any>;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien = this.API_CONFIG.API_PIS.IRJA.IRJA.PELAYANAN_RAWAT_JALAN.POST_GET_PASIEN_FOR_LOOKUP_ADMISI_NON_ANONIM;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any[];
    DropdownKelasFields: any;
    SelectedKelas: string;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: any[];
    DropdownDebiturFields: any = { text: 'nama_debitur', value: 'id_debitur' };

    @ViewChild('DropdownRuangan') DropdownRuangan: DropDownListComponent;
    DropdownRuanganDatasource: JenisRuanganModel[];
    DropdownRuanganField: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    @ViewChild('LookupKodePoli') LookupKodePoli: OrgInputLookUpKodeComponent;
    urlPoli: string = "";
    LookupRoomStaticFilter: any[];

    @ViewChild('LookupRoom') LookupRoom: OrgInputLookUpKodeComponent;
    urlLookupRoom = this.API_CONFIG.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;
    LookupBedStaticFilter: any[];

    @ViewChild('LookupBed') LookupBed: OrgInputLookUpKodeComponent;
    urlLookupBed = this.API_CONFIG.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER;

    @ViewChild('DatepickerTglRencanaMasuk') DatepickerTglRencanaMasuk: DatePickerComponent;

    @ViewChild('DatepickerTglRencanaPulang') DatepickerTglRencanaPulang: DatePickerComponent;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupDebiturService: SetupDebiturService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private antrianTerprogramService: AntrianTerprogramService,
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

        this.onSetFormAttributes();

        this.handlePencarianFilter([]);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Tambah_Antrian':
                this.handleOpenModalAddAntrianTerprogram();
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
        this.antrianTerprogramService.onGetAllAntrianTerprogram(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleOpenModalAddAntrianTerprogram(): void {
        this.modalRef = this.bsModalService.show(
            this.ModalAntrianTerprogramRef,
            Object.assign({}, { class: 'modal-xl' })
        );

        this.onGetDataKelasPerawatan();

        this.onGetAllJenisRuangan();
    }

    handleCloseModalAddAntrianTerprogram(): void {
        this.modalRef.hide();
    }

    onSetFormAttributes(): void {
        this.FormAddAntrianTerprogram = this.formBuilder.group({
            no_rekam_medis: ["", [Validators.required]],
            id_debitur: [0, [Validators.required]],
            id_kelas: [0, [Validators.required]],
            tgl_rencana_inap: ["", []],
            tgl_rencana_pulang: ["", []],
            id_jenis_ruangan: [0, []],
            id_poli: [0, []],
            id_setup_room: [0, []],
            id_setup_bed_room: [0, []],
        });
    }

    onGetDataKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;

                this.DropdownKelasFields = { text: 'nama_kelas', value: 'id_kelas' };
            })
    }

    handleChangeKelasPerawatan(args: any): void {
        let itemData = args.itemData;

        this.SelectedKelas = itemData.nama_kelas;
    }

    handleSelectedLookupPasien(args: any): void {
        this.no_rekam_medis.setValue(args.no_rekam_medis);

        this.setupDebiturService.onGetAllByPersonId(args.id_person)
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    onGetAllJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                this.DropdownRuanganDatasource = result.data;
            });
    }

    handleChangeDropdownRuangan(JenisRuanganId: number): void {
        this.urlPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_ADMISI_RAWAT_INAP + JenisRuanganId;
    }

    handleSelectedPoli(args: PoliModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.LookupRoomStaticFilter = [
            {
                "columnName": "p.nama_poli",
                "filter": "like",
                "searchText": args.nama_poli || args[0].nama_poli,
                "searchText2": ""
            },
            {
                "columnName": "kp.nama_kelas",
                "filter": "like",
                "searchText": this.SelectedKelas,
                "searchText2": ""
            },
        ];
    }

    handleSelectedRoom(args: IKamarModel): void {
        this.id_poli.setValue(args.id_poli || args[0].id_poli);

        this.id_setup_room.setValue(args.id_setup_room);

        this.LookupBedStaticFilter = [
            {
                "columnName": "sr.room_no",
                "filter": "like",
                "searchText": args.room_no || args[0].room_no,
                "searchText2": ""
            }
        ]
    }

    handleSelectedBed(args: IBedModel): void {
        this.id_setup_bed_room.setValue(args.id_setup_bed_room);
    }

    handleSubmitFormAddAntrianTerprogram(FormAddAntrianTerprogram: any): void {

        FormAddAntrianTerprogram.tgl_rencana_inap = this.utilityService.onFormatDate(FormAddAntrianTerprogram.tgl_rencana_inap);

        if (typeof FormAddAntrianTerprogram.tgl_rencana_pulang === "string") {
            // !! Do Nothing
        } else {
            FormAddAntrianTerprogram.tgl_rencana_pulang = this.utilityService.onFormatDate(FormAddAntrianTerprogram.tgl_rencana_pulang);
        }

        console.log(FormAddAntrianTerprogram);

        this.antrianTerprogramService.onPostSaveAntrianTerprogram(FormAddAntrianTerprogram)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Antrian Terprogram Berhasil Disimpan')
                        .then(() => {
                            this.handleResetFormAddAntrianTerprogram();
                            this.handleCloseModalAddAntrianTerprogram();
                            this.handlePencarianFilter([]);
                        })
                }
            });
    }

    handleResetFormAddAntrianTerprogram(): void {
        this.FormAddAntrianTerprogram.reset();

        this.no_rekam_medis.setValue("");
        this.id_kelas.setValue(0);
        this.id_debitur.setValue(0);
        this.tgl_rencana_inap.setValue("");
        this.tgl_rencana_pulang.setValue("");
        this.id_jenis_ruangan.setValue(0);
        this.id_poli.setValue(0);
        this.id_setup_room.setValue(0);
        this.id_setup_bed_room.setValue(0);
    }

    get no_rekam_medis(): AbstractControl { return this.FormAddAntrianTerprogram.get("no_rekam_medis"); }
    get id_kelas(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_kelas"); }
    get id_debitur(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_debitur"); }
    get tgl_rencana_inap(): AbstractControl { return this.FormAddAntrianTerprogram.get("tgl_rencana_inap"); }
    get tgl_rencana_pulang(): AbstractControl { return this.FormAddAntrianTerprogram.get("tgl_rencana_pulang"); }
    get id_jenis_ruangan(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_jenis_ruangan"); }
    get id_poli(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_poli"); }
    get id_setup_room(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_setup_room"); }
    get id_setup_bed_room(): AbstractControl { return this.FormAddAntrianTerprogram.get("id_setup_bed_room"); }
}
