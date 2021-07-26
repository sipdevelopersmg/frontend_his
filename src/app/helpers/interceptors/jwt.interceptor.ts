import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthenticationService } from "src/app/modules/auth/services/authentication.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { IAuthenticationResponseModel } from "src/app/modules/auth/models/authentication.model";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const WebApiUrl = httpRequest.url.startsWith(`${environment.webApiUrl}`);

        const IsUserLogin: IAuthenticationResponseModel = JSON.parse(sessionStorage.getItem('UserData'));

        if (WebApiUrl && IsUserLogin) {
            const modifiedRequest = httpRequest.clone({
                setHeaders: {
                    Authorization: "Bearer " + IsUserLogin.token
                }
            });

            return next.handle(modifiedRequest);
        }

        return next.handle(httpRequest);
    }
}