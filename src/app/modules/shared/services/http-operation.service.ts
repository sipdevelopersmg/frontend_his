import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { HttpResponseModel, PostRequestByDynamicFiterModel } from '../models/Http-Operation/HttpResponseModel';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root',
})
export class HttpOperationService {
    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
        private notificationService: NotificationService
    ) { }

    defaultGetRequest(url: string, params?: any, showErrorAlert?: boolean): Observable<any> {
        return this.httpClient.get<any>(
            url,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json'),
                params: params
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    // Menampilkan SweetAlert Error
                    if (showErrorAlert) {
                        this.handlingErrorWithStatusCode200(result);
                    } else {
                        return result;
                    }
                }
            })
        );
    }

    defaultPostRequest(url: string, req: any): Observable<any> {
        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        );
    }

    defaultPutRequest(url: string, req: any): Observable<any> {
        return this.httpClient.put<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        );
    }

    defaultPutRequestWithoutParams(url: string): Observable<any> {
        return this.httpClient.put<any>(
            url, null,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result: HttpResponseModel) => {
                if (result.responseResult === false) {
                    console.log('Goes Here!');
                    this.handlingErrorWithStatusCode200(result);
                } else {
                    return result;
                }
            })
        );
    }

    defaultPostRequestWithoutLoading(url: string, req: any): Observable<any> {
        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        );
    }

    defaultDeleteRequest(url: string): Observable<any> {
        return this.httpClient.delete<any>(
            url,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    // Menampilkan SweetAlert Error
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        )
    }

    defaultDeleteRequestWithBody(url: string, req: any): Observable<any> {
        const options = {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            body: req
        };

        return this.httpClient.delete<any>(
            url, options
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    // Menampilkan SweetAlert Error
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        )
    }

    defaultUploadFileRequest(url: string, req: FormData): Observable<any> {
        return this.httpClient.post<any>(url, req)
            .pipe(
                catchError(this.handlingError),
                tap((result) => {
                    this.utilityService.onShowLoading();
                }),
                delay(2100),
                map((result: HttpResponseModel) => {
                    if (result.responseResult) {
                        return result;
                    } else {
                        this.handlingErrorWithStatusCode200(result);
                    }
                })
            );
    }

    defaultPostRequestByDynamicFilter(url: string, req: PostRequestByDynamicFiterModel[]): Observable<any> {
        return this.httpClient.post<any>(
            url, req,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            }
        ).pipe(
            catchError(this.handlingError),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        );
    }

    defaultPostLoginPrintPanel(): Observable<any> {
        // let body = `j_username=jasperadmin&j_password=bitnami`;

        let body = new HttpParams({
            fromObject: {
                "j_username": "jasperadmin",
                "j_password": "bitnami",
            }
        });

        return this.httpClient.post<any>(
            "http://192.168.0.107:8081/jasperserver/rest_v2/login",
            body.toString(),
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: '*/*',
                })
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    return result;
                } else {
                    this.handlingErrorWithStatusCode200(result);
                }
            })
        );
    }

    defaultGetPrintRequest(url: string, params: any, filename?: string): void {
        let base64encodedData = btoa('jasperadmin:jasperadmin');

        this.httpClient.get(
            url,
            {
                headers: new HttpHeaders()
                    .set('Accept', "application/pdf")
                    .set('Authorization', `Basic ${base64encodedData}`),
                params: params,
                responseType: 'arraybuffer',
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result) => {
                return result;
            })
        ).subscribe((result: any) => {
            const file = new Blob([result], { type: 'application/pdf' });

            const fileUrl = window.URL.createObjectURL(file);

            window.open(fileUrl);
        })
    }

    defaultGetPrintOnlyPreview(url: string, params: any, filename?: string): Observable<any> {
        let base64encodedData = btoa('jasperadmin:jasperadmin');

        return this.httpClient.get(
            url,
            {
                headers: new HttpHeaders()
                    .set('Accept', "text/plain")
                    .set('Authorization', `Basic ${base64encodedData}`),
                params: params,
                responseType: 'text',
            }
        ).pipe(
            catchError((error: HttpErrorResponse): any => {
                this.notificationService.onShowToast(error.statusText, error.status + ' ' + error.statusText, {}, true);
            }),
            tap((result) => {
                this.utilityService.onShowLoading();
            }),
            delay(2100),
            map((result) => {
                return result;
            })
        );
    }

    private handlingErrorWithStatusCode200(response: HttpResponseModel): any {
        // let message = [];

        // response.data.forEach((item) => {
        //     message.push(item['errors'][0]['errorMessage']);
        // });

        // return this.utilityService.onShowingMultipleMessageAlert('error', 'Oops...', message);

        return this.utilityService.onShowingCustomAlert('error', 'Oops...', response.message);
    }

    private handlingError(error: HttpErrorResponse): any {
        if (error.status === 400) {
            return throwError(error);
        }
    }
}
