import { TitleCasePipe } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { EditSettingsModel } from '@syncfusion/ej2-grids';
import { take } from 'rxjs/operators';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPasienTeradmisiHariIniModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { AdmisiPasienRawatJalanService } from '../../../services/IRJA/admisi-pasien-rawat-jalan/admisi-pasien-rawat-jalan.service';
import { PendaftaranPasienBaruService } from '../../../services/IRJA/pendaftaran-pasien-baru/pendaftaran-pasien-baru.service';
import { SetupDokterService } from '../../../services/setup-data/setup-dokter/setup-dokter.service';

@Component({
    selector: 'app-antrian-pasien-rawat-jalan',
    templateUrl: './antrian-pasien-rawat-jalan.component.html',
    styleUrls: ['./antrian-pasien-rawat-jalan.component.css'],
})
export class AntrianPasienRawatJalanComponent implements OnInit {

    HeaderRibbon: string;

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Cari', Icons1: 'fa-search fa-sm', Captions: '[F1] Pencarian' }
    ];

    DataDokter: any[] = [];

    DataAdmisiPasien: any[] = [];

    GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: IPasienTeradmisiHariIniModel[] = [];

    SelectedDataPasien: any;

    foto_pasien: string;

    @ViewChild('DropdownPoli') DropdownPoli: DropDownListComponent;
    DropdownPoliDatasource: PoliModel[] = [];
    DropdownPoliFields: object = { text: 'nama_poli', value: 'id_poli' };

    SelectedDataPoli: string;

    constructor(
        private titleCasePipe: TitleCasePipe,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private setupDokterService: SetupDokterService,
        private pendaftaranPasienBaruService: PendaftaranPasienBaruService,
        private admisiPasienRawatJalanService: AdmisiPasienRawatJalanService,
    ) { }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 112) {
            event.preventDefault();
            this.handleClickButtonNav('Cari')
        }
    }

    ngOnInit(): void {
        const today = this.utilityService.onFormatDate(new Date(), "dddd, Do MMMM yyyy");

        this.HeaderRibbon = `Antrian Pasien Rawat Jalan Hari ${today}`;

        this.onGetAllDokter();

        this.onGetAllPoliklinik();
    }

    handleClickButtonNav(args: string): void {
        switch (args) {
            case 'Cari':
                (<HTMLElement>document.getElementById('btnOpenCariPoli')).click();
                break;
            default:
                break;
        }
    }

    onGetAllDokter(): void {
        this.setupDokterService.onGetAllDokter();

        this.setupDokterService.GridDaftarDokter$
            .subscribe((result) => {
                result.forEach((item) => {
                    this.onGetLinkFotoPerson(item.id_person)
                        .then((data) => {
                            item['url_foto'] = data;
                        });
                });

                this.DataDokter = result.splice(1, 2);
            });

        setTimeout(() => {
            this.onGetAllAdmisiPasien()
                .then((data) => {
                    this.DataDokter[0]['daftar_pasien'] = [data[0]];
                    this.DataDokter[1]['daftar_pasien'] = [data[1]];
                });
        }, 3000);
    }

    onGetLinkFotoPerson(PersonId: number): Promise<any> {
        return new Promise(resolve => {
            this.pendaftaranPasienBaruService.onGetLinkFotoPerson(PersonId)
                .pipe(take(1))
                .subscribe((result) => {
                    resolve(result.data);
                });
        })
    }

    onGetAllAdmisiPasien(): Promise<any> {
        return new Promise(resolve => {
            this.admisiPasienRawatJalanService.onGetAllPasienRawatJalanTeradmisiHariIni([])
                .subscribe((result) => {
                    result.data[0]['id_person'] = 63;
                    result.data[1]['id_person'] = 60;

                    console.log(result.data);

                    resolve(result.data);
                });
        });
    }

    onGetAllPoliklinik(): void {
        this.setupPoliService.onGetAll()
            .subscribe((result) => {
                this.DropdownPoliDatasource = result.data;
            });
    }

    handleSelectedRow(args: any, GridId: string): void {

        this.SelectedDataPasien = args.data;

        this.onGetDetailPasien(args.data.id_person);

        const grid_el: GridComponent = (<any>document.getElementById(GridId)).ej2_instances[0];

        setTimeout(() => {
            grid_el.clearSelection();
        }, 200);
    }

    onGetDetailPasien(PersonId: number): void {
        this.pendaftaranPasienBaruService.onGetLinkFotoPerson(PersonId)
            .subscribe((result) => {
                this.foto_pasien = result.data;
            })
    }

    togglingCardDokter(ElementId: string): void {
        let icon = document.getElementById('icon' + ElementId) as HTMLElement;
        let card_body = document.getElementById('card_body' + ElementId) as HTMLElement;

        if (icon.classList.contains('fa-window-minimize')) {
            icon.classList.remove('fa-window-minimize');
            icon.classList.add('fa-window-maximize');

            card_body.classList.remove('show-card-dokter');
            card_body.classList.add('hide-card-dokter');

        } else {
            icon.classList.add('fa-window-minimize');
            icon.classList.remove('fa-window-maximize');

            card_body.classList.add('show-card-dokter');
            card_body.classList.remove('hide-card-dokter');
        }
    }

    handlePencarianAntrianPoliklinik(PoliklinikId: number, NamaPoliklinik: string): void {
        const today = this.utilityService.onFormatDate(new Date(), "dddd, Do MMMM yyyy");

        this.HeaderRibbon = `Antrian Pasien Rawat Jalan Poli ${this.titleCasePipe.transform(NamaPoliklinik)} Hari ${today}`;

        setTimeout(() => {
            (<HTMLElement>document.getElementById('btnCloseFilter')).click();
        }, 200);
    }
}
