import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KanbanCardModel } from 'src/app/modules/shared/models/KanbanCardModel.model';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { Router } from '@angular/router';
import { ResepDokterService } from 'src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service';
import { TransaksiObatIrjaService } from 'src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'atm-board',
    templateUrl: './atm-board.component.html',
    styleUrls: ['./atm-board.component.css']
})
export class AtmBoardComponent implements OnInit {

    @Input("CdkDropListId") CdkDropListId: any;

    @Input("CardHeaderBackgroundColor") CardHeaderBackgroundColor: string;
    @Input("CardHeaderIcon") CardHeaderIcon: string;
    @Input("CardHeaderCaption") CardHeaderCaption: string;
    @Input("CardBodyData") CardBodyData: KanbanCardModel[];

    @Input("ConnectedTo") ConnectedTo: Object[];

    @Output("onClickedCard") onClickedCard = new EventEmitter();

    @Output("PindahKeAntrian") PindahKeAntrian = new EventEmitter();
    
    HideBoard: boolean = false;

    Search: string;

    @Input("FilterPencarianGlobal") FilterPencarianGlobal: string;

    constructor(
        private router: Router,
        private encryptionService: EncryptionService,
        public resepDokterService: ResepDokterService,
        public transaksiObatIrjaService: TransaksiObatIrjaService,
        private utilityService: UtilityService,

    ) { }

    ngOnInit(): void {
        // this.onSortCardByDate();
    }

    onSortCardByDate() {
        this.CardBodyData.sort((a, b) => { return new Date(b.Waktu).getTime() - new Date(a.Waktu).getTime() });
    }

    onClickCard(args: any) {

    }

    drop(event: CdkDragDrop<string[]>) {

        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex
            );
        };

        let id = event.container.id;
        let data = event.container.data;

        this.onChangeStatusAfterDrop(id, data);

        this.onSortCardByDate();
    }

    onChangeStatusAfterDrop(Id: string, Data: Object[]) {
        Data.forEach((item) => {
            item["Status"] = Id;
        });

        return Data;
    }

    onSearchFilter(FilterPencarian: string) {
        this.Search = FilterPencarian;
    }

    onMarkResepAsComplete(Id: number, CardBodyData: KanbanCardModel[]) {
        this.transaksiObatIrjaService.obatDiserahakan(Id).subscribe((result) => {
            this.utilityService.onShowingCustomAlert('success', 'Data Berhasil Diserahkan', result.message)
                .then(() => {
                    this.resepDokterService.onGetAntrian();
                });
        });
    }

    onMarkResepSudahDilayani(Id: string, CardBodyData: KanbanCardModel[]) {
        const id = this.encryptionService.encrypt(JSON.stringify(Id));
        this.router.navigate(['dashboard/Pharmacy/transaksi-obat/transaksi-obat-irja', id, "GRAHCIS"]);
    }

    onPindahKeAntrian(NoRegister: string) {
        this.PindahKeAntrian.emit(NoRegister);
    }

    onChangeSearchFilter() {
        console.log(this.FilterPencarianGlobal);
    }
}
