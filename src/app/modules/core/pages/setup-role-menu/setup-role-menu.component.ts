import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { SetupRoleMenuService } from '../../services/setup-role-menu/setup-role-menu.service';
import { SetupRoleService } from '../../services/setup-role/setup-role.service';
import { RolesModel } from '../../models/setup-role-menu/setup-role-menu.model';
import { MainMenuModel } from '../../models/navigation/menu.model';

@Component({
    selector: 'app-setup-role-menu',
    templateUrl: './setup-role-menu.component.html',
    styleUrls: ['./setup-role-menu.component.css']
})
export class SetupRoleMenuComponent implements OnInit {

    // ** User data properties
    UserData: IAuthenticationResponseModel;
    RolesData: RolesModel;

    constructor(
        private setupRoleService: SetupRoleService,
        private setupRoleMenuService: SetupRoleMenuService
    ) {
        this.UserData = JSON.parse(sessionStorage.getItem('UserData'));

        this.onGetCurrentDataRole();
    }

    ngOnInit(): void { }

    onGetCurrentDataRole(): void {
        this.setupRoleService.onGetCurrentDataRole()
            .subscribe((result: RolesModel) => {
                this.RolesData = result;
            });
    }
}
