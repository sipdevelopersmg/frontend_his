import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { ResepDokterService } from 'src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { KanbanCardModel, KanbanColumnModel } from 'src/app/modules/shared/models/KanbanCardModel.model';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { isFormularium } from 'src/environments/environment';

@Component({
    selector: 'app-antrian-farmasi',
    templateUrl: './antrian-farmasi.component.html',
    styleUrls: ['./antrian-farmasi.component.css'],
})

export class AntrianFarmasiComponent implements OnInit {

    Columns: KanbanColumnModel[];

    Data: KanbanCardModel[];

    ButtonNav: ButtonNavModel[];

    constructor(
        private socket: Socket,
        private router: Router,
        private encryptionService:EncryptionService,
        public resepDokterService: ResepDokterService,
    ) { }

    ngOnInit(): void {
        this.resepDokterService.onGetAntrian();
        this.onSocketAntrian();
        this.onSocketPembayaran();
        this.onSocketResep();
        this.ButtonNav = [
            { Id: 'buatResep', Captions: 'Buat Resep', Icons1: 'fa-file-prescription' },
        ];
    }

    onSocketResep(): any {
        return this.socket.fromEvent('resep-callback')
            .subscribe((_result) => {
                console.log(_result)
                this.resepDokterService.onGetAntrian();
            });
    }

    onSocketAntrian(): any {
        return this.socket.fromEvent('antrian-callback')
            .subscribe((_result) => {
                console.log(_result)
                this.resepDokterService.onGetAntrian();
            });
    }

    onSocketPembayaran(): any {
        return this.socket.fromEvent('pembayaran-callback')
            .subscribe((_result) => {
                console.log(_result)
                this.resepDokterService.onGetAntrian();
            });
    }

    onClickButtonNav(args: any) {
        switch (args) {
            case "buatResep":
                this.router.navigate(['dashboard/Pharmacy/transaksi-obat/input-resep-irja']);
                break;
            default:
                break;
        }
    }

    onTransferItem() {
        let item: KanbanCardModel;

        item = this.Columns[0]["Data"][0];

        this.Columns[0]["Data"].splice(0, 1);

        this.Columns[1]["Data"].push(item);
    }

    onTransferItemUsingDataDetailId(StatusBoardAwal: string, StatusBoardAkhir: string, DataDetailId: string) {
        let item: KanbanCardModel;

        // ** Petakan Column By Board Id Awal
        let From = this.Columns.filter((item) => {
            return item.KeyField == StatusBoardAwal;
        });

        // ** Petakan Column By Board Id Akhir
        let To = this.Columns.filter((item) => {
            return item.KeyField == StatusBoardAkhir;
        });

        // ** Dapatkan Board Awal Data[i]["Id"] 
        let BoardAwalDataIndex = From[0]["Data"].findIndex((item) => {
            return item.Id == DataDetailId;
        });

        if (BoardAwalDataIndex !== -1) {
            // ** Isi Item 
            item = From[0]["Data"][BoardAwalDataIndex];

            // ** Hapus Board Awal 
            From[0]["Data"].splice(BoardAwalDataIndex, 1);

            // ** Isi Column Board Akhir
            To[0]["Data"].push(item);

            item = {} as KanbanCardModel;
        }
    }

    handePindahAntrian(Id) {
        // this.resepDokterService.generadeNoAntrian(noRegister).subscribe((result) => {
        //     this.resepDokterService.onGetAntrian();
        // });
        console.log('pindah antrian');
        const id = this.encryptionService.encrypt(JSON.stringify(Id));
        this.router.navigate(['dashboard/Pharmacy/transaksi-obat/telaah-resep-irja', id, "GRAHCIS"]);
    }

    handleSedangDiLayani(Id){
        console.log('sedang di layani');
        const id = this.encryptionService.encrypt(JSON.stringify(Id));
        if(isFormularium){
            this.router.navigate(['dashboard/Pharmacy/transaksi-obat-formularium/transaksi-obat-formularium-irja', id, "GRAHCIS"]);
        }else{
            this.router.navigate(['dashboard/Pharmacy/transaksi-obat/transaksi-obat-irja', id, "GRAHCIS"]);
        }
    }
}
