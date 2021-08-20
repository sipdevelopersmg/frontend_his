import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';
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
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.UserFullName = this.authenticationService.currentUserValue.full_name;
    }

}
