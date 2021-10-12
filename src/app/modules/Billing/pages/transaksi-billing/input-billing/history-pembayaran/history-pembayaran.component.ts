import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-history-pembayaran',
    templateUrl: './history-pembayaran.component.html',
    styleUrls: ['./history-pembayaran.component.css']
})
export class HistoryPembayaranComponent implements OnInit {

    @Input('OffcanvasRiwayatTitle') OffcanvasRiwayatTitle: string;

    constructor() { }

    ngOnInit(): void {
    }

    handleOpenRiwayatPembayaran(): void {
        let btnRiwayatItem = document.getElementById('btnRiwayatItem') as HTMLElement;

        btnRiwayatItem.click();
    }
}
