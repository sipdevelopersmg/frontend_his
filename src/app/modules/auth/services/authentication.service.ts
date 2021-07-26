import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpOperationService } from '../../shared/services/http-operation.service';
import { UtilityService } from '../../shared/services/utility.service';
import * as API_CONFIG from '../../../api/index';
import { AuthenticationResponseModel, IAuthenticationResponseModel } from '../models/authentication.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public currentUser$: Observable<IAuthenticationResponseModel>;

    private currentUserSubject: BehaviorSubject<IAuthenticationResponseModel>;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private httpOperationService: HttpOperationService,
    ) {
        this.currentUserSubject = new BehaviorSubject<IAuthenticationResponseModel>(JSON.parse(sessionStorage.getItem('UserData')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IAuthenticationResponseModel {
        return this.currentUserSubject.value;
    }

    onLogin(Username: string, Password: string): void {
        this.httpOperationService.defaultPostRequest(
            API_CONFIG.API.POST_AUTHENTICATION,
            {
                user_name: Username,
                password: Password
            }
        ).subscribe((result: AuthenticationResponseModel) => {
            if (result !== undefined) {
                this.handlingAuth(result.data);

                this.utilityService.onShowingCustomAlert('success', 'Success', 'Sign In Berhasil')
                    .then(() => {
                        this.router.navigateByUrl('dashboard/beranda');
                    });
            }
        });
    }

    onLogout(): void {
        this.utilityService.onShowingCustomAlert(
            'success',
            'Success',
            'Sign Out Successfully'
        ).then(() => {
            this.router.navigateByUrl('');
        });
    }

    autoLogout(sessionExpirationTimer: number): void {
        setTimeout(() => {

            confirm('Session Anda Telah Habis, Login Ulang?');
            this.onLogout();

        }, sessionExpirationTimer);
    }

    private handlingAuth(UserData: IAuthenticationResponseModel): void {
        let expiresIn: number;

        if (UserData) { expiresIn = 60 * 10 * UserData.timeOut; }

        this.autoLogout(expiresIn);

        sessionStorage.setItem('UserData', JSON.stringify(UserData));

        this.currentUserSubject.next(UserData);
    }
}
