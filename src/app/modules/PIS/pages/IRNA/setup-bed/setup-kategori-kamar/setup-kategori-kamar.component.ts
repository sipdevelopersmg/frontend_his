import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IKategoriKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kategori-kamar.model';
import { SetupRoomCategoryService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-room-category/setup-room-category.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from './json/setup-kategori-kamar.config.json';

@Component({
    selector: 'app-setup-kategori-kamar',
    templateUrl: './setup-kategori-kamar.component.html',
    styleUrls: ['./setup-kategori-kamar.component.css']
})
export class SetupKategoriKamarComponent implements OnInit {

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
    GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IKategoriKamarModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupRoomCategoryService: SetupRoomCategoryService
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_setup_room_category: [0, [Validators.required]],
            room_category: ['', [Validators.required]],
            is_active: [false, [Validators.required]],
        });

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            { text: 'Update Status', tooltipText: 'Update Status', prefixIcon: 'fas fa-exchange-alt fa-sm', id: 'update_status' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            'Search'
        ];

        this.GetAllData();
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (TabId == 'Input') {
            // this.setNewForm();
        } else {
            this.GetAllData();
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
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
            case 'delete':
                if (this.SelectedData) {
                    this.Delete(this.SelectedData.id_setup_room_category);
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Tidak Ada Data Yang Dipilih', '');
                }
                break;
            case 'update_status':
                if (this.SelectedData) {
                    this.UpdateStatus(this.SelectedData.id_setup_room_category, this.SelectedData.is_active);
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Tidak Ada Data Yang Dipilih', '');
                }
                break;
            case 'detail':
                this.setViewForm();
                break;
            default:
                break;
        }
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

    setNewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'normal';
        this.FormInputData.reset();
        this.StatusFormNew = true;
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'Clear', Captions: 'Clear', Icons1: 'fa-redo-alt' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

    setEditForm(): void {
        this.inputFieldState = 'edit';
        this.SetFrom(this.SelectedData);
        this.StatusFormNew = false;
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
            { Id: 'SaveAndNew', Captions: 'Save', Icons1: 'fa-save' },
        ];
    };

    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    ResetFrom(): void {
        this.FormInputData.reset();
        this.id_setup_room_category.setValue('');
        this.room_category.setValue('');
        this.is_active.setValue(false);
    }

    GetAllData(): void {
        this.setupRoomCategoryService.onGetAllRoomCategory()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    SetFrom(Data: IKategoriKamarModel): void {
        this.FormInputData.reset();

        let form_value = {
            id_setup_room_category: Data.id_setup_room_category,
            room_category: Data.room_category,
            is_active: Data.is_active,
        };

        this.FormInputData.setValue(form_value);
    }

    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        let data = {};

        if (this.inputFieldState == 'normal') {
            data = {
                room_category: Data.room_category
            };

            this.setupRoomCategoryService.onPostSaveRoomCategory(data)
                .subscribe((result) => {
                    if (result) {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                            .then(() => {
                                this.Cancel();
                            });
                    }
                });
        } else {
            data = {
                id_setup_room_category: Data.id_setup_room_category,
                room_category: Data.room_category
            };

            this.setupRoomCategoryService.onPutUpdateRoomCategory(data)
                .subscribe((result) => {
                    if (result) {
                        this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                            .then(() => {
                                this.Cancel();
                            });
                    }
                });
        }
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }

    Delete(id_setup_room_category: number): void {
        this.setupRoomCategoryService.onDeleteRoomCategory(id_setup_room_category)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    UpdateStatus(id_setup_room_category: number, is_active: boolean): void {
        this.setupRoomCategoryService.onPutUpdateStatusRoomCategory(id_setup_room_category, is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Update Status Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    get id_setup_room_category(): AbstractControl { return this.FormInputData.get("id_setup_room_category"); }
    get room_category(): AbstractControl { return this.FormInputData.get("room_category"); }
    get is_active(): AbstractControl { return this.FormInputData.get("is_active"); }
}
