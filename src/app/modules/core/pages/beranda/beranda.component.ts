import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { SetupRoleService } from '../../services/setup-role/setup-role.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

    // ** User Properites
    UserFullName: string;

    constructor(
        private setupRoleService: SetupRoleService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.UserFullName = this.authenticationService.currentUserValue.full_name;

        this.setupRoleService.onGetAllRole("tes");
    }

}
