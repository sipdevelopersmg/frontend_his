import { Component, EventEmitter, OnInit, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEventArgs, EditSettingsModel, GridComponent, GridModel, IEditCell } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { InsertGridResepModel, TrResepDokterIrjaDetailInsert, TrResepDokterIrjaDetailRacikanInsert } from '../../../models/resep.model';
import * as GridConfig from '../json/GridResep.json';
import { DropDownList, FilteringEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { SetupLabelPemakaianObatService } from 'src/app/modules/Pharmacy/services/setup-data/setup-label-pemakaian-obat/setup-label-pemakaian-obat.service';
import { SetupTambahanAturanPakaiService } from 'src/app/modules/Pharmacy/services/setup-data/setup-tambahan-aturan-pakai/setup-tambahan-aturan-pakai.service';
import { SetupMetodeRacikanService } from 'src/app/modules/Pharmacy/services/setup-data/setup-metode-racikan/setup-metode-racikan.service';
import { ResepDokterService } from '../../../services/resep-dokter/resep-dokter.service';
import { BehaviorSubject } from 'rxjs';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { PHARMACY } from 'src/app/api/PHARMACY';
import * as GridLookUpItem from './json/lookupitem.json';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
@Component({
    selector: 'app-input-resep',
    templateUrl: './input-resep.component.html',
    styleUrls: ['./input-resep.component.css']
})
export class InputResepComponent implements OnInit {
    @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;

    public itemsParams: IEditCell;
    public itemsElem: HTMLElement;
    public itemsObj: DropDownList;

    public urlRacikan = PHARMACY.RESEP_DOKTER.RESEP_DOKTER_IRJA.GET_RACIKAN+'/'+1;

    public GridLookUpItem = GridLookUpItem;

    DropdownLabelFields: object = { text: "nama_label_pemakaian_obat", value: "id_label_pemakaian_obat" };
    DropdownAturanFields: object = { text: "tambahan_aturan_pakai", value: "id_tambahan_aturan_pakai" };

    // ** Form Add Obat Properties
    FormAddObat: FormGroup;
    FormAddObatState: string = "input";

    // ** Satuan 
    SatuanObat: string = "-";

    DropdownObatFields: object = { text: 'nama_obat', value: 'id_item' };
    DropdownMetodeRacikanFields: object = { text: 'metode_racikan', value: 'id_metode_racikan' };

    NamaObatDatasource: any[] = [];

    // ** Waktu Pakai
    WaktuPakai: any[] = [];

    // ** Grid Daftar Obat Properties
    GridDaftarObatEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDaftarObatToolbar: any[];
    GridDaftarObatDataSource: any[] = [];
    GridDaftarObatColumns = GridConfig;
    GridDaftarObatHeight: string;
    private gridDaftarObat: MolGridComponent ;

    // ** Selected Data Obat
    SelectedDataObat: TrResepDokterIrjaDetailInsert;
    SelectedDataRacikanObat: TrResepDokterIrjaDetailRacikanInsert;
    public get width(): any { return window.innerWidth; };

    GridDetailResepRacikanDatasource = [];
    GridResepRacikanDatasource = [];
    ChildGrid: GridModel;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;

    globalListenFunc:Function;
    dataSourceLabelPemakaian = [];
    dataSourceTambahanAturanPakai = [];
    counter: number = 0;
    counterRacikan: number = 0;
    dataScourceGridChild: any[] = [];

    KandunganParams: IEditCell;
    KandunganElem: HTMLElement;
    KandunganObj: NumericTextBox;
    currentQtyResep: number;
    currentIdItem:number;
    currentIndex:number;

    constructor(
        private formBuilder: FormBuilder,
        public resepDokterService: ResepDokterService,
        public setupLabelPemakaianObatService: SetupLabelPemakaianObatService,
        public setupTambahanAturanPakaiService: SetupTambahanAturanPakaiService,
        public setupMetodeRacikanService: SetupMetodeRacikanService,
        private renderer: Renderer2
    ) {

    }

    ngOnInit(): void {
        this.FormAddObat = this.formBuilder.group({
            counter: [0,[]],
            is_racikan: [false, []],
            no_urut: [0, []],
            set_racikan_id: [0, []],
            id_metode_racikan: [0, []],
            metode_racikan: ['', []],
            id_item: [0, []],
            nama_racikan: ['', []],
            nama_obat: ['', []],
            qty_resep: ['', []],
            nama_satuan: ['-', []],
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

        let currentQtyResep =this.currentQtyResep;
        let currentIdItem = this.currentIdItem;
        let SelectedDataRacikanObat = this.SelectedDataRacikanObat;
        this.resepDokterService.dataSelectRacikan.next(SelectedDataRacikanObat);
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
                    dataSource: this.resepDokterService.dataObat.value,
                    fields: this.DropdownObatFields,
                    enabled: true,
                    placeholder: 'Select a items',
                    floatLabelType: 'Never',
                    allowFiltering: true,
                    popupWidth: '55rem',
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
                    change: function (args) {
                        this.setFormGrif(args,currentQtyResep,currentIdItem);
                        currentIdItem = args.itemData.id_item;
                    }.bind(this),
                });
                this.itemsObj.appendTo(this.itemsElem);
                if(SelectedDataRacikanObat){
                    this.itemsObj.value = SelectedDataRacikanObat.id_item;
                }
            }
        }

        let counterRacikan = this.counterRacikan;
        let dataSourceChild = this.dataScourceGridChild;
        this.resepDokterService.dataSourceChildGrid.next(dataSourceChild);
        // this.resepDokterService.dataDetailRacikan = dataSourceChild;

        this.ChildGrid = {
            dataSource: this.dataScourceGridChild,
            queryString: "counter",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            toolbar: ['Add','Edit', 'Delete', 'Update', 'Cancel'],
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
                { field: "keterangan", headerText: 'Keterangan', headerTextAlign: 'Center', textAlign: 'Left', width: 100},
            ],
            rowSelected(args){
                SelectedDataRacikanObat = args.data
            },
            actionBegin(args: AddEventArgs) {
                if (args.requestType === 'add') {
                    const counter = 'counter';
                    (args.data as object)[counter] = this.parentDetails.parentKeyFieldValue;
                    (args.data as object)['qty_resep'] = this.parentDetails.parentRowData.qty_resep;
                    (args.data as object)['counterRacikan'] = counterRacikan++;
                    currentQtyResep = this.parentDetails.parentRowData.qty_resep;
                }
            },
            actionComplete(args) {
                if (args.requestType === 'save') {
                    if(args.action === 'add'){
                        args.data.id_item = currentIdItem;
                        dataSourceChild.push(args.data);
                    }
                    if(args.action === 'edit'){
                        args.data.id_item = currentIdItem;
                        console.log('sourch grid',dataSourceChild);
                        console.log('dt',args.data);
                    }
                }

                if (args.requestType === "delete") {
                    let index = dataSourceChild.map((item) => { return item.counterRacikan }).indexOf(args.data[0].counterRacikan);
                    dataSourceChild.splice(index, 1);
                }

            }
        }

        this.setupLabelPemakaianObatService.onGetAll().subscribe((result) => {
            this.dataSourceLabelPemakaian = result.data;
        });

        this.setupTambahanAturanPakaiService.onGetAll().subscribe((result) => {
            this.dataSourceTambahanAturanPakai = result.data;
        });

        this.setupMetodeRacikanService.setDataSource();
        this.resepDokterService.setDataObat([]);

    }

    tes(){
        console.log(this.resepDokterService.dataSelectRacikan.value);
    }

    onLoad(args:any){

    }

    setFormGrif(args,currentQtyResep){
        (<HTMLInputElement>document.getElementsByName("nama_satuan")[0]).value=args.itemData.nama_satuan;
        (<HTMLInputElement>document.getElementsByName("komposisi")[0]).value=args.itemData.kandungan_obat;
        (<HTMLInputElement>document.getElementsByName("seper")[0]).value='1';
        (<HTMLInputElement>document.getElementsByName("kandungan")[0]).value=args.itemData.kandungan_obat;
        (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value=currentQtyResep.toString();
        let seper = (<HTMLInputElement>document.getElementsByName("seper")[0])
        if(seper){
            seper.addEventListener('click', (event) => {
                seper.select();
            });
            seper.addEventListener('keyup', (event) => {
                let komposisi = parseInt((<HTMLInputElement>document.getElementsByName("komposisi")[0]).value);
                let seper = parseInt((<HTMLInputElement>document.getElementsByName("seper")[0]).value);
                let hasil = komposisi/seper;
                (<HTMLInputElement>document.getElementsByName("kandungan")[0]).value=hasil.toString();
                let butuh = currentQtyResep * hasil;
                let qty = butuh/komposisi;
                (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value=qty.toString();
            });

            this.setInputFilter(seper, function(value) {
                return /^\d*$/.test(value); });
        }

        let kandungan = (<HTMLInputElement>document.getElementsByName("kandungan")[0])
        if(kandungan){
            kandungan.addEventListener('click', (event) => {
                kandungan.select();
            });
            kandungan.addEventListener('keyup', (event) => {
                let kandungan = parseInt((<HTMLInputElement>document.getElementsByName("kandungan")[0]).value);
                let komposisi = parseInt((<HTMLInputElement>document.getElementsByName("komposisi")[0]).value);
                let butuh = this.currentQtyResep * kandungan;
                let qty = butuh/komposisi;
                (<HTMLInputElement>document.getElementsByName("qty_racikan")[0]).value=qty.toString();
                (<HTMLInputElement>document.getElementsByName("seper")[0]).value = '1';
            });
            this.setInputFilter(kandungan, function(value) {
                return /^\d*$/.test(value); });
        }

        let  qty_racikan = (<HTMLInputElement>document.getElementsByName("qty_racikan")[0])
        if(qty_racikan){
            qty_racikan.addEventListener('click', (event) => {
                qty_racikan.select();
            });
            this.setInputFilter(qty_racikan, function(value) {
                return /^\d*$/.test(value); });
        }
    }

    setInputFilter(textbox: Element, inputFilter: (value: string) => boolean): void {
        ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
            textbox.addEventListener(event, function(this: (HTMLInputElement | HTMLTextAreaElement) & {oldValue: string; oldSelectionStart: number | null, oldSelectionEnd: number | null}) {
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
        if (typeof args.value === 'number' && (args.value % 1) === 0) {
            this.label_pemakaian_obat.setValue('');
            this.id_label_pemakaian_obat.setValue(args.value);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        } else {
            this.label_pemakaian_obat.setValue(args.value);
            this.id_label_pemakaian_obat.setValue(1);
            this.ket_label.setValue(args.itemData.nama_label_pemakaian_obat);
        }
    }

    handleChangeAturan(args: any): void {
        if (typeof args.value === 'number' && (args.value % 1) === 0) {
            this.label_tambahan_aturan_pakai.setValue('');
            this.id_tambahan_aturan_pakai.setValue(args.value);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
        } else {
            this.label_tambahan_aturan_pakai.setValue(args.value);
            this.id_tambahan_aturan_pakai.setValue(1);
            this.ket_aturan.setValue(args.itemData.tambahan_aturan_pakai);
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
    }

    heandleSelectedRacikan(args: any): void {
        var counter = this.counter++;
        args.counter = counter;
        args.is_racikan = true;
        this.resepDokterService.addDetail(args);
        let detail;
        detail = this.GridResepRacikan.childGrid.dataSource;
        args.details.forEach(element => {
            let counterRacikan = this.counterRacikan++;
            element.counter = counter;
            element.counterRacikan = counterRacikan;
            detail.push(element);
        });
        console.log(detail);
        this.resepDokterService.dataSourceChildGrid.next(detail);
    }

    handleAddObat(FormAddObat: any): void {
        this.counter++;
        FormAddObat.counter = this.counter;
        if (FormAddObat.is_racikan) {
            FormAddObat.nama_obat = FormAddObat.nama_racikan;
        }
        this.resepDokterService.addDetail(FormAddObat);
        this.onResetFormObat();
    }
    

    onResetFormObat(): void {
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
        this.resepDokterService.editDetail(this.currentIndex,FormAddObat);
        this.onResetFormObat()
        this.GridResepRacikan.refresh();
        this.FormAddObatState = "input";
    }

    // ** Reset Form Add Obat 
    onResetFormDataObat() {
        this.FormAddObat.reset();
        this.SatuanObat = "";
    }

    // ** Grid Daftar Obat method
    onInitalizedGrid(component: MolGridComponent) {
        this.gridDaftarObat = component;
    }

    // ** Grid Daftar Obat method
    onToolbarClick(args: any): void {
        switch (args.item.id) {
            case "edit":
                this.FormAddObat.setValue(this.SelectedDataObat);
                this.FormAddObatState = "edit";
                break;
            case "delete":
                this.resepDokterService.removeDataDetail(this.currentIndex);
                this.GridResepRacikan.refresh();
                break;
            default:
                break;
        };
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

    get is_racikan(): AbstractControl { return this.FormAddObat.get('is_racikan'); };
    get set_racikan_id(): AbstractControl { return this.FormAddObat.get('set_racikan_id'); };
    get id_metode_racikan(): AbstractControl { return this.FormAddObat.get('id_metode_racikan'); };
    get metode_racikan(): AbstractControl { return this.FormAddObat.get('metode_racikan'); };
    get id_item(): AbstractControl { return this.FormAddObat.get('id_item'); };
    get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
    get qty_resep(): AbstractControl { return this.FormAddObat.get('qty_resep'); }
    get nama_satuan(): AbstractControl { return this.FormAddObat.get('nama_satuan'); }
    get label(): AbstractControl { return this.FormAddObat.get('label'); }
    get ket_label(): AbstractControl { return this.FormAddObat.get('ket_label'); }
    get id_label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('id_label_pemakaian_obat'); }
    get label_pemakaian_obat(): AbstractControl { return this.FormAddObat.get('label_pemakaian_obat'); }
    get aturan(): AbstractControl { return this.FormAddObat.get('aturan'); }
    get ket_aturan(): AbstractControl { return this.FormAddObat.get('ket_aturan'); }
    get id_tambahan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('id_tambahan_aturan_pakai'); }
    get label_tambahan_aturan_pakai(): AbstractControl { return this.FormAddObat.get('label_tambahan_aturan_pakai'); }
    get nama_racikan(): AbstractControl { return this.FormAddObat.get('nama_racikan'); }
}
