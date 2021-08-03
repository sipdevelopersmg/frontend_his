import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpOperationService } from '../../shared/services/http-operation.service';
import { UtilityService } from '../../shared/services/utility.service';
import { AuthenticationResponseModel, IAuthenticationResponseModel, PostChangePassword } from '../models/authentication.model';
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
                password: Password,
                app_tipe: 'w'
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        ).subscribe((result: AuthenticationResponseModel) => {
            if (result) {
                this.handlingAuth(result.data);

                this.utilityService.onShowingCustomAlert('success', 'Success', 'Sign In Berhasil')
                    .then(() => {
                        this.router.navigateByUrl('dashboard/beranda');
                    });
            }
        });
    }

    onLogout(): void {
        const UserData: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

        this.httpOperationService.defaultPutRequestWithoutParams(
            API_CONFIG.API.POST_LOGOUT + UserData.id_user
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        ).subscribe((result) => {
            if (result.responseResult) {
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

                    sessionStorage.clear();
                });
            }
        });
    }

    autoLogout(sessionExpirationTimer: number): void {
        this.sessionExpirationTime = setTimeout(() => {
            this.utilityService.onShowingCustomAlert('error', 'Session Anda Telah Habis', 'Silahkan Sign In Ulang')
                .then(() => {
                    this.onLogout();
                });
        }, sessionExpirationTimer);
    }

    onChangePassword(ChangePasswordData: PostChangePassword): Observable<any> {
        return this.httpOperationService.defaultPutRequest(API_CONFIG.API.PUT_CHANGE_PASSWORD, ChangePasswordData)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onResetPassword(UserId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequestWithoutParams(API_CONFIG.API.PUT_RESET_PASSWORD + UserId);
    }

    private handlingAuth(UserData: IAuthenticationResponseModel): void {
        let expiresIn: number;

        if (UserData.timeOut) { expiresIn = UserData.timeOut * 60 * 1000; }

        this.autoLogout(expiresIn);

        sessionStorage.setItem('UserData', JSON.stringify(UserData));

        this.currentUserSubject.next(UserData);
    }
}
