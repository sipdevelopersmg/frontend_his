import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-setup-kode-tarif',
    templateUrl: './setup-kode-tarif.component.html',
    styleUrls: ['./setup-kode-tarif.component.css']
})
export class SetupKodeTarifComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    handleClickNew($event: MouseEvent) {
        console.log('new');

        console.log($event);
    }

    handleClickEdit($event) {
        console.log('edit')
    }

    handleClickDelete($event) {
        console.log('delete')
    }

}
