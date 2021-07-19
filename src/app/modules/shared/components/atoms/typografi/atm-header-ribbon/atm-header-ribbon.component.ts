import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'atm-header-ribbon',
    templateUrl: './atm-header-ribbon.component.html',
    styleUrls: ['./atm-header-ribbon.component.css']
})
export class AtmHeaderRibbonComponent implements OnInit {

    @Input("HeaderRibbon") HeaderRibbon: string;

    constructor() { }

    ngOnInit(): void {
    }

}
