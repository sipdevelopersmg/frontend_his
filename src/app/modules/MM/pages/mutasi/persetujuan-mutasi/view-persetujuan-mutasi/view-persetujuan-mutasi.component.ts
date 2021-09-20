import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersetujuanMutasiService } from 'src/app/modules/MM/services/mutasi/persetujuan-mutasi/persetujuan-mutasi.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { Location } from '@angular/common';
import { EditSettingsModel, IEditCell } from '@syncfusion/ej2-grids';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import * as GridLoockUpItem from './json/lookupitem.json'
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { TrPersetujuanMutasiDetailInsert } from 'src/app/modules/MM/models/mutasi/persetujuan-mutasi';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

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
  ];

  modalRef: BsModalRef;


  GridDataEditSettings: EditSettingsModel = { allowEditing: true };
  GridDetailToolbar: any;
  GridLookUpItem = GridLoockUpItem;
  subscriptions: Subscription[] = []


  public satuanParams: IEditCell;
  public satuanElem: HTMLElement;
  public satuanObj: DropDownList;
  

  public datasatuan: { [key: string]: Object }[] = [];
  satuanVal: string;

  detailSelected: TrPersetujuanMutasiDetailInsert;
  globalListenFunc: Function;
  private currentIndex: number;

  @ViewChild('gridDetail') gridDetail: GridComponent;
  @ViewChild('LookupItem') LookupItem: OrgLookUpComponent;
  @ViewChild('modalQty') modalQty: TemplateRef<any>;
  @ViewChild('modalSatuan') modalSatuan: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    public persetujuanMutasiService:PersetujuanMutasiService,
    private encryptionService: EncryptionService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private renderer: Renderer2,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef,
    private utilityService:UtilityService

  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      nomor_mutasi: ["", ],
      tanggal_mutasi: [null, ],
      nama_stockroom_pemberi: [0, ],
      nama_stockroom_penerima: [0, ],
      total_transaksi: [0, ],
      jumlah_item: [0, ],
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
                value: this.detailSelected.kode_satuan_besar_mutasi,
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
        // { text: 'Add[F1]', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: '| [*]=Ubah Banyak | [+]=Satuan |', }
    ];
    
  }

  ngAfterViewInit(): void {
    let pemesanan_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
    console.log(pemesanan_id);
    this.onLoadDetailData(pemesanan_id);
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
          this.formInput.setValue({
            nomor_mutasi           :result.data.nomor_mutasi,
            tanggal_mutasi         :result.data.tanggal_mutasi,
            nama_stockroom_pemberi   :result.data.nama_stockroom_pemberi,
            nama_stockroom_penerima  :result.data.nama_stockroom_penerima,
            total_transaksi        :result.data.total_transaksi,
            jumlah_item            :result.data.jumlah_item,
          })
          this.persetujuanMutasiService.setDetail(pemesanan_id);
      });
  }

  onClickButtonNav(ButtonId: string): void {
    switch (ButtonId) {
        case 'Back':
            this.location.back();
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
          this.persetujuanMutasiService.Insert(this.formInput.value)
          .subscribe((result) => {
              this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
              .then(() => {
                  // this.ResetFrom();
              });
          });
      }else{
          alert('isi semua data');
      }
  }
}
