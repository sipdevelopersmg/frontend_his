import { ChangeDetectorRef, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as GridLoockUpSupplier from "./json/lookupsupplier.json";
import * as GridLoockUpItem from "./json/lookupitem.json";

import * as GridDetailItem from "./json/detailItem.json";
import { TrKontrakSpjbDetailItemInsert } from 'src/app/modules/MM/models/penerimaan/kontrak-pengadaan/KontrakPengadaanModel';

import { MM } from "src/app/api/MM";
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { InputKontrakPengadaanService } from 'src/app/modules/MM/services/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.service';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { combineLatest, Subscription } from 'rxjs';

@Component({
  selector: 'app-input-kontrak-pengadaan',
  templateUrl: './input-kontrak-pengadaan.component.html',
  styleUrls: ['./input-kontrak-pengadaan.component.css']
})
export class InputKontrakPengadaanComponent implements OnInit {

  GridDetailItem = GridDetailItem;
  GridLookUpSupplier = GridLoockUpSupplier;
  GridLookUpItem = GridLoockUpItem;

  Detail : TrKontrakSpjbDetailItemInsert[] = [];


  urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
  urlItem = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_PARMS;

  TrKontrakSpjbDetailItemInsert : TrKontrakSpjbDetailItemInsert;
  
  ButtonNav: ButtonNavModel[] = [
    { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
    { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
  ];

  DetailItems: any;
  
  GridDetailToolbar = [
    { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
  ];

  modalRef: BsModalRef;

  formKontrak: FormGroup;

  GridDataEditSettings: EditSettingsModel = { allowEditing: true };

  private gridDetail: MolGridComponent = null;
  private currentIndex : number;

  @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;

  subscriptions: Subscription[] = []
  @ViewChild('modalQty') modalQty:TemplateRef<any>;
  @ViewChild('modalHarga') modalHarga:TemplateRef<any>;
  @ViewChild('modalSubtotal') modalSubtotal:TemplateRef<any>;
  @ViewChild('modalSatuan') modalSatuan:TemplateRef<any>;


  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    public inputKontrakPengadaanService : InputKontrakPengadaanService,
    private changeDetection: ChangeDetectorRef
    ) { }

  ngOnInit(): void {
    this.formKontrak = this.formBuilder.group({
      id_supplier: ["", Validators.required],
      nomor_spbbj: ["", Validators.required],
      nomor_kontrak: ["", Validators.required],
      tanggal_ttd_kontrak: [null, Validators.required],
      tanggal_berlaku_kontrak: [null, Validators.required],
      tanggal_berakhir_kontrak: [null, Validators.required],
      judul_pekerjaan: ["", Validators.required],
      tahun_anggaran: ["", Validators.required],
      keterangan: ["", Validators.required],
      total_transaksi_kontrak :  [0, Validators.required],
      jumlah_item_kontrak :  [0, Validators.required],
    });   
  
  }
  
  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
      case 'Save':
        this.inputKontrakPengadaanService.dataDetail$.subscribe((result=>{
          console.log(result);
        }))
        break;
      case 'Reset':
        break;
      default:
        break;
    }
  } 

  onToolbarClick(args: any): void {
    const item = args.item.id;
    switch (item) {
      case 'add':

        let item : TrKontrakSpjbDetailItemInsert = {
          no_urut       :1,
          id_item       :1,
          kode_item     :'002',
          nama_item     :'parasetamol',
          tanggal_maksimal_expired_date:'',
          qty_kontrak_satuan_besar  :3,
          kode_satuan_besar         :'BOX',
          isi               :3,
          qty_kontrak       :9,
          harga_satuan      :3000,
          sub_total_kontrak :18000,
        }
    
        this.inputKontrakPengadaanService.addDataDetail(item);
        this.selectLastRowdetail();

        
        break;
      default:
        break;
    }
  }

  InitalizedGrid(component: MolGridComponent) {
    this.gridDetail = component;
  }

  heandleSelectedSupplier($event){
    this.id_supplier.setValue($event.id_supplier);
  }

  heandleSelectedItem($event){
   console.log($event);
    
   let item : TrKontrakSpjbDetailItemInsert = {
      no_urut       :0,
      id_item       :$event.id_item,
      kode_item     :$event.kode_item,
      nama_item     :$event.nama_item,
      tanggal_maksimal_expired_date:'',
      qty_kontrak   :1,
      harga_satuan  :$event.harga_order,
      isi           :1,
      kode_satuan_besar         :$event.kode_satuan_beli,
      qty_kontrak_satuan_besar  :1,
      sub_total_kontrak         :$event.harga_order,
    }

    this.inputKontrakPengadaanService.addDataDetail(item);
  }

  handleActionCompleted($event){
    if($event.requestType=='save'){
      console.log($event);
      this.inputKontrakPengadaanService.updateFromInline($event.rowIndex,$event.data,$event.rowData)
      this.gridDetail.Grid.refresh();
    }
  }

  /** untuk identifikasi keyboard down pada grid */
  handleLoadGrid(args: any): void {
    document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
  }

  handleSelectdRow( args: any ):void {
    this.currentIndex = args.rowIndex;
  }

  handleQtyChange( args:any ){
    let banyak : number = parseInt(args);
    this.inputKontrakPengadaanService.editBanyak(this.currentIndex,banyak);
    this.modalRef.hide();
    this.gridDetail.Grid.refresh();

  }

  handleSatuanChange( args:any ){
    // this.inputKontrakPengadaanService.
    this.modalRef.hide();
    this.gridDetail.Grid.refresh();

  }

  handleHargaChange( args:any ){
    let harga : number = parseInt(args);
    this.inputKontrakPengadaanService.editHarga(this.currentIndex,harga);
    this.modalRef.hide();
    this.gridDetail.Grid.refresh();

  }

  handleSubtotalChange( args:any ){
    let subtotal : number = parseInt(args);
    this.inputKontrakPengadaanService.editSubtotal(this.currentIndex,subtotal);
    this.modalRef.hide();
    this.gridDetail.Grid.refresh();

  }

  KeyDownHandler(event: KeyboardEvent) {

    if (event.keyCode === 106) {
      this.onOpenQty()
    };

    if (event.keyCode === 46) {
      console.log('Delete');
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
        setTimeout(()=>{
          (<HTMLInputElement>document.getElementById("QtyValueId")).focus();
        },100)
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        this.gridDetail.Grid.selectRows([this.currentIndex]);  
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
        setTimeout(()=>{
          (<HTMLInputElement>document.getElementById("HargaValueId")).focus();
        },100)
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        this.gridDetail.Grid.selectRows([this.currentIndex]);  
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
        setTimeout(()=>{
          (<HTMLInputElement>document.getElementById("SubtotalValueId")).focus();
        },100)
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        console.log(reason,'subTotal hidden')
        this.gridDetail.Grid.selectRows([this.currentIndex]);  
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
        setTimeout(()=>{
          (<HTMLInputElement>document.getElementById("SatuanValueId")).focus();
        },100)
      })
    );

    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        this.gridDetail.Grid.selectRows([this.currentIndex]);  
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

  selectLastRowdetail(){
    setTimeout( async ()=>{
      let last = await this.gridDetail.Grid.dataSource as Object[]; 
      this.gridDetail.Grid.selectRows([last.length-1]);
    },100)
  }

  get id_supplier(): AbstractControl { return this.formKontrak.get('id_supplier'); }

}
