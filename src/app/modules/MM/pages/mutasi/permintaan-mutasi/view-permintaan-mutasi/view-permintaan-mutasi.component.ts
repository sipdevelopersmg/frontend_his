import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PermintaanMutasiService } from 'src/app/modules/MM/services/mutasi/permintaan-mutasi/permintaan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as configGrid from './json/detailItem.json';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-permintaan-mutasi',
  templateUrl: './view-permintaan-mutasi.component.html',
  styleUrls: ['./view-permintaan-mutasi.component.css']
})
export class ViewPermintaanMutasiComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  ConfigGrid = configGrid;

  constructor(
    private formBuilder: FormBuilder,
    public permintaanMutasiService:PermintaanMutasiService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_mutasi: ["", ],
      tanggal_mutasi: [null, ],
      nama_stockroom_pemberi: [0, ],
      nama_stockroom_penerima: [0, ],
      total_transaksi: [0, ],
      jumlah_item: [0, ],
    });
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    console.log(pemesanan_id);
    this.onLoadDetailData(pemesanan_id);
  }

  onLoadDetailData(pemesanan_id){
      this.permintaanMutasiService.onGetById(pemesanan_id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_mutasi           :result.data.nomor_mutasi,
            tanggal_mutasi         :result.data.tanggal_mutasi,
            nama_stockroom_pemberi   :result.data.nama_stockroom_pemberi,
            nama_stockroom_penerima  :result.data.nama_stockroom_penerima,
            total_transaksi        :result.data.total_transaksi,
            jumlah_item            :result.data.jumlah_item,
          })
          this.permintaanMutasiService.setDetail(pemesanan_id);
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
