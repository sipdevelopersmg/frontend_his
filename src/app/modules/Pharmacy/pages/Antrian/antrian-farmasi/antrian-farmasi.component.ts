import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { KanbanCardModel, KanbanColumnModel } from 'src/app/modules/shared/models/KanbanCardModel.model';

@Component({
    selector: 'app-antrian-farmasi',
    templateUrl: './antrian-farmasi.component.html',
    styleUrls: ['./antrian-farmasi.component.css'],
})
export class AntrianFarmasiComponent implements OnInit {

    Columns: KanbanColumnModel[];

    Data: KanbanCardModel[];

    ButtonNav: ButtonNavModel[];

    constructor() {
        this.ButtonNav = [
            { Id: "MoveItem", Captions: "Move Item", Icons1: "fa-arrows-alt" }
        ]
    }

    ngOnInit(): void {
        this.Columns = [
            {
                Id: 1,
                HeaderText: "Data",
                HeaderBackgroundColor: "#0251cc",
                ColumnIcon: "fa-calendar",
                KeyField: "Data",
                ConnectedTo: ["SiapDiracik"],
                Data: [
                    {
                        Id: "DETS-1", Status: "Data", KodeResep: "PCR001", NamaPasien: "Fatur Gautama S", NamaDokter: "dr. Anastasia Nadia", Waktu: new Date("2021-07-07 16:10:00"),
                        DetailResep: [
                            { Id: "PCR001-DET1", KodeResep: "PCR001", NamaObat: "PARACETAMOL 250 MG", KodeObat: "0B001", Satuan: "PAK", Qty: 15 },
                            { Id: "PCR001-DET2", KodeResep: "PCR001", NamaObat: "ASAM MEFENAMAT 250 MG", KodeObat: "0B002", Satuan: "STRIP", Qty: 2 },
                        ]
                    },
                    {
                        Id: "DETS-2", Status: "Data", KodeResep: "PCR002", NamaPasien: "Lalisa Manoban", NamaDokter: "dr. Anastasia Nadia", Waktu: new Date("2021-07-07 16:19:00"),
                        DetailResep: [
                            { Id: "PCR002-DET1", KodeResep: "PCR002", NamaObat: "PARACETAMOL 250 MG", KodeObat: "0B001", Satuan: "PAK", Qty: 15 },
                            { Id: "PCR002-DET2", KodeResep: "PCR002", NamaObat: "ASAM MEFENAMAT 250 MG", KodeObat: "0B002", Satuan: "STRIP", Qty: 2 },
                        ]
                    }
                ],
            },
            {
                Id: 2,
                HeaderText: "Antrian",
                HeaderBackgroundColor: "#ea9713",
                ColumnIcon: "fa-calendar-check",
                ConnectedTo: ["ProsesBilling"],
                KeyField: "SiapDiracik",
                Data: [
                    {
                        Id: "DETS-3", Status: "SiapDiracik", KodeResep: "PCR004", NamaPasien: "Triastartya M", NamaDokter: "dr. Nanda Sonia", Waktu: new Date("2021-07-07 16:02:00"),
                        DetailResep: [
                            { Id: "PCR004-DET1", KodeResep: "PCR004", NamaObat: "PARACETAMOL 250 MG", KodeObat: "0B001", Satuan: "PAK", Qty: 15 }
                        ]
                    },
                ],
            },
            {
                Id: 3,
                HeaderText: "Proses Billing",
                HeaderBackgroundColor: "#8e4399",
                ColumnIcon: "fa-file-invoice",
                KeyField: "ProsesBilling",
                ConnectedTo: ["SedangDiracik"],
                Data: [
                    {
                        Id: "DETS-4", Status: "ProsesBilling", KodeResep: "PCR006", NamaPasien: "Wawan Chahyo", NamaDokter: "dr. Nanda Sonia", Waktu: new Date("2021-07-07 16:03:00"),
                        DetailResep: [
                            { Id: "PCR006-DET1", KodeResep: "PCR006", NamaObat: "PARACETAMOL 250 MG", KodeObat: "0B001", Satuan: "PAK", Qty: 15 }
                        ]
                    },
                ],
            },
            {
                Id: 4,
                HeaderText: "Siap Diserahkan",
                HeaderBackgroundColor: "#63ba3c",
                ColumnIcon: "fa-spinner",
                KeyField: "SedangDiracik",
                ConnectedTo: [],
                Data: [
                    {
                        Id: "DETS-5", Status: "SedangDiracik", KodeResep: "PCR005", NamaPasien: "Andre Kurniawan", NamaDokter: "dr. Nanda Sonia", Waktu: new Date("2021-07-07 16:04:00"),
                        DetailResep: [
                            { Id: "PCR005-DET1", KodeResep: "PCR005", NamaObat: "PARACETAMOL 250 MG", KodeObat: "0B001", Satuan: "PAK", Qty: 15 }
                        ]
                    },
                ],
            }
        ];
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

        console.log(this.Columns[0]["Data"]);

        this.Columns[1]["Data"].push(item);

        console.log(this.Columns[1]["Data"]);
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
