import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject } from 'rxjs';
import { AuditStokOpnameTanpaSettingService } from 'src/app/modules/MM/services/stok_opname/audit_stok_opname_tanpa_setting/audit-stok-opname-tanpa-setting.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-view-audit-stok-opname-tanpa-setting',
  templateUrl: './view-audit-stok-opname-tanpa-setting.component.html',
  styleUrls: ['./view-audit-stok-opname-tanpa-setting.component.css']
})
export class ViewAuditStokOpnameTanpaSettingComponent implements OnInit {

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
  ChildGrid: GridModel;
  dataScourceGridChild: any[] = [];
  @ViewChild('gridDetail') gridDetail: GridComponent;

  constructor(
    private formBuilder: FormBuilder,
    public auditStokOpnameTanpaSettingService:AuditStokOpnameTanpaSettingService,
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

    this.ChildGrid = {
      dataSource: this.dataScourceGridChild,
      queryString: "id_item",
      rowHeight: 30,
      allowResizing: true,
      allowTextWrap: false,
      textWrapSettings: { wrapMode: 'Both' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      columns: [
          { field: "batch_number", headerText: 'Batch Number', width: 100 },
          { field: "expired_date", headerText: 'Expired Date',type:'Date',format:'dd MMMM yyyy', textAlign: 'Right', width: 80, allowEditing: true,editType:'datepickeredit' },
          { field: "qty_fisik", headerText: 'Qty Fisik', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "qty_sistem_capture_stok", headerText: 'Qty capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "nama_satuan", headerText: 'nama_satuan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
          { field: "harga_jual", headerText: 'Harga Jual', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_fisik", headerText: 'Nominal', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_sistem_capture_stok", headerText: 'Sub total sistem capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "keterangan", headerText: 'Keterangan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
      ],
    }
  }

  ngAfterViewInit(): void {
    let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    this.id = id
    this.onLoadDetailData(id);
  }

  onLoadDetailData(id){
    this.auditStokOpnameTanpaSettingService.onGetById(id).subscribe((result)=>{
      this.formInput.setValue({
        nomor_audit_stok_opname :result.data.nomor_audit_stok_opname,
        nama_stockroom          :result.data.nama_stockroom,
        nama_rak_storage        :result.data.nama_rak_storage,
        waktu_capture_stok      :result.data.waktu_capture_stok,
        keterangan_entry        :result.data.keterangan_entry,
      })
      this.dataScourceGridChild = [];
      result.data.details.map((item) => {
          this.dataScourceGridChild.push(...item.batchs);
      });
      this.dataSourceGrid.next(result.data.details);
      this.ChildGrid = {
        dataSource: this.dataScourceGridChild,
        queryString: "id_item",
        rowHeight: 30,
        allowResizing: true,
        allowTextWrap: true,
        textWrapSettings: { wrapMode: 'Both' },
        columns: [
          { field: "batch_number", headerText: 'Batch Number', width: 100 },
          { field: "expired_date", headerText: 'Expired Date',type:'Date',format:'dd MMMM yyyy', textAlign: 'Right', width: 80, allowEditing: true,editType:'datepickeredit' },
          { field: "qty_fisik", headerText: 'Qty Fisik', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "qty_sistem_capture_stok", headerText: 'Qty capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "nama_satuan", headerText: 'nama_satuan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
          { field: "harga_jual", headerText: 'Harga Jual', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_fisik", headerText: 'Nominal', visible: true, allowEditing: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "sub_total_sistem_capture_stok", headerText: 'Sub total sistem capture', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
          { field: "keterangan", headerText: 'Keterangan', visible: true, headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
        ]
      }
    });
  }

  onDataBound() {
    this.gridDetail.detailRowModule.expandAll();
  }

  handleRowDataBound(args: any): void {
    let nama_item = args.data.nama_item;
    if(typeof nama_item !== 'undefined'){
      args.row.classList.add('e-validation-background');
    }
  }

  onFinalisasi(){
    let keterangan_proses = (<HTMLInputElement>document.getElementsByName("keterangan_proses")[0]).value;
    this.auditStokOpnameTanpaSettingService.Finalisasi({
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
