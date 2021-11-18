import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { GetAllPasienIRJAModel, IPasienIRJAGetAllModel } from '../../../models/IRJA/daftar-pasien.model';
import { DaftarPasienRawatJalanService } from '../../../services/IRJA/daftar-pasien/daftar-pasien-rawat-jalan.service';
import GridConfig from './json/daftar-pasien.config.json';

@Component({
    selector: 'app-daftar-pasien',
    templateUrl: './daftar-pasien.component.html',
    styleUrls: ['./daftar-pasien.component.css']
})
export class DaftarPasienComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
        { Id: 'Edit', Captions: 'Edit', Icons1: 'fa-edit fa-sm' },
        { Id: 'Delete', Captions: 'Ubah Status', Icons1: 'fa-sync-alt fa-sm' },
    ];

    FilterColumnDatasource: any[] = [
        { text: 'No. Identitas', value: 'per.no_identitas' },
        { text: 'No. Rekam Medis', value: 'p.no_rekam_medis' },
        { text: 'Nama Pasien', value: "per.nama_depan || coalesce(per.nama_belakang, '')" },
        { text: 'Alamat Pasien', value: 'ap.alamat_lengkap' },
        { text: 'No. Handphone', value: 'kp.hand_phone' },
        { text: 'Tgl. Lahir', value: 'per.tanggal_lahir' },
    ];

    GridConfig = GridConfig;

    GridDatasource: Observable<GetAllPasienIRJAModel[]> = this.daftarPasienRawatJalanService.GridDaftarPasienIrja$;
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridPageSettings = { pageSizes: true, pageSize: 20 };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IPasienIRJAGetAllModel;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private utilityHelperService: UtilityHelperService,
        private daftarPasienRawatJalanService: DaftarPasienRawatJalanService
    ) { }

    ngOnInit(): void {
        this.GetAllData();
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/PIS/pendaftaran-pasien-baru');
                break;
            case 'Edit':
                const id_person = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.id_person));
                this.router.navigate(['dashboard/PIS/edit-pasien/', id_person, "GRAHCIS"]);
                break;
            case 'Delete':
                this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
    }

    handlePencarianFilter(args: any[]): void {
        this.daftarPasienRawatJalanService.onGetAllPasienIrjaByDynamicFilter(args);
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.onSetButtonNav(args.data.is_active);

        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleClickCommandGrid(args: any): void {
        console.log(args);
    }

    /** Untuk identifikasi keyboard down pada grid */
    handleLoadGrid(args: any): void {
        document.getElementsByClassName('e-grid')[0].addEventListener('keydown', this.KeyDownHandler.bind(this));
    }

    KeyDownHandler(event: KeyboardEvent) {
        if (event.keyCode === 13) {
            console.log('Enter Has Been Pressed');
        };
        if (event.keyCode === 46) {
            console.log('Delete Key Has Been Pressed');
        };
        if (event.keyCode === 40) {
            console.log('Delete Key Has Been Pressed');
        }
    }

    onSetButtonNav(is_active: boolean): void {
        if (is_active) {
            this.ButtonNav = [
                { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
                { Id: 'Edit', Captions: 'Edit', Icons1: 'fa-edit fa-sm' },
                { Id: 'Delete', Captions: 'Ubah Status', Icons1: 'fa-sync-alt fa-sm' },
            ];
        } else {
            this.ButtonNav = [
                { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
                { Id: 'Delete', Captions: 'Ubah Status', Icons1: 'fa-sync-alt fa-sm' },
            ];
        }
    }

    GetAllData(): void {
        this.daftarPasienRawatJalanService.onGetAllPasienIrjaByDynamicFilter([]);
    }

    DeleteData(id_person: number, is_active: boolean): void {
        this.daftarPasienRawatJalanService.onDeletePasienIrja(id_person, !is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Pasien Berhasil Diubah')
                        .then(() => {
                            this.GetAllData();

                            this.onSetButtonNav(!is_active);
                        });
                }
            })
    }
}
