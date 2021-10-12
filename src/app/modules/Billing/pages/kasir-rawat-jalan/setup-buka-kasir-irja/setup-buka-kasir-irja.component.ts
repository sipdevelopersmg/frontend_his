import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { IUserKasirModel } from 'src/app/modules/core/models/setup-user/setup-user.model';
import { SetupUserService } from 'src/app/modules/core/services/setup-user/setup-user.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';
import * as Config from './json/setup-buka-kasir-irja.config.json';

@Component({
    selector: 'app-setup-buka-kasir-irja',
    templateUrl: './setup-buka-kasir-irja.component.html',
    styleUrls: ['./setup-buka-kasir-irja.component.css']
})
export class SetupBukaKasirIrjaComponent implements OnInit {

    CurrentDate: Date = new Date();

    GridConfig = Config;
    GridDatasource: any[];
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];

    FormBukaKasir: FormGroup;

    @ViewChild('KasirDropdown') KasirDropdown: DropDownListComponent;
    KasirDatasource: IUserKasirModel[];
    KasirFields: object = {};

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupUserService: SetupUserService,
        private setupKasirRawatJalanService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            'Search'
        ];

        this.onSetFormBukaKasirAttributes();

        this.onGetAllUserKasir();

        this.KasirFields = { text: 'full_name', value: 'id_user' };
    }

    onSetFormBukaKasirAttributes(): void {
        this.FormBukaKasir = this.formBuilder.group({
            modal_awal: [0, []],
            id_user_kasir: [0, []],
        });
    }

    onGetAllUserKasir(): void {
        this.setupUserService.onGetAllUserKasir()
            .subscribe((result) => {
                this.KasirDatasource = result.data;
            });
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
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

    handleOpenModalBukaKasir(): void {
        let btnModalBukaKasir = document.getElementById('btnModalBukaKasir') as HTMLElement;
        btnModalBukaKasir.click();
    }

    handleSubmitModalBukaKasir(FormBukaKasir: any): void {
        this.setupKasirRawatJalanService.onPostSaveBukaKasir(FormBukaKasir.modal_awal, FormBukaKasir.id_user_kasir)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setup Modal Buka Kasir Berhasil')
                        .then(() => {
                            this.handleCloseModalBukaKasir();

                            this.handleResetFormBukaKasir();
                        })
                }
            })
    }

    handleResetFormBukaKasir(): void {
        this.FormBukaKasir.reset();

        this.modal_awal.setValue(0);
        this.id_user_kasir.setValue(0);
        this.KasirDropdown.value = null;
    }

    handleCloseModalBukaKasir(): void {
        let btnCloseModalBukaKasir = document.getElementById('btnCloseModalBukaKasir') as HTMLElement;
        btnCloseModalBukaKasir.click();
    }

    get modal_awal(): AbstractControl { return this.FormBukaKasir.get('modal_awal') }
    get id_user_kasir(): AbstractControl { return this.FormBukaKasir.get('id_user_kasir') }
}
