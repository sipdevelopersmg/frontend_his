import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, IEditCell, GridComponent, GridModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, BehaviorSubject, combineLatest } from 'rxjs';
import { PersetujuanMutasiTanpaEdService } from 'src/app/modules/MM-TANPA-ED/services/mutasi-tanpa-ed/persetujuan-mutasi-tanpa-ed.service';
import { TrPersetujuanMutasiDetailInsert } from 'src/app/modules/MM/models/mutasi/persetujuan-mutasi';
import { SetupItemService } from 'src/app/modules/MM/services/setup-data/setup-item/setup-item.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as GridLoockUpItem from './json/lookupitem.json'
import { Location } from '@angular/common'

@Component({
  selector: 'app-view-persetujuan-mutasi-tanpa-ed',
  templateUrl: './view-persetujuan-mutasi-tanpa-ed.component.html',
  styleUrls: ['./view-persetujuan-mutasi-tanpa-ed.component.css']
})
export class ViewPersetujuanMutasiTanpaEdComponent implements OnInit {


  formInput: FormGroup;
  inputFieldState = 'detail';
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

  private id_stockroom: number = 0;
  //======= Child

  ChildGrid: GridModel;
  dataSourceGrid = new BehaviorSubject([]);
  dataScourceGridChild: any[] = [];
  totalJumlahItem = new BehaviorSubject(0);
  public itemBatch: any = [];
  public id_item = new BehaviorSubject(0);
  public itemsParams: IEditCell;
  public itemsElem: HTMLElement;
  public itemsObj: DropDownList;

  //=========
  private id: number = 0;
  constructor(
      private formBuilder: FormBuilder,
      public persetujuanMutasiTanpaEdService: PersetujuanMutasiTanpaEdService,
      private encryptionService: EncryptionService,
      private activatedRoute: ActivatedRoute,
      private location: Location,
      private renderer: Renderer2,
      private modalService: BsModalService,
      private changeDetection: ChangeDetectorRef,
      private utilityService: UtilityService,
      private setupItemService: SetupItemService
  ) { }

  ngOnInit(): void {
      this.formInput = this.formBuilder.group({
          mutasi_id: [0,],
          nomor_mutasi: ["",],
          tanggal_mutasi: [null,],
          nama_stockroom_pemberi: [0,],
          nama_stockroom_penerima: [0,],
          pic_pemberi_mutasi: ['',],
          pic_penerima_mutasi: ['',],
          time_serah_terima: [null,],
          keterangan_mutasi: ['',],
          total_transaksi: [0,],
          jumlah_item: [0,],
      });

  
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
      this.onLoadDetailData(pemesanan_id);
  }

  onDataBound() {
      this.gridDetail.detailRowModule.expandAll();
  }

  setFormGrif(args): void {
      (<HTMLInputElement>document.getElementsByName("expired_date")[0]).value = args.itemData.expired_date;
      (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = args.itemData.nama_satuan;
      (<HTMLInputElement>document.getElementsByName("hpp_satuan")[0]).value = args.itemData.harga_satuan_netto;
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
          let data = this.dataSourceGrid.value;
          data[$event.rowIndex].qty_mutasi = $event.data.qty_mutasi;
          this.totalJumlahItem.next(data.sum('qty_mutasi'));
          this.gridDetail.refresh();
      }
  }

  KeyDownHandler(event: KeyboardEvent) {

      if (event.keyCode === 106) {
          this.onOpenQty()
      };

      if (event.keyCode === 46) {
          this.persetujuanMutasiTanpaEdService.removeDataDetail(this.currentIndex);
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

  onLoadDetailData(pemesanan_id: any) {
      this.persetujuanMutasiTanpaEdService.onGetById(pemesanan_id).subscribe((result) => {
          this.id = parseInt(pemesanan_id);
          this.formInput.setValue({
              mutasi_id: parseInt(pemesanan_id),
              nomor_mutasi: result.data.nomor_mutasi,
              tanggal_mutasi: result.data.tanggal_mutasi,
              nama_stockroom_pemberi: result.data.nama_stockroom_pemberi,
              nama_stockroom_penerima: result.data.nama_stockroom_penerima,
              pic_pemberi_mutasi: '',
              pic_penerima_mutasi: '',
              keterangan_mutasi: '',
              time_serah_terima: new Date(),
              total_transaksi: 0,
              jumlah_item: 0,
          })
          this.id_stockroom = result.data.id_stockroom_pemberi;
          this.persetujuanMutasiTanpaEdService.getDetail(pemesanan_id).subscribe((result) => {
              this.dataSourceGrid.next(result.data);
          })
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

  onSave() {
      if (this.formInput.valid) {
          let data = this.formInput.value;
              data.tanggal_mutasi = this.utilityService.onFixingDatepickerSyncfusion(data.tanggal_mutasi); 
          this.dataSourceGrid.subscribe((result) => {
              let details = result
              details.map((e, i) => {
                  e.nominal_mutasi = e.hpp_average * e.qty_mutasi
                  return e
              });
              data.details = details
              
              this.persetujuanMutasiTanpaEdService.validasiPersetujuan(data)
                .subscribe((result) => {
                  this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {

                    });
                });
          })
      } else {
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
      this.persetujuanMutasiTanpaEdService.Cancel(this.id, reason_canceled).subscribe((result) => {
          this.utilityService.onShowingCustomAlert('success', 'Data Pemesanan Berhasil Di Cancel', result.message)
              .then(() => {
                  this.onLoadDetailData(this.id);
                  this.modalRef.hide();
              });
      })
  }
}
