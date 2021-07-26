import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {

    formAuthentication: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit(): void {
        this.onSetFormAuthenticationAttribute();
    }

    onSetFormAuthenticationAttribute(): any {
        this.formAuthentication = this.formBuilder.group({
            Username: ['', Validators.required],
            Password: ['', Validators.required]
        });
    }

    onClickButtonSignIn(formAuthentication: any): void {
        const username = formAuthentication.Username;
        const password = formAuthentication.Password;

        if (username !== '' && password !== '') {
            this.authenticationService.onLogin(username, password);
        }

        if (username === '' && password === '') {
            this.utilityService.onShowingCustomAlert(
                'error',
                'Oops',
                'Sign In Failed'
            );
        }
    }

    get Username(): any { return this.formAuthentication.get('Username'); }
    get Password(): any { return this.formAuthentication.get('Password'); }
}
