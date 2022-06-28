import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDaftarPasienIRJAModel } from 'src/app/modules/dashboard-dokter/models/daftar_pasien.model';
import { DaftarPasienService } from 'src/app/modules/dashboard-dokter/services/daftar-pasien/daftar-pasien.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { environment, isFormularium } from 'src/environments/environment';

@Component({
    selector: 'app-detail-pasien',
    templateUrl: './detail-pasien.component.html',
    styleUrls: ['./detail-pasien.component.css']
})
export class DetailPasienComponent implements OnInit, AfterViewInit, OnDestroy {

    ButtonNav: ButtonNavModel[];

    IsFormularium: boolean;

    ActivePasien: IDaftarPasienIRJAModel;

    constructor(
        private router: Router,
        private daftarPasienService: DaftarPasienService,
    ) {
        this.IsFormularium = isFormularium;

        this.ButtonNav = [
            { Id: 'Back', Captions: 'Back', Icons1: 'fa-arrow-left' },
        ];
    }

    ngOnInit(): void {
        this.daftarPasienService.ActivePasien
            .subscribe((result) => {
                this.ActivePasien = result;
            });
    }

    ngAfterViewInit(): void {
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Back':
                this.router.navigateByUrl('Dokter/daftar-pasien');
                break;
            default:
                break;
        }
    }

    handlingToogleAccordion(id: string): void {
        const icon_accordion = (<HTMLElement>document.getElementById(`icon_${id}`));
        const body_accordion = (<HTMLElement>document.getElementById(`accordion_${id}`));

        if (icon_accordion.classList.contains('fa-chevron-down')) {
            icon_accordion.classList.remove('fa-chevron-down');
            icon_accordion.classList.add('fa-chevron-up');
            body_accordion.classList.add('hidden');
        } else {
            icon_accordion.classList.add('fa-chevron-down');
            icon_accordion.classList.remove('fa-chevron-up');
            body_accordion.classList.remove('hidden');
        }
    }

    ngOnDestroy(): void {
    }
}
