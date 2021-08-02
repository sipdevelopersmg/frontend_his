import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpResponseModel } from '../models/Http-Operation/HttpResponseModel';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root',
})
export class HttpOperationService {
    private httpHeader: HttpHeaders;

    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) {
        this.httpHeader = new HttpHeaders();
        this.httpHeader = this.httpHeader.set('Content-Type', 'application/json');
    }

    defaultGetRequest(url: string, params?: any): Observable<any> {
        return this.httpClient.get<any>(
            url,
            {
                headers: this.httpHeader,
                params: params
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult) {
                    // Menampilkan SweetAlert Error
                    this.handlingErrorWithStatusCode200(result);
                    return result;
                } else {
                    return result;
                }
            })
        );
    }

    defaultPostRequest(url: string, req: any): Observable<any> {
        return this.httpClient.post<any>(
            url, req,
            {
                headers: this.httpHeader
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
                headers: this.httpHeader
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
                headers: this.httpHeader
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
                headers: this.httpHeader
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

    onFetchFierBase(url: string): Observable<any> {
        return this.httpClient
            .get<any>(`${environment.firebaseRtdbUrl}` + url, {
                headers: this.httpHeader,
            })
            .pipe(
                map((result: { [key: string]: any }) => {
                    const data = [];

                    for (const key in result) {
                        if (result.hasOwnProperty(key)) {
                            data.push({ ...result[key], id: key });
                        }
                    }

                    return data;
                })
            );
    }

    onTestingError(): Observable<any> {
        return this.httpClient.get<any>(
            `${environment.webApiDo}` + 'MM/SetupPabrik/testError',
            {
                headers: this.httpHeader
            }
        ).pipe(
            catchError(this.handlingError),
            map((result: HttpResponseModel) => {
                if (result.responseResult === false && Object.keys(result.data).length === 0) {
                    // ** Menampilkan SweetAlert Error
                    this.handlingErrorWithStatusCode200(result);
                    return result;
                } else {
                    return result;
                }
            })
        );
    }

    private handlingErrorWithStatusCode200(response: HttpResponseModel): any {

        // ** Jika response.data type nya []
        if (!response.responseResult) {
            return this.utilityService.onShowingCustomAlert('error', 'Oops...', response.message);
        }

        // ** Jika response.data type nya {}
        if (!response.responseResult && Object.keys(response.data).length == 0) {
            return this.utilityService.onShowingCustomAlert('error', 'Oops...', response.message);
        }
    }

    private handlingError(error: HttpErrorResponse): any {
        if (error.status === 400) {
            return throwError(error);
        }
    }
}
