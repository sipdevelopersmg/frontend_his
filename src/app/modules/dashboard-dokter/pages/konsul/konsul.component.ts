import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { PoliModel } from 'src/app/modules/Billing/models/setup-data/setup-poli.model';
import { OrgInputLookUpKodeComponent } from 'src/app/modules/shared/components/organism/loockUp/org-input-look-up-kode/org-input-look-up-kode.component';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import Config from './json/konsul.config.json';
import * as API_PIS_SETUP_DATA from '../../../../api/PIS/SETUP_DATA';
import { DaftarPasienService } from '../../services/daftar-pasien/daftar-pasien.service';
import { SetupPoliService } from 'src/app/modules/Billing/services/setup-data/setup-poli/setup-poli.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { KonsulService } from '../../services/konsul/konsul.service';

@Component({
    selector: 'app-konsul',
    templateUrl: './konsul.component.html',
    styleUrls: ['./konsul.component.css']
})
export class KonsulComponent implements OnInit, AfterViewInit {

    Config = Config;

    API_PIS_SETUP_DATA = API_PIS_SETUP_DATA.API_SETUP_DATA;

    FormKonsulPasien: FormGroup;

    @ViewChild('DropdownPoli') DropdownPoli: DropDownListComponent;
    DropdownPoliDatasource: PoliModel[] = [];
    DropdownPoliFields: object = { text: 'nama_poli', value: 'id_poli' };

    @ViewChild('LookupKodeDokter') LookupKodeDokter: OrgInputLookUpKodeComponent;
    urlDokter = "";

    GridDaftarKonsulToolbar: any = [
        { text: 'Konsul Pasien', tooltipText: 'Konsul Pasien', prefixIcon: 'fas fa-user-edit fa-sm', id: 'konsul_pasien' },
        "Search"
    ];
    GridDaftarKonsulDataSource: any[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private konsulService: KonsulService,
        private utilityService: UtilityService,
        private setupPoliService: SetupPoliService,
        private navigationService: NavigationService,
        private daftarPasienService: DaftarPasienService,
    ) { }

    ngOnInit(): void {
        this.FormKonsulPasien = this.formBuilder.group({
            id_register: [this.daftarPasienService.ActivePasien.value.id_register, []],
            id_dokter_asal: [this.daftarPasienService.ActivePasien.value.id_dokter, []],
            id_jadwal_dokter: [0, []],
            id_poli: [0, []],
            id_dokter_pemeriksa: [0, []],
            catatan_konsul: ["", []],
        });

        this.onGetAllPoliklinik();

        this.onGetAllRiwayatKonsul(this.daftarPasienService.ActivePasien.value.id_dokter);
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.navigationService.ButtonSidebarMenuState.next(true);
        }, 1);
    }

    onGetAllRiwayatKonsul(DokterId: number): void {
        this.konsulService.onGetAllRiwayatKonsul(DokterId)
            .subscribe((result) => {
                this.GridDaftarKonsulDataSource = result.data;
            });
    }

    onGetAllPoliklinik(): void {
        this.setupPoliService.onGetAll()
            .subscribe((result) => {
                this.DropdownPoliDatasource = result.data;
            });
    }

    onToolbarClick(args: any): void {
        let id = args.item.id;

        switch (id) {
            case 'konsul_pasien':
                this.handleOpenModalKonsulPasien();
                break;
            default:
                break;
        }
    }

    onRowSelected(args: any): void {

    }

    handleOpenModalKonsulPasien(): void {
        let btnKonsul = document.getElementById('btnKonsul') as HTMLElement;

        btnKonsul.click();

        this.onResetFormKonsulPasien();
    }

    handleChangePoli(args: any): void {
        if (args) {
            this.id_poli.setValue(args.itemData.id_poli);

            this.urlDokter = this.API_PIS_SETUP_DATA.SETUP_DOKTER.POST_GET_ALL_DOKTER_FOR_LOOKUP_ADMISI + this.id_poli.value;
        }
    }

    handleSelectedDokter(args: any): void {
        this.id_jadwal_dokter.setValue(args.id_jadwal_dokter);
        this.id_dokter_pemeriksa.setValue(args.id_dokter);
    }

    handleCloseModalKonsulPasien(): void {
        let btnCloseModal = document.getElementById('btnCloseModal') as HTMLElement;

        btnCloseModal.click();
    }

    handleSubmitKonsulPasien(FormKonsulPasien: any): void {
        this.konsulService.onPostSaveKonsulRawatJalan(FormKonsulPasien)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Konsul Pasien Berhasil Disimpan')
                        .then(() => {
                            this.onResetFormKonsulPasien();

                            this.handleCloseModalKonsulPasien();
                        })
                }
            });
    }

    onResetFormKonsulPasien(): void {
        this.id_jadwal_dokter.setValue(0);
        this.id_poli.setValue(0);
        this.id_dokter_pemeriksa.setValue(0);
        this.catatan_konsul.setValue("");

        this.DropdownPoli.value = null;
        (document.getElementById('inputGroupfull_name') as HTMLInputElement).value = "";
    }

    get id_register(): AbstractControl { return this.FormKonsulPasien.get('id_register'); }
    get id_dokter_asal(): AbstractControl { return this.FormKonsulPasien.get('id_dokter_asal'); }
    get id_jadwal_dokter(): AbstractControl { return this.FormKonsulPasien.get('id_jadwal_dokter'); }
    get id_poli(): AbstractControl { return this.FormKonsulPasien.get('id_poli'); }
    get id_dokter_pemeriksa(): AbstractControl { return this.FormKonsulPasien.get('id_dokter_pemeriksa'); }
    get catatan_konsul(): AbstractControl { return this.FormKonsulPasien.get('catatan_konsul'); }
}
