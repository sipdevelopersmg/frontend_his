import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { InsertGridResepModel } from '../../../models/resep.model';
import * as GridConfig from '../json/GridResep.json';

@Component({
    selector: 'app-input-resep',
    templateUrl: './input-resep.component.html',
    styleUrls: ['./input-resep.component.css']
})
export class InputResepComponent implements OnInit {

    // ** Form Add Obat Properties
    FormAddObat: FormGroup;
    FormAddObatState: string = "input";

    // ** Satuan 
    SatuanObat: string = "-";

    // ** Dropdown Properties
    DropdownFields: object = { text: "text", value: "text" };
    NamaObatDatasource: any[] = [
        { id: 1, text: "Acetylcysteine 200 mg", satuan: "TAB" },
        { id: 2, text: "Ambroxol 15 mg", satuan: "TAB" },
        { id: 3, text: "Amoxillin 500 mg", satuan: "TAB" },
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
    private gridDaftarObat: MolGridComponent = null;

    // ** Selected Data Obat
    SelectedDataObat: InsertGridResepModel;

    public get width(): any { return window.innerWidth; };

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.FormAddObat = this.formBuilder.group({
            kode_resep: ['', []],
            nama_obat: ['', []],
            satuan: ['', []],
            qty_obat: [0, []],
            aturan_pakai: ['', []],
            keterangan_pakai: ['', []],
            waktu_pakai: ['', []],
            catatan: ['', []]
        });

        this.GridDaftarObatToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
    }

    // ** Dropdown Nama Obat onchange method
    onChangeNamaObat(args: any): void {
        this.SatuanObat = args.itemData.satuan;

        this.satuan.setValue(this.SatuanObat);
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
        this.waktu_pakai.setValue(this.WaktuPakai.join());
    }

    // ** Button Add Data Obat ke Grid method
    onSubmitDataObat(FormAddObat: any): void {
        // ** Data dummy
        FormAddObat.rx = "rx";
        FormAddObat.no_urut = this.GridDaftarObatDataSource.length + 1;
        FormAddObat.kode_resep = "KR00" + this.GridDaftarObatDataSource.length + 1;

        this.onResetFormDataObat();

        // ** Push ke Grid Daftar Obat
        this.GridDaftarObatDataSource.push(FormAddObat);
        this.gridDaftarObat.Grid.refresh();
    }

    // ** Update Data Obat method
    onUpdateDataObat(FormAddObat: any): void {

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
    }

    get nama_obat(): AbstractControl { return this.FormAddObat.get('nama_obat'); };
    get satuan(): AbstractControl { return this.FormAddObat.get('satuan'); };
    get qty_obat(): AbstractControl { return this.FormAddObat.get('qty_obat'); };
    get aturan_pakai(): AbstractControl { return this.FormAddObat.get('aturan_pakai'); };
    get keterangan_pakai(): AbstractControl { return this.FormAddObat.get('keterangan_pakai'); };
    get waktu_pakai(): AbstractControl { return this.FormAddObat.get('waktu_pakai'); };
    get catatan(): AbstractControl { return this.FormAddObat.get('catatan'); };
}
