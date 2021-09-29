import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { ResepDokterService } from '../../services/resep-dokter/resep-dokter.service';
import moment from 'moment';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
    selector: 'app-resep',
    templateUrl: './resep.component.html',
    styleUrls: ['./resep.component.css']
})
export class ResepComponent implements OnInit {

    /**
    * Variable Button Nav
    * @ButtonNav: ButtonNavModel[]
    */
    ButtonNav: ButtonNavModel[] = [
        { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
        { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
    ];

    Data: any[] = [];

    currentTanggal:string;

    constructor(
        private resepDokterService: ResepDokterService,
        private utilityService: UtilityService
    ) { }

    ngOnInit(): void { 
        this.currentTanggal = moment().format()
    }

    onClickButtonNav(args: any): void {
        switch (args) {
            case "Reset":
                break;
            case "Simpan":
                this.onGetGridResepDatasource();
                break;
            default:
                break;
        }
    }

    onGetSelectedTabId(args: any): void {
        switch (args) {
            case "InputResep":
                this.ButtonNav = [
                    { Id: "Reset", Icons1: "fas fa-undo fa-sm", Captions: "Reset" },
                    { Id: "Simpan", Icons1: "fas fa-save fa-sm", Captions: "Simpan" },
                ];
                break;
            case "HistoryResep":
                this.ButtonNav = [];
                break;
            default:
                break;
        }
    }

    onGetGridResepDatasource() {
        let Data ={
            id_dokter:1,
            id_register:1,
            id_outlet:1,
            jenis_rawat:'J',
            tanggal_resep:this.currentTanggal
        }
        this.resepDokterService.Insert(Data,1).subscribe((result)=>{
            this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                .then(() => {
                    this.resepDokterService.reset();
                });
            console.log(result);
        })
    }
}
