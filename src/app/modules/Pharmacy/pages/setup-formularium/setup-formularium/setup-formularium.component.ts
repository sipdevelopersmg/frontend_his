import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TextWrapSettingsModel } from '@syncfusion/ej2-angular-grids';
import { NodeSelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as gridSetting from '../json/GridSetting.json'
@Component({
    selector: 'app-setup-formularium',
    templateUrl: './setup-formularium.component.html',
    styleUrls: ['./setup-formularium.component.css']
})
export class SetupFormulariumComponent implements OnInit {

    public GridSetting = gridSetting

    public wrapSettings: TextWrapSettingsModel;

    public localData: Object[] = [
        { id: 1, kode: '1', name: 'ANALGESIK, ANTIPIRETIK, ANTIINFLAMASI NON STEROID, ANTIPIRAI', hasChild: true, expanded: true },
        { id: 2, kode: '1.1', pid: 1, name: 'ANALGESIK NARKOTIK' },
        { id: 3, kode: '1.2', pid: 1, name: 'ANALGESIK NON NARKOTIK' },
        { id: 4, kode: '1.3', pid: 1, name: 'ANTIPIRAI' },
        { id: 11, kode: '2', name: 'ANASTETIK', hasChild: true },
        { id: 12, kode: '2.1', pid: 11, name: 'ANASTETIK LOKAL' },
        { id: 13, kode: '2.2', pid: 11, name: 'ANASTETIK UMUM DAN OKSIGEN' }
    ];

    public field: Object = { dataSource: this.localData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };

    public allowMultiSelection: boolean = true;

    modalRef: BsModalRef;

    @ViewChild('modalTambahTerapi') modalTambahTerapi: TemplateRef<any>;
    @ViewChild('modalSetupTerapi') modalSetupTerapi: TemplateRef<any>;


    @ViewChild('TerapiDropdown') TerapiDropdown: DropDownListComponent;
    TerapiDropdownDatasource: object[] = [{ text: 'ANALGESIK, ANTIPIRETIK, ANTIINFLAMASI NON STEROID, ANTIPIRAI', value: '1' }, { text: 'ANASTETIK', value: '2' }];
    TerapiDropdownField: object = { text: 'text', value: 'value' };

    GridGeneric: MolGridComponent = null;

    DataSourceGeneric = [];
    DataSourceSediaan = [];
    DataSourceRestreksi = [];
    DataSourceMax = [];
    DataSourceDagang = [];

    constructor(
        private modalService: BsModalService,
    ) { }

    ngOnInit(): void {
        this.wrapSettings = { wrapMode: 'Content' };
    }

    handleAddTerapi() {
        this.modalRef = this.modalService.show(
            this.modalTambahTerapi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    handleSetupTerapi() {
        console.log('setup terapi')
        this.modalRef.hide();
        this.modalRef = this.modalService.show(
            this.modalSetupTerapi,
            Object.assign({}, { class: 'modal-lg' })
        );
    }

    public nodeSelected(e: NodeSelectEventArgs) {
        // alert("The selected node's id: " + this.tree.selectedNodes); // To alert the selected node's id.
        console.log(e);
        this.DataSourceGeneric = this.GridSetting.GridGenerik.DataSource
        // this.GridGeneric.Grid.refresh();
    };

    handleSelectedGeneric(args) {
        console.log(args);
        this.DataSourceSediaan = this.GridSetting.GridSediaan.DataSource
    }

    handleSelectedSediaan(args) {
        console.log(args);
        this.DataSourceRestreksi = this.GridSetting.GridKeterangan.DataSource
        this.DataSourceMax = this.GridSetting.GridPeresepan.DataSource
        this.DataSourceDagang = this.GridSetting.GridItem.DataSource
    }

}
