import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Query } from '@syncfusion/ej2-data';
import { AddEventArgs, EditSettingsModel, GridComponent, GridModel, IEditCell, QueryCellInfoEventArgs } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { InsertGridResepModel } from '../../../models/resep.model';
import { DashboardDokterService } from '../../../services/dashboard-dokter.service';
import * as GridConfig from '../json/GridResep.json';
import { ResepRacikanService } from 'src/app/modules/Pharmacy/services/resep-racikan/resep-racikan.service';
import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { SetupLabelPemakaianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service';
import { SetupTambahanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service';
import { EmitType } from '@syncfusion/ej2-base';
import { SetupItemService } from 'src/app/modules/MM/services/setup-data/setup-item/setup-item.service';

@Component({
    selector: 'app-input-resep',
    templateUrl: './input-resep.component.html',
    styleUrls: ['./input-resep.component.css']
})
export class InputResepComponent implements OnInit {
    public itemsParams: IEditCell;
    public itemsElem: HTMLElement;
    public itemsObj: DropDownList;

    DropdownLabelFields: object = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
    DropdownAturanFields: object = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };

    // ** Form Add Obat Properties
    FormAddObat: FormGroup;
    FormAddObatState: string = "input";

    // ** Satuan 
    SatuanObat: string = "-";

   
    DropdownObatFields: object = { text: 'nama_item', value: 'id_item' };

    NamaObatDatasource: any[] = [
       
    ];

    AturanPakaiDatasource: any[] = [
        { id: 1, text: "1 Kali Sehari" },
        { id: 2, text: "2 Kali Sehari" },
        { id: 3, text: "3 Kali Sehari" },
    ];
    KeteranganPakaiDatasource: any[] = [
        { id: 1, text: "Sebelum Makan" },
        { id: 2, text: "Setelah Makan" },
    ];

    // ** Waktu Pakai
    WaktuPakai: any[] = [];

    // ** Grid Daftar Obat Properties
    GridDaftarObatEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDaftarObatToolbar: any[];
    GridDaftarObatDataSource: any[] = [];
    GridDaftarObatColumns = GridConfig;
    GridDaftarObatHeight: string;
    private gridDaftarObat: MolGridComponent = null;

    // ** Selected Data Obat
    SelectedDataObat: InsertGridResepModel;

    public get width(): any { return window.innerWidth; };

    GridDetailResepRacikanDatasource = [];
    GridResepRacikanDatasource = [];
    ChildGrid: GridModel ;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

    dataSourceLabelPemakaian=[];
    dataSourceTambahanAturanPakai=[];

    constructor(
        private formBuilder: FormBuilder,
        private resepRacikanService: ResepRacikanService,
        public setupLabelPemakaianObatService:SetupLabelPemakaianObatService,
        public setupTambahanAturanPakaiService:SetupTambahanAturanPakaiService,
        public setupItemService:SetupItemService,
        private dashboardDokterService: DashboardDokterService
    ) {

    }

    ngOnInit(): void {

        this.NamaObatDatasource = [
            { id: 1, nama_generik: "Acetylcysteine", satuan: "TAB", terapi: "Analgesik", restriksi: "Tidak Untuk Pasien Diabetes", peresepan: '20 Tab / Minggu' },
            { id: 2, nama_generik: "Ambroxol", satuan: "KAP", terapi: "Analgesik", restriksi: "Tidak Untuk Pasien Diabetes", peresepan: '3 Kap / Hari' },
            { id: 3, nama_generik: "Amoxillin", satuan: "TAB", terapi: "Analgesik", restriksi: "Tidak Untuk Pasien Diabetes", peresepan: '10 Tab / Minggu' },
        ]

        this.FormAddObat = this.formBuilder.group({
            racik: [false, []],
            no_urut: [0, []],
            kode_resep: ['', []],
            nama_obat: ['', [Validators.required]],
            satuan: ['', []],
            qty_obat: [0, [Validators.required]],
            aturan_pakai: ['', [Validators.required]],
            keterangan_pakai: ['', [Validators.required]],
            //waktu_pakai: ['', [Validators.required]],
            // catatan: ['', [Validators.required]]
        });

        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        // this.dashboardDokterService.onSetSidebarMenuForDashboardDokter();
        this.resepRacikanService.onGetResepRacikanDummy()
            .subscribe((result) => {
                this.GridResepRacikanDatasource = result;
            });

        this.itemsParams = {
            create: () => {
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
                    // value: ,
                    dataSource: this.setupItemService.dataSource.value,
                    fields: this.DropdownObatFields,
                    enabled: true,
                    placeholder: 'Select a items',
                    floatLabelType: 'Never',
                    allowFiltering:true,
                    popupWidth:'55rem',
                    // itemTemplate:'<div class="row item">'+
                    //         '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 pe-0 border-end">'+
                    //             '<span class="nama_generik">${ nama_generik }</span>'+
                    //         '</div>'+
                    //         '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 px-0 border-end">'+
                    //             '<span class="terapi">${ terapi }</span>'+
                    //         '</div>'+
                    //         '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 px-0 border-end">'+
                    //             '<span class="terapi">${ restriksi }</span>'+
                    //         '</div>'+
                    //         '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-0">'+
                    //             '<span class="terapi">${ peresepan }</span>'+
                    //         '</div>'+
                    //     '</div>'
                });
                this.itemsObj.appendTo(this.itemsElem);
            }
        }

        this.ChildGrid = {
            dataSource: this.GridDetailResepRacikanDatasource,
            queryString: "id_obat",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
            editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
            columns: [
                { field: "id_obat", headerText: 'ID Obat', visible: false },
                { field: "nama_obat", headerText: 'Nama Obat',editType:'dropdownedit',edit:this.itemsParams, width: 200 },
                { field: "satuan", headerText: 'Satuan', width: 100 },
                { field: "satuan_terkecil", headerText: 'Satuan Terkecil', width: 100 },
                { field: "dosis_obat", headerText: 'Dosis Obat', textAlign: 'Right', width: 80 },
                { field: "dosis_yg_diinginkan", headerText: 'Dosis yang Diinginkan', width: 100, headerTextAlign: 'Center', textAlign: 'Right' },
                { field: "jumlah", headerText: 'Jumlah', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "harga", headerText: 'Harga (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "subtotal", headerText: 'Subtotal (Rp)', textAlign: 'Right', width: 100, format: 'N2' },
            ],
            actionBegin(args: AddEventArgs) {
                if (args.requestType === 'add') {
                    // `parentKeyFieldValue` refers to the queryString field value of the parent record.
                    const id_obat = 'id_obat';
                    (args.data as object)[id_obat] = this.parentDetails.parentKeyFieldValue;
                    console.log(args);
                }
            }
        }
        this.setupLabelPemakaianObatService.onGetAll().subscribe((result)=>{
            this.dataSourceLabelPemakaian = result.data;
        });

        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result)=>{
            this.dataSourceTambahanAturanPakai = result.data;
        });
        this.setupItemService.setDataSource();
    }

    // public onFiltering =  (e: FilteringEventArgs) => {
    //     // load overall data when search key empty.
    //     if (e.text === '') {
    //         e.updateData(this.dataSourceLabelPemakaian);
    //     } else {
    //       let query: Query = new Query().from('data').select(['nama_label_pemakaian_obat', 'id_label_pemakaian_obat']);
    //       // change the type of filtering
    //       query = (e.text !== '') ? query.where('nama_label_pemakaian_obat', 'endswith', e.text, true) : query;
    //       e.updateData(this.dataSourceLabelPemakaian, query);
    //     }
    // };

    onLoad(args: any) {
        this.resepRacikanService.onGetDetailResepRacikanDummy()
            .subscribe((result) => {
                this.GridResepRacikan.childGrid.dataSource = result;
            });
    }

    rowDataBound(args:any){
       var is_racikan = args.data.is_racikan;
       if (is_racikan) {
        //here hide which parent row has no child records
           args.row.querySelector('td').innerHTML=" ";
           args.row.querySelector('td').className = "e-customizedExpandcell";
        }else{
            // args.row.classList.add('is-racikan');
        }
    }

    onDataBound(){
        this.GridResepRacikan.detailRowModule.expandAll();
    }

    // ** Dropdown Nama Obat onchange method
    onChangeNamaObat(args: any): void {
        this.SatuanObat = args.itemData.satuan;

        this.satuan.setValue(this.SatuanObat);
    }
    
    handleChangeResep(args: any):void{
        
    }

    handelClickResep(args:any): void{

    }

    // ** Dropdown Waktu Pakai onchange method
    onChangeWaktuPakai(waktu: string): void {
        // ** Cek element yg di checklist
        const element = document.getElementById('waktuPakai' + waktu) as HTMLInputElement;

        // ** Get index number di variable WaktuPakai
        const index = this.WaktuPakai.indexOf(waktu);

        // ** Jika element di checklist maka....
        if (element.checked) {
            this.WaktuPakai.push(waktu);
        } else {
            this.WaktuPakai.splice(index, 1);
        };

        // ** Isikan value waktu_pakai di FormAddObat
        // this.waktu_pakai.setValue(this.WaktuPakai.join());
    }

    // ** Button Add Data Obat ke Grid method
    onSubmitDataObat(FormAddObat: any): void {
        console.log(FormAddObat);
        // ** Data dummy
        // FormAddObat.rx = "rx";
        // FormAddObat.no_urut = this.GridDaftarObatDataSource.length + 1;
        // FormAddObat.kode_resep = "KR00" + this.GridDaftarObatDataSource.length + 1;

        // this.onResetFormDataObat();

        // // ** Push ke Grid Daftar Obat
        // this.GridDaftarObatDataSource.push(FormAddObat);
        // this.gridDaftarObat.Grid.refresh();
    }

    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat: any): void {
        const index = this.GridDaftarObatDataSource.map(e => e.kode_resep).indexOf(FormAddObat.kode_resep);

        this.GridDaftarObatDataSource[index] = FormAddObat;

        this.onResetFormDataObat();

        this.gridDaftarObat.Grid.refresh();

        this.FormAddObatState = "input";
    }

    // ** Reset Form Add Obat 
    onResetFormDataObat() {
        this.FormAddObat.reset();
        this.SatuanObat = "";
        (<HTMLInputElement>document.getElementById("waktuPakaiPagi")).checked = false;
        (<HTMLInputElement>document.getElementById("waktuPakaiSiang")).checked = false;
        (<HTMLInputElement>document.getElementById("waktuPakaiMalam")).checked = false;
    }

    // ** Grid Daftar Obat method
    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarObat = component;
    }

    // ** Grid Daftar Obat method
    onToolbarClick(args: any): void {
        const index = this.GridDaftarObatDataSource.map(e => e.kode_resep).indexOf(this.SelectedDataObat.kode_resep);

        switch (args.item.id) {
            case "edit":
                this.onFillInputDataObatField(this.SelectedDataObat, index);
                this.FormAddObatState = "edit";
                break;
            case "delete":
                this.GridDaftarObatDataSource.splice(index, 1);
                this.gridDaftarObat.Grid.refresh();
                break;
            default:
                break;
        };
    }

    // ** Grid Daftar Obat method
    onRowSelected(args: any): void {
        this.SelectedDataObat = args.data;
    }

    // ** Mengisikan Data Obat ke Form Data Obat
    onFillInputDataObatField(DataObat: InsertGridResepModel, Index: number) {

        this.FormAddObat.setValue(DataObat);
        this.SatuanObat = DataObat.satuan;

        (<HTMLInputElement>document.getElementById("waktuPakaiPagi")).checked = DataObat.waktu_pakai.indexOf('Pagi') > -1 ? true : false;
        (<HTMLInputElement>document.getElementById("waktuPakaiSiang")).checked = DataObat.waktu_pakai.indexOf('Siang') > -1 ? true : false;
        (<HTMLInputElement>document.getElementById("waktuPakaiMalam")).checked = DataObat.waktu_pakai.indexOf('Malam') > -1 ? true : false;
    }

    get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
    get satuan(): AbstractControl { return this.FormAddObat.get('satuan'); };
    get qty_obat(): AbstractControl { return this.FormAddObat.get('qty_obat'); };
    get aturan_pakai(): AbstractControl { return this.FormAddObat.get('aturan_pakai'); };
    get keterangan_pakai(): AbstractControl { return this.FormAddObat.get('keterangan_pakai'); };
    get racik() : AbstractControl { return this.FormAddObat.get('racik'); }
    //get waktu_pakai(): AbstractControl { return this.FormAddObat.get('waktu_pakai'); };
    // get catatan(): AbstractControl { return this.FormAddObat.get('catatan'); };
}
