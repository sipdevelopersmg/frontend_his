import { ChangeDetectorRef, Component, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription, combineLatest } from 'rxjs';
import { MM } from 'src/app/api/MM';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up/org-look-up.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { Location } from '@angular/common'
import * as GridLoockUpSupplier from './json/lookupsupplier.json'
import * as GridLoockUpItem from './json/lookupitem.json'
import { PemesananService } from 'src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service';
import { SetupStockroomService } from 'src/app/modules/MM/services/setup-data/setup-stockroom/setup-stock-room.service';
import { TrPemesananDetailInsert } from 'src/app/modules/MM/models/penerimaan/pemesanan/PemesananModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-input-pemesanan',
    templateUrl: './input-pemesanan.component.html',
    styleUrls: ['./input-pemesanan.component.css']
})
export class InputPemesananComponent implements OnInit {
    MaritalStockroomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
    inputFieldState = 'input';

    GridLookUpSupplier = GridLoockUpSupplier;
    GridLookUpItem = GridLoockUpItem;

    Detail: TrPemesananDetailInsert[] = [];
    //urlItem = null;
    urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
    lookupBarangPo = MM.PENERIMAAN.TRANSPEMESANAN.GET_LOOKUP_BARANG_PO;
    urlItem = this.lookupBarangPo;

    TrPemesananDetailInsert: TrPemesananDetailInsert;

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

    detailSelected: TrPemesananDetailInsert;
    globalListenFunc: Function;

    TglExpiredParams = { params: { min: new Date() } };
    id_kontrak_from_list: number;

    constructor(
        private modalService: BsModalService,
        private formBuilder: FormBuilder,
        public pemesananService: PemesananService,
        private changeDetection: ChangeDetectorRef,
        private renderer: Renderer2,
        private location: Location,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        public setupStockroomService: SetupStockroomService,
        private utilityService: UtilityService

    ) { }

    ngOnInit(): void {
        this.formKontrak = this.formBuilder.group({
            nomor_pemesanan: [""],
            tanggal_pemesanan: [null, Validators.required],
            tanggal_expired_pemesanan: [null, Validators.required],
            id_stockroom: [0, Validators.required],
            id_supplier: ["", Validators.required],
            keterangan: [""],
            sub_total_1: [0],
            total_disc: [0],
            sub_total_2: [0],
            total_tax: [0],
            total_transaksi_pesan: [0],
            jumlah_item_pesan: [0, Validators.required],
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
                if(!this.LookupItem.isModalOpen){
                    if(this.id_supplier.value==''){
                        this.utilityService.alertError('supllier belum di pillih');
                    }else{
                        this.LookupItem.onOpenModal();
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
        
    }

    ngAfterViewInit(): void {
        // let kontrak_id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        // console.log(kontrak_id);
        // this.onLoadDetailData(kontrak_id);
        setTimeout(() => {
            this.pemesananService.Reset();
            this.gridDetail.dataSource = [];
            this.gridDetail.refresh();
            // console.log(this.setupStockroomService.dataSource.value);
        }, 1);
    }

    onLoadDetailData(kontrak_id) {
        this.pemesananService.onGetById(kontrak_id).subscribe((result) => {
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
                if(this.id_supplier.value==''){
                    this.utilityService.alertError('supllier belum di pillih');
                }else{
                    this.LookupItem.onOpenModal();
                }
                break;
            default:
                break;
        }
    }

    heandleSelectedSupplier($event) {
        this.id_supplier.setValue($event.id_supplier);
        this.urlItem = this.lookupBarangPo + '/' + $event.id_supplier;
    }

    heandleSelectedItem($event) {
        let item: TrPemesananDetailInsert = {
            kontrak_id: $event.kontrak_id,
            kontrak_detail_item_id: $event.kontrak_detail_item_id,
            set_harga_order_id: $event.set_harga_order_id,
            set_harga_order_detail_id: $event.set_harga_order_detail_id,
            no_urut: 0,
            id_item: $event.id_item,
            kode_item: $event.kode_item,
            nama_item: $event.nama_item,
            qty_satuan_besar: 1,
            kode_satuan_besar: $event.satuans[0].kode_satuan,
            nama_satuan_besar: $event.satuans[0].nama_satuan,
            harga_satuan_besar: $event.harga_satuan,
            isi: $event.satuans[0].isi,
            qty_pesan: $event.satuans[0].isi,
            harga_satuan: $event.harga_satuan,
            disc_prosentase_1: 0,
            disc_nominal_1: 0,
            disc_prosentase_2: 0,
            disc_nominal_2: 0,
            harga_satuan_brutto: $event.harga_satuan,
            tax_prosentase: 0,
            tax_nominal: 0,
            harga_satuan_netto: $event.harga_satuan,
            sub_total_pesan: $event.satuans[0].isi * $event.harga_satuan,
            satuan: $event.satuans,
            validasi:true,
            message:''
        }
        if($event.harga_satuan==0){
            item.validasi = false,
            item.message = 'harga belum di setting'
        }
        this.pemesananService.addDataDetail(item);
        this.selectLastRowdetail();
    }

    handleActionCompleted($event) {

        if ($event.requestType == 'save') {
            console.log($event);
            this.pemesananService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
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
        console.log($event);
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
            this.pemesananService.editBanyak(this.currentIndex, banyak);
        }
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    handleSatuanChange(args: any) {
        if(args != ''){
            this.pemesananService.editSatuan(this.currentIndex, args);
        }
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    handleHargaChange(args: any) {
        let harga: number = parseInt(args);
        if(harga > 0){
            this.pemesananService.editHarga(this.currentIndex, harga);
        }
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    handleSubtotalChange(args: any) {
        let subtotal: number = parseInt(args);
        if(subtotal > 0){
            this.pemesananService.editSubtotal(this.currentIndex, subtotal);
        }
        this.modalRef.hide();
        this.gridDetail.refresh();
    }

    KeyDownHandler(event: KeyboardEvent) {

        if (event.keyCode === 106) {
            this.onOpenQty()
        };

        if (event.keyCode === 46) {
            this.pemesananService.removeDataDetail(this.currentIndex);
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
                    (<HTMLInputElement>document.getElementById("SubtotalValueId")).select();
                    let element = (<HTMLInputElement>document.getElementById("SubtotalValueId"))
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
        if(this.utilityService.validasiDataDetail(this.pemesananService.dataDetail,'cek di tabel item yang berwarna merah!')){
            if (this.formKontrak.valid) {
                this.pemesananService.Insert(this.formKontrak.value)
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
    }

    ResetFrom() {
        this.pemesananService.Reset();
        this.formKontrak.reset();
        this.LookupKodeSupplier.resetValue();
    }

    get id_supplier(): AbstractControl { return this.formKontrak.get('id_supplier'); }

}
