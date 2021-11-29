import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';
import { PostingBillingService } from '../../services/posting-billing/posting-billing.service';

@Component({
    selector: 'app-posting-billing',
    templateUrl: './posting-billing.component.html',
    styleUrls: ['./posting-billing.component.css']
})
export class PostingBillingComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    // ** Isi dengan IRDA / IRNA
    BillingState: string;

    FormPostingBilling: FormGroup;

    @ViewChild('DatepickerFilterTanggal') DatepickerFilterTanggal: DatePickerComponent;

    @ViewChild('DropdownTipePasien') DropdownTipePasien: DropDownListComponent;
    DropdownTipePasienDatasource: any[];
    DropdownTipePasienFields: any;

    @ViewChild('DropdownDebitur') DropdownDebitur: DropDownListComponent;
    DropdownDebiturDatasource: any[];
    DropdownDebiturFields: any;

    @ViewChild('GridData') GridData: GridComponent;
    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDataToolbar: any[];

    FormPembatalan: FormGroup;

    FormPembatalanPostingInfo: any[];

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupDebiturService: SetupDebiturService,
        public postingBillingService: PostingBillingService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Posting', Icons1: 'fa-check fa-sm', Captions: 'Posting' },
            { Id: 'Batal_Posting', Icons1: 'fa-ban fa-sm', Captions: 'Batal Posting' },
        ];

        this.onSetFormPostingBilling();

        this.DropdownTipePasienDatasource = [
            { text: 'IRNA', value: 'I' },
            { text: 'IRDA', value: 'D' },
        ];

        this.DropdownTipePasienFields = { text: 'text', value: 'value' };

        this.onGetAllDebitur();

        this.DropdownDebiturFields = { text: 'nama_debitur', value: 'id_debitur' };

        this.postingBillingService.onGetAllDataForPostingBilling([], "D");

        this.FormPembatalan = this.formBuilder.group({
            reason_canceled: ["", []],
        });
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Posting':
                this.BillingState === 'IRDA' ? this.handleSavePostingBillingIRDA() : this.handleSavePostingBillingIRNA();
                break;
            case 'Batal_Posting':
                this.handleOpenPembatalan();
                break;
            default:
                break;
        };
    }

    onSetFormPostingBilling(): void {
        this.FormPostingBilling = this.formBuilder.group({
            tanggal: ['', []],
            tipe_pasien: ['', []],
            id_debitur: [0, []],
            debitur: ['', []],
            tgl_jatuh_tempo: ['', []]
        });
    }

    onGetAllDebitur(): void {
        this.setupDebiturService.onGetAll()
            .subscribe((result) => {
                this.DropdownDebiturDatasource = result.data;
            });
    }

    handleChangeTipePasien(args: any): void {
        let itemData = args.itemData;

        this.BillingState = itemData.text;
    }

    handlePencarianDataPostingBilling(FormPostingBilling: any): void {
        let parameter: PostRequestByDynamicFiterModel[] = [];

        if (FormPostingBilling.tanggal) {
            parameter.push({
                columnName: 'tp.time_pulang::date',
                filter: 'between',
                searchText: this.utilityService.onFormatDate(FormPostingBilling.tanggal[0]),
                searchText2: this.utilityService.onFormatDate(FormPostingBilling.tanggal[1])
            });
        };

        if (FormPostingBilling.id_debitur) {
            parameter.push({
                columnName: 'tp.id_debitur',
                filter: 'equal',
                searchText: FormPostingBilling.id_debitur.toString(),
                searchText2: ""
            });
        };

        this.postingBillingService.onGetAllDataForPostingBilling(parameter, FormPostingBilling.tipe_pasien);
    }

    handleSelectedRow(args: any): void {
        // let selected_data = this.GridData.getSelectedRecords();

        // console.log(selected_data);
    }

    handleRowDataBound(args: any): void {
        let status = args.data.status;

        if (status == "POSTED") {
            args.row.classList.add('e-canceled-background');
        }
    }

    // ** IRDA
    handleSavePostingBillingIRDA(): void {
        let selected_data = [];

        this.GridData.getSelectedRecords().forEach((item) => {
            selected_data.push({
                id_register: item['id_register'],
                id_debitur: item['id_debitur'],
            })
        });

        let parameter = {
            'items': selected_data,
            'tgl_jatuh_tempo': this.utilityService.onFormatDate(this.tgl_jatuh_tempo.value)
        };

        this.postingBillingService.onSavePostingBillingIRDA(parameter)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', `${selected_data.length} Data Berhasil Diposting`)
                        .then(() => {
                            this.postingBillingService.onGetAllDataForPostingBilling([], this.tipe_pasien.value);
                            this.GridData.refresh();
                        });
                }
            });

    }

    handleBatalPostingBillingIRDA(): void {
        let selected_data = [];

        this.GridData.getSelectedRecords().forEach((item) => {
            selected_data.push({
                id_register: item['id_register']
            })
        });

        let parameter = {
            'items': selected_data,
            'reason_canceled': this.reason_canceled.value
        };

        Swal.fire({
            title: 'Apakah Anda Yakin?',
            text: "Data Posting Akan Dibatalkan",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Iya, Saya Yakin',
            focusCancel: true,
        }).then((result) => {
            if (result.isConfirmed) {
                this.postingBillingService.onBatalPostingBillingIRDA(parameter)
                    .subscribe((result) => {
                        if (result.responseResult) {
                            this.utilityService.onShowingCustomAlert('success', 'Success', 'Data Posting Berhasil Dibatalkan')
                                .then(() => {
                                    this.handleClosePembatalan();
                                    this.postingBillingService.onGetAllDataForPostingBilling([], this.tipe_pasien.value);
                                    this.GridData.refresh();
                                });
                        }
                    });
            }
        });
    }

    // ** IRNA
    handleSavePostingBillingIRNA(): void {
        let selected_data = [];

        this.GridData.getSelectedRecords().forEach((item) => {
            selected_data.push({
                id_register: item['id_register'],
                id_debitur: item['id_debitur'],
            })
        });

        let parameter = {
            'items': selected_data,
            'tgl_jatuh_tempo': this.utilityService.onFormatDate(this.tgl_jatuh_tempo.value)
        };

        console.log(parameter);
    }

    handleBatalPostingBillingIRNA(): void {

    }

    // ** PEMBATALAN
    handleOpenPembatalan(): void {
        let btnModalPembatalan = document.getElementById('btnModalPembatalan') as HTMLElement;
        btnModalPembatalan.click();
    }

    handleSubmitModalPembatalanPosting(FormPembatalan: any): void {
        switch (this.BillingState) {
            case 'IRDA':
                this.handleBatalPostingBillingIRDA();
                break;
            case 'IRNA':
                this.handleBatalPostingBillingIRNA();
                break;
            default:
                break;
        }
    }

    handleClosePembatalan(): void {
        let btnClosePembatalan = document.getElementById('btnClosePembatalan') as HTMLElement;
        btnClosePembatalan.click();

        this.reason_canceled.setValue("");
    }

    get tanggal(): AbstractControl { return this.FormPostingBilling.get('tanggal'); }
    get tipe_pasien(): AbstractControl { return this.FormPostingBilling.get('tipe_pasien'); }
    get id_debitur(): AbstractControl { return this.FormPostingBilling.get('id_debitur'); }
    get debitur(): AbstractControl { return this.FormPostingBilling.get('debitur'); }
    get tgl_jatuh_tempo(): AbstractControl { return this.FormPostingBilling.get('tgl_jatuh_tempo'); }

    get reason_canceled(): AbstractControl { return this.FormPembatalan.get("reason_canceled"); }
}
