import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox, NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { EditSettingsModel, IEditCell, SelectionSettingsModel } from '@syncfusion/ej2-grids';
import { BehaviorSubject } from 'rxjs';
import { KelasPerawatanModel } from 'src/app/modules/Billing/models/setup-data/setup-kelas-perawatan.model';
import { AkomodasiDetailModel, GetDataAkomodasiPasienModel, IAkomodasiBillingModel, IInformasiPasienModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import { SetupKelasPerawatanService } from 'src/app/modules/Billing/services/setup-data/setup-kelas-perawatan/setup-kelas-perawatan.service';
import { TransBillingRawatInapService } from 'src/app/modules/Billing/services/trans-billing-rawat-inap/trans-billing-rawat-inap.service';
import { IBedModel } from 'src/app/modules/PIS/models/IRNA/setup-bed.model';
import { IKamarModel } from 'src/app/modules/PIS/models/IRNA/setup-kamar.model';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as API_BILLING from '../../../../../../api/BILLING';
import * as API_PIS from '../../../../../../api/PIS';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-akomodasi-rawat-inap',
    templateUrl: './akomodasi-rawat-inap.component.html',
    styleUrls: ['./akomodasi-rawat-inap.component.css']
})
export class AkomodasiRawatInapComponent implements OnInit {

    @Input('InformasiPasien') InformasiPasien: IInformasiPasienModel;

    @Input('InformasiAkomodasi') InformasiAkomodasi: GetDataAkomodasiPasienModel;

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    Config = Config;

    API_BILLING_SETUP_DATA = API_BILLING.API_BILLING.SETUP_DATA;

    API_BILLING_SETTING_TARIF = API_BILLING.API_BILLING.SETTING_HARGA_TARIF;

    API_PIS = API_PIS.API_PIS;

    // ** List Akomodasi Datasource
    ListAkomodasiDatasource: IAkomodasiBillingModel[];

    // ** List Akomodasi Detail Datasource
    FormAddDetailAkomodasi: FormGroup;

    @ViewChild('DatepickerTanggal') DatepickerTanggal: DatePickerComponent;

    @ViewChild('NumericTextboxQty') NumericTextboxQty: NumericTextBoxComponent;

    @ViewChild('LookupPoli') LookupPoli: OrgInputLookUpKodeComponent;
    UrlLookupPoli: string;

    @ViewChild('LookupRoom') LookupRoom: OrgInputLookUpKodeComponent;
    UrlLookupRoom = this.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_ROOM_BY_DYNAMIC_FILTER;
    LookupRoomStaticFilter: any[];

    @ViewChild('LookupBed') LookupBed: OrgInputLookUpKodeComponent;
    UrlLookupBed = this.API_PIS.IRNA.IRNA.SETUP_BED_IRNA.GET_ALL_BED_ROOM_BY_DYNAMIC_FILTER;
    LookupBedStaticFilter: any[];

    @ViewChild('DropdownKelas') DropdownKelas: DropDownListComponent;
    DropdownKelasDatasource: KelasPerawatanModel[];
    DropdownKelasField: object = { text: 'nama_kelas', value: 'id_kelas' };

    @ViewChild('LookupTarif') LookupTarif: OrgInputLookUpKodeComponent;
    UrlLookupTarif: string;

    private GridAddDetailAkomodasi: MolGridComponent = null;
    GridAddDetailAkomodasiDatasource: any[] = [];
    GridAddDetailAkomodasiToolbar: any[];
    GridAddDetailAkomodasiEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridAddDetailAkomodasiSelectedIndex: number;

    @ViewChild('GridDetailAkomodasi') GridDetailAkomodasi: GridComponent;
    @Input('ListAkomodasiDetailDatasource') ListAkomodasiDetailDatasource: AkomodasiDetailModel[];
    GridDetailAkomodasiToolbar: any[];
    GridDetailAkomodasiEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDetailAkomodasiSelectedData: any;
    GridDetailAkomodasiSelectionSettings: SelectionSettingsModel = { type: 'Single' };

    AsuransiDetailAkomodasiParams: IEditCell;
    AsuransiDetailAkomodasiElem: HTMLElement;
    AsuransiDetailAkomodasiObj: NumericTextBox;

    SubsidiDetailAkomodasiParams: IEditCell;
    SubsidiDetailAkomodasiElem: HTMLElement;
    SubsidiDetailAkomodasiObj: NumericTextBox;

    IurBiayaDetailAkomodasiParams: IEditCell;
    IurBiayaDetailAkomodasiElem: HTMLElement;
    IurBiayaDetailAkomodasiObj: NumericTextBox;

