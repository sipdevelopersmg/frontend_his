import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { MenuItemModel } from '@syncfusion/ej2-angular-navigations';
import { EditSettingsModel, RowSelectEventArgs } from '@syncfusion/ej2-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { JenisRuanganModel } from '../../../models/setup-data/setup-jenis-ruangan.model';
import { KelasPerawatanModel } from '../../../models/setup-data/setup-kelas-perawatan.model';
import { PoliModel, PoliRecursiveModel } from '../../../models/setup-data/setup-poli.model';
import { SettingTarifPerPoliService } from '../../../services/setting-harga-tarif/setting-tarif-per-poli/setting-tarif-per-poli.service';
import { SetupJenisRuanganService } from '../../../services/setup-data/setup-jenis-ruangan/setup-jenis-ruangan.service';
import { SetupKelasPerawatanService } from '../../../services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupPoliService } from '../../../services/setup-data/setup-poli/setup-poli.service';
import * as Config from './json/setting-tarif-berlaku-poli.config.json';

@Component({
    selector: 'app-setting-tarif-berlaku-poli',
    templateUrl: './setting-tarif-berlaku-poli.component.html',
    styleUrls: ['./setting-tarif-berlaku-poli.component.css']
})
export class SettingTarifBerlakuPoliComponent implements OnInit {

    /**
     * @DropdownRuanganDatasource Dropdown Ruangan Datasource
    */
    DropdownRuanganDatasource: JenisRuanganModel[];

    /**
     * @DropdownRuanganFields Mapping Field Dropdown Ruangan 
    */
    DropdownRuanganFields: object = { text: 'jenis_ruangan', value: 'id_jenis_ruangan' };

    /**
     * @PoliklinikDatasource Poliklinik Datasource
    */
    PoliklinikDatasource: PoliRecursiveModel[];

    /**
     * @PoliklinikTreeViewFields Poliklinik Treeview Mapping Fields
    */
    PoliklinikTreeViewFields: object = {};

    /**
     * @PoliklinikContextMenu Poliklinik Context Menu / Klik Kanan Menu
    */
    PoliklinikContextMenu: MenuItemModel[] = [
        {
            id: 'add_tarif',
            text: 'Tambah Tarif',
            iconCss: 'fas fa-plus'
        }
    ];

    /**
     * @PoliklinikPerKelas Poliklinik Per Kelas
    */
    PoliklinikPerKelas: PoliRecursiveModel[];

    /**
     * @SelectedPoliklinik Selected Poliklinik Data
    */
    SelectedPoliklinik: PoliModel = {};

    @ViewChild('KelasPerawatanDropdown') KelasPerawatanDropdown: DropDownListComponent;

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
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[] = ["Search"];
    GridPageSettings: object = { pageSizes: true, pageSize: 20, pageCount: 4 };
    GridDataSelectedRow: any;

    modalRef: BsModalRef;
    @ViewChild('modalAddLookupTarif') modalAddLookupTarif: TemplateRef<any>;

