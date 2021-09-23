import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupJenisPemeriksaanService } from '../../../services/setup-data/setup-jenis-pemeriksaan/setup-jenis-pemeriksaan.service';
import { SetupMappingOrderTarifPenunjangService } from '../../../services/setup-data/setup-mapping-order-tarif-penunjang/setup-mapping-order-tarif-penunjang.service';
import * as Config from './json/setup-mapping-tarif-order.config.json';
import * as API_CONFIG from '../../../../../api/PIS/SETUP_DATA/MAPPING_ORDER_TARIF_PENUNJANG';
import Swal from 'sweetalert2';
import { MappingTarifPenunjangModel } from '../../../models/setup-data/setup_mapping_tarif_penunjang.model';

@Component({
    selector: 'app-setup-mapping-tarif-order-penunjang',
    templateUrl: './setup-mapping-tarif-order-penunjang.component.html',
    styleUrls: ['./setup-mapping-tarif-order-penunjang.component.css']
})
export class SetupMappingTarifOrderPenunjangComponent implements OnInit {

    DropdownJenisPenunjangField = { text: 'nama_grup_penunjang', value: 'kode_grup_penunjang' };
    SelectedJenisPenunjang: any = {};

    ListingOrderFields: object = {}

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
    @ViewChild('GridData') GridData: GridComponent;
    GridDatasource: any[] = [];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[] = [
        { text: 'Update', tooltipText: 'Update', prefixIcon: 'fas fa-edit fa-sm', id: 'update' },
        { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
        "Search"
    ];
    GridPageSettings: object = { pageSizes: true, pageSize: 20, pageCount: 4 };
    GridDataSelectedRow: any[] = [];
    GridDataSelectedRecords: any[] = [];
    GridDataUpdatedRecords: any = {};

    SelectedJenisPemeriksaan: any = {};

    API_CONFIG = API_CONFIG;

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;
    UrlLookupTarifBerlaku: string;
    TitleLookupTarifBerlaku: string;
    ParameterLookupTarifBerlaku: any;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        public setupKelasPerawatanService: SetupKelasPerawatanService,
        private setupJenisPemeriksaanService: SetupJenisPemeriksaanService,
        public setupMappingOrderTarifPenunjangService: SetupMappingOrderTarifPenunjangService,
    ) { }

    ngOnInit(): void {
        this.setupMappingOrderTarifPenunjangService.onGetJenisPenunjang();

        this.onSetFormAddChildAttributes();

        this.onGetKelasPerawatan();
    }

    handleChangeDropdownJenisPenunjang(args: any): void {
        this.SelectedJenisPenunjang = args.itemData;

        this.onGetJenisPemeriksaanByKodeGrupPenunjang(args.itemData.kode_grup_penunjang);

        if (args.itemData.kode_grup_penunjang == "RAD") {
            this.onTogglingColumnsPolosKontrasAndLeftRight(true);
        } else {
            this.onTogglingColumnsPolosKontrasAndLeftRight(false);
        }
    }

    onTogglingColumnsPolosKontrasAndLeftRight(show: boolean): void {
        const grid_columns = this.GridData.getColumns();

        let field_polos_kontras = grid_columns.map((item) => { return item.field }).indexOf("is_ada_polos_kontras");

        let field_left_right = grid_columns.map((item) => { return item.field }).indexOf("is_ada_left_right");

        grid_columns[field_polos_kontras].visible = show;

        grid_columns[field_left_right].visible = show;

        this.GridDatasource = [];

        this.GridData.refresh();
    }

    onGetJenisPemeriksaanByKodeGrupPenunjang(KodeGrupPenunjang: string): void {
        this.setupMappingOrderTarifPenunjangService.onGetJenisPemeriksaanByGrupPenunjang(KodeGrupPenunjang)
            .subscribe((result) => {
                this.ListingOrderFields = {
                    dataSource: result.data,
                    id: 'kode_kelompok',
                    text: 'nama_kelompok',
                    child: 'child'
                }
            });
    }

    handleSelectedKelompokOrder(args: any): void {
        let data = args.nodeData;

        if (data.parentID) {
            (<HTMLInputElement>document.getElementById('nama_kelompok_terpilih')).value = data.text;
            this.onGetMappingTarifOrderPenunjang(data.id, 0);
            this.SelectedJenisPemeriksaan = data;
        }
    }