    TotalAmountDetailAkomodasi = new BehaviorSubject(0);

    AkomodasiRawatInapEditedData: AkomodasiDetailModel[] = [];

    @Output('onSendCloseModalAkomodasi') onSendCloseModalAkomodasi = new EventEmitter<string>();

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupKelasPerawatanService: SetupKelasPerawatanService,
        private transBillingRawatInapService: TransBillingRawatInapService,
    ) { }

    ngOnInit(): void {
        this.FormAddDetailAkomodasi = this.formBuilder.group({
            tanggal: ['', [Validators.required]],
            qty: ['', [Validators.required]],
            id_poli: [0, [Validators.required]],
            nama_poli: ["", [Validators.required]],
            id_setup_room: [0, [Validators.required]],
            room_no: ["", [Validators.required]],
            id_setup_bed_room: [0, [Validators.required]],
            bed_no: ["", [Validators.required]],
            id_kelas: [0, [Validators.required]],
            kelas_rawat: ['', [Validators.required]],
        });

        this.UrlLookupPoli = this.API_BILLING_SETUP_DATA.SETUP_POLI.GET_ALL_POLI_FOR_LOOKUP_RAWAT_INAP;

        this.GridAddDetailAkomodasiToolbar = [
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.onGetAllKelasPelayanan();

        this.GridDetailAkomodasiToolbar = [
            { text: 'Extract Data', tooltipText: 'Extract Data', prefixIcon: 'fas fa-cog fa-sm', id: 'extract_data' },
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.handleSetGridDetailAkomodasiParams();
    }

    handleOpenAkomodasiRawatInap(): void {
        const btnModalAkomodasiRawatInap = document.getElementById('btnModalAkomodasiRawatInap') as HTMLElement;
        btnModalAkomodasiRawatInap.click();

        setTimeout(() => {
            this.onSetListDatasource(this.InformasiAkomodasi);
        }, 250);
    }

    onSetListDatasource(InformasiAkomodasi: GetDataAkomodasiPasienModel): void {
        this.ListAkomodasiDatasource = [];
        this.ListAkomodasiDatasource = InformasiAkomodasi.akomodasi;

        this.ListAkomodasiDetailDatasource = [];
        this.ListAkomodasiDetailDatasource = InformasiAkomodasi.akomodasi_detail.detail;
    }

    handleSelectedTabId(TabId: any): void {

    }

    // ** Start of Grid Detail Akomodasi Section =====
    handleToolbarClickDetailAkomodasi(args: any): void {
        let id = args.item.id;

        switch (id) {
            case "extract_data":
                this.onExtractDataDetailAkomodasi(this.InformasiPasien.id_register);
                break;
            case "add":
                this.handleOpenAddDetailAkomodasi();
                break;
            case "delete":
                this.onDeleteDetailAkomodasi();
                break;
            default:
                break;
        }
    }

    onExtractDataDetailAkomodasi(RegisterId: number): void {
        this.transBillingRawatInapService.onEkstrakBed(RegisterId)
            .subscribe((result) => {
                if (result.responseResult) {
                    this.onRenewInformasiAkomodasiAfterEkstrak();
                }
            });
    }

    onRenewInformasiAkomodasiAfterEkstrak(): void {
        this.transBillingRawatInapService.onGetAll(this.InformasiPasien.no_register)
            .subscribe((result) => {
                let informasi_akomodasi = {
                    akomodasi: result.data.akomodasi,
                    akomodasi_detail: result.data.akomodasi_detail
                };

                this.InformasiAkomodasi = informasi_akomodasi;

                this.ListAkomodasiDetailDatasource = [];
                this.ListAkomodasiDetailDatasource = this.InformasiAkomodasi.akomodasi_detail.detail;

                this.GridDetailAkomodasi.refresh();
            });
    }

    onDeleteDetailAkomodasi(): void {
        let grid_selected_records = this.GridDetailAkomodasi.getSelectedRecords();

        let selected_akomodasi_ekstrak = [];

        grid_selected_records.forEach((item) => {
            selected_akomodasi_ekstrak.push(item['id_transaksi_akomodasi_ekstrak']);
        });

        this.transBillingRawatInapService.onDeleteAkomodasiManual(selected_akomodasi_ekstrak)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Detail Akomodasi Berhasil Dihapus')
                        .then(() => {
                            this.handleCloseAkomodasiRawatInap(true);

                            this.onRenewInformasiAkomodasiAfterEkstrak();
                        });
                }
            });
    }

    handleSelectedRowDetailAkomodasi(args: any): void {
        // console.log(args);
    }

    handleRecordDoubleClickDetailAkomodasi(args: any): void {
        let asuransi_column_index = this.GridDetailAkomodasi.columns.map((item) => { return item.field }).indexOf('comp_fee');

        let subsidi_column_index = this.GridDetailAkomodasi.columns.map((item) => { return item.field }).indexOf('subsidi');

        let iur_biaya_column_index = this.GridDetailAkomodasi.columns.map((item) => { return item.field }).indexOf('iur_biaya');

        let clicked_column = args.column.field;

        // ** Cek apabila yg di double click field = comp_fee
        if (clicked_column === "comp_fee") {
            this.GridDetailAkomodasi.columns[asuransi_column_index]['allowEditing'] = true;
            this.GridDetailAkomodasi.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiDetailAkomodasiObj.enabled = true;
                this.SubsidiDetailAkomodasiObj.enabled = false;
                this.IurBiayaDetailAkomodasiObj.enabled = false;
            }, 250);
        };

        // ** Cek apabila yg di double click field = subsidi
        if (clicked_column === "subsidi") {
            this.GridDetailAkomodasi.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[subsidi_column_index]['allowEditing'] = true;
            this.GridDetailAkomodasi.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiDetailAkomodasiObj.enabled = false;
                this.SubsidiDetailAkomodasiObj.enabled = true;
                this.IurBiayaDetailAkomodasiObj.enabled = false;
            }, 250);
        };

        // ** Cek apabila yg di double click field = iur_biaya
        if (clicked_column === "iur_biaya") {
            this.GridDetailAkomodasi.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[iur_biaya_column_index]['allowEditing'] = true;

            setTimeout(() => {
                this.AsuransiDetailAkomodasiObj.enabled = false;
                this.SubsidiDetailAkomodasiObj.enabled = false;
                this.IurBiayaDetailAkomodasiObj.enabled = true;
            }, 250);
        };

        // ** Cek apabila yg di double click field != comp_fee, subsidi dan iur_biaya
        if (clicked_column !== "comp_fee" && clicked_column !== "subsidi" && clicked_column !== "iur_biaya") {
            this.GridDetailAkomodasi.columns[asuransi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[subsidi_column_index]['allowEditing'] = false;
            this.GridDetailAkomodasi.columns[iur_biaya_column_index]['allowEditing'] = false;

            setTimeout(() => {
                this.AsuransiDetailAkomodasiObj.enabled = false;
                this.AsuransiDetailAkomodasiObj.enabled = false;
                this.AsuransiDetailAkomodasiObj.enabled = false;
            }, 100);
        }
    }

    handleQueryCellInfo(args: any): void {
        if (args.column.field === "comp_fee" || args.column.field === "subsidi" || args.column.field === "iur_biaya") {
            args.cell.classList.add("e-pink-editable-background");
        }
    }

    handleSetGridDetailAkomodasiParams(): void {
        this.AsuransiDetailAkomodasiParams = {
            create: () => {
                this.AsuransiDetailAkomodasiElem = document.createElement('input');
                return this.AsuransiDetailAkomodasiElem;
            },
            read: () => {
                return this.AsuransiDetailAkomodasiObj.value;
            },
            destroy: () => {
                this.AsuransiDetailAkomodasiObj.destroy();
            },
            write: args => {
                this.AsuransiDetailAkomodasiObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    format: 'N2',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDetailAkomodasi.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        this.SubsidiDetailAkomodasiObj.value = total_amount_ele.value - this.AsuransiDetailAkomodasiObj.value;

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridDetailAkomodasi(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this)
                });
                this.AsuransiDetailAkomodasiObj.appendTo(this.AsuransiDetailAkomodasiElem);
            }
        };

        this.SubsidiDetailAkomodasiParams = {
            create: () => {
                this.SubsidiDetailAkomodasiElem = document.createElement('input');
                return this.SubsidiDetailAkomodasiElem;
            },
            read: () => {
                return this.SubsidiDetailAkomodasiObj.value;
            },
            destroy: () => {
                this.SubsidiDetailAkomodasiObj.destroy();
            },
            write: args => {
                this.SubsidiDetailAkomodasiObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDetailAkomodasi.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.onCountTotalTagihanPerBarisGridDetailAkomodasi(total_amount_ele.value, tagihan_ele.value);
                    }.bind(this),

                });
                this.SubsidiDetailAkomodasiObj.appendTo(this.SubsidiDetailAkomodasiElem);
            }
        };

        this.IurBiayaDetailAkomodasiParams = {
            create: () => {
                this.IurBiayaDetailAkomodasiElem = document.createElement('input');
                return this.IurBiayaDetailAkomodasiElem;
            },
            read: () => {
                return this.IurBiayaDetailAkomodasiObj.value;
            },
            destroy: () => {
                this.IurBiayaDetailAkomodasiObj.destroy();
            },
            write: args => {
                this.IurBiayaDetailAkomodasiObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    min: 0,
                    value: args.rowData[args.column.field],
                    format: 'N2',
                    change: function (args: any) {
                        let formEle = this.GridDetailAkomodasi.element.querySelector('form').ej2_instances[0];

                        let total_amount_ele = formEle.getInputElement('total_amount');

                        let tagihan_ele = formEle.getInputElement('tagihan');

                        tagihan_ele.value = this.IurBiayaDetailAkomodasiObj.value;

                        this.SubsidiDetailAkomodasiObj.value = total_amount_ele.value - tagihan_ele.value - this.AsuransiDetailAkomodasiObj.value;
                    }.bind(this),

                });
                this.IurBiayaDetailAkomodasiObj.appendTo(this.IurBiayaDetailAkomodasiElem);
            }
        };
    }

    handleActionCompletedDetailAkomodasi(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onEditedGridDetailAkomodasi(args.data);
            }
        };
    }

    onCountTotalTagihanPerBarisGridDetailAkomodasi(total_amount: any, tagihan: any): void {
        let total_asuransi_plus_subsidi = this.AsuransiDetailAkomodasiObj.value + this.SubsidiDetailAkomodasiObj.value;

        if (total_asuransi_plus_subsidi > total_amount) {
            this.utilityService.onShowingCustomAlert('warning', 'Oops', 'Ass/Ttg P + Subsidi Tidak Boleh > Jml Tarif');
        } else {
            tagihan = total_amount - total_asuransi_plus_subsidi;

            if (this.IurBiayaDetailAkomodasiObj.value > 0) {
                this.IurBiayaDetailAkomodasiObj.value = tagihan;
            }
        };

        return tagihan;
    }

    onEditedGridDetailAkomodasi(data: AkomodasiDetailModel): void {
        if (this.AkomodasiRawatInapEditedData.length > 0) {
            let current_data_index = 0;

            current_data_index = this.AkomodasiRawatInapEditedData.map((item) => { return item.id_transaksi_akomodasi_ekstrak }).indexOf(data.id_transaksi_akomodasi_ekstrak);

            if (current_data_index > -1) {
                this.AkomodasiRawatInapEditedData.splice(current_data_index, 1);
                this.AkomodasiRawatInapEditedData.push(data);
            } else {
                this.AkomodasiRawatInapEditedData.push(data);
            };

            this.transBillingRawatInapService.DetailAkomodasiBillingEdited.next(this.AkomodasiRawatInapEditedData);
        };

        if (this.AkomodasiRawatInapEditedData.length < 1) {
            this.AkomodasiRawatInapEditedData.push(data);
            this.transBillingRawatInapService.DetailAkomodasiBillingEdited.next(this.AkomodasiRawatInapEditedData);
        };
    }
    // ** End of Grid Detail Akomodasi Section =====

    onGetAllKelasPelayanan(): void {
        this.setupKelasPerawatanService.onGetAll()
            .subscribe((result) => {
                this.DropdownKelasDatasource = result.data;
            });
    }

    handleGetTogglingModalDetailAkomodasi(Toggle: boolean): void {
        if (Toggle) {
            this.handleOpenAddDetailAkomodasi();
        }
    }

    handleCloseAkomodasiRawatInap(need_hit: boolean): void {
        if (need_hit) {
            const btnCloseAkomodasiRawatInap = document.getElementById('btnCloseAkomodasiRawatInap') as HTMLElement;
            btnCloseAkomodasiRawatInap.click();
        } else {
            setTimeout(() => {
                this.onSendCloseModalAkomodasi.emit('DetailAkomodasiBillingEdited');
            }, 250);
        }
    }

    // ** MODAL ADD DETAIL AKOMODASI
    handleOpenAddDetailAkomodasi(): void {
        this.handleCloseAkomodasiRawatInap(true);

        setTimeout(() => {
            const btnModalAddDetailAkomodasi = document.getElementById('btnModalAddDetailAkomodasi') as HTMLElement;
            btnModalAddDetailAkomodasi.click();
        }, 500);
    }

    handleSelectedPoli(args: any): void {
        this.id_poli.setValue(args.id_poli);
        this.nama_poli.setValue(args.nama_poli);
        this.UrlLookupTarif = this.API_BILLING_SETTING_TARIF.SETTING_TARIF_BERLAKU.GET_ALL_TARIF_BERLAKU_FOR_TRANS_IRNA;
        this.LookupRoomStaticFilter = [
            {
                "columnName": "p.nama_poli",
                "filter": "like",
                "searchText": args.nama_poli,
                "searchText2": ""
            }
        ];
    }

    handleSelectedRoom(args: IKamarModel): void {
        this.id_setup_room.setValue(args.id_setup_room);
        this.room_no.setValue(args.room_no);
        this.LookupBedStaticFilter = [
            {
                "columnName": "sr.room_no",
                "filter": "like",
                "searchText": args.room_no,
                "searchText2": ""
            }
        ];
    }

    handleSelectedBed(args: IBedModel): void {
        this.id_setup_bed_room.setValue(args.id_setup_bed_room);
        this.bed_no.setValue(args.bed_no);
    }

    handleChangeDropdownKelas(args: any): void {
        this.kelas_rawat.setValue(args.itemData.nama_kelas);
    }

    handleAddDataDetailAkomodasi(FormAddDetailAkomodasi: any): void {
        FormAddDetailAkomodasi.tanggal = this.utilityService.onFormatDate(FormAddDetailAkomodasi.tanggal);

        this.GridAddDetailAkomodasiDatasource.push(FormAddDetailAkomodasi);

        this.GridAddDetailAkomodasi.Grid.refresh();

        this.onResetFormAddDetailAkomodasi();
    }

    onResetFormAddDetailAkomodasi(): void {
        this.FormAddDetailAkomodasi.reset();

        this.tanggal.setValue('');
        this.qty.setValue(0);
        this.id_poli.setValue(0);
        this.nama_poli.setValue('');
        this.id_setup_room.setValue(0);
        this.room_no.setValue('');
        this.id_setup_bed_room.setValue('');
        this.bed_no.setValue(0);
        this.id_kelas.setValue(0);
        this.kelas_rawat.setValue('');

        this.DatepickerTanggal.value = null;

        this.NumericTextboxQty.value = 0;

        this.LookupPoli.resetValue();

        this.LookupRoom.resetValue();

        this.LookupBed.resetValue();

        this.DropdownKelas.value = null;
    }

    InitalizedGrid(component: MolGridComponent): void {
        this.GridAddDetailAkomodasi = component;
    }

    handleSelectedRow(args: any): void {
        this.GridAddDetailAkomodasiSelectedIndex = args.rowIndex;
    }

    handleToolbarClick(args: any): void {
        const id = args.item.id;

        if (id === 'delete') {
            this.GridAddDetailAkomodasiDatasource.splice(this.GridAddDetailAkomodasiSelectedIndex, 1);

            this.GridAddDetailAkomodasi.Grid.refresh();
        }
    }

    handleSubmitAddDetailAkomodasi(data: any): void {
        let parameter = {
            id_register: this.InformasiPasien.id_register,
            item_akomodasi: data
        };

        this.transBillingRawatInapService.onSaveAddAkomodasiManual(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Detail Akomodasi Berhasil Disimpan')
                        .then(() => {
                            let btnCloseAddDetailAkomodasi = document.getElementById('btnCloseAddDetailAkomodasi') as HTMLElement;
                            btnCloseAddDetailAkomodasi.click();

                            this.handleCloseAddDetailAkomodasi();

                            this.onRenewInformasiAkomodasiAfterEkstrak();
                        });
                }
            });
    }

    handleCloseAddDetailAkomodasi(): void {
        this.GridAddDetailAkomodasiDatasource = [];

        this.onResetFormAddDetailAkomodasi();

        setTimeout(() => {
            this.handleOpenAkomodasiRawatInap();
        }, 500);
    }

    get tanggal(): AbstractControl { return this.FormAddDetailAkomodasi.get('tanggal'); }
    get qty(): AbstractControl { return this.FormAddDetailAkomodasi.get('qty'); }
    get id_poli(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_poli'); }
    get nama_poli(): AbstractControl { return this.FormAddDetailAkomodasi.get('nama_poli'); }
    get id_setup_room(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_setup_room'); }
    get room_no(): AbstractControl { return this.FormAddDetailAkomodasi.get('room_no'); }
    get id_setup_bed_room(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_setup_bed_room'); }
    get bed_no(): AbstractControl { return this.FormAddDetailAkomodasi.get('bed_no'); }
    get id_kelas(): AbstractControl { return this.FormAddDetailAkomodasi.get('id_kelas'); }
    get kelas_rawat(): AbstractControl { return this.FormAddDetailAkomodasi.get('kelas_rawat'); }
}
