import { Component, OnInit } from '@angular/core';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { ResepDokterService } from '../../services/resep-dokter/resep-dokter.service';
import moment from 'moment';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import Swal from 'sweetalert2';

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
                this.resepDokterService.setDataResep([]);
                break;
            default:
                break;
        }
    }

    async onGetGridResepDatasource() {
        let Data ={
            id_dokter:1,
            id_register:1,
            id_outlet:1,
            jenis_rawat:'J',
            tanggal_resep:this.currentTanggal
        }

        let detail = await this.resepDokterService.dataDetail
        // console.log('asli',detail);

        let newdetail = detail.filter((item)=>{
            return  item.is_racikan && !item.set_racikan_id
        })
        // console.log('update',newdetail);
        let baru = 0
        if(newdetail.length > 0){
            Swal.fire({
                title: 'Apakah Anda Ingin Menyimapan Racikan Baru ke dalam Setting Racikan dokter?',
                text: "Racikan akan bisa di gunakan lagi untuk template",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Iya, Saya Yakin',
                focusCancel: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    baru = 1
                }else{
                    baru = 0
                }
                this.resepDokterService.Insert(Data,baru).subscribe((result)=>{
                    this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                        .then(() => {
                            this.resepDokterService.reset();
                        });
                    console.log(result);
                })
            });
        }else{
            this.resepDokterService.Insert(Data,0).subscribe((result)=>{
                this.utilityService.onShowingCustomAlert('success', 'Berhasil Tambah Data Baru', result.message)
                    .then(() => {
                        this.resepDokterService.reset();
                    });
                console.log(result);
            })
        }
        
    }
}
