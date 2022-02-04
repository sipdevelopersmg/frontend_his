import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { ReturPemakaianInternalTanpaEdService } from '../../../services/retur-pemakaian-internal/retur-pemakaian-internal-tanpa-ed.service';
import * as configGrid from './json/detailItem.json'
import {Location} from '@angular/common'
@Component({
  selector: 'app-view-retur-pemakaian-internal',
  templateUrl: './view-retur-pemakaian-internal.component.html',
  styleUrls: ['./view-retur-pemakaian-internal.component.css']
})
export class ViewReturPemakaianInternalComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
  ];

  modalRef: BsModalRef;


  ConfigGrid = configGrid;
  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
  id:number = 0
  constructor(
    private formBuilder: FormBuilder,
    public returPemakaianInternalTanpaEdService:ReturPemakaianInternalTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private utilityService:UtilityService,

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
    this.returPemakaianInternalTanpaEdService.onGetById(pemesanan_id).subscribe((result)=>{
      this.id = parseInt(pemesanan_id);
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
        this.returPemakaianInternalTanpaEdService.setDetail(pemesanan_id);
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
    this.returPemakaianInternalTanpaEdService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void{
    let reason_closed = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.returPemakaianInternalTanpaEdService.Cancel(this.id,reason_closed).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Close', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

}
