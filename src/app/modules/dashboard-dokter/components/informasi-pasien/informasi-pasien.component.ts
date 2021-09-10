import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { PasienModel } from '../../models/informasi-pasien.model';
import { DashboardDokterService } from '../../services/dashboard-dokter.service';

@Component({
    selector: 'dd-informasi-pasien',
    templateUrl: './informasi-pasien.component.html',
    styleUrls: ['./informasi-pasien.component.css']
})
export class InformasiPasienComponent implements OnInit {

    Pasien: PasienModel;

    // ** Toggling Properties
    @Input("ToggleVisibility") ToggleVisibility: boolean = false;
    @Output("onToggledVisibility") onToggledVisibility = new EventEmitter<any>();

    constructor(
        private navigationService: NavigationService,
        public dashboardDokterService: DashboardDokterService
    ) { }

    ngOnInit(): void {
        this.onTogglingVisibility();

        this.Pasien = {
            full_name: "Soetomo",
            jenis_kelamin: "Pria",
            umur: "23 Tahun, 11 Bulan, 29 Hari",
            tanggal_lahir: new Date("04/08/1997"),
            no_rm: "C00005946",
            no_reg: "A12.2016.05506",
            tanggal_masuk: new Date(),
            dpjp: "dr. Anastasia Nadia",
            ppjp: "",
            debitur: "Tanggungan Pribadi"
        };
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
