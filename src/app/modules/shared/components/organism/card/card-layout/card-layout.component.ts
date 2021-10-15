import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonNavModel } from '../../../molecules/button/mol-button-nav/mol-button-nav.component';

@Component({
    selector: 'org-card-layout',
    templateUrl: './card-layout.component.html',
    styleUrls: ['./card-layout.component.css']
})
export class OrgCardLayoutComponent implements OnInit, AfterContentChecked {

    @Input('HeaderRibbon') HeaderRibbon: string;
    HideHeaderRibbon: string;

    @Input('ChangeHeaderRibbon') ChangeHeaderRibbon: boolean = false;

    @Input('ButtonNav') ButtonNav: ButtonNavModel[];

    @Output('onClickButtonNav') onClickButtonNav = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    ngAfterContentChecked(): void {
        if (!this.ChangeHeaderRibbon) {
            this.HeaderRibbon = localStorage.getItem('PageTitle');
        }
    }

    onClickedButtonNav(ButtonId: string): void {
        this.onClickButtonNav.emit(ButtonId);
    }
}