    GridLookupTarifDatasource: any[];
    GridLookupTarif: MolGridComponent = null;
    GridLookupTarifPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };
    GridLookupTarifSelectionSettings: object = { type: 'Multiple', enableSimpleMultiRowSelection: true }
    SelectedFilterLookupTarif: string;

    constructor(
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private setupJenisRuanganService: SetupJenisRuanganService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private settingTarifPerPoliService: SettingTarifPerPoliService,
    ) { }

    ngOnInit(): void {
        this.onGetJenisRuangan();

        this.onGetKelasPerawatan();
    }

    onGetJenisRuangan(): void {
        this.setupJenisRuanganService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.DropdownRuanganDatasource = result.data;
                }
            });
    }

    onGetPoliByIdJenisRuangan(JenisRuanganId: number): void {
        this.setupPoliService.onGetAllByIdJenisRuangan(JenisRuanganId)
            .subscribe((result) => {
                this.PoliklinikDatasource = result.data;

                this.PoliklinikTreeViewFields = {
                    dataSource: result.data,
                    id: 'id_poli',
                    text: 'nama_poli_parent',
                    child: 'child',
                }
            });
    }

    onGetKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            })
    }

    handleChangeDropdownRuangan(args: any): void {
        let id_jenis_ruangan = args.itemData.id_jenis_ruangan;

        // this.PoliklinikPerKelas = this.PoliklinikDatasource.filter((item) => { return item.id_jenis_ruangan == id_jenis_ruangan; });

        this.onGetPoliByIdJenisRuangan(id_jenis_ruangan);
    }

    handleSelectedPoli(args: any): void {
        if (args.nodeData.hasChildren) {
            this.GridDataToolbar = ['Search'];
        } else {
            const id_poli = args.nodeData.id;

            this.setupPoliService.onGetById(id_poli)
                .subscribe((result) => {
                    this.SelectedPoliklinik = result.data;
                });

            this.onGetAllTarifPerPoliByIdPoli(id_poli);

            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                'Search'
            ];
        }
    }

    onGetAllTarifPerPoliByIdPoli(PoliId: number): void {
        this.settingTarifPerPoliService.onGetAllByIdPoli(PoliId)
            .subscribe((result) => {
                if (result) {
                    this.GridDatasource = result.data;
                }
            });
    }

    handleSelectedPoliContextMenu(args: any): void {
        const id_context_menu = args.item.id;

        if (id_context_menu == "add_tarif" && Object.keys(this.SelectedPoliklinik).length > 0) {
            this.hanldeOpenModalLookupTarif();
        }
    }

    handleChangeDropdownKelas(args: any): void {
        const nama_kelas = args.itemData ? args.itemData.nama_kelas : null;

        this.settingTarifPerPoliService.onGetAllByIdPoli(this.SelectedPoliklinik.id_poli)
            .subscribe((result) => {
                if (result) {
                    const data = nama_kelas ? result.data.filter((item) => { return item.nama_kelas == nama_kelas }) : result.data;

                    this.GridDatasource = data;
                }
            });
    }

    handleSelectedRow(args: any): void {
        if (args.data) {

            this.GridDataSelectedRow = args.data;

            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Ubah Status', tooltipText: 'Ubah Status', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'ubah_status' },
                'Search'
            ];
        }
    }

    handleToolbarClick(args: any): void {
        if (args.item.id == "add") {
            if (this.KelasPerawatanDropdown.value) {
                this.hanldeOpenModalLookupTarif();
            } else {
                this.utilityService.onShowingCustomAlert('error', 'Oops', 'Kelas Perawatan Belum Dipilih');
            }
        }

        if (args.item.id == "ubah_status") {
            this.onUbahStatusTarifBerlakuPoli(this.GridDataSelectedRow);
        }
    }

    onUbahStatusTarifBerlakuPoli(TarifBerlakuPoli: any): void {
        this.settingTarifPerPoliService.onPutStatusActiveEdit(TarifBerlakuPoli.id_tarif_berlaku_poli, !TarifBerlakuPoli.is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Ubah Status Tarif ${TarifBerlakuPoli.kode_setup_tarif} Berhasil`)
                        .then(() => {
                            this.onGetAllTarifPerPoliByIdPoli(this.SelectedPoliklinik.id_poli);
                        })
                }
            })
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
        let parameter = {};

        if (this.SelectedFilterLookupTarif == "") {
            parameter = {
                "filters": [
                    {
                        "columnName": "",
                        "filter": "",
                        "searchText": "",
                        "searchText2": ""
                    },
                    {
                        "columnName": "kp.kode_kelas",
                        "filter": "like",
                        "searchText": this.KelasPerawatanDropdown.value,
                        "searchText2": ""
                    },
                ],
                "id_poli": this.SelectedPoliklinik.id_poli ? this.SelectedPoliklinik.id_poli : 0
            };
        } else {
            parameter = {
                "filters": [
                    {
                        "columnName": this.SelectedFilterLookupTarif,
                        "filter": "like",
                        "searchText": searchValueId,
                        "searchText2": ""
                    },
                    {
                        "columnName": "kp.kode_kelas",
                        "filter": "like",
                        "searchText": this.KelasPerawatanDropdown.value,
                        "searchText2": ""
                    },
                ],
                "id_poli": this.SelectedPoliklinik.id_poli ? this.SelectedPoliklinik.id_poli : 0
            };
        }

        this.settingTarifPerPoliService.onGetAllByDynamicFilter(parameter)
            .subscribe((result) => {
                if (result) {
                    this.GridLookupTarifDatasource = result.data;
                }
            });
    }

    InitalizedGridLookupTarif(component: MolGridComponent): void {
        this.GridLookupTarif = component;
    }

    handleSubmitLookupTarif(): void {
        const SelectedRow = this.GridLookupTarif.Grid.getSelectedRecords();

        SelectedRow.forEach((item: any) => {
            item['id_poli'] = this.SelectedPoliklinik.id_poli;

            delete item.kode_kelas;
            delete item.nama_kelas;
            delete item.kode_setup_tarif;
            delete item.nama_setup_tarif;
            delete item.nominal_tarif;
        });

        this.settingTarifPerPoliService.onPostSaveListOfObject(SelectedRow)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Setting Tarif Poli ${this.SelectedPoliklinik.nama_poli} Berhasil Disimpan`)
                        .then(() => {
                            this.handleCloseModalLookupTarif();

                            this.onGetAllTarifPerPoliByIdPoli(this.SelectedPoliklinik.id_poli);
                        })
                }
            });
    }

    handleCloseModalLookupTarif(): void {
        this.modalRef.hide();
    }
    // *** End Section Of Filter Lookup =================
}
