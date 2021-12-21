import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { RefundObatIrjaService } from '../../../services/refund-obat/refund-obat-irja/refund-obat-irja.service';
import * as configGrid from './json/detailItem.json'
import { Location } from '@angular/common'
import { RefundObatIrdaService } from '../../../services/refund-obat/refund-obat-irda/refund-obat-irda.service';

@Component({
  selector: 'app-refund-obat-irda-detail',
  templateUrl: './refund-obat-irda-detail.component.html',
  styleUrls: ['./refund-obat-irda-detail.component.css']
})
export class RefundObatIrdaDetailComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' }
  ];

  ConfigGrid = configGrid;
  id:any;

  modalRef: BsModalRef;

  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
  @ViewChild('modalClosed') modalClosed: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public refundObatIrdaService:RefundObatIrdaService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private utilityService:UtilityService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_retur_penjualan_obat: ["", ],
      tanggal_retur_penjualan_obat:[null, ],
      nama_outlet: ["", ],
      keterangan_retur_penjualan_obat: ["", ],
      jumlah_item_retur: [0, ],
    });
  }

  ngAfterViewInit(): void {
    let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = parseInt(id);
    console.log(id);
    this.onLoadDetailData(id);
  }

  onLoadDetailData(id){
      this.refundObatIrdaService.onGetById(id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_retur_penjualan_obat      :result.data.nomor_retur_penjualan_obat,
            tanggal_retur_penjualan_obat    :result.data.tanggal_retur_penjualan_obat,
            nama_outlet                     :result.data.nama_outlet,
            keterangan_retur_penjualan_obat :result.data.keterangan_retur_penjualan_obat,
            jumlah_item_retur               :result.data.jumlah_item_retur,
          })
          this.refundObatIrdaService.setDetail(id);
      });
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
          this.location.back();
          break;
        case 'Validasi':
            Swal.fire({
              title: 'Apakah anda yakin ingin validasi?',
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
    this.refundObatIrdaService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.refundObatIrdaService.Cancel(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Refund Berhasil Di Cancel', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

}
