import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { IAntrianRegulerPemesananBedModel } from 'src/app/modules/PIS/models/IRNA/antrian-reguler-pemesanan-bed.model';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-dialog-update-status-batal',
    templateUrl: './dialog-update-status-batal.component.html',
    styleUrls: ['./dialog-update-status-batal.component.css']
})
export class DialogUpdateStatusBatalComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IAntrianRegulerPemesananBedModel;

    FormUpdateStatus: FormGroup;

    @Output('submitForm') submitForm = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.FormUpdateStatus = this.formBuilder.group({
            id_booking: [0, []],
            nama_pasien: ['', []],
            no_rekam_medis: ['', []],
            nama_debitur: ['', []],
            nama_kelas: ['', []],
            tgl_rencana_inap: ['', []],
            reason_canceled: ['', []]
        });
    }

    handleOpenModalDialog(): void {
        const btnOpenModalUpdateStatusBatal = document.getElementById('btnOpenModalUpdateStatusBatal') as HTMLElement;
        btnOpenModalUpdateStatusBatal.click();

        this.onMapInformasiPasien(this.InformasiPasien);
    }

    onMapInformasiPasien(informasiPasien: IAntrianRegulerPemesananBedModel): void {
        console.log(informasiPasien);
        this.id_booking.setValue(informasiPasien.id_booking);
        this.nama_pasien.setValue(informasiPasien.nama_pasien);
        this.no_rekam_medis.setValue(informasiPasien.no_rekam_medis);
        this.nama_debitur.setValue(informasiPasien.nama_debitur);
        this.nama_kelas.setValue(informasiPasien.nama_kelas);
        this.tgl_rencana_inap.setValue(this.utilityService.onFormatDate(informasiPasien.tgl_rencana_inap, 'Do/MM/yyyy'));
    }

    handleCloseModalDialog(): void {
        let btnCloseModalUpdateStatusBatal = document.getElementById("btnCloseModalUpdateStatusBatal") as HTMLElement;
        this.onResetFormUpdateStatus();
        btnCloseModalUpdateStatusBatal.click();
    }

    onResetFormUpdateStatus(): void {
        this.FormUpdateStatus.reset();
        this.id_booking.setValue(0);
        this.nama_pasien.setValue('');
        this.no_rekam_medis.setValue('');
        this.nama_debitur.setValue('');
        this.nama_kelas.setValue('');
        this.tgl_rencana_inap.setValue('');
        this.reason_canceled.setValue('');
    }

    handleSubmitUpdateStatusAntrianBatal(FormUpdateStatus: any): void {
        const data = {
            status: 'batal',
            parameter: {
                id_booking: FormUpdateStatus.id_booking,
                reason_canceled: FormUpdateStatus.reason_canceled
            }
        };

        this.submitForm.emit(data);
    }

    get id_booking(): AbstractControl { return this.FormUpdateStatus.get('id_booking') };
    get nama_pasien(): AbstractControl { return this.FormUpdateStatus.get('nama_pasien') };
    get no_rekam_medis(): AbstractControl { return this.FormUpdateStatus.get('no_rekam_medis') };
    get nama_debitur(): AbstractControl { return this.FormUpdateStatus.get('nama_debitur') };
    get nama_kelas(): AbstractControl { return this.FormUpdateStatus.get('nama_kelas') };
    get tgl_rencana_inap(): AbstractControl { return this.FormUpdateStatus.get('tgl_rencana_inap') };
    get reason_canceled(): AbstractControl { return this.FormUpdateStatus.get('reason_canceled') };
}
