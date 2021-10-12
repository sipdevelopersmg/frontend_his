import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { timeStamp } from 'console';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IBankPaymentModel } from '../../../models/setup-data/setup-bank-payment.model';
import { IPaymentMethodDetailModel, IPaymentMethodModel } from '../../../models/setup-data/setup-payment-method.model';
import { SetupBankPaymentService } from '../../../services/setup-data/setup-bank-payment/setup-bank-payment.service';
import { SetupPaymentMethodService } from '../../../services/setup-data/setup-payment-method/setup-payment-method.service';
import * as Config from './json/setup-payment-method.config.json';

@Component({
    selector: 'app-setup-payment-method',
    templateUrl: './setup-payment-method.component.html',
    styleUrls: ['./setup-payment-method.component.css']
})
export class SetupPaymentMethodComponent implements OnInit {

    GridConfig = Config;

    PaymentMethodDatasource: IPaymentMethodModel[] = [];

    SelectedPaymentMethod: IPaymentMethodModel;

    GridDatasource: any[];
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[] = ["Search"];
    GridDataSelectedRecords: IPaymentMethodDetailModel = {};

    PaymentMethodDetailModalTitle: string = "Add Payment Method";

    FormPaymentMethodDetail: FormGroup;
    FormPaymentMethodDetailState: string = "Insert";

    BankPaymentDatasource: IBankPaymentModel[] = [];
    BankPaymentFields: object = { text: 'nama_bank_payment', value: 'id_bank_payment' };

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupBankPaymentService: SetupBankPaymentService,
        private setupPaymentMethodService: SetupPaymentMethodService,
    ) { }

    ngOnInit(): void {
        this.onGetAllPaymentMethod();

        this.onSetFormPaymentMethodDetail();

        this.onGetAllBankPayment();
    }

    onSetFormPaymentMethodDetail(): void {
        this.FormPaymentMethodDetail = this.formBuilder.group({
            id_payment_method: [0, []],
            id_payment_method_detail: [0, []],
            payment_method_detail: ["", []],
            charge: [0, []],
            id_bank_payment: [0, []],
        })
    }

    onGetAllPaymentMethod(): void {
        this.setupPaymentMethodService.onGetAll()
            .subscribe((result) => {
                this.PaymentMethodDatasource = result.data.filter((item) => { return item.payment_method != "VOUCHER" });
            });
    }

    onGetAllBankPayment(): void {
        this.setupBankPaymentService.onGetAll()
            .subscribe((result) => {
                this.BankPaymentDatasource = result.data;
            })
    }

    onGetAllPaymentMethodDetail(PaymentMethodId: number): void {
        this.setupPaymentMethodService.onGetAllByIdPaymentMethod(PaymentMethodId)
            .subscribe((result) => {
                this.GridDatasource = result.data;
            });
    }

    handleClickListPaymentMethod(item: IPaymentMethodModel): void {
        this.SelectedPaymentMethod = item;

        let charge = this.GridData.Grid.columns.map((item) => { return item.field }).indexOf('charge');
        let nama_bank_payment = this.GridData.Grid.columns.map((item) => { return item.field }).indexOf('nama_bank_payment');

        if (item.payment_method == "CASH") {
            this.GridData.Grid.columns[charge]['visible'] = false;
            this.GridData.Grid.columns[nama_bank_payment]['visible'] = false;
        } else {
            this.GridData.Grid.columns[charge]['visible'] = true;
            this.GridData.Grid.columns[nama_bank_payment]['visible'] = true;
        }

        this.GridData.Grid.refresh();

        this.onGetAllPaymentMethodDetail(item.id_payment_method);

        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.GridDataSelectedRecords = args.data;
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.FormPaymentMethodDetailState = "Insert";
                this.onOpenModalPaymentMethodDetail("Insert");
                break;
            case 'edit':
                this.FormPaymentMethodDetailState = "Edit";
                this.onOpenModalPaymentMethodDetail("Edit");
                this.handleFillFormPaymentMethodDetail(this.GridDataSelectedRecords);
                break;
            case 'detail':
                this.FormPaymentMethodDetailState = "Detail";
                this.onOpenModalPaymentMethodDetail("Detail");
                this.handleFillFormPaymentMethodDetail(this.GridDataSelectedRecords);
                break;
            case 'delete':
                this.handleDeletePaymentMethodDetail(this.GridDataSelectedRecords);
                break;
            default:
                break;
        }
    }

    handleDeletePaymentMethodDetail(Data: IPaymentMethodDetailModel): void {

    }

    onOpenModalPaymentMethodDetail(State: string): void {
        let btnPaymentMethodDetail = document.getElementById('btnPaymentMethodDetail') as HTMLElement;
        btnPaymentMethodDetail.click();

        this.handleResetFormPaymentMethodDetail();

        this.id_payment_method.setValue(this.SelectedPaymentMethod.id_payment_method);

        this.PaymentMethodDetailModalTitle = `${State} Payment Method (${this.SelectedPaymentMethod.payment_method})`
    }

    handleFillFormPaymentMethodDetail(Data: IPaymentMethodDetailModel): void {
        delete Data.kode_bank_payment;
        delete Data.nama_bank_payment;

        this.FormPaymentMethodDetail.setValue(Data);
    }

    handleSubmitFormPaymentMethodDetail(FormPaymentMethodDetail: any): void {
        delete FormPaymentMethodDetail.id_payment_method_detail;

        this.setupPaymentMethodService.onPostSave(FormPaymentMethodDetail)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Detail Payment Method Berhasil Disimpan')
                        .then(() => {
                            this.onGetAllPaymentMethodDetail(FormPaymentMethodDetail.id_payment_method);

                            this.onCloseModalPaymentMethodDetail();
                        })
                }
            })
    }

    handleUpdateFormPaymentMethodDetail(FormPaymentMethodDetail: any): void {
        this.setupPaymentMethodService.onPutEdit(FormPaymentMethodDetail)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Detail Payment Method Berhasil Diupdate')
                        .then(() => {
                            this.onGetAllPaymentMethodDetail(FormPaymentMethodDetail.id_payment_method);

                            this.onCloseModalPaymentMethodDetail();
                        })
                }
            })
    }

    handleResetFormPaymentMethodDetail(): void {
        this.FormPaymentMethodDetail.reset();

        this.id_bank_payment.setValue(0);
        this.id_payment_method_detail.setValue(0);
        this.payment_method_detail.setValue("");
        this.charge.setValue(0);
        this.id_bank_payment.setValue(0);
    }

    onCloseModalPaymentMethodDetail(): void {
        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;
        btnCloseModal.click();
    }

    get id_payment_method(): AbstractControl { return this.FormPaymentMethodDetail.get('id_payment_method'); }
    get id_payment_method_detail(): AbstractControl { return this.FormPaymentMethodDetail.get('id_payment_method_detail'); }
    get payment_method_detail(): AbstractControl { return this.FormPaymentMethodDetail.get('payment_method_detail'); }
    get charge(): AbstractControl { return this.FormPaymentMethodDetail.get('charge'); }
    get id_bank_payment(): AbstractControl { return this.FormPaymentMethodDetail.get('id_bank_payment'); }
}
