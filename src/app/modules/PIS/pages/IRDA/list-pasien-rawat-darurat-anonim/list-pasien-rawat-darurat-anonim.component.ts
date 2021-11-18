import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EditSettingsModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { PostRequestByDynamicFiterModel } from 'src/app/modules/shared/models/Http-Operation/HttpResponseModel';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { IPasienTeradmisiHariIniModel } from '../../../models/IRJA/admisi-pasien-rawat-jalan.model';
import { AdmisiPasienRawatDaruratService } from '../../../services/IRDA/admisi-pasien-rawat-darurat/admisi-pasien-rawat-darurat.service';

@Component({
    selector: 'app-list-pasien-rawat-darurat-anonim',
    templateUrl: './list-pasien-rawat-darurat-anonim.component.html',
    styleUrls: ['./list-pasien-rawat-darurat-anonim.component.css']
})
export class ListPasienRawatDaruratAnonimComponent implements OnInit {

    ButtonNav: ButtonNavModel[];

    FilterColumnDatasource: any[];

    @ViewChild("GridData") GridData: GridComponent;
    GridPageSettings = { pageSizes: true, pageSize: 20 };
    GridDataEditSettings: EditSettingsModel = { allowAdding: false, allowDeleting: false, allowEditing: false };
    GridDatasource: any[] = [];
    GridWrapSettings: object = { wrapMode: 'Content' };
    GridToolbar: any[] = ["Search"];
    GridGroupSettings: object = { showDropArea: false, columns: ['nama_poli'] };

    SelectedData: IPasienTeradmisiHariIniModel;

    constructor(
        private router: Router,
        private utilityService: UtilityService,
        private encryptionService: EncryptionService,
        private admisiRawatDaruratService: AdmisiPasienRawatDaruratService,
    ) { }

    ngOnInit(): void {
        this.ButtonNav = [
            { Id: 'Update_Identitas', Captions: 'Update Identitas', Icons1: 'fa-save fa-sm' }
        ];

        this.FilterColumnDatasource = [
            { text: 'No. Register', value: 'tp.no_register' },
            { text: 'No. Rekam Medis', value: 'tp.no_rekam_medis' },
            { text: 'Nama Pasien', value: "concat(pasien.nama_depan, ' ',pasien.nama_belakang)" },
            { text: 'Catatan', value: 'tp.keterangan_diagnosa' },
            { text: 'Tgl. Masuk', value: 'tp.time_inputed' }
        ];

        this.handlePencarianFilter([]);
    }

    handleClickButtonNav(ButtonId: string): void {
        switch (ButtonId) {
            case 'Update_Identitas':
                this.SelectedData ? this.onNavigateToUpdatePasienTanpaIdentitas(this.SelectedData) : this.utilityService.onShowingCustomAlert('error', 'Oops', 'Data Pasien Belum Dipilih');
                break;
            default:
                break;
        }
    }

    onNavigateToUpdatePasienTanpaIdentitas(Data: any): void {
        Data = this.encryptionService.encrypt(JSON.stringify(Data));

        setTimeout(() => {
            this.router.navigate(['dashboard/PIS/IRDA/update-pasien-rawat-darurat-tanpa-identitas/', Data, 'GRAHCIS']);
        }, 250);
    }

    handlePencarianFilter(args: PostRequestByDynamicFiterModel[]): void {
        this.admisiRawatDaruratService.onGetAllAdmisiPasienRawatDaruratTanpaIdentitas(args)
            .subscribe(
                (result) => {
                    this.GridDatasource = result.data;
                });
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
    }
}
