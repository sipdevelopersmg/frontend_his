import { Component, OnInit, ViewChild } from '@angular/core';
import { EditSettingsModel, IEditCell } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-angular-inputs';
import { MM } from 'src/app/api/MM';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import * as LookupGridSupplier from './json/lookupsupplier.json'
import * as GridLookUpItem from './json/lookupitem.json'
import { OrgLookUpChecklistComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-checklist/org-look-up-checklist.component';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-set-harga-order',
  templateUrl: './set-harga-order.component.html',
  styleUrls: ['./set-harga-order.component.css']
})
export class SetHargaOrderComponent implements OnInit {
  urlSupplier = MM.SETUP_DATA.SETUP_SUPPLIER.GET_ALL_BY_PARMS;
  urlItem = MM.SETUP_DATA.SETUP_ITEM.GET_ALL_BY_PARMS;
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


  constructor(
    utilityHelperService:UtilityHelperService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formInput = this.formBuilder.group({
      tanggal_berlaku: [null, [Validators.required]],
      id_supplier: [0, [Validators.required]],
    });
    this.GridDataToolbar = [
      { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
      'Search'
    ];
    this.handleSetGridDataParams()
  }

  heandleSelectedSupplier(args: any): void {
    this.id_supplier.setValue(args.id_supplier);
  }

  handleSelectedRow(args: any): void {
    this.SelectedData = args.data;
  }

  resetSupplier(): void{
    this.LookupKodeSupplier.resetValue();
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

  handleActionComplete(args: any): void {
    if (args.requestType == "save") {
      if (args.previousData != args.data) {
        
      }
    }
  }

  handleSelectedRecordItem(args: any): void {
    console.log(args)
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
                    let formEle = this.GridData.element.querySelector('form').ej2_instances[0];
                    let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');

                    let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj,this.Diskon1Obj)
                    nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1,this.Diskon2Obj)

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
                let formEle = this.GridData.element.querySelector('form').ej2_instances[0];
                let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');

                let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj,this.Diskon1Obj)
                nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1,this.Diskon2Obj)
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
                let formEle = this.GridData.element.querySelector('form').ej2_instances[0];
                let nominal_tarif_ele = formEle.getInputElement('harga_order_netto');

                let diskon1 = this.HargaOrderObj - this.utilityHelperService.diskon(this.HargaOrderObj,this.Diskon1Obj)
                nominal_tarif_ele.value = diskon1 - this.utilityHelperService.diskon(diskon1,this.Diskon2Obj)
              }.bind(this),

          });
          this.Diskon2Obj.appendTo(this.Diskon2Elem);
      }
    };
  }

  get tanggal_berlaku() : AbstractControl { return this.formInput.get('tanggal_berlaku') }
  get id_supplier() : AbstractControl { return this.formInput.get('id_supplier') }


}
