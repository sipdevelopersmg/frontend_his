import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { AuditStokOpnameTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/stok-opname-tanpa-ed/audit-stok-opname-tanpa-ed/audit-stok-opname-tanpa-ed.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-audit-stok-opname-tanpa-ed',
  templateUrl: './view-audit-stok-opname-tanpa-ed.component.html',
  styleUrls: ['./view-audit-stok-opname-tanpa-ed.component.css']
})
export class ViewAuditStokOpnameTanpaEdComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Finalisasi', Captions: 'Finalisasi', Icons1: 'fa-check' },
  ];

  id:any;

  modalRef: BsModalRef;
  @ViewChild('modalFinalisasi') modalFinalisasi: TemplateRef<any>;

  dataSourceGrid = new BehaviorSubject([]);
  dataScourceGridChild: any[] = [];
  @ViewChild('gridDetail') gridDetail: GridComponent;

  constructor(
    private formBuilder: FormBuilder,
    public auditStokOpnameTanpaEdService:AuditStokOpnameTanpaEdService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private modalService: BsModalService,
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_audit_stok_opname:[''],
      nama_stockroom:[''],
      nama_rak_storage:[''],
      waktu_capture_stok:[null],
      keterangan_entry:[''],
    });
  }

  ngAfterViewInit(): void {
    let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = id
    this.onLoadDetailData(id);
  }

  onLoadDetailData(id){
    this.auditStokOpnameTanpaEdService.onGetById(id).subscribe((result)=>{
      this.formInput.setValue({
        nomor_audit_stok_opname :result.data.nomor_audit_stok_opname,
        nama_stockroom          :result.data.nama_stockroom,
        nama_rak_storage        :result.data.nama_rak_storage,
        waktu_capture_stok      :result.data.waktu_capture_stok,
        keterangan_entry        :result.data.keterangan_entry,
      })
      this.dataSourceGrid.next(result.data.details);
    });
  }

  onDataBound() {
    
  }

  handleRowDataBound(args: any): void {
    
  }

  onFinalisasi(){
    let keterangan_proses = (<HTMLInputElement>document.getElementsByName("keterangan_proses")[0]).value;
    this.auditStokOpnameTanpaEdService.Finalisasi({
      keterangan_proses     : keterangan_proses,
      audit_stok_opname_id  : this.id
    }).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Proses Finalisasi', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
          this.location.back();
          break;
        case 'Finalisasi':
          this.modalRef = this.modalService.show(
            this.modalFinalisasi,
            Object.assign({}, { class: 'modal-lg' })
          );
          break
        default:
          break;
    }
  }

}
