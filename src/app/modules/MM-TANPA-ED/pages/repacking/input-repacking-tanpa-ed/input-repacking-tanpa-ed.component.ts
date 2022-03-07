import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, GridComponent, IEditCell, CommandModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { TrPemesananDetailInsert } from 'src/app/modules/MM/models/penerimaan/pemesanan/PemesananModel';
import { repackingDetailModel } from 'src/app/modules/MM/models/repacking/repackingModel';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { RepackingTanpaEdService } from '../../../services/repacking-tanpa-ed/repacking-tanpa-ed.service';
import * as GridLoockUpItem from './json/lookupitem.json'
import * as GridLoockUpItemRepacing from './json/lookupitemRepacking.json'
import {Location} from '@angular/common'
import { repackingDetailTanpaEdModel } from '../../../models/repacking-tanpa-ed/repacking-tanpa-edModel';
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';
@Component({
  selector: 'app-input-repacking-tanpa-ed',
  templateUrl: './input-repacking-tanpa-ed.component.html',
  styleUrls: ['./input-repacking-tanpa-ed.component.css']
})
export class InputRepackingTanpaEdComponent implements OnInit {

  inputFieldState = 'input'
  MaritalStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };

  GridLoockUpItem = GridLoockUpItem;
  GridLoockUpItemRepacing = GridLoockUpItemRepacing;

  Detail= [];

  urlItem = MM_TANPA_ED.REPACK_TANPA_ED.REPACKING_TANPA_ED.GET_LOOKUP_BARANG_BY_ID_STOCKROOM;
  urlUtemStockroom = this.urlItem

  urlItemIt = MM_TANPA_ED.REPACK_TANPA_ED.REPACKING_TANPA_ED.GET_LOOKUP_BARANG_BY_ID_ITEM;
  urlItemItem = this.urlItemIt
  TrPemesananDetailInsert;

  ButtonNav: ButtonNavModel[] = [
    { Id: 'Back', Captions: 'Back', Icons1: 'fa-arrow-left' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
  ];

  DetailItems: any;

  @ViewChild('templateToolbar')
  public templateToolbar: any;

  GridDetailToolbar: any;

  modalRef: BsModalRef;

  formInput: FormGroup;

  GridDataEditSettings: EditSettingsModel = { allowEditing: true };

  @ViewChild('gridDetail') gridDetail: GridComponent;
  private currentIndex: number;

  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;

  subscriptions: Subscription[] = []
  @ViewChild('modalQty') modalQty: TemplateRef<any>;
  @ViewChild('modalHarga') modalHarga: TemplateRef<any>;
  @ViewChild('modalSubtotal') modalSubtotal: TemplateRef<any>;
  @ViewChild('modalSatuan') modalSatuan: TemplateRef<any>;

  public satuanParams: IEditCell;
  public satuanElem: HTMLElement;
  public satuanObj: DropDownList;

  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  detailSelected: TrPemesananDetailInsert;
  globalListenFunc: Function;


  TglExpiredParams = { params: { min: new Date() } };
  id_kontrak_from_list:number;

    CommandButton: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-copy fa-sm' } }
    ];
  constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      public repackingTanpaEdService: RepackingTanpaEdService,
      private changeDetection: ChangeDetectorRef,
      private renderer: Renderer2,
      private location: Location,
      private encryptionService: EncryptionService,
      private activatedRoute: ActivatedRoute,
      public setupStockroomService: SetupStockroomService,
      private utilityService:UtilityService,

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      tanggal_repacking : [null, []],
      id_stockroom      : [0, []],
      nama_stockroom    : ['', []],
      id_item           : [0, []],
      qty_on_hand       : [0, []],
      qty               : [0, []],
      keterangan_repacking:['', []],
      hpp_satuan   : [0,[]],
    });

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
              this.satuanObj = new DropDownList({
                  value: this.detailSelected.kode_satuan_besar,
                  dataSource: this.datasatuan,
                  fields: { value: 'kode_satuan', text: 'kode_satuan' },
                  enabled: true,
                  placeholder: 'Select a Satuan',
                  floatLabelType: 'Never',
              });
              this.satuanObj.appendTo(this.satuanElem);
          }
      }

      this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
          if (e.keyCode == 112) {
              this.LookupItem.onOpenModal();
              e.preventDefault();
          }
      });

      this.GridDetailToolbar = [
        { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: '| [*]=Ubah QTY', }
      ];
      this.setupStockroomService.setDataSource();
      this.repackingTanpaEdService.Reset();
  }

  ngAfterViewInit(): void {
      // let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
      // console.log(kontrak_id);
      // this.onLoadDetailData(kontrak_id);
  }

  onLoadDetailData(kontrak_id){
      this.repackingTanpaEdService.onGetById(kontrak_id).subscribe((result)=>{
          // this.formKontrak.setValue({
          //     id_supplier         :result.data.id_supplier,
          //     nomor_kontrak_spjb  :result.data.nomor_kontrak_spjb,
          //     nomor_kontrak       :result.data.nomor_kontrak,
          //     tanggal_ttd_kontrak :result.data.tanggal_ttd_kontrak,
          //     tanggal_berlaku_kontrak:result.data.tanggal_berlaku_kontrak,
          //     tanggal_berakhir_kontrak:result.data.tanggal_berakhir_kontrak,
          //     judul_kontrak       :result.data.judul_kontrak,
          //     tahun_anggaran      :result.data.tahun_anggaran,
          //     keterangan          :result.data.keterangan,
          //     total_transaksi_kontrak:result.data.total_transaksi_kontrak,
          //     jumlah_item_kontrak :result.data.jumlah_item_kontrak,
          //     user_inputed :1,
          // })
      });
      
  }

  onClickButtonNav(ButtonId: string): void {
      switch (ButtonId) {
          case 'Save':
              this.onSave();
              break;
          case 'Reset':
              this.ResetFrom();
              break;
          case 'Back':
              this.location.back();
              break;
          default:
              break;
      }
  }

  onToolbarClick(args: any): void {
      const item = args.item.id;
      switch (item) {
          case 'add':
                if(this.qty_on_hand.value < this.qty_header.value){
                    this.utilityService.alertError('Qty Repacking tidak boleh melebihi Qty On Hand');
                }else{
                  this.LookupItem.onOpenModal();
                }
                break;
          default:
              break;
      }
  }

  handleChangeStockroom(args){
    this.urlUtemStockroom = this.urlItem+'/'+args.value
  }

  handleChangeItemHeader(args){
    this.urlItemItem = this.urlItemIt+'/'+args.id_item;
    this.hpp_satuan.setValue(args.hpp_average); 
    this.id_item.setValue(args.id_item);
    this.qty_on_hand.setValue(args.qty_on_hand);
  }

  heandleSelectedItem(args) {
    let item :repackingDetailTanpaEdModel ={
        no_urut         :0,
        id_item_child   :args.id_item,
        barcode         :args.barcode,
        kode_item       :args.kode_item,
        nama_item       :args.nama_item,
        nama_satuan     :args.nama_satuan,
        qty             :this.qty_header.value * args.qty_urai,
        hpp_satuan      :args.hpp_average,
        sub_total       :this.qty_header.value * args.qty_urai * args.hpp_average,
        validasi        :true,
        message         :''
    }
    this.repackingTanpaEdService.addDataDetail(item);
  }

  handleActionCompleted($event) {
    this.setLockDataHeader();
    if ($event.requestType == 'save') {
        
        this.repackingTanpaEdService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
        this.gridDetail.refresh();
    }

    if($event.requestType=="refresh" && $event.rows ){
        $event.rows.forEach(element => {
            if(!element.data.validasi){
                document.querySelector(`[data-uid="${element.uid}"]`).classList.add('e-canceled-background');
            }
        });
    }
  }

    handleActionBegin($event){
        if($event.requestType=="beginEdit"){
            setTimeout(()=>{
                let banyak = (<HTMLInputElement>document.getElementsByName("qty")[0])
                if (banyak) {
                    banyak.addEventListener('click', (event) => {
                        banyak.select();
                    });
                    this.utilityService.setInputNumericElement(banyak, function (value) {
                        return /^\d*$/.test(value);
                    });
                }
            },50)
        }
        
    }

  /** untuk identifikasi keyboard down pada grid */
  handleLoadGrid(args: any): void {
      document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
  }

  handleSelectdRow(args: any): void {
      this.currentIndex = args.rowIndex;
      this.datasatuan = args.data.satuan;
      this.detailSelected = args.data
      this.satuanVal = args.data.kode_satuan_besar;
  }

  handleQtyChange(args: any) {
      
      let banyak: number = parseInt(args);
      if(banyak > 0){
          this.repackingTanpaEdService.editBanyak(this.currentIndex, banyak);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }


  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.repackingTanpaEdService.removeDataDetail(this.currentIndex);
          this.gridDetail.refresh();
          setTimeout(() => {
              if (this.currentIndex != 0) {
                  this.gridDetail.selectedRowIndex = 0;
              }
          }, 100)
      };

      if (event.keyCode === 111) {
          this.onOpenHarga()
      }

      if (event.keyCode === 109) {
          this.onOpenSubtotal()
      }

      if (event.keyCode === 107) {
          this.onOpenSatuan()
      }

  }

  heandleSelectedPemesanan(args: any): void {
    // this.pemesanan_id.setValue(args.pemesanan_id);
    // this.id_stockroom.setValue(args.id_stockroom);
    // this.id_supplier.setValue(args.id_supplier);
    // this.nama_stockroom.setValue(args.nama_stockroom);
    // this.pemesananService.getDetail(args.pemesanan_id).subscribe((result)=>{
    //     let item = result.data
    //     item.forEach(element => {
    //         element.qty_satuan_besar = 1;
    //         element.qty_terima = element.isi * 1;
    //         element.sub_total = element.sub_total_pesan ;
    //         element.satuan = element.satuans;
    //         element.validasi = false;
    //         element.message = 'lengkapi data'
    //     });
        
    //     this.repackingTanpaEdService.addDataDetail(item);
    //     setTimeout(()=>{
    //         this.selectLastRowdetail();
    //     },500)
    // });
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
                  (<HTMLInputElement>document.getElementById("QtyValueId")).select();
                    let banyak = (<HTMLInputElement>document.getElementById("QtyValueId"))
                    if (banyak) {
                        banyak.addEventListener('click', (event) => {
                            banyak.select();
                        });
                        this.utilityService.setInputNumericElement(banyak, function (value) {
                            return /^\d*$/.test(value);
                        });
                    }
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

  onOpenHarga() {

      const _combine = combineLatest(
          this.modalService.onShown,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());


      this.subscriptions.push(
          this.modalService.onShown.subscribe(() => {
              setTimeout(() => {
                  (<HTMLInputElement>document.getElementById("HargaValueId")).focus();
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
          this.modalHarga,
          Object.assign({}, { class: 'modal-lg' })
      );
  }

  onOpenSubtotal() {

      const _combine = combineLatest(
          this.modalService.onShown,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());

      this.subscriptions.push(
          this.modalService.onShown.subscribe(() => {
              setTimeout(() => {
                  (<HTMLInputElement>document.getElementById("SubtotalValueId")).focus();
              }, 100)
          })
      );

      this.subscriptions.push(
          this.modalService.onHidden.subscribe((reason: string | any) => {
              console.log(reason, 'subTotal hidden')
              this.gridDetail.selectedRowIndex = this.currentIndex;
              this.gridDetail.selectRows([this.currentIndex]); 
              this.unsubscribe();
          })
      );

      this.subscriptions.push(_combine);

      this.modalRef = this.modalService.show(
          this.modalSubtotal,
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
    if(this.utilityService.validasiDataDetail(this.repackingTanpaEdService.dataDetail,'cek di tabel item yang berwarna merah!')){
        if (this.formInput.valid) {
            this.repackingTanpaEdService.Insert(this.formInput.value)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.ResetFrom();
                });
            });
        }else{
            this.utilityService.alertError('Lengkapi Data (*)');
        }
    }
  }

  ResetFrom() {
      this.repackingTanpaEdService.Reset();
      this.formInput.reset();
  }

  setLockDataHeader(){
    this.inputFieldState = (this.repackingTanpaEdService.dataDetail.length==0)?'normal':'detail';
  }

  get id_item() : AbstractControl { return this.formInput.get('id_item')}
  get batch_number() : AbstractControl { return this.formInput.get('batch_number') }
  get expired_date() : AbstractControl { return this.formInput.get('expired_date') }
  get qty_on_hand() : AbstractControl { return this.formInput.get('qty_on_hand')}
  get qty_header() : AbstractControl { return this.formInput.get('qty')}
  get hpp_satuan() : AbstractControl { return this.formInput.get('hpp_satuan')}

}
