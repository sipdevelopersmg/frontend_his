import { Component, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
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

    @ViewChild('submitForm') submitForm = new EventEmitter<any>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
    ) { }

    ngOnInit(): void {
        this.FormUpdateStatus = this.formBuilder.group({
            id_person: [0, []],
            nama_pasien: ['', []],
            no_rekam_medis: ['', []],
            nama_debitur: ['', []],
            nama_kelas: ['', []],
            tgl_rencana_inap: ['', []],
            keterangan_batal: ['', []]
        });
    }

    handleOpenModalDialog(): void {
        const btnOpenModalUpdateStatusBatal = document.getElementById('btnOpenModalUpdateStatusBatal') as HTMLElement;
        btnOpenModalUpdateStatusBatal.click();

        this.onMapInformasiPasien(this.InformasiPasien);
    }

    onMapInformasiPasien(informasiPasien: IAntrianRegulerPemesananBedModel): void {
        this.nama_pasien.setValue(informasiPasien.nama_pasien);
        this.no_rekam_medis.setValue(informasiPasien.no_rekam_medis);
        this.nama_debitur.setValue(informasiPasien.nama_debitur);
        this.nama_kelas.setValue(informasiPasien.nama_kelas);
        this.tgl_rencana_inap.setValue(this.utilityService.onFormatDate(informasiPasien.tgl_rencana_inap, 'Do/MM/yyyy'));
    }

    handleCloseModalDialog(): void {
        let btnCloseModalUpdateStatusBatal = document.getElementById("btnCloseModalUpdateStatusBatal") as HTMLElement;
        btnCloseModalUpdateStatusBatal.click();

        this.onResetFormUpdateStatus();
    }

    onResetFormUpdateStatus(): void {
        this.FormUpdateStatus.reset();
        this.nama_pasien.setValue('');
        this.no_rekam_medis.setValue('');
        this.nama_debitur.setValue('');
        this.nama_kelas.setValue('');
        this.tgl_rencana_inap.setValue('');
        this.keterangan_batal.setValue('');
    }

    handleSubmitUpdateStatusAntrianBatal(FormUpdateStatus: any): void {
        const data = {
            status: 'batal',
            parameter: FormUpdateStatus
        };

        this.submitForm.emit(data);
    }

    get nama_pasien(): AbstractControl { return this.FormUpdateStatus.get('nama_pasien') };
    get no_rekam_medis(): AbstractControl { return this.FormUpdateStatus.get('no_rekam_medis') };
    get nama_debitur(): AbstractControl { return this.FormUpdateStatus.get('nama_debitur') };
    get nama_kelas(): AbstractControl { return this.FormUpdateStatus.get('nama_kelas') };
    get tgl_rencana_inap(): AbstractControl { return this.FormUpdateStatus.get('tgl_rencana_inap') };
    get keterangan_batal(): AbstractControl { return this.FormUpdateStatus.get('keterangan_batal') };
}
