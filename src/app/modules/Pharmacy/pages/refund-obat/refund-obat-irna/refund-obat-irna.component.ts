import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { AddEventArgs, EditSettingsModel, GridComponent, GridModel, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest, BehaviorSubject } from 'rxjs';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as GridLoockUpItem from './json/lookupitem.json'
import * as GridConfig from './json/gridPasien.config.json'
import {Location} from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { SetupItemService } from 'src/app/modules/MM/services/setup-data/setup-item/setup-item.service';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as LookupGridNoRegistrasi from './json/LookupGridNoRegistrasi.json'
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { RefundObatIrnaService } from '../../../services/refund-obat/refund-obat-irna/refund-obat-irna.service';
import { SetupOutletService } from '../../../services/setup-data/setup-outlet/setup-outlet.service';
@Component({
  selector: 'app-refund-obat-irna',
  templateUrl: './refund-obat-irna.component.html',
  styleUrls: ['./refund-obat-irna.component.css']
})
export class RefundObatIrnaComponent implements OnInit {
  SetupOutletDropdownField: object = { text: 'nama_outlet', value: 'id_outlet' };
  urlNoRegistrasi = PHARMACY.RETUR_PENJUALAN.RETUR_PENJUALAN_OBAT_IRNA.GET_PASIEN_IRNA_OPEN;
  LookupGridNoRegistrasi = LookupGridNoRegistrasi;
  @ViewChild('LookupNoRegistrasi') LookupNoRegistrasi: OrgInputLookUpComponent;

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fas fa-undo fa-sm' },
    { Id: 'simpan', Captions: 'simpan', Icons1: 'fa-save' },
  ];

  modalRef: BsModalRef;

  GridDataEditSettings: EditSettingsModel = { allowEditing: true };
  GridDetailToolbar: any;
  GridLookUpItem = GridLoockUpItem;
  GridConfig = GridConfig;
  subscriptions: Subscription[] = []


  public satuanParams: IEditCell;
  public satuanElem: HTMLElement;
  public satuanObj: DropDownList;
  counterChildGrid: number = 0;


  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  public childGridSatuan = [];

  detailSelected: any;
  globalListenFunc: Function;
  private currentIndex: number;

  @ViewChild('gridDetail') gridDetail: GridComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;
  @ViewChild('modalQty') modalQty: TemplateRef<any>;
  @ViewChild('modalSatuan') modalSatuan: TemplateRef<any>;
  @ViewChild('modalCanceled') modalCanceled: TemplateRef<any>;

  private id_stockroom :number=0;
  //======= Child

  ChildGrid: GridModel;
  dataSourceGrid = new BehaviorSubject([]);
  dataScourceGridChild: any[] = [];
  totalJumlahItem = new BehaviorSubject(0);
  public itemBatch:any = [];
  public id_item=new BehaviorSubject(0);
  public itemsParams: IEditCell;
  public itemsElem: HTMLElement;
  public itemsObj: DropDownList;    

  //=========
  private id:number=0;
  constructor(
    private formBuilder: FormBuilder,
    public refundObatIrnaService:RefundObatIrnaService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private renderer: Renderer2,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
    private utilityService:UtilityService,
    private setupItemService:SetupItemService,
    public setupOutletService: SetupOutletService,

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
        id_register: ['',],
        depo: ['',],
        debitur: ['',],
        nama_pasien:['',],
        bed:['',],
        no_rm:['',],
        no_register:['',],
        dokter:['',],
        umur:['',],
        alamat:['',],
        poli:['',],
    });

    let id_item = this.id_item;
    let currentChildGird = null;

    this.itemsParams = {
        create:() => {
            this.itemsElem = document.createElement('input');
            return this.itemsElem;
        },
        read: () => {
            return this.itemsObj.text;
        },
        destroy: () => {
            this.itemsObj.destroy();
        },
        write: () => {
            this.setupItemService.onGetEDItem(this.id_stockroom, id_item.value).subscribe((result) => {
                this.itemsObj = new DropDownList({
                    value: '',
                    dataSource: result.data,
                    fields: { value: 'batch_number', text: 'batch_number' },
                    enabled: true,
                    placeholder: 'Select a Batch',
                    floatLabelType: 'Never',
                    change: function (args) {
                        this.setFormGrif(args);
                        id_item.next(args.itemData.id_item);
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
            })
            if(currentChildGird){
                setTimeout(()=>{
                    this.itemsObj.value = currentChildGird.batch_number;
                },500)
            }
        }
    }
    
    let dataSourceChild = this.dataScourceGridChild;
    let counterChildGrid = this.counterChildGrid ;
    let dataSourceGrid = this.dataSourceGrid;
    let totalJumlahItem = this.totalJumlahItem;

    this.ChildGrid = {
        dataSource: this.dataScourceGridChild,
        queryString: "penjualan_obat_detail_id",
        rowHeight: 30,
        allowResizing: true,
        allowTextWrap: false,
        textWrapSettings: { wrapMode: 'Both' },
        toolbar: ['Add','Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: "penjualan_obat_id", headerText: 'penjualan_obat_id', width: 100, visible: false },
            { field: "penjualan_obat_detail_id", headerText: 'penjualan_obat_detail_id', width: 100, visible: false },
            { field: "no_urut", headerText: 'urut', visible: false },
            { field: "id_item", headerText: 'id_item', width: 100, visible: false },
            // { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
            { field: "batch_number", headerText: 'Batch Number', textAlign: 'Right', width: 200 },
            { field: "expired_date", headerText: 'Expired Date', textAlign: 'Right', width: 80, editType:"datepickeredit" ,format:"dd MMMM yyyy" },
            { field: "qty_besar", headerText: 'Banyak', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2'},
            { field: "satuan", headerText: 'Satuan', visible: false, editType: 'dropdownedit', edit: this.satuanParams, width: 200 },
            { field: "isi", headerText: 'Isi', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
            { field: "qty_retur_penjualan_obat", headerText: 'Qty', headerTextAlign: 'Center', textAlign: 'Right', width: 50, format: 'N2', allowEditing: true },
            { field: "nama_satuan", headerText: 'Satuan', headerTextAlign: 'Center', textAlign: 'Left', width: 100, format: 'N2', allowEditing: false , visible: false},
            { field: "harga_satuan_retur", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
            { field: "sub_total", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
        ],
        rowSelected(args){
            currentChildGird = args.data;
        },
        actionBegin(args: AddEventArgs) {
            if (args.requestType === 'add') {
                (args.data as object)['id_item'] = this.parentDetails.parentRowData.id_item;
                (args.data as object)['penjualan_obat_id'] = this.parentDetails.parentRowData.penjualan_obat_id;
                (args.data as object)['penjualan_obat_detail_id'] = this.parentDetails.parentRowData.penjualan_obat_detail_id;
                (args.data as object)['harga_satuan_retur'] = this.parentDetails.parentRowData.harga_satuan;
                (args.data as object)['counterChildGrid'] = counterChildGrid++;
                id_item.next(this.parentDetails.parentRowData.id_item);
            }
            // if (args.requestType === 'beginEdit'){
            //     SelectedDataRacikanObat = args.rowData;
            // }
        },
        actionComplete(args) {
            if (args.requestType === 'save') {
                console.log('complete',args);
                if(args.action === 'add'){
                    dataSourceChild.push(args.data);
                }
                if(args.action === 'edit'){
                    let index = dataSourceChild.map((item) => { return item.counterChildGrid }).indexOf(args.data.counterChildGrid);
                    dataSourceChild[index]=args.data;
                }

                let data = []
                dataSourceGrid.value.forEach((itemPrent,indexPrent)=>{
                    let total = 0
                    dataSourceChild.forEach((item,index)=>{
                        if(itemPrent.id_item==item.id_item){
                            total = total + parseInt(item.qty_retur_penjualan_obat)
                        }
                    })
                    itemPrent.qty_retur = total
                    data.push(itemPrent)
                })                
                // setTimeout(()=>{
                    dataSourceGrid.next(data);
                    totalJumlahItem.next(data.sum('qty_retur'))
                    // console.log(data);
                // },500)
            }

            if (args.requestType === "delete") {
                let index = dataSourceChild.map((item) => { return item.counterChildGrid }).indexOf(args.data[0].counterChildGrid);
                dataSourceChild.splice(index, 1);

                let data = []
                dataSourceGrid.value.forEach((itemPrent,indexPrent)=>{
                    let total = 0
                    dataSourceChild.forEach((item,index)=>{
                        if(itemPrent.id_item==item.id_item){
                            total = total + parseInt(item.qty_pemakaian_internal)
                        }
                    })
                    itemPrent.qty = total
                    data.push(itemPrent)
                })
                setTimeout(()=>{
                    dataSourceGrid.next(data);
                    console.log(data);
                },500)
            }

            
        }
    }

    this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
        if (e.keyCode == 112) {
            this.LookupItem.onOpenModal();
            e.preventDefault();
        }
    });

    this.GridDetailToolbar = [
        { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
    ];

    this.setupOutletService.setDataSource();

  }

  ngAfterViewInit(): void {
    // let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    // console.log(pemesanan_id);
    // this.onLoadDetailData(pemesanan_id);
  }

    onDataBound(){
        this.gridDetail.detailRowModule.expandAll();
    }

  setFormGrif(args):void{
    (<HTMLInputElement>document.getElementsByName("expired_date")[0]).value=args.itemData.expired_date;
    (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value=args.itemData.nama_satuan;
    (<HTMLInputElement>document.getElementsByName("hpp_satuan")[0]).value=args.itemData.harga_satuan_netto;
  }

  heandleSelectedNoRegistrasi(args: any): void {
    this.formInput.setValue({
        id_register     :args.id_register,
        depo            :this.depo.value,
        debitur         :args.nama_debitur,
        nama_pasien     :args.nama_pasien,
        no_rm           :args.no_rekam_medis,
        no_register     :args.no_register,
        dokter          :args.nama_dokter,
        umur            :args.umur,
        alamat          :args.alamat_pasien,
        poli            :args.nama_poli,
        bed             :args.room_descr + ' - ' +args.bed_no,
    })
  }

  handleClickRefesh(){
    if(this.depo.value==''){
        this.utilityService.onShowingCustomAlert('warning','Validasi','Depo belum di pilih')
        return false;
    }
    
    this.refundObatIrnaService.getDetailPenjualan(this.depo.value,this.id_register.value).subscribe((result)=>{
        result.data.map((e,i)=>{
            return e.qty = 0;
        });
        this.dataSourceGrid.next(result.data);
    })
    
  }

  /** untuk identifikasi keyboard down pada grid */
  handleLoadGrid(args: any): void {
    document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
  }

  handleSelectdRow(args: any): void {
    this.currentIndex = args.rowIndex;
    this.datasatuan = args.data.satuans;
    this.detailSelected = args.data
    this.satuanVal = args.data.kode_satuan_besar;
  }

  handleActionCompleted($event) {

    if ($event.requestType == 'save') {
        console.log($event);
        this.refundObatIrnaService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
        this.gridDetail.refresh();
    }
    // console.log('complate parent',this.gridDetail.childGrid.dataSource);
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.refundObatIrnaService.removeDataDetail(this.currentIndex);
          this.gridDetail.refresh();
          setTimeout(() => {
              if (this.currentIndex != 0) {
                  this.gridDetail.selectedRowIndex = 0;
              }
          }, 100)
      };

    //   if (event.keyCode === 111) {
    //       this.onOpenHarga()
    //   }

    //   if (event.keyCode === 109) {
    //       this.onOpenSubtotal()
    //   }

      if (event.keyCode === 107) {
          this.onOpenSatuan()
      }

  }

  onToolbarClick(args: any): void {
    const item = args.item.id;
    switch (item) {
        case 'add':
            this.LookupItem.onOpenModal();
            break;
        default:
            break;
    }
  }


  onOpenQty() {

      const _combine = combineLatest(
          this.modalService.onShow,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());

      this.subscriptions.push(
          this.modalService.onShown.subscribe(() => {
              setTimeout(() => {
                  (<HTMLInputElement>document.getElementById("QtyValueId")).focus();
              }, 100)
          })
      );

      this.subscriptions.push(
          this.modalService.onHidden.subscribe((reason: string | any) => {
              this.gridDetail.selectedRowIndex = this.currentIndex;
              this.gridDetail.selectRows([this.currentIndex]); 
              this.unsubscribe();
          })
      );

      this.subscriptions.push(_combine);

      this.modalRef = this.modalService.show(
          this.modalQty,
          Object.assign({}, { class: 'modal-lg' })
      );

  }


  onOpenSatuan() {
      const _combine = combineLatest(
          this.modalService.onShown,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());

      this.subscriptions.push(
          this.modalService.onShown.subscribe(() => {
              setTimeout(() => {
                  (<HTMLInputElement>document.getElementById("SatuanValueId")).focus();
              }, 100)
          })
      );

      this.subscriptions.push(
          this.modalService.onHidden.subscribe((reason: string | any) => {
              this.gridDetail.selectedRowIndex = this.currentIndex;
              this.gridDetail.selectRows([this.currentIndex]); 
              this.unsubscribe();
          })
      );

      this.subscriptions.push(_combine);

      this.modalRef = this.modalService.show(
          this.modalSatuan,
          Object.assign({}, { class: 'modal-lg' })
      );

  }

  unsubscribe() {
      this.subscriptions.forEach((subscription: Subscription) => {
          subscription.unsubscribe();
      });
      this.subscriptions = [];
  }

  selectLastRowdetail() {
      setTimeout(() => {
          let last = this.gridDetail.dataSource as any[];
          this.gridDetail.selectedRowIndex = last.length - 1;
      }, 150)
  }

  onSave(){
    if (this.formInput.valid) {
        let data = this.formInput.value;
        this.dataScourceGridChild.map((e,i)=>{
            e.sub_total = e.qty_retur_penjualan_obat * e.harga_satuan_retur;
            e.no_urut = i+1;
            return e;
        });
        data.jumlah_item_retur = this.dataScourceGridChild.sum('qty_retur_penjualan_obat');
        data.total_transaksi_retur = this.dataScourceGridChild.sum('sub_total');
        data.nomor_retur_penjualan_obat = '23135';
        data.tanggal_retur_penjualan_obat = '2021-12-10';
        data.id_outlet_terima_retur = this.depo.value;
        console.log('data header',data);
        console.log('data detail',this.dataScourceGridChild);
        data.details = this.dataScourceGridChild;
        console.log('data',data);
        this.refundObatIrnaService.Insert(data).subscribe((result)=>{
            console.log(result);
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Refund Obat', result.message)
            .then(() => {    
                this.onReset();
            });
        });
    }else{
        alert('isi semua data');
    }
  }


  onReset(){
    this.formInput.reset();
    this.dataScourceGridChild = [];
    this.dataSourceGrid.next([]);
    this.ChildGrid.dataSource = [];
}

  
onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
            this.location.back();
            break;
        case 'Reset':
            this.onReset();
            break;
        case "simpan":
            // this.dataScourceGridChild;
            this.onSave(); 
            break;
        default:
            break;
    }
}

  get id_register (){return this.formInput.get('id_register')}
  get depo (){return this.formInput.get('depo')}

}
