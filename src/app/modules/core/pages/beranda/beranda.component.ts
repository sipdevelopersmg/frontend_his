import { Component, OnInit } from '@angular/core';
import { HttpOperationService } from 'src/app/modules/shared/services/http-operation.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-beranda',
    templateUrl: './beranda.component.html',
    styleUrls: ['./beranda.component.css']
})
export class BerandaComponent implements OnInit {

    constructor(private httpOperationService: HttpOperationService) { }

    ngOnInit(): void {

    }

}
