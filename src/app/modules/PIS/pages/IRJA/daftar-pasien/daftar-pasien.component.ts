import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
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

    GridConfig = GridConfig;

    GridDatasource: Observable<GetAllPasienIRJAModel[]> = this.daftarPasienRawatJalanService.GridDaftarPasienIrja$;
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[] = [];
    GridPageSettings = { pageSizes: false, pageSize: 12 };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IPasienIRJAGetAllModel;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private daftarPasienRawatJalanService: DaftarPasienRawatJalanService
    ) { }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Ubah Status', tooltipText: 'Delete', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.GetAllData();
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
        this.onSetToolbarGrid(args.data.is_active);

        this.SelectedData = args.data;
    }

    handleActionComplete(event: any): void {
        // console.log(event);
    }

    handleToolbarClick(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.router.navigateByUrl('dashboard/PIS/IRJA/pendaftaran-pasien-baru');
                break;
            case 'edit':
                const id_person = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.id_person));
                this.router.navigate(['dashboard/PIS/IRJA/edit-pasien/', id_person, "GRAHCIS"]);
                break;
            case 'delete':
                this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
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

    onSetToolbarGrid(is_active: boolean): void {
        if (is_active) {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
                { text: 'Ubah Status', tooltipText: 'Delete', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'delete' },
                'Search'
            ];
        } else {
            this.GridDataToolbar = [
                { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
                { text: 'Ubah Status', tooltipText: 'Delete', prefixIcon: 'fas fa-sync-alt fa-sm', id: 'delete' },
                'Search'
            ];
        }
    }

    GetAllData(): void {
        this.daftarPasienRawatJalanService.onGetAllPasienIrja();
    }

    DeleteData(id_person: number, is_active: boolean): void {
        this.daftarPasienRawatJalanService.onDeletePasienIrja(id_person, !is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Pasien Berhasil Diubah')
                        .then(() => {
                            this.GetAllData();

                            this.onSetToolbarGrid(!is_active);
                        });
                }
            })
    }
}
