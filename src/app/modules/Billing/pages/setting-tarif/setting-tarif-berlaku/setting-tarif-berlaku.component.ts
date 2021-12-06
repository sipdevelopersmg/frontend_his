import { Component, OnInit, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { EditSettingsModel, GridComponent, IEditCell, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { KelasPerawatanModel } from '../../../models/setup-data/setup-kelas-perawatan.model';
import { SettingTarifBerlakuService } from '../../../services/setting-harga-tarif/setting-tarif-berlaku/setting-tarif-berlaku.service';
import { SetupKelasPerawatanService } from '../../../services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { SetupTarifService } from '../../../services/setup-data/setup-tarif/setup-tarif.service';
import * as Config from './json/setting-tarif-berlaku.config.json';

@Component({
    selector: 'app-setting-tarif-berlaku',
    templateUrl: './setting-tarif-berlaku.component.html',
    styleUrls: ['./setting-tarif-berlaku.component.css']
})
export class SettingTarifBerlakuComponent implements OnInit {

    /**
     * Variable untuk Menympan Navigasi halaman
     * @ButtonNavModel Array
    */
    ButtonNav: ButtonNavModel[] = [
        { Id: 'Clear', Captions: 'Clear', Icons1: 'fas fa-redo-alt fa-sm' },
        { Id: 'Simpan', Captions: 'Simpan', Icons1: 'fas fa-save fa-sm' },
    ];

    @ViewChild('KelasPerawatanDropdown') KelasPerawatanDropdown: DropDownListComponent;
    KelasPerawatanDatasource: KelasPerawatanModel[] = [];
    KelasPerawatanFields: object = { text: 'nama_kelas', value: 'id_kelas' };
    KelasPerawatanSelected: string;
    KelasPerawatanIdSelected: number;

    @ViewChild('TglBerlakuDatepicker') TglBerlakuDatepicker: DatePickerComponent;
    TglBerlakuSelected: string;
    TglBerlakuDatepickerDisabled = false;

    /**
     * Variable untuk menyimpan Configurasi Grid
     * @Json Config
    */
    GridConfig = Config;

    GridDatasource: any[];
    @ViewChild('GridData') GridData: GridComponent;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];

    SelectedData: any;

    JasaDokterParams: IEditCell;
    JasaDokterElem: HTMLElement;
    JasaDokterObj: NumericTextBox;

    JasaSaranaParams: IEditCell;
    JasaSaranaElem: HTMLElement;
    JasaSaranaObj: NumericTextBox;

    JasaRumahSakitParams: IEditCell;
    JasaRumahSakitElem: HTMLElement;
    JasaRumahSakitObj: NumericTextBox;

    JasaBhapParams: IEditCell;
    JasaBhapElem: HTMLElement;
    JasaBhapObj: NumericTextBox;

    JasaAnastesiParams: IEditCell;
    JasaAnastesiElem: HTMLElement;
    JasaAnastesiObj: NumericTextBox;

    EditedGridData: any[] = [];

    modalRef: BsModalRef;
    @ViewChild('modalAddLookupTarif') modalAddLookupTarif: TemplateRef<any>;

    modalRefKonfirmasi: BsModalRef;
    @ViewChild('modalConfirmationLookupTarif') modalConfirmationLookupTarif: TemplateRef<any>;

    GridLookupTarifDatasource: any[];
    GridLookupTarif: MolGridComponent = null;
    GridLookupTarifPageSettings: object = { pageSize: 20, pageSizes: true, pageCount: 4 };
    GridLookupTarifSelectionSettings: object = { type: 'Multiple', enableSimpleMultiRowSelection: true }
    SelectedFilterLookupTarif: string;

    @ViewChild('JenisUbahTarif') JenisUbahTarif: DropDownListComponent;
    JenisUbahTarifDatasource = [{ Jenis: 'Tarif Naik', Nilai: true }, { Jenis: 'Tarif Turun', Nilai: false }];
    JenisUbahTarifFields = { text: 'Jenis', value: 'Nilai' };

    @ViewChild('JenisUbahNominal') JenisUbahNominal: DropDownListComponent;
    JenisUbahNominalTarifDatasource = [{ Jenis: 'Plus', Nilai: true }, { Jenis: 'Minus', Nilai: false }];
    JenisUbahNominalTarifFields = { text: 'Jenis', value: 'Nilai' };

    FormKenaikanPersentaseTarif: FormGroup;
    FormKenaikanPersentaseTarifState = "UsingTglBerlaku";

    constructor(
        private formBuilder: FormBuilder,
        private bsModalService: BsModalService,
        private utilityService: UtilityService,
        private setupTarifService: SetupTarifService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private settingTarifBerlakuService: SettingTarifBerlakuService,
    ) { }

    ngOnInit(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                if (result) {
                    this.KelasPerawatanDatasource = result.data;
                }
            });

        this.GridDataToolbar = ['Search'];

        this.handleSetGridDataParams();

        this.FormKenaikanPersentaseTarif = this.formBuilder.group({
            id_kelas: [0, []],
            tgl_berlaku: ["", []],
            is_up_for_percent: [false, []],
            perubahan_tarif_dalam_percent: [0, []],
            is_plus_for_jumlah: [false, []],
            sejumlah: [0, []],
        });
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'Simpan':
                this.handleSubmitSettingTarifBerlaku();
                break;
            case 'Clear':
                this.handleClearSettingTarifBerlaku();
                break;
            default:
                break;
        }
    }

    handleSetGridDataParams(): void {
        this.JasaDokterParams = {
            create: () => {
                this.JasaDokterElem = document.createElement('input');
                return this.JasaDokterElem;
            },
            read: () => {
                return this.JasaDokterObj.value;
            },
            destroy: () => {
                this.JasaDokterObj.destroy();
            },
            write: args => {
                this.JasaDokterObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        console.log(this.GridData);

                        let formEle = this.GridData.element.querySelector('form').ej2_instances[0];

                        let nominal_tarif_ele = formEle.getInputElement('nominal_tarif');

                        nominal_tarif_ele.value = this.JasaDokterObj.value + this.JasaSaranaObj.value + this.JasaRumahSakitObj.value + this.JasaBhapObj.value + this.JasaAnastesiObj.value;
                    }.bind(this),

                });
                this.JasaDokterObj.appendTo(this.JasaDokterElem);
            }
        };

        this.JasaSaranaParams = {
            create: () => {
                this.JasaSaranaElem = document.createElement('input');
                return this.JasaSaranaElem;
            },
            read: () => {
                return this.JasaSaranaObj.value;
            },
            destroy: () => {
                this.JasaSaranaObj.destroy();
            },
            write: args => {
                this.JasaSaranaObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridData.element.querySelector('form').ej2_instances[0];

                        let nominal_tarif_ele = formEle.getInputElement('nominal_tarif');

                        nominal_tarif_ele.value = this.JasaDokterObj.value + this.JasaSaranaObj.value + this.JasaRumahSakitObj.value + this.JasaBhapObj.value + this.JasaAnastesiObj.value;
                    }.bind(this),

                });
                this.JasaSaranaObj.appendTo(this.JasaSaranaElem);
            }
        };

        this.JasaRumahSakitParams = {
            create: () => {
                this.JasaRumahSakitElem = document.createElement('input');
                return this.JasaRumahSakitElem;
            },
            read: () => {
                return this.JasaRumahSakitObj.value;
            },
            destroy: () => {
                this.JasaRumahSakitObj.destroy();
            },
            write: args => {
                this.JasaRumahSakitObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridData.element.querySelector('form').ej2_instances[0];

                        let nominal_tarif_ele = formEle.getInputElement('nominal_tarif');

                        nominal_tarif_ele.value = this.JasaDokterObj.value + this.JasaSaranaObj.value + this.JasaRumahSakitObj.value + this.JasaBhapObj.value + this.JasaAnastesiObj.value;
                    }.bind(this),

                });
                this.JasaRumahSakitObj.appendTo(this.JasaRumahSakitElem);
            }
        };

        this.JasaBhapParams = {
            create: () => {
                this.JasaBhapElem = document.createElement('input');
                return this.JasaBhapElem;
            },
            read: () => {
                return this.JasaBhapObj.value;
            },
            destroy: () => {
                this.JasaBhapObj.destroy();
            },
            write: args => {
                this.JasaBhapObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridData.element.querySelector('form').ej2_instances[0];

                        let nominal_tarif_ele = formEle.getInputElement('nominal_tarif');

                        nominal_tarif_ele.value = this.JasaDokterObj.value + this.JasaSaranaObj.value + this.JasaRumahSakitObj.value + this.JasaBhapObj.value + this.JasaAnastesiObj.value;
                    }.bind(this),

                });
                this.JasaBhapObj.appendTo(this.JasaBhapElem);
            }
        };

        this.JasaAnastesiParams = {
            create: () => {
                this.JasaAnastesiElem = document.createElement('input');
                return this.JasaAnastesiElem;
            },
            read: () => {
                return this.JasaAnastesiObj.value;
            },
            destroy: () => {
                this.JasaAnastesiObj.destroy();
            },
            write: args => {
                this.JasaAnastesiObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridData.element.querySelector('form').ej2_instances[0];

                        let nominal_tarif_ele = formEle.getInputElement('nominal_tarif');

                        nominal_tarif_ele.value = this.JasaDokterObj.value + this.JasaSaranaObj.value + this.JasaRumahSakitObj.value + this.JasaBhapObj.value + this.JasaAnastesiObj.value;
                    }.bind(this),

                });
                this.JasaAnastesiObj.appendTo(this.JasaAnastesiElem);
            }
        };
    }

    handleChangeTglBerlakuTarif(args: any): void {
        if (args.value) {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                'Search'
            ];
        }
    }

    handlePencarianTarifBerlaku(KelasPerawatanId: number, KelasPerawatan: string) {
        this.KelasPerawatanIdSelected = KelasPerawatanId;
        this.KelasPerawatanSelected = KelasPerawatan;

        this.onGetAllTarifByKelasPerawatan(KelasPerawatanId);

        setTimeout(() => {
            this.handleClickCloseOffcanvas();

            this.EditedGridData = [];
        }, 100);
    }

    onGetAllTarifByKelasPerawatan(KelasPerawatanId: number): void {
        this.settingTarifBerlakuService.onGetAllByIdKelasPerawatan(KelasPerawatanId)
            .subscribe((result) => {
                if (result) {
                    this.GridDatasource = result.data;
                }
            });
    }

    handleClickOpenOffcanvas(): void {
        (<HTMLElement>document.getElementById('btnOpenFilter')).click();
    }

    handleClickCloseOffcanvas(): void {
        (<HTMLElement>document.getElementById('btnCloseFilter')).click();
    }

    InitalizedGrid(component: MolGridComponent) {
        // this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;

        if (args.data.id_tarif_berlaku) {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Update', tooltipText: 'Update', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
                { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
                'Search'
            ];
        } else {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                'Search'
            ];
        }
    }

    handleActionComplete(args: any): void {
        if (args.requestType == "save") {
            if (args.previousData != args.data) {
                const index = this.EditedGridData.map((e) => { return e.id_setup_tarif }).indexOf(args.data.id_setup_tarif);

                let tgl_berlaku = new Date(this.TglBerlakuDatepicker.value);

                tgl_berlaku = new Date(tgl_berlaku.setDate(tgl_berlaku.getDate() + 1));

                if (index >= 0) {
                    args.data.tgl_berlaku = tgl_berlaku.toISOString();

                    this.EditedGridData[index] = args.data;
                } else {
                    args.data.tgl_berlaku = tgl_berlaku.toISOString();

                    this.EditedGridData.push(args.data);
                }
            }
        }
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.hanldeOpenModalLookupTarif();
                break;
            case 'edit':
                this.handleEditSettingTarifPerBaris(this.SelectedData);
                break;
            case 'delete':
                this.handleEditStatusSettingTarif(this.SelectedData);
                break;
            default:
                break;
        }
    }

    // *** Start Section Of Filter Lookup =================
    hanldeOpenModalLookupTarif(): void {
        this.GridLookupTarifDatasource = [];

        this.modalRef = this.bsModalService.show(
            this.modalAddLookupTarif,
            Object.assign({}, { class: 'modal-xl' })
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
                    }
                ],
                "id_kelas": this.KelasPerawatanIdSelected ? this.KelasPerawatanIdSelected : 0
            };
        } else {
            parameter = {
                "filters": [
                    {
                        "columnName": this.SelectedFilterLookupTarif,
                        "filter": "like",
                        "searchText": searchValueId,
                        "searchText2": ""
                    }
                ],
                "id_kelas": this.KelasPerawatanIdSelected ? this.KelasPerawatanIdSelected : 0
            };
        }

        this.setupTarifService.onGetAllNotInTarifBerlakuByKelas(parameter)
            .subscribe((result) => {
                if (result) {
                    this.GridLookupTarifDatasource = result.data;

                    this.GridLookupTarif.Grid.refresh();
                }
            });
    }

    InitalizedGridLookupTarif(component: MolGridComponent): void {
        this.GridLookupTarif = component;
    }

    handleSelectedRowLookupTarif(args: RowSelectEventArgs): void {
        console.log(this.GridLookupTarif.Grid.getSelectedRecords());
    }

    handleActionCompleteLookupTarif(args: any): void {
        // console.log(args);
    }

    handleSubmitLookupTarif(): void {
        const SelectedRow = this.GridLookupTarif.Grid.getSelectedRecords();

        SelectedRow.forEach((item: any) => {
            item['id_kelas'] = this.KelasPerawatanIdSelected;
            item['tgl_berlaku'] = this.TglBerlakuDatepicker.value;
            item['tgl_berakhir'] = null;
            item['doct_fee'] = 0;
            item['medical_fee'] = 0;
            item['hos_fee'] = 0;
            item['com_fee'] = 0;
            item['add_fee'] = 0;
            item['anas_fee'] = 0;
            item['support_fee'] = 0;
            item['nominal_tarif'] = 0;
        });

        this.GridDatasource.push(...SelectedRow);

        this.EditedGridData.push(...SelectedRow);

        this.GridData.refresh();

        this.handleCloseModalLookupTarif();
    }

    handleCloseModalLookupTarif(): void {
        this.modalRef.hide();

        this.TglBerlakuDatepicker.setDisabledState(true);

        this.TglBerlakuDatepickerDisabled = true;
    }
    // *** End Section Of Filter Lookup =================

    handleEditSettingTarifPerBaris(SettingTarif: any): void {
        this.settingTarifBerlakuService.onPutEdit(SettingTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Setting Tarif ${SettingTarif.kode_setup_tarif} Berhasil Diupdate`)
                        .then(() => {
                            this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);
                        })
                }
            })
    }

    handleEditStatusSettingTarif(SettingTarif: any): void {
        this.settingTarifBerlakuService.onPutStatusActiveEdit(SettingTarif.id_tarif_berlaku, !SettingTarif.is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `Tarif ${SettingTarif.kode_setup_tarif} Berhasil Dihapus`)
                        .then(() => {
                            this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);
                        })
                }
            })
    }

    handleSubmitSettingTarifBerlaku(): void {
        this.settingTarifBerlakuService.onPostSaveListOfObject(this.EditedGridData)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `${this.EditedGridData.length} Setting Tarif Berhasil Disimpan`)
                        .then(() => {
                            this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);

                            this.EditedGridData = [];

                            this.TglBerlakuDatepickerDisabled = false;

                            this.TglBerlakuDatepicker.setDisabledState(false);
                        })
                }
            });
    }

    handleClearSettingTarifBerlaku(): void {
        this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);

        this.EditedGridData = [];

        this.TglBerlakuDatepicker.setDisabledState(false);

        this.TglBerlakuDatepickerDisabled = false;
    }

    handleOpenOffcanvasTarifKeseluruhan(State: string): void {
        this.FormKenaikanPersentaseTarifState = State;

        this.onResetFormKenaikanPersentaseTarif();
    }

    handleSubmitUpdateKenaikanTarifKeseluruhan(FormKenaikanPersentaseTarif: any): void {
        delete FormKenaikanPersentaseTarif.tgl_berlaku;

        FormKenaikanPersentaseTarif.id_kelas = this.KelasPerawatanIdSelected;

        FormKenaikanPersentaseTarif.is_plus_for_jumlah = FormKenaikanPersentaseTarif.is_plus_for_jumlah == null ? false : FormKenaikanPersentaseTarif.is_plus_for_jumlah;

        this.settingTarifBerlakuService.onPutKeseluruhanTarif(FormKenaikanPersentaseTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Update Keseluruhan Tarif Kelas ' + this.KelasPerawatanSelected + ' Berhasil')
                        .then(() => {
                            this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);

                            this.onResetFormKenaikanPersentaseTarif();

                            (<HTMLElement>document.getElementById('btnCloseOffcanvasTarif')).click();
                        })
                }
            })
    }

    handleSubmitInsertKenaikanTarifKeseluruhan(FormKenaikanPersentaseTarif: any): void {
        FormKenaikanPersentaseTarif.id_kelas = this.KelasPerawatanIdSelected;

        let tgl_berlaku = new Date(FormKenaikanPersentaseTarif.tgl_berlaku);

        tgl_berlaku = new Date(tgl_berlaku.setDate(tgl_berlaku.getDate() + 1));

        FormKenaikanPersentaseTarif.tgl_berlaku = tgl_berlaku.toISOString();

        FormKenaikanPersentaseTarif.is_plus_for_jumlah = FormKenaikanPersentaseTarif.is_plus_for_jumlah == null ? false : FormKenaikanPersentaseTarif.is_plus_for_jumlah;

        this.settingTarifBerlakuService.onPostSaveKeseluruhanTarif(FormKenaikanPersentaseTarif)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Simpan Keseluruhan Tarif Kelas ' + this.KelasPerawatanSelected + ' Berhasil')
                        .then(() => {
                            this.onGetAllTarifByKelasPerawatan(this.KelasPerawatanIdSelected);

                            this.onResetFormKenaikanPersentaseTarif();

                            (<HTMLElement>document.getElementById('btnCloseOffcanvasTarif')).click();
                        })
                }
            })
    }

    onResetFormKenaikanPersentaseTarif(): void {
        this.FormKenaikanPersentaseTarif.reset();

        this.tgl_berlaku.setValue(null);
        this.is_up_for_percent.setValue(false);
        this.perubahan_tarif_dalam_percent.setValue(0);
        this.is_plus_for_jumlah.setValue(false);
        this.sejumlah.setValue(0);

        setTimeout(() => {
            this.JenisUbahTarif.value = null;
            this.JenisUbahNominal.value = null;
        }, 200);
    }

    get id_kelas(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('id_kelas') }
    get tgl_berlaku(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('tgl_berlaku') }
    get is_up_for_percent(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('is_up_for_percent') }
    get perubahan_tarif_dalam_percent(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('perubahan_tarif_dalam_percent') }
    get is_plus_for_jumlah(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('is_plus_for_jumlah') }
    get sejumlah(): AbstractControl { return this.FormKenaikanPersentaseTarif.get('sejumlah') }
}
