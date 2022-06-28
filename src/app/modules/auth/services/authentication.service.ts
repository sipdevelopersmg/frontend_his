import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpOperationService } from '../../shared/services/http-operation.service';
import { UtilityService } from '../../shared/services/utility.service';
import { AuthenticationResponseModel, IAuthenticationResponseModel, PostChangePassword } from '../models/authentication.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../shared/services/notification.service';
import * as API_CONFIG from '../../../api';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    API_AUTHENTICATION = API_CONFIG.API.API_AUTH;

    public currentUser$: Observable<IAuthenticationResponseModel>;

    private currentUserSubject: BehaviorSubject<IAuthenticationResponseModel>;

    private sessionExpirationTime: any;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private notificationService: NotificationService,
        private httpOperationService: HttpOperationService,
    ) {
        this.currentUserSubject = new BehaviorSubject<IAuthenticationResponseModel>(JSON.parse(localStorage.getItem('UserData')));
        this.currentUser$ = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): IAuthenticationResponseModel {
        return this.currentUserSubject.value;
    }

    onLogin(Username: string, Password: string, PrinterToken: string): void {
        this.httpOperationService.defaultPostRequest(
            this.API_AUTHENTICATION.POST_AUTHENTICATION,
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
                const userData: IAuthenticationResponseModel = {
                    full_name: result.data.full_name,
                    id_karyawan: result.data.id_karyawan,
                    id_role: result.data.id_role,
                    isAuth: result.data.isAuth,
                    menuJson: result.data.menuJson,
                    nama_role: result.data.nama_role,
                    timeOut: result.data.timeOut,
                    token: result.data.token,
                    user_name: result.data.user_name,
                };

                this.handlingAuth(userData);

                this.utilityService.onShowingCustomAlert('success', 'Success', 'Sign In Berhasil')
                    .then(() => {
                        if (result.data.id_role === 2 || result.data.nama_role === 'dokter') {
                            this.router.navigateByUrl('Dokter/daftar-pasien');
                        } else {
                            this.router.navigateByUrl('dashboard/beranda');
                        }
                    })
                    .then(() => {
                        if (PrinterToken !== "") {
                            this.onSetPrinterToken(PrinterToken);
                        }
                    });
            }
        });
    }

    onSetPrinterToken(printerToken: string): void {
        localStorage.setItem('PrinterToken', printerToken);
    }

    onLogout(): void {
        this.httpOperationService.defaultPutRequestWithoutParams(
            this.API_AUTHENTICATION.POST_LOGOUT
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            })
        ).subscribe((result) => {
            if (result) {
                this.utilityService.onShowingCustomAlert('success', 'Success', 'Sign Out Successfully')
                    .then(() => {
                        localStorage.clear();

                        this.currentUserSubject.next(null);

                        if (this.sessionExpirationTime) {
                            clearTimeout(this.sessionExpirationTime);
                        };

                        this.sessionExpirationTime = null;

                        this.router.navigateByUrl('');
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
        return this.httpOperationService.defaultPutRequest(this.API_AUTHENTICATION.PUT_CHANGE_PASSWORD, ChangePasswordData)
            .pipe(
                catchError((error: HttpErrorResponse): any => {
                    this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
                })
            );
    }

    onResetPassword(UserId: number): Observable<any> {
        return this.httpOperationService.defaultPutRequestWithoutParams(this.API_AUTHENTICATION.PUT_RESET_PASSWORD + UserId);
    }

    private handlingAuth(UserData: IAuthenticationResponseModel): void {
        localStorage.setItem('UserData', JSON.stringify(UserData));

        this.currentUserSubject.next(UserData);
    }
}
