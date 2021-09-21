import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { timeStamp } from 'console';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { SetupMappingOrderTarifPenunjangService } from '../../../services/setup-data/setup-mapping-order-tarif-penunjang/setup-mapping-order-tarif-penunjang.service';
import * as Config from './json/setup-mapping-tarif-order.config.json';

@Component({
    selector: 'app-setup-mapping-tarif-order-penunjang',
    templateUrl: './setup-mapping-tarif-order-penunjang.component.html',
    styleUrls: ['./setup-mapping-tarif-order-penunjang.component.css']
})
export class SetupMappingTarifOrderPenunjangComponent implements OnInit {

    DropdownJenisPenunjangField = { text: 'jenis_penunjang', value: 'id' };

    ListingOrderFields: object = {};

    MenuItems: MenuItemModel[] = [];

    modalRef: BsModalRef;
    @ViewChild('modalAddChild') modalAddChild: TemplateRef<any>;
    SelectedChild: any = {};

    FormAddChild: FormGroup;
    FormAddChildState = "Insert";

    /**
     * @DropdownKelasDatasource Dropdown Ruangan Kelas
    */
    DropdownKelasDatasource: KelasPerawatanModel[];

    /**
     * @DropdownKelasFields Mapping Field Dropdown Kelas 
    */
    DropdownKelasFields: object = { text: 'nama_kelas', value: 'kode_kelas' };

