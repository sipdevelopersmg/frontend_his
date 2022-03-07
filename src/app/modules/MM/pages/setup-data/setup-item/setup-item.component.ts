import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import * as Config from './json/grid.config.json';
import * as ConfigKartuStok from './json/grid_kartu_stock.config.json';
import * as ConfigED from './json/grid_ed.config.json';

import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupItemModel } from '../../../models/setup-data/setup-item/SetupItemModel';
import { SetupItemService } from '../../../services/setup-data/setup-item/setup-item.service';
import { MM } from 'src/app/api/MM'
import * as LookupGridGrupItem from './json/lookupGrupItem.json'
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { SetupStockroomService } from '../../../services/setup-data/setup-stockroom/setup-stock-room.service';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { SetupPabrikService } from '../../../services/setup-data/setup-pabrik/setup-pabrik.service';
import * as LookupGridSupplier from './json/lookupsupplier.json'
import { SetupGrupObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-grup-obat/setup-grup-obat.service';
import { SetupCaraPakaiObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-cara-pakai-obat/setup-cara-pakai-obat.service';
import { SetupRutePemberianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service';
import { SetupRestriksiObatService } from 'src/app/modules/Pharmacy/services/formularium/setup-restriksi-obat/setup-restriksi-obat.service';
import { SetupPeresepanMaksimalService } from 'src/app/modules/Pharmacy/services/setup-data/setup-peresepan-maksimal/setup-peresepan-maksimal.service';
import { SetupSatuanService } from '../../../services/setup-data/setup-satuan/setup-satuan.service';
import { SetupItemDetailComponent } from './detail/setup-item-detail/setup-item-detail.component';
import { MolOffcanvasFilterComponent } from 'src/app/modules/shared/components/molecules/filter/mol-offcanvas-filter/mol-offcanvas-filter.component';

@Component({
    selector: 'app-setup-item',
    templateUrl: './setup-item.component.html',
    styleUrls: ['./setup-item.component.css']
})
export class SetupItemComponent implements OnInit, AfterViewInit {

    urlGrupItem = MM.SETUP_DATA.SETUP_GROUP_ITEM.GET_ALL_BY_PARMS;
    LookupGridGrupItem = LookupGridGrupItem;
    @ViewChild('LookupKodeGrupItem') LookupKodeGrupItem: OrgInputLookUpKodeComponent;
    SetupStockrooomDropdownField: object = { text: 'nama_stockroom', value: 'id_stockroom' };
    MaritalSetupPabrikDropdownField: object = { text: 'nama_pabrik', value: 'id_pabrik' };
    MaritalGrupObatDropdownField: object = { text: 'nama_grup_obat', value: 'id_grup_obat' };
    MaritalCaraPakaiObatDropdownField: object = { text: 'cara_pakai_obat', value: 'id_cara_pakai_obat' };
    MaritalRutePemberianObatDropdownField: object = { text: 'nama_rute_pemberian_obat', value: 'id_rute_pemberian_obat' };
    SetupRestriksiObatDropdownField: object = { text: 'nama_restriksi', value: 'id_restriksi_obat' };
    MaritalPeresepanMaksimalDropdownField: object = { text: 'peresepan_maksimal', value: 'id_peresepan_maksimal' };
    MaritalSatuanDropdownField: object = { text: 'nama_satuan', value: 'kode_satuan' };

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[];

    /**
     * Form Group untuk mengatur Form Data
     * @FormGroup 
    */
    FormInputData: FormGroup;
    FormKartuStock: FormGroup;
    /**
     * Variable untuk menentukan apakah form dalam posisi input data atau edit data
     * @Boolean 
    */
    StatusFormNew: Boolean;

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;
    GridConfigKartuStok = ConfigKartuStok;
    GridConfigED = ConfigED;

    /**
     * Variable untuk menentukan component input 
     * @val normal,edit,detail
    */
    inputFieldState = 'normal';

    /**
     * Variable untuk menentukan tap berada di posisi mana 
     * @valur data | input
    */
    TabId: string = 'Data';

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    GridDatasource: any[];
    GridDataSourceKartuStok: any[];
    GridDataSourceED: any[];
    private GridData: MolGridComponent = null;
    @ViewChild('GridDataKartuStok') GridDataKartuStok: MolGridComponent;
    @ViewChild('GridDataED') GridDataED: MolGridComponent;
    @ViewChild('setupItemDetailComp') setupItemDetailComp : SetupItemDetailComponent;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: any;
    total_masuk: number = 0;
    total_keluar: number = 0;
    total_nominal_masuk: number = 0;
    total_nominal_keluar: number = 0;

    tampil_ed: boolean = false;
    id_stockroom_kartu_stok: any = 0;
    FilterColumnDatasource: any[] = [
        { text: 'Barcode', value: 'msi.barcode' },
        { text: 'Kode Item', value: 'msi.kode_item' },
        { text: 'Nama Item', value: 'msi.nama_item' },
    ];

    public month: number = new Date().getMonth();
    public fullYear: number = new Date().getFullYear();
    public startDate: Date;
    public endDate: Date;

    urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
    LookupGridSupplier = LookupGridSupplier;
    @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
    @ViewChild('advanceFilter') advanceFilter: MolOffcanvasFilterComponent;
    FormSatuans: FormArray;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        public setupItemService: SetupItemService,
        public setupStockroomService: SetupStockroomService,
        public setupPabrikService: SetupPabrikService,
        public setupGrupObatService: SetupGrupObatService,
        public setupCaraPakaiObatService: SetupCaraPakaiObatService,
        public setupRutePemberianObatService: SetupRutePemberianObatService,
        public setupRestriksiObatService: SetupRestriksiObatService,
        public setupPeresepanMaksimalService: SetupPeresepanMaksimalService,
        public setupSatuanService: SetupSatuanService,

    ) {
        this.FormInputData = this.formBuilder.group({
            id_item: [0, [Validators.required]],
            id_grup_item: [0, [Validators.required]],
            id_pabrik: [0, [Validators.required]],
            id_supplier: [0, [Validators.required]],
            kode_item: ['', [Validators.required]],
            barcode: ['', [Validators.required]],
            nama_item: ['', [Validators.required]],
            kode_satuan: ['', [Validators.required]],
            id_temperatur_item: [0, [Validators.required]],
            batas_maksimal_pesan: [0, []],
            batas_maksimal_pakai: [0, []],
            batas_maksimal_mutasi: [0, []],
            batas_maksimal_jual: [0, []],
            batas_stok_kritis: [0, []],
            prosentase_stok_kritis: [0, []],
            harga_beli_terakhir: [0, []],
            hpp_average: [0, []],
            prosentase_default_profit: [0, []],
            is_ppn: [true, [Validators.required]],

            is_obat: [true, []],
            id_grup_obat: [0, []],
            id_cara_pakai_obat: [0, []],
            id_rute_pemberian_obat: [0, []],
            id_restriksi_obat: [0, []],
            id_peresepan_maksimal: [0, []],
            kandungan_obat: [0, []],
            is_fornas: [true, []],

            harga_netto_apotek: [0, []],
            prosentase_profit: [0, []],
            prosentase_ppn: [0, []],
            harga_jual_apotek: [0, []],
            tanggal_berlaku: [null, []],

            satuans: this.formBuilder.array([

            ]),
        });

        this.FormSatuans = this.FormInputData.get('satuans') as FormArray;
        this.FormSatuans.push(this.NewSatuans());

        this.FormKartuStock = this.formBuilder.group({
            id_item: ['', []],
            kode_item: ['', []],
            nama_item: ['', []],
        });

    }

    ngOnInit(): void {

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            // { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Kartu Stok', tooltipText: 'Kartu Stock', prefixIcon: 'fas fa-boxes fa-sm', id: 'kartu_stock' },
            'Search'
        ];

        this.GetAllData();
        this.setupStockroomService.setDataSource();
        this.setupPabrikService.setDataSource();
        this.setupGrupObatService.setDataSource();
        this.setupCaraPakaiObatService.setDataSource();
        this.setupRutePemberianObatService.setDataSource();
        this.setupRestriksiObatService.setDataSource();
        this.setupPeresepanMaksimalService.setDataSource();
        this.setupSatuanService.setDataSource();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.handlePencarianFilter([]);
        }, 1);
    }

    NewSatuans(): FormGroup {
        return this.formBuilder.group({
            kode_satuan: ["", []],
            isi: [0, []],
            is_satuan_beli: [false, []]
        });
    }

    handleClickTambahSatuan(): void {
        this.FormSatuans.push(this.NewSatuans());
    }

    handleHapusSatuan(index): void {
        this.FormSatuans.removeAt(index);
    }

    heandleSelectedSupplier(args: any): void {
        this.id_supplier.setValue(args.id_supplier);
    }

    handlePencarianFilter(args) {
        this.setupItemService.onGetAllByParamsSource(args);
        this.GridData.Grid.refresh();
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;
        if (TabId == 'Input') {
            this.setNewForm;
        } else {
            this.GetAllData
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleActionComplete($event: any): void {
        console.log($event);
        if ($event.requestType == "save") {
            if ($event.data.is_active != $event.rowData.is_active) {
                this.SetActive($event.data.is_active, $event.data.id_item)
            }
        }
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.setNewForm();
                break;
            case 'edit':
                this.setEditForm();
                break;
            case 'detail':
                this.setViewForm();
                break;
            case 'kartu_stock':
                this.setKartuStock();
                break;
            default:
                break;
        }
    }

    handleClickCommandGrid(args: any): void {
        console.log(args);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'SaveAndNew':
                this.SaveAndNew();
                break;
            case 'Clear':
                this.Clear();
                break;
            case 'Cancel':
                this.Cancel();
                break;
            default:
                break;
        }
    }

    /** untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args: any): void {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }

    heandleSelectedGrupItem(args: any): void {
        this.id_grup_item.setValue(args.id_grup_item);
    }

    handleClickTampilkan(): void {
        this.tampil_ed = false;
        let param: PostRequestByDynamicFiterModel[] = [
            {
                columnName: 'mksi.id_stockroom',
                filter: 'equal',
                searchText: this.id_stockroom_kartu_stok,
                searchText2: ''
            },
            {
                columnName: 'mksi.tanggal',
                filter: 'between',
                searchText: this.startDate.toISOString(),
                searchText2: this.endDate.toISOString()
            }
        ]
        this.setupItemService.onGetKartuStockByIdItem(this.SelectedData.id_item, param).subscribe((result) => {
            this.GridDataSourceKartuStok = result.data;
            this.total_masuk = result.data.sum('stok_masuk');
            this.total_keluar = result.data.sum('stok_keluar');
            this.total_nominal_masuk = result.data.sum('nominal_masuk');
            this.total_nominal_keluar = result.data.sum('nominal_keluar');
            this.GridDataKartuStok.Grid.refresh();
        })
    }

    handleClickTampilkanED(): void {
        this.tampil_ed = true;
        this.setupItemService.onGetEDItem(this.id_stockroom_kartu_stok, this.SelectedData.id_item).subscribe((result) => {
            this.GridDataSourceED = result.data;
            this.GridDataED.Grid.refresh();
        })
    }

    handleChangeTanggal($args): void {
        console.log($args);
        this.startDate = $args.startDate;
        this.endDate = $args.endDate;
    }

    handleChangeStokroom($args) {
        console.log($args);
        this.id_stockroom_kartu_stok = $args.value
    }

    /** method setting input new data */
    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    };

    /** method setting edit data */
    setEditForm(): void {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];

    };

    /** method setting lihat data detail */
    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(3, 'Detail');
        this.inputFieldState = 'detail';
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
        this.setupItemDetailComp.setValue(this.SelectedData);
    }

    setKartuStock(): void {
        this.tampil_ed = false;
        let Data: any = this.SelectedData;
        this.FormKartuStock.setValue({
            id_item: Data.id_item,
            kode_item: Data.kode_item,
            nama_item: Data.nama_item,
        });
        this.OrgTabsRef.onNavigateTabUsingTabId(2, 'KartuStok');
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
        this.GridDataSourceKartuStok = [];
        this.GridDataKartuStok.Grid.refresh();
    }

    /** Method untuk mengkosongkan data yang ada di form*/
    ResetFrom(): void {
        this.FormInputData.reset();
        this.LookupKodeGrupItem.resetValue();
        this.LookupKodeSupplier.resetValue();
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupItemService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    AddDataItem(): void {
        console.log('Add');
    }

    /** Method Untuk Mengisikan data yang ada di form */
    SetFrom(Data): void {
        this.FormInputData.reset();

        this.LookupKodeSupplier.kodeValue = Data.kode_supplier;
        this.LookupKodeSupplier.titleValue = Data.nama_supplier;

        this.LookupKodeGrupItem.kodeValue = Data.kode_grup_item;
        this.LookupKodeGrupItem.titleValue = Data.grup_item;

        this.FormInputData.setValue({
            id_item: Data.id_item,
            id_grup_item: Data.id_grup_item,
            id_pabrik: Data.id_pabrik,
            id_supplier: Data.id_supplier,
            kode_item: Data.kode_item,
            barcode: Data.barcode,
            nama_item: Data.nama_item,
            kode_satuan: Data.kode_satuan,
            id_temperatur_item: Data.id_temperatur_item,
            batas_maksimal_pesan: Data.batas_maksimal_pesan,
            batas_maksimal_pakai: Data.batas_maksimal_pakai,
            batas_maksimal_mutasi: Data.batas_maksimal_mutasi,
            batas_maksimal_jual: Data.batas_maksimal_jual,
            batas_stok_kritis: Data.batas_stok_kritis,
            prosentase_stok_kritis: Data.prosentase_stok_kritis,
            harga_beli_terakhir: Data.harga_beli_terakhir,
            hpp_average: Data.hpp_average,
            prosentase_default_profit: Data.prosentase_default_profit,
            is_ppn: Data.is_ppn,
            is_obat: Data.is_ppn,
            id_grup_obat: 0,
            id_cara_pakai_obat: 0,
            id_rute_pemberian_obat: 0,
            id_restriksi_obat: 0,
            id_peresepan_maksimal: 0,
            kandungan_obat: 0,
            is_fornas: 0,
            harga_netto_apotek: 0,
            prosentase_profit: 0,
            prosentase_ppn: 0,
            harga_jual_apotek: 0,
            tanggal_berlaku: null,
            satuans: [],
        });


    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data = this.FormInputData.value;
        console.log(Data);
        if (Data.is_obat) {
            Data.obat = {
                "id_grup_obat": Data.id_grup_obat,
                "id_cara_pakai_obat": Data.id_cara_pakai_obat,
                "id_rute_pemberian_obat": Data.id_rute_pemberian_obat,
                "id_restriksi_obat": Data.id_restriksi_obat,
                "id_peresepan_maksimal": Data.id_peresepan_maksimal,
                "kandungan_obat": Data.kandungan_obat,
                "is_fornas": Data.is_fornas,
                "details": [
                    {
                        "harga_netto_apotek": Data.harga_netto_apotek,
                        "prosentase_profit": Data.prosentase_profit,
                        "prosentase_ppn": Data.prosentase_ppn,
                        "harga_jual_apotek": Data.harga_jual_apotek,
                        "tgl_berlaku": Data.tanggal_berlaku
                    }
                ]
            }
        }
        // if (this.inputFieldState == 'normal') {
            this.setupItemService.onPostSave(Data)
                .subscribe((result: SetupItemModel) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.ResetFrom();
                        });
                });
        // } else {
        //     this.setupItemService.onPutEdit(Data)
        //         .subscribe((result: SetupItemModel) => {
        //             this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
        //                 .then(() => {

        //                 });
        //         });
        // }
    }

    /** Method untuk mengubah status aktif | Non Active 
     * @param is_active,kode_item
    */
    SetActive(is_active: boolean, id_item: number): void {
        let data = {
            id_item: id_item,
            user_deactived: 0
        }
        console.log('data', data)
        console.log('is_active', is_active)
        if (is_active) {
            this.setupItemService.onPutToActive(data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Aktifkan', result.message)
                        .then(() => {

                        });
                })
        } else {
            this.setupItemService.onPutToDeActive(data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Di Non Aktifkan', result.message)
                        .then(() => {

                        });
                })
        }
    }

    reloadGrid(){
        this.handlePencarianFilter(this.advanceFilter.AdvancedFilterArrayEmitting);
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ButtonNav = [
        ];
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        // this.GetAllData();
        this.reloadGrid();
    }

    KeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        };
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        };
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }

    bro(args: any) {
        console.log(args);
    }

    get id_item() { return this.FormInputData.get('id_item') }
    get id_grup_item() { return this.FormInputData.get('id_grup_item') }
    get id_pabrik() { return this.FormInputData.get('id_pabrik') }
    get id_supplier() { return this.FormInputData.get('id_supplier') }
    get kode_item() { return this.FormInputData.get('kode_item') }
    get barcode() { return this.FormInputData.get('barcode') }
    get nama_item() { return this.FormInputData.get('nama_item') }
    get kode_satuan() { return this.FormInputData.get('kode_satuan') }
    get id_temperatur_item() { return this.FormInputData.get('id_temperatur_item') }
    get batas_maksimal_pesan() { return this.FormInputData.get('batas_maksimal_pesan') }
    get batas_maksimal_pakai() { return this.FormInputData.get('batas_maksimal_pakai') }
    get batas_maksimal_mutasi() { return this.FormInputData.get('batas_maksimal_mutasi') }
    get batas_maksimal_jual() { return this.FormInputData.get('batas_maksimal_jual') }
    get batas_stok_kritis() { return this.FormInputData.get('batas_stok_kritis') }
    get prosentase_stok_kritis() { return this.FormInputData.get('prosentase_stok_kritis') }
    get harga_beli_terakhir() { return this.FormInputData.get('harga_beli_terakhir') }
    get hpp_average() { return this.FormInputData.get('hpp_average') }
    get prosentase_default_profit() { return this.FormInputData.get('prosentase_default_profit') }
    get is_ppn() { return this.FormInputData.get('is_ppn') }
    get is_obat() { return this.FormInputData.get('is_obat') }
    get user_created() { return this.FormInputData.get('user_created') }

    get satuans(): FormArray {
        return this.FormInputData.get("satuans") as FormArray
    }

}
