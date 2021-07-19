import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    // ** Showing Alert with Timer
    onShowingCustomAlert(icon: any, title: string, message: string): Promise<any> {
        return Swal.fire({
            icon,
            title,
            text: message,
            showCloseButton: false,
            showConfirmButton: true
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
}
