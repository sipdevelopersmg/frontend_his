import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { SetupBedRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-bed-room/setup-bed-room.service';
import { SetupRoomService } from 'src/app/modules/PIS/services/IRNA/setup-bed/setup-room/setup-room.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as Config from './json/setup-bed.config.json';
import * as API_CONFIG from '../../../../../../api/PIS/IRNA';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';

@Component({
    selector: 'app-setup-bed',
    templateUrl: './setup-bed.component.html',
    styleUrls: ['./setup-bed.component.css']
})
export class SetupBedComponent implements OnInit {

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[] = [
        { text: 'No. Room', value: "sr.room_no" },
        { text: 'Pilih Poliklinik', value: 'p.nama_poli' },
        { text: 'Pilih Kelas', value: 'kp.nama_kelas' },
        { text: 'Pilih Status Bed', value: 'sbrs.status_bed' },
    ];
    FilterDropdownDatasource: any[] = [];
    FilterDropdownFields: any = {};

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
    SelectedData: IBedModel;

    API_IRNA = API_CONFIG;

    @ViewChild('LookupRoom') LookupRoom: OrgInputLookUpKodeComponent;
    UrlLookupRoom: string = this.API_IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupRoomService: SetupRoomService,
        private setupPoliService: SetupPoliService,
        private setupBedRoomService: SetupBedRoomService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_setup_room: [0, [Validators.required]],
            id_setup_bed_room: [0, [Validators.required]],
            bed_no: ['', [Validators.required]],
            is_view_antrian: ['', [Validators.required]],
            is_sesuai_sk: ['', [Validators.required]],
            is_active: [false, [Validators.required]],
        });

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
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

    handleChangeFilterPencarian(FilterText: any): void {

        this.FilterDropdownDatasource = [];
        this.FilterDropdownFields = {}

        if (FilterText == "Pilih Poliklinik") {
            this.setupPoliService.onGetAllForLookupRawatInap([])
                .subscribe((result) => {
                    this.FilterDropdownDatasource = result.data;
                    this.FilterDropdownFields = { text: 'nama_poli', value: 'nama_poli' };
                });
        };

        if (FilterText == "Pilih Kelas") {
            this.setupKelasPerawatanService.onGetAll()
                .subscribe((result) => {
                    this.FilterDropdownDatasource = result.data;
                    this.FilterDropdownFields = { text: 'nama_kelas', value: 'nama_kelas' }
                });
        };

        if (FilterText == "Pilih Status Bed") {
            this.FilterDropdownDatasource = [];
            this.FilterDropdownFields = {}
        };
    }

    handlePencarianFilter(args: any): void {
        this.setupBedRoomService.onGetAllBedRoomByDynamicFilter(args)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
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
            case 'update_status':
                if (this.SelectedData) {
                    this.UpdateStatus(this.SelectedData.id_setup_bed_room, this.SelectedData.is_active);
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
        this.id_setup_room.setValue(0);
        this.id_setup_bed_room.setValue(0);
        this.bed_no.setValue('');
        this.is_view_antrian.setValue(false);
        this.is_sesuai_sk.setValue(false);
        this.is_active.setValue(false);
    }

    GetAllData(): void {
        this.handlePencarianFilter([]);
    }

    SetFrom(Data: IBedModel): void {
        this.FormInputData.reset();

        let data = {};

        data = {
            id_setup_room: Data.id_setup_room,
            id_setup_bed_room: Data.id_setup_bed_room,
            bed_no: Data.bed_no,
            is_view_antrian: Data.is_view_antrian,
            is_sesuai_sk: Data.is_sesuai_sk,
            is_active: Data.is_active,
        }

        this.FormInputData.setValue(data);
    }

    handleSelectedRoom(args: any): void {
        this.id_setup_room.setValue(args.id_setup_room || args[0].id_setup_room);

        let nama_poli = document.getElementById("nama_poli") as HTMLInputElement;
        nama_poli.value = args.nama_poli || args[0].nama_poli;

        let nama_kelas = document.getElementById("nama_kelas") as HTMLInputElement;
        nama_kelas.value = args.nama_kelas || args[0].nama_kelas;
    }

    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        let data = {};

        if (this.inputFieldState == 'normal') {

            data = {
                id_setup_room: Data.id_setup_room,
                is_view_antrian: Data.is_view_antrian,
                is_sesuai_sk: Data.is_sesuai_sk,
            };

            this.setupBedRoomService.onPostSaveBedRoom(data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {

            data = {
                id_setup_room: Data.id_setup_room,
                id_setup_bed_room: Data.id_setup_bed_room,
                is_view_antrian: Data.is_view_antrian,
                is_sesuai_sk: Data.is_sesuai_sk,
            };

            this.setupBedRoomService.onPutUpdateBedRoom(data)
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

    UpdateStatus(id_setup_bed_room: number, is_active: boolean): void {
        this.setupBedRoomService.onPutUpdateStatusActiveBedRoom(id_setup_bed_room, is_active)
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
    get id_setup_bed_room(): AbstractControl { return this.FormInputData.get("id_setup_bed_room"); }
    get bed_no(): AbstractControl { return this.FormInputData.get("bed_no"); }
    get is_view_antrian(): AbstractControl { return this.FormInputData.get("is_view_antrian"); }
    get is_sesuai_sk(): AbstractControl { return this.FormInputData.get("is_sesuai_sk"); }
    get is_active(): AbstractControl { return this.FormInputData.get("is_active"); }

}