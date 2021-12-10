import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, IEditCell, QueryCellInfoEventArgs, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import { BehaviorSubject } from 'rxjs';
import { AkomodasiDetailModel } from 'src/app/modules/Billing/models/trans-billing/trans-billing.model';
import * as Config from '../json/akomodasi-rawat-inap.config.json';

@Component({
    selector: 'app-list-detail-akomodasi',
    templateUrl: './list-detail-akomodasi.component.html',
    styleUrls: ['./list-detail-akomodasi.component.css']
})
export class ListDetailAkomodasiComponent implements OnInit {

    Config = Config;

    @ViewChild('GridDetailAkomodasi') GridDetailAkomodasi: GridComponent;
    @Input('ListAkomodasiDetailDatasource') GridDetailAkomodasiDatasource: any[];
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

    @Output('onSendTogglingModal') onSendTogglingModal = new EventEmitter<boolean>();

    ngOnInit(): void {
        this.GridDetailAkomodasiToolbar = [
            { text: 'Extract Data', tooltipText: 'Extract Data', prefixIcon: 'fas fa-cog fa-sm', id: 'extract_data' },
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.handleSetGridDataDetailAkomodasiParams();

        console.log(this.GridDetailAkomodasi);
    }

    handleQueryCellInfo(args: QueryCellInfoEventArgs): void {
        if (args.column.field === "comp_fee" || args.column.field === "subsidi" || args.column.field === "iur_biaya") {
            args.cell.classList.add("e-pink-editable-background");
        }
    }

    handleSelectedRow(args: any): void {
        this.GridDetailAkomodasiSelectedData = args.data;
    }

    handleToolbarClick(args: any): void {
        let id = args.item.id;

        switch (id) {
            case "extract_data":
                this.onExtractDataDetailAkomodasi();
                break;
            case "add":
                this.onSendTogglingModal.emit(true);
                break;
            case "delete":
                this.onDeleteDetailAkomodasi();
                break;
            default:
                break;
        }
    }

    onExtractDataDetailAkomodasi(): void {

    }

    onSubmitAddDetailAkomodasi(): void {

    }

    onDeleteDetailAkomodasi(): void {

    }

    handleRecordDoubleClick(args: any): void {
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

    handleSetGridDataDetailAkomodasiParams(): void {
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
                        let formEle = this.GridDataDetailAkomodasi.element.querySelector('form').ej2_instances[0];

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
                        let formEle = this.GridDataDetailAkomodasi.element.querySelector('form').ej2_instances[0];

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
                        let formEle = this.GridDataDetailAkomodasi.element.querySelector('form').ej2_instances[0];

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

    handleActionCompleted(args: any): void {
        let requestType = args.requestType;

        if (requestType == "save") {
            if (args.data !== args.previousData) {
                this.onEditedGridDetailAkomodasi(args.data);
            }
        };
    }

    onEditedGridDetailAkomodasi(data: AkomodasiDetailModel): void {
        console.log(data);
    }
}
