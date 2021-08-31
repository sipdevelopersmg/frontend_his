import { formatDate } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'mol-offcanvas-filter',
    templateUrl: './mol-offcanvas-filter.component.html',
    styleUrls: ['./mol-offcanvas-filter.component.css']
})
export class MolOffcanvasFilterComponent implements OnInit {

    AdvancedFilterArray: any[] = [];
    AdvancedFilterArrayEmitting: any[] = [];

    FilterState: string = "String";

    /**
     * @FilterColumnDatasource
     * @Keterangan Filter Column Datasource
    */
    @Input('FilterColumnDatasource') FilterColumnDatasource: any[];

    /**
     * @FilterColumnFields
     * @Keterangan Filter Column Fields
    */
    FilterColumnFields: object = { text: 'text', value: 'value' };;

    /**
     * @Column
     * @Keterangan Column Dropdown 
    */
    @ViewChild('Column') Column: DropDownListComponent;

    /**
     * @FilterConditionDatasource
     * @Keterangan Filter Condition Datasource
    */
    FilterConditionDatasource: any[] = [];

    /**
     * @FilterConditionFields
     * @Keterangan Filter Condition Fields
    */
    FilterConditionFields: object = { text: 'text', value: 'value' };

    /**
     * @Condition
     * @Keterangan Condition Dropdown 
    */
    @ViewChild('Condition') Condition: DropDownListComponent;

    /**
     * @Value
     * @Keterangan Value khusus untuk input field string
    */
    @ViewChild('Value') Value: ElementRef;

    /**
     * @DateValue
     * @Keterangan DateValue khusus untuk input field Datepicker
    */
    @ViewChild('DateValue') DateValue: DatePickerComponent;

    /**
     * @HandlingPencarian
     * @Keterangan EventEmitter untuk mendapatkan AdvancedFilterArray pada parent Component
    */
    @Output('handle-pencarian') HandlingPencarian = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {

    }

    handleChangeFilterColumns(columnText: string): void {
        if (columnText) {
            const is_date_filter = columnText.indexOf('Tgl' || 'tgl') > -1 ? true : false;

            if (is_date_filter) {
                this.FilterState = 'Date';

                this.FilterConditionDatasource = [
                    { text: 'Equal', value: 'equal' },
                ];
            } else {
                this.FilterState = 'String';

                this.FilterConditionDatasource = [
                    { text: 'Equal', value: 'equal' },
                    { text: 'Contains', value: 'like' },
                ];
            };
        }
    }

    handleClickAddFilter(): void {
        const items = {
            'columnText': this.Column.text,
            'columnName': this.Column.value,
            'filter': this.Condition.value,
            'searchText': this.FilterState == 'String' ? this.Value.nativeElement.value : formatDate(this.DateValue.value, 'yyyy-MM-dd', 'EN'),
        };

        this.AdvancedFilterArray.push(items);

        const itemsEmit = {
            'columnName': this.Column.value,
            'filter': this.Condition.value,
            'searchText': this.FilterState == 'String' ? this.Value.nativeElement.value : `'${formatDate(this.DateValue.value, 'yyyy-MM-dd', 'EN')}'`,
            'searchText2': "",
        };

        this.AdvancedFilterArrayEmitting.push(itemsEmit);

        setTimeout(() => {
            this.onResetFilter();
        }, 100);
    }

    handleDeleteFilterItem(index: number): void {
        this.AdvancedFilterArray.splice(index, 1);
        this.AdvancedFilterArrayEmitting.splice(index, 1);
    }

    handleDeleteItemFromBadge(index: number): void {
        this.AdvancedFilterArray.splice(index, 1);
        this.AdvancedFilterArrayEmitting.splice(index, 1);

        this.handlePencarian();
    }

    onResetFilter(): void {
        this.Column.value = null;
        this.Condition.value = null;

        if (this.FilterState == 'String') {
            this.Value.nativeElement.value = "";
        } else {
            this.DateValue.value = null;
        }
    }

    handlePencarian(): void {
        this.HandlingPencarian.emit(this.AdvancedFilterArrayEmitting);

        (<HTMLElement>document.getElementById('btnClose')).click();
    }
}
