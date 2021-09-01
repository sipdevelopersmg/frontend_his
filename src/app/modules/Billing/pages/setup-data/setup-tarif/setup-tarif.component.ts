import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-setup-tarif',
    templateUrl: './setup-tarif.component.html',
    styleUrls: ['./setup-tarif.component.css']
})
export class SetupTarifComponent implements OnInit {

    constructor(
        private bsModalService: BsModalService
    ) { }

    ngOnInit(): void {
    }


}
