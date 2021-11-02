import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import Config from '../json/daftar-pemesanan-tempat-tidur.config.json';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';

@Component({
    selector: 'app-add-antrian-tppri',
    templateUrl: './add-antrian-tppri.component.html',
    styleUrls: ['./add-antrian-tppri.component.css']
})
export class AddAntrianTppriComponent implements OnInit {

    FormAddAntrianTppri: FormGroup;

    Config = Config;

    API_CONFIG = API_CONFIG;

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any[];
    DropdownKelasFields: any;

    @ViewChild('DatepickerTglSuratPerintah') DatepickerTglSuratPerintah: DatePickerComponent;

    @ViewChild('DatepickerTglRencanaMasuk') DatepickerTglRencanaMasuk: DatePickerComponent;

    @ViewChild('LookupPasien') LookupPasien: OrgInputLookUpComponent;
    UrlLookupPasien = this.API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED.GET_ALL_PASIEN_FOR_LOOKUP_ANTRIAN_TPPRI;

    @ViewChild('LookupSuratPerintah') LookupSuratPerintah: OrgInputLookUpComponent;
    UrlLookupSuratPerintah = this.API_CONFIG.IRNA.DAFTAR_ANTRIAN_PEMESANAN_BED.GET_ALL_SURAT_PERINTAH_BY_DYNAMIC_FILTER;
    ModalTitleLookupSuratPerintah: string;
    StaticFilterLookupSuratPerintah: any[];

    @ViewChild('LookupRoomRequest') LookupRoomRequest: OrgInputLookUpComponent;
    UrlLookupRoom = this.API_CONFIG.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;

    @ViewChild('LookupBedRequest') LookupBedRequest: OrgInputLookUpComponent;
    UrlLookupBed = this.API_CONFIG.IRNA.SETUP_BED_IRNA.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER;
    ModalTitleLookupBed: string;
    StaticFilterLookupBed: any[];

    @Output("onSendFormAddAntrianValue") onSendFormAddAntrianValue = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private setupKelasPerawatanService: SetupKelasPerawatanService
    ) { }

    ngOnInit(): void {
        this.onSetFormAttributes();
    }

    onSetFormAttributes(): void {
        this.FormAddAntrianTppri = this.formBuilder.group({
            id_person: [0, [Validators.required]],
            id_kelas_request: [0, [Validators.required]],
            id_perintah_mondok: [0, []],
            tanggal_rencana_masuk: ["", []],
            id_setup_room_request: [0, []],
            id_setup_bed_room_request: [0, []],
        });
    }

    onGetDataKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;

                this.DropdownKelasFields = { text: 'nama_kelas', value: 'id_kelas' }
            })
    }

    handleOpenModalAddAntrianTppri(): void {
        let btnOpenModalAntrianTppri = document.getElementById("btnOpenModalAntrianTppri") as HTMLElement;
        btnOpenModalAntrianTppri.click();

        this.handleResetFormAddAntrianTppri();

        this.onGetDataKelasPerawatan();
    }

    handleCloseModalAddAntrianTppri(): void {
        let btnCloseModalAddAntrianTppri = document.getElementById("btnCloseModalAddAntrianTppri") as HTMLElement;
        btnCloseModalAddAntrianTppri.click();
    }

    handleSelectedLookupPasien(args: any): void {
        this.id_person.setValue(args.id_person);

        this.StaticFilterLookupSuratPerintah = [];

        this.StaticFilterLookupSuratPerintah = [
            {
                "columnName": "tp.no_rekam_medis",
                "filter": "like",
                "searchText": args.no_rekam_medis,
                "searchText2": ""
            }
        ];

        this.ModalTitleLookupSuratPerintah = `Data Surat Perintah Rawat Inap Pasien ${args.full_name}`;
    }

    handleSelectedLookupSuratPerintah(args: any): void {
        this.id_perintah_mondok.setValue(args.id_perintah_mondok);
    }

    handleSelectedLookupRoom(args: any): void {
        this.id_setup_room_request.setValue(args.id_setup_room);

        this.StaticFilterLookupBed = [];

        this.StaticFilterLookupBed = [
            {
                "columnName": "sr.room_descr",
                "filter": "like",
                "searchText": args.room_descr,
                "searchText2": ""
            }
        ];

        this.ModalTitleLookupBed = `Data Bed Pada Room ${args.room_descr}`;

        setTimeout(() => {
            this.LookupBedRequest.resetValue();
        }, 500);
    }

    handleSelectedLookupBed(args: any): void {
        this.id_setup_bed_room_request.setValue(args.id_setup_bed_room);
    }

    handleSubmitFormAddAntrianTppri(FormAddAntrianTppri: any): void {
        this.onSendFormAddAntrianValue.emit(FormAddAntrianTppri);
    }

    handleResetFormAddAntrianTppri(): void {
        this.FormAddAntrianTppri.reset();

        this.id_person.setValue(0);
        this.id_kelas_request.setValue(0);
        this.id_perintah_mondok.setValue(0);
        this.tanggal_rencana_masuk.setValue("");
        this.id_setup_room_request.setValue(0);
        this.id_setup_bed_room_request.setValue(0);

        setTimeout(() => {
            this.LookupPasien.resetValue();
            this.LookupSuratPerintah.resetValue();
            this.LookupRoomRequest.resetValue();
        }, 500);
    }

    get id_person(): AbstractControl { return this.FormAddAntrianTppri.get("id_person"); }
    get id_kelas_request(): AbstractControl { return this.FormAddAntrianTppri.get("id_kelas_request"); }
    get id_perintah_mondok(): AbstractControl { return this.FormAddAntrianTppri.get("id_perintah_mondok"); }
    get tanggal_rencana_masuk(): AbstractControl { return this.FormAddAntrianTppri.get("tanggal_rencana_masuk"); }
    get id_setup_room_request(): AbstractControl { return this.FormAddAntrianTppri.get("id_setup_room_request"); }
    get id_setup_bed_room_request(): AbstractControl { return this.FormAddAntrianTppri.get("id_setup_bed_room_request"); }
}
