import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Output('handlePencarian') handlePencarian = new EventEmitter<any>();

    FormFilterDashboard: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.FormFilterDashboard = this.formBuilder.group({
            startDate: ['', []],
            endDate: ['', []]
        });
    }

    handleOpenFilter(): void {
        const btnFilterDashboard = document.getElementById('btnFilterDashboard') as HTMLElement;
        btnFilterDashboard.click();
    }

    handleCloseFilter(): void {
        const btnCloseFilterDashboard = document.getElementById('btnCloseFilterDashboard') as HTMLElement;
        btnCloseFilterDashboard.click();
    }

    handleClickButtonPencarian(FormFilterDashboard: any): void {
        this.handlePencarian.emit(FormFilterDashboard);
        this.handleCloseFilter();
    }

    get startDate(): AbstractControl { return this.FormFilterDashboard.get('startDate') };
    get endDate(): AbstractControl { return this.FormFilterDashboard.get('endDate') };
}
