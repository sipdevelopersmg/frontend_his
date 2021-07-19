import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonNavModel } from '../../../molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'org-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.css']
})
export class OrgCardLayoutComponent implements OnInit, AfterContentChecked {

    HeaderRibbon: string;
    HideHeaderRibbon: string;

    // tslint:disable-next-line: no-input-rename
    @Input('ButtonNav') ButtonNav: ButtonNavModel[];

    @Output('onClickButtonNav') onClickButtonNav = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        this.HeaderRibbon = localStorage.getItem('PageTitle');
    }

    onClickedButtonNav(ButtonId: string): void {
        this.onClickButtonNav.emit(ButtonId);
    }
}
