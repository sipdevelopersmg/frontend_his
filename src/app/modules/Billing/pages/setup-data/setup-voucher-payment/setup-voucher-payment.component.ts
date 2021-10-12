import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { IVoucherPaymentModel } from '../../../models/setup-data/setup-voucher-payment.model';
import { SetupVoucherPaymentService } from '../../../services/setup-data/setup-voucher-payment/setup-voucher-payment.service';
import * as Config from './json/setup-voucher-payment.config.json';

@Component({
    selector: 'app-setup-voucher-payment',
    templateUrl: './setup-voucher-payment.component.html',
    styleUrls: ['./setup-voucher-payment.component.css']
})
export class SetupVoucherPaymentComponent implements OnInit {

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
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IVoucherPaymentModel;

    FormPembatalanVoucher: FormGroup;

    modalRef: BsModalRef;
    @ViewChild('modalPembatalanVoucher') modalPembatalanVoucher: TemplateRef<any>;

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private utilityHelperService: UtilityHelperService,
        private setupVoucherPaymentService: SetupVoucherPaymentService
    ) { }

    ngOnInit(): void {
        this.FormInputData = this.formBuilder.group({
            id_voucher: [0, [Validators.required]],
            nomor_urut_voucher: [0, [Validators.required]],
            kode_voucher: ['', [Validators.required]],
            nama: ['', [Validators.required]],
            nilai: [0, [Validators.required]],
            tanggal_expired: [new Date(), [Validators.required]],
            is_terpakai: [false, [Validators.required]],
            keterangan: ["", [Validators.required]],
            syarat_min_belanja: [0, [Validators.required]],
        });

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            // { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            { text: 'Batalkan', tooltipText: 'Batalkan', prefixIcon: 'fas fa-ban fa-sm', id: 'batalkan' },
            'Search'
        ];

        this.GetAllData();

        this.FormPembatalanVoucher = this.formBuilder.group({
            id_voucher: [0, []],
            reason_canceled: ["", []]
        });
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

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;
        if (TabId == 'Data') {
            this.GetAllData();
        } else {
            // this.setNewForm();
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
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
            case 'detail':
                this.setViewForm();
                break;
            case 'delete':
                this.DeleteData();
                break;
            case 'batalkan':
                this.handleOpenModalPembatalanAdmisi()
                break;
            default:
                break;
        }
    }

    /** Method setting input new data */
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

    /** Method setting edit data */
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

    /** Method setting lihat data detail */
    setViewForm(): void {
        this.OrgTabsRef.onNavigateTabUsingTabId(1, 'Input');
        this.inputFieldState = 'detail';
        this.SetFrom(this.SelectedData);
        this.ButtonNav = [
            { Id: 'Cancel', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    /* Method untuk mengkosongkan data yang ada di form */
    ResetFrom(): void {
        this.FormInputData.reset();
        this.id_voucher.setValue(0);
        this.nomor_urut_voucher.setValue(0);
        this.kode_voucher.setValue('');
        this.nama.setValue('');
        this.nilai.setValue(0);
        this.tanggal_expired.setValue(new Date());
        this.is_terpakai.setValue(false);
        this.keterangan.setValue("");
        this.syarat_min_belanja.setValue(0);
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupVoucherPaymentService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    SetFrom(Data: IVoucherPaymentModel): void {
        this.FormInputData.reset();

        this.utilityHelperService.onRemoveInfo(Data, ["user_inputed", "user_canceled", "time_inputed", "time_canceled", "reason_canceled"]);

        this.FormInputData.setValue(Data);
    }

    /** Method menyimpan | menubah data */
    SaveAndNew(): void {
        const Data = this.FormInputData.value;

        if (this.inputFieldState == 'normal') {

            delete Data.id_voucher;

            Data.is_terpakai = false;

            this.setupVoucherPaymentService.onPostSave(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        } else {
            this.setupVoucherPaymentService.onPutEdit(Data)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Data', result.message)
                        .then(() => {
                            this.Cancel();
                        });
                });
        }
    }

    /** Method untuk Menghapus data yang ada di grid */
    DeleteData(): void {

        const Data: IVoucherPaymentModel = this.SelectedData;

        this.setupVoucherPaymentService.onDelete(Data.id_voucher)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Hapus Data', result.message)
                    .then(() => {
                        this.Cancel();
                    });
            })
    }

    Clear(): void {
        this.ResetFrom();
    }

    Cancel(): void {
        this.ResetFrom();
        this.OrgTabsRef.onNavigateTabUsingTabId(0, 'Data');
        this.GetAllData();
    }

    handleOpenModalPembatalanAdmisi(): void {
        this.onResetFormPembatalanAdmisi();

        this.id_voucher_batal.setValue(this.SelectedData.id_voucher);

        this.modalRef = this.bsModalService.show(this.modalPembatalanVoucher);
    }

    handleCloseModalPembatalanVoucher(): void {
        this.modalRef.hide();
    }

    onResetFormPembatalanAdmisi(): void {
        this.FormPembatalanVoucher.reset();

        this.id_voucher_batal.setValue(0);
        this.reason_canceled.setValue("");
    }

    handleSubmitModalPembatalanVoucher(FormPembatalanVoucher: any): void {
        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data yang Telah Dibatalkan Tidak Dapat Diubah",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.setupVoucherPaymentService.onPutCancel(FormPembatalanVoucher.id_voucher, FormPembatalanVoucher.reason_canceled)
                    .subscribe((result) => {
                        if (result) {
                            this.utilityService.onShowingCustomAlert('success', "Success", `Pembatalan ${this.SelectedData.nama} Berhasil`)
                                .then(() => {
                                    this.handleCloseModalPembatalanVoucher();

                                    this.GetAllData();
                                })
                        }
                    });
            }
        });
    }

    get id_voucher(): AbstractControl { return this.FormInputData.get('id_voucher'); }
    get nomor_urut_voucher(): AbstractControl { return this.FormInputData.get('nomor_urut_voucher'); }
    get kode_voucher(): AbstractControl { return this.FormInputData.get('kode_voucher'); }
    get nama(): AbstractControl { return this.FormInputData.get('nama'); }
    get nilai(): AbstractControl { return this.FormInputData.get('nilai'); }
    get tanggal_expired(): AbstractControl { return this.FormInputData.get('tanggal_expired'); }
    get is_terpakai(): AbstractControl { return this.FormInputData.get('is_terpakai'); }
    get keterangan(): AbstractControl { return this.FormInputData.get('keterangan'); }
    get syarat_min_belanja(): AbstractControl { return this.FormInputData.get('syarat_min_belanja'); }

    get id_voucher_batal(): AbstractControl { return this.FormPembatalanVoucher.get('id_voucher'); }
    get reason_canceled(): AbstractControl { return this.FormPembatalanVoucher.get('reason_canceled'); }
}
