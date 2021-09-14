import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-detail-rekam-medis',
    templateUrl: './detail-rekam-medis.component.html',
    styleUrls: ['./detail-rekam-medis.component.css']
})
export class DetailRekamMedisComponent implements OnInit {

    @Input('DetailId') DetailId: string;
    @Input('DetailCaption') DetailCaption: string;

    constructor() { }

    ngOnInit(): void {
    }

}
