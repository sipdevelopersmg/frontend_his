import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { KelompokTarifModel } from '../../../models/setup-data/setup-kelompok-tarif.model';
import { TarifModel } from '../../../models/setup-data/setup-tarif.model';
import { SetupGrupTarifService } from '../../../services/setup-data/setup-grup-tarif/setup-grup-tarif.service';
import { SetupKelompokTarifService } from '../../../services/setup-data/setup-kelompok-tarif/setup-kelompok-tarif.service';
import { SetupTarifService } from '../../../services/setup-data/setup-tarif/setup-tarif.service';

@Component({
    selector: 'app-setup-tarif',
    templateUrl: './setup-tarif.component.html',
    styleUrls: ['./setup-tarif.component.css']
})
export class SetupTarifComponent implements OnInit {

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[];

    /**
     * Variable untuk menentukan component input 
     * @val normal,edit,detail
    */
    inputFieldState = 'normal';

    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];
    GridPageSettings: object = { pageSizes: true, pageSize: 20, pageCount: 4 };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: TarifModel;

    /**
     * @modalRef Template Modal Setup Tarif
    */
    modalRef: BsModalRef;
    @ViewChild('modalAddSetupTarif') modalAddSetupTarif: TemplateRef<any>;

    /**
     * @FormTarif Form Group di Modal Setup Tarif
    */
    FormTarif: FormGroup;
    FormTarifState = 'Insert';

    /**
     * @SelectedGrupTarif Variable Grup Tarif yg didapatkan ketika nodeSelected Grup Tarif 
    */
    SelectedGrupTarif: any;

    @ViewChild('DropdownKelompokTarif') DropdownKelompokTarif: DropDownListComponent;
    KelompokTarifDatasource: Observable<KelompokTarifModel[]> = this.setupKelompokTarifService.KelompokTarifSubject.asObservable();
    KelompokTarifDropdownField: object = { text: 'nama_kelompok_tarif', value: 'id_kelompok_tarif' };

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupTarifService: SetupTarifService,
        private utilityHelperService: UtilityHelperService,
        private setupGrupTarifService: SetupGrupTarifService,
        private setupKelompokTarifService: SetupKelompokTarifService,
    ) { }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Ubah Status', tooltipText: 'Ubah Status', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'ubahStatus' },
            'Search'
        ];

        this.GetAllData();

        this.onSetFormTarifAttributes();

        this.setupKelompokTarifService.onSetKelompokTarifSubject();
    }

    onSetFormTarifAttributes(): void {
        this.FormTarif = this.formBuilder.group({
            id_setup_tarif: [0, [Validators.required]],
            id_grup_tarif: [0, [Validators.required]],
            nama_grup_tarif: [0, [Validators.required]],
            id_kelompok_tarif: ["", []],
            nama_setup_tarif: ["", [Validators.required]],
            is_irja: [false, [Validators.required]],
            is_irna: [false, [Validators.required]],
            is_irda: [false, [Validators.required]],
            is_paket: [false, [Validators.required]],
        });
    }

    handleSelectedGrupTarif(args: any): void {

        this.SelectedGrupTarif = args;

        if (args.hasChildren) {
            this.GridDataToolbar = [
                { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
                { text: 'Ubah Status', tooltipText: 'Ubah Status', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'ubahStatus' },
                'Search'
            ];
        } else {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
                { text: 'Ubah Status', tooltipText: 'Ubah Status', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'ubahStatus' },
                'Search'
            ];

            this.GetAllByGrupTarifId(parseInt(args.id));
        };
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
                this.OpenModalSetupTarif('Insert');
                break;
            case 'edit':
                if (this.SelectedData) {
                    this.OpenModalSetupTarif('Update');
                } else {
                    this.utilityService.onShowingCustomAlert('error', 'Oops..', 'Data Tarif Belum Dipilih');
                }
                break;
            case 'ubahStatus':
                this.UbahStatus();
                break;
            default:
                break;
        }
    }

    OpenModalSetupTarif(State: string): void {
        this.ResetFrom();

        this.modalRef = this.bsModalService.show(
            this.modalAddSetupTarif,
            Object.assign({}, { class: 'modal-lg' })
        );

        this.onFillFormSetupTarifByFormState(State);
    }

    onFillFormSetupTarifByFormState(State: string): void {
        this.FormTarifState = State;

        if (State == 'Insert') {
            this.id_grup_tarif.setValue(parseInt(this.SelectedGrupTarif.id));
            this.nama_grup_tarif.setValue(this.SelectedGrupTarif.text);
        } else {
            const selectedTarif: any = this.utilityHelperService.onRemoveInfo(this.SelectedData, ['kode_setup_tarif', 'is_active', 'time_created', 'time_deactived', 'user_created', 'user_deactived']);

            this.setupGrupTarifService.onGetById(selectedTarif.id_grup_tarif)
                .subscribe((result) => {
                    if (result) {
                        selectedTarif.nama_grup_tarif = `${result.data.kode_grup_tarif} - ${result.data.nama_grup_tarif}`;

                        this.FormTarif.setValue(selectedTarif);

                        if (selectedTarif.is_paket) {
                            const is_paket_radio_true = document.querySelector('input[name=is_paket][value="true"]') as HTMLInputElement;

                            is_paket_radio_true.click();
                        } else {
                            const is_paket_radio_false = document.querySelector('input[name=is_paket][value="false"]') as HTMLInputElement;

                            is_paket_radio_false.click();
                        }
                    }
                });
        }
    }

    /** Method Untuk Mereload Data Grid */
    GetAllData(): void {
        this.setupTarifService.onGetAll()
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    GetAllByGrupTarifId(GrupTarifId: number): void {
        this.setupTarifService.onGetByGrupTarifId(GrupTarifId)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            })
    }

    UbahStatus(): void {
        const Data: TarifModel = this.SelectedData;

        this.setupTarifService.onPutStatusActive(Data.id_setup_tarif, !Data.is_active)
            .subscribe((result) => {
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Ubah Status Tarif', result.message)
                    .then(() => {
                        this.GetAllData();
                    });
            })
    }

    handleSubmitFormTarif(FormTarif: any): void {
        FormTarif.is_paket = JSON.parse(FormTarif.is_paket);

        this.utilityHelperService.onRemoveInfo(FormTarif, ['id_setup_tarif', 'nama_grup_tarif']);

        this.setupTarifService.onPostSave(FormTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setup Tarif Berhasil Disimpan')
                        .then(() => {
                            this.handleCloseModalTarif();
                            // this.GetAllData();
                            this.GetAllByGrupTarifId(parseInt(this.SelectedGrupTarif.id));
                        })
                }
            })
    }

    handleUpdateFormTarif(FormTarif: any): void {
        FormTarif.is_paket = JSON.parse(FormTarif.is_paket);

        this.utilityHelperService.onRemoveInfo(FormTarif, ['kode_setup_tarif', 'nama_grup_tarif', 'is_active', 'time_created', 'time_deactived', 'user_created', 'user_deactived']);

        this.setupTarifService.onPutEdit(FormTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setup Tarif Berhasil Diupdate')
                        .then(() => {
                            this.handleCloseModalTarif();
                            // this.GetAllData();
                            this.GetAllByGrupTarifId(parseInt(this.SelectedGrupTarif.id));
                        })
                }
            })
    }

    handleCloseModalTarif(): void {
        this.modalRef.hide();
    }

    /* Method untuk mengkosongkan data yang ada di form */
    ResetFrom(): void {
        this.FormTarif.reset();
        this.id_setup_tarif.setValue(0);
        this.id_grup_tarif.setValue(0);
        this.nama_grup_tarif.setValue('');
        this.id_kelompok_tarif.setValue(0);
        this.nama_setup_tarif.setValue('');
        this.is_irja.setValue(false);
        this.is_irna.setValue(false);
        this.is_irda.setValue(false);
        this.is_paket.setValue(false);
    }

    get id_setup_tarif(): AbstractControl { return this.FormTarif.get('id_setup_tarif') };
    get id_grup_tarif(): AbstractControl { return this.FormTarif.get('id_grup_tarif') };
    get nama_grup_tarif(): AbstractControl { return this.FormTarif.get('nama_grup_tarif') };
    get id_kelompok_tarif(): AbstractControl { return this.FormTarif.get('id_kelompok_tarif') };
    get nama_setup_tarif(): AbstractControl { return this.FormTarif.get('nama_setup_tarif') };
    get is_irja(): AbstractControl { return this.FormTarif.get('is_irja') };
    get is_irna(): AbstractControl { return this.FormTarif.get('is_irna') };
    get is_irda(): AbstractControl { return this.FormTarif.get('is_irda') };
    get is_paket(): AbstractControl { return this.FormTarif.get('is_paket') };
}
