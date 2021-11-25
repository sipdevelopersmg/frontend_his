import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
import { ResepDokterService } from 'src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { KanbanCardModel, KanbanColumnModel } from 'src/app/modules/shared/models/KanbanCardModel.model';
import { NotificationService } from 'src/app/modules/shared/services/notification.service';

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
        public resepDokterService:ResepDokterService,
        private socket:Socket,
    ) {
        this.ButtonNav = [
            // { Id: "MoveItem", Captions: "Move Item", Icons1: "fa-arrows-alt" }
        ]
    }

    ngOnInit(): void {
        this.resepDokterService.onGetAntrian();
        this.onSocketAntrian();
        this.onSocketPembayaran();
    }

    onSocketAntrian(): any {
        return this.socket.fromEvent('antrian-callback')
            .subscribe((_result) => {
                this.resepDokterService.onGetAntrian();
            });
    }

    onSocketPembayaran(): any {
        return this.socket.fromEvent('pembayaran-callback')
            .subscribe((_result) => {
                this.resepDokterService.onGetAntrian();
            });
    }

    onClickButtonNav(args: any) {
        switch (args) {
            case "MoveItem":
                this.onTransferItemUsingDataDetailId("Data", "SiapDiracik", "DETS-1");
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
}
