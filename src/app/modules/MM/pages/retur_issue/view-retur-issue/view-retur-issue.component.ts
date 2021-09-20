import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ReturIssueService } from '../../../services/retur-issue/retur-issue.service';
import * as configGrid from './json/detailItem.json'
import { Location } from '@angular/common'
@Component({
  selector: 'app-view-retur-issue',
  templateUrl: './view-retur-issue.component.html',
  styleUrls: ['./view-retur-issue.component.css']
})
export class ViewReturIssueComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
  ];

  ConfigGrid = configGrid;

  constructor(
    private formBuilder: FormBuilder,
    public returIssueService:ReturIssueService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_retur_pemakaian_internal: ["", ],
      tanggal_retur_pemakaian_internal: [null, ],
      nama_stockroom: [0, ],
      keterangan_retur_pemakaian_internal: [0, ],
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
    this.returIssueService.onGetById(pemesanan_id).subscribe((result)=>{
        this.formInput.setValue({
          nomor_retur_pemakaian_internal      :result.data.nomor_retur_pemakaian_internal,
          tanggal_retur_pemakaian_internal    :result.data.tanggal_retur_pemakaian_internal,
          nama_stockroom                      :result.data.nama_stockroom,
          keterangan_retur_pemakaian_internal :result.data.keterangan_retur_pemakaian_internal,
          pic_pemberi                         :result.data.pic_pemberi,
          pic_penerima                        :result.data.pic_penerima,
          jumlah_item                         :result.data.jumlah_item,
          total_transaksi                     :result.data.total_transaksi,
        })
        this.returIssueService.setDetail(pemesanan_id);
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
