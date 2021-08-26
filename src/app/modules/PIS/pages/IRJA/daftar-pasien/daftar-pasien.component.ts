import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { OrgTabsComponentComponent } from 'src/app/modules/shared/components/organism/tabs/org-tabs-component/org-tabs-component.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
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

    /**
     * Variable untuk menentukan tap berada di posisi mana 
     * @value data | input
    */
    TabId: string = 'Data';

    @ViewChild('OrgTabsRef', { static: true }) OrgTabsRef: OrgTabsComponentComponent;

    GridDatasource: Observable<GetAllPasienIRJAModel[]> = this.daftarPasienRawatJalanService.GridDaftarPasienIrja$;
    private GridData: MolGridComponent = null;
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDataToolbar: any[];
    GridPageSettings = { pageSizes: false, pageSize: 12 };

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IPasienIRJAGetAllModel;

    constructor(
        private router: Router,
        private encryptionService: EncryptionService,
        private daftarPasienRawatJalanService: DaftarPasienRawatJalanService
    ) { }

    ngOnInit(): void {
        this.GridDataToolbar = [
            { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
            { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
            { text: 'Delete', tooltipText: 'Delete', prefixIcon: 'fas fa-trash-alt fa-sm', id: 'delete' },
            'Search'
        ];

        this.GetAllData();
    }

    handleSelectedTabId(TabId: string): void {
        this.TabId = TabId;

        if (TabId == 'Data') {
            this.GetAllData();
        }
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {
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
            case 'detail':
                // this.setViewForm();
                break;
            case 'delete':
                // this.DeleteData();
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

    GetAllData(): void {
        this.daftarPasienRawatJalanService.onGetAllPasienIrja();
    }
}
