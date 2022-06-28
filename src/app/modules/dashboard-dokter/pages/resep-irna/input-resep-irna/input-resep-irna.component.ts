import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownList, DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { IEditCell, EditSettingsModel, GridModel, GridComponent, AddEventArgs } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { PHARMACY } from 'src/app/api/PHARMACY';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert } from '../../../models/resep.model';
import * as GridLookUpItem from './json/lookupitem.json'
import * as GridConfig from './json/GridResep.json';
import * as GridlookUpTemplateResep from './json/lookuptemplateresep.json'
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data'
import { SetupLabelPemakaianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service';
import { SetupMetodeRacikanService } from 'src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service';
import { SetupRutePemberianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-rute-pemberian-obat/setup-rute-pemberian-obat.service';
import { ResepDokterService } from '../../../services/resep-dokter/resep-dokter.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupSatuanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-satuan-aturan-pakai/setup-satuan-aturan-pakai.service';
import { SetupIntervalAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-interval-aturan-pakai/setup-interval-aturan-pakai.service';
import { SetupTambahanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service';
import moment from 'moment';
import Swal from 'sweetalert2';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ResepDokterIrnaService } from '../../../services/resep-dokter-irna/resep-dokter-irna.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { DaftarPasienService } from '../../../services/daftar-pasien/daftar-pasien.service';
import { SetupOutletService } from 'src/app/modules/Pharmacy/services/setup-data/setup-outlet/setup-outlet.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-input-resep-irna',
    templateUrl: './input-resep-irna.component.html',
    styleUrls: ['./input-resep-irna.component.css'],
    providers: [BsModalService]

})
export class InputResepIrnaComponent implements OnInit {

    ShowTitle: boolean = true;

    /**
      * Variable Button Nav
      * @ButtonNav: ButtonNavModel[]
    */
    ButtonNav: ButtonNavModel[] = [
        { Id: "Kembali", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
        { Id: "Template", Icons1: "fas fa-tags fa-sm", Captions: "Template Resep" },
        { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
        { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
    ];

    modalRef: BsModalRef;

    @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;
    @ViewChild('LookupTemplateResep') LookupTemplateResep: OrgLookUpHirarkiComponent;
    @ViewChild('modalTemplateResep') modalTemplateResep: TemplateRef<any>;
    @ViewChild('MaritalOutletDropdown') MaritalOutletDropdown: DropDownListComponent;

    public itemsParams: IEditCell;
    public itemsElem: HTMLElement;
    public itemsObj: DropDownList;
    isGetFromTemplate: boolean;

    public urlRacikan = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN;
    public urlTemplateResep = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRNA.GET_TEMPLATE_RESEP;
    public GridLookUpItem = GridLookUpItem;
    public GridlookUpTemplateResep = GridlookUpTemplateResep;


    DropdownAturanFields: object = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };
    DropdownRuteFields: object = { text: "nama_rute_pemberian_obat", value: "id_rute_pemberian_obat" };
    DropdownPemakaianFields: object = { text: "interval_aturan_pakai", value: "id_interval_aturan_pakai" };
    DropdownLabelFields: object = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
    SetupOutletDropdownField: object = { text: 'nama_outlet', value: 'id_outlet' };

    // ** Form Add Obat Properties
    FormAddObat: FormGroup;
    FormAddObatState: string = "input";

    // ** Satuan 
    SatuanObat: string = "-";

    DropdownObatFields: object = { text: 'nama_obat', value: 'id_item' };
    DropdownMetodeRacikanFields: object = { text: 'metode_racikan', value: 'id_metode_racikan' };
    DropdownsatuanPakaiFields: object = { text: "satuan_aturan_pakai", value: "id_satuan_aturan_pakai" };


    NamaObatDatasource: any[] = [];
    dataSourceTambahanAturanPakai: any[] = [];
    dataSourceLabelPemakaian: any = [];
    dataSourceSatuanAturanPakai = [];

    // ** Waktu Pakai
    WaktuPakai: any[] = [];

    // ** Grid Daftar Obat Properties
    GridDaftarObatEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDaftarObatToolbar: any[];
    GridDaftarObatDataSource: any[] = [];
    GridDaftarObatColumns = GridConfig;
    GridDaftarObatHeight: string;
    private gridDaftarObat: MolGridComponent;

    // ** Selected Data Obat
    SelectedDataObat: TrResepDokterIrjaDetailInsert;
    SelectedDataRacikanObat: TrResepDokterIrjaDetailRacikanInsert;
    public get width(): any { return window.innerWidth; };

    GridDetailResepRacikanDatasource = [];
    GridResepRacikanDatasource = [];
    DataRacikan: TrResepDokterIrjaDetailRacikanInsert[] = [];
    ChildGrid: GridModel;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

    newdetail: any = [];
    baru: any = 0;
    data_header: any = null;

    globalListenFunc: Function;
    counter: number = 0;
    counterRacikan: number = 0;

    dataSourceGrid = new BehaviorSubject([]);
    dataScourceGridChild: any[] = [];

    KandunganParams: IEditCell;
    KandunganElem: HTMLElement;
    KandunganObj: NumericTextBox;
    currentQtyResep: number;
    currentIdItem: number;
    currentIndex: number;

    inputObat: boolean = false;

    // SERVER SIDE 
    public IsUserLogin: IAuthenticationResponseModel = JSON.parse(localStorage.getItem('UserData'));

    public data: DataManager = new DataManager({
        headers: [
            {
                Authorization: "Bearer " + this.IsUserLogin.token
            }
        ],
        url: PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_OBAT_PARAMS_DROPDOWNLIST,
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });

    public fields: Object = { text: 'nama_obat', value: 'id_item' };
    public query: Query = new Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where("msi.nama_item", 'contains', '', true);
    public text: string = "Select a Obat";
    public sorting: string = 'Ascending';
    public onFiltering = (e: FilteringEventArgs) => {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.data);
        } else {
            let query: Query = new Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where("msi.nama_item", 'contains', e.text, true);
            e.updateData(this.data, query);
        }
    };
    //=====================
    public dataChild: DataManager = new DataManager({
        headers: [
            {
                Authorization: "Bearer " + this.IsUserLogin.token
            }
        ],
        url: PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_OBAT_PARAMS_DROPDOWNLIST,
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    public queryChild: Query = new Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where("msi.nama_item", 'contains', '', true);

    public keterangan = (field: string, data1: object) => {
        return data1['rute_pemberian_obat'] + ', sehari ' +
            data1['qty_harian'] + ' ' + data1['nama_satuan'] + ' ' + data1['ket_label'] + ' ' + data1['satuan_aturan_pakai'] + ' ' + data1['ket_aturan'];
    }

    public quantity = (field: string, data1: object) => {
        return data1['qty_harian'] + ' ' +
            data1['nama_satuan'] + '/Hari, untuk ' + data1['jumlah_hari'] + ' Hari';
    }

    private dataUbah: any = null;
    private updateResepDokter: boolean = false;
    private pulang: boolean = false;
    private idArry: any[] = [];
    private setIdOutlet: any = 0;

    @Input('QueryParams') QueryParams: any;

    @Output('handleClickButtonNav') handleClickButtonNav = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        public resepDokterService: ResepDokterIrnaService,
        public setupMetodeRacikanService: SetupMetodeRacikanService,
        public setupRutePemberianObatService: SetupRutePemberianObatService,
        public setupSatuanAturanPakaiService: SetupSatuanAturanPakaiService,
        public setupIntervalAturanPakaiService: SetupIntervalAturanPakaiService,
        public setupTambahanAturanPakaiService: SetupTambahanAturanPakaiService,
        public setupLabelPemakaianObatService: SetupLabelPemakaianObatService,
        private utilityService: UtilityService,
        private modalService: BsModalService,
        private router: Router,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        public daftarPasienService: DaftarPasienService,
        public setupOutletService: SetupOutletService,
    ) { }

    ngOnInit(): void {
        this.FormAddObat = this.formBuilder.group({

            counter: [0, []],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [null, []],
            id_metode_racikan: [1, []],
            metode_racikan: ['Puyer', []],
            id_item: [null, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            jumlah_hari: [1, []],
            qty_harian: [1, []],
            qty_resep: [1, []],
            nama_satuan: ['-', []],

            id_rute_pemberian_obat: [null, []],
            rute_pemberian_obat: ['', []],

            id_satuan_aturan_pakai: [null, []],
            satuan_aturan_pakai: ['', []],

            label: ['', []],
            ket_label: ['', []],
            id_label_pemakaian_obat: [null, []],
            label_pemakaian_obat: ['', []],

            aturan: ['', []],
            ket_aturan: ['', []],
            id_tambahan_aturan_pakai: [null, []],
            label_tambahan_aturan_pakai_obat: ['', []],

        });

        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        let currentQtyResep = this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepDokterService.dataSelectRacikan.next(SelectedDataRacikanObat);

        this.itemsParams = {
            create: () => {

                if (SelectedDataRacikanObat) {
                    this.queryChild = new Query().from('Obat')
                        .select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'])
                        .take(10).where("msi.nama_item", 'contains', SelectedDataRacikanObat.nama_obat, true)
                } else {
                    this.queryChild = new Query().from('Obat')
                        .select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan'])
                        .take(10).where("msi.nama_item", 'contains', '', true)
                }

                this.itemsElem = document.createElement('input');
                return this.itemsElem;
            },
            read: () => {
                return this.itemsObj.text;
            },
            destroy: () => {
                this.itemsObj.destroy();
            },
            write: () => {
                this.itemsObj = new DropDownList({
                    dataSource: this.dataChild,
                    fields: this.fields,
                    query: this.queryChild,
                    enabled: true,
                    placeholder: 'Select a obat',
                    // floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
                    filtering: function (e) {
                        if (e.text === '') {
                            e.updateData(this.data);
                        } else {
                            let query: Query = new Query().from('Obat').select(['nama_obat', 'id_item', 'kandungan_obat', 'nama_satuan']).take(10).where("msi.nama_item", 'contains', e.text, true);
                            e.updateData(this.data, query);
                        }
                    }.bind(this),
                    change: function (args) {
                        currentIdItem = args.itemData.id_item;
                        console.log('currentItem', currentIdItem);
                        this.setFormGrif(args, currentQtyResep, currentIdItem, SelectedDataRacikanObat);
                    }.bind(this),
                });

                this.itemsObj.appendTo(this.itemsElem);

                if (SelectedDataRacikanObat) {
                    this.setFormGrif(null, SelectedDataRacikanObat.qty_resep, currentIdItem, SelectedDataRacikanObat);
                    setTimeout(() => {
                        console.log('', SelectedDataRacikanObat);
                        currentIdItem = SelectedDataRacikanObat.id_item;
                        this.itemsObj.value = currentIdItem;
                    }, 10)

                }
            }
        }

        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        let dataSourceGrid = this.dataSourceGrid;
        this.resepDokterService.dataSourceChildGrid.next(dataSourceChild);
        this.resepDokterService.dataSourceParentGrid.next(dataSourceGrid.value);
        let nav = 'add';

        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "counter",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "counter", headerText: 'c', width: 100, visible: false },
                { field: "no_urut", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat', editType: 'dropdownedit', edit: this.itemsParams, width: 200 },
                { field: "nama_satuan", headerText: 'Satuan', textAlign: 'Right', width: 80, allowEditing: false },
                { field: "id_item", headerText: 'id', width: 100, visible: false },
                { field: "komposisi", headerText: 'kps', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', allowEditing: false },
                { field: "seper", headerText: '1/', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "kandungan", headerText: 'Kandungan', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100 },
            ],
            rowSelected(args) {
                SelectedDataRacikanObat = args.data
                console.log('row selected', SelectedDataRacikanObat)

            },
            actionBegin(args: AddEventArgs) {
                console.log('begin', args)
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    (args.data as object)[counter] = this.parentDetails.parentKeyFieldValue;
                    (args.data as object)['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    // (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_harian;
                    SelectedDataRacikanObat = null;
                }
            },
            actionComplete(args) {
                console.log(args);
                if (args.requestType == 'save') {
                    if (args.action == 'add') {
                        args.data.id_item = currentIdItem;
                        args.data.counterRacikan = counterRacikan++;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        console.log(dataSourceChild);
                        dataSourceChild.push(args.data);
                    }
                    if (args.action == 'edit') {
                        args.data.id_item = currentIdItem;
                        args.data.qty_racikan = parseFloat(args.data.qty_racikan);
                        let index = dataSourceChild.map((item) => { return item.counterRacikan }).indexOf(args.data.counterRacikan);
                        dataSourceChild[index] = args.data;
                    }
                    let data: any[] = []
                    dataSourceChild.orderBy('-counterRacikan')
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent)
                    })
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500)
                }
                if (args.requestType == "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);

                    let data = []
                    dataSourceChild.orderBy('-counterRacikan')
                    dataSourceGrid.value.forEach((itemPrent, indexPrent) => {
                        data.push(itemPrent)
                    })
                    setTimeout(() => {
                        dataSourceGrid.next(data);
                        console.log(data);
                    }, 500)
                }
            }
        }

        this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
            this.dataSourceLabelPemakaian = result.data;
        });

        this.setupMetodeRacikanService.setDataSource();
        // this.resepDokterService.setDataObat([]);
        this.setupRutePemberianObatService.setDataSource();
        this.setupIntervalAturanPakaiService.setDataSource();

        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceTambahanAturanPakai = result.data;
        });

        this.setupSatuanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceSatuanAturanPakai = result.data;
        })
        this.resepDokterService.reset();
        this.setupOutletService.setDataSource();

        this.urlRacikan = this.urlRacikan + '/' + this.daftarPasienService.ActivePasien.value.id_dokter + '/I';
        this.urlTemplateResep = this.urlTemplateResep + '/' + this.daftarPasienService.ActivePasien.value.id_dokter;

        if ((this.router.url).includes('Dokter')) {
            this.ShowTitle = false;
        }
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            if (this.ShowTitle) {
                if (typeof this.activatedRoute.snapshot.params["id"] !== 'undefined') {
                    let idString: string;
                    idString = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
                    this.idArry = idString.split(',');
                    if (this.idArry[1] == 'pulang') {
                        this.pulang = true;
                        this.ButtonNav = [
                            { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                            { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Simpan Resep Pulang" },
                        ];
                    } else {
                        this.ButtonNav = [
                            { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                            { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Ubah Resep Dokter" },
                        ];
                    }

                    this.updateResep(parseInt(this.idArry[0]));
                }
            } else {
                this.checkQueryParams();
            }

        }, 1);
    }

    checkQueryParams(): void {
        if (typeof this.QueryParams !== 'undefined') {
            let idString: string;
            idString = this.encryptionService.decrypt(this.QueryParams);
            this.idArry = idString.split(',');

            if (this.idArry[1] == 'pulang') {
                this.pulang = true;
                this.ButtonNav = [
                    { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                    { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Simpan Resep Pulang" },
                ];
            } else {
                this.ButtonNav = [
                    { Id: "kembali_update", Icons1: "fas fa-arrow-left fa-sm", Captions: "Kembali" },
                    { Id: "ubah", Icons1: "fas fa-save fa-sm", Captions: "Ubah Resep Dokter" },
                ];
            }

            this.updateResep(parseInt(this.idArry[0]));
        }
    }

    updateResep(id: any) {
        this.resepDokterService.onGetById(id).subscribe((result) => {
            this.dataUbah = result.data;
            this.setIdOutlet = result.data.id_outlet;
            this.MaritalOutletDropdown.value = result.data.id_outlet;
            this.heandleSelectedTemplateResep(result.data);
            this.updateResepDokter = true;
        })
    }

    handleClickTambahObat() {
        this.inputObat = true;
        this.tanggal_mulai_text.setValue(this.utilityService.onFormatDate(this.tanggal_mulai.value, 'Do MMMM yyyy'));
        this.tanggal_sampai_text.setValue(this.utilityService.onFormatDate(this.tanggal_sampai.value, 'Do MMMM yyyy'));
    }

    handleChangeOutlet(args: any) {
        this.setIdOutlet = args.value;
    }

    onLoad(args: any) {

    }

    setFormGrif(args: any, currentQtyResep: any, id_item: any, SelectedDataRacikanObat: any) {
        // console.log('function setgrid',SelectedDataRacikanObat);
        if (SelectedDataRacikanObat) {
            (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = SelectedDataRacikanObat.nama_satuan;
            (<HTMLInputElement>document.getElementsByName("komposisi")[0]).value = SelectedDataRacikanObat.komposisi;
            (<HTMLInputElement>document.getElementsByName("seper")[0]).value = SelectedDataRacikanObat.seper;
            (<HTMLInputElement>document.getElementsByName("kandungan")[0]).value = SelectedDataRacikanObat.kandungan;
            (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value = SelectedDataRacikanObat.qty_racikan;
        } else {
            (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value = args.itemData.nama_satuan;
            (<HTMLInputElement>document.getElementsByName("komposisi")[0]).value = args.itemData.kandungan_obat;
            (<HTMLInputElement>document.getElementsByName("seper")[0]).value = '1';
            (<HTMLInputElement>document.getElementsByName("kandungan")[0]).value = args.itemData.kandungan_obat;
            (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value = currentQtyResep.toString();
        }

        let seper = (<HTMLInputElement>document.getElementsByName("seper")[0])
        if (seper) {
            seper.addEventListener('click', (event) => {
                seper.select();
            });
            seper.addEventListener('keyup', (event) => {
                let komposisi = parseInt((<HTMLInputElement>document.getElementsByName("komposisi")[0]).value);
                let seper = parseInt((<HTMLInputElement>document.getElementsByName("seper")[0]).value);
                let hasil = komposisi / seper;
                (<HTMLInputElement>document.getElementsByName("kandungan")[0]).value = hasil.toString();
                let butuh = currentQtyResep * hasil;
                let qty = butuh / komposisi;
                (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value = qty.toString();
            });

            this.setInputFilter(seper, function (value) {
                return /^\d*$/.test(value);
            });
        }

        let kandungan = (<HTMLInputElement>document.getElementsByName("kandungan")[0])
        if (kandungan) {
            kandungan.addEventListener('click', (event) => {
                kandungan.select();
            });
            kandungan.addEventListener('keyup', (event) => {
                let kandungan = parseInt((<HTMLInputElement>document.getElementsByName("kandungan")[0]).value);
                let komposisi = parseInt((<HTMLInputElement>document.getElementsByName("komposisi")[0]).value);
                let butuh = currentQtyResep * kandungan;
                console.log(butuh)
                let qty = butuh / komposisi;
                (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value = qty.toString();
                (<HTMLInputElement>document.getElementsByName("seper")[0]).value = '1';
            });
            this.setInputFilter(kandungan, function (value) {
                return /^\d*$/.test(value);
            });
        }

        let qty_racikan = (<HTMLInputElement>document.getElementsByName("qty_racikan")[0])
        if (qty_racikan) {
            qty_racikan.addEventListener('click', (event) => {
                qty_racikan.select();
            });
            this.setInputFilter(qty_racikan, function (value) {
                return /^\d*$/.test(value);
            });
        }
    }

    setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function (event) {
            textbox.addEventListener(event, function (this: (HTMLInputElement | HTMLTextAreaElement) & { oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null }) {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (Object.prototype.hasOwnProperty.call(this, 'oldValue')) {
                    this.value = this.oldValue;
                    if (this.oldSelectionStart !== null &&
                        this.oldSelectionEnd !== null) {
                        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    }
                } else {
                    this.value = "";
                }
            });
        });
    }

    rowDataBound(args: any) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        } else {
            // args.row.classList.add('is-racikan');
        }
    }

    onDataBound() {
        this.GridResepRacikan.detailRowModule.expandAll();
    }

    // ** Dropdown Nama Obat onchange method
    handleChangeObat(args: any): void {
        this.nama_satuan.setValue(args.itemData.nama_satuan);
        this.nama_obat.setValue(args.itemData.nama_obat);
    }

    handleChangeLabel(args: any): void {
        this.label_pemakaian_obat.setValue('');
        this.id_label_pemakaian_obat.setValue(args.value);
        this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        this.qty_harian.setValue(args.itemData.berapa_kali_per_hari);
    }

    handleChangeAturan(args: any): void {
        if (typeof args.value === 'number' && (args.value % 1) === 0) {
            this.label_tambahan_aturan_pakai_obat.setValue('');
            this.id_tambahan_aturan_pakai.setValue(args.value);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        } else {
            this.label_tambahan_aturan_pakai_obat.setValue(args.value);
            this.id_tambahan_aturan_pakai.setValue(1);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        }
    }

    handleChangeRacikan(args: any) {
        if (args) {
            this.nama_satuan.setValue('PUYER')
        } else {
            this.nama_satuan.setValue("-");
        }
    }

    handleChangeNamaRacikan(): void {
        this.set_racikan_id.setValue(null);
    }

    handelClickRacikan(): void {
        this.LookupRacikan.onOpenModal();
    }

    handleChangeMetodeRacikan(args: any): void {
        this.metode_racikan.setValue(args.itemData.metode_racikan);
        this.nama_satuan.setValue(args.itemData.metode_racikan);
    }

    handleChangeRute(args: any): void {
        this.rute_pemberian_obat.setValue(args.itemData.nama_rute_pemberian_obat);
    }

    handleChangePemakaian(args: any): void {
        console.log(args);
        //   this.interval_aturan_pakai.setValue(args.itemData.interval_aturan_pakai);
    }

    handleChangeSatuanAturan(args: any): void {
        this.satuan_aturan_pakai.setValue(args.itemData.satuan_aturan_pakai);
    }

    handleSelectedRacikan(args: any): void {
        args.is_racikan = true;

        this.set_racikan_id.setValue(args.set_racikan_id);
        this.nama_obat.setValue(args.nama_obat);
        this.nama_racikan.setValue(args.nama_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.metode_racikan.setValue(args.metode_racikan);
        this.id_rute_pemberian_obat.setValue(args.id_rute_pemberian_obat);
        this.rute_pemberian_obat.setValue(args.nama_rute_pemberian_obat);
        this.id_metode_racikan.setValue(args.id_metode_racikan);
        this.nama_satuan.setValue(args.metode_racikan);
        this.label.setValue(args.id_label_pemakaian_obat)
        this.id_label_pemakaian_obat.setValue(args.id_label_pemakaian_obat);
        this.ket_label.setValue(args.ket_label);
        this.id_satuan_aturan_pakai.setValue(args.id_satuan_aturan_pakai);
        this.satuan_aturan_pakai.setValue(args.satuan_aturan_pakai);
        this.aturan.setValue(args.id_tambahan_aturan_pakai);
        this.label_tambahan_aturan_pakai_obat.setValue(args.label_tambahan_aturan_pakai_obat);
        this.id_tambahan_aturan_pakai.setValue(args.id_tambahan_aturan_pakai);
        this.ket_aturan.setValue(args.ket_aturan);

        let detail: any[] = [];
        // detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counterRacikan = counterRacikan;
            element.komposisi = parseInt(element.kandungan_obat);
            element.kandungan = 1;
            element.seper = 1;
            element.qty_resep = args.qty_resep;
            detail.push(element);
        });
        console.log(detail);
        this.DataRacikan = detail;
    }

    heandleSelectedTemplateResep(args: any) {
        let obat: any = [];
        let detail: any;
        detail = this.GridResepRacikan.childGrid.dataSource;

        args.details.forEach(element => {
            this.counter++;

            element.counter = this.counter;

            if (element.is_racikan) {
                element.nama_racikan = element.nama_obat
            } else {
                element.nama_racikan = ''
            }

            if (element.id_label_pemakaian_obat == 1) {
                element.label = element.ket_label;
            } else {
                element.label = element.id_label_pemakaian_obat;
            }

            if (element.id_tambahan_aturan_pakai == 1) {
                element.aturan = element.ket_aturan;
            } else {
                element.aturan = element.id_tambahan_aturan_pakai;
            }

            element.rute_pemberian_obat = element.nama_rute_pemberian_obat;

            // this.resepDokterService.addDetail(element);
            obat.push(element)

            element.racikans.forEach(racikan => {
                let counterRacikan = this.counterRacikan++;
                racikan.counter = this.counter;
                racikan.counterRacikan = counterRacikan;
                racikan.komposisi = parseInt(racikan.kandungan_obat);
                racikan.kandungan = 1;
                racikan.seper = 1;
                racikan.qty_resep = element.qty_resep;
                detail.push(racikan);
            });

        });

        this.dataSourceGrid.next(obat);
        this.resepDokterService.dataSourceChildGrid.next(detail);
        this.resepDokterService.dataSourceParentGrid.next(obat);
        this.GridResepRacikan.refresh();
        this.isGetFromTemplate = true;
    }

    handleAddObat(FormAddObat: any): void {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat
            this.counter++;
            FormAddObat.counter = this.counter;

            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            } else {
                FormAddObat.id_metode_racikan = null;
                FormAddObat.metode_racikan = null;
            }
            //   this.resepDokterService.addDetail(FormAddObat);
            let dataDetail = this.dataSourceGrid.value
            dataDetail.push(FormAddObat);
            this.dataSourceGrid.next(dataDetail);
            this.resepDokterService.dataSourceParentGrid.next(dataDetail);

            let racikan
            racikan = this.GridResepRacikan.childGrid.dataSource
            console.log(racikan);

            if (this.is_racikan.value && this.DataRacikan.length > 0) {
                console.log(this.DataRacikan);
                this.DataRacikan.forEach((item, index) => {
                    item.counter = this.counter
                    racikan.push(item)
                })
                this.DataRacikan = []
            }
            console.log(racikan);

            this.resepDokterService.dataSourceChildGrid.next(racikan);
            this.GridResepRacikan.refresh();
            this.onResetFormObat();
        }
    }

    validasi(FormData: any): boolean {
        let message = []
        let htmlSelection: string = ''
        console.log('validasi', FormData);
        if (FormData.is_racikan) {
            if (FormData.nama_racikan == '' || FormData.nama_racikan == null) {
                message.push('Nama Racikan belum di isi')
            }
            if (FormData.metode_racikan == '' || FormData.metode_racikan == null) {
                message.push('Kemasan Racikan belum di isi')
            }
        } else {
            if (FormData.nama_obat == '' || FormData.nama_obat == null) {
                message.push('obat belum di pillih')
            }
            if (FormData.satuan_aturan_pakai == '' || FormData.satuan_aturan_pakai == null) {
                message.push('Satuan belum di pillih')
            }
        }

        if (FormData.rute_pemberian_obat == '' || FormData.rute_pemberian_obat == null) {
            message.push('Rute Pemberian Obat Obat belum di isi')
        }

        if (FormData.label == '' || FormData.label == null) {
            message.push('Label Obat belum di isi')
        }

        if (FormData.aturan == '' || FormData.aturan == null) {
            message.push('Aturan Tambahan belum di isi')
        }

        if (message.length > 0) {
            htmlSelection = '<div class="text-danger"><ul>';
            message.forEach((value: any, index) => {
                htmlSelection += `<li>${value}</li>`;
            })
            htmlSelection += `</ul></div>`;

            Swal.fire({
                icon: 'error',
                title: 'Validasi Data',
                html: htmlSelection,
            })

            return false;
        } else {
            return true;
        }
    }

    onResetFormObat(): void {
        this.set_racikan_id.setValue(null);
        this.id_metode_racikan.setValue(null);
        this.metode_racikan.setValue('');
        this.id_item.setValue(null);
        this.nama_racikan.setValue('');
        this.nama_obat.setValue('');
        this.nama_satuan.setValue('-');

        this.SatuanObat = "";
        this.is_racikan.setValue(false);
    }

    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat: any): void {
        if (this.validasi(FormAddObat)) {
            FormAddObat.nama_rute_pemberian_obat = FormAddObat.rute_pemberian_obat
            if (FormAddObat.is_racikan) {
                FormAddObat.nama_obat = FormAddObat.nama_racikan;
            }
            let dataDetail = this.dataSourceGrid.value
            dataDetail[this.currentIndex] = FormAddObat
            this.dataSourceGrid.next(dataDetail);
            this.resepDokterService.dataSourceParentGrid.next(dataDetail);
            this.onResetFormObat()
            this.GridResepRacikan.refresh();
            this.FormAddObatState = "input";
        }
    }

    // ** Grid Daftar Obat method
    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarObat = component;
    }

    // ** Grid Daftar Obat method
    onToolbarClick(args: any): void {
        switch (args.item.id) {
            case "edit":
                //   this.FormAddObat.setValue(this.SelectedDataObat);
                this.onEditData();
                this.FormAddObatState = "edit";
                break;
            case "delete":
                let dataObat = this.resepDokterService.dataSourceParentGrid.value
                dataObat.splice(this.currentIndex, 1);
                this.resepDokterService.dataSourceParentGrid.next(dataObat)
                this.dataSourceGrid.next(dataObat);
                this.GridResepRacikan.refresh();
                break;
            default:
                break;
        };
    }

    onEditData() {
        let data = this.SelectedDataObat
        console.log(data);
        this.FormAddObat.setValue({
            counter: data.counter,
            no_urut: data.no_urut,
            is_racikan: data.is_racikan,
            set_racikan_id: data.set_racikan_id,
            id_metode_racikan: data.id_metode_racikan,
            metode_racikan: data.metode_racikan,
            id_item: data.id_item,
            nama_obat: data.nama_obat,
            qty_resep: data.qty_resep,
            nama_satuan: data.nama_satuan,
            label: data.label,
            ket_label: data.ket_label,
            id_label_pemakaian_obat: data.id_label_pemakaian_obat,
            label_pemakaian_obat: data.label_pemakaian_obat,
            aturan: data.aturan,
            ket_aturan: data.ket_aturan,
            id_tambahan_aturan_pakai: data.id_tambahan_aturan_pakai,
            label_tambahan_aturan_pakai_obat: data.label_tambahan_aturan_pakai_obat,
            nama_racikan: data.nama_racikan,
            id_satuan_aturan_pakai: data.id_satuan_aturan_pakai,
            satuan_aturan_pakai: data.satuan_aturan_pakai,

            jumlah_hari: data.jumlah_hari,
            qty_harian: data.qty_harian,
            id_rute_pemberian_obat: data.id_rute_pemberian_obat,
            rute_pemberian_obat: data.nama_rute_pemberian_obat
        });
    }

    onActionComplete(args: any): void {
        // let dataSourceParent: any = this.GridResepRacikan.dataSource;
        // this.resepDokterService.dataSourceParentGrid.next(dataSourceParent);

        // console.log("Parent", this.GridResepRacikan.dataSource);
        // console.log("Children", this.GridResepRacikan.childGrid.dataSource);
    }

    // ** Grid Daftar Obat method
    onRowSelected(args: any): void {
        this.currentIndex = args.rowIndex;
        this.SelectedDataObat = args.data;
    }

    Insert() {
        if (this.setIdOutlet == 0) {
            this.utilityService.onShowingCustomAlert('warning', 'Depo Farmasi belum di isi', '')
            return false;
        }
        this.data_header = {
            id_dokter: this.daftarPasienService.ActivePasien.value.id_dokter,
            id_register: this.daftarPasienService.ActivePasien.value.id_register,
            id_outlet: this.setIdOutlet,
            id_person: this.daftarPasienService.ActivePasien.value.id_person,
            jenis_rawat: 'I',
            nama_template: '',
            tanggal_resep: moment().format()
        }

        this.newdetail = this.resepDokterService.dataSourceParentGrid.value.filter((item) => {
            return item.is_racikan && !item.set_racikan_id
        })

        this.baru = 0
        if (!this.isGetFromTemplate) {
            this.modalRef = this.modalService.show(
                this.modalTemplateResep,
                Object.assign({}, { class: 'modal-lg' })
            );
        } else {
            this.methodConfirmSetRacikan(0)
        }
    }

    handleClickSimpanTemplateResepDokter() {
        let nama_resep = (<HTMLInputElement>document.getElementsByName("nama_resep")[0]).value;
        this.data_header.nama_template = nama_resep;
        this.modalRef.hide();
        this.methodConfirmSetRacikan(1)
    }

    handleClickAbaikan() {
        this.modalRef.hide();
        this.methodConfirmSetRacikan(0)
    }

    methodConfirmSetRacikan(simpan_template: any) {
        if (this.newdetail.length > 0) {
            Swal.fire({
                title: 'Apakah Anda Ingin Menyimpan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya Simpan Sebagai Template Racikan',
                cancelButtonText: 'Tidak',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.baru = 1
                } else {
                    this.baru = 0
                }
                this.methodInsert(this.data_header, simpan_template, this.baru)
            });
        } else {
            this.methodInsert(this.data_header, simpan_template, 0)
        }
    }

    methodInsert(Data: any, is_simpan_template: number, is_simpan_racikan: number) {
        this.resepDokterService.Insert(Data, is_simpan_template, is_simpan_racikan).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    // this.resepDokterService.reset();
                    this.isGetFromTemplate = false;
                    this.router.navigateByUrl('Dokter/resep-irna/daftar-resep-irna');
                });
        })
    }

    ubahResep() {
        if (this.pulang) {
            this.resepDokterService.pulangResepRawatInap(this.dataUbah).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Simpan Resep Pulang', result.message)
                    .then(() => {
                        const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                        this.router.navigate(['Dokter/resep-irna/view-resep-irna', id, "GRAHCIS"]);
                    });
            });
        } else {
            this.resepDokterService.ubahResepRawatInap(this.dataUbah).subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Resep Ini Berhasil Di Ubah', result.message)
                    .then(() => {
                        const id = this.encryptionService.encrypt(JSON.stringify(result.data));
                        this.router.navigate(['Dokter/resep-irna/view-resep-irna', id, "GRAHCIS"]);
                    });
            });
        }
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "kembali_update":
                if (this.ShowTitle) {
                    const id = this.encryptionService.encrypt(JSON.stringify(this.dataUbah.resep_id));
                    this.router.navigate(['Dokter/resep-irna/view-resep-irna', id, "GRAHCIS"]);
                } else {
                    this.handleClickButtonNav.emit('kembali_update')
                }
                break;
            case "ubah":
                this.ubahResep();
                break;
            case "Kembali":
                if (this.ShowTitle) {
                    this.router.navigateByUrl('Dokter/resep-irna/daftar-resep-irna');
                } else {
                    this.handleClickButtonNav.emit('Kembali');
                }
                break;
            case "Template":
                this.handelClickTemplateResep();
                break;
            case "Reset":
                // this.resepDokterService.reset();
                this.isGetFromTemplate = false;
                window.location.reload();
                break;
            case "Simpan":
                // console.log('childernya',this.dataScourceGridChild)  
                this.resepDokterService.dataSourceChildGrid.next(this.dataScourceGridChild);
                this.Insert();
                // this.resepDokterService.saveResep();
                break;
            default:
                break;
        }
    }

    handelClickTemplateResep(): void {
        this.LookupTemplateResep.onOpenModal();
    }

    get tanggal_mulai(): AbstractControl { return this.FormAddObat.get('tanggal_mulai'); };
    get tanggal_sampai(): AbstractControl { return this.FormAddObat.get('tanggal_sampai'); };
    get tanggal_mulai_text(): AbstractControl { return this.FormAddObat.get('tanggal_mulai_text'); };
    get tanggal_sampai_text(): AbstractControl { return this.FormAddObat.get('tanggal_sampai_text'); };
    get is_racikan(): AbstractControl { return this.FormAddObat.get('is_racikan'); };
    get set_racikan_id(): AbstractControl { return this.FormAddObat.get('set_racikan_id'); };
    get id_metode_racikan(): AbstractControl { return this.FormAddObat.get('id_metode_racikan'); };
    get metode_racikan(): AbstractControl { return this.FormAddObat.get('metode_racikan'); };
    get id_item(): AbstractControl { return this.FormAddObat.get('id_item'); };
    get nama_racikan(): AbstractControl { return this.FormAddObat.get('nama_racikan'); }
    get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
    get jumlah_hari(): AbstractControl { return this.FormAddObat.get('jumlah_hari'); }
    get qty_harian(): AbstractControl { return this.FormAddObat.get('qty_harian'); }
    get qty_resep(): AbstractControl { return this.FormAddObat.get('qty_resep'); }
    get nama_satuan(): AbstractControl { return this.FormAddObat.get('nama_satuan'); }
    get id_rute_pemberian_obat(): AbstractControl { return this.FormAddObat.get('id_rute_pemberian_obat'); }
    get rute_pemberian_obat(): AbstractControl { return this.FormAddObat.get('rute_pemberian_obat'); }
    get jumlah_satuan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('jumlah_satuan_aturan_pakai'); }
    get id_satuan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_satuan_aturan_pakai'); }
    get satuan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('satuan_aturan_pakai'); }
    //   get jumlah_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('jumlah_interval_aturan_pakai'); }
    //   get id_interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_interval_aturan_pakai'); }
    //   get interval_aturan_pakai(): AbstractControl { return this.FormAddObat.get('interval_aturan_pakai'); }

    get aturan(): AbstractControl { return this.FormAddObat.get('aturan'); }
    get ket_aturan(): AbstractControl { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai_obat(): AbstractControl { return this.FormAddObat.get('label_tambahan_aturan_pakai_obat'); }

    get label(): AbstractControl { return this.FormAddObat.get('label'); }
    get ket_label(): AbstractControl { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('label_pemakaian_obat'); }

}
