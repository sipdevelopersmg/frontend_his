import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { IAuthenticationResponseModel } from 'src/app/modules/auth/models/authentication.model';
import { SetupUserService } from 'src/app/modules/core/services/setup-user/setup-user.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SetupKasirIrjaService } from '../../../services/kasir/kasir-rawat-jalan/setup-kasir-irja.service';

@Component({
    selector: 'app-setup-setoran-kasir-irja',
    templateUrl: './setup-setoran-kasir-irja.component.html',
    styleUrls: ['./setup-setoran-kasir-irja.component.css']
})
export class SetupSetoranKasirIrjaComponent implements OnInit {

    @ViewChild('GridDataSetoran') GridDataSetoran: GridComponent;
    GridSetoranDatasource: any[];
    GridSetoranToolbar: any[];

    FormSetoran: FormGroup;

    UserData: IAuthenticationResponseModel;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private setupUserService: SetupUserService,
        private setupKasirRawatJalanService: SetupKasirIrjaService,
    ) { }

    ngOnInit(): void {
        this.GridSetoranToolbar = [
            { text: 'Setoran Kasir', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
            'Search'
        ];

        this.onSetFormSetoranKasirAttributes();

        this.onGetRiwayatSetoranKasir();
    }

    onSetFormSetoranKasirAttributes(): void {

        this.UserData = JSON.parse(localStorage.getItem('UserData'));

        this.FormSetoran = this.formBuilder.group({
            nama_kasir: [this.UserData.full_name, []],
            waktu_buka_kasir: ["", []],
            tambahan_setoran: [0, []],
            keterangan_setoran: ["", []],
        });
    }

    onGetRiwayatSetoranKasir(): void {
        this.setupKasirRawatJalanService.onGetHistorySetoranKasir()
            .subscribe((result) => {
                this.GridSetoranDatasource = result.data;
            })
    }

    handleSelectedRowSetoran(args: any): void {

    }

    handleToolbarClickSetoran(args: any): void {
        const item = args.item.id;

        switch (item) {
            case 'add':
                this.handleOpenModalSetoranKasir();
                break;
            default:
                break;
        }
    }

    handleOpenModalSetoranKasir(): void {
        let btnModalSetoranKasir = document.getElementById('btnModalSetoranKasir') as HTMLElement;
        btnModalSetoranKasir.click();

        this.setupKasirRawatJalanService.onGetSaldoKasirForSetoran()
            .subscribe((result) => {
                let waktu_buka_kasir = this.utilityService.onFormatDate(result['waktu_buka_kasir'], 'Do MMMM yyyy HH:mm:ss');

                this.waktu_buka_kasir.setValue(waktu_buka_kasir);
            })
    }

    handleSubmitModalSetoranKasir(FormBukaKasir: any): void {
        this.setupKasirRawatJalanService.onPostSaveSetoranKasir(FormBukaKasir.tambahan_setoran, FormBukaKasir.keterangan_setoran)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.onShowingCustomAlert('success', 'Success', 'Setoran Kasir Berhasil')
                        .then(() => {
                            this.handleCloseModalSetoranKasir();

                            this.handleResetFormSetoranKasir();

                            this.onGetRiwayatSetoranKasir();
                        })
                }
            })
    }

    handleResetFormSetoranKasir(): void {
        this.FormSetoran.reset();

        this.nama_kasir.setValue(this.UserData.full_name);
        this.waktu_buka_kasir.setValue("");
        this.tambahan_setoran.setValue(0);
        this.keterangan_setoran.setValue("");
    }

    handleCloseModalSetoranKasir(): void {
        let btnCloseModalSetoranKasir = document.getElementById('btnCloseModalSetoranKasir') as HTMLElement;
        btnCloseModalSetoranKasir.click();
    }

    get nama_kasir(): AbstractControl { return this.FormSetoran.get('nama_kasir') }
    get waktu_buka_kasir(): AbstractControl { return this.FormSetoran.get('waktu_buka_kasir') }
    get tambahan_setoran(): AbstractControl { return this.FormSetoran.get('tambahan_setoran') }
    get keterangan_setoran(): AbstractControl { return this.FormSetoran.get('keterangan_setoran') }
}
