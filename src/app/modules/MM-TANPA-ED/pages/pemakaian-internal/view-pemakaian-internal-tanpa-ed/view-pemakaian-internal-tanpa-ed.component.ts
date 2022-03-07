import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemakaianInternalTanpaEdService } from '../../../services/pemakaian-internal/pemakaian-internal-tanpa-ed.service';
import * as configGrid from './json/detailItem.json'
import {Location} from '@angular/common'
@Component({
  selector: 'app-view-pemakaian-internal-tanpa-ed',
  templateUrl: './view-pemakaian-internal-tanpa-ed.component.html',
  styleUrls: ['./view-pemakaian-internal-tanpa-ed.component.css']
})
export class ViewPemakaianInternalTanpaEdComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  ConfigGrid = configGrid;

  constructor(
    private formBuilder: FormBuilder,
    public pemakaianInternalTanpaEdService:PemakaianInternalTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_pemakaian_internal: ["", ],
      tanggal_pemakaian_internal: [null, ],
      time_serah_terima: [null, ],
      nama_stockroom: [0, ],
      keterangan_pemakaian_internal: [0, ],
      pic_pemberi: [0, ],
      pic_penerima: [0, ],
      jumlah_item: [0, ],
      total_transaksi: [0, ],
    });
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    console.log(pemesanan_id);
    this.onLoadDetailData(pemesanan_id);
  }

  onLoadDetailData(pemesanan_id){
    this.pemakaianInternalTanpaEdService.onGetById(pemesanan_id).subscribe((result)=>{
        this.formInput.setValue({
          nomor_pemakaian_internal      :result.data.nomor_pemakaian_internal,
          tanggal_pemakaian_internal    :result.data.tanggal_pemakaian_internal,
          time_serah_terima             :result.data.time_serah_terima,
          nama_stockroom                :result.data.nama_stockroom,
          keterangan_pemakaian_internal :result.data.keterangan_pemakaian_internal,
          pic_pemberi                   :result.data.pic_pemberi,
          pic_penerima                  :result.data.pic_penerima,
          jumlah_item                   :result.data.jumlah_item,
          total_transaksi               :result.data.total_transaksi,
        })
        this.pemakaianInternalTanpaEdService.setDetail(pemesanan_id);
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
