import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'mol-input-group-kode',
    templateUrl: './mol-input-group-kode.component.html',
    styleUrls: ['./mol-input-group-kode.component.css']
})
export class MolInputGroupKodeComponent implements OnInit {

    @Input('label') label: string
    @Output('clickButton') clickButton = new EventEmitter<any>();
    @Input('kodeValue') kodeValue: string
    @Input('titleValue') titleValue: string
    @Input('disableTitle') disableTitle: boolean
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
