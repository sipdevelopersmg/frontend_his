import { ChangeDetectorRef, Component, HostListener, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { TrReturPembelianDetailInsert } from 'src/app/modules/MM/models/retur/retur-pembelian';
import { SetupMekanismeReturService } from 'src/app/modules/MM/services/setup-data/setup-mekanisme-retur/setup-mekanisme-retur.service';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { ReturPembelianTanpaEdService } from '../../../services/retur-pembelian-tanpa-ed/retur-pembelian-tanpa-ed.service';
import * as GridLoockUpItem from './json/lookupitem.json'
import * as LookupGridSupplier from './json/lookupsupplier.json'
import {Location} from '@angular/common'
import { MM_TANPA_ED } from 'src/app/api/MM_TANPA_ED';
@Component({
  selector: 'app-input-retur-tanpa-ed',
  templateUrl: './input-retur-tanpa-ed.component.html',
  styleUrls: ['./input-retur-tanpa-ed.component.css']
})
export class InputReturTanpaEdComponent implements OnInit {

  MaritalStokroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
  MaritalMekanismeReturDropdownField: object = { text: 'mekanisme_retur', value: 'id_mekanisme_retur' };

  inputFieldState = 'input'
  GridLookUpItem = GridLoockUpItem;
  LookupGridSupplier = LookupGridSupplier;
  Detail: TrReturPembelianDetailInsert[] = [];

  urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;

  urlItem = MM_TANPA_ED.RETUR_TANPA_ED.RETUR_PEMBELIAN_TANPA_ED.GET_LOOKUP_BARANG_ED_BY_ID_STOCKROOM;

  urlItemStockRoom = this.urlItem;
  TrReturPembelianDetailInsert: TrReturPembelianDetailInsert;

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

  @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
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

  detailSelected: TrReturPembelianDetailInsert;
  globalListenFunc: Function;

  TglExpiredParams = { params: { min: new Date() } };
  id_kontrak_from_list: number;

  screenWidth: any;

  constructor(
      private location: Location,
      private renderer: Renderer2,
      private formBuilder: FormBuilder,
      private modalService: BsModalService,
      private utilityService: UtilityService,
      private changeDetection: ChangeDetectorRef,
      public returPembelianTanpaEdService: ReturPembelianTanpaEdService,
      public setupStockroomService: SetupStockroomService,
      public setupMekanismeReturService: SetupMekanismeReturService,
  ) { }

  @HostListener("window:resize", ['$event'])
  private onResize(event: any) {
      this.onDetectScreenSize(event.srcElement.innerWidth);
  }

  ngOnInit(): void {
      this.onDetectScreenSize(window.innerWidth);

      this.formInput = this.formBuilder.group({
          nomor_retur_pembelian: ['', []],
          tanggal_retur_pembelian: [null, [Validators.required]],
          tanggal_jatuh_tempo_pelunasan_retur: [null, [Validators.required]],
          id_stockroom: [0, [Validators.required]],
          id_mekanisme_retur: [0, [Validators.required]],
          id_supplier: [0, [Validators.required]],
          keterangan: ['', []],
          jumlah_item_retur: [0, [Validators.required]],
          total_transaksi_retur: [0, [Validators.required]],
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
              if(!this.LookupItem.isModalOpen){
                  if(this.id_stockroom.value!=0){
                      this.LookupItem.onOpenModal();
                  }else{
                      this.utilityService.alertError('stockroom belum di pillih')
                  }
              }
              e.preventDefault();
          }
      });

      this.GridDetailToolbar = [
          { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
          { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
      ];

      this.setupMekanismeReturService.setDataSource();
      this.setupStockroomService.setDataSource();
      this.returPembelianTanpaEdService.Reset();
  }

  ngAfterViewInit(): void {
      // let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
      // console.log(kontrak_id);
      // this.onLoadDetailData(kontrak_id);
  }

  onDetectScreenSize(screenWidth: any): void {
      this.screenWidth = screenWidth;
  }

  onLoadDetailData(kontrak_id) {
      this.returPembelianTanpaEdService.onGetById(kontrak_id).subscribe((result) => {
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
              if(!this.LookupItem.isModalOpen){
                  if(this.id_stockroom.value!=0){
                      this.LookupItem.onOpenModal();
                  }else{
                      this.utilityService.alertError('stockroom belum di pillih')
                  }
              }
              break;
          default:
              break;
      }
  }

  heandleSelectedSupplier($event) {
      this.id_supplier.setValue($event.id_supplier);
  }

  heandleSelectedItem($event) {
      let item: TrReturPembelianDetailInsert = {
          penerimaan_id: 0,
          penerimaan_detail_id: 0,
          no_urut: 0,
          id_item: $event.id_item,
          kode_item: $event.kode_item,
          nama_item: $event.nama_item,
          batch_number: $event.batch_number,
          expired_date: $event.expired_date,
          qty_satuan_besar: 0,
          kode_satuan_besar: $event.satuans[0].kode_satuan,
          isi: $event.satuans[0].isi,
          qty_retur: 0,
          harga_satuan_retur: $event.harga_beli_terakhir,
          sub_total: 0,
          satuan: $event.satuans,
          validasi:true,
          message:''
      }
      this.returPembelianTanpaEdService.addDataDetail(item);
      this.selectLastRowdetail();
  }

  handleChangeStockRoom($event) {
      this.urlItemStockRoom = this.urlItem + '/' + $event.itemData.id_stockroom
  }

  handleActionCompleted($event) {
      console.log($event);
      if ($event.requestType == 'save') {
          this.returPembelianTanpaEdService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
          this.gridDetail.refresh();
      }
      // if($event.requestType=="refresh" && $event.rows ){
      //     $event.rows.forEach(element => {
      //         if(!element.data.validasi){
      //             document.querySelector(`[data-uid="${element.uid}"]`).classList.add('e-canceled-background');
      //         }
      //     });
      // }
  }

  handleActionBegin($event){
      if($event.requestType=="beginEdit"){
          setTimeout(()=>{
              let banyak = (<HTMLInputElement>document.getElementsByName("qty_satuan_besar")[0])
              
              if (banyak) {
                  banyak.addEventListener('click', (event) => {
                      banyak.select();
                  });
                  this.utilityService.setInputNumericElement(banyak, function (value) {
                      return /^\d*$/.test(value);
                  });
              }
              let el = (<HTMLInputElement>document.getElementsByName("harga_satuan_retur")[0])
              console.log(el)
              if (el) {
                  el.addEventListener('click', (event) => {
                      el.select();
                  });
                  this.utilityService.setInputNumericElement(el, function (value) {
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
          this.returPembelianTanpaEdService.editBanyak(this.currentIndex, banyak);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleSatuanChange(args: any) {
      if(args != ''){
          this.returPembelianTanpaEdService.editSatuan(this.currentIndex, args);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();

  }

  handleHargaChange(args: any) {
      let harga: number = parseInt(args);
      if(harga){
          this.returPembelianTanpaEdService.editHarga(this.currentIndex, harga);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleSubtotalChange(args: any) {
      let subtotal: number = parseInt(args);
      this.returPembelianTanpaEdService.editSubtotal(this.currentIndex, subtotal);
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.returPembelianTanpaEdService.removeDataDetail(this.currentIndex);
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
                  (<HTMLInputElement>document.getElementById("HargaValueId")).select();
                  let element = (<HTMLInputElement>document.getElementById("HargaValueId"))
                  if (element) {
                      element.addEventListener('click', (event) => {
                          element.select();
                      });
                      this.utilityService.setInputNumericElement(element, function (value) {
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

  onSave() {
      //   if (this.formInput.valid) {
      this.returPembelianTanpaEdService.Insert(this.formInput.value)
          .subscribe((result) => {
              this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                  .then(() => {
                      this.ResetFrom();
                  });
          });
      //   }else{
      //       alert('isi semua data');
      //   }
  }

  ResetFrom() {
      this.returPembelianTanpaEdService.Reset();
      this.formInput.reset();
      this.LookupKodeSupplier.resetValue();
  }

  get nomor_retur_pembelian(): AbstractControl { return this.formInput.get('nomor_retur_pembelian') }
  get tanggal_retur_pembelian(): AbstractControl { return this.formInput.get('tanggal_retur_pembelian') }
  get tanggal_jatuh_tempo_pelunasan_retur(): AbstractControl { return this.formInput.get('tanggal_jatuh_tempo_pelunasan_retur') }
  get id_stockroom(): AbstractControl { return this.formInput.get('id_stockroom') }
  get id_supplier(): AbstractControl { return this.formInput.get('id_supplier') }
  get id_mekanisme_retur(): AbstractControl { return this.formInput.get('id_mekanisme_retur') }
  get keterangan(): AbstractControl { return this.formInput.get('keterangan') }
  get jumlah_item_retur(): AbstractControl { return this.formInput.get('jumlah_item_retur') }
  get total_transaksi_retur(): AbstractControl { return this.formInput.get('total_transaksi_retur') }
}
