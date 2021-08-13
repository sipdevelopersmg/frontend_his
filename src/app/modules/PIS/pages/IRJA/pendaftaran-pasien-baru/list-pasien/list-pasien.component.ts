import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import * as GridConfig from '../json/list-pasien.config.json';

@Component({
    selector: 'app-list-pasien',
    templateUrl: './list-pasien.component.html',
    styleUrls: ['./list-pasien.component.css']
})
export class ListPasienComponent implements OnInit {

    GridConfig = GridConfig;

    GridDataToolbar = [
        { text: 'Cari', tooltipText: 'Cari Data Pasien', prefixIcon: 'fas fa-plus fa-sm', id: 'add' },
    ];

    ButtonNav: ButtonNavModel[] = [
        { Id: "add", Captions: "Tambah", Icons1: "fas fa-plus fa-sm" },
        { Id: "edit", Captions: "Edit", Icons1: "fas fa-edit fa-sm" },
        { Id: "delete", Captions: "Hapus", Icons1: "fas fa-trash-alt fa-sm" },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