    handleBeforeOpenContextMenu(args: any, data: any): void {
        if (data.parent_kode_kelompok == "") {
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
                this.handleOpenModalAddChild(data);
                this.onFillFormAddChild(data);
                break;
            case 'delete':
                this.SelectedChild = data;
                this.handleDeleteChild(data);
                break;
            case 'add_charge':
                this.SelectedChild = data;
                this.TitleLookupTarifBerlaku = `Data Tarif Kelompok ${data.kode_kelompok} - ${data.nama_kelompok}`;
                this.UrlLookupTarifBerlaku = this.API_CONFIG.LOOKUP_TARIF_MAPPING_ORDER_BY_KODE_KELOMPOK;
                this.ParameterLookupTarifBerlaku = {
                    kode_kelompok: data.kode_kelompok,
                    kode_grup_penunjang: this.SelectedJenisPenunjang.kode_grup_penunjang
                };
                this.LookupChecklist.hanldeOpenModalLookupChecklist();
                break;
        }
    }

    onSetFormAddChildAttributes(): void {
        this.FormAddChild = this.formBuilder.group({
            parent_kode_kelompok: [0, []],
            kode_kelompok: ["", []],
            nama_kelompok: ["", []],
            kode_grup_penunjang: ["", []],
        });
    }

    onFillFormAddChild(Data: any): void {
        this.parent_kode_kelompok.setValue(Data.parent_kode_kelompok);
        this.kode_kelompok.setValue(Data.kode_kelompok);
        this.nama_kelompok.setValue(Data.nama_kelompok);
        this.kode_grup_penunjang.setValue(Data.kode_grup_penunjang);
    }

    handleOpenModalAddChild(Data: any): void {
        this.handleResetFormAddChild();

        this.kode_grup_penunjang.setValue(this.SelectedJenisPenunjang.kode_grup_penunjang);

        if (Data.nama_grup_penunjang) {
            Data.nama_grup_penunjang = Data.nama_grup_penunjang;

            this.SelectedChild = Data;
        } else {
            this.SelectedChild = Data;

            this.parent_kode_kelompok.setValue(this.SelectedChild.kode_kelompok);
        }

        setTimeout(() => {
            this.modalRef = this.bsModalService.show(this.modalAddChild);
        }, 250);
    }

    handleCloseModalAddChild(): void {
        this.modalRef.hide();
    }

