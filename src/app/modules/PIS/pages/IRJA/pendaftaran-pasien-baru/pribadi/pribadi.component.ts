import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'tab-pendaftaran-pasien-baru-pribadi',
    templateUrl: './pribadi.component.html',
    styleUrls: ['./pribadi.component.css']
})
export class PribadiComponent implements OnInit {

    constructor() { }

    value = '';
    materials = [
        { "mat_wood": "Wood" },
        { "mat_metal": "Metal" },
        { "mat_plastic": "Plastic" }
    ]

    ngOnInit(): void {
    }

}
