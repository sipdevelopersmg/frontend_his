import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common'
import * as configGrid from './json/detailItem.json'
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { PemesananService } from 'src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-pemesanan',
  templateUrl: './view-pemesanan.component.html',
  styleUrls: ['./view-pemesanan.component.css']
})

export class ViewPemesananComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
    { Id: 'Close', Captions: 'Close', Icons1: 'fa-power-off' },
  ];

  ConfigGrid = configGrid;
  id:any;

  modalRef: BsModalRef;

  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
  @ViewChild('modalClosed') modalClosed: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public pemesananService:PemesananService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private utilityService:UtilityService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_pemesanan: ["", ],
      tanggal_pemesanan:[null, ],
      tanggal_expired_pemesanan: [null, ],
      nama_stockroom: [0, ],
      nama_supplier: ["", ],
      keterangan: ["", ],
      sub_total_1: [0, ],
      total_disc: [0, ],
      sub_total_2: [0, ],
      total_tax: [0, ],
      total_transaksi_pesan: [0, ],
      jumlah_item_pesan: [0, ],
      user_inputed: [1,[]],
    });
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = pemesanan_id
    this.onLoadDetailData(pemesanan_id);
  }

  onLoadDetailData(pemesanan_id){
      this.pemesananService.onGetById(pemesanan_id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_pemesanan           :result.data.nomor_pemesanan,
            tanggal_pemesanan         : result.data.tanggal_pemesanan,
            tanggal_expired_pemesanan :result.data.tanggal_expired_pemesanan,
            nama_stockroom            :result.data.nama_stockroom,
            nama_supplier             :result.data.nama_supplier,
            keterangan                :result.data.keterangan,
            sub_total_1               :result.data.sub_total_1,
            total_disc                :result.data.total_disc,
            sub_total_2               :result.data.sub_total_2,
            total_tax                 :result.data.total_tax,
            total_transaksi_pesan     :result.data.total_transaksi_pesan,
            jumlah_item_pesan         :result.data.jumlah_item_pesan,
            user_inputed              :1,
          })
          this.pemesananService.setDetail(pemesanan_id);
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
        case 'Close':
          this.modalRef = this.modalService.show(
            this.modalClosed,
            Object.assign({}, { class: 'modal-lg' })
          );
          break;
        default:
          break;
    }
  }

  onValidation(): void {
    this.pemesananService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.pemesananService.Cancel(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

  onClosed(): void{
    let reason_closed = (<HTMLInputElement>document.getElementsByName("reason_closed")[0]).value;
    this.pemesananService.Close(this.id,reason_closed).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Close', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

}