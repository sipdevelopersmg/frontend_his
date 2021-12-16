import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PermintaanMutasiService } from 'src/app/modules/MM/services/mutasi/permintaan-mutasi/permintaan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as configGrid from './json/detailItem.json';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PersetujuanMutasiService } from 'src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-view-permintaan-mutasi',
    templateUrl: './view-permintaan-mutasi.component.html',
    styleUrls: ['./view-permintaan-mutasi.component.css']
})
export class ViewPermintaanMutasiComponent implements OnInit {

    formInput: FormGroup;

    inputFieldState = 'detail';

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
        { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
    ];

    modalRef: BsModalRef;
    ConfigGrid = configGrid;

    @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
    public id: number = 0;

    constructor(
        private formBuilder: FormBuilder,
        public permintaanMutasiService: PermintaanMutasiService,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private modalService: BsModalService,
        private utilityService: UtilityService,
        private persetujuanMutasiService: PersetujuanMutasiService,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.formInput = this.formBuilder.group({
            nomor_mutasi: ["",],
            tanggal_mutasi: [null,],
            nama_stockroom_pemberi: [0,],
            nama_stockroom_penerima: [0,],
            total_transaksi: [0,],
            jumlah_item: [0,],
        });
    }

    ngAfterViewInit(): void {
        let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        this.onLoadDetailData(pemesanan_id);
    }

    onLoadDetailData(pemesanan_id: any) {
        this.permintaanMutasiService.onGetById(pemesanan_id).subscribe((result) => {
            this.id = parseInt(pemesanan_id);
            this.formInput.setValue({
                nomor_mutasi: result.data.nomor_permintaan_mutasi,
                tanggal_mutasi: result.data.tanggal_permintaan_mutasi,
                nama_stockroom_pemberi: result.data.nama_stockroom_pemberi,
                nama_stockroom_penerima: result.data.nama_stockroom_penerima,
                total_transaksi: result.data.total_transaksi,
                jumlah_item: result.data.jumlah_item,
            })
            this.permintaanMutasiService.setDetail(pemesanan_id);
        });
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            case "Cancel":
                this.modalRef = this.modalService.show(
                    this.modalCanceled,
                    Object.assign({}, { class: 'modal-lg' })
                );
                break;
            default:
                break;
        }
    }

    onCalceled(): void {
        let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
        this.persetujuanMutasiService.Cancel(this.id, reason_canceled).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
                .then(() => {
                    this.onLoadDetailData(this.id);
                    this.modalRef.hide();
                });
        })
    }
}
