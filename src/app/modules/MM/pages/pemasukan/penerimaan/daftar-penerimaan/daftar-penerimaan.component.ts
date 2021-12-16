import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PenerimaanService } from 'src/app/modules/MM/services/pemasukan/penerimaan/penerimaan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'

@Component({
    selector: 'app-daftar-penerimaan',
    templateUrl: './daftar-penerimaan.component.html',
    styleUrls: ['./daftar-penerimaan.component.css']
})

export class DaftarPenerimaanComponent implements OnInit {

    ButtonNav: ButtonNavModel[] = [
        { Id: 'Add', Captions: 'Add', Icons1: 'fa-plus fa-sm' },
        { Id: 'Edit', Captions: 'Lihat Detail', Icons1: 'fa-edit fa-sm' }
    ];

    GridDataToolbar = [
        // { text: 'Add', tooltipText: 'Add', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
        // { text: 'Edit', tooltipText: 'Edit', prefixIcon: 'fas fa-edit fa-sm', id: 'edit' },
        // { text: 'Detail', tooltipText: 'Detail', prefixIcon: 'fas fa-info-circle fa-sm', id: 'detail' },
        // 'Search'
    ];

    FilterColumnDatasource: any[] = [
        { text: 'No. Penerimaan', value: 'tp.namor_penerimaan' },
        { text: 'Jenis Penerimaan', value: 'msjp.jenis_penerimaan' },
        { text: 'Nama Stockroom', value: 'mss.nama_stockroom' },
        { text: 'No Pemesanan', value: 'po.nomor_pemesanan' },
        { text: 'Status', value: 'tp.status_transaksi' },
    ];

    GridConfig = GridConfig;
    SelectedData: any;
    dataSource: any;

    GridData: MolGridComponent = null;

    constructor(
        private router: Router,
        private encryptionService: EncryptionService,
        public penerimaanService: PenerimaanService,
    ) { }

    ngOnInit(): void {
        this.penerimaanService.onInitList();
    }

    handlePencarianFilter(args: any) {
        this.penerimaanService.onGetAllByParamsSource(args);
        this.GridData.Grid.refresh();
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.handlePencarianFilter([]);
        }, 1);
    }

    handleinitialized(component: MolGridComponent) {
        this.GridData = component
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/MM/penerimaan/input-penerimaan');
                break;
            case 'Edit':
                const penerimaan_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.penerimaan_id));
                this.router.navigate(['dashboard/MM/penerimaan/view-penerimaan', penerimaan_id, "GRAHCIS"]);
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
    }

}
