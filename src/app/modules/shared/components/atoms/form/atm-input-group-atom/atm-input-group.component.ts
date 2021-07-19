import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'atm-input-group-atom',
    templateUrl: './atm-input-group.component.html',
    styleUrls: ['./atm-input-group.component.css']
})
export class AtmInputGroupComponentAtom implements OnInit {

    @Output('clickButton') clickButton = new EventEmitter<any>();
    @Input('value') value: any;
    @Input('disableTitle') disableTitle: boolean;

    constructor() { }

    ngOnInit(): void {
    }

    @Input('label') label: string;

    handelClick($event: any) {
        this.clickButton.emit($event);
    }



}
