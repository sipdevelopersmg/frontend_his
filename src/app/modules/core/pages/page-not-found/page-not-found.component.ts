import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

    constructor(private navigationService: NavigationService) { }

    ngOnInit(): void {
    }

    onClickButtonKembali(args: any) {
        let type = args.type;

        if (type == "click") {
            this.navigationService.backToPreviousPage();
        }
    }
}
