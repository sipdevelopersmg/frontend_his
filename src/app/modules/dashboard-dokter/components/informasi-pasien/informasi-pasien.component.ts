import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PendaftaranPasienBaruService } from 'src/app/modules/PIS/services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { IDaftarPasienIRJAModel } from '../../models/daftar_pasien.model';
import { PasienModel } from '../../models/informasi-pasien.model';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'dd-informasi-pasien',
    templateUrl: './informasi-pasien.component.html',
    styleUrls: ['./informasi-pasien.component.css']
})
export class InformasiPasienComponent implements OnInit, AfterViewInit {

    Pasien: IDaftarPasienIRJAModel;

    // ** Toggling Properties
    @Input("ToggleVisibility") ToggleVisibility: boolean = false;
    @Output("onToggledVisibility") onToggledVisibility = new EventEmitter<any>();

    screenWidth: any;

    photo_pasien: string = "";

    constructor(
        private navigationService: NavigationService,
        public daftarPasienService: DaftarPasienService,
        public dashboardDokterService: DashboardDokterService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
    ) { }

    @HostListener("window:resize", ['$event'])
    private onResize(event: any) {
        this.onDetectScreenSize(event.srcElement.innerWidth);
    }

    ngOnInit(): void {
        this.onTogglingVisibility();

        this.daftarPasienService.onGetActivePasien();

        this.onDetectScreenSize(window.innerWidth);
    }

    ngAfterViewInit(): void {
        // this.onGetFotoPasien();
    }

    onGetFotoPasien(): void {
        // this.pendaftaranPasienBaruService.onGetLinkFotoPerson(this.daftarPasienService.ActivePasien.value.id_person)
        //     .subscribe((result) => {
        //         this.photo_pasien = result.data;
        //     })
    }

    onDetectScreenSize(screenWidth: any): void {
        this.screenWidth = screenWidth;
    }

    onTogglingVisibility() {
        this.ToggleVisibility = !this.ToggleVisibility;

        let elem = document.getElementById("ArrowVisibilty");

        if (this.ToggleVisibility == true) {
            elem.classList.remove("fa-chevron-circle-up");
            elem.classList.add("fa-chevron-circle-down");
        } else {
            elem.classList.remove("fa-chevron-circle-down");
            elem.classList.add("fa-chevron-circle-up");
        }

        this.onToggledVisibility.emit(this.ToggleVisibility);
    }

    onGetHideTopMenuSubject() {
        this.navigationService.onGetHideTopMenuSubject()
            .subscribe(
                (_result) => {
                    if (_result === true) {
                        this.ToggleVisibility = _result;

                        let elem = document.getElementById("ArrowVisibilty");

                        if (this.ToggleVisibility == true) {
                            elem.classList.remove("fa-chevron-circle-up");
                            elem.classList.add("fa-chevron-circle-down");
                        }

                        this.onToggledVisibility.emit(_result);
                    }
                }, (error) => {
                    console.log(error);
                }, () => {

                });
    }
}
