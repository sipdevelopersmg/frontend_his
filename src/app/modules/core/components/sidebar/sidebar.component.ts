import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'mol-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class MolSidebarComponent implements OnInit {

    @Input('SidebarCollapse') SidebarCollapse: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }
}
