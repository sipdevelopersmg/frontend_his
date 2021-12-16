import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { CommandModel, EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { TrPemesananDetailInsert } from 'src/app/modules/MM/models/penerimaan/pemesanan/PemesananModel';
import { PenerimaanService } from 'src/app/modules/MM/services/pemasukan/penerimaan/penerimaan.service';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as LookupGridPenerimaan from './json/LookupGridPenerimaan.json'
import * as GridLoockUpItem from './json/lookupitem.json'
import { Location } from '@angular/common'
import { TrPenerimaanDetailItemInsert } from 'src/app/modules/MM/models/penerimaan/penerimaan/PenerimaanModel';
import { SetupShippingMethodService } from 'src/app/modules/MM/services/setup-data/setup-shipping-method/setup-shipping-method.service';
import { SetupPaymentTermService } from 'src/app/modules/MM/services/setup-data/setup-payment-term/setup-payment-term.service';
import { SetupJenisPenerimaanService } from 'src/app/modules/MM/services/setup-data/setup-jenis-penerimaan/setup-jenis-penerimaan.service';
import { PemesananService } from 'src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service';

@Component({
  selector: 'app-input-penerimaan',
  templateUrl: './input-penerimaan.component.html',
  styleUrls: ['./input-penerimaan.component.css']
})
export class InputPenerimaanComponent implements OnInit {
  MaritalShippingMethodDropdownField: object = { text: 'shipping_method', value: 'id_shipping_method' };
  MaritalPaymentTermDropdownField: object = { text: 'payment_term', value: 'id_payment_term' };
  MaritalJenisPenerimaanDropdownField: object = { text: 'jenis_penerimaan', value: 'kode_jenis_penerimaan' };


  inputFieldState = 'input'
  LookupGridPenerimaan = LookupGridPenerimaan;
  GridLookUpItem = GridLoockUpItem;

  Detail: TrPemesananDetailInsert[] = [];

  urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
  urlItem = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_PARMS;
  urlPemesanan = MM.PENERIMAAN.TRANSPENERIMAAN.GET_PEMESANA;

  TrPemesananDetailInsert: TrPemesananDetailInsert;
  @ViewChild('LookupKodePemesanan') LookupKodePemesanan: OrgInputLookUpKodeComponent;

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
      public penerimaanService: PenerimaanService,
      private changeDetection: ChangeDetectorRef,
      private renderer: Renderer2,
      private location: Location,
      private encryptionService: EncryptionService,
      private activatedRoute: ActivatedRoute,
      public setupStockroomService: SetupStockroomService,
      private   utilityService:UtilityService,
      public setupShippingMethodService: SetupShippingMethodService,
      public setupPaymentTermService: SetupPaymentTermService,
      public setupJenisPenerimaanService: SetupJenisPenerimaanService,
      public pemesananService:PemesananService,

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_penerimaan: ['', []],
      tanggal_penerimaan: [null, [Validators.required]],
      kode_jenis_penerimaan: ['', [Validators.required]],
      id_stockroom: [0, [Validators.required]],
      nama_stockroom: ['', [Validators.required]],
      id_supplier: [0, [Validators.required]],
      pemesanan_id: [0, [Validators.required]],
      nomor_surat_jalan_supplier: ['', [Validators.required]],
      tanggal_surat_jalan_supplier: [null, [Validators.required]],
      id_shipping_method: [0, [Validators.required]],
      id_payment_term: [0, [Validators.required]],
      tanggal_jatuh_tempo_bayar: [null, [Validators.required]],
      keterangan: ['', []],
      jumlah_item: [0, [Validators.required]],
      sub_total_1: [0, []],
      total_disc: [0, []],
      sub_total_2: [0, []],
      total_tax: [0, []],
      total_transaksi: [0],
    //   biaya_kirim: [0, []],
    //   biaya_asuransi: [0, []],
    //   biaya_lain: [0, []],
    //   potongan_nominal: [0, []],
    //   potongan_prosentase: [0, []],
    //   total_uang_muka: [0, []],
        total_tagihan: [0, []],
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
        //   { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
          { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
      ];
      this.setupStockroomService.setDataSource();
      this.setupShippingMethodService.setDataSource(); 
      this.setupPaymentTermService.setDataSource();
      this.setupJenisPenerimaanService.setDataSource();
      this.penerimaanService.Reset();
  }

  ngAfterViewInit(): void {
      // let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
      // console.log(kontrak_id);
      // this.onLoadDetailData(kontrak_id);
  }

  onLoadDetailData(kontrak_id){
      this.penerimaanService.onGetById(kontrak_id).subscribe((result)=>{
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
              this.LookupItem.onOpenModal();
              break;
          default:
              break;
      }
  }

  heandleSelectedSupplier($event) {
      this.id_supplier.setValue($event.id_supplier);
  }

  heandleSelectedItem($event) {
    //   let item: TrPenerimaanDetailItemInsert = {
    //       pemesanan_id: null,
    //       pemesanan_detail_id: null,
    //       no_urut: 0,
    //       id_item: $event.id_item,
    //       barcode:$event.barcode,
    //       kode_item: $event.kode_item,
    //       nama_item: $event.nama_item,
    //       batch_number:'',
    //       expired_date:null,
    //       qty_satuan_besar: 1,
    //       kode_satuan_besar: $event.satuans[0].kode_satuan,
    //       harga_satuan_besar: $event.harga_beli_terakhir,
    //       isi: $event.satuans[0].isi,
    //       qty_terima: $event.satuans[0].isi,
    //       harga_satuan: $event.harga_beli_terakhir,
    //       disc_prosentase_1: 0,
    //       disc_nominal_1: 0,
    //       disc_prosentase_2: 0,
    //       disc_nominal_2: 0,
    //       harga_satuan_brutto: $event.harga_beli_terakhir,
    //       tax_prosentase: 0,
    //       tax_nominal: 0,
    //       harga_satuan_netto: $event.harga_beli_terakhir,
    //       sub_total: $event.satuans[0].isi * $event.harga_beli_terakhir,
    //       satuan: $event.satuans,
    //   }
  }

  handleActionCompleted($event) {

    if ($event.requestType == 'save') {

          this.penerimaanService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
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
                let banyak = (<HTMLInputElement>document.getElementsByName("qty_satuan_besar")[0])
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
          this.penerimaanService.editBanyak(this.currentIndex, banyak);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleSatuanChange(args: any) {
      if(args != '' ){
          this.penerimaanService.editSatuan(this.currentIndex, args);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();

  }

  handleHargaChange(args: any) {
      let harga: number = parseInt(args);
      if(harga > 0){

          this.penerimaanService.editHarga(this.currentIndex, harga);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleSubtotalChange(args: any) {
      let subtotal: number = parseInt(args);
      if(subtotal > 0){

          this.penerimaanService.editSubtotal(this.currentIndex, subtotal);
      }
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleCommandClick(args: any){
      console.log(args);
      this.penerimaanService.add(args.rowData);
      this.gridDetail.refresh();
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.penerimaanService.removeDataDetail(this.currentIndex);
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
    this.pemesanan_id.setValue(args.pemesanan_id);
    this.id_stockroom.setValue(args.id_stockroom);
    this.id_supplier.setValue(args.id_supplier);
    this.nama_stockroom.setValue(args.nama_stockroom);
    this.pemesananService.getDetail(args.pemesanan_id).subscribe((result)=>{
        let item = result.data
        item.forEach(element => {
            element.qty_satuan_besar = 1;
            element.qty_terima = element.isi * 1;
            element.sub_total = element.sub_total_pesan ;
            element.satuan = element.satuans;
            element.validasi = false;
            element.message = 'lengkapi data'
        });
        
        this.penerimaanService.addDataDetail(item);
        setTimeout(()=>{
            this.selectLastRowdetail();
        },500)
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
    if(this.utilityService.validasiDataDetail(this.penerimaanService.dataDetail,'cek di tabel item yang berwarna merah!')){
        if (this.formInput.valid) {
            this.penerimaanService.Insert(this.formInput.value)
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
      this.penerimaanService.Reset();
      this.formInput.reset();
      this.LookupKodePemesanan.resetValue();
  }

  get nomor_penerimaan() : AbstractControl { return this.formInput.get('nomor_penerimaan') }
  get tanggal_penerimaan() : AbstractControl { return this.formInput.get('tanggal_penerimaan') }
  get kode_jenis_penerimaan() : AbstractControl { return this.formInput.get('kode_jenis_penerimaan') }
  get id_stockroom() : AbstractControl { return this.formInput.get('id_stockroom') }
  get id_supplier() : AbstractControl { return this.formInput.get('id_supplier') }
  get nama_stockroom() : AbstractControl { return this.formInput.get('nama_stockroom') }
  get pemesanan_id() : AbstractControl { return this.formInput.get('pemesanan_id') }
  get nomor_surat_jalan_supplier() : AbstractControl { return this.formInput.get('nomor_surat_jalan_supplier') }
  get tanggal_surat_jalan_supplier() : AbstractControl { return this.formInput.get('tanggal_surat_jalan_supplier') }
  get id_shipping_method() : AbstractControl { return this.formInput.get('id_shipping_method') }
  get id_payment_term() : AbstractControl { return this.formInput.get('id_payment_term') }
  get tanggal_jatuh_tempo_bayar() : AbstractControl { return this.formInput.get('tanggal_jatuh_tempo_bayar') }
  get keterangan() : AbstractControl { return this.formInput.get('keterangan') }
  get jumlah_item() : AbstractControl { return this.formInput.get('jumlah_item') }
  get sub_total_1() : AbstractControl { return this.formInput.get('sub_total_1') }
  get total_disc() : AbstractControl { return this.formInput.get('total_disc') }
  get sub_total_2() : AbstractControl { return this.formInput.get('sub_total_2') }
  get total_tax() : AbstractControl { return this.formInput.get('total_tax') }
  get total_transaksi() : AbstractControl { return this.formInput.get('total_transaksi') }
//   get biaya_kirim() : AbstractControl { return this.formInput.get('biaya_kirim') }
//   get biaya_asuransi() : AbstractControl { return this.formInput.get('biaya_asuransi') }
//   get biaya_lain() : AbstractControl { return this.formInput.get('biaya_lain') }
//   get potongan_nominal() : AbstractControl { return this.formInput.get('potongan_nominal') }
//   get potongan_prosentase() : AbstractControl { return this.formInput.get('potongan_prosentase') }
//   get total_uang_muka() : AbstractControl { return this.formInput.get('total_uang_muka') }
//   get total_tagihan() : AbstractControl { return this.formInput.get('total_tagihan') }
}
