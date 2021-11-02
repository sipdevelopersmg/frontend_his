import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { SetupRoomCategoryService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-room-category/setup-room-category.service';
import { SetupRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-room/setup-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from './json/setup-kamar.config.json';

@Component({
    selector: 'app-setup-kamar',
    templateUrl: './setup-kamar.component.html',
    styleUrls: ['./setup-kamar.component.css']
})
export class SetupKamarComponent implements OnInit {

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
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IKamarModel;

    @ViewChild('DropdownKategoriKamar') DropdownKategoriKamar: DropDownListComponent;
    DropdownKategoriKamarDatasource: any = [];
    DropdownKategoriKamarField: object = { text: 'room_category', value: 'id_setup_room_category' };

    @ViewChild('DropdownPoli') DropdownPoli: DropDownListComponent;
    DropdownPoliDatasource: any = [];
    DropdownPoliField: object = { text: 'nama_poli', value: 'id_poli' };

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: any = [];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    @ViewChild('DropdownGender') DropdownGender: DropDownListComponent;
    DropdownGenderDatasource = [{ gender: "L", text: 'LAKI - LAKI' }, { gender: "P", text: 'PEREMPUAN' },]
    DropdownGenderField: object = { text: 'text', value: 'gender' };

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupRoomService: SetupRoomService,
        private setupPoliklinikService: SetupPoliService,
        private setupRoomCategoryService: SetupRoomCategoryService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_setup_room: [0, []],
            id_setup_room_category: [0, [Validators.required]],
            room_no: ['', [Validators.required]],
            room_descr: ['', [Validators.required]],
            floor_no: ['', [Validators.required]],
            id_poli: [0, [Validators.required]],
            id_kelas: [0, [Validators.required]],
            gender: ["", []],
            keterangan: ["", []],
            is_isolasi: [false, []],
            is_active: [false, []],
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

        this.setupRoomCategoryService.onGetAllRoomCategory()
            .subscribe((result) => {
                this.DropdownKategoriKamarDatasource = result.data;
            });

        this.setupPoliklinikService.onGetAllForLookupRawatInap([])
            .subscribe((result) => {
                this.DropdownPoliDatasource = result.data;
            });

        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
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
                    this.Delete(this.SelectedData.id_setup_room);
                } else {
                    this.utilityService.onShowingCustomAlert('warning', 'Tidak Ada Data Yang Dipilih', '');
                }
                break;
            case 'update_status':
                if (this.SelectedData) {
                    this.UpdateStatus(this.SelectedData.id_setup_room, this.SelectedData.is_active);
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
                if (this.FormInputData.valid) {
                    this.SaveAndNew();
                } else {
                    this.utilityService.onShowingCustomAlert('error', 'Oops', '')
                        .then(() => {
                            console.log(this.FormInputData);
                        });
                }
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
        this.id_setup_room.setValue(0);
        this.id_setup_room_category.setValue(0);
        this.room_no.setValue('');
        this.room_descr.setValue('');
        this.floor_no.setValue('');
        this.id_poli.setValue(0);
        this.id_kelas.setValue(0);
        this.gender.setValue("");
        this.keterangan.setValue("");
        this.is_isolasi.setValue(false);
        this.is_active.setValue(false);
    }

    GetAllData(): void {
        this.setupRoomService.onGetAllRoom()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    SetFrom(Data: IKamarModel): void {
        this.FormInputData.reset();

        let data = {};

        data = {
            id_setup_room: Data.id_setup_room,
            id_setup_room_category: Data.id_setup_room_category,
            room_no: Data.room_no,
            room_descr: Data.room_descr,
            floor_no: Data.floor_no,
            id_poli: Data.id_poli,
            id_kelas: Data.id_kelas,
            gender: Data.gender,
            keterangan: Data.keterangan,
            is_isolasi: Data.is_isolasi,
            is_active: Data.is_active,
        }

        this.FormInputData.setValue(data);
    }

    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        console.log(Data);

        if (this.inputFieldState == 'normal') {
            this.setupRoomService.onPostSaveRoom(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupRoomService.onPutUpdateRoom(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
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

    Delete(id_setup_room: number): void {
        this.setupRoomService.onDeleteRoom(id_setup_room)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    UpdateStatus(id_setup_room: number, is_active: boolean): void {
        this.setupRoomService.onPutUpdateStatusRoom(id_setup_room, is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Update Status Data', result.message)
                        .then(() => {
                            this.GetAllData();
                        });
                }
            })
    }

    get id_setup_room(): AbstractControl { return this.FormInputData.get("id_setup_room"); }
    get id_setup_room_category(): AbstractControl { return this.FormInputData.get("id_setup_room_category"); }
    get room_no(): AbstractControl { return this.FormInputData.get("room_no"); }
    get room_descr(): AbstractControl { return this.FormInputData.get("room_descr"); }
    get floor_no(): AbstractControl { return this.FormInputData.get("floor_no"); }
    get id_poli(): AbstractControl { return this.FormInputData.get("id_poli"); }
    get id_kelas(): AbstractControl { return this.FormInputData.get("id_kelas"); }
    get gender(): AbstractControl { return this.FormInputData.get("gender"); }
    get keterangan(): AbstractControl { return this.FormInputData.get("keterangan"); }
    get is_isolasi(): AbstractControl { return this.FormInputData.get("is_isolasi"); }
    get is_active(): AbstractControl { return this.FormInputData.get("is_active"); }
}
