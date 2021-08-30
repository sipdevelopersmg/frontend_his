import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    toasts: any[] = [];

    constructor() { }

    onShowToast(header: string, body: string, options: any, mute?: boolean): void {
        this.toasts.push({ header, body, ...options });

        if (mute) {
            // ** Do Nothing
        } else {
            this.onPlayNotificationSound();
        }
    }

    onRemoveToast(toast: any, index: number): void {
        // this.toasts = this.toasts.filter(item => item != toast);

        this.toasts.splice(index, 1);

        console.log(this.toasts);
    }

    onPlayNotificationSound(): any {
        const audio = new Audio();
        audio.src = '../../../assets/sound/notification/sms.mp3';
        audio.load();
        audio.play();
    }
}
