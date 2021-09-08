import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';

@Component({
    selector: 'app-admisi-pasien-rawat-jalan',
    templateUrl: './admisi-pasien-rawat-jalan.component.html',
    styleUrls: ['./admisi-pasien-rawat-jalan.component.css']
})
export class AdmisiPasienRawatJalanComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    constructor(
        private router: Router,
    ) { }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 114) {
            event.preventDefault();
            this.handleClickButtonNav('input_pasien_baru')
        }

        if (event.keyCode === 116) {
            event.preventDefault();
            this.handleClickButtonNav('pelayanan_pasien_irja');
        }
    }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: "input_pasien_baru", Icons1: 'fa-user-plus', Captions: '[F3] Pasien Baru' },
            { Id: "pelayanan_pasien_irja", Icons1: 'fa-folder-plus', Captions: '[F5] Pelayanan Pasien' },
        ];
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'input_pasien_baru':
                this.router.navigateByUrl('dashboard/PIS/pendaftaran-pasien-baru');
                break;
            case 'pelayanan_pasien_irja':
                this.router.navigateByUrl('dashboard/PIS/IRJA/admisi-pasien-rawat-jalan');
                break;
            default:
                break;
        }

    }
}
