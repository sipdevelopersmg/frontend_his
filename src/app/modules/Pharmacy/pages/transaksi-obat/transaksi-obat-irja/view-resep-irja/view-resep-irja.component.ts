import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GridModel, GridComponent } from '@syncfusion/ej2-angular-grids';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UtilityHelperService } from 'src/app/helpers/utility/utility-helper.service';
import { ResepDokterService } from 'src/app/modules/dashboard-dokter/services/resep-dokter/resep-dokter.service';
import { TransaksiObatIrjaService } from 'src/app/modules/Pharmacy/services/transaksi-obat/transaksi-obat-irja/transaksi-obat-irja.service';
import { ButtonNavModel } from 'src/app/modules/shared/components/molecules/button/mol-button-nav/mol-button-nav.component';
import { OrgLookUpHirarkiComponent } from 'src/app/modules/shared/components/organism/loockUp/org-look-up-hirarki/org-look-up-hirarki.component';
import { EncryptionService } from 'src/app/modules/shared/services/encryption.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import * as GridConfig from '../json/grid.config.json'
@Component({
  selector: 'app-view-resep-irja',
  templateUrl: './view-resep-irja.component.html',
  styleUrls: ['./view-resep-irja.component.css']
})
export class ViewResepIrjaComponent implements OnInit {

  ButtonNav: ButtonNavModel[] = [
    { Id: 'kembali', Captions: 'Kembali', Icons1: 'fa-arrow-left fa-sm' },
    // { Id: 'simpan', Captions: 'Simpan Penjualan Resep', Icons1: 'fa-save fa-sm' },
  ];

  @ViewChild('LookupRacikan') LookupRacikan: OrgLookUpHirarkiComponent;

    GridConfig = GridConfig;
    inputFieldState = 'detail';
    childGrid: GridModel;

    @ViewChild('GridResepRacikan') GridResepRacikan: GridComponent;
    @ViewChild('itemTemplate') itemTemplate: TemplateRef<any>;
    @ViewChild('modalTambahanHariResep') modalTambahanHariResep: TemplateRef<any>;

    modalRef: BsModalRef;

    public keterangan = (field: string, data1: object) => {
        return  data1['nama_obat'] +', '+
                data1['ket_label'] +', '+
                data1['ket_aturan'];
    }

    public quantity = (field: string, data1: object) => {
        return  data1['qty_resep'] + ' ' +data1['nama_satuan'] 
    }

    public totalharga = (field: string, data1: object) => {
        return (data1['is_racikan'])? data1['harga_jual_apotek'] : data1['qty_resep'] * data1['harga_jual_apotek'] 
    }

    dataSourceChild:any = [];
    dataSource:any = [];
    dataHeader:any = [];
    formInput: FormGroup;
    imageSrc: string;
    constructor(
        public resepDokterService: ResepDokterService,
        public transaksiObatIrjaService:TransaksiObatIrjaService,
        private router:Router,
        private encryptionService: EncryptionService,
        private activatedRoute: ActivatedRoute,
        private utilityService:UtilityService,
        private utilityHelperService:UtilityHelperService,
        private formBuilder: FormBuilder,
    ) { }

    ngOnInit(): void {

        this.formInput = this.formBuilder.group({
            pasien: ['', []],
            poli: ['', []],
            dokter : ['', []],
            umur : ['', []],
            total_bayar_resep: [0,[]]
        });


        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        }
    }

    ngAfterViewInit(): void {
        let id = this.encryptionService.decrypt(this.activatedRoute.snapshot.params["id"]);
        console.log(id);
        this.onLoadDetailData(id);
    }

    onLoadDetailData(id) {
       this.resepDokterService.onGetById(id).subscribe((result)=>{
           this.dataHeader = result.data;
           this.dataSource = result.data.details;
           this.GridResepRacikan.refresh();
           this.mapingRacikan(result.data.details);
        //    let umur = this.utilityHelperService.getAge(result.data.tgl_lahir);
           this.formInput.setValue({
               poli:result.data.nama_poli,
               pasien:result.data.nama_pasien,
               dokter: result.data.nama_dokter,
               umur: result.data.tgl_lahir,
               total_bayar_resep: 0
           })
           this.imageSrc = result.data.nama_foto
       })
    }

    mapingRacikan(details){
        this.dataSourceChild = [];
        details.map((item) => {
            this.dataSourceChild.push(...item.racikans);
        });
        
        this.childGrid = {
            dataSource: this.dataSourceChild,
            queryString: "resep_detail_id",
            rowHeight: 30,
            allowResizing: true,
            allowTextWrap: true,
            textWrapSettings: { wrapMode: 'Both' },
            columns: this.GridConfig.columnsChild
        }
    }

    rowDataBound(args: any) {
        var is_racikan = args.data.is_racikan;
        if (!is_racikan) {
            //here hide which parent row has no child records
            args.row.querySelector('td').innerHTML = " ";
            args.row.querySelector('td').className = "e-customizedExpandcell";
        } else {
            // args.row.classList.add('is-racikan');
        }
    }
  
  
    onDataBound(){
        this.GridResepRacikan.detailRowModule.expandAll();
    }

    handleSelected(args){
        // this.total_bayar_resep.setValue(0);
        let tot =0
        this.GridResepRacikan.getSelectedRecords().map((item)=>{
            let har = item['is_racikan'] ? item['harga_jual_apotek'] : item['qty_resep'] * item['harga_jual_apotek'];
            tot +=  har;
            this.total_bayar_resep.setValue(tot);
        });
    }
   
    onClickButtonNav(args: any): void {
        switch (args) {
            case "kembali":
                this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                break;
            case "simpan":
                let Data = this.dataHeader
                Data.details = this.GridResepRacikan.getSelectedRecords()
                this.transaksiObatIrjaService.Insert(Data).subscribe((result)=>{
                    this.utilityService.onShowingCustomAlert('success', 'Data Berhasil Tersimpan', result.message)
                    .then(() => {
                        this.router.navigateByUrl('dashboard/Pharmacy/antrian-farmasi');
                    });
                });
                break;
            default:
                break;
        }
    }

    get total_bayar_resep (){return this.formInput.get('total_bayar_resep')}

}
