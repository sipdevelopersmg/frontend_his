import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InputKontrakPengadaanService } from 'src/app/modules/MM/services/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { Location } from '@angular/common'
import * as configGrid from './json/detailItem.json'

@Component({
    selector: 'app-view-kontrak-pengadaan',
    templateUrl: './view-kontrak-pengadaan.component.html',
    styleUrls: ['./view-kontrak-pengadaan.component.css']
})
export class ViewKontrakPengadaanComponent implements OnInit {
    formKontrak: FormGroup;
    inputFieldState = 'detail';
    ButtonNav: ButtonNavModel[] = [
        { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    ];

    ConfigGrid = configGrid;

    constructor(
        private formBuilder: FormBuilder,
        public inputKontrakPengadaanService: InputKontrakPengadaanService,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private location: Location,

    ) { }

    ngOnInit(): void {
        this.formKontrak = this.formBuilder.group({
            nama_supplier: ["",],
            nomor_kontrak_spjb: ["",],
            nomor_kontrak: ["",],
            tanggal_ttd_kontrak: [null,],
            tanggal_berlaku_kontrak: [null,],
            tanggal_berakhir_kontrak: [null,],
            judul_kontrak: ["",],
            tahun_anggaran: ["",],
            keterangan: ["",],
            total_transaksi_kontrak: [0,],
            jumlah_item_kontrak: [0,],
            user_inputed: [1, []],
        });
    }

    ngAfterViewInit(): void {
        let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(kontrak_id);
        this.onLoadDetailData(kontrak_id);
    }

    onLoadDetailData(kontrak_id) {
        this.inputKontrakPengadaanService.onGetById(kontrak_id).subscribe((result) => {
            this.formKontrak.setValue({
                nama_supplier: result.data.nama_supplier,
                nomor_kontrak_spjb: result.data.nomor_kontrak_spjb,
                nomor_kontrak: result.data.nomor_kontrak,
                tanggal_ttd_kontrak: result.data.tanggal_ttd_kontrak,
                tanggal_berlaku_kontrak: result.data.tanggal_berlaku_kontrak,
                tanggal_berakhir_kontrak: result.data.tanggal_berakhir_kontrak,
                judul_kontrak: result.data.judul_kontrak,
                tahun_anggaran: result.data.tahun_anggaran,
                keterangan: result.data.keterangan,
                total_transaksi_kontrak: result.data.total_transaksi_kontrak,
                jumlah_item_kontrak: result.data.jumlah_item_kontrak,
                user_inputed: 1,
            })
            this.inputKontrakPengadaanService.setDetail(kontrak_id);
        });
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.location.back();
                break;
            default:
                break;
        }
    }
}
