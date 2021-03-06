import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { TrReturPemakaianInternalDetailInsert } from '../../../models/issue/retur_issue';
import { ReturIssueService } from '../../../services/retur-issue/retur-issue.service';
import { SetupStockroomService } from '../../../services/setup-data/setup-stockroom/setup-stock-room.service';
import * as GridLoockUpItem from './json/lookupitem.json'
import {Location} from '@angular/common'

@Component({
  selector: 'app-input-retur-issue',
  templateUrl: './input-retur-issue.component.html',
  styleUrls: ['./input-retur-issue.component.css']
})
export class InputReturIssueComponent implements OnInit {

  MaritalStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
  inputFieldState='input';

  GridLookUpItem = GridLoockUpItem;

  Detail: TrReturPemakaianInternalDetailInsert[] = [];

  urlByStockroom = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_STOCKROOM;
  urlItem = this.urlByStockroom

  TrReturPemakaianInternalDetailInsert: TrReturPemakaianInternalDetailInsert;

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

  formKontrak: FormGroup;

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

  detailSelected: TrReturPemakaianInternalDetailInsert;
  globalListenFunc: Function;


  TglExpiredParams = { params: { min: new Date() } };
  id_kontrak_from_list:number;

  constructor(
      private modalService: BsModalService,
      private formBuilder: FormBuilder,
      public returIssueService: ReturIssueService,
      private changeDetection: ChangeDetectorRef,
      private renderer: Renderer2,
      private location: Location,
      public setupStockroomService: SetupStockroomService,
      private   utilityService:UtilityService

  ) { }

  ngOnInit(): void {
      this.formKontrak = this.formBuilder.group({
        nomor_retur_pemakaian_internal: ["", ],
        tanggal_retur_pemakaian_internal: [null, Validators.required],
        id_stockroom: [0, Validators.required],
        keterangan_retur_pemakaian_internal: ['',],
        time_serah_terima:[null, Validators.required],
        pic_pemberi: ['', Validators.required],
        pic_penerima: ['', Validators.required],
        jumlah_item: [0, Validators.required],
        total_transaksi: [0, ],
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
                  value: this.detailSelected.kode_satuan_besar_retur_pemakaian_internal,
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
      this.setupStockroomService.setDataSource();
      this.returIssueService.Reset();
  }

  ngAfterViewInit(): void {
      // let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
      // console.log(kontrak_id);
      // this.onLoadDetailData(kontrak_id);
  }

  onLoadDetailData(kontrak_id){
      this.returIssueService.onGetById(kontrak_id).subscribe((result)=>{
          this.formKontrak.setValue({
              id_supplier         :result.data.id_supplier,
              nomor_kontrak_spjb  :result.data.nomor_kontrak_spjb,
              nomor_kontrak       :result.data.nomor_kontrak,
              tanggal_ttd_kontrak :result.data.tanggal_ttd_kontrak,
              tanggal_berlaku_kontrak:result.data.tanggal_berlaku_kontrak,
              tanggal_berakhir_kontrak:result.data.tanggal_berakhir_kontrak,
              judul_kontrak       :result.data.judul_kontrak,
              tahun_anggaran      :result.data.tahun_anggaran,
              keterangan          :result.data.keterangan,
              total_transaksi_kontrak:result.data.total_transaksi_kontrak,
              jumlah_item_kontrak :result.data.jumlah_item_kontrak,
              user_inputed :1,
          })
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

  heandleSelectedItem($event) {
      let item: TrReturPemakaianInternalDetailInsert = {
          no_urut: 0,
          id_item: $event.id_item,
          kode_item: $event.kode_item,
          nama_item: $event.nama_item,
          qty_satuan_besar_retur_pemakaian_internal: 1,
          kode_satuan_besar_retur_pemakaian_internal: $event.satuans[0].kode_satuan,
          isi_retur_pemakaian_internal: $event.satuans[0].isi,
          qty_retur_pemakaian_internal: $event.satuans[0].isi,
          hpp_satuan:$event.hpp_average,
          nominal_retur_pemakaian_internal: $event.hpp_average * $event.satuans[0].isi,
          satuan: $event.satuans,
      }
      this.returIssueService.addDataDetail(item);
      this.selectLastRowdetail();
  }

  handleActionCompleted($event) {

      if ($event.requestType == 'save') {
          console.log($event);
          this.returIssueService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
          this.gridDetail.refresh();
      }
  }


    handleActionBegin($event){
        console.log($event);
        if($event.requestType=="beginEdit"){
            setTimeout(()=>{
                let banyak = (<HTMLInputElement>document.getElementsByName("qty_satuan_besar_retur_pemakaian_internal")[0])
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
      this.returIssueService.editBanyak(this.currentIndex, banyak);
      this.modalRef.hide();
      this.gridDetail.refresh();
  }

  handleSatuanChange(args: any) {
      this.returIssueService.editSatuan(this.currentIndex, args);
      this.modalRef.hide();
      this.gridDetail.refresh();

  }


  handleStockroomChange(args){
    // console.log(args.value);
    this.urlItem = this.urlByStockroom+'/'+args.value;
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.returIssueService.removeDataDetail(this.currentIndex);
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

  onOpenQty() {

      const _combine = combineLatest(
          this.modalService.onShow,
          this.modalService.onHidden
      ).subscribe(() => this.changeDetection.markForCheck());

      this.subscriptions.push(
          this.modalService.onShown.subscribe(() => {
              setTimeout(() => {
                  (<HTMLInputElement>document.getElementById("QtyValueId")).focus();
                  let HargaValueId = (<HTMLInputElement>document.getElementById("HargaValueId"))
                  if (HargaValueId) {
                      HargaValueId.addEventListener('click', (event) => {
                          HargaValueId.select();
                      });
                      this.utilityService.setInputNumericElement(HargaValueId, function (value) {
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
                  let HargaValueId = (<HTMLInputElement>document.getElementById("HargaValueId"))
                    if (HargaValueId) {
                        HargaValueId.addEventListener('click', (event) => {
                            HargaValueId.select();
                        });
                        this.utilityService.setInputNumericElement(HargaValueId, function (value) {
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
                  let HargaValueId = (<HTMLInputElement>document.getElementById("SubtotalValueId"))
                    if (HargaValueId) {
                        HargaValueId.addEventListener('click', (event) => {
                            HargaValueId.select();
                        });
                        this.utilityService.setInputNumericElement(HargaValueId, function (value) {
                            return /^\d*$/.test(value);
                        });
                    }
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
      if (this.formKontrak.valid) {
          this.returIssueService.Insert(this.formKontrak.value)
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

  ResetFrom() {
      this.returIssueService.Reset();
      this.formKontrak.reset();
  }
  get id_stockroom(): AbstractControl { return this.formKontrak.get('id_stockroom') }

}
