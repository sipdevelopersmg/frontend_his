import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { ActivatedRoute, Router } from '@angular/router';
import * as GridLoockUpSupplier from "./json/lookupsupplier.json";
import * as GridLoockUpItem from "./json/lookupitem.json";
import * as GridDetailItem from "./json/detailItem.json"

import { TrKontrakSpjbDetailItemInsert } from 'src/app/modules/MM/models/penerimaan/kontrak-pengadaan/KontrakPengadaanModel';

import { MM } from "src/app/api/MM";
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { InputKontrakPengadaanService } from 'src/app/modules/MM/services/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.service';
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { combineLatest, Subscription } from 'rxjs';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { Location } from '@angular/common'
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';

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

    TglExpiredParams = { params: { min: new Date() } };

    id_kontrak_from_list: number;

    constructor(
        private location: Location,
        private renderer: Renderer2,
        private formBuilder: FormBuilder,
        private modalService: BsModalService,
        private activatedRoute: ActivatedRoute,
        private utilityService: UtilityService,
        private changeDetection: ChangeDetectorRef,
        private encryptionService: EncryptionService,
        public inputKontrakPengadaanService: InputKontrakPengadaanService,
    ) { }

    ngOnInit(): void {
        this.formKontrak = this.formBuilder.group({
            id_supplier: ["", Validators.required],
            nomor_kontrak_spjb: ["", Validators.required],
            nomor_kontrak: ["", Validators.required],
            tanggal_ttd_kontrak: [null, Validators.required],
            tanggal_berlaku_kontrak: [null, Validators.required],
            tanggal_berakhir_kontrak: [null, Validators.required],
            judul_kontrak: ["", Validators.required],
            tahun_anggaran: ["", Validators.required],
            keterangan: ["", Validators.required],
            total_transaksi_kontrak: [0, Validators.required],
            jumlah_item_kontrak: [0, Validators.required],
            user_inputed: [1, []],
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

    ngAfterViewInit(): void {
        if (Object.keys(this.activatedRoute.snapshot.params).length > 0) {
            let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
            this.onLoadDetailData(kontrak_id);
        }

        setTimeout(() => {
            this.ResetFrom();
        }, 1);
    }

    onLoadDetailData(kontrak_id) {
        this.inputKontrakPengadaanService.onGetById(kontrak_id).subscribe((result) => {
            this.formKontrak.setValue({
                id_supplier: result.data.id_supplier,
                nomor_kontrak_spjb: result.data.nomor_kontrak_spjb,
                nomor_kontrak: result.data.nomor_kontrak,
                tanggal_ttd_kontrak: result.data.tanggal_ttd_kontrak,
                tanggal_berlaku_kontrak: result.data.tanggal_berlaku_kontrak,
                tanggal_berakhir_kontrak: result.data.tanggal_berakhir_kontrak,
                judul_kontrak: result.data.judul_kontrak,
                tahun_anggaran: result.data.tahun_anggaran,
                keterangan: result.data.keterangan,
                total_transaksi_kontrak: result.data.total_transaksi_kontrak,
                jumlah_item_kontrak: result.data.jumlah_item_kontrak,
                user_inputed: 1,
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
            this.inputKontrakPengadaanService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
            this.gridDetail.refresh();
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

    onSave() {
        if (this.formKontrak.valid) {
            this.inputKontrakPengadaanService.Insert(this.formKontrak.value)
                .subscribe((result) => {
                    console.log(result);
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.ResetFrom();
                        });
                });
        } else {
            alert('isi semua data');
        }
    }

    ResetFrom() {
        this.inputKontrakPengadaanService.Reset();
        this.formKontrak.reset();
        this.LookupKodeSupplier.resetValue();
    }

    get id_supplier(): AbstractControl { return this.formKontrak.get('id_supplier'); }

}
