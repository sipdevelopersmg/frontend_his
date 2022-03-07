import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { AssemblyTanpaEdService } from '../../../services/assembly-tanpa-ed/assembly-tanpa-ed.service';
import * as configGrid from './json/detailItem.json'
import {Location} from '@angular/common'

@Component({
  selector: 'app-view-assembly-tanpa-ed',
  templateUrl: './view-assembly-tanpa-ed.component.html',
  styleUrls: ['./view-assembly-tanpa-ed.component.css']
})
export class ViewAssemblyTanpaEdComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
  ];

  ConfigGrid = configGrid;
  id:any;

  modalRef: BsModalRef;

  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;
  @ViewChild('modalClosed') modalClosed: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public assemblyTanpaEdService:AssemblyTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private utilityService:UtilityService,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_assembly: ["", ],
      tanggal_assembly:[null, ],
      nama_stockroom: ["", ],
      keterangan_assembly: ["", ],
      kode_item: ["", ],
      nama_item: ["", ],
      batch_number: ["", ],
      expired_date: [null, ],
      qty: [0, ],
    });
  }

  ngAfterViewInit(): void {
    let header_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = header_id
    this.onLoadDetailData(header_id);
  }

  onLoadDetailData(header_id){
      this.assemblyTanpaEdService.onGetById(header_id).subscribe((result)=>{
          this.formInput.setValue({
            nomor_assembly        :result.data.nomor_assembly,
            tanggal_assembly      :result.data.tanggal_assembly,
            nama_stockroom        :result.data.nama_stockroom,
            keterangan_assembly   :result.data.keterangan_assembly,
            kode_item             :result.data.kode_item,
            nama_item             :result.data.nama_item,
            batch_number          :result.data.batch_number,
            expired_date          :result.data.expired_date,
            qty                   :result.data.qty,
          })
          this.assemblyTanpaEdService.setDetail(header_id);
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
    this.assemblyTanpaEdService.Validation(this.id).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Validasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
        });
    })
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.assemblyTanpaEdService.Cancel(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

}
