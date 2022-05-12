import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CardDashboard {
    id: number;
    title: string;
    value: string;
    satuan: string;
}

@Component({
    selector: 'app-card-dashboard',
    templateUrl: './card-dashboard.component.html',
    styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

    @Input('Card') Card: CardDashboard;

    @Output('handleClick') handleClick = new EventEmitter<CardDashboard>();

    constructor() { }

    ngOnInit(): void {
    }

    handleClickCard(data: CardDashboard): void {
        this.handleClick.emit(data);
    }
}
