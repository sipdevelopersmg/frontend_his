import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { IInfoKematianModel } from 'src/app/modules/PIS/models/IRNA/surat_pengantar_pembayaran.model';
import SuratPengantarPembayaranService from 'src/app/modules/PIS/services/IRNA/surat-pengantar-pembayaran/surat-pengantar-pembayaran.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-detail-info-kematian',
    templateUrl: './detail-info-kematian.component.html',
    styleUrls: ['./detail-info-kematian.component.css']
})
export class DetailInfoKematianComponent implements OnInit {

    @Input("DetailInformasiKematianPasien") DetailInformasiKematianPasien: any;

    FormDetailKematian: FormGroup;

    @ViewChild("DropdownStatusMeninggal") DropdownStatusMeninggal: DropDownListComponent;
    DropdownStatusMeninggalDatasource: any[];
    DropdownStatusMeninggalFields: any;

    @Output("onSendFormDetailKematian") onSendFormDetailKematian = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private suratPengantarPembayaranService: SuratPengantarPembayaranService,
    ) { }

    ngOnInit(): void {
        this.onSetFormDetailKematianAttributes();

        this.DropdownStatusMeninggalDatasource = [
            { text: 'OPNAME', value: 'OPNAME' },
            { text: 'SAAT MASUK', value: 'SAAT MASUK' },
        ];

        this.DropdownStatusMeninggalFields = { text: 'text', value: 'value' };
    }

    onSetFormDetailKematianAttributes(): void {
        this.FormDetailKematian = this.formBuilder.group({
            id_register: [0, []],
            tanggal_meninggal: ["", []],
            catatan: ["", []],
            status: ["", []],
        });
    }

    handleOpenModalDetailKematian(): void {
        let btnOpenModalDetailKematian = document.getElementById("btnOpenModalDetailKematian") as HTMLElement;
        btnOpenModalDetailKematian.click();

        setTimeout(() => {
            this.onSetFormDetailKematianAdditionalInfo();
        }, 500);
    }

    onSetFormDetailKematianAdditionalInfo(): void {
        let no_rekam_medis = document.getElementById("no_rekam_medis") as HTMLInputElement;
        no_rekam_medis.value = this.DetailInformasiKematianPasien['no_rekam_medis'];

        let no_register = document.getElementById("no_register") as HTMLInputElement;
        no_register.value = this.DetailInformasiKematianPasien['no_register'];

        let nama_dokter = document.getElementById("nama_dokter") as HTMLInputElement;
        nama_dokter.value = this.DetailInformasiKematianPasien['nama_dokter'];

        let room_no = document.getElementById("room_no") as HTMLInputElement;
        room_no.value = this.DetailInformasiKematianPasien['room_no'];

        let bed_no = document.getElementById("bed_no") as HTMLInputElement;
        bed_no.value = this.DetailInformasiKematianPasien['bed_no'];

        let tanggal_masuk = document.getElementById("tanggal_masuk") as HTMLInputElement;
        tanggal_masuk.value = this.DetailInformasiKematianPasien['tgl_admisi'];

        let umur = document.getElementById("umur") as HTMLInputElement;
        umur.value = this.DetailInformasiKematianPasien['umur'];

        this.onGetDetailKematianByIdRegister(this.DetailInformasiKematianPasien['id_register']);
    }

    onGetDetailKematianByIdRegister(id_register: number): void {
        this.suratPengantarPembayaranService.onGetInfoKematianByIdRegister(id_register)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.status.setValue(result.data.status);
                    this.tanggal_meninggal.setValue(result.data.tanggal_meninggal);
                    this.catatan.setValue(result.data.catatan);
                }
            });
    }

    handleCloseModalDetailKematian(): void {
        let btnCloseModalDetailKematian = document.getElementById("btnCloseModalDetailKematian") as HTMLElement;
        btnCloseModalDetailKematian.click();
    }

    handleSubmitDetailKematian(FormDetailKematian: IInfoKematianModel): void {
        FormDetailKematian.id_register = this.DetailInformasiKematianPasien['id_register'];
        FormDetailKematian.tanggal_meninggal = this.utilityService.onFormatDate(FormDetailKematian.tanggal_meninggal);

        this.onSendFormDetailKematian.emit(FormDetailKematian);
    }

    get id_register(): AbstractControl { return this.FormDetailKematian.get("id_register"); }
    get tanggal_meninggal(): AbstractControl { return this.FormDetailKematian.get("tanggal_meninggal"); }
    get catatan(): AbstractControl { return this.FormDetailKematian.get("catatan"); }
    get status(): AbstractControl { return this.FormDetailKematian.get("status"); }
}