    GridConfig = Config;
    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[] = [
        { text: 'Update', tooltipText: 'Update', prefixIcon: 'fas fa-edit fa-sm', id: 'update' },
        { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
        "Search"
    ];
    GridPageSettings: object = { pageSizes: true, pageSize: 20, pageCount: 4 };
    GridDataSelectedRow: any;

    modalRefLookup: BsModalRef;
    @ViewChild('modalAddLookupTarif') modalAddLookupTarif: TemplateRef<any>;

    GridLookupTarifDatasource: any[];
    GridLookupTarif: MolGridComponent = null;
    GridLookupTarifPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };
    GridLookupTarifSelectionSettings: object = { type: 'Multiple', enableSimpleMultiRowSelection: true }
    SelectedFilterLookupTarif: string;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        public setupKelasPerawatanService: SetupKelasPerawatanService,
        public setupMappingOrderTarifPenunjangService: SetupMappingOrderTarifPenunjangService,
    ) { }

    ngOnInit(): void {
        this.setupMappingOrderTarifPenunjangService.onGetJenisPenunjang();

        this.setupMappingOrderTarifPenunjangService.onGetTarifOrderLaboratorium();

        this.setupMappingOrderTarifPenunjangService.onGetTarifOrderRadiologi();

        this.onSetFormAddChildAttributes();
    }

    handleChangeDropdownJenisPenunjang(args: any): void {

        this.ListingOrderFields = {};

        if (args.itemData.id == 1) {
            this.ListingOrderFields = {
                dataSource: this.setupMappingOrderTarifPenunjangService.TarifOrderLaboratorium.value,
                id: 'id',
                text: 'nama_kelompok_tarif',
                child: 'child',
            };
        }

        if (args.itemData.id == 2) {
            this.ListingOrderFields = {
                dataSource: this.setupMappingOrderTarifPenunjangService.TarifOrderRadiologi.value,
                id: 'id',
                text: 'nama_kelompok_tarif',
                child: 'child',
            };
        }
    }

    handleSelectedKelompokOrder(args: any): void {
        let data = args.nodeData;
    }

    handleBeforeOpenContextMenu(args: any, data: any): void {
        if (data.child && data.child?.length > 0) {
            this.MenuItems = [
                {
                    id: 'add_child',
                    text: 'Add Child',
                    iconCss: 'fas fa-plus fa-sm'
                },
                {
                    id: 'edit',
                    text: 'Edit',
                    iconCss: 'fas fa-edit fa-sm'
                },
                {
                    id: 'delete',
                    text: 'Remove Child',
                    iconCss: 'fas fa-trash-alt fa-sm'
                }
            ];
        } else {
            this.MenuItems = [
                {
                    id: 'edit',
                    text: 'Edit',
                    iconCss: 'fas fa-edit fa-sm'
                },
                {
                    id: 'delete',
                    text: 'Remove Child',
                    iconCss: 'fas fa-trash-alt fa-sm'
                },
                {
                    id: 'add_charge',
                    text: 'Add Charge',
                    iconCss: 'fas fa-clipboard-check fa-sm'
                },
            ];
        }
    }

    handleClickContextMenu(args: any, data: any): void {
        const item: MenuItemModel = args.item;

        switch (item.id) {
            case 'add_child':
                this.FormAddChildState = "Insert";
                this.handleResetFormAddChild();
                this.handleOpenModalAddChild(data);
                break;
            case 'edit':
                this.FormAddChildState = "Edit";
                this.handleResetFormAddChild();
                this.onFillFormAddChild(data);
                this.handleOpenModalAddChild(data);
                break;
            case 'delete':
                break;
            case 'add_charge':
                this.SelectedChild = data;
                this.hanldeOpenModalLookupTarif();
                break;
        }

    }

    onSetFormAddChildAttributes(): void {
        this.FormAddChild = this.formBuilder.group({
            id_kelompok_parent: [0, []],
            kode_kelompok_tarif: ["", []],
            nama_kelompok_tarif: ["", []],
        });
    }

    onFillFormAddChild(Data: any): void {
        this.id_kelompok_parent.setValue(Data.id);
        this.kode_kelompok_tarif.setValue(Data.kode_kelompok_tarif);
        this.nama_kelompok_tarif.setValue(Data.nama_kelompok_tarif);
    }

    handleOpenModalAddChild(Data: any): void {
        this.SelectedChild = Data;

        this.id_kelompok_parent.setValue(this.SelectedChild.id);

        setTimeout(() => {
            this.modalRef = this.bsModalService.show(this.modalAddChild);
        }, 250);
    }

    handleCloseModalAddChild(): void {
        this.modalRef.hide();
    }

    handleSubmitAddChild(FormAddChild: any): void {
        console.log(FormAddChild);
    }

    handleUpdateAddChild(FormAddChild: any): void {
        console.log(FormAddChild);
    }

    handleResetFormAddChild(): void {
        this.FormAddChild.reset();

        this.id_kelompok_parent.setValue(0);
        this.kode_kelompok_tarif.setValue("");
        this.nama_kelompok_tarif.setValue("");
    }

    onGetKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            })
    }

    handleChangeDropdownKelas(args: any): void {
        const nama_kelas = args.itemData ? args.itemData.nama_kelas : null;

        // this.settingTarifPerPoliService.onGetAllByIdPoli(this.SelectedPoliklinik.id_poli)
        //     .subscribe((result) => {
        //         if (result) {
        //             const data = nama_kelas ? result.data.filter((item) => { return item.nama_kelas == nama_kelas }) : result.data;

        //             this.GridDatasource = data;
        //         }
        //     });
    }

    handleSelectedRow(args: any): void {

    }

    handleToolbarClick(args: any): void {

    }

    handleActionComplete(args: any): void {

    }

    // *** Start Section Of Filter Lookup =================
    hanldeOpenModalLookupTarif(): void {
        this.GridLookupTarifDatasource = [];

        this.modalRef = this.bsModalService.show(
            this.modalAddLookupTarif,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.SelectedFilterLookupTarif = "";
    }

    handleChangeFilterLookupTarif(value: string): void {
        this.SelectedFilterLookupTarif = value;
    }

    onSearchLookup(searchValueId: string): void {

    }

    InitalizedGridLookupTarif(component: MolGridComponent): void {
        this.GridLookupTarif = component;
    }

    handleSubmitLookupTarif(): void {

    }

    handleCloseModalLookupTarif(): void {
        this.modalRef.hide();
    }
    // *** End Section Of Filter Lookup =================

    get id_kelompok_parent(): AbstractControl { return this.FormAddChild.get('id_kelompok_parent'); }
    get kode_kelompok_tarif(): AbstractControl { return this.FormAddChild.get('kode_kelompok_tarif'); }
    get nama_kelompok_tarif(): AbstractControl { return this.FormAddChild.get('nama_kelompok_tarif'); }
}
