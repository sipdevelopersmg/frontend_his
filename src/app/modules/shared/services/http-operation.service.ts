import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { HttpResponseModel } from '../models/Http-Operation/HttpResponseModel';
import { UtilityService } from './utility.service';

@Injectable({
    providedIn: 'root',
})
export class HttpOperationService {
    constructor(
        private httpClient: HttpClient,
        private utilityService: UtilityService,
    ) { }

    defaultGetRequest(url: string, params?: any): Observable<any> {
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
                    this.handlingErrorWithStatusCode200(result);
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

    private handlingErrorWithStatusCode200(response: HttpResponseModel): any {
        return this.utilityService.onShowingCustomAlert('error', 'Oops...', response.message);
    }

    private handlingError(error: HttpErrorResponse): any {
        if (error.status === 400) {
            return throwError(error);
        }
    }
}
