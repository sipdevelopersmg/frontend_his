import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel } from '@syncfusion/ej2-angular-grids';
import { Observable } from 'rxjs';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { GetAllPasienIRJAModel, IPasienIRJAGetAllModel } from 'src/app/modules/PIS/models/IRJA/daftar-pasien.model';
import { DaftarPasienRawatJalanService } from 'src/app/modules/PIS/services/IRJA/daftar-pasien/daftar-pasien-rawat-jalan.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-list-pasien-rawat-jalan',
    templateUrl: './list-pasien-rawat-jalan.component.html',
    styleUrls: ['./list-pasien-rawat-jalan.component.css']
})
export class ListPasienRawatJalanComponent implements OnInit {

    FilterColumnDatasource: any[] = [
        { text: 'No. Identitas', value: 'per.no_identitas' },
        { text: 'No. Rekam Medis', value: 'p.no_rekam_medis' },
        { text: 'Nama Pasien', value: "per.nama_depan || coalesce(per.nama_belakang, '')" },
        { text: 'Alamat Pasien', value: 'ap.alamat_lengkap' },
        { text: 'No. Handphone', value: 'kp.hand_phone' },
        { text: 'Tgl. Lahir', value: 'per.tanggal_lahir' },
    ];

    GridData: MolGridComponent = null;
    GridPageSettings = { pageSizes: false, pageSize: 12 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: true, allowDeleting: true, allowEditing: true };
    GridDatasource: Observable<GetAllPasienIRJAModel[]> = this.daftarPasienRawatJalanService.GridDaftarPasienIrja$;

    /**
     * Berisi Data Yang selected dari dalam grid
     * @Object Single Object
    */
    SelectedData: IPasienIRJAGetAllModel;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private utilityHelperService: UtilityHelperService,
        private daftarPasienRawatJalanService: DaftarPasienRawatJalanService
    ) { }

    ngOnInit(): void {
    }

    handlePencarianFilter(args: any[]): void {
        this.daftarPasienRawatJalanService.onGetAllPasienIrjaByDynamicFilter(args);
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
}
