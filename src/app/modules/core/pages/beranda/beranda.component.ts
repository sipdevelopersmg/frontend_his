import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css'],
})
export class BerandaComponent implements OnInit {

    // ** User Properites
    UserFullName: string;

    constructor(
        private authenticationService: AuthenticationService,
    ) { }

    ngOnInit(): void {
        this.UserFullName = this.authenticationService.currentUserValue.full_name;
    }
}
