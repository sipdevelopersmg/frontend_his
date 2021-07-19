import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'atm-notification',
    templateUrl: './atm-notification.component.html',
    styleUrls: ['./atm-notification.component.css'],
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[class.ngb-toasts]': 'true' }
})
export class AtmNotificationComponent implements OnInit {

    Toasts: any;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.Toasts = this.notificationService.toasts;
    }

    onHideNotification(toast: any): void {
        return this.notificationService.onRemoveToast(toast);
    }
}
