import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../shared/services/utility.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private router: Router, private utilityService: UtilityService) { }

    onLogout(): void {
        this.utilityService.onShowingCustomAlert(
            'success',
            'Success',
            'Sign Out Successfully'
        ).then(() => {
            this.router.navigateByUrl('');
        });
    }
}
