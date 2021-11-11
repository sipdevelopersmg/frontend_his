import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DateTimePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { IRequestMutasiBedModel } from 'src/app/modules/PIS/models/IRNA/management_bed_rawat_inap.model';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { ManagementBedRawatInapService } from 'src/app/modules/PIS/services/IRNA/management-bed-rawat-inap/management-bed-rawat-inap.service';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';
import * as Config from '../json/management-bed-rawat-inap.config.json';

@Component({
    selector: 'app-add-permintaan-mutasi',
    templateUrl: './add-permintaan-mutasi.component.html',
    styleUrls: ['./add-permintaan-mutasi.component.css']
})
export class AddPermintaanMutasiComponent implements OnInit {

    API_CONFIG = API_CONFIG;

    GridConfig = Config;

    FormPermintaanMutasiBed: FormGroup;

    @Input('FormPermintaanMutasiBedAdditionalInfo') FormPermintaanMutasiBedAdditionalInfo: any[];

    @ViewChild('LookupRoomRequest') LookupRoomRequest: OrgInputLookUpComponent;
    UrlLookupRoom = this.API_CONFIG.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;

    @ViewChild('LookupBedRequest') LookupBedRequest: OrgLookUpComponent;
    UrlLookupBed = this.API_CONFIG.IRNA.SETUP_BED_IRNA.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER;
    ModalTitleLookupBed: string;
    StaticFilterLookupBed: any[];

    @ViewChild('DateTimePickerTglRequest') DateTimePickerTglRequest: DateTimePickerComponent;

    @Output('onSendFormPermintaanMutasi') onSendFormPermintaanMutasi = new EventEmitter<IRequestMutasiBedModel>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private managementBedRawatInapService: ManagementBedRawatInapService,
    ) { }

    ngOnInit(): void {
        this.onSetFormPermintaanMutasiAttributes();
    }

    onSetFormPermintaanMutasiAttributes(): void {
        this.FormPermintaanMutasiBed = this.formBuilder.group({
            id_setup_room_tujuan: [0, []],
            room_no_tujuan: ["", []],
            id_setup_bed_room_tujuan: [0, []],
            bed_no_tujuan: ["", []],
            nama_kelas_tujuan: ["", []],
            keterangan_request: ["", []],
            tanggal_bed_request: ["", []],
        });
    }

    handleOpenModalPermintaanMutasi(): void {
        let btnOpenModalPermintaanMutasi = document.getElementById("btnOpenModalPermintaanMutasi") as HTMLElement;
        btnOpenModalPermintaanMutasi.click();

        this.handleResetFormPermintaanMutasi();
    }

    handleSelectedLookupRoom(args: IKamarModel): void {
        this.id_setup_room_tujuan.setValue(args.id_setup_room);
        this.room_no_tujuan.setValue(args.room_no);

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

    handleSelectedLookupBed(args: IBedModel): void {
        this.id_setup_bed_room_tujuan.setValue(args.id_setup_bed_room);
        this.bed_no_tujuan.setValue(args.bed_no);
        this.nama_kelas_tujuan.setValue(args.nama_kelas);
    }

    handleCloseModalPermintaanMutasi(): void {
        let btnCloseModalPermintaanMutasi = document.getElementById("btnCloseModalPermintaanMutasi") as HTMLElement;
        btnCloseModalPermintaanMutasi.click();
    }

    handleSubmitPermintaanMutasi(FormPermintaanMutasiBed: any): void {
        FormPermintaanMutasiBed.id_register = this.FormPermintaanMutasiBedAdditionalInfo['id_register'];
        FormPermintaanMutasiBed.id_setup_room_asal = this.FormPermintaanMutasiBedAdditionalInfo['id_setup_room'];
        FormPermintaanMutasiBed.id_setup_bed_room_asal = this.FormPermintaanMutasiBedAdditionalInfo['id_setup_bed_room'];
        FormPermintaanMutasiBed.tanggal_bed_request = this.utilityService.onFormatDate(FormPermintaanMutasiBed.tanggal_bed_request);

        this.onSendFormPermintaanMutasi.emit(FormPermintaanMutasiBed);
    }

    handleResetFormPermintaanMutasi(): void {
        this.FormPermintaanMutasiBed.reset();

        this.id_setup_room_tujuan.setValue(0);
        this.room_no_tujuan.setValue("");
        this.id_setup_bed_room_tujuan.setValue(0);
        this.bed_no_tujuan.setValue("");
        this.nama_kelas_tujuan.setValue("");
        this.keterangan_request.setValue("");
        this.tanggal_bed_request.setValue("");

        let no_register = document.getElementById("no_register") as HTMLInputElement;
        no_register.value = this.FormPermintaanMutasiBedAdditionalInfo['no_register'];

        let nama_pasien = document.getElementById("nama_pasien") as HTMLInputElement;
        nama_pasien.value = this.FormPermintaanMutasiBedAdditionalInfo['nama_pasien'];

        let room_no_awal = document.getElementById("room_no_awal") as HTMLInputElement;
        room_no_awal.value = this.FormPermintaanMutasiBedAdditionalInfo['room_no'];

        let bed_no_awal = document.getElementById("bed_no_awal") as HTMLInputElement;
        bed_no_awal.value = this.FormPermintaanMutasiBedAdditionalInfo['bed_no'];

        let nama_kelas_awal = document.getElementById("nama_kelas_awal") as HTMLInputElement;
        nama_kelas_awal.value = this.FormPermintaanMutasiBedAdditionalInfo['nama_kelas'];

        this.LookupRoomRequest.resetValue();

        this.LookupBedRequest.resetValue();
    }

    get id_setup_room_tujuan(): AbstractControl { return this.FormPermintaanMutasiBed.get("id_setup_room_tujuan"); }
    get room_no_tujuan(): AbstractControl { return this.FormPermintaanMutasiBed.get("room_no_tujuan"); }
    get id_setup_bed_room_tujuan(): AbstractControl { return this.FormPermintaanMutasiBed.get("id_setup_bed_room_tujuan"); }
    get bed_no_tujuan(): AbstractControl { return this.FormPermintaanMutasiBed.get("bed_no_tujuan"); }
    get nama_kelas_tujuan(): AbstractControl { return this.FormPermintaanMutasiBed.get("nama_kelas_tujuan"); }
    get keterangan_request(): AbstractControl { return this.FormPermintaanMutasiBed.get("keterangan_request"); }
    get tanggal_bed_request(): AbstractControl { return this.FormPermintaanMutasiBed.get("tanggal_bed_request"); }
}
