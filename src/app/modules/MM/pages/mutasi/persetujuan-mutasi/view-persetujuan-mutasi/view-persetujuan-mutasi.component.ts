import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersetujuanMutasiService } from 'src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { Location } from '@angular/common';
import { EditSettingsModel, IEditCell } from '@syncfusion/ej2-grids';
import { AddEventArgs, beforeAutoFill, GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import * as GridLoockUpItem from './json/lookupitem.json'
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { TrPersetujuanMutasiDetailInsert } from 'src/app/modules/MM/models/mutasi/persetujuan-mutasi';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BehaviorSubject, combineLatest, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupItemService } from 'src/app/modules/MM/services/setup-data/setup-item/setup-item.service';

@Component({
  selector: 'app-view-persetujuan-mutasi',
  templateUrl: './view-persetujuan-mutasi.component.html',
  styleUrls: ['./view-persetujuan-mutasi.component.css']
})
export class ViewPersetujuanMutasiComponent implements OnInit {

  formInput: FormGroup;
  inputFieldState='detail';
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
    { Id: 'Validasi', Captions: 'Validasi', Icons1: 'fa-check' },
    { Id: 'Cancel', Captions: 'Cancel', Icons1: 'fa-times' },
  ];

  modalRef: BsModalRef;


  GridDataEditSettings: EditSettingsModel = { allowEditing: true };
  GridDetailToolbar: any;
  GridLookUpItem = GridLoockUpItem;
  subscriptions: Subscription[] = []


  public satuanParams: IEditCell;
  public satuanElem: HTMLElement;
  public satuanObj: DropDownList;
  counterChildGrid: number = 0;


  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  public childGridSatuan = [];

  detailSelected: TrPersetujuanMutasiDetailInsert;
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
    public persetujuanMutasiService:PersetujuanMutasiService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private renderer: Renderer2,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
    private utilityService:UtilityService,
    private setupItemService:SetupItemService
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      mutasi_id:[0,],
      nomor_mutasi: ["", ],
      tanggal_mutasi: [null, ],
      nama_stockroom_pemberi: [0, ],
      nama_stockroom_penerima: [0, ],
      pic_pemberi_mutasi: ['',],
      pic_penerima_mutasi: ['',],
      time_serah_terima: [null,],
      keterangan_mutasi:['',],
      total_transaksi: [0, ],
      jumlah_item: [0, ],
    });

    let id_item = this.id_item;
    let currentChildGird = null;

    this.satuanParams = {
        create: () => {
            this.satuanElem = document.createElement('input');
            return this.satuanElem;
        },
        read: () => {
            return this.satuanObj.text;
        },
        destroy: () => {
            this.satuanObj.destroy();
        },
        write: () => {
            this.childGridSatuan = this.persetujuanMutasiService.getSatuanDetail(this.id_item.value);
            this.satuanObj = new DropDownList({
                value: '',
                dataSource: this.childGridSatuan,
                fields: { value: 'kode_satuan', text: 'kode_satuan' },
                enabled: true,
                placeholder: 'Select a Satuan',
                floatLabelType: 'Never',
            });
            this.satuanObj.appendTo(this.satuanElem);
            if(currentChildGird){
                this.satuanObj.value = currentChildGird.satuan;
            }
        }
    }

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
        queryString: "id_item",
        rowHeight: 30,
        allowResizing: true,
        allowTextWrap: false,
        textWrapSettings: { wrapMode: 'Both' },
        toolbar: ['Add','Edit', 'Delete', 'Update', 'Cancel'],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
        columns: [
            { field: "no_urut", headerText: 'urut', visible: false },
            { field: "id_item", headerText: 'id_item', width: 100, visible: false },
            { field: "batch_number", headerText: 'Batch Number', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
            { field: "expired_date", headerText: 'Expired Date', textAlign: 'Right', width: 80, allowEditing: false },
            { field: "qty_besar", headerText: 'Banyak', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2'},
            { field: "satuan", headerText: 'Satuan', visible: false, editType: 'dropdownedit', edit: this.satuanParams, width: 200 },
            { field: "isi", headerText: 'Isi', visible: false, headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
            { field: "qty_mutasi", headerText: 'Qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: true },
            { field: "nama_satuan", headerText: 'Satuan', headerTextAlign: 'Center', textAlign: 'Left', width: 100, format: 'N2', allowEditing: false },
            { field: "hpp_satuan", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: true },
            { field: "sub_total", headerText: '', headerTextAlign: 'Center', textAlign: 'Right', width: 1, format: 'N2', allowEditing: false, visible: false },
        ],
        rowSelected(args){
            currentChildGird = args.data;
        },
        actionBegin(args: AddEventArgs) {
            if (args.requestType === 'add') {
                (args.data as object)['id_item'] = this.parentDetails.parentRowData.id_item;
                (args.data as object)['counterChildGrid'] = counterChildGrid++;
                id_item.next(this.parentDetails.parentRowData.id_item);
                console.log(id_item.value);
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
                            total = total + parseInt(item.qty_mutasi)
                        }
                    })
                    itemPrent.qty_mutasi = total
                    data.push(itemPrent)
                })                
                setTimeout(()=>{
                    dataSourceGrid.next(data);
                    totalJumlahItem.next(data.sum('qty_mutasi'))
                    console.log(data);
                },500)
            }

            if (args.requestType === "delete") {
                let index = dataSourceChild.map((item) => { return item.counterChildGrid }).indexOf(args.data[0].counterChildGrid);
                dataSourceChild.splice(index, 1);

                let data = []
                dataSourceGrid.value.forEach((itemPrent,indexPrent)=>{
                    let total = 0
                    dataSourceChild.forEach((item,index)=>{
                        if(itemPrent.id_item==item.id_item){
                            total = total + parseInt(item.qty_mutasi)
                        }
                    })
                    itemPrent.qty_mutasi = total
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
        // { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
    ];
    
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    console.log(pemesanan_id);
    this.onLoadDetailData(pemesanan_id);
  }

    onDataBound(){
        this.gridDetail.detailRowModule.expandAll();
    }

  setFormGrif(args):void{
    (<HTMLInputElement>document.getElementsByName("expired_date")[0]).value=args.itemData.expired_date;
    (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value=args.itemData.nama_satuan;
    (<HTMLInputElement>document.getElementsByName("hpp_satuan")[0]).value=args.itemData.harga_satuan_netto;
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
        this.persetujuanMutasiService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
        this.gridDetail.refresh();
    }
    // console.log('complate parent',this.gridDetail.childGrid.dataSource);
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.persetujuanMutasiService.removeDataDetail(this.currentIndex);
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

  onLoadDetailData(pemesanan_id){
      this.persetujuanMutasiService.onGetById(pemesanan_id).subscribe((result)=>{
          this.id = parseInt(pemesanan_id);
          this.formInput.setValue({
            mutasi_id              :parseInt(pemesanan_id),
            nomor_mutasi           :result.data.nomor_mutasi,
            tanggal_mutasi         :result.data.tanggal_mutasi,
            nama_stockroom_pemberi   :result.data.nama_stockroom_pemberi,
            nama_stockroom_penerima  :result.data.nama_stockroom_penerima,
            pic_pemberi_mutasi       : '',
            pic_penerima_mutasi      : '',
            keterangan_mutasi        : '',
            time_serah_terima        : new Date(),
            total_transaksi          : 0,
            jumlah_item              : 0,
          })
          this.id_stockroom = result.data.id_stockroom_pemberi;
          this.persetujuanMutasiService.getDetail(pemesanan_id).subscribe((result)=>{

            this.dataSourceGrid.next(result.data);
          })
            //this.persetujuanMutasiService.setDetail(pemesanan_id);
      });
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
        this.dataSourceGrid.subscribe((result)=>{
            let details = result
            details.map((e,i)=>{
                return e.detailBatch = [];
            });
            details.forEach((itemPrent,indexPrent)=>{
                this.dataScourceGridChild.forEach((item,index)=>{
                    if(itemPrent.id_item==item.id_item){
                        item.qty_mutasi = parseFloat(item.qty_mutasi)
                        item.hpp_satuan = parseFloat(item.hpp_satuan)
                        item.sub_total = item.qty_mutasi * item.hpp_satuan;
                        details[indexPrent].detailBatch.push(item);
                    }
                })
            })      
            data.details = details          
            this.persetujuanMutasiService.validasiPersetujuan(data)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    // this.ResetFrom();
                });
            });
        })

      }else{
          alert('isi semua data');
      }
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
            this.location.back();
            break;
        case "Validasi":
            this.onSave() 
            break;
        case "Cancel":
            this.modalRef = this.modalService.show(
                this.modalCanceled,
                Object.assign({}, { class: 'modal-lg' })
            );
            break;
        default:
            break;
    }
  }

  onCalceled(): void {
    let reason_canceled = (<HTMLInputElement>document.getElementsByName("reason_canceled")[0]).value;
    this.persetujuanMutasiService.Cancel(this.id,reason_canceled).subscribe((result)=>{
      this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
        .then(() => {
            this.onLoadDetailData(this.id);
            this.modalRef.hide();
        });
    })
  }
  
}
