import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mol-input-group',
    templateUrl: './mol-input-group.component.html',
    styleUrls: ['./mol-input-group.component.css']
})
export class MolInputGroupComponent implements OnInit {

    @Input('label') label: string;
    @Input('titleValue') titleValue: string;
    @Input('inputId') inputId: string;
    @Input('disableTitle') disableTitle: boolean;
    @Output('clickButton') clickButton = new EventEmitter<any>();
    @Output('pressEnter') pressEnter = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickButton($event: any) {
        this.clickButton.emit($event)
    }

    onKeypressEvent($event: any) {
        if ($event.charCode == 13) {
            this.pressEnter.emit($event);
        }
    }

}