    handleSubmitAddChild(FormAddChild: any): void {
        this.setupJenisPemeriksaanService.onPostSave(FormAddChild)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Data Kelompok ${FormAddChild.nama_kelompok} Berhasil Disimpan`)
                        .then(() => {
                            this.handleCloseModalAddChild();

                            this.onGetJenisPemeriksaanByKodeGrupPenunjang(FormAddChild.kode_grup_penunjang);
                        })
                }
            })
    }

    handleUpdateAddChild(FormAddChild: any): void {
        this.setupJenisPemeriksaanService.onPutUpdate(FormAddChild)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Data Kelompok ${FormAddChild.nama_kelompok} Berhasil Diubah`)
                        .then(() => {
                            this.handleCloseModalAddChild();

                            this.onGetJenisPemeriksaanByKodeGrupPenunjang(FormAddChild.kode_grup_penunjang);
                        })
                }
            })
    }

    handleIsUsedKodeKelompok(Data: any): void {
        this.setupJenisPemeriksaanService.onCheckIsUsed(Data.kode_kelompok)
            .subscribe((result) => {
                if (result.data) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Kode Kelompok Sedang Digunakan',
                        text: 'Apakah Anda Yakin Ingin Menghapus?',
                        showDenyButton: true,
                        showCancelButton: true,
                        confirmButtonText: `Yes`,
                        denyButtonText: `Tidak, Kembali`,
                        focusCancel: true,
                    }).then((result) => {
                        if (result.isConfirmed) {
                            this.handleDeleteChild(Data);
                        };
                    });
                } else {
                    this.handleDeleteChild(Data);
                }
            });
    }

    handleDeleteChild(Data: any): void {
        this.setupJenisPemeriksaanService.onDelete(Data.kode_kelompok)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Kode Kelompok ${Data.kode_kelompok} Berhasil Dihapus`)
                        .then(() => {
                            this.onGetJenisPemeriksaanByKodeGrupPenunjang(Data.kode_grup_penunjang);
                        });
                }
            })
    }

    handleResetFormAddChild(): void {
        this.FormAddChild.reset();

        this.parent_kode_kelompok.setValue("");
        this.kode_kelompok.setValue("");
        this.nama_kelompok.setValue("");
        this.kode_grup_penunjang.setValue("");
    }

    onGetKelasPerawatan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            })
    }

    handleChangeDropdownKelas(args: any): void {
        if (this.SelectedJenisPemeriksaan) {
            this.onGetMappingTarifOrderPenunjang(this.SelectedJenisPemeriksaan.id, args.itemData.id_kelas);
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Jenis Pemeriksaan Belum Dipilih', '');
        }
    }

    handleSelectedRow(args: any): void {
        this.GridDataSelectedRow = args.data;
    }

    handleToolbarClick(args: any): void {
        if (args.item.id === "delete") {
            this.GridDataSelectedRecords = this.GridData.getSelectedRecords();

            if (this.GridDataSelectedRecords.length > 0) {
                this.onDeleteMappingTarifOrderPenunjang(this.GridDataSelectedRecords);
            } else {
                this.utilityService.onShowingCustomAlert('warning', 'Belum Ada Data Yang Dipilih', '');
            }
        }

        if (args.item.id === "update") {
            this.onUpdateMappingTarifOrderPenunjang(this.GridDataUpdatedRecords);
        }
    }

    handleActionComplete(args: any): void {
        if (args.requestType == "save") {
            if (args.previousData != args.data) {
                this.GridDataUpdatedRecords = args.data;
            }
        }
    }

    handleSelectedRecordItem(args: any): void {
        args.forEach((item) => {
            delete item['kode_setup_tarif'];
            delete item['nama_grup_tarif'];
            delete item['nama_setup_tarif'];
            delete item['nominal_tarif'];

            item.kode_kelompok = this.SelectedChild.kode_kelompok;
            item.nama_tindakan_penunjang = "";
            item.is_ada_left_right = false;
            item.is_ada_polos_kontras = false;
        });

        setTimeout(() => {
            this.onSubmitMappingTarifOrderPenunjang(args);
        }, 1500);
    }

    onGetMappingTarifOrderPenunjang(kode_kelompok: string, id_kelas?: number): void {
        this.setupMappingOrderTarifPenunjangService.onGetAllMappingTarifOrderByKodeKelompokAndKelasPerawatan(kode_kelompok, id_kelas ? id_kelas : 0)
            .subscribe((result) => {
                this.GridDatasource = result.data;

                this.GridData.refresh();
            })
    }

    onSubmitMappingTarifOrderPenunjang(Data: MappingTarifPenunjangModel[]): void {
        this.setupMappingOrderTarifPenunjangService.onPostSave(Data)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `${Data.length} Data Berhasil Disimpan`)
                        .then(() => {
                            this.onGetMappingTarifOrderPenunjang(this.SelectedChild.kode_kelompok, 0);
                        })
                }
            })
    }

    onUpdateMappingTarifOrderPenunjang(Data: MappingTarifPenunjangModel): void {
        Data.kode_kelompok = this.SelectedJenisPemeriksaan.id;

        this.setupMappingOrderTarifPenunjangService.onPutEdit(Data)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Berhasil Diubah')
                        .then(() => {
                            this.onGetMappingTarifOrderPenunjang(this.SelectedJenisPemeriksaan.id, 0);
                        })
                }
            })
    }

    onDeleteMappingTarifOrderPenunjang(SelectedRecords: MappingTarifPenunjangModel[]): void {
        let id_mapping_tarif_penunjang_Arr = [];

        SelectedRecords.forEach((item) => {
            id_mapping_tarif_penunjang_Arr.push(item.id_mapping_tarif_penunjang);
        });

        this.setupMappingOrderTarifPenunjangService.onDelete(id_mapping_tarif_penunjang_Arr)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `${id_mapping_tarif_penunjang_Arr.length} Data Berhasil Dihapus`)
                        .then(() => {
                            this.onGetMappingTarifOrderPenunjang(this.SelectedJenisPemeriksaan.id, 0);
                        })
                }
            })
    }

    get parent_kode_kelompok(): AbstractControl { return this.FormAddChild.get('parent_kode_kelompok'); }
    get kode_kelompok(): AbstractControl { return this.FormAddChild.get('kode_kelompok'); }
    get nama_kelompok(): AbstractControl { return this.FormAddChild.get('nama_kelompok'); }
    get kode_grup_penunjang(): AbstractControl { return this.FormAddChild.get('kode_grup_penunjang'); }
}
