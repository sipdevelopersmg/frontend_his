import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'mol-lock-up-filters',
    templateUrl: './mol-lock-up-filters.component.html',
    styleUrls: ['./mol-lock-up-filters.component.css']
})
export class MolLockUpFiltersComponent implements OnInit {

    @Input('filters') filters: any;

    @Output('onChangeFilters') onChangeFilters = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
        // console.log(this.filters);
    }

    onFilterChanged(checkbox: any) {
        this.onChangeFilters.emit(checkbox);
    }
}
