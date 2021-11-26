import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent, EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { SetupDebiturService } from 'src/app/modules/PIS/services/setup-data/setup-debitur/setup-debitur.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';

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

    constructor(
        private formBuilder: FormBuilder,
        private setupDebiturService: SetupDebiturService,
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

        this.GridDatasource = [
            {
                no_register: 'A1',
                nama_pasien: 'TES 1',
                tgl_pulang: new Date(),
                tipe: 'IRDA',
                no_invoice: '',
                debitur: 'TANGGUNGAN PRIBADI',
                total_biaya: 50000,
                charge_amount: 50000,
                restitusi: 0,
                tunai: 50000,
                deposit: 0,
                doc_disc: 0,
                claim_amount: 0,
                subsidi: 0,
                status_billing: 'POSTED',
            },
            {
                no_register: 'A2',
                nama_pasien: 'TES 2',
                tgl_pulang: new Date(),
                tipe: 'IRDA',
                no_invoice: '',
                debitur: 'PT. PERTAMINA',
                total_biaya: 150000,
                charge_amount: 150000,
                restitusi: 0,
                tunai: 0,
                deposit: 0,
                doc_disc: 0,
                claim_amount: 150000,
                subsidi: 0,
                status_billing: 'OPEN',
            },
        ]
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Posting':
                break;
            case 'Batal_Posting':
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
                console.log(result);
            });
    }

    handleSelectedRow(args: any): void {
        let selected_data = this.GridData.getSelectedRecords();

        console.log(selected_data);
    }

    handleRowDataBound(args: any): void {
        let status_billing = args.data.status_billing;

        if (status_billing == "POSTED") {
            args.row.classList.add('e-activecolor-background');
        }
    }

    get tanggal(): AbstractControl { return this.FormPostingBilling.get('tanggal'); }
    get tipe_pasien(): AbstractControl { return this.FormPostingBilling.get('tipe_pasien'); }
    get id_debitur(): AbstractControl { return this.FormPostingBilling.get('id_debitur'); }
    get debitur(): AbstractControl { return this.FormPostingBilling.get('debitur'); }
    get tgl_jatuh_tempo(): AbstractControl { return this.FormPostingBilling.get('tgl_jatuh_tempo'); }
}
