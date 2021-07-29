import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpOperationService } from '../../shared/services/http-operation.service';
import { UtilityService } from '../../shared/services/utility.service';
import { AuthenticationResponseModel, IAuthenticationResponseModel } from '../models/authentication.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../shared/services/notification.service';
import * as API_CONFIG from '../../../api/index';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public currentUser$: Observable<IAuthenticationResponseModel>;

    private currentUserSubject: BehaviorSubject<IAuthenticationResponseModel>;

    private sessionExpirationTime: any;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) {
        this.currentUserSubject = new BehaviorSubject<IAuthenticationResponseModel>(JSON.parse(sessionStorage.getItem('UserData')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IAuthenticationResponseModel {
        return this.currentUserSubject.value;
    }

    onLogin(Username: string, Password: string): void {
        this.httpOperationService.defaultPostRequestWithoutLoading(
            API_CONFIG.API.POST_AUTHENTICATION,
            {
                user_name: Username,
                password: Password
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
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

            if (this.sessionExpirationTime) {
                clearTimeout(this.sessionExpirationTime);
            }

            this.sessionExpirationTime = null;
        });
    }

    autoLogout(sessionExpirationTimer: number): void {
        this.sessionExpirationTime = setTimeout(() => {
            confirm('Session Anda Telah Habis, Login Ulang?');
            this.onLogout();
        }, sessionExpirationTimer);
    }

    private handlingAuth(UserData: IAuthenticationResponseModel): void {
        let expiresIn: number;

        if (UserData) { expiresIn = 600000; }

        this.autoLogout(expiresIn);

        sessionStorage.setItem('UserData', JSON.stringify(UserData));

        this.currentUserSubject.next(UserData);
    }
}
