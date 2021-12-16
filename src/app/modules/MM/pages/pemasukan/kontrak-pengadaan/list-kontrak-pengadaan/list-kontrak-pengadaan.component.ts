import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InputKontrakPengadaanService } from 'src/app/modules/MM/services/pemasukan/kontrak-pengadaan/input-kontrak-pengadaan/input-kontrak-pengadaan.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import * as GridConfig from './json/grid.config.json'

@Component({
    selector: 'app-list-kontrak-pengadaan',
    templateUrl: './list-kontrak-pengadaan.component.html',
    styleUrls: ['./list-kontrak-pengadaan.component.css']
})
export class ListKontrakPengadaanComponent implements OnInit, AfterViewInit {

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
        { text: 'No. Kontrak SPJB', value: 'tks.nomor_kontrak_spjb' },
        { text: 'No. Kontrak', value: 'tks.nomor_kontrak' },
        { text: 'Supplier', value: 'sup.nama_supplier' },
        { text: 'Judul Kontrak', value: 'tks.judul_kontrak' },
    ];

    GridConfig = GridConfig;
    SelectedData: any;
    dataSource: any;

    @ViewChild('GridData') GridData: MolGridComponent;

    constructor(
        private router: Router,
        private encryptionService: EncryptionService,
        public inputKontrakPengadaanService: InputKontrakPengadaanService,
    ) { }

    ngOnInit(): void {
        // this.inputKontrakPengadaanService.onInitList();
    }

    ngAfterViewInit(): void {
        this.inputKontrakPengadaanService.onGetAllByParamsSource([]);

        this.inputKontrakPengadaanService.dataSource
            .subscribe((result) => {
                if (result.length > 0) {
                    this.GridData.Grid.dataSource = result;
                    this.GridData.Grid.refresh();
                }
            });
    }

    handlePencarianFilter(args: any): void {
        this.inputKontrakPengadaanService.onGetAllByParamsSource(args);

        this.inputKontrakPengadaanService.dataSource
            .subscribe((result) => {
                if (result.length > 0) {
                    this.GridData.Grid.dataSource = result;
                    this.GridData.Grid.refresh();
                }
            });
    }

    handleinitialized(component: MolGridComponent): void {
        this.GridData = component
    }

    handleClickButtonNav(args: any): void {
        switch (args) {
            case 'Add':
                this.router.navigateByUrl('dashboard/MM/kontrak-pengadaan/input-kontrak-pengadaan');
                break;
            case 'Edit':
                const kontrak_id = this.encryptionService.encrypt(JSON.stringify(this.SelectedData.kontrak_id));
                this.router.navigate(['dashboard/MM/kontrak-pengadaan/view-kontrak-pengadaan', kontrak_id, "GRAHCIS"]);
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

}
