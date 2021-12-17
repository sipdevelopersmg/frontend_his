import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, GridComponent, IEditCell } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { MM } from 'src/app/api/MM';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as LookupGridSupplier from './json/lookupsupplier.json'
import * as GridLookUpItem from './json/lookupitem.json'
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SetHargaOrderService } from '../../../services/pemasukan/set-harga-order/set-harga-order.service';
import { TrSethargaOrderDetailInsert } from '../../../models/penerimaan/set-harga-order/SethargaOrder';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { Location } from '@angular/common';
@Component({
    selector: 'app-set-harga-order',
    templateUrl: './set-harga-order.component.html',
    styleUrls: ['./set-harga-order.component.css']
})
export class SetHargaOrderComponent implements OnInit {

    urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
    urlItemOri = MM.PENERIMAAN.SETHARGA_ORDER.GET_ITEM_BY_SUPPLIER;
    urlItem: any;

    LookupGridSupplier = LookupGridSupplier;
    GridLookUpItem = GridLookUpItem
    @ViewChild('LookupKodeSupplier') LookupKodeSupplier: OrgInputLookUpKodeComponent;
    GridDatasource: any[];
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];
    SelectedData: any;

    HargaOrderParams: IEditCell;
    HargaOrderElem: HTMLElement;
    HargaOrderObj: NumericTextBox;

    Diskon1Params: IEditCell;
    Diskon1Elem: HTMLElement;
    Diskon1Obj: NumericTextBox;

    Diskon2Params: IEditCell;
    Diskon2Elem: HTMLElement;
    Diskon2Obj: NumericTextBox;

    @ViewChild('LookupChecklist') LookupChecklist: OrgLookUpChecklistComponent;
    formInput: FormGroup;
    @ViewChild('GridDetail') GridDetail: GridComponent;

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Reset', Captions: 'Reset', Icons1: 'fa-redo-alt' },
        { Id: 'Save', Captions: 'Save', Icons1: 'fa-save' },
    ];

    constructor(
        private utilityHelperService: UtilityHelperService,
        private utilityService: UtilityService,
        private formBuilder: FormBuilder,
        public setHargaOrderService: SetHargaOrderService,
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.formInput = this.formBuilder.group({
            tanggal_berlaku: [null, [Validators.required]],
            id_supplier: [0, [Validators.required]],
            nomor_harga_order: ['',],
        });
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            'Search'
        ];
        // this.handleSetGridDataParams()
    }

    heandleSelectedSupplier(args: any): void {
        this.urlItem = this.urlItemOri + '/' + args.id_supplier;
        this.id_supplier.setValue(args.id_supplier);
        this.setHargaOrderService.onGetDetailByParamsSource([], args.id_supplier);
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.LookupChecklist.hanldeOpenModalLookupChecklist();
                break;
            default:
                break;
        }
    }

    handleActionCompleted($event) {
        if ($event.requestType == 'save') {
            console.log($event);
            this.setHargaOrderService.updateFromInline($event.rowIndex, $event.data, $event.rowData)
            this.GridDetail.refresh();
        }
    }

    handleActionBegin($event){
        console.log($event);
        if($event.requestType=="beginEdit"){
            setTimeout(()=>{
                let harga_order = (<HTMLInputElement>document.getElementsByName("harga_order")[0])
                if (harga_order) {
                    harga_order.addEventListener('click', (event) => {
                        harga_order.select();
                    });
                    this.utilityService.setInputNumericElement(harga_order, function (value) {
                        return /^\d*$/.test(value);
                    });
                }
                let disc_prosentase_1 = (<HTMLInputElement>document.getElementsByName("disc_prosentase_1")[0])
                if (disc_prosentase_1) {
                    disc_prosentase_1.addEventListener('click', (event) => {
                        disc_prosentase_1.select();
                    });
                    this.utilityService.setInputNumericElement(disc_prosentase_1, function (value) {
                        return /^\d*$/.test(value);
                    });
                }
                let disc_prosentase_2 = (<HTMLInputElement>document.getElementsByName("disc_prosentase_2")[0])
                if (disc_prosentase_2) {
                    disc_prosentase_2.addEventListener('click', (event) => {
                        disc_prosentase_2.select();
                    });
                    this.utilityService.setInputNumericElement(disc_prosentase_2, function (value) {
                        return /^\d*$/.test(value);
                    });
                }
            },50)
        }
    }

    handleSelectedRecordItem(args): void {
        let detail: TrSethargaOrderDetailInsert[] = [];
        args.forEach(element => {
            detail.push({
                no_urut: 0,
                id_item: element.id_item,
                kode_item: element.nama_item,
                nama_item: element.nama_item,
                satuan: element.kode_satuan,
                harga_order_lama: 0,
                disc_prosentase_1_lama: 0,
                disc_prosentase_2_lama: 0,
                harga_order_netto_lama: 0,
                harga_order: 0,
                disc_prosentase_1: 0,
                disc_prosentase_2: 0,
                harga_order_netto: 0,
            })
        });
        this.setHargaOrderService.addDataDetail(detail);
        this.GridDetail.refresh();
    }

    handleSetGridDataParams(): void {
        this.HargaOrderParams = {
            create: () => {
                this.HargaOrderElem = document.createElement('input');
                return this.HargaOrderElem;
            },
            read: () => {
                return this.HargaOrderObj.value;
            },
            destroy: () => {
                this.HargaOrderObj.destroy();
            },
            write: args => {
                this.HargaOrderObj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDetail.element.querySelector('form').ej2_instances[0];
                        let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');

                        let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj, this.Diskon1Obj)
                        nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1, this.Diskon2Obj)

                    }.bind(this),

                });
                this.HargaOrderObj.appendTo(this.HargaOrderElem);
            }
        };

        this.Diskon1Params = {
            create: () => {
                this.Diskon1Elem = document.createElement('input');
                return this.Diskon1Elem;
            },
            read: () => {
                return this.Diskon1Obj.value;
            },
            destroy: () => {
                this.Diskon1Obj.destroy();
            },
            write: args => {
                this.Diskon1Obj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDetail.element.querySelector('form').ej2_instances[0];
                        let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');
                        let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj, this.Diskon1Obj)
                        nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1, this.Diskon2Obj)
                    }.bind(this),

                });
                this.Diskon1Obj.appendTo(this.Diskon1Elem);
            }
        };

        this.Diskon1Params = {
            create: () => {
                this.Diskon1Elem = document.createElement('input');
                return this.Diskon1Elem;
            },
            read: () => {
                return this.Diskon1Obj.value;
            },
            destroy: () => {
                this.Diskon1Obj.destroy();
            },
            write: args => {
                this.Diskon2Obj = new NumericTextBox({
                    showSpinButton: false,
                    cssClass: 'text-end',
                    value: args.rowData[args.column.field],
                    change: function (args) {
                        let formEle = this.GridDetail.element.querySelector('form').ej2_instances[0];
                        let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');

                        let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj, this.Diskon1Obj)
                        nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1, this.Diskon2Obj)
                    }.bind(this),

                });
                this.Diskon2Obj.appendTo(this.Diskon2Elem);
            }
        };
    }

    onSetDetail(id): void {

    }

    onClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Save':
                this.onSave();
                break;
            case 'Reset':
                this.ResetFrom();
                break;
            default:
                break;
        }
    }

    onSave() {
        if (this.formInput.valid) {
            this.setHargaOrderService.Insert(this.formInput.value)
                .subscribe((result) => {
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            // this.ResetFrom();
                            this.setHargaOrderService.onGetDetailByParamsSource([], this.id_supplier);
                        });
                });
        } else {
            alert('isi semua data');
        }
    }

    ResetFrom() {
        this.formInput.reset();
        this.setHargaOrderService.Reset();
        this.LookupKodeSupplier.resetValue();
    }

    get tanggal_berlaku(): AbstractControl { return this.formInput.get('tanggal_berlaku') }
    get id_supplier(): AbstractControl { return this.formInput.get('id_supplier') }


}
