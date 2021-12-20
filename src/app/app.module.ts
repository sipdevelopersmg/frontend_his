import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JwtInterceptor } from './helpers/interceptors/jwt.interceptor';
import { CommandColumnService, EditService } from '@syncfusion/ej2-angular-grids';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';

import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';
import { Router } from '@angular/router';

const config: SocketIoConfig = {
    url: `${environment.webApiSocket}`, options: {
        "force new connection": true,
        "reconnectionAttempts": "Infinity",
        "timeout": 10000,
        "transports": ["websocket"]
    }
};

Sentry.init({
    dsn: 'https://21c111285e044d17a943b3a72cc6cffc@o1094972.ingest.sentry.io/6113627',
    integrations: [
        new Integrations.BrowserTracing({
            tracingOrigins: ['localhost', environment.webApiForSentry],
            routingInstrumentation: Sentry.routingInstrumentation
        }),
        new Integrations.BrowserTracing({
            tracingOrigins: ['http://128.199.133.137', environment.webApiForSentry],
            routingInstrumentation: Sentry.routingInstrumentation
        }),
        new Integrations.BrowserTracing({
            tracingOrigins: ['http://128.199.133.137', environment.webApiForSentry],
            routingInstrumentation: Sentry.routingInstrumentation
        }),
    ],
    environment: environment.production ? 'production' : 'development',
    tracesSampleRate: 1.0,
});

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SocketIoModule.forRoot(config)
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        EditService,
        CommandColumnService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: ErrorHandler, useValue: Sentry.createErrorHandler({ showDialog: false }) },
        { provide: Sentry.TraceService, deps: [Router] },
        { provide: APP_INITIALIZER, useFactory: () => () => { }, deps: [Sentry.TraceService], multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
