import { Component, Input, OnInit } from '@angular/core';

export interface MainMenu {
    Id: number,
    Name: string
}

@Component({
    selector: 'atm-single-menu',
    templateUrl: './single-menu.component.html',
    styleUrls: ['./single-menu.component.css']
})
export class AtmSingleMenuComponent implements OnInit {

    @Input('IdMenu') IdMenu: string;
    @Input('IconMenu') IconMenu: string;
    @Input('NamaMenu') NamaMenu: string;

    constructor() { }

    ngOnInit(): void {
    }

}
