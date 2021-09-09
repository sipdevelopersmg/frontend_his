import { Component, OnInit, ViewChild } from '@angular/core';
import { OrgInputLookUpComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up/org-input-look-up.component';
import * as Config from './json/pemasukan-rawat-jalan.config.json';

@Component({
    selector: 'app-pemasukan-rawat-jalan',
    templateUrl: './pemasukan-rawat-jalan.component.html',
    styleUrls: ['./pemasukan-rawat-jalan.component.css']
})
export class PemasukanRawatJalanComponent implements OnInit {

    PemasukanConfig = Config;

    @ViewChild('LookupMr') LookupMr: OrgInputLookUpComponent;
    UrlLookupRM: string;

    constructor() { }

    ngOnInit(): void {
    }

    heandleSelectedLookupRM(args: any): void { }
}
