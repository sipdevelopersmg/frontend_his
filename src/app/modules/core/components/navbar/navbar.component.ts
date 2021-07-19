import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
    selector: 'atm-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class AtmNavbarComponent implements OnInit {

    @Output("onClickNavbarBrand") onClickNavbarBrand = new EventEmitter<any>();

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
    }

    onClickedNavbarBrand(args: any): void {
        this.onClickNavbarBrand.emit(args);
    }

    onClickButtonLogout(): void {
        return this.authenticationService.onLogout();
    }
}
