import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { PemusnahanTanpaEdService } from '../../../services/pemusnahan-tanpa-ed/pemusnahan-tanpa-ed.service';
import * as configGrid from './json/detailItem.json'
import {Location} from '@angular/common'

@Component({
  selector: 'app-view-pemusnahan-tanpa-ed',
  templateUrl: './view-pemusnahan-tanpa-ed.component.html',
  styleUrls: ['./view-pemusnahan-tanpa-ed.component.css']
})
export class ViewPemusnahanTanpaEdComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Batal', Icons1: 'fa-times' },
  ];

  ConfigGrid = configGrid;
  id:any;

  modalRef: BsModalRef;

  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
  @ViewChild('modalClosed') modalClosed: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public pemusnahanTanpaEdService:PemusnahanTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private utilityService:UtilityService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_pemusnahan_stok: ["", ],
      tanggal_pemusnahan_stok:[null, ],
      nama_stockroom: ["", ],
      keterangan: ["", ],
      total_transaksi: [0, ],
      jumlah_item: [0, ],
    });
  }

  ngAfterViewInit(): void {
    let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = id
    this.onLoadDetailData(id);
  }

  onLoadDetailData(id){
      this.pemusnahanTanpaEdService.onGetById(id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_pemusnahan_stok     :result.data.nomor_pemusnahan_stok,
            tanggal_pemusnahan_stok   : result.data.tanggal_pemusnahan_stok,
            nama_stockroom            :result.data.nama_stockroom,
            keterangan                :result.data.keterangan,
            total_transaksi           :result.data.total_transaksi,
            jumlah_item               :result.data.jumlah_item,
          })
          this.pemusnahanTanpaEdService.setDetail(id);
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
    this.pemusnahanTanpaEdService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.pemusnahanTanpaEdService.Batal(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Batalkan', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

}
