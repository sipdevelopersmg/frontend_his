import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { CommandModel, EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { take } from 'rxjs/operators';
import { IUserKasirModel } from 'src/app/modules/core/models/setup-user/setup-user.model';
import { SetupUserService } from 'src/app/modules/core/services/setup-user/setup-user.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';
import { SetupTambahModalKasirIrjaComponent } from '../setup-tambah-modal-kasir-irja/setup-tambah-modal-kasir-irja.component';

@Component({
    selector: 'app-setup-buka-kasir-irja',
    templateUrl: './setup-buka-kasir-irja.component.html',
    styleUrls: ['./setup-buka-kasir-irja.component.css']
})
export class SetupBukaKasirIrjaComponent implements OnInit {

    CurrentDate: Date = new Date();

    @ViewChild('GridData') GridData: GridComponent;
    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];
    GridDataCommand: CommandModel[] = [
        { buttonOption: { iconCss: 'fas fa-coins fa-sm' } }
    ];

    FormBukaKasir: FormGroup;

    @ViewChild('KasirDropdown') KasirDropdown: DropDownListComponent;
    KasirDatasource: IUserKasirModel[];
    KasirFields: object = {};

    @ViewChild('TambahModalKasirIRJA') TambahModalKasirIRJA: SetupTambahModalKasirIrjaComponent;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupUserService: SetupUserService,
        public setupKasirRawatJalanService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Buka Kasir', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            'Search'
        ];

        this.onSetFormBukaKasirAttributes();

        this.onGetAllHistoryBukaKasir();

        this.onGetAllUserKasir();
    }

    onSetFormBukaKasirAttributes(): void {
        this.FormBukaKasir = this.formBuilder.group({
            modal_awal: [0, []],
            id_user_kasir: [0, []],
            nama_kasir: ["", []],
        });
    }

    onGetAllUserKasir(): void {
        this.setupUserService.onGetAllUserKasir()
            .subscribe((result) => {
                this.KasirDatasource = result.data;

                this.KasirFields = { text: 'full_name', value: 'id_user' };
            });
    }

    onGetAllHistoryBukaKasir(): void {
        this.setupKasirRawatJalanService.onGetHistoryBukaKasirBySubject();
    }

    handleSelectedRow(args: any): void {

    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.handleOpenModalBukaKasir();
                break;
            default:
                break;
        }
    }

    handleCommandClick(args: any): void {
        let data = args.rowData;

        if (data.status_saldo == "OPEN") {
            this.TambahModalKasirIRJA.handleOpenModalTambahModal();

            this.setupKasirRawatJalanService.SelectedDataBukaKasir.next(data);
        } else {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Transaksi Sudah Dilakukan Tutup Kasir');
        }
    }

    handleOpenModalBukaKasir(): void {
        let btnModalBukaKasir = document.getElementById('btnModalBukaKasir') as HTMLElement;
        btnModalBukaKasir.click();
    }

    handleSubmitModalBukaKasir(FormBukaKasir: any): void {
        this.setupKasirRawatJalanService.onPostSaveBukaKasir(FormBukaKasir.id_user_kasir, FormBukaKasir.modal_awal)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setup Modal Buka Kasir Berhasil')
                        .then(() => {
                            this.handleCloseModalBukaKasir();

                            this.handleResetFormBukaKasir();

                            this.onGetAllHistoryBukaKasir();
                        });
                }
            });
    }

    handleResetFormBukaKasir(): void {
        this.FormBukaKasir.reset();

        this.modal_awal.setValue(0);
        this.id_user_kasir.setValue(0);
        this.nama_kasir.setValue("");
        this.KasirDropdown.value = null;
    }

    handleCloseModalBukaKasir(): void {
        let btnCloseModalBukaKasir = document.getElementById('btnCloseModalBukaKasir') as HTMLElement;
        btnCloseModalBukaKasir.click();
    }

    get modal_awal(): AbstractControl { return this.FormBukaKasir.get('modal_awal') }
    get id_user_kasir(): AbstractControl { return this.FormBukaKasir.get('id_user_kasir') }
    get nama_kasir(): AbstractControl { return this.FormBukaKasir.get('nama_kasir') }
}
