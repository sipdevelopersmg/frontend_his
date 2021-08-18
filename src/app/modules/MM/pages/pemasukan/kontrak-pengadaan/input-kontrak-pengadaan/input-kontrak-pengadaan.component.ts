import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, TemplateRef, ViewChild, Renderer2 } from '@angular/core';
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
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { combineLatest, Subscription } from 'rxjs';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';

@Component({
    selector: 'app-input-kontrak-pengadaan',
    templateUrl: './input-kontrak-pengadaan.component.html',
    styleUrls: ['./input-kontrak-pengadaan.component.css'],

})

export class InputKontrakPengadaanComponent implements OnInit {

    GridDetailItem = GridDetailItem;
    GridLookUpSupplier = GridLoockUpSupplier;
    GridLookUpItem = GridLoockUpItem;

    Detail: TrKontrakSpjbDetailItemInsert[] = [];

    urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
    urlItem = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_PARMS;

    TrKontrakSpjbDetailItemInsert: TrKontrakSpjbDetailItemInsert;

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
        { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
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

    detailSelected: TrKontrakSpjbDetailItemInsert;
    globalListenFunc: Function;

    DatasourceDummy: any[] = [
        {
            kontrak_id: 1,
            no_urut: 1,
            id_item: 1,
            kode_item: 'TESTING',
            nama_item: 'TESTING',
            qty_kontrak_satuan_besar: 10,
            tanggal_maksimal_expired_date: '',
            kode_satuan_besar: 'PCS',
            isi: 10,
            qty_kontrak: 10,
            harga_satuan: 5000,
            sub_total_kontrak: 50000
        },
    ];

    TglExpiredParams = { params: { min: new Date() } };

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        public inputKontrakPengadaanService: InputKontrakPengadaanService,
        private changeDetection: ChangeDetectorRef,
        private renderer: Renderer2
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
            total_transaksi_kontrak: [0, Validators.required],
            jumlah_item_kontrak: [0, Validators.required],
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
            { text: '| [*]=Ubah Banyak | [/]=Ganti Harga | [-]=Sub Total | [+]=Satuan |', }
        ];
    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Save':
                this.inputKontrakPengadaanService.dataDetail$.subscribe((result => {
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
        //  console.log($event);
        let item: TrKontrakSpjbDetailItemInsert = {
            no_urut: 0,
            id_item: $event.id_item,
            kode_item: $event.kode_item,
            nama_item: $event.nama_item,
            tanggal_maksimal_expired_date: '',
            qty_kontrak: $event.satuans[0].isi,
            harga_satuan: $event.harga_beli_terakhir,
            isi: $event.satuans[0].isi,
            kode_satuan_besar: $event.satuans[0].kode_satuan,
            qty_kontrak_satuan_besar: 1,
            sub_total_kontrak: $event.satuans[0].isi * $event.harga_beli_terakhir,
            satuan: $event.satuans,
        }
        this.inputKontrakPengadaanService.addDataDetail(item);
        this.selectLastRowdetail();
    }

    handleActionCompleted($event) {

        if ($event.requestType == 'save') {
            console.log($event);

            // this.inputKontrakPengadaanService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
            // this.gridDetail.refresh();
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
        this.inputKontrakPengadaanService.editBanyak(this.currentIndex, banyak);
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    handleSatuanChange(args: any) {
        this.inputKontrakPengadaanService.editSatuan(this.currentIndex, args);
        this.modalRef.hide();
        this.gridDetail.refresh();

    }

    handleHargaChange(args: any) {
        let harga: number = parseInt(args);
        this.inputKontrakPengadaanService.editHarga(this.currentIndex, harga);
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    handleSubtotalChange(args: any) {
        let subtotal: number = parseInt(args);
        this.inputKontrakPengadaanService.editSubtotal(this.currentIndex, subtotal);
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    KeyDownHandler(event: KeyboardEvent) {

        if (event.keyCode === 106) {
            this.onOpenQty()
        };

        if (event.keyCode === 46) {
            this.inputKontrakPengadaanService.removeDataDetail(this.currentIndex);
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
                }, 100)
            })
        );

        this.subscriptions.push(
            this.modalService.onHidden.subscribe((reason: string | any) => {
                // this.gridDetail.selectRows([this.currentIndex]); 
                this.gridDetail.selectedRowIndex = this.currentIndex;
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
                // this.gridDetail.selectRows([this.currentIndex]);  
                this.gridDetail.selectedRowIndex = this.currentIndex;
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
                // this.gridDetail.selectRows([this.currentIndex]);  
                this.gridDetail.selectedRowIndex = this.currentIndex;
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
                // this.gridDetail.selectRows([this.currentIndex]);  
                this.gridDetail.selectedRowIndex = this.currentIndex;
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

    get id_supplier(): AbstractControl { return this.formKontrak.get('id_supplier'); }

}
