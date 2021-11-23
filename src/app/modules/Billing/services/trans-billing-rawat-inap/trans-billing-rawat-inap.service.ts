import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransBillingRawatInapService {

    HeaderBilling = new BehaviorSubject({});
    HeaderBilling$ = this.HeaderBilling.asObservable();

    constructor() { }
}
