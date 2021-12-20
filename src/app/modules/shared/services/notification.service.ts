import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    toasts: any[] = [];

    constructor() { }

    onShowToast(header: string, body: string, options: any, mute?: boolean): void {

        if (header) {
            this.toasts.push({ header, body, ...options });
        } else {
            this.toasts.push({ header: 'Oops', body: 'We got an issue', options: {} });
        }

        if (mute) {
            // ** Do Nothing
        } else {
            this.onPlayNotificationSound();
        }
    }

    onRemoveToast(toast: any, index: number): void {
        this.toasts.splice(index, 1);
    }

    onPlayNotificationSound(): any {
        const audio = new Audio();
        audio.src = '../../../assets/sound/notification/sms.mp3';
        audio.load();
        audio.play();
    }
}
