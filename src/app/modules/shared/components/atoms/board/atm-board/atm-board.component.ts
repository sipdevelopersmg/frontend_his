import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { KanbanCardModel } from 'src/app/modules/shared/models/KanbanCardModel.model';

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

    HideBoard: boolean = false;

    Search: string;

    @Input("FilterPencarianGlobal") FilterPencarianGlobal: string;

    constructor() { }

    ngOnInit(): void {
        this.onSortCardByDate();
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

    onMarkResepAsComplete(Id: string, CardBodyData: KanbanCardModel[]) {
        let index = CardBodyData.findIndex(item => item.Id == Id);

        CardBodyData.splice(index, 1);

        return CardBodyData;
    }

    onMarkResepSudahDilayani(Id: string, CardBodyData: KanbanCardModel[]) {
        console.log(Id);

        // let index = CardBodyData.findIndex(item => item.Id == Id);

        // CardBodyData.splice(index, 1);

        // return CardBodyData;
    }

    onChangeSearchFilter() {
        console.log(this.FilterPencarianGlobal);
    }
}
