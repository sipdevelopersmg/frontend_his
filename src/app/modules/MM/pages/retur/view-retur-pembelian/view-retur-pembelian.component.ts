import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { ReturPembelianService } from '../../../services/retur/retur-pembelian.service';
import * as configGrid from './json/detailItem.json';
import { Location } from '@angular/common';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-retur-pembelian',
  templateUrl: './view-retur-pembelian.component.html',
  styleUrls: ['./view-retur-pembelian.component.css']
})
export class ViewReturPembelianComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
  ];
  
  modalRef: BsModalRef;
  id:any;
  ConfigGrid = configGrid;
  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public returPembelianService:ReturPembelianService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private utilityService:UtilityService,

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_retur_pembelian: ['', []],
      tanggal_retur_pembelian: [null, []],
      tanggal_jatuh_tempo_pelunasan_retur : [null, []],
      nama_stockroom: [0, []],
      mekanisme_retur: [0, []],
      nama_supplier: [0, []],
      keterangan: ['', []],
      jumlah_item_retur: [0, []],
      total_transaksi_retur: [0, []],
    });
  }

  ngAfterViewInit(): void {
    let retur_pembelian_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = retur_pembelian_id
    this.onLoadDetailData(retur_pembelian_id);
  }

  onLoadDetailData(retur_pembelian_id){
      this.returPembelianService.onGetById(retur_pembelian_id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_retur_pembelian     :result.data.nomor_retur_pembelian,
            tanggal_retur_pembelian   : result.data.tanggal_retur_pembelian,
            tanggal_jatuh_tempo_pelunasan_retur :result.data.tanggal_jatuh_tempo_pelunasan_retur,
            nama_stockroom            :result.data.nama_stockroom,
            nama_supplier             :result.data.nama_supplier,
            mekanisme_retur           :result.data.mekanisme_retur,
            keterangan                :result.data.keterangan,
            total_transaksi_retur     :result.data.total_transaksi_retur,
            jumlah_item_retur         :result.data.jumlah_item_retur,
          })
          this.returPembelianService.setDetail(retur_pembelian_id);
      });
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
      case 'Back':
        this.location.back();
        break;
      case 'Validasi':
          Swal.fire({
            title: 'Apakah anda yakin ingin validasi data?',
            text: "",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya Validasi',
            cancelButtonText: 'Tidak',
            focusCancel: true,
          }).then((result) => {
            if (result.isConfirmed) {
              this.onValidation();
            }
          });
        break;
      case 'Cancel':
        this.modalRef = this.modalService.show(
            this.modalCanceled,
            Object.assign({}, { class: 'modal-lg' })
        );
        break;
      default:
        break;
    }
  }
  onValidation(): void {
    this.returPembelianService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.returPembelianService.Cancel(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }
}
