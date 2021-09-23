import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEventArgs, EditSettingsModel, GridComponent, GridModel, IEditCell } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { InsertGridResepModel } from '../../../models/resep.model';
import * as GridConfig from '../json/GridResep.json';
import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { SetupLabelPemakaianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service';
import { SetupTambahanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service';
import { SetupMetodeRacikanService } from 'src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service';
import { ResepDokterService } from '../../../services/resep-dokter/resep-dokter.service';

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
    DropdownMetodeRacikanFields: object = { text: 'metode_racikan', value: 'id_metode_racikan' };

    NamaObatDatasource: any[] = [
       
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
    counter:number=0;
    counterRacikan:number=0;
    dataScourceGridChild=[];
    constructor(
        private formBuilder: FormBuilder,
        public resepDokterService: ResepDokterService,
        public setupLabelPemakaianObatService:SetupLabelPemakaianObatService,
        public setupTambahanAturanPakaiService:SetupTambahanAturanPakaiService,
        public setupMetodeRacikanService:SetupMetodeRacikanService,
    ) {

    }

    ngOnInit(): void {

        this.FormAddObat = this.formBuilder.group({
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [0, []],
            id_metode_racikan: [0, []],
            metode_racikan: ['', []],
            id_item: [0, []],
            nama_racikan:['',[]],
            nama_obat: ['', []],
            qty_resep: ['', []],
            satuan: ['-', []],
            label: ['', []],
            ket_label: ['', []],
            id_label_pemakaian_obat: [0, []],
            label_pemakaian_obat: ['', []],
            aturan: ['', []],
            ket_aturan: ['', []],
            id_tambahan_aturan_pakai: [0, []],
            label_tambahan_aturan_pakai: ['', []],
        });

        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

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
                    dataSource: this.resepDokterService.dataObat.value,
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
                { field: "nama_item", headerText: 'Nama Obat',editType:'dropdownedit',edit:this.itemsParams, width: 200 },
                { field: "satuan", headerText: 'Satuan', textAlign: 'Right', width: 80,allowEditing:false },
                { field: "id_item", headerText: 'id', width: 100, visible: false },
                { field: "komposisi", headerText: 'kps', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' ,allowEditing:false},
                { field: "seper", headerText: '1/', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "kandungan", headerText: 'Kandungan', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2'},
                { field: "qty_resep", headerText: 'qty', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2', visible: false },
                { field: "qty_racikan", headerText: 'QTY', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Right', width: 100, format: 'N2' },
            ],
            actionBegin(args: AddEventArgs) {
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    (args.data as object)[counter] = this.parentDetails.parentKeyFieldValue;
                    (args.data as object)['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                }
            },
            actionComplete(args: AddEventArgs){
                if(args.requestType==='save'){
                    console.log(args.data);
                }
            }
        }

        this.setupLabelPemakaianObatService.onGetAll().subscribe((result)=>{
            this.dataSourceLabelPemakaian = result.data;
        });

        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result)=>{
            this.dataSourceTambahanAturanPakai = result.data;
        });

        this.setupMetodeRacikanService.setDataSource();
        this.resepDokterService.setDataObat([]);
    }

    onLoad(args: any) {
        
    }

    rowDataBound(args:any){
       var is_racikan = args.data.is_racikan;
       if (!is_racikan) {
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
    handleChangeObat(args: any): void {
        this.satuan.setValue(args.itemData.nama_satuan);
        this.nama_obat.setValue(args.itemData.nama_item);
    }

    handleChangeLabel(args: any): void{
        if(typeof args.value==='number' && (args.value%1)===0) {
            this.label_pemakaian_obat.setValue('');
            this.id_label_pemakaian_obat.setValue(args.value);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        }else{
            this.label_pemakaian_obat.setValue(args.value);
            this.id_label_pemakaian_obat.setValue(1);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        }
    }

    handleChangeAturan(args: any): void{
        if(typeof args.value==='number' && (args.value%1)===0) {
            this.label_tambahan_aturan_pakai.setValue('');
            this.id_tambahan_aturan_pakai.setValue(args.value);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        }else{
            this.label_tambahan_aturan_pakai.setValue(args.value);
            this.id_tambahan_aturan_pakai.setValue(1);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        }
    }


    handleChangeNamaRacikan(): void{
        this.set_racikan_id.setValue(null);
    }

    handelClickRacikan(): void{

    }

    handleChangeMetodeRacikan(args:any): void{
        this.metode_racikan.setValue(args.itemData.metode_racikan);
    }

    handleAddObat(FormAddObat: any): void {
        this.counter++;
        FormAddObat.counter = this.counter;
        if(FormAddObat.is_racikan){
            FormAddObat.nama_obat = FormAddObat.nama_racikan;
        }
        this.resepDokterService.addDetail(FormAddObat);
        this.onResetFormObat();
    }

    onResetFormObat():void{
        this.FormAddObat.reset();
        this.is_racikan.setValue(false);
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

    get is_racikan(): AbstractControl { return this.FormAddObat.get('is_racikan'); };
    get set_racikan_id(): AbstractControl { return this.FormAddObat.get('set_racikan_id'); };
    get id_metode_racikan(): AbstractControl { return this.FormAddObat.get('id_metode_racikan'); };
    get metode_racikan(): AbstractControl { return this.FormAddObat.get('metode_racikan'); };
    get id_item(): AbstractControl { return this.FormAddObat.get('id_item'); };
    get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
    get qty_resep() : AbstractControl { return this.FormAddObat.get('qty_resep'); }
    get satuan() : AbstractControl { return this.FormAddObat.get('satuan'); }
    get label() : AbstractControl { return this.FormAddObat.get('label'); }
    get ket_label() : AbstractControl { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat() : AbstractControl { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat() : AbstractControl { return this.FormAddObat.get('label_pemakaian_obat'); }
    get aturan() : AbstractControl { return this.FormAddObat.get('aturan'); }
    get ket_aturan() : AbstractControl { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai() : AbstractControl { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai() : AbstractControl { return this.FormAddObat.get('label_tambahan_aturan_pakai'); }
    get nama_racikan() : AbstractControl { return this.FormAddObat.get('nama_racikan'); }
}
