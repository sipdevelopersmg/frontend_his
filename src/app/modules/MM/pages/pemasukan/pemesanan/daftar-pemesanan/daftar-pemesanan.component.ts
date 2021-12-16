import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PemesananService } from 'src/app/modules/MM/services/pemasukan/pemesanan/pemesanan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'
@Component({
    selector: 'app-daftar-pemesanan',
    templateUrl: './daftar-pemesanan.component.html',
    styleUrls: ['./daftar-pemesanan.component.css']
})
export class DaftarPemesananComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
        { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
    ];

    GridDataToolbar = [
        { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
        { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
        'Search'
    ];

    FilterColumnDatasource: any[] = [
        { text: 'No. Kontrak', value: 'tks.nomor_kontrak' },
        { text: 'Judul Kontrak', value: 'tks.judul_kontrak' },
    ];

    GridConfig = GridConfig;
    SelectedData
    dataSource: any;

    GridData: MolGridComponent = null;

    constructor(
        private router: Router,
        private encryptionService: EncryptionService,
        public pemesananService: PemesananService,
    ) { }

    ngOnInit(): void {
        this.pemesananService.onInitList();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.handlePencarianFilter([]);
        }, 1);
    }

    handlePencarianFilter(args: any) {
        this.pemesananService.onGetAllByParamsSource(args);
        this.GridData.Grid.refresh();
    }

    handleinitialized(component: MolGridComponent) {
        this.GridData = component
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/MM/pemesanan/input-pemesanan');
                break;
            case 'Edit':
                const pemesanan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.pemesanan_id));
                this.router.navigate(['dashboard/MM/pemesanan/view-pemesanan', pemesanan_id, "GRAHCIS"]);
                break;
            case 'Delete':
                // this.DeleteData(this.SelectedData.id_person, this.SelectedData['is_active']);
                break;
            default:
                break;
        }
    }

    handleSelectedRow(args: any): void {
        this.SelectedData = args.data;
        console.log(this.SelectedData)
    }

    handleRowDataBound(args: any): void {
        let status_transaksi = args.data.status_transaksi;

        if (status_transaksi == "VALIDATED") {
            args.row.classList.add('e-validation-background');
        }

        if (status_transaksi == "CANCELED") {
            args.row.classList.add('e-canceled-background');
        }

        if (status_transaksi == "CLOSED") {
            args.row.classList.add('e-closed-background');
        }
    }

}
