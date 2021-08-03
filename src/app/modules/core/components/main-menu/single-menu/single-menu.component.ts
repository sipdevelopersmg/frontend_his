import { Component, Input, OnInit } from '@angular/core';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
    selector: 'atm-single-menu',
    templateUrl: './single-menu.component.html',
    styleUrls: ['./single-menu.component.css']
})
export class AtmSingleMenuComponent implements OnInit {

    @Input('IdMenu') IdMenu: string;
    @Input('IconMenu') IconMenu: string;
    @Input('NamaMenu') NamaMenu: string;

    UserData: IAuthenticationResponseModel;

    constructor(private authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.UserData = this.authenticationService.currentUserValue;
    }

}
