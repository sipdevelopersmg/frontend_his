import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { GetAllDokterModel, IGetAllDokterModel } from 'src/app/modules/PIS/models/setup-data/setup-dokter.model';
import { SetupDokterService } from 'src/app/modules/PIS/services/setup-data/setup-dokter/setup-dokter.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import GridConfig from './json/daftar-dokter.config.json';

@Component({
    selector: 'app-data-dokter',
    templateUrl: './data-dokter.component.html',
    styleUrls: ['./data-dokter.component.css']
})
export class DataDokterComponent implements OnInit {

    GridConfig = GridConfig;

    GridDatasource: Observable<GetAllDokterModel[]> = this.setupDokterService.GridDaftarDokter$;
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];
    GridPageSettings = { pageSizes: false, pageSize: 12 };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IGetAllDokterModel;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private setupDokterService: SetupDokterService,
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
                this.router.navigateByUrl('dashboard/PIS/setup-data/setup-dokter/input-dokter');
                break;
            case 'edit':
                const id_person = this.encryptionService.encrypt(JSON.stringify(this.SelectedData['id_person']));
                this.router.navigate(['dashboard/PIS/setup-data/setup-dokter/edit-dokter/', id_person, "GRAHCIS"]);
                break;
            case 'delete':
                this.DeleteData(this.SelectedData['id_dokter'], this.SelectedData['is_active']);
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
        this.setupDokterService.onGetAllDokter();
    }

    DeleteData(id_dokter: number, is_active: boolean): void {
        this.setupDokterService.onDeleteDokter(id_dokter, !is_active)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Status Dokter Berhasil Diubah')
                        .then(() => {
                            this.GetAllData();

                            this.onSetToolbarGrid(!is_active);
                        })
                }
            })
    }
}
