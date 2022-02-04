import { ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { pemusnahanDetailmodel } from 'src/app/modules/MM/models/pemusnahan/pemusnahanModel';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { PemusnahanTanpaEdService } from '../../../services/pemusnahan-tanpa-ed/pemusnahan-tanpa-ed.service';
import * as GridLookUpItem from './json/lookupitem.json'
import {Location} from '@angular/common'
@Component({
  selector: 'app-input-pemusnahan-tanpa-ed',
  templateUrl: './input-pemusnahan-tanpa-ed.component.html',
  styleUrls: ['./input-pemusnahan-tanpa-ed.component.css']
})
export class InputPemusnahanTanpaEdComponent implements OnInit {

  MaritalStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
  inputFieldState = 'input';

  GridLookUpItem = GridLookUpItem;

  Detail: pemusnahanDetailmodel[] = [];
  //urlItem = null;
  urlItem = MM.PEMUSNAHAN.PEMUSNAHAN_MODEL.GET_LOOKUP_BARANG_BY_ID_STOCKROOM;

  urlItemStockRoom = this.urlItem;

  pemusnahanDetailmodel: pemusnahanDetailmodel;

  ButtonNav: ButtonNavModel[] = [
      { Id: 'Back', Captions: 'Back', Icons1: 'fa-chevron-left' },
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

  @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;

  subscriptions: Subscription[] = []
  @ViewChild('modalQty') modalQty: TemplateRef<any>;

  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  detailSelected: pemusnahanDetailmodel;
  globalListenFunc: Function;

  TglExpiredParams = { params: { min: new Date() } };
  id_kontrak_from_list: number;
  screenWidth: any;

  constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      public pemusnahanTanpaEdService: PemusnahanTanpaEdService,
      private changeDetection: ChangeDetectorRef,
      private renderer: Renderer2,
      private location: Location,
      public setupStockroomService: SetupStockroomService,
      private utilityService: UtilityService
  ) { }

  @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

  ngOnInit(): void {
      this.formInput = this.formBuilder.group({
          nomor_pemusnahan_stok: ["qwerty"],
          tanggal_pemusnahan_stok: [null, Validators.required],
          id_stockroom: [0, Validators.required],
          keterangan: [""],
          total_transaksi: [0],
          jumlah_item: [0],
          user_inputed: [1, []],
      });

      this.globalListenFunc = this.renderer.listen('document', 'keydown', e => {
          if (e.keyCode == 112) {
              if(!this.LookupItem.isModalOpen){
                  if(this.id_stockroom.value==''){
                      this.utilityService.alertError('stockroom belum di pillih');
                  }else{
                      this.LookupItem.onOpenModal();
                  }
                  
              }
              e.preventDefault();
          }
      });

      this.GridDetailToolbar = [
          { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
          { text: '| [*]=Ubah Qty', }
      ];

      this.setupStockroomService.setDataSource();
      
  }

  ngAfterViewInit(): void {

      setTimeout(() => {
          this.pemusnahanTanpaEdService.Reset();
          this.gridDetail.dataSource = [];
          this.gridDetail.refresh();
      }, 1);
  }

  onDetectScreenSize(screenWidth: any): void {
    this.screenWidth = screenWidth;
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
              if(this.id_stockroom.value==''){
                  this.utilityService.alertError('stockroom belum di pillih');
              }else{
                  this.LookupItem.onOpenModal();
              }
              break;
          default:
              break;
      }
  }

  handleChangeStockRoom(args){
      this.urlItemStockRoom = this.urlItem+'/'+args.itemData.id_stockroom
  }

  heandleSelectedItem(args) {
      let item:pemusnahanDetailmodel = {
          no_urut       :0,
          id_item       :args.id_item,
          kode_item     :args.kode_item,
          barcode       :args.barcode,
          nama_item     :args.nama_item,
          batch_number  :args.batch_number,
          expired_date  :args.expired_date,
          qty           :1,
          hpp_satuan    :args.hpp_average,
          sub_total     :args.hpp_average * 1
      }
      this.pemusnahanTanpaEdService.addDataDetail(item);
      this.selectLastRowdetail();
  }

  handleActionCompleted($event) {

      if ($event.requestType == 'save') {
          console.log($event);
          this.pemusnahanTanpaEdService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
          this.gridDetail.refresh();
      }

    //   if($event.requestType=="refresh" && $event.rows ){
    //       $event.rows.forEach(element => {
    //           if(!element.data.validasi){
    //               document.querySelector(`[data-uid="${element.uid}"]`).classList.add('e-canceled-background');
    //           }
    //       });
    //   }
  }

  handleActionBegin($event){
      console.log($event);
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
  }

  handleQtyChange(args: any) {
      let banyak: number = parseInt(args);
      if(banyak > 0){
          this.pemusnahanTanpaEdService.editBanyak(this.currentIndex, banyak);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.pemusnahanTanpaEdService.removeDataDetail(this.currentIndex);
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
          // this.onOpenSatuan()
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

  onSave() {
    if (this.formInput.valid) {
      this.pemusnahanTanpaEdService.Insert(this.formInput.value)
        .subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
            .then(() => {
                this.ResetFrom();
            });
        });
    } else {
        this.utilityService.alertError('Lengkapi Data (*)');
    }
  }

  ResetFrom() {
      this.pemusnahanTanpaEdService.Reset();
      this.formInput.reset();
      this.LookupKodeSupplier.resetValue();
  }

  get id_stockroom(): AbstractControl { return this.formInput.get('id_stockroom'); }
}
