import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import Swal from 'sweetalert2';
import moment from 'moment';
import 'moment/locale/id';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor(private navigationService: NavigationService) { }

    // ** Showing Alert with Timer
    onShowingCustomAlert(icon: any, title: string, message: string): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true,
        });
    }

    onShowCustomAlertWithTimer(icon: any, title: string, message: string, timer?: number): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            timer,
            showCloseButton: false,
            showConfirmButton: false
        });
    }

    onShowLoading(): Promise<any> {
        let timerInterval: any;

        return Swal.fire({
            title: 'Loading...',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            showCancelButton: false,
            willOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getHtmlContainer();
                    if (content) {
                        const b: any = content.querySelector('b');

                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((alertResponse) => {
            if (alertResponse.dismiss === Swal.DismissReason.timer) {

            }
        });
    }

    onShowingConfirmationAlert(icon: any, title: string, message: string, actionYes: () => any, actionNo: () => any): Promise<any> {
        return Swal.fire({
            icon,
            title,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            denyButtonText: `Tidak, Kembali`,
        }).then((result) => {
            if (result.isConfirmed) {
                actionYes();
            } else if (result.isDenied) {
                actionNo();
            }
        });
    }

    // ** Generate Custom Hex Color for Border
    onGenerateCustomColor(): any {
        const numberHex = (Math.random() * 0xfffff * 1000000).toString(16);

        return '#' + numberHex.slice(0, 6);
    }

    onDeleteDetailResepFromCardBody(data: any): any {
        const deletedDetailResep: any[] = [];

        for (let i = 0; i < data.length; i++) {
            deletedDetailResep.push(Object.keys(data[i]).filter(key =>
                key !== 'DetailResep' && key !== 'Waktu').reduce((obj, key) => {
                    obj[key] = data[i][key];

                    return obj;
                }, {}));
        }

        return deletedDetailResep;
    }

    /**
     * @onFormatDate Formatting Date Menggunakan Moment 
     * @param date Wajib type data Date
     * @param format Wajib type data string
     * @keterangan format day   -> dddd = Rabu, Do = 15
     * @keterangan format month -> MMM = Sep, MMMM = September
     * @keterangan format year  -> yy = 21, yyyy = 2021
    */
    onFormatDate(date: any, format: string): any {
        moment.locale('id')

        const date_now = moment(date).format(format);

        return date_now;
    }
}
