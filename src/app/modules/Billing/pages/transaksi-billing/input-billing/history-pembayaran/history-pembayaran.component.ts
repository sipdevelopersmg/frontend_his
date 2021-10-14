import { Component, Input, OnInit } from '@angular/core';
import { TransBillingService } from 'src/app/modules/Billing/services/trans-billing/trans-billing.service';
import { MolGridComponent } from 'src/app/modules/shared/components/molecules/grid/grid/grid.component';
import * as Config from './json/history-pembayaran.config.json';

@Component({
    selector: 'app-history-pembayaran',
    templateUrl: './history-pembayaran.component.html',
    styleUrls: ['./history-pembayaran.component.css']
})
export class HistoryPembayaranComponent implements OnInit {

    @Input('OffcanvasRiwayatTitle') OffcanvasRiwayatTitle: string;

    GridConfig = Config;
    GridDatasource: any[] = [];
    private GridData: MolGridComponent = null;

    constructor(
        public transBillingService: TransBillingService
    ) { }

    ngOnInit(): void {

    }

    handleOpenRiwayatPembayaran(): void {
        let btnRiwayatItem = document.getElementById('btnRiwayatItem') as HTMLElement;

        btnRiwayatItem.click();
    }

    InitalizedGrid(component: MolGridComponent) {
        this.GridData = component;
    }

    handleSelectedRow(args: any): void {

    }
}
