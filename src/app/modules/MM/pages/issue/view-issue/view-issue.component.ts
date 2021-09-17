import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemakaianInternalService } from '../../../services/issue/pemakaian-internal.service';
import * as configGrid from './json/detailItem.json';

@Component({
  selector: 'app-view-issue',
  templateUrl: './view-issue.component.html',
  styleUrls: ['./view-issue.component.css']
})
export class ViewIssueComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  ConfigGrid = configGrid;

  constructor(
    private formBuilder: FormBuilder,
    public pemakaianInternalService:PemakaianInternalService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_pemakaian_internal: ["", ],
      tanggal_pemakaian_internal: [null, ],
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
    this.pemakaianInternalService.onGetById(pemesanan_id).subscribe((result)=>{
        this.formInput.setValue({
          nomor_pemakaian_internal      :result.data.nomor_pemakaian_internal,
          tanggal_pemakaian_internal    :result.data.tanggal_pemakaian_internal,
          nama_stockroom                :result.data.nama_stockroom,
          keterangan_pemakaian_internal :result.data.keterangan_pemakaian_internal,
          pic_pemberi                   :result.data.pic_pemberi,
          pic_penerima                  :result.data.pic_penerima,
          jumlah_item                   :result.data.jumlah_item,
          total_transaksi               :result.data.total_transaksi,
        })
        this.pemakaianInternalService.setDetail(pemesanan_id);
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
